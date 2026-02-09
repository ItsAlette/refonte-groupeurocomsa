import YouAreCard from "@/components/YouAre";
import Footer from "@/components/Footer";
import Image from "next/image";
import img1 from "./pictures/img1.png";
import img2 from "./pictures/img2.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

{/*
      <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              
              <div className="flex flex-col items-center text-center font-light text-gray-700 sm:text-lg dark:text-gray-400">
                <img className="mb-5 mt-10 rounded-xl" src="/Logo_EUROCOMSA.jpg" alt="Group Eurocom (SA) logo" />
                
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  You want your products to be the best sellers </h2>
                  <p>We offer you the unique urban marketing support in communication to set up, develop and adapt your products to your customer’s real needs
                  </p>
              </div>
          </div>
      </section> */}

      <section className="bg-white py-2 sm:py-16">
        <div className="mx-auto max-w-7xl px-4  sm:px-6">
          <div className="relative overflow-hidden rounded-b-[2.5rem] bg-[#0b1220] shadow-2xl ring-1 ring-black/10">
            
            <div className="pointer-events-none absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-[#233876]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -right-40 h-[34rem] w-[34rem] rounded-full bg-white/10 blur-3xl" />

            <div className="relative grid gap-10 px-6 py-2 sm:px-10 sm:py-10 lg:grid-cols-[3fr_1fr] lg:items-center">
           
              <div className="text-center lg:text-center">
                {/* Logo */}
                <div className="mx-auto mb-12 mt-12 w-full max-w-xl rounded-2xl bg-white/95 p-3 shadow-xl md:mt-0">
                  <img
                    src="/Logo_EUROCOMSA.jpg"
                    alt="Group Eurocom (SA) logo"
                    className="w-full rounded-xl object-cover"
                  />
                </div>

                <h2 className="mx-auto max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  You want your products to be the best sellers
                </h2>

                {/* --- */}
                <div className="mx-auto mt-8 h-[2px] w-24 rounded-full bg-white/35" />

                {/* Description */}
                <p className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
                  We offer a unique urban marketing support in communication to help you
                  set up, develop and adapt your products to your customer’s real needs.
                </p>
              </div>

              <div className="lg:pl-6">
                <div className="rounded-3xl border border-white/5 bg-white/2 p-8 backdrop-blur-xl shadow-lg">
                  <div className="mb-6 flex items-center justify-between">
                    <p className="text-xs font-semibold tracking-[0.3em] text-white/70">
                      YOU ARE
                    </p>
                   
                  </div>

                  <div className="text-white">
                    <YouAreCard />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-7 rounded-b-[2.5rem] bg-white/5" />
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
                  <Image
                    className="w-full rounded-lg"
                    src={img1}
                    alt="office content 1"
                  />
                  <Image
                    className="mt-4 w-full rounded-lg lg:mt-10"
                    src={img2}
                    alt="office content 2"
                  />
              </div>
          </div>
      </section>

      


    

     
      <Footer/>
    </main>

    
  );

  
}
