'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertySlider from '../components/PropertySlider';

function AnimatedCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      setCount(Math.floor(end * percentage));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count.toLocaleString();
}

export default function Home() {
  const propertyData = [
    {
      title: "Modern Luxury Villa",
      price: "$4,500,000",
      specs: "5 Beds • 6 Baths • 7,200 sq ft",
      images: [
        {
          href: "https://ap.rdcpix.com/8fede2cdc6b55b0d1b59f457d9555dd5l-m2664335997s-w2048_h1536.jpg"
        },
        {
          href: "https://ap.rdcpix.com/8fede2cdc6b55b0d1b59f457d9555dd5l-m1914658111s-w2048_h1536.jpg"
        },
        {
          href: "https://ap.rdcpix.com/8fede2cdc6b55b0d1b59f457d9555dd5l-m2975995340s-w2048_h1536.jpg"
        }
      ]
    },
    // Add more properties as needed
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      {/* Hero Section */}
      <div className="relative h-[90vh] flex flex-col">
        <Image
          src="/luxury-home.jpg"
          alt="Luxury Home"
          fill
          className="object-cover brightness-[0.3] grayscale"
          priority
        />
        <div className="flex-1 relative z-10 flex items-center pt-16"> {/* Added pt-16 for navbar space */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Luxury Living Redefined
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Where Exceptional Properties Meet Discerning Clients
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="/properties"
                className="px-8 py-4 bg-white text-black hover:bg-gray-100 transition-colors text-lg font-semibold"
              >
                View Properties
              </a>
              <a
                href="/consultation"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all text-lg font-semibold"
              >
                Book Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div>
        {/* Statistics Section */}
        <div className="bg-black text-white py-16 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { label: "Properties Sold", value: 1500 },
                { label: "Happy Clients", value: 2800 },
                { label: "Years Experience", value: 25 },
                { label: "Luxury Properties", value: 350 },
              ].map((stat) => (
                <div key={stat.label} className="p-6">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <AnimatedCounter end={stat.value} />+
                  </div>
                  <p className="text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Properties */}
        <div className="py-20 bg-white dark:bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-black dark:text-white">
              Featured Properties
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {propertyData.map((property, index) => (
                <div key={index} className="group cursor-pointer">
                  <PropertySlider images={property.images} />
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-black dark:text-white">
                      {property.title}
                    </h3>
                    <p className="text-black/70 dark:text-white/70">{property.specs}</p>
                    <p className="text-2xl font-bold mt-2 text-black dark:text-white">
                      {property.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">About Luxury Estates</h2>
                <p className="text-lg text-white/80 mb-8">
                  With over 25 years of experience in luxury real estate, we've established ourselves as the premier destination for exceptional properties and unparalleled service.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: "Personalized Service", desc: "Tailored to your needs" },
                    { title: "Global Network", desc: "International reach" },
                    { title: "Expert Team", desc: "Industry leaders" },
                    { title: "Proven Results", desc: "Consistent excellence" }
                  ].map((item) => (
                    <div key={item.title} className="border-l-4 border-white pl-4">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-white/70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-[600px]">
                <Image
                  src="/about-us.jpg"
                  alt="Our Team"
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white dark:bg-black p-12 border border-black/10 dark:border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
            Ready to Find Your Perfect Home?
          </h2>
          <p className="text-black/70 dark:text-white/70 mb-6">
            Join thousands of satisfied homeowners who found their dream property with us
          </p>
          <a
            href="/register"
            className="inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-black/80 dark:hover:bg-white/80 transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
