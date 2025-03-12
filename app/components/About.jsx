const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      description: 'Former sustainability consultant with a passion for technology and environmental conservation.',
    },
    {
      name: 'Sophia Chen',
      role: 'CTO',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      description: 'AI specialist with a background in environmental science and sustainable product development.',
    },
    {
      name: 'Marcus Williams',
      role: 'Head of Partnerships',
      image: 'https://randomuser.me/api/portraits/men/68.jpg',
      description: 'Experienced in building relationships with eco-friendly brands and sustainability organizations.',
    },
    {
      name: 'Olivia Rodriguez',
      role: 'UX Designer',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      description: 'Passionate about creating intuitive user experiences that encourage sustainable consumer behavior.',
    },
  ];

  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="transition-all duration-500 ease-out">
            <div className="mb-4">
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                OUR STORY
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              About RecycleHub
            </h2>

            <p className="text-lg text-textSecondary mb-6 leading-relaxed">
              RecycleHub was founded in 2023 with a simple mission: to make sustainable shopping accessible, convenient, and rewarding for everyone. We believe that small changes in shopping habits can lead to significant positive impacts on our planet.
            </p>

            <p className="text-lg text-textSecondary mb-6 leading-relaxed">
              Our team of environmental scientists, AI specialists, and passionate eco-enthusiasts have created a platform that leverages cutting-edge technology to help consumers make informed, sustainable choices without compromising on quality or convenience.
            </p>

            <div className="p-6 rounded-xl bg-opacity-10 bg-primary border border-primaryBorder mb-8">
              <p className="text-xl italic text-textPrimary relative">
                <span className="absolute -top-6 -left-4 text-6xl text-primaryOpacity font-serif">"</span>
                Our vision is a world where every purchase decision is made with full awareness of its environmental impact, and where sustainable choices are the default, not the exception.
              </p>
            </div>
          </div>

          <div className="transition-all duration-500 ease-out">
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/eco-team.jpg"
                alt="RecycleHub Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-12 text-center text-textPrimary">
            Meet Our Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="transition-all duration-500 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center p-6 h-full rounded-xl bg-opacity-80 backdrop-blur-md border border-borderPrimary hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-primary"
                  />
                  <h4 className="text-2xl font-bold mb-2 text-textPrimary">
                    {member.name}
                  </h4>
                  <p className="text-lg font-semibold mb-4 text-primary">
                    {member.role}
                  </p>
                  <p className="text-base text-textSecondary">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;