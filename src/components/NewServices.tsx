import Image from 'next/image';

const Section = ({ title, text, imageSrc, imageAlt, reverse = false, showBadge = false }) => {
  return (
    <section className={`
      flex flex-col gap-8 py-12 px-6 max-w-7xl mx-auto
      ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} 
      items-center md:gap-16 lg:gap-24 md:py-20
    `}>
      
      {/* Colonne Texte */}
      <div className="w-full md:w-1/2 space-y-6 text-left">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
          {text}
        </p>
        <button className="group inline-flex items-center font-bold text-black border-b-2 border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-all">
          Read more.
        </button>
      </div>

      {/* Colonne Image */}
      <div className="w-full md:w-1/2 relative">
        <div className={`
          relative aspect-[4/3] w-full overflow-hidden shadow-2xl
          /* Arrondis dynamiques selon l'orientation */
          ${reverse 
            ? 'rounded-tl-[60px] sm:rounded-tl-[100px] rounded-br-3xl' 
            : 'rounded-tr-[60px] sm:rounded-tr-[100px] rounded-bl-3xl'}
        `}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
          />
          
          {/* Badge optionnel (Trees for All) */}
          {showBadge && (
            <div className="absolute top-0 left-6 sm:left-12 w-20 sm:w-28 shadow-lg">
               <img src="/badge-trees.png" alt="Badge" className="w-full" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default function AboutPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Section 
        title="Our Founder's story"
        text="Read more about our founders' story and discover how a simple online game connection sparked a revolution in customer service. Join us on a journey through innovation, resilience, and the creation of Watermelon."
        imageSrc="/founders.jpg"
        imageAlt="Founders laughing"
      />
      
      <Section 
        title="Sustainability & Well-being"
        text="We're conscious about how we build our future. From office space design as it relates to growth, to the well-being of our customers and our employees, to our impact on our planet."
        imageSrc="/forest.jpg"
        imageAlt="Waterfall in forest"
        reverse={true}
        showBadge={true}
      />
    </main>
  );
}