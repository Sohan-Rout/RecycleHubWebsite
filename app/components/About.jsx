const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <div className="gap-8 items-center">
            <div className="mb-4 self-start"> {/* Keep OUR STORY left-aligned */}
              <span className="text-sm font-semibold tracking-wider text-black uppercase">
                OUR STORY
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 bg-clip-text text-transparent self-start"> {/* Keep title left-aligned */}
              About Recycle<span className='text-black'>Hub</span>
            </h2>

            <div className="text-center"> {/* Center the rest of the content */}
              <div className='p-10 pt-0 pb-0'><p className="text-lg text-textSecondary mb-6 leading-relaxed max-auto">
                EcoShop was founded in 2023 with a simple mission: to make sustainable shopping accessible, convenient, and rewarding for everyone. We believe that small changes in shopping habits can lead to significant positive impacts on our planet.
              </p></div>

              <p className="text-lg text-textSecondary mb-6 leading-relaxed max-auto">
                Our team of environmental scientists, AI specialists, and passionate eco-enthusiasts have created a platform that leverages cutting-edge technology to help consumers make informed, sustainable choices without compromising on quality or convenience.
              </p>

              <div className="p-6 rounded-xl bg-opacity-10 bg-primary border border-primaryBorder mb-8 max-w-2xl">
                <p className="text-xl italic text-textPrimary relative">
                  <span className="absolute -top-6 -left-4 text-6xl text-primaryOpacity font-serif">"</span>
                  Our vision is a world where every purchase decision is made with full awareness of its environmental impact, and where sustainable choices are the default, not the exception.
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;