"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SmoothScrolling from "@/components/SmoothScrolling";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading.jsx";

const CustomLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loading onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <SmoothScrolling>
            <Navbar />
            {children}
            <Footer />
          </SmoothScrolling>
        </>
      )}
    </div>
  );
};

export default CustomLayout;
