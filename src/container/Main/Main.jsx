import { Link, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import MenuList from "../../components/BurgerMenu/MenuList/MenuList";
import Loading from "../../components/Loading/Loading";
import "./Main.scss";
import UserPage from "../../pages/UserPage/UserPage";
import RequireAuth from "../../hooks/PrivatePages/RequireAuth";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../../pages/SignUp/SignUp"));
const TobacPage = lazy(() => import("../../pages/TobacPage/TobacPage"));

const Main = () => {
  return (
    <main className="main">
      <Link to={"/user"}>user</Link>
      <MenuList />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="/sign-up"
          element={
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="/tobac"
          element={
            <Suspense fallback={<Loading />}>
              <TobacPage />
            </Suspense>
          }
        />
        <Route
          path="/user"
          element={
            <RequireAuth>
              <Suspense fallback={<Loading />}>
                <UserPage />
              </Suspense>
            </RequireAuth>
          }
        />
      </Routes>
    </main>
  );
};
export default Main;
