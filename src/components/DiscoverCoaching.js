'use client'
import {fetchData} from "@/lib/api"
import { useState,useEffect } from "react";

const DiscoverCoaching = () => {

    const [getCoachingBenefitsData,setCoachingBenefitsData] = useState(null)

    useEffect(()=>{
        const fetchCoachingBenefitsData = async()=>{
            const data = await fetchData(
                "/pages/889?_fields=acf.benefits&acf_format=standard"
            );
            if (data) {
                setCoachingBenefitsData(data)
            }else{
                console.log("failed to fetch coaching benefits Data")
            }
        }
        fetchCoachingBenefitsData()
    },[])
  return (
    <>
      <div className="discover_part bg-[#3c3c3c] 2xl:py-14 xl:py-14 lg:py-14 md:py-10 sm:py-10 kx:py-8 km:py-8">
          <div className="containe mx-auto">
            <div className="heading_part text-center 2xl:px-56 xl:px-56 lg:px-56 md:px-28 sm:px-24 kx:px-20 km:px-10 mb-4 mx-auto">
              <p className="text-white 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl sm:text-xl kx:text-lg km:text-lg  py-2 font-medium capitalize text-base pb-4">
                {getCoachingBenefitsData?.acf?.benefits?.title}
              </p>
              <h2 className="text-white py-2 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-base kx:text-base km:text-base capitalize font-medium 2xl:line-clamp-2 xl:line-clamp-2 lg:line-clamp-2 md:line-clamp-2 sm:line-clamp-2 kx:line-clamp-none km:line-clamp-none !flex justify-center items-center 2xl:gap-4 xl:gap-4 lg:gap-4 md:gap-3 sm:gap-3 kx:gap-2 km:gap-2   ">
                <div className="line_width  bg-white h-[1.5px] w-24"></div>
                <span>
                  {getCoachingBenefitsData?.acf?.benefits?.headings?.title_1}
                </span>
                <span className=" text-[#acacac]">
                  {getCoachingBenefitsData?.acf?.benefits?.headings?.title_2}
                </span>
                <div className="line_width  bg-white h-[1.5px] w-24"></div>
              </h2>
              <p className="text-white my-4 2xl:px-20 xl:px-20 lg:px-20 md:px-20 sm:px-10 kx:px-0 km:px-0 font-light text-base">
                {getCoachingBenefitsData?.acf?.benefits?.texts}
              </p>
            </div>
            <div className="discover_images_part my-7 2xl:container xl:container lg:container-screen md:container-screen sm:container-screen kx:container-screen km:container-screen justify-evenly mx-auto flex flex-wrap 2xl:gap-5 xl:gap-2 lg:gap-8 md:gap-8 sm:gap-8 kx:sm:gap-10 km:gap-7 kx:gap-7">
              {getCoachingBenefitsData?.acf?.benefits?.images?.map(
                (image, index) => (
                  <div
                    key={index}
                    className="img_box_discover rounded-md overflow-hidden bg-white 2xl:w-[270px] xl:w-[240px] lg:w-[200px] md:w-[200px] sm:w-auto kx:w-auto km:w-auto h-auto relative"
                  >
                    <img
                      className=" object-cover w-full h-80"
                      src={image?.image}
                    />
                    {/* <p className="text-black text-sm font-medium py-3  text-center ">Healdth & Wellness</p> */}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
    </>
  );
};

export default DiscoverCoaching;
