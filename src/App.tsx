import React, { useEffect, useState, useRef } from 'react';
import {
  ChevronRight,
  Twitter,
  Github,
  Globe,
  ArrowUpRight,
  Coins,
  MessageSquare,
} from 'lucide-react';
import ResponsiveVideo from './components/ResponsiveVideo';

function useIntersectionObserver(options = {}) {
  const [elements, setElements] = useState([]);
  const [entries, setEntries] = useState([]);

  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, options);
  }, [options]);

  useEffect(() => {
    const currentObserver = observer.current;

    currentObserver.disconnect();

    if (elements.length > 0) {
      elements.forEach((element) => currentObserver.observe(element));
    }

    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [elements]);

  return [setElements, entries];
}

function App() {
  const [price, setPrice] = useState('$0.420');
  const [marketCap, setMarketCap] = useState('$69B');
  const [volume, setVolume] = useState('$4.2B');
  const [setElements, entries] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newPrice = (Math.random() * (0.5 - 0.3) + 0.3).toFixed(3);
      setPrice(`$${newPrice}`);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    setElements(animatedElements);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, [entries]);

  const features = [
    {
      name: 'Fast Transactions',
      animation:
        'https://lottie.host/9608955a-da0c-47ae-80bc-df51f0aca3a4/fyPFDcVLfx.json',
      type: 'dotlottie',
    },
    {
      name: 'Secure Network',
      animation:
        'https://lottie.host/0b0bdf2a-cf62-41ae-9ba2-1034c9b6cd33/dHGUra933v.json',
      type: 'lottie',
    },
    {
      name: 'Low Fees',
      animation:
        'https://lottie.host/0cec388f-6a29-404e-817d-036ac83b1089/VHOrIyrjaI.json',
      type: 'lottie',
    },
    {
      name: 'Active Community',
      animation:
        'https://lottie.host/92b1c463-fd66-46dc-aa7a-e4b379cd51a1/jq72eWBJeg.json',
      type: 'lottie',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'choose your wallet',
      description:
        'A wallet is necessary for people wanting to use, trade, or hold Anycoin. You can pick a wallet',
    },
    {
      number: '02',
      title: 'configure your wallet',
      description:
        'After downloading, you can configure your wallet according to our',
    },
    {
      number: '03',
      title: 'get some anycoin',
      description: "There's lots of ways to get your hands on some anycoin.",
    },
  ];

  return (
    <>
      <div className="min-h-screen relative">
        <div className="space-overlay" />
        <div className="tech-grid absolute inset-0" />

        {/* Hero Section */}
        <div className="relative min-h-screen flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://i.postimg.cc/xTVrbg1P/Black-Car-Sale-Promo-Instagram-Post-1.gif"
              alt="Background Animation"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10">
            <div className="flex items-center gap-2 fade-in-up">
              <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-[#BA9F33]" />
              <span className="text-xl sm:text-2xl font-bold text-[#BA9F33]">AnyCoin</span>
            </div>
            <div className="price-ticker bg-[#009CDE] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full fade-in-up delay-200">
              <span className="text-sm sm:text-base text-white font-bold">{price} ANY</span>
            </div>
          </div>

          <div className="floating text-center px-4 z-10 max-w-[90vw] sm:max-w-none">
            <div className="icon-wrapper mb-8 sm:mb-12 fade-in-up">
              <Coins className="w-24 h-24 sm:w-32 sm:h-32 text-[#BA9F33] icon-3d" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 neon-glow fade-in-up delay-100">
              AnyCoin
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-300 fade-in-up delay-200">
              The Future of Interstellar Currency
            </p>
            <button className="w-full sm:w-auto bg-[#009CDE] text-white px-6 sm:px-8 py-3 rounded-full text-lg font-semibold neon-box hover:scale-105 transition-transform fade-in-up delay-300">
              Launch Mission
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              { title: 'Market Cap', value: marketCap },
              { title: 'Daily Volume', value: volume },
              { title: 'Active Nodes', value: '1,420' },
            ].map((stat, index) => (
              <div
                key={stat.title}
                className={`neon-box p-4 sm:p-6 fade-in-up delay-${index * 100}`}
              >
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{stat.title}</h3>
                <p className="text-xl sm:text-2xl font-bold text-[#BA9F33]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {features.map(({ name, animation, type }, index) => (
              <div
                key={name}
                className={`feature-card fade-in-up delay-${index * 100}`}
              >
                <div
                  className="icon-wrapper flex justify-center items-center"
                  style={{ height: '250px', width: '100%' }}
                >
                  {type === 'dotlottie' ? (
                    <dotlottie-player
                      src={animation}
                      background="transparent"
                      speed="1"
                      style={{ width: '250px', height: '250px' }}
                      direction="1"
                      playMode="normal"
                      loop
                      autoplay
                    ></dotlottie-player>
                  ) : (
                    <lottie-player
                      src={animation}
                      background="transparent"
                      speed="1"
                      style={{ width: '250px', height: '250px' }}
                      loop
                      autoplay
                      direction="1"
                      mode="normal"
                    ></lottie-player>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-center mt-4">
                  {name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* What is AnyCoin Section */}
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="neon-box p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div className="fade-in-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 neon-glow">
                  What is AnyCoin?
                </h2>
                <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                  AnyCoin is a revolutionary digital currency designed for the
                  future of interstellar commerce. Built on advanced blockchain
                  technology, it offers lightning-fast transactions across the
                  galaxy with minimal fees.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Our decentralized network ensures secure, transparent
                  operations while maintaining the speed needed for modern
                  space-age transactions. Join thousands of users already
                  exploring the future of finance with AnyCoin.
                </p>
              </div>
              <div className="flex justify-center items-center fade-in-up delay-200">
                <div className="w-full max-w-md overflow-hidden rounded-lg">
                  <img
                    src="https://cdn.leonardo.ai/users/cf6db5ef-ee85-414e-89f3-978c7697632a/generations/65b862bb-2655-4e19-b09e-658779a3483f/segments/4:4:1/Flux_Dev_In_a_world_of_cryptocurrency_behold_the_majestic_Anyc_3.jpeg"
                    alt="AnyCoin Illustration"
                    className="w-full h-auto object-cover rounded-lg floating"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

                {/* Video Section */}
                <div className="container mx-auto py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 neon-glow text-center fade-in-up">
            See AnyCoin in Action
          </h2>
          <div className="fade-in-up delay-100">
            <ResponsiveVideo
              src="https://cdn.example.com/anycoin-demo.mp4"
              poster="https://cdn.example.com/anycoin-poster.jpg"
              title="AnyCoin Demo Video"
            />
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 neon-glow text-center fade-in-up">
            Getting Started
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`neon-box p-4 sm:p-6 hover:scale-105 transition-duration-300 fade-in-up delay-${
                  index * 100
                }`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl sm:text-3xl font-bold text-[#BA9F33] mr-2">
                    {step.number}
                  </span>
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#009CDE]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Code Preview */}
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="neon-box p-6 sm:p-8 fade-in-up">
            <pre className="text-xs sm:text-sm text-[#00F3FF] overflow-x-auto">
              <code>{`// Initiate interstellar transaction
const sendCoins = async (destination, amount) => {
  const tx = await anycoin.send({
    to: destination,
    amount,
    fee: '0.001',
    speed: 'lightspeed'
  });
  return tx.hash;
};`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative mt-12 sm:mt-16 border-t border-[#009CDE]/20">
        <div className="space-overlay opacity-50" />
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Coins className="w-6 h-6 sm:w-8 sm:h-8 text-[#BA9F33]" />
                <span className="text-xl sm:text-2xl font-bold text-[#BA9F33]">
                  AnyCoin
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Revolutionizing interstellar commerce through decentralized
                blockchain technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  'Whitepaper',
                  'Documentation',
                  'Statistics',
                  'Network Status',
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-gray-400 hover:text-[#009CDE] transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 text-white">Resources</h4>
              <ul className="space-y-2">
                {['Get Started', 'Learn', 'FAQ', 'Support'].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm sm:text-base text-gray-400 hover:text-[#009CDE] transition-colors flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-base sm:text-lg font-bold mb-4 text-white">
                Join the Community
              </h4>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="#"
                  className="neon-box p-2 hover:scale-110 transition-transform"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5 text-[#009CDE]" />
                </a>
                <a
                  href="#"
                  className="neon-box p-2 hover:scale-110 transition-transform"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-[#009CDE]" />
                </a>
                <a
                  href="#"
                  className="neon-box p-2 hover:scale-110 transition-transform"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 text-[#009CDE]" />
                </a>
                <a
                  href="#"
                  className="neon-box p-2 hover:scale-110 transition-transform"
                >
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#009CDE]" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#009CDE]/20 relative z-10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm text-gray-400">
                © {new Date().getFullYear()} AnyCoin. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#009CDE] transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#009CDE] transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-gray-400 hover:text-[#009CDE] transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;