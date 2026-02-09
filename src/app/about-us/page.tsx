import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Image from "next/image";
import aboutUs from "@/app/pictures/about-us.png";

export default function AboutUsPage() {
    return (
      <main className="">


     {/* Block 1 */}
        <div className="mx-auto max-w-6xl px-6 pt-24">
          
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-gray-900">About Us</h1>
              <p className="mx-auto text-lg font-normal mt-4 max-w-3xl text-gray-500">
              We support clients in Seychelles and abroad through consulting, strategy, communication, promotion, IT management, and event organization. Our mission is to deliver structured solutions adapted to every business need.
              </p>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
              {/* Image */}
              <div className="overflow-hidden rounded-2xl bg-gray-100">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJvdXQlMjB1c3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="Team working together"
                  loading="lazy"
                />
              </div>

              <div>
                  <div>
                          <h2 className="font-extrabold tracking-tight text-gray-900">
                          Our activities include:
                          </h2>

                          <div className="mt-4 h-[2px] w-16 text-lg font-normal rounded-full bg-[#233876]" />

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
        </div>

      {/* Block 2 */}
      
        <div className="bg-white pt-16 sm:pt-25 sm:pb-10">
  <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-[2.5fr_1fr_1fr]">
              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">Meet our leadership</h2>
                <p className="mt-6 w-full max-w-none text-lg/8 text-gray-600">We’re a dynamic group of individuals who are 
                passionate about what we do and dedicated to delivering the best results for our clients.</p>
              </div>
              <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                <li>
                  <div className="flex items-center gap-x-6">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5" />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Leslie Alexander</h3>
                      <p className="text-sm/6 font-semibold text-blue-900">Co-Founder / CEO</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5" />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Michael Foster</h3>
                      <p className="text-sm/6 font-semibold text-blue-900">Co-Founder / CTO</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5" />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Dries Vincent</h3>
                      <p className="text-sm/6 font-semibold text-blue-900">Business Relations</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-x-6">
                    <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5" />
                    <div>
                      <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">Lindsay Walton</h3>
                      <p className="text-sm/6 font-semibold text-blue-900">Front-end Developer</p>
                    </div>
                  </div>
                </li>
                
              </ul>
            </div>
        </div>


       

        <Footer/>
      </main>
    );
  }
  
