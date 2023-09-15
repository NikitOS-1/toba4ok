import { Link, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import MenuList from "../../components/BurgerMenu/MenuList/MenuList";
import Loading from "../../components/Loading/Loading";
import "./Main.scss";
import RequireAuth from "../../hooks/PrivatePages/RequireAuth";
import { useSelector } from "react-redux";
import BrandPage from "../../pages/BrandPage/BrandPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignIn = lazy(() => import("../../pages/SignIn/SignIn"));
const SignUp = lazy(() => import("../../pages/SignUp/SignUp"));
const TobacPage = lazy(() => import("../../pages/TobacPage/TobacPage"));
const UserPage = lazy(() => import("../../pages/UserPage/UserPage"));

const Main = () => {
  const currentPath = useLocation().pathname;

  const brand = useSelector((state) => state.sellectBrand.brand);

  console.log(brand);
  return (
    <main className="main">
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
          path="sign-in"
          element={
            <Suspense fallback={<Loading />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="sign-up"
          element={
            <Suspense fallback={<Loading />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route
          path="tobac"
          element={
            <Suspense fallback={<Loading />}>
              <TobacPage />
            </Suspense>
          }
        />
        <Route
          path={`/tobac/${brand}`}
          element={
            <Suspense fallback={<Loading />}>
              <BrandPage brand={brand} />
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
        <Route
          path="*"
          element={
            <RequireAuth>
              <Suspense fallback={<Loading />}>
                <NotFoundPage />
              </Suspense>
            </RequireAuth>
          }
        />
      </Routes>
    </main>
  );
};
export default Main;
