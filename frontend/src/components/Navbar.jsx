import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={styles.nav}
    >
      <Link to="/" style={styles.logo}>
        Orbiton
      </Link>

      <div style={styles.links}>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/prompts">Prompts</NavLink>
      </div>

      <Link to="/tools" style={styles.cta}>
        Get Started
      </Link>
    </motion.nav>
  );
}

function NavItem({ to, children }) {
  return (
    <NavLink to={to} style={styles.link}>
      {({ isActive }) => (
        <motion.span
          style={{
            position: "relative",
            color: isActive ? "#2563eb" : "#111",
          }}
        >
          {children}
          {isActive && (
            <motion.div
              layoutId="underline"
              style={styles.underline}
            />
          )}
        </motion.span>
      )}
    </NavLink>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    width: "100%",
    height: "72px",
    padding: "0 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backdropFilter: "blur(12px)",
    background: "rgba(255,255,255,0.85)",
    borderBottom: "1px solid #eee",
    zIndex: 1000,
  },
  logo: {
    fontSize: "20px",
    fontWeight: 700,
    textDecoration: "none",
    color: "#111",
  },
  links: {
    display: "flex",
    gap: "32px",
  },
  link: {
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
  },
  underline: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: -6,
    height: "2px",
    background: "#2563eb",
    borderRadius: "2px",
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
