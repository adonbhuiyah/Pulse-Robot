import React from "react";
const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container animate-on-scroll pb-2 opacity-0">
        {/* Removed the pulse-chip button/element that was here */}

        <div className="relative mt-6 w-full overflow-hidden rounded-2xl sm:mt-8 sm:rounded-3xl">
          <div
            className="flex min-h-[250px] flex-col justify-between bg-cover bg-center bg-no-repeat p-4 sm:min-h-[350px] sm:p-5"
            style={{
              backgroundImage: "url('/background-section3.png')",
            }}
          >
            <div className="flex items-center text-white">
              <img
                src="/logo.svg"
                alt="Pulse Robot Logo"
                className="mr-3 h-5 w-auto invert sm:h-6"
              />
              <span className="text-xl font-medium text-white"></span>
            </div>

            <div
              style={{
                overflow: "hidden",
                maxHeight: "80px",
                marginTop: "40px",
              }}
            >
              <h2
                style={{
                  marginBottom: "-30px",
                  padding: "0px 0px 100px",
                }}
                className="mx-0 mt-0 px-0 py-0 text-center font-playfair text-6xl text-[27px] font-thin italic text-white sm:text-5xl md:text-7xl lg:text-7xl"
              >
                Made By AI & Human
              </h2>
            </div>

            {/* White box at the bottom with overflow */}
            <div className="absolute bottom-0 left-[-10%] h-10 w-[120%] rounded-t-lg bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MadeByHumans;
