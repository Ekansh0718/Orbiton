import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={styles.nav}
    >
      {/* LOGO ONLY */}
      <Link to="/" style={styles.logoWrapper}>
        <img src={logo} alt="Orbiton" style={styles.logo} />
      </Link>

      {/* NAV LINKS */}
      <div style={styles.links}>
        <NavLink to="/tools" style={styles.link}>
          Tools
        </NavLink>
        <NavLink to="/prompts" style={styles.link}>
          Prompts
        </NavLink>
      </div>

      {/* CTA */}
      <Link to="/tools" style={styles.cta}>
        Get Started
      </Link>
    </motion.nav>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "72px",
    padding: "0 32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid #eee",
    zIndex: 1000,
  },

  logoWrapper: {
    display: "flex",
    alignItems: "center",
    height: "100%",
  },

  logo: {
    height: "35px",       // 👈 perfect website-standard size
    width:"auto",
    // display: "block",
    objectFit: "contain"
  },

  links: {
    display: "flex",
    gap: "32px",
  },

  link: {
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    color: "#111",
  },

  cta: {
    background: "#2563eb",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
  },
};

export default Navbar;
