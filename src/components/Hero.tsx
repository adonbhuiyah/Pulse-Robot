import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and when window resizes
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    fetch("/loop-header.lottie")
      .then((response) => response.json())
      .then((data) => setLottieData(data))
      .catch((error) =>
        console.error("Error loading Lottie animation:", error),
      );
  }, []);

  useEffect(() => {
    // Skip effect on mobile
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;

      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${
        x * 2.5
      }deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);

  useEffect(() => {
    // Skip parallax on mobile
    if (isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll(".parallax");
      elements.forEach((el) => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || "0.1");
        const yPos = -scrollY * speed;
        element.style.setProperty("--parallax-y", `${yPos}px`);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section
      className="relative overflow-hidden bg-cover"
      id="hero"
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: "center 30%",
        padding: isMobile ? "100px 12px 40px" : "120px 20px 60px",
      }}
    >
      <div className="absolute -right-[5%] -top-[10%] h-[70%] w-1/2 rounded-full bg-pulse-gradient opacity-20 blur-3xl"></div>

      <div className="container px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div
              className="pulse-chip mb-3 animate-fade-in opacity-0 sm:mb-6"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-pulse-500 text-white">
                01
              </span>
              <span>Purpose</span>
            </div>

            <h1
              className="section-title animate-fade-in text-3xl leading-tight opacity-0 sm:text-4xl lg:text-5xl xl:text-6xl"
              style={{ animationDelay: "0.3s" }}
            >
              Atlas: Where Code
              <br className="hidden sm:inline" />
              Meets Motion
            </h1>

            <p
              style={{ animationDelay: "0.5s" }}
              className="section-subtitle mb-4 mt-3 animate-fade-in text-left text-base font-normal leading-relaxed text-gray-950 opacity-0 sm:mb-8 sm:mt-6 sm:text-lg"
            >
              The humanoid companion that learns and adapts alongside you.
            </p>
            <div className="flex flex-col items-start gap-4 lg:flex-row lg:gap-10">
              <div
                className="flex animate-fade-in flex-col gap-4 opacity-0 sm:flex-row"
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  href="#"
                  className="group relative flex w-full items-center justify-center overflow-visible text-center sm:w-auto"
                  style={{
                    backgroundColor: "#FE5C02",
                    borderRadius: "1440px",
                    boxSizing: "border-box",
                    color: "#FFFFFF",
                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: "20px",
                    padding: "16px 24px",
                    border: "1px solid white",
                    fontWeight: "medium",
                  }}
                >
                  {/* Button content */}
                  Buy $ROBOT
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  {/* Enhanced Coming Soon tooltip */}
                  <span className="CommingSoonUI">Coming Soon!</span>
                </a>
              </div>
              <div
                className="flex animate-fade-in flex-col gap-4 opacity-0 sm:flex-row"
                style={{ animationDelay: "0.7s" }}
              >
                <a
                  target="_blank"
                  href="https://chat.pulserobots.com"
                  className="group relative flex w-full items-center justify-center overflow-visible border border-[#fd5c02] text-center text-[#fd5c02] sm:w-auto lg:border-white lg:text-white"
                  style={{
                    borderRadius: "1440px",
                    boxSizing: "border-box",

                    cursor: "pointer",
                    fontSize: "16px",
                    lineHeight: "20px",
                    padding: "16px 24px",

                    fontWeight: "medium",
                  }}
                >
                  {/* Button content */}
                  Chat with Atlas
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-6 w-full lg:mt-0 lg:w-1/2">
            {lottieData ? (
              <div
                className="relative z-10 animate-fade-in"
                style={{ animationDelay: "0.9s" }}
              >
                <LottieAnimation
                  animationPath={lottieData}
                  className="mx-auto h-auto w-full max-w-lg"
                  loop={true}
                  autoplay={true}
                />
              </div>
            ) : (
              <>
                <div className="absolute inset-0 -z-10 rounded-2xl bg-dark-900 shadow-xl sm:rounded-3xl"></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-500 ease-out sm:rounded-3xl">
                  <img
                    ref={imageRef}
                    src="/hero-image.jpg"
                    alt="Atlas Robot"
                    className="h-auto w-full object-cover transition-transform duration-500 ease-out"
                    style={{ transformStyle: "preserve-3d" }}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: 'url("/hero-image.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      mixBlendMode: "overlay",
                      opacity: 0.5,
                    }}
                  ></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className="parallax absolute bottom-0 left-1/4 -z-10 hidden h-64 w-64 rounded-full bg-pulse-100/30 blur-3xl lg:block"
        data-speed="0.05"
      ></div>
    </section>
  );
};

export default Hero;
