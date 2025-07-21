import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section
      className="relative bg-white py-12 sm:py-16 md:py-20"
      id="get-access"
      ref={ctaRef}
    >
      {/* Background gradient at the top has been removed */}

      <div className="section-container relative z-10 px-4 opacity-0 sm:px-6">
        <div className="glass-card relative mx-auto max-w-4xl overflow-hidden p-6 text-center sm:p-8 md:p-10 lg:p-14">
          {/* Decorative circles */}
          <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-pulse-100/30 blur-2xl sm:h-40 sm:w-40"></div>
          <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-1/2 translate-y-1/2 rounded-full bg-gray-100/50 blur-2xl sm:h-32 sm:w-32"></div>

          <div className="pulse-chip mx-auto mb-4 sm:mb-6">
            <span>Limited Availability</span>
          </div>

          <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Be Among the First to <br className="hidden sm:inline" />
            <span className="text-pulse-500">Experience Atlas</span>
          </h2>

          <p className="mx-auto mb-6 max-w-2xl text-base text-gray-600 sm:mb-8 sm:text-lg">
            We're accepting a limited number of early adopters. Submit your
            application today to secure your place in the future of robotics.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#details"
              className="button-primary group flex w-full items-center justify-center sm:w-auto"
            >
              Request Early Access
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="button-secondary w-full text-center sm:w-auto"
            >
              Join Waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
