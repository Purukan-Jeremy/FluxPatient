import React from "react";
import Logo from "../../assets/img/fluxLogo.png";

const Header = ({ searchTerm, setSearchTerm, title }) => {
  const styles = {
    header: {
      backgroundColor: "#3b4bff",
      padding: "16px",
      paddingBottom: "24px",
      borderBottomLeftRadius: "50px",
      borderBottomRightRadius: "50px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
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
      right: "-5px",
      top: "50%",
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
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={styles.searchIconSvg}
              >
                <path
                  d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 
                  16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 
                  5.91 16 9.5 16c1.61 0 3.09-.59 
                  4.23-1.57l.27.28v.79l5 4.99L20.49 
                  19l-4.99-5zm-6 0C7.01 14 5 11.99 5 
                  9.5S7.01 5 9.5 5 14 7.01 14 
                  9.5 11.99 14 9.5 14z"
                />
              </svg>
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
        <h1 style={styles.headerTitle}>{title}</h1>
      </div>
    </div>
  );
};

export default Header;
