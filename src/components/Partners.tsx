import React from "react";

const Partners = () => {
  const partners = [
    {
      name: "Binance Labs",
      logo: "/binanceLabs.png",
    },
    {
      name: "Coinbase Ventures",
      logo: "/coinbaseVenture.png",
    },
    {
      border: true,
      name: "A16Z",
      logo: "/a16z.png",
    },
    {
      name: "Founders Fund",
      logo: "/founderFund.png",
    },
    {
      name: "Xiaomi",
      logo: "/xiaomi.png",
    },
    {
      name: "BYD",
      logo: "/BYD.png",
    },
    {
      name: "OpenAI",
      logo: "/openai.png",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-16" id="partners">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with badge and line */}
        <div className="mb-16 flex items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-pulse-500 text-white">
                06
              </span>
              <span>Our Partners</span>
            </div>
          </div>
          <div className="h-[1px] flex-1 bg-gray-300"></div>
        </div>

        {/* Partners Grid */}
        <div className="xl:row- grid h-40 grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 xl:mt-28 xl:grid-cols-4 xl:grid-rows-2 xl:gap-x-4 xl:gap-y-44">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`group relative flex cursor-pointer items-center justify-center`}
            >
              <img
                src={partner.logo}
                className={`linear h-[120px] w-[250px] transform-none cursor-pointer rounded-lg object-cover transition-none sm:h-[150px] sm:w-[300px] md:h-[160px] md:w-[350px] lg:h-[140px] lg:w-[300px] lg:transition-transform lg:duration-100 lg:hover:scale-105`}
                alt={`${partner.name} Logo`}
              />
            </div>
          ))}
        </div>

        {/* Additional text */}
        <div className="mt-[1000px] text-center sm:mt-[600px] md:mt-[500px] lg:mt-[250px] xl:mt-[220px]">
          <p className="text-lg text-gray-600 md:text-2xl">
            Trusted by leading investors and technology partners worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;
