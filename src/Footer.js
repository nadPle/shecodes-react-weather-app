import React from "react";

import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p className="Footnote">
        <a
          className="OpenSourceLink"
          href="https://github.com/nadPle/shecodes-plus-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>{" "}
        by Nadine Plepel
      </p>
    </div>
  );
}

export default Footer;
