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
      <section className="mx-auto max-w-6xl px-6 pt-20">
        
          {/* YOU ARE */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold tracking-widest text-gray-900">
              YOU ARE
            </p>
  
            <ul className="mt-6 space-y-4">
              {items.map((label) => (
                <li key={label} className="flex items-center gap-3 text-lg text-gray-700">
                  <span className="text-[#1E429F]">▶</span>
                  <span className="hover:text-gray-900 cursor-pointer">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        
      </section>
    );
  }
  
