"use client";
import { fetchData } from "@/lib/api";
import { useState, useEffect } from "react";
const HowtoWork = () => {
  const [howitworkData, sethowitworkData] = useState(null);

  useEffect(() => {
    const fetchWorkData = async () => {
      const data = await fetchData(
        "/pages/889?_fields=acf.how_it_works&acf_format=standard"
      );
      if (data) {
        sethowitworkData(data);
      } else {
        console.log("failed to fetch how it work Data..");
      }
    };
    fetchWorkData();
  }, []);

  return (
    <>
      <div className="how_to_work py-10">
        <div className="2xl:container xl:container lg:container md:w-screen sm:w-screen mx-auto 2xl:px-10 xl:px-10 lg:px-0 md:px-6 sm:px-5 kx:px-5 km:px-5">
          <div className=" 2xl:container xl:container lg:container md:container-screen sm:container-screen kx:container-screen km:container-screen top_text_part flex 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap kx:flex-wrap km:flex-wrap justify-around items-center mb-6 mx-auto">
            <div className="work_heading 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[60%] sm:w-[60%] ">
              <h2 className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl kx:text-2xl km:text-2xl font-bold text-black flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-start kx:justify-center km:justify-center items-center gap-5 ">
                <div className=" line_width  bg-black h-[1.5px] w-24"></div>
                {howitworkData?.acf?.how_it_works?.heading?.heading_1}
                <span className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl text-gray-400 font-bold ">
                  {howitworkData?.acf?.how_it_works?.heading?.heading_2}
                </span>
              </h2>
              <p className="font-normal text-gray-400 text-base my-3  2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-3/4 sm:w-[80%] kx:w-full km:w-full">
                {howitworkData?.acf?.how_it_works?.texts}
              </p>
            </div>
            <div className="button_heading 2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[40%] sm:w-[40%] flex justify-end">
              <button className="bg-[#FF8B00] hover:bg-yellow-700 text-white 2xl:text-lg xl:text-lg lg:text-lg md:text-base sm:text-[12px] py-3 font-medium px-6 rounded-full  hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                {howitworkData?.acf?.how_it_works?.button_section?.button_texts}
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {howitworkData?.acf?.how_it_works?.cards?.map((data, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-sm border-b-[1px] border-[#424242]"
              >
                <div className="flex 3xl:flex-nowrap 2xl:flex-nowrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-nowrap kx:flex-wrap km:flex-wrap gap-6">
                  <div className="w-16 h-16 flex-shrink-0 bg-orange-500 rounded-full p-2 flex items-center justify-center">
                    <img
                      src={data.icon}
                      // alt={data.icon}
                      width={44}
                      height={44}
                      className=""
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                    <p className="text-gray-600">{data.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HowtoWork;
