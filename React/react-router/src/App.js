import { Routes, Route } from "react-router-dom";
// import About from './components/About';
import React from "react";

import FeatureProducts from "./components/FeatureProducts";
import Galary from "./components/Galary";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewProducts from "./components/NewProducts";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import UserName from "./components/UserName";
import Users from "./components/Users";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { AuthProvider } from "./components/auth";
import AuthRequired from "./components/AuthRequired";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="">
            <Route index element={<Home />}></Route>
          </Route>
          <Route path="home" element={<Home />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback={<h1>Mukul</h1>}>
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="galary" element={<Galary />} />
          <Route path="products" element={<Products />}>
            <Route path="featuredProducts" element={<FeatureProducts />} />
            <Route path="newProducts" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserName />}></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="profile" element={<AuthRequired><Profile /></AuthRequired>} />
          <Route path="login" element={<Login/>} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
