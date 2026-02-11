import Image from "next/image";
import aboutUs from "@/app/pictures/about-us.png";
import bannerAboutUs from "@/app/pictures/banner-aboutus.jpg";

export default function DoubleBanner() {
  return (

    
    <section className="w-full bg-white py-10">
  <div className="mx-auto max-w-7xl px-6">
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#233876] to-[#0b1220] px-6 pt-10 pb-2 shadow-2xl sm:px-10">
      
      {/* Section Galerie d'images */}
              <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
                  
                  {/* Image 1 */}
                  <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800" 
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Team working"
                    />
                  </div>

                  {/* Image 2 */}
                  <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Brainstorming"
                    />
                  </div>

                  {/* Image 3 */}
                  <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm aspect-square text-white">
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800"
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Office space"
                    />
                  </div>

                  {/* Image 4 */}
                  <div className="overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-sm aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                      className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                      alt="Coworking"
                    />
                  </div>

                </div>
              </div>
              
      {/* lumière */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="relative grid gap-10 text-white md:grid-cols-3 md:items-start">
        
        {/* 1 */}
        <div className="text-center md:text-left">
          <p className="text-2xl font-light tracking-tight opacity-70 sm:text-3xl">
            an ear
          </p>
          <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
            to listen to you
          </p>
        </div>

        {/* 2 */}
        <div className="text-center">
          <p className="text-2xl font-light tracking-tight opacity-70 sm:text-3xl">
            a hand
          </p>
          <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
            to guide you along
          </p>
        </div>

        {/* 3 */}
        <div className="text-center md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
            Your
          </p>
          <p className="-mt-1 text-2xl font-light tracking-tight opacity-70 sm:text-3xl">
            satisfaction
          </p>
          <p className="-mt-1 text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
            is our job
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    

    

  );
}
