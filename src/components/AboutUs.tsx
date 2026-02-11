import Image from "next/image";
import logoGroupEurocom from "@/app/pictures/logo-group-eurocom.jpeg";
export default function AboutUs() {
    return (
        <>
            {/* Block 1 */}
            <div className="mx-auto max-w-6xl px-6 pt-20">
                <div className="max-w-7xl">
                    <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                        About us
                    </h2>
                    <div className="mt-4 h-[2px] w-16 rounded-full bg-[#233876]" />
                    <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                        We support clients in Seychelles and abroad through consulting,
                        strategy, communication, promotion, IT management, and event
                        organization. Our mission is to deliver structured solutions adapted
                        to every business need.
                    </p>
                </div>

                <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
                    {/* Image */}
                    <div className="overflow-hidden rounded-2xl bg-gray-100">
                        <img
                            className="h-full w-full object-cover"
                            src="https://plus.unsplash.com/premium_photo-1661657849653-e5d8ad119bf9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY1fHx8ZW58MHx8fHx8"
                            alt="Team working together"
                            loading="lazy"
                        />
                    </div>

                    <div>
                        <h2 className="font-extrabold tracking-tight text-gray-900">
                            Our activities include:
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
                                <span className="mt-2 h-2 w-2 mb-6 rounded-full bg-[#233876]" />
                                All operations industrial, commercial and financial
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Block 2 
     <div className="bg-white mx-auto max-w-6xl px-6 pt-8 sm:pt-25 sm:pb-10">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-[2.5fr_1fr_1fr]">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Our Commitment
            </h2>
            <p className="mt-6 w-full max-w-none text-lg/8 text-gray-600">
              We listen to you, guide you every step of the way, and make your satisfaction our priority.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl bg-gray-100">
            <Image className="h-full w-full object-cover" src={logoGroupEurocom} alt="Group Eurocom logo" />
          </div>
        </div>
      </div> */}
        </>
    );
}
