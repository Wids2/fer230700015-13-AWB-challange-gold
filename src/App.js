import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/SectionNavigationBar";
import Services from "./components/SectionServices";
import Products from "./components/SectionProducts";
import Testimonial from "./components/SectionTestimonial";
import HasilPencarian from "./pages/Pencarian/HasilPencarian";
import Faq from "./components/SectionFaq";
import Footer from "./components/SectionFooter";
import CarList from "./pages/CarList";
import DetailCar from "./pages/DetailCar";
import MainOutlet from "./components/Outlet/outlet";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<MainOutlet />} />
          <Route path="/home" element={<MainOutlet />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/testi" element={<Testimonial />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cars" element={<CarList />} />
          <Route path="/hasil-cari" element={<HasilPencarian />} />
          <Route path="/cars-detail/:id" element={<DetailCar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
