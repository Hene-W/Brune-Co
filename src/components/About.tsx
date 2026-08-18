import Img from "../assets/about-coffee.jpg";

const About = () => {
  return (
    <section aria-label="About" id="about" className="px-6 py-16 md:py-24 md:px-12">
      <div className="flex flex-col md:flex-row-reverse items-center gap-16 max-w-6xl mx-auto">
        {/* Photo */}
        <div className="flex-1">
          <img
            src={Img}
            alt="Interior of coffee shop"
            className="w-full aspect-4/3 object-cover rounded-2xl"
          />

          <span className="block mt-2 text-xs text-muted text-center">
            Photo de{" "}
            <a href="https://unsplash.com/fr/@keghancphoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Keghan Crossland
            </a>{" "}
            sur{" "}
            <a href="https://unsplash.com/fr/photos/interieur-moderne-dun-cafe-avec-comptoir-courbe-ZZxmc66SjfM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </a>
          </span>
        </div>

        {/* Texte */}
        <div className="flex flex-col gap-6 flex-1 max-w-md">
          <p className="text-xs uppercase tracking-widest text-gold mb-4">
            Our story
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold">
            Coffee made by people who actually drink it
          </h2>

          <p className="text-lg text-gray-700 mt-3">
            We started roasting in a small kitchen in 2019. Today it's still
            small — just better lit, and with faster wifi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
