export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Des solutions digitales au service de votre croissance
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Nous accompagnons les entreprises dans leur transformation digitale
          avec des solutions modernes, performantes et sur mesure.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-black text-white hover:bg-gray-800 transition">
            Nous contacter
          </button>
          <button className="px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition">
            Découvrir nos services
          </button>
        </div>
      </section>
    </main>
  );
}
