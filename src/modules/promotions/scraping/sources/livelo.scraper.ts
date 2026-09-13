import axios from "axios";
import * as cheerio from "cheerio";

interface ScrapedPromotion {
  fingerprint?: string;
  partnerName?: string;
  image?: string;
  link?: string;
  pointsPerReal: number;
  source: string;
  sourceUrl?: string;
  expiresAt?: Date;
}

const source = {
  name: "Livelo",
  url: "https://www.livelo.com.br/juntar-pontos/todos-os-parceiros",
};

export const scrapeLiveloPromotions = async () => {
  const { data: html } = await axios.get(source.url);

  const $ = cheerio.load(html);

  let promotions: ScrapedPromotion[] = [];

  const partners = $('[data-testid="div_PartnerCard"]');

  partners.each((index, element) => {
    console.log(`Processing document ${index + 1}/${partners.length}`);

    const partner = $(element);

    const partnerName = partner
      .find('[data-testid="img_PartnerCard_partnerImage"]')
      .attr("alt")
      ?.replace("Logo", "")
      .trim();

    console.log(`Partner: ${partnerName}`);

    const image = partner
      .find('[data-testid="img_PartnerCard_partnerImage"]')
      .attr("src");

    const link = partner
      .closest('[data-testid="a_PartnerCard_card_link"]')
      .attr("href");

    const parityText = partner.find('[data-testid^="parity-card"]').text();

    console.log(`Parity: ${parityText}`);

    const pointsPerReal = Number(
      parityText.match(/(\d+(?:[.,]\d+)?)\s+pontos?\s+por\s+R\$\s*1/)?.[1],
    );

    const promotion =
      partner.find('[data-testid="span_PartnerCard_promotionTag"]').length > 0;

    console.log(`Promotion: ${promotion}`);

    if (!promotion) {
      return;
    }

    promotions.push({
      partnerName,
      image,
      link,
      pointsPerReal,
      source: source.name,
      sourceUrl: source.url,
    });

    console.log(`Document ${index + 1} processed successfully`);
  });

  return promotions;
};
