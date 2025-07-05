import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Button from "./Button";

const navItems = [
  { label: "E-Commerce", path: "/e-commerce" },
  { label: "Analytics", path: "/analytics" },
  { label: "SEO", path: "/seo" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "mailto:abishai95141@gmail.com" },
];

const NavBar = () => {
  // State for toggling audio and visual indicator
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  // Refs for audio and navigation container
  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Toggle audio and visual indicator
  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  // Manage audio playback
  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className={clsx(
        "fixed left-0 right-0 top-0 z-50 h-20 w-full border-none transition-all duration-700 px-0",
        location.pathname === "/" && "bg-white bg-opacity-90 backdrop-blur-md shadow"
      )}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <div className={`md:flex hidden items-center justify-center gap-1`}>
              <Button
                id="product-button"
                title="Our Services"
                containerClass="bg-blue-50 text-black"
                onClick={() => {
                  if (window.location.pathname !== "/") {
                    navigate("/", { replace: false });
                    setTimeout(() => {
                      const el = document.getElementById("features");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  } else {
                    const el = document.getElementById("features");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              />
            </div>
          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                item.label === "Contact" ? (
                  <a
                    key={index}
                    href={item.path}
                    className="nav-hover-btn text-blue-600"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className="nav-hover-btn text-blue-600"
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
