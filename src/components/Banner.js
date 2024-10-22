"use client";
import { useState, useEffect } from 'react';
import { fetchData } from '@/lib/api';

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
      const data = await fetchData('/pages/10?_fields=acf.banner_section_options&acf_format=standard');
      if (data) {
        setBannerData(data.acf.banner_section_options);
      } else {
        console.log('Failed to fetch banner data');
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
