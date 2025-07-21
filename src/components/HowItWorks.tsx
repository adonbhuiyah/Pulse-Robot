import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

const StepCard = ({
  number,
  title,
  description,
  isActive,
  onClick,
}: StepCardProps) => {
  return (
    <div
      className={cn(
        "cursor-pointer rounded-xl border p-6 transition-all duration-500",
        isActive
          ? "border-pulse-200 bg-white shadow-elegant"
          : "border-transparent bg-white/50 hover:bg-white/80",
      )}
      onClick={onClick}
    >
      <div className="flex items-start">
        <div
          className={cn(
            "mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors duration-300",
            isActive ? "bg-pulse-500 text-white" : "bg-gray-100 text-gray-500",
          )}
        >
          {number}
        </div>
        <div>
          <h3
            className={cn(
              "mb-2 text-lg font-semibold transition-colors duration-300",
              isActive ? "text-pulse-600" : "text-gray-800",
            )}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepsData = [
    {
      number: "01",
      title: "Request Access",
      description:
        "Fill out the application form to join our early access program and secure your spot in line.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "02",
      title: "Personalization",
      description:
        "We'll work with you to customize Atlas to your specific needs and preferences.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "03",
      title: "Integration",
      description:
        "Atlas arrives at your location and is integrated into your living or working environment.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "04",
      title: "Adaptation",
      description:
        "Through daily interaction, Atlas learns and adapts to your routines, preferences, and needs.",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    },
  ];

  useEffect(() => {
    // Auto-cycle through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % stepsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [stepsData.length]);

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

    const elements = document.querySelectorAll(".fade-in-stagger");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section
      className="relative bg-white py-20"
      id="how-it-works"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute -top-20 right-0 -z-10 h-72 w-72 rounded-full bg-pulse-50 opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-10 -z-10 h-64 w-64 rounded-full bg-gray-50 opacity-70 blur-3xl"></div>

      <div className="section-container">
        <div className="fade-in-stagger mb-16 text-center opacity-0">
          <div className="pulse-chip mx-auto mb-4">
            <span>Process</span>
          </div>
          <h2 className="section-title mb-4">
            How Atlas Integrates Into Your Life
          </h2>
          <p className="section-subtitle mx-auto">
            A seamless four-step process from request to full integration.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="fade-in-stagger order-2 space-y-4 opacity-0 lg:order-1">
            {stepsData.map((step, index) => (
              <StepCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>

          <div className="fade-in-stagger relative order-1 h-[400px] overflow-hidden rounded-3xl opacity-0 shadow-elegant lg:order-2">
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000",
                  activeStep === index
                    ? "opacity-100"
                    : "pointer-events-none opacity-0",
                )}
              >
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="mb-2 block font-medium text-pulse-400">
                      {step.number}
                    </span>
                    <h3 className="mb-2 text-2xl font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-white/80">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
