// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5 border-top">
      <div className="container text-center text-muted small">
        <p>
          Questions or comments? Contact:{" "}
          <a href="mailto:curator@arabidopsis.org">curator@arabidopsis.org</a>
        </p>
        <div className="mt-2 d-flex justify-content-center gap-3">
          <a href="#" className="text-decoration-none text-muted">Facebook</a>
          <a href="#" className="text-decoration-none text-muted">Twitter</a>
          <a href="#" className="text-decoration-none text-muted">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
