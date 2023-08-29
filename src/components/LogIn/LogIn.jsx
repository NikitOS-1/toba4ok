import { useState } from "react";
import "./LogIn.scss";
import { Avatar } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../redux/modalReducer";
import UseModal from "../Modal/UseModal";
import SignIn from "../../pages/SignIn/SignIn";

const visibleVariant = {
  hidden: {
    width: "auto",
    height: 0,
    opacity: 0,
    position: "absolute",
    top: "50px",
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

const LogIn = () => {
  const modalOpen = useSelector(isOpen);
  s;
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const showMenu = () => {
    setIsOpen((prev) => !prev);
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
              <li>
                <p>Sign In</p>
              </li>
              <li>
                <p>Sign Up</p>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default LogIn;
