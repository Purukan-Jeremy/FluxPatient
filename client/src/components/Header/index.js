import React from "react";
import Logo from "../../assets/img/fluxLogo.png";
import { MdSearch } from "react-icons/md";

const Header = ({ searchTerm, setSearchTerm }) => {
  const styles = {
    header: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      maxWidth: "100vw",
      overflowX: "hidden",
      zIndex: "1000",
      backgroundColor: "#3b4bff",
      padding: "16px",
      paddingBottom: "24px",
      borderBottomLeftRadius: "50px",
      borderBottomRightRadius: "50px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      boxSizing: "border-box",
    },

    headerContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    logo: {
      flexShrink: 0,
      marginRight: "-50px",
    },
    searchContainer: {
      position: "relative",
      flexGrow: 1,
      maxWidth: "700px",
      width: "100%",
    },
    searchInput: {
      width: "100%",
      padding: "8px 16px",
      paddingLeft: "24px",
      paddingRight: "0px",
      borderRadius: "20px",
      border: "none",
      fontSize: "14px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    searchIcon: {
      position: "absolute",
      right: "10px",
      top: "20px",
      transform: "translateY(-50%)",
      color: "#9ca3af",
      cursor: "pointer",
    },
    searchIconSvg: {
      width: "18px",
      height: "18px",
    },
    userIcon: {
      backgroundColor: "white",
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    userIconSvg: {
      width: "40px",
      height: "40px",
    },
    headerTitle: {
      textAlign: "center",
      color: "white",
      fontSize: "48px",
      fontWeight: "bold",
      margin: 0,
    },
  };

  return (
    <div>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.logo}>
            <img
              src={Logo}
              alt="Flux Logo"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div style={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search..."
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div style={styles.searchIcon}>
              <MdSearch style={styles.searchIconSvg} />
            </div>
          </div>
          <div style={styles.userIcon}>
            <svg viewBox="0 0 24 24" fill="black" style={styles.userIconSvg}>
              <path
                d="M12 12c2.21 0 4-1.79 
                4-4s-1.79-4-4-4-4 1.79-4 4 
                1.79 4 4 4zm0 2c-2.67 0-8 
                1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
              />
            </svg>
          </div>
        </div>
        <h1 style={styles.headerTitle}>Check Your Symptom</h1>
      </div>
    </div>
  );
};

export default Header;
