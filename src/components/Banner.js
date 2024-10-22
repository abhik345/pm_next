"use client"
import { useState, useEffect } from 'react';

const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Banner = () => {
  const [bannerData, setBannerData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        const response = await fetch(
          `${NEXT_PUBLIC_API_BASE_URL}/pages/10?_fields=acf.banner_section_options&acf_format=standard`,
          { method: 'GET' }
        );
        if (!response.ok) {
          console.log('Failed to fetch data');
        }
        const data = await response.json();
        setBannerData(data.acf.banner_section_options);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchBannerData();
  }, []);

  return (
    <div className="relative w-full h-[700px] object-cover flex items-center justify-center">
      <div className="banner_video absolute inset-0 w-full h-full">
        {isMobile === false ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={bannerData?.inner_banner_video}
          />
        ) : (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={bannerData?.banner_video}
          />
        )}
      </div>
      <div className="bg-gradient-to-b"></div>
      <div className="sm:px-5 md:w-[62%] sm:w-[50%]">
      </div>
    </div>
  );
};

export default Banner;
