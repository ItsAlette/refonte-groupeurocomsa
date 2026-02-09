import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-white  sm:mt-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-7xl mt-28">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#233876]">
              SERVICES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Events with the measurement of your ambitions
            </h2>
            <div className="mt-4 h-[2px] w-16 rounded-full bg-[#233876]" />
            <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-base lg:text-lg">
              True maestro, GESA deals with the design and organization of demonstrations of great scale.
              Events non-profit, sports, concerts, political debates, seminars, outings, trips… GESA organizes
              all types’ events within the international level. Organization (selection and scenography of the
              place, selection of the people receiving benefits, management of the artists), the communication
              (strategy, search for partners’ media/sponsors, media) and the artistic means available are the
              key factors which makes each event a success.
            </p>

            
          </div>

          {/* Dernier block */}
    <div className="mx-auto max-w-6xl pb-10 pt-6">

      <div className=" grid gap-12">
        {/* Bloc 1 */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            
            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                <span className="mt-1 mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#233876]/10 text-[#233876] font-bold">
                  1 
                </span> 
             Know-how and knowledge of the media
            </h3>
            <p className="mt-4 text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
 Posters, booklets, flyers, Web sites and Outsourcing… Strengthening support with the service of the demonstrations organized by GESA, our creators control the most varied communications tools.            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-gray-50 w-[75%] mx-auto">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1543242594-c8bae8b9e708?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1lZGlhfGVufDB8fDB8fHww"
              alt="feature image 1"
              loading="lazy"
            />
          </div>
        </div>

       {/* Bloc 2 */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1 overflow-hidden rounded-2xl border bg-gray-50 w-[75%] mx-auto">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1596008194705-2091cd6764d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2JqZWN0aWZ8ZW58MHx8MHx8fDA%3D"
              alt="feature image 2"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              <span className="mt-1 mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#233876]/10 text-[#233876] font-bold">
                  2
                </span> 
Powerful advices towards your success            </h3>
            <p className="mt-4 text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
With thorough analyzes, elaborate market research and targeted urban surveys, GESA elaborated, strong and powerful strategies to help you reach your target and to guarantee full success.           </p>
          </div>
        </div>

         {/* Bloc 3 */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            
            <h3 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                <span className="mt-1 mr-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#233876]/10 text-[#233876] font-bold">
                  3 
                </span> 
             Concluding connections
            </h3>
            <p className="mt-4 text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
It is men who make the company, and GESA ensures you of the best connection, thanks to plenty of relations and an established and indisputable work resume, to bring to decisive meetings on all continents, for a better development of your projects, whatever your field of activity, to buy, sell or optimize your products and services. </p>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-gray-50 w-[75%] mx-auto">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
              alt="feature image 1"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>


          

          <div className="flex flex-wrap items-center gap-4 px-4 pb-10 sm:px-0">
            <a
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-full bg-[#233876] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Contact us
              <span className="ml-2">→</span>
            </a>

          </div>
        </div>
     </section>

      <Footer />
    </main>
  );
}
  
