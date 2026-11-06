import {
  FaGithub,
  FaInstagram,
  FaFacebookF,
  FaDiscord,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { config } from "../config";
import Signature from "./Signature";
import { lenis } from "./Navbar";

gsap.registerPlugin(ScrollTrigger);

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    if (social) {
      social.querySelectorAll("span").forEach((item) => {
        const elem = item as HTMLElement;
        const link = elem.querySelector("a") as HTMLElement;
        if (!link) return;

        const rect = elem.getBoundingClientRect();
        let mouseX = rect.width / 2;
        let mouseY = rect.height / 2;
        let currentX = 0;
        let currentY = 0;

        const updatePosition = () => {
          currentX += (mouseX - currentX) * 0.1;
          currentY += (mouseY - currentY) * 0.1;

          link.style.setProperty("--siLeft", `${currentX}px`);
          link.style.setProperty("--siTop", `${currentY}px`);

          requestAnimationFrame(updatePosition);
        };

        const onMouseMove = (e: MouseEvent) => {
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          if (x < 40 && x > 10 && y < 40 && y > 5) {
            mouseX = x;
            mouseY = y;
          } else {
            mouseX = rect.width / 2;
            mouseY = rect.height / 2;
          }
        };

        document.addEventListener("mousemove", onMouseMove);

        updatePosition();

        return () => {
          elem.removeEventListener("mousemove", onMouseMove);
        };
      });
    }

    // Scroll animation: slides signature out to the right when scrolled past landing (desktop only)
    const mm = gsap.matchMedia();
    mm.add("(min-width: 769px)", () => {
      gsap.to(".corner-signature", {
        x: 180,
        autoAlpha: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top",
          end: "bottom 35%",
          scrub: 0.5,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  const handleSignatureClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href={config.contact.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href={config.contact.facebook} target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </span>
        <span>
          <a href={config.contact.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href={config.contact.discord} target="_blank" rel="noopener noreferrer">
            <FaDiscord />
          </a>
        </span>
      </div>
      <div className="corner-signature">
        <Signature onClick={handleSignatureClick} />
      </div>
    </div>
  );
};

export default SocialIcons;
