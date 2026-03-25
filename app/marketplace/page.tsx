import { MarketplaceCard } from "@/components/marketplace-card";
import { SectionHeading } from "@/components/section-heading";
import { marketplaceCards } from "@/lib/site-data";

export default function MarketplacePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
      <SectionHeading
        eyebrow="Marketplace"
        title="Un e-commerce pensato come wallet di servizi."
        description="Acquista card di diverso importo e ritrova lo stesso valore, o un bonus, nel proprio saldo spendibile all’interno della piattaforma."
      />
      <div className="mt-12 grid gap-6 xl:grid-cols-3">
        {marketplaceCards.map((product) => (
          <MarketplaceCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
