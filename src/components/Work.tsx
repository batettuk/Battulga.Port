import { useEffect, useRef, useState } from "react";
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiLayers, FiCpu, FiExternalLink, FiTerminal, FiZap } from "react-icons/fi";
import { config } from "../config";

gsap.registerPlugin(ScrollTrigger);

const roadmapItems = [
  {
    icon: FiCpu,
    number: "01",
    title: "3D & Visual Fidelity",
    description: "Perfecting custom MacBook Pro typing animations, procedural screen light beams, and real-time head tracking.",
    tag: "Three.js / WebGL",
  },
  {
    icon: FiLayers,
    number: "02",
    title: "SaaS & API Integration",
    description: "Connecting dynamic data layers and query mutations using Erxes SaaS APIs and intelligent AI workflows.",
    tag: "GraphQL / Erxes API",
  },
  {
    icon: FiZap,
    number: "03",
    title: "Performance & Mobile UX",
    description: "Streamlining bundle payloads, 60fps WebGL execution, and fluid gesture handling across all mobile viewports.",
    tag: "Vite / Performance",
  },
];

const technicalPillars = [
  {
    num: "01",
    title: "3D WebGL Interactions",
    desc: "Custom MacBook Pro rigging with glowing Apple logo, volumetric screen light, and interactive head rotation.",
  },
  {
    num: "02",
    title: "GSAP Scroll Choreography",
    desc: "Camera perspective transitions, responsive scroll-triggered scrubbing, and fluid layout transforms.",
  },
  {
    num: "03",
    title: "Minimalist UI Architecture",
    desc: "Handcrafted typography, dark luxury violet aesthetics, and high-performance React + TypeScript architecture.",
  },
  {
    num: "04",
    title: "SaaS & AI Integration Ready",
    desc: "Engineered to integrate Erxes SaaS API query/mutations and AI-assisted automation pipelines.",
  },
];

const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || window.innerWidth <= 1024) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".work-section h2, .focus-subtitle",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".work-section",
            start: "top 75%",
            id: "work",
          },
        }
      );

      gsap.fromTo(
        ".focus-main-card",
        { opacity: 0, y: 50, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".focus-main-card",
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".roadmap-card",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.18,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".focus-roadmap-grid",
            start: "top 85%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="work-section" id="work" ref={containerRef}>
      <div className="focus-container section-container">
        {/* Section Header */}
        <div className="focus-header">
          <h2>
            Current <span>Focus</span>
          </h2>
          <p className="focus-subtitle">
            Iterating on interactive 3D WebGL interactions, clean minimalist design, and modern front-end engineering.
          </p>
        </div>

        {/* Main Spotlight Card */}
        <div className="focus-main-card">
          <div className="focus-ambient-glow"></div>

          {/* HUD Corner Accents */}
          <span className="focus-corner top-left"></span>
          <span className="focus-corner top-right"></span>
          <span className="focus-corner bottom-left"></span>
          <span className="focus-corner bottom-right"></span>

          <div className="focus-card-grid">
            {/* Left Column: Vision & Architecture */}
            <div className="focus-info-col">
              <h3 className="focus-project-title">Interactive 3D Portfolio</h3>

              <p className="focus-desc">
                My primary focus is engineering and refining this interactive web portfolio. Rather than presenting static pages,
                I am pushing modern front-end boundaries—combining real-time Three.js 3D character interactions, custom-rigged
                MacBook Pro hardware with volumetric lighting, and silky GSAP timeline choreographies into one unified, minimalist experience.
              </p>

              {/* Technical Pillars Grid */}
              <div className="focus-pillars-grid">
                {technicalPillars.map((pillar, idx) => (
                  <div className="focus-pillar-item" key={idx}>
                    <div className="pillar-num">{pillar.num}</div>
                    <div>
                      <h4 className="pillar-title">{pillar.title}</h4>
                      <p className="pillar-desc">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="focus-tech-pills">
                {["React 18", "TypeScript", "GraphQL", "Erxes API", "Vite"].map(
                  (tech, idx) => (
                    <span key={idx} className="focus-tech-pill">
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Right Column: Live Mockup Showcase */}
            <div className="focus-visual-col">
              <div
                className="focus-preview-frame"
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                }}
              >
                {/* Mockup Browser Header */}
                <div className="preview-top-bar">
                  <div className="window-dots">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                  </div>
                  <div className="browser-url">
                    <FiTerminal className="url-icon" />
                    <span>gbattulga.dev/portfolio-v2</span>
                  </div>
                  <div className="preview-status-pill">
                    <span className="status-indicator"></span>
                    <span>60 FPS</span>
                  </div>
                </div>

                {/* Screenshot / Preview Image */}
                <div className="preview-image-wrapper">
                  <img
                    src="/images/portfolio-preview.png"
                    alt="G.Battulga Portfolio Live Preview"
                    className="preview-img"
                  />
                  <div className="preview-glass-sheen"></div>
                  <div className="preview-scanline"></div>
                </div>

                {/* Telemetry Footer */}
                <div className="preview-bottom-bar">
                  <div className="telemetry-item">
                    <span className="telemetry-label">ENGINE</span>
                    <span className="telemetry-val">Three.js + GSAP</span>
                  </div>
                  <div className="telemetry-item">
                    <span className="telemetry-label">ARCHITECTURE</span>
                    <span className="telemetry-val">React + TypeScript</span>
                  </div>
                  <a
                    href={`https://github.com/${config.social.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="telemetry-link"
                    data-cursor="disable"
                  >
                    <span>View GitHub</span>
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Strategic Roadmap Cards */}
        <div className="focus-roadmap-header">
          <h3>Active Development Roadmap</h3>
          <p>Key technical milestones currently in progress across this platform.</p>
        </div>

        <div className="focus-roadmap-grid">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="roadmap-card">
                <div className="roadmap-top">
                  <div className="roadmap-icon-box">
                    <Icon />
                  </div>
                  <span className="roadmap-tag">{item.tag}</span>
                </div>
                <div className="roadmap-body">
                  <span className="roadmap-num">{item.number}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="roadmap-indicator-bar"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
