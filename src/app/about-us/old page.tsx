import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Image from "next/image";
import aboutUs from "@/app/pictures/about-us.png";

export default function AboutUsPage() {
    return (
      <main className="">
        <Banner/>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              
              {/* IMAGE */}
              <div className="relative h-[200px] w-full max-w-4xl  sm:h-[200px]  ">
                <Image
                  src={aboutUs}
                  alt="About us"
                  fill
                  className="object-cover"
                />
              </div>

              {/* TEXT */}
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  The company has as an aim in Seychelles and abroad
                </h2>

                <div className="mt-4 h-[2px] w-16 rounded-full bg-[#233876]" />

                <ul className="mt-8 space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                    Consultancy, management of Information and Technology (IT)
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                    Strategy management
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                    Communication
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                    Promotion
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                    Organization of spectacles and event in any kind
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                    Councils with the companies
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2  w-2 mb-6 rounded-full bg-[#233876]" />
                    All operations industrial, commercial and financial
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

       

        <Footer/>
      </main>
    );
  }
  