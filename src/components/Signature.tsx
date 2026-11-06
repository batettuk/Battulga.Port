import React from "react";
import "./styles/Signature.css";

interface SignatureProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Signature: React.FC<SignatureProps> = ({ className = "", onClick }) => {
  return (
    <a
      href="/#"
      className={`signature-link ${className}`}
      data-cursor="disable"
      aria-label="Battulga Signature"
      onClick={onClick}
    >
      <div className="signature-container">
        {/* Base White Signature */}
        <div className="signature-base" />
        {/* Flowing Violet Ink Overlay */}
        <div className="signature-flow" />
      </div>
    </a>
  );
};

export default Signature;
