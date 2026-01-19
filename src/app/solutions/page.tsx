import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
  return (
    <main>
      <Banner />
      <section className="bg-white px-4">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="max-w-3xl">
                <p className="text-sm font-semibold tracking-[0.25em] text-[#233876]">
                    SOLUTIONS
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Our approach, focused on results
                </h2>
                <div className="mt-4 h-[2px] w-16 rounded-full bg-[#233876]" />
                <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                    We combine analysis, strategy, and execution to deliver actions that match your ambitions.
                </p>
                </div>

                {/* Two blocks */}
                <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {/* OUR ADDED VALUE */}
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-extrabold text-gray-900">
                    OUR ADDED VALUE
                    </h3>
                    <div className="mt-3 h-[2px] w-12 rounded-full bg-[#233876]" />

                    <ul className="mt-6 space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Clear and precise analysis and audit
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Advice, carrying out and follow up made to measure
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Targeted and promotional urban marketing plans
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Creative and new visual tools, media and event communication
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Powerful commercial animation perfectly adapted to your product
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        A specialization in business management
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Development and value of brand mix
                    </li>
                    </ul>
                </div>

                {/* OUR 'PULL' STRATEGY */}
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                    <h3 className="text-xl font-extrabold text-gray-900">
                    OUR ‘PULL’ STRATEGY
                    </h3>
                    <div className="mt-3 h-[2px] w-12 rounded-full bg-[#233876]" />

                    <ul className="mt-6 space-y-4 text-gray-700">
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Audit, consulting
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Surveys on the ground
                    </li>
                    <li className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-[#233876]" />
                        Analysis, estimates, adequate and reliable tools to ensure positive change
                    </li>
                    </ul>

                    {/* Quote box */}
                    <div className="mt-8 rounded-2xl bg-[#233876]/5 p-6">
                    <p className="text-base leading-relaxed text-gray-800">
                        
                        We don’t have to create needs, they already exist. One just needs to reveal them.
                        We answer consumers’ real needs.
                    </p>
                    </div>
                </div>
                </div>
            </div>
     </section>

      <Footer />
    </main>
  );
}
  
