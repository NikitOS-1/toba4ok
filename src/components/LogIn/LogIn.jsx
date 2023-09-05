import { useState } from "react";
import "./LogIn.scss";
import { Avatar } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

const visibleVariant = {
  hidden: {
    // width: "auto",
    // height: 0,
    opacity: 0,
    position: "absolute",
    top: "50px",
    right: 0,
  },
  show: {
    // width: "150px",
    // height: "max-content",
    opacity: 1,
    position: "absolute",
    top: "85px",
    right: "10%",
  },
};

const LogIn = () => {
  const [isOpens, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="avatar">
      <PersonIcon onClick={showMenu} className="avatar-icon" />
      <AnimatePresence>
        {isOpens && (
          <motion.div
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="avatar-about"
            variants={visibleVariant}>
            <ul className="login-menu" onClick={showMenu}>
              <li>
                <Link to="sign-in">
                  <span className="icon-sign">
                    <LoginIcon />
                  </span>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="sign-up">
                  <span className="icon-sign">
                    <LogoutIcon />
                  </span>
                  Sign Up
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LogIn;
