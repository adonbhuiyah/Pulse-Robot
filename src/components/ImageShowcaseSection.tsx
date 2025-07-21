import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full bg-white pb-8 pt-0 sm:pb-12" id="showcase">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll mx-auto mb-8 max-w-3xl text-center sm:mb-12">
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight text-gray-900 sm:mb-4 sm:text-4xl">
            Experience the Future Today
          </h2>
          <p className="text-base text-gray-600 sm:text-lg">
            Our cutting-edge humanoid robot is designed to transform how we
            interact with technology in everyday environments.
          </p>
        </div>

        <div className="animate-on-scroll mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-elegant sm:rounded-3xl">
          <div className="w-full">
            <img
              src="/optimusRobot.png"
              alt="Advanced humanoid robot with orange and white design"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="mb-3 font-display text-xl font-semibold sm:mb-4 sm:text-2xl">
              Next Generation Robotics
            </h3>
            <p className="text-sm text-gray-700 sm:text-base">
              Built with precision engineering and sophisticated AI, our robots
              seamlessly integrate into various environments, from homes to
              hospitals, providing assistance and enriching human experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
