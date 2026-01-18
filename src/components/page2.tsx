import YouAreSection from "@/components/YouAreSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">


      <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <YouAreSection/>
              </div>
              <div className="font-light text-gray-700 sm:text-lg dark:text-gray-400">
                <img className="rounded-xl mb-5" src="/Logo_EUROCOMSA.jpg" alt="Group Eurocom (SA) logo" />
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  You want your products to be the best sellers </h2>
                  <p>We offer you the unique urban marketing support in communication to set up, develop and adapt your products to your customer’s real needs
                  </p>
              </div>
          </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
          <div className="gap-4 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:pt-0 lg:px-16">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  With more than ten years of experience and know-how</h2>
      
                  <p>
                    
                  </p>
                  <ul className="mt-4 grid gap-2 text-gray-600">
                    {[
                      "Experts in urban marketing, advice and management",
                      "Consultants in public relations",
                      "Graphic designers",
                      "Webmasters and IT technicians",
                      "Specialists in medias and on the ground",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#233876]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
              </div>
              <div className="grid  grid-cols-2 gap-4 mt-8 mx-auto lg:mx-0">
                  <img
                    className="w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
                    alt="office content 1"
                  />
                  <img
                    className="mt-4 w-full lg:mt-10 rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
                    alt="office content 2"
                  />
              </div>
          </div>
      </section>

      


    

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
