import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiMenu, HiX } from "react-icons/hi";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import Lenis from "lenis";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    // Start paused
    lenis.stop();

    // Handle smooth scroll animation frame
    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Handle navigation links
    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          if (section && lenis) {
            const target = document.querySelector(section) as HTMLElement;
            if (target) {
              lenis.scrollTo(target, {
                offset: 0,
                duration: 1.5,
              });
            }
          }
        }
      });
    });

    // Handle resize
    window.addEventListener("resize", () => {
      lenis?.resize();
    });

    return () => {
      lenis?.destroy();
    };
  }, []);

  return (
    <>
      <div className="header">
        <div className="navbar-title-wrap" data-cursor="disable">
          <a
            href="/#"
            className="navbar-title"
            onClick={(e) => {
              e.preventDefault();
              setShowProfile(true);
            }}
          >
            SK
          </a>
          <div className="navbar-avatar-preview">
            <img src="/images/sumit.png" alt="Sumit Kumar" />
          </div>
        </div>
        <a
          href="mailto:sumitrathore45528@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sumitrathore45528@gmail.com
        </a>
            <button
              className="navbar-hamburger"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              data-cursor="disable"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>

            <ul className={menuOpen ? "nav-menu-open" : ""}>
        
          
          <li>
            <a data-href="#about" href="#about" onClick={() => setMenuOpen(false)}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={() => setMenuOpen(false)}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={() => setMenuOpen(false)}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      {showProfile && (
        <div
          className="profile-modal-overlay"
          onClick={() => setShowProfile(false)}
        >
          <div
            className="profile-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="profile-modal-close"
              onClick={() => setShowProfile(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src="/images/sumit.png"
              alt="Sumit Kumar"
              className="profile-modal-img"
            />
          </div>
        </div>
      )}

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;