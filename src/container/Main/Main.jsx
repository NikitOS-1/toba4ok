import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import MenuList from "../../components/BurgerMenu/MenuList/MenuList";
import "./Main.scss";
import { LinearProgress } from "@mui/material";
// import HomePage from "../../pages/HomePage/HomePage";
// import SignIn from "../../pages/SignIn/SignIn";
// import SignUp from "../../pages/SignUp/SignUp";
// import TobacPage from "../../pages/TobacPage/TobacPage";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../../pages/SignUp/SignUp"));
const TobacPage = lazy(() => import("../../pages/TobacPage/TobacPage"));

const Main = () => {
  return (
    <main className="main">
      <div className="loading">
        <LinearProgress color="secondary" />
      </div>
      <MenuList />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={"Loading....."}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={"Loading....."}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={"Loading....."}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="/tobac"
          element={
            <Suspense fallback={"Loading....."}>
              <TobacPage />
            </Suspense>
          }
        />
      </Routes>
    </main>
  );
};
export default Main;
