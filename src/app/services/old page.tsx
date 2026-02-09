import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-white mt-26">
        <div className="mx-auto max-w-7xl px-3">
          {/* Header */}
          <div className="max-w-7xl px-6">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#233876]">
              SERVICES
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Events with the measurement of your ambitions
            </h2>
            <div className="mt-4 h-[2px] w-16 rounded-full bg-[#233876]" />
            <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              True maestro, GESA deals with the design and organization of demonstrations of great scale.
              Events non-profit, sports, concerts, political debates, seminars, outings, trips… GESA organizes
              all types’ events within the international level. Organization (selection and scenography of the
              place, selection of the people receiving benefits, management of the artists), the communication
              (strategy, search for partners’ media/sponsors, media) and the artistic means available are the
              key factors which makes each event a success.
            </p>

            <p className="mt-4 text-base font-semibold text-gray-800">
              GESA provides qualified teams to make your event a real success
            </p>
          </div>

          {/* Dernier block */}
    <div className="mx-auto max-w-6xl px-6 pb-10 pt-2">

      <div className="mt-16 grid gap-12">
        {/* Bloc 1 */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
             With over ten years of experience
            </h3>
            <p className="mt-4 text-lg font-normal leading-relaxed text-gray-600">
              GESA combines event production, strategic communication, and media expertise to deliver high-impact projects.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border bg-gray-50">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              alt="feature image 1"
              loading="lazy"
            />
          </div>
        </div>

       {/* Bloc 2 */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border bg-gray-50">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="feature image 2"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Our team brings together
            </h3>
            <p className="mt-4 text-lg font-normal leading-relaxed text-gray-600">
              Urban marketing specialists, public relations consultants, graphic designers, webmasters and IT technicians, specialists in medias and on the ground.
            </p>
          </div>
        </div>
      </div>
    </div>
    

          {/* Les cards */}
          <div className="mt-6 px-8 grid gap-6 md:grid-cols-2">
            {/* 1 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#233876]/10 text-[#233876] font-bold">
                  1
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Know-how and knowledge of the media
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    Posters, booklets, flyers, Web sites and Outsourcing… Strengthening support with the
                    service of the demonstrations organized by GESA, our creators control the most varied
                    communications tools.
                  </p>
                </div>
              </div>
            </div>

            {/*  2 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#233876]/10 text-[#233876] font-bold">
                  2
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Powerful advices towards your success
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    With thorough analyzes, elaborate market research and targeted urban surveys, GESA
                    elaborated, strong and powerful strategies to help you reach your target and to guarantee
                    full success.
                  </p>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md md:col-span-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#233876]/10 text-[#233876] font-bold">
                  3
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Concluding connections
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-gray-600">
                    It is men who make the company, and GESA ensures you of the best connection, thanks to
                    plenty of relations and an established and indisputable work resume, to bring to decisive
                    meetings on all continents, for a better development of your projects, whatever your field
                    of activity, to buy, sell or optimize your products and services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex flex-wrap items-center gap-4 p-8">
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
  
