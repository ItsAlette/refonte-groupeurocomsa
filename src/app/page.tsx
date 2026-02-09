import YouAreCard from "@/components/YouAre";
import Footer from "@/components/Footer";
import Image from "next/image";
import img1 from "./pictures/img1.png";
import img2 from "./pictures/img2.png";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <div className="px-4 sm:px-6 lg:px-8 ">
            <div
              className="mt-24 h-[40dvh] sm:h-[50dvh] lg:h-[60dvh] flex flex-col bg-cover bg-center bg-no-repeat rounded-2xl"
              style={{
                backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1661900462928-2fd7dec04c06?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHN0cmF0ZWdpYyUyMHBsYW5uaW5nfGVufDB8fDB8fHww')",
              }}
            >
              <div className="mt-auto w-2/3 md:max-w-lg ps-5 pb-5 md:ps-10 md:pb-10">
                <h1 className="text-xl md:text-3xl lg:text-5xl text-foreground-inverse font-bold">
                  Group Eurocom (sa)
                </h1>
              </div>
            </div>
      </div>


      <section className="pt-12 pb-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
                  <div className="relative w-full text-center lg:text-left lg:w-2/4">
                      <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">You want your products to be the best sellers</h2>
                  </div>
                  <div className="relative w-full text-center  lg:text-left lg:w-2/4">
                      <p className="text-lg font-normal text-gray-500 mb-5"> We offer a unique urban marketing support in communication to help you
                        set up, develop and adapt your products to your customer’s real needs.</p> 
                      <a href="services" className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-blue-900 lg:justify-start hover:text-blue-700 ">See our services <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="#233876" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                      </a> 
                  </div>
              </div>
              <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
                  <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-900">
                      <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z" stroke="#233876" stroke-width="2"></path>
                              </svg>
                              
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Businesses</h4>
                      <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                   From startups to medium-sized companies and large corporations, we support every business profile.
                      </p>
                  </div>
                  <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-900">
                      <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z" stroke="#233876" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Institutions</h4>
                      <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                          Countries, public institutions, and NGOs benefit from structured and impactful communication solutions.  
                      </p>
                  </div>
                  <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-900">
                      <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#233876" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Public & Leadership</h4>
                      <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                        We also work with public leaders, politicians, and campaign teams on strategic communication.
                      </p>
                  </div>
                  <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-blue-900">
                      <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#233876" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              
                      </div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">Individuals</h4>
                      <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                          Artists, independent workers, and personal brands can rely on tailored communication support.                      </p>
                  </div>
              </div>
        </div>
      </section>
                                            

    {/* Dernier block */}
    <div className="mx-auto max-w-6xl px-6 pb-10 pt-2">

      <div className="mt-16 grid gap-12">
        {/* Bloc 1 */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="order-1 md:order-none">
            <h3 className="text-xl font-semibold text-gray-900">
             With over ten years of experience
            </h3>
            <p className="mt-4 text-lg font-normal leading-relaxed text-gray-600">
              GESA combines event production, strategic communication, and media expertise to deliver high-impact projects.
            </p>
          </div>

          <div className="order-2 md:order-none overflow-hidden rounded-2xl border w-[75%] bg-gray-50 mx-auto">
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
          <div className="order-2 md:order-1 overflow-hidden rounded-2xl border w-[75%] bg-gray-50 mx-auto">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="feature image 2"
              loading="lazy"
            />
          </div>

          <div className="order-1 md:order-2">
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

     
      <Footer/>
    </main>

    
  );

  
}
