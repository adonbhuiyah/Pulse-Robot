import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [
  {
    content:
      "Atlas transformed our production line, handling repetitive tasks while our team focuses on innovation. 30% increase in output within three months.",
    author: "Sarah Chen",
    role: "VP of Operations, Axion Manufacturing",
    gradient: "from-blue-700 via-indigo-800 to-purple-900",
    backgroundImage: "/background-section1.png",
  },
  {
    content:
      "Implementing Atlas in our fulfillment centers reduced workplace injuries by 40% while improving order accuracy. The learning capabilities are remarkable.",
    author: "Michael Rodriguez",
    role: "Director of Logistics, GlobalShip",
    gradient: "from-indigo-900 via-purple-800 to-orange-500",
    backgroundImage: "/background-section2.png",
  },
  {
    content:
      "Atlas adapted to our lab protocols faster than any system we've used. It's like having another researcher who never gets tired and maintains perfect precision.",
    author: "Dr. Amara Patel",
    role: "Lead Scientist, BioAdvance Research",
    gradient: "from-purple-800 via-pink-700 to-red-500",
    backgroundImage: "/background-section3.png",
  },
  {
    content:
      "As a mid-size business, we never thought advanced robotics would be accessible to us. Atlas changed that equation entirely with its versatility and ease of deployment.",
    author: "Jason Lee",
    role: "CEO, Innovative Solutions Inc.",
    gradient: "from-orange-600 via-red-500 to-purple-600",
    backgroundImage: "/background-section1.png",
  },
];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png",
}: TestimonialProps) => {
  return (
    <div
      className="relative flex h-full transform flex-col justify-between overflow-hidden rounded-lg bg-cover bg-center p-8 text-white transition-transform duration-300 hover:-translate-y-2"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="absolute right-0 top-0 z-10 h-24 w-24 bg-white"></div>

      <div className="relative z-0">
        <p className="mb-8 pr-20 text-xl font-medium leading-relaxed">{`"${content}"`}</p>
        <div>
          <h4 className="text-xl font-semibold">{author}</h4>
          <p className="text-white/80">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="relative bg-white py-12"
      id="testimonials"
      ref={sectionRef}
    >
      {" "}
      {/* Reduced from py-20 */}
      <div className="section-container animate-on-scroll opacity-0">
        <div className="mb-6 flex items-center gap-4">
          <div className="pulse-chip">
            <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-pulse-500 text-white">
              05
            </span>
            <span>Testimonials</span>
          </div>
        </div>

        <h2 className="mb-12 text-left font-display text-5xl font-bold">
          What others say
        </h2>

        <div className="grid cursor-pointer grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              gradient={testimonial.gradient}
              backgroundImage={testimonial.backgroundImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
