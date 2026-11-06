import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import Signature from "./Signature";
import { gsap } from "gsap";
import Lenis from "lenis";
import { config } from "../config";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);
export let lenis: Lenis | null = null;

const Navbar = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // Initialize Lenis smooth scroll
    lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
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
        e.preventDefault();
        let elem = e.currentTarget as HTMLAnchorElement;
        let section = elem.getAttribute("data-href");
        if (section) {
          const target = document.querySelector(section) as HTMLElement;
          if (target) {
            if (lenis) {
              lenis.scrollTo(target, {
                offset: 0,
                duration: 1.5,
              });
            } else {
              target.scrollIntoView({ behavior: "smooth" });
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
        <Signature />
        <a
          href={`mailto:${config.contact.email}`}
          className="navbar-connect"
          data-cursor="disable"
        >
          {config.contact.email}
        </a>
        <div className="header-right">
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text={t.nav.about} />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text={t.nav.focus} />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text={t.nav.contact} />
              </a>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
