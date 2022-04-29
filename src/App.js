import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import CheckOut from "./pages/CheckOut/CheckOut/CheckOut";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import NotFound from "./pages/Shared/NotFound/NotFound";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";
import AddService from "./pages/AddService/AddService";
import ManageService from "./pages/ManageService/ManageService";
import { ToastContainer } from "react-toastify";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/service/:serviceId" element={<ServiceDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageService />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
