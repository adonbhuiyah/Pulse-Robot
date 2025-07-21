import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Thank you for subscribing!",
        description: "You'll receive updates about Atlas soon.",
      });
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  return (
    <section id="newsletter" className="bg-white py-0">
      <div className="section-container animate-on-scroll opacity-0">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="pulse-chip">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-pulse-500 text-white">
                05
              </span>
              <span>Newsletter</span>
            </div>
          </div>

          <h2 className="mb-4 text-left font-display text-5xl font-bold">
            Subscribe to the newsletter
          </h2>
          <p className="mb-10 text-left text-xl text-gray-700">
            Be first to hear about breakthroughs, partnerships, and deployment
            opportunities
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-4 md:flex-row md:items-center"
          >
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full rounded-full border border-gray-200 px-6 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pulse-500"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full bg-pulse-500 px-10 py-4 font-medium text-white transition-all duration-300 hover:bg-pulse-600 md:ml-4"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
