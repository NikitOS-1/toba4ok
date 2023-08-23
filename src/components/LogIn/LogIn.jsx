import { useState } from "react";
import "./LogIn.scss";
import { Avatar } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const LogIn = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const visibleVariant = {
    hidden: {
      width: "auto",
      height: 0,
      opacity: 0,
      position: "absolute",
      top: "60px",
      right: 0,
    },
    show: {
      width: "150px",
      height: "max-content",
      opacity: 1,
      position: "absolute",
      top: "85px",
      right: "10%",
    },
  };

  return (
    <div className="avatar">
      <Avatar onClick={showMenu} className="avatar-icon" />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={"hidden"}
            animate={"show"}
            exit={"hidden"}
            className="avatar-about"
            variants={visibleVariant}>
            <ul className="login-menu">
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default LogIn;
