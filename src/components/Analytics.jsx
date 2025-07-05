import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const sectionRef = useRef(null);
  const ctaRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
    gsap.fromTo(
      ".analytics-feature",
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 1, stagger: 0.15, delay: 0.5, ease: "power2.out" }
    );
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-violet-50 to-white transition-all duration-700">
      <div className="w-full max-w-4xl flex flex-col items-center py-24 px-4">
        <h1 className="text-5xl md:text-7xl font-zentry font-black mb-4 text-center text-black animate-fade-in-up drop-shadow-lg">
          Analytics Dashboard
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl text-center text-gray-700 mb-10 animate-fade-in-up">
          Visualize your business performance with real-time dashboards, sales tracking, and actionable insights powered by Buildersarc's AI analytics.
        </p>
        <div className="w-full max-w-3xl p-8 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-md border border-blue-200 animate-fade-in-up">
          <ul className="list-disc list-inside text-lg text-black space-y-3">
            <li className="analytics-feature">Live sales and traffic monitoring</li>
            <li className="analytics-feature">Customizable reports</li>
            <li className="analytics-feature">Customer behavior analytics</li>
            <li className="analytics-feature">Predictive business intelligence</li>
          </ul>
        </div>
        <div className="mt-12 flex justify-center w-full">
          <Button
            ref={ctaRef}
            title="Get Started with Analytics"
            containerClass="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-bold shadow-lg transition-all duration-300 rounded-full"
            onClick={() => navigate('/contact')}
          />
        </div>
      </div>
    </section>
  );
};

export default Analytics; 