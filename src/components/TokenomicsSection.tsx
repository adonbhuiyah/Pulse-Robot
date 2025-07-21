import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full bg-white py-6 sm:pb-0 sm:pt-10" id="tokenomics">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with badge and line */}
        <div className="mb-8 flex items-center gap-4 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-pulse-500 text-white">
                03
              </span>
              <span>Tokenomics</span>
            </div>
          </div>
          <div className="h-[1px] flex-1 bg-gray-300"></div>
        </div>

        {/* Main content with text mask image - responsive text sizing */}
        <div className="mb-16 max-w-5xl pl-4 sm:pl-8">
          <h2 className="mb-8 font-display text-2xl leading-tight sm:mb-12 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block bg-[url('/text-mask-image.jpg')] bg-cover bg-clip-text bg-center text-transparent">
              Atlas works with your team, not instead of it. By handling
              repetitive tasks, improving safety conditions, and learning from
              every interaction, Atlas helps humans focus on what they do best:
              create, solve, and innovate.
            </span>
          </h2>
        </div>

        {/* Tokenomics Section */}
        <div className="relative mb-16">
          {/* Gradient Background */}
          <div
            className="absolute inset-0 rounded-3xl opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #4a1d5a 0%, #8b3a5a 25%, #d4583a 50%, #f97316 75%, #fbbf24 100%)",
            }}
          ></div>

          <div className="relative z-10 px-2 py-8 sm:px-8 sm:py-12">
            <h2 className="mb-8 text-center font-display text-2xl font-bold text-white md:text-left md:text-5xl">
              Governance Token
            </h2>

            <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-6 backdrop-blur-sm sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12">
              <div className="mb-8 flex items-center gap-6">
                {/* ffffffffffff */}
                <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-white/30 bg-white/20 backdrop-blur-sm">
                  <img
                    src="/hero-image.jpg"
                    alt="Robot Logo"
                    className="h-12 w-12 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">$ROBOT</h3>
                  <p className="text-white/70">Add to wallet</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 lg:gap-28 xl:gap-52">
                <div className="space-y-6 text-[13px] font-bold sm:text-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Total Supply</span>
                    <span className="text-white">1 Billion</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Fairlaunch Allocation</span>
                    <span className="text-white">510 Million</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Buy/Sell Tax</span>
                    <span className="text-green-300">0%/0%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/80">VC Allocation</span>
                    <span className="text-green-300">0%</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-white/80">Blockchain</span>
                    <span className="text-purple-300">Solana</span>
                  </div>
                </div>

                <div className="space-y-4 text-[13px] sm:text-lg">
                  {/* Button 1 - Pinksale */}
                  <div className="group relative">
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-pink-600 px-4 py-4 font-bold text-white transition-colors hover:bg-pink-700">
                      <span>Buy from</span>
                      <span className="text-pink-300">◆</span>
                      <span>Pinksale</span>
                    </button>
                    <span className="CommingSoonUI">Coming Soon!</span>
                  </div>

                  {/* Button 2 - Whitepaper */}
                  <div className="group relative">
                    <button className="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-4 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                      Read Whitepaper For More
                    </button>
                    <span className="CommingSoonUI">Coming Soon!</span>
                  </div>

                  {/* Button 3 - Audit Report */}
                  <div className="group relative">
                    <button className="w-full rounded-lg border border-white/30 bg-white/20 px-4 py-4 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                      Read Audit Report By Coinsult
                    </button>
                    <span className="CommingSoonUI">Coming Soon!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
