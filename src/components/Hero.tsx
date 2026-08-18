import OrderToCup from "./OrderToCup";

const Hero = () => {
  return (
    <section arial-label="Hero section" className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-8 py-20 md:py-44 md:px-16">
      <div className="flex flex-col gap-6 flex-1">
        <p className="text-xs uppercase tracking-widest text-gold mb-4">
          Coffee & quiet corners
        </p>

        <h1 className="text-4xl md:text-5xl font-bold">
          Where your best ideas get their coffee
        </h1>

        <p className="text-lg text-gray-700 mt-3">
          Fast wifi, good light, better espresso.
        </p>

        <button onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })} className="p-2 bg-gold rounded-lg min-w-max hover:cursor-pointer">Find your table</button>
      </div>

      <div className="flex-1">
        <OrderToCup />
      </div>
    </section>
  );
};

export default Hero;
