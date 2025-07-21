import { FeatureCard } from "./Features";

const DetailsSection = () => {
  return (
    <section id="details" className="bg-white">
      <div className="section-container animate-on-scroll opacity-0">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="pulse-chip">
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-pulse-500 text-white">
                04
              </span>
              <span>Details</span>
            </div>
          </div>

          <h2 className="mb-12 text-left font-display text-5xl font-bold">
            Advanced Robotics Technology
          </h2>

          <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="cursor-pointer space-y-6">
              <FeatureCard
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M9 13v-1h6v1"></path>
                    <path d="M11 18.5l-.5-1 1-.5.5 1.5-1 .5-.5-1 1-.5"></path>
                    <path d="M9.5 12 9 11H4"></path>
                  </svg>
                }
                title="Autonomous Navigation
"
                description="Atlas utilizes advanced LIDAR and computer vision systems to
                  navigate complex environments with precision and safety."
              />

              <FeatureCard
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2"></rect>
                    <circle cx="12" cy="5" r="2"></circle>
                    <path d="M12 7v4"></path>
                    <line x1="8" x2="8" y1="16" y2="16"></line>
                    <line x1="16" x2="16" y1="16" y2="16"></line>
                  </svg>
                }
                title="Natural Language Processing
"
                description="Communicate naturally with Atlas using voice commands and
                  conversational AI powered by state-of-the-art language models."
              />
            </div>

            <div className="cursor-pointer space-y-6">
              <FeatureCard
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 1 1-4-4"></path>
                    <path d="M12 8a4 4 0 1 0 4 4"></path>
                    <circle cx="12" cy="12" r="1"></circle>
                  </svg>
                }
                title="Adaptive Learning
"
                description="Atlas learns from interactions and adapts to your preferences,
                  becoming more helpful and personalized over time."
              />
              <FeatureCard
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                    <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                    <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" x2="12" y1="22.08" y2="12"></line>
                  </svg>
                }
                title="Emotional Intelligence

"
                description="Advanced emotion recognition allows Atlas to respond
                  appropriately to human emotions and social cues."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
