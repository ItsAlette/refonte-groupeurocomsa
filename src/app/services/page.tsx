import Banner from "@/components/Banner";
import Image from "next/image";
import Footer from "@/components/Footer";
import img1 from "@/app/pictures/Barge.jpg";
import img2 from "@/app/pictures/Venture Capital.jpg";
import img3 from "@/app/pictures/Finance.jpg";
import img4 from "@/app/pictures/Gold2.png";
import img5 from "@/app/pictures/diamond.jpg";
import img6 from "@/app/pictures/em.png";
import img7 from "@/app/pictures/Lai-camphuchia-300x300.jpeg";


export default function ServicesPage() {
  return (
    <main>
      <section className="bg-white  sm:mt-20">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-">
          {/* Header */}
          <div className="max-w-7xl mt-24 ">
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

          {/*Les 3 blocks */}
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

                  <div className="overflow-hidden rounded-2xl w-[75%] border bg-gray-50  mx-auto ">
                    <img
                      className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
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
                      className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
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
                      className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-700"
                      src="https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
                      alt="feature image 1"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>


             <div className="mt-4 mx-auto h-[2px] w-16 rounded-full bg-[#233876]" />
              <p className="mx-auto mt-6 mb-5 max-w-4xl text-center text-xl font-semibold leading-relaxed text-gray-900 sm:text-2xl">
                GESA is dedicated to provide the best secured and efficient solutions for your
                commodities procurement needs as well as your financial and investment
                goals.
              </p>

              
            

          

          {/* Section Services */}
              <div className="mx-auto max-w-7xl py-2">
                <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  
                  {/* Bloc 1 - Simple */}
                  <div className="row-span-1 lg:row-span-2 flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-hover hover:shadow-md">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Commodities</h3>
                        <p className="mt-2 text-base sm:text-base text-gray-500">GESA can assist you to secure your commodities procurement needs from selected state-
                          owned and private producers for Oil and Gas, Raw materials and Food supply.</p>
                      </div>
                    </div>
                      <div className="mt-4 overflow-hidden rounded-xl border border-gray-50 aspect-square sm:aspect-video lg:aspect-auto h-full">
                      <Image src={img1} className="h-full w-full object-cover" alt="Telemedicine" />
                    </div>
                  </div>

                  {/* Bloc 2 - Avec Image */}
                  <div className="row-span-1 lg:row-span-2 flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3 mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Investment advisory and services.</h3>
                        <p className="mt-2 text-base sm:text-base text-gray-500">Wide range of venture capital and investment opportunities.</p>
                      </div>
                    </div>
                    <div className="mt-4 overflow-hidden rounded-xl border border-gray-50 aspect-square sm:aspect-video lg:aspect-auto h-full">
                      <Image src={img2} className="h-full w-full object-cover" alt="Telemedicine" />
                    </div>
                  </div>

                  {/* Bloc 3 - Simple */}
                  <div className="row-span-1 lg:row-span-2 flex flex-col rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">Finance structuring</h3>
                        <p className="mt-2 text-base sm:text-base text-gray-500">GESA is involved in bank instrument providing from selected reliable financial institutions and banks.</p>
                      </div>
                    </div>
                      <div className="mt-4 overflow-hidden rounded-xl border border-gray-50 aspect-square sm:aspect-video lg:aspect-auto h-full">
                      <Image src={img3} className="h-full w-full object-cover" alt="Telemedicine" />
                    </div>
                  </div>
                </div>
              </div>

         {/* Videos */}
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr] lg:items-stretch lg:gap-20">
                   <div className="flex flex-col space-y-6">
                    <div className="space-y-4">
                      <p className="text-sm font-bold uppercase tracking-widest text-[#233876]">
                        we help you structuring the transaction
                      </p>
                      <h2 className="mx-auto mt-2 mb-4 max-w-4xl text-xl font-semibold leading-relaxed text-gray-900 sm:text-2xl">
                        Financial structuration of transactions
                      </h2>
                      <div className="h-[2px] w-16 rounded-full bg-[#233876]"></div>
                      <p className="text-lg leading-relaxed text-gray-600">
                        Our dedicated team of banking and law professionals would assist you and
                        provide you with the best service.
                      </p>
                    </div>           
                  </div>
                  
                  <div className="flex flex-col space-y-6 ">
                    <div className="space-y-4">
                      <p className="text-sm font-bold uppercase tracking-widest text-[#233876]">
                        YOUR OIL PRODUCTS PROCUREMENT PARTNER
                      </p>
                      <h2 className="mx-auto mt-2 mb-4 max-w-4xl text-xl font-semibold leading-relaxed text-gray-900 sm:text-2xl">
                        Crude and refined Oil &amp; LNG and LPG procurement
                      </h2>
                      <div className="h-[2px] w-16 rounded-full bg-[#233876]"></div>
                      <p className="text-lg leading-relaxed text-gray-600">
                        We are specialized in crude, refined oil &amp; LNG and LPG supply, only direct sales,
                        no intermediaries..
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                      {/* Vidéo 1 */}
                      <div className="group relative overflow-hidden rounded-[2rem] shadow-md bg-gray-900 aspect-video sm:aspect-auto"> 
                        <iframe
                          className="h-full w-full object-cover"
                          src="https://www.youtube.com/embed/WyZTuzUzR68"
                          title="Liquefied Natural Gas (LNG) 101"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen>
                        </iframe>
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
                      </div>
                      
                      {/* Vidéo 2 */}
                      <div className="group relative overflow-hidden rounded-[2rem] shadow-md bg-gray-900 aspect-video sm:aspect-auto">
                            <iframe
                            className="h-full w-full object-cover"
                            src="https://www.youtube.com/embed/KhXDHl4QozE"
                            title="How LPG Goes From Invisible Gas to Portable Fuel"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                          </iframe>
                          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10"></div>
                      </div>
                    </div>               
                  </div>
                  
                 

                  
                </div>
              </div>



            
            


 


          {/* Ressources */}

          
          <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
           <div className="space-y-4">
                      <h2 className="mx-auto mt-2 mb-4 max-w-4xl text-xl font-semibold leading-relaxed text-gray-900 sm:text-2xl">
                        Strategic supplies
                      </h2>
                      <div className="h-[2px] w-16 rounded-full bg-[#233876]"></div>
                      { /*  <div className="grid gap-8 sm:grid-cols-2">
                        <div className="relative pl-6 border-l-2 border-gray-200">
                          <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold text-gray-700">Raw Materials</h3>
                          </div>
                          <ul className="text-lg text-gray-600">
                            <li>Gold, Diamonds, Rubies</li>
                            <li>Aluminium, Copper, Platinum</li>
                          </ul>
                        </div>

                        <div className="relative pl-6 border-l-2 border-gray-200">
                          <div className="flex items-center gap-3 mb-4">
                            <h3 className="text-xl font-bold text-gray-700">Food Supply</h3>
                          </div>
                          <ul className="text-lg text-gray-600">
                            <li>Rice, Sugar</li>
                            <li>Palm & Sunflower Oil</li>
                            <li>Water</li>
                          </ul>
                        </div>
                      </div>*/}
                    </div> 
              <div className="flex self-end items-center gap-2 text-right text-sm font-medium text-gray-400 italic animate-pulse">
                <span>Swipe to explore</span>
                <span>→</span>
              </div>
            </div>

            <div className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              
             

              <div className="sm:w-full lg:w-[40%] md:w-[40%]  flex-shrink-0 snap-center group">
                <div className="relative h-full w-full object-cover overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-all duration-500 hover:shadow-[#233876]/20">
                  <img src="https://images.unsplash.com/photo-1624365168056-daf44387e2ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdvbGR8ZW58MHx8MHx8fDA%3D" alt="Food Supply" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <h3 className="text-2xl font-bold mb-4">Raw Materials</h3>
                    <ul className="space-y-2 text-sm text-gray-200">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Gold, Diamonds, Rubies
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Aluminum, Copper, Platinum
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

               <div className="min-w-[160px] sm:min-w-[220px] md:min-w-[200px] flex-shrink-0 snap-center group">
                <div className="relative h-[180px] sm:h-[250px] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-all duration-500 hover:shadow-[#233876]/20">
                  <img src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800" alt="Food Supply" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                    <h3 className="text-2xl font-bold mb-4">Food Supply</h3>
                      <ul className="space-y-2 text-sm text-gray-200">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Rice, Sugar
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-white"></span> Palm & Sunflower Oil, Water
                        </li>
                      </ul>
                  </div>
                </div>
              </div>

               <div className="min-w-[160px] sm:min-w-[220px] md:min-w-[200px] flex-shrink-0 snap-center group">
                <div className="relative h-[180px] sm:h-[250px] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-all duration-500 hover:shadow-[#233876]/20">
                  <img src="https://images.unsplash.com/photo-1638517747420-c31bef7cf640?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpYW1vbmRzfGVufDB8fDB8fHww" alt="Food Supply" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                  </div>
                </div>
              </div>

               <div className="min-w-[160px] sm:min-w-[220px] md:min-w-[200px] flex-shrink-0 snap-center group">
                <div className="relative h-[180px] sm:h-[250px] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-all duration-500 hover:shadow-[#233876]/20">
                  <img src="https://images.unsplash.com/photo-1709651808265-977ed7ef78c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VnYXJ8ZW58MHx8MHx8fDA%3D" alt="Food Supply" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                  </div>
                </div>
              </div>

               <div className="min-w-[160px] sm:min-w-[220px] md:min-w-[200px] flex-shrink-0 snap-center group">
                <div className="relative h-[180px] sm:h-[250px] overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white transition-all duration-500 hover:shadow-[#233876]/20">
                  <img src="https://images.unsplash.com/photo-1625479610681-f789345a8157?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1lcmF1ZGV8ZW58MHx8MHx8fDA%3D" alt="Food Supply" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white">
                  </div>
                </div>
              </div>
              

              
            </div>
          </div>


          
                  
          {/* Bouton contact */}
              <div className="flex justify-center py-12">
                <a href="/contact-us" className="rounded-full bg-[#233876] px-10 py-4 text-white font-semibold shadow-lg hover:opacity-90 transition">
                  Contact us →
                </a>
              </div>


              


        </div>
     </section>

   

      <Footer />
    </main>
  );
}
  
