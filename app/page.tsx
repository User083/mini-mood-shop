import { Promo, CollectionsBanner } from "@/components";

export default function Home() {
  return (
    <article className="w-full h-full flex flex-col">
      <section className="bg-primary">
        <Promo />
      </section>
      <section>
        <CollectionsBanner />
      </section>
    </article>
  );
}
