export default function YouAreSection() {
    const items = [
      "A start up",
      "A medium-sized company",
      "A large corporation",
      "An artist",
      "An independent worker",
      "A politician",
      "A country",
    ];
  
    return (
      <section className="mx-auto max-w-6xl px-6 py-20">
        {/* Titre + sous-titre (comme l'image) */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900">
            Home to the software teams
          </h2>
          <p className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-gray-500">
            Meet your developers where they already are. GitHub is home to over 40
            million developers and the world&apos;s largest open source community.
          </p>
        </div>
  
        {/* Stats + YOU ARE */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-start">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-10 text-center">
            <div>
              <div className="text-5xl font-extrabold text-gray-900">73M+</div>
              <div className="mt-3 text-2xl text-gray-500">developers</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-gray-900">1B+</div>
              <div className="mt-3 text-2xl text-gray-500">contributors</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold text-gray-900">4M+</div>
              <div className="mt-3 text-2xl text-gray-500">organizations</div>
            </div>
          </div>
  
          {/* YOU ARE */}
          <div className="rounded-2xl border bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold tracking-widest text-gray-900">
              YOU ARE
            </p>
  
            <ul className="mt-6 space-y-4">
              {items.map((label) => (
                <li key={label} className="flex items-center gap-3 text-lg text-gray-700">
                  <span className="text-indigo-500">▶</span>
                  <span className="hover:text-gray-900 cursor-pointer">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  }
  