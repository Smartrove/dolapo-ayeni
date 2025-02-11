import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Landingpage from "./components/Landingpage";
import Footer from "./components/Footer/Footer";
import TermsOfUse from "./components/TermOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Blog from "./components/Blog";
import SingleBlogPost from "./components/SingleBlogPost";
import Portfolio from "./components/Portfolio";
import AboutUs from "./components/AboutUs";
import GrowBusiness from "./components/GrowBusiness";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/termofuse" element={<TermsOfUse />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/singleblog" element={<SingleBlogPost />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<GrowBusiness />} />
      </Routes>
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
