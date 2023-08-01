import { Promo, CollectionsBanner } from "@/components";

export default function Home() {
  return (
    <article className="w-full h-full flex flex-col gap-4 pt-10 justify-center">
      <section className="py-10">
        <Promo />
      </section>
      <section className="bg-highlight">
        <CollectionsBanner />
      </section>
    </article>
  );
}
