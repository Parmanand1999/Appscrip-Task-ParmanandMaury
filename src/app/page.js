"use client";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar";
import FilterComponent from "./components/FilterComponent";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FilterBar />
      
      <Footer/>
    </>
  );
}
