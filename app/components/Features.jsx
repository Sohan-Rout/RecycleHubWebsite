'use client';
import { SmartToy, Globe, Building, Cable, Trophy, Lightbulb, Public, LocationCity, EmojiEvents } from '@mui/icons-material'; // Using Lucide icons instead of Material-UI

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <div
      className="transition-all duration-500 ease-out opacity-100 translate-y-0"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className="h-[20rem] rounded-3xl p-4 bg-white/80 backdrop-blur-lg border border-gray-200 hover:-translate-y-2 hover:shadow-lg transition-transform duration-300 ease-in-out flex flex-col justify-center items-center text-center hover:animate-bounce-slight"
      >
        <div className="p-6 flex flex-col items-center">
          <div className="inline-flex p-3 rounded-xl mb-4 bg-gradient-to-r from-green-50 to-purple-50">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-black mb-4">{title}</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <SmartToy className="w-8 h-8 text-purple-600" />,
      title: "AI-Powered Item Recognition",
      description: "Use image recognition and barcode scanning to instantly identify whether an item is recyclable.",
    },
    {
      icon: <Public className="w-8 h-8 text-purple-600" />,
      title: "Eco-Friendly Shopping Hub",
      description: "A dedicated section showcasing verified eco-friendly products.",
    },
    {
      icon: <LocationCity className="w-8 h-8 text-purple-600" />,
      title: "Nearby Recycling Centers",
      description: "Map-based locator showing the nearest recycling centers with Live status updates (open/closed, peak hours, special collection days).",
    },
    {
      icon: <Cable className="w-8 h-8 text-purple-600" />,
      title: "Electronic Waste Disposal Service",
      description: "On-demand pickup service for old electronics (phones, laptops, batteries, appliances).",
    },
    {
      icon: <EmojiEvents className="w-8 h-8 text-purple-600" />,
      title: "Rewards System",
      description: "Affiliate partnerships with green brands for commissions or discounts. Rewards for responsible disposal.",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />,
      title: "Eco-News & Tips Section",
      description: "Daily recycling tips, sustainability hacks, and industry news to educate users. Short interactive quizzes on eco-conscious living.",
    },
  ];

  return (
    <section
      id="features"
      className="py-12 md:py-16 relative overflow-hidden"
    >
      {/* Background elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-50 bg-[radial-gradient(circle_at_20%_30%,rgba(76,175,80,0.1)_0%,transparent_40%),radial-gradient(circle_at_80%_70%,rgba(147,112,219,0.05)_0%,transparent_40%)] -z-10"
      />

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="transition-all duration-500 ease-out opacity-100 translate-y-0">
            <p className="mb-4 font-semibold text-green-600 tracking-widest uppercase">
              WHY CHOOSE RECYCLEHUB
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Features That Make a Difference
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600">
              Bringing AI-powered waste management, eco-friendly shopping, and hassle-free e-waste disposal—all in one app!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Custom Bounce Animation */}
      <style jsx>{`
        @keyframes bounce-slight {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .hover\:animate-bounce-slight:hover {
          animation: bounce-slight 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Features;