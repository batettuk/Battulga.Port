import { PropsWithChildren } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>{t.landing.greeting}</h2>
            <h1 className="landing-name">
              <span className="landing-name-initial">{t.landing.nameInitial}</span>
              {t.landing.nameRest}
            </h1>
          </div>
          <div className="landing-info">
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{t.landing.role1}</div>
            </h2>
            <h2 className="landing-info-h2-sub">
              <div className="landing-h2-info">{t.landing.role2}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
