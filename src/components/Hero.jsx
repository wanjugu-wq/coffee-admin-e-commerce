import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="px-6 py-20 grid md:grid-cols-3 gap-8">
        <div className="bg-[#f7f3ee] p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            Artisan Coffee
          </h2>
          <p>Handcrafted premium coffee blends.</p>
        </div>

        <div className="bg-[#2a221e] p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            Fresh Pastries
          </h2>
          <p>Warm pastries baked daily.</p>
        </div>

        <div className="bg-[#2a221e] p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4 text-amber-400">
            Cozy Environment
          </h2>

          <p>Rustic tavern atmosphere for everyone.</p>
        </div>
      </section>
    </div>
  );
}
