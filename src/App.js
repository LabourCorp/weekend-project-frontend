import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CoreValues from "./components/CoreValues";

export function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HeroSection />} />
                <Route path="/core-values" element={<CoreValues />} />
            </Routes>
            <Footer />
        </Router>
    );
}
