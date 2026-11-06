import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";
import "./MyWorks.css";

const MyWorks = () => {
  const { t } = useLanguage();

  return (
    <div className="myworks-page">
      <div className="myworks-nav-row">
        <Link to="/" className="back-button" data-cursor="disable">
          {t.myWorks.back}
        </Link>
        <LanguageSwitcher />
      </div>

      <div className="myworks-header">
        <h1>
          {t.myWorks.titleAll}<span>{t.myWorks.titleWorks}</span>
        </h1>
        <p>{t.myWorks.subtitle}</p>
      </div>

      <div className="myworks-grid">
        {t.myWorks.projects.map((project, index) => {
          const isInternalLink = Boolean(project.link?.startsWith("/"));
          const cardContent = (
            <>
              <div className="myworks-card-number">0{index + 1}</div>
              <div className="myworks-card-image">
                <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              </div>
              <div className="myworks-card-info">
                <h3>{project.title}</h3>
                <p className="myworks-card-category">{project.category}</p>
                <p className="myworks-card-description">{project.description}</p>
                <p className="myworks-card-tech">{project.technologies}</p>
              </div>
            </>
          );

          if (isInternalLink && project.link) {
            return (
              <Link
                className="myworks-card"
                key={project.id}
                data-cursor="disable"
                to={project.link}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <a
              className="myworks-card"
              key={project.id}
              data-cursor="disable"
              href={project.link || undefined}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MyWorks;
