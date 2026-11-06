import "./styles/About.css";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">{t.about.title}</h3>
        <p className="para">{t.about.description}</p>
      </div>
    </div>
  );
};

export default About;
