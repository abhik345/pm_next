"use client";

import { fetchData } from "@/lib/api";
import Image from "next/image";
import { useEffect, useState } from "react";

const Journey =  () => {

  const [journeyData, setJourneyData] = useState(null);

    const fetchJourneyData = async () => {
      const data = await fetchData('/pages/10?_fields=acf.journey_section_options&acf_format=standard');
      if (data) {
        setJourneyData(data?.acf?.journey_section_options);
      } else {
        console.log('Failed to fetch journey data');
      }
    };
  
    useEffect(() => {
      fetchJourneyData();
    }, []);
  

  return (
    <>
      <section className="about_journey pt-5 pb-20 mb-0" style={{
        background: `linear-gradient(150deg, rgba(66, 66, 66, 1) 0%, rgba(89, 89, 89, 1) 100%)`
      }}>
        <div className="container mx-auto px-10">
          <h2 className="main-heading text-[36px] font-bold mb-4 md:text-[48px] lg:text-[50px]">
            <span className="text-[#959595]">
              {journeyData?.title_section?.title}
            </span>
            <span className="text-[#959595]">
              {journeyData?.title_section?.sub_title}
            </span>
          </h2>
          <div className="about_new_section col-span-4 flex flex-wrap gap-5 justify-center w-[100%] relative ">
            <div className="box bg-white relative 2xl:h-40 2xl:w-72 xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40  rounded-md px-4 py-5">
              <div className="  top_date_img_part flex justify-around">
                <Image
                  className="absolute left-4 w-14 h-14"
                  src="/graduation-cap.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2008
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                Completed MBA (Marketing) from IBS, Hyderabad
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className="  top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/office-building.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2009
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                Kickstarted Kreative Machinez, Kolkata, India
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className="  top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/revenue.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2011
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium text-[16px] line-clamp-3  left-4 right-4  text-[#424242]">
                ⁠Touched $100k revenue
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className="  top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/revenue.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2013
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                Opened sales office in USA, Beverley Hills, CA
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className="  top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/customers.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2021
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                ⁠Bagged our first USA Inc 5000 client
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className="  top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/seo-search-symbol.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2020
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[15px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                ⁠Won “Best SEO Agency” award , San Jose
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className="  top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/award.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2017
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[15px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242]">
                ⁠Won Best Practices award as Engage 2017 for IPL 10 k+
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className="  top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/insurance-company.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2016
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[15px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                ⁠Opened sales office in Hongkong
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className=" top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/position.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl">
                  2022
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[15px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4  text-[#424242] ">
                ⁠Moved to a new office in the heart of IT zone, Sector 5,
                Saltlake
              </p>
            </div>

            <div className="box bg-white relative 2xl:h-40 2xl:w-72  xl:h-40 xl:w-60 lg:h-40 lg:w-60 md:h-40 md:w-48 sm:w-44 sm:h-40 rounded-md px-4 py-5">
              <div className=" top_date_img_part flex justify-around">
              <Image
                  className="absolute left-4 w-14 h-14"
                  src="/award-symbol.png"
                  alt="error"
                  width={56}
                  height={56}
                />
                <h3 className=" absolute top-4 right-8 text-[#424242] font-extrabold 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-4xl sm:text-2xl">
                  2023
                </h3>
              </div>
              <p className=" absolute bottom-2 font-medium 2xl:text-[16px] xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] line-clamp-3  left-4 right-4 text-[#424242] ">
                ⁠Won “Outstanding Leadership” award by Marketing 2.0, Dubai
              </p>
            </div>
            <div className="arow_part absolute z-10" style={{
              bottom: "36px",
              right: "18px",
              width: "267px" 
            }}>
              <button className="text-lg font-semibold">
                <img src="/right-arrow.png" />
                <p>…and the journey continues!</p>
              </button>
            </div>
            <div className="background_arrow">
              <img
                className="absolute 2xl:-right-20 xl:right-[16px] lg:right-0 lg:left-0  2xl:-top-[9px] xl:top-[6px] lg:-top[30px] md:top-0 md:left-0   lg:bottom-[64px]  w-[90%] lg:w-[90%] mx-auto 2xl:left-[10px] sm:left-0 sm:right-0 sm:top-0"
                src="/line_about.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Journey