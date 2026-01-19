import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Image from "next/image";
import img1 from "../pictures/IMG_1193.jpg";
import img2 from "../pictures/IMG_1194.jpg";
import img3 from "../pictures/IMG_1193 2.jpg";

export default function ContactUsPage() {
  return (
    <main>
      <Banner />

      <section className="bg-white ">
        <div className="mx-auto max-w-7xl px-10">
          
          <div className="max-w-5xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-[#233876]">
              CONTACT US
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Get in touch with us
            </h1>
            <div className="mt-4 h-[2px] w-20 rounded-full bg-[#233876]" />
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We are the real spokesmen for consumers and will awaken and optimize your
              entrepreneurial capacity.
            </p>
          </div>

        
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-start">
            
            {/* Contact  */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900">
                Headquarter
              </h2>

              <div className="mt-6 space-y-6 text-gray-700">
                <div>
                  <p className="text-sm font-semibold text-gray-900">Address</p>
                  <p className="mt-1">
                    Global Gateway 8, Rue de la Perle,<br />
                    Providence, Mahe, Seychelles
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">Phone</p>
                  <p className="mt-1">+248 250 8571</p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">Working hours</p>
                  <p className="mt-1">
                    Monday to Friday<br />
                    from 8:00 am to 16:30
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">E-mail</p>
                  <p className="mt-1">
                    <a
                      href="mailto:contact@groupeurocomsa.com"
                      className="text-[#233876] hover:underline"
                    >
                      contact@groupeurocomsa.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

   
            <div className=" p-10">
              <div className="grid  grid-cols-2 gap-4 mt-8 mx-auto lg:mx-0">
                    <Image
                      className="w-full rounded-lg"
                      src={img1}
                      alt="office content 1"
                    />
                     
                    <Image
                      className=" w-full rounded-lg mt-26 "
                      src={img2}
                      alt="office content 2"
                    />
              </div>
              
            </div>
          </div>
        </div>
</section>

      <Footer />
    </main>
  );
}
  
