import React, { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

const Header = ({ searchTerm, setSearchTerm, title }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
  const [isTablet, setIsTablet] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      setIsTablet(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
      padding: isMobile ? "12px" : isTablet ? "14px" : "16px",
      paddingBottom: isMobile ? "16px" : "24px",
      borderBottomLeftRadius: "50px",
      borderBottomRightRadius: "50px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      boxSizing: "border-box",
    },

    headerContent: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile ? "12px" : "0px",
    },

    logo: {
      flexShrink: 0,
      marginRight: isMobile ? "0px" : "16px",
    },

    searchWrapper: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },

    searchContainer: {
      position: "relative",
      maxWidth: isMobile ? "100%" : "700px",
      width: "100%",
    },

    searchInput: {
      width: "100%",
      padding: isMobile ? "6px 12px" : "8px 16px",
      paddingRight: "40px",
      borderRadius: "20px",
      border: "none",
      fontSize: isMobile ? "13px" : "14px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },

    searchIcon: {
      position: "absolute",
      top: "40%",
      right: "12px",
      transform: "translateY(-50%)",
      color: "#9ca3af",
      pointerEvents: "none",
    },

    searchIconSvg: {
      width: isMobile ? "16px" : "20px",
      height: isMobile ? "16px" : "20px",
    },

    userIcon: {
      backgroundColor: "white",
      borderRadius: "50%",
      width: isMobile ? "38px" : "45px",
      height: isMobile ? "38px" : "45px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },

    userIconSvg: {
      width: isMobile ? "32px" : "40px",
      height: isMobile ? "32px" : "40px",
    },

    headerTitle: {
      textAlign: "center",
      color: "white",
      fontSize: isMobile ? "24px" : isTablet ? "36px" : "48px",
      fontWeight: "bold",
      margin: 0,
      marginTop: isMobile ? "8px" : "16px",
    },
  };

  return (
    <div>
      <div style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.searchWrapper}>
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
          </div>
        </div>

        <h1 style={styles.headerTitle}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
