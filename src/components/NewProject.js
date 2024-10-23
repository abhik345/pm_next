"use client"

import { useEffect, useState } from "react";
import { Navigation,Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NewProject = () => {
    const [projects,setNewProject] = useState([])
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/book`, {
              method: 'GET',
            });
    
            if (!response.ok) {
              console.log('Failed to fetch data');
            }
    
            const data = await response.json();
            const result = data;
            setNewProject(result);
          } catch (err) {
            console.log(err)
          } 
        };
    
        fetchData();
      }, []);

      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 576);
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      const allItems = projects?.reduce((acc, section) => {
        const itemsWithSubtitle = section.items.map((item) => ({
          ...item,
          subtitle: section.subtitle,
        }));
        return [...acc, ...itemsWithSubtitle];
      }, []);

      const midpoint = Math.ceil(allItems?.length / 2);
  const firstHalf = allItems?.slice(0, midpoint);
  const secondHalf = allItems?.slice(midpoint);

  return (
    <>
      <div>
        <div className="main_project border-b-2">
          <div className="container mx-auto px-10 py-14">
            <h2 className="main-heading text-[56px] font-bold mb-4">
              <span className="text-[#959595]">Latest</span>{" "}
              <span className="text-white">Videos</span>
            </h2>
            <div className="heading_part flex justify-between items-center"></div>
            {isMobile === false ? (
              <>
                <Swiper
                       modules={[Navigation, A11y,Autoplay]}
                       loop={true}
                       navigation={true}
                       autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }}
                       onSwiper={(swiper) => console.log(swiper)}
                       onSlideChange={() => console.log('slide change')}
                       className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="first-grid grid py-10">
                      {firstHalf &&
                        firstHalf.map((item) => (
                          <div
                            className="box overflow-hidden relative rounded-xl"
                            key={item.id}
                          >
                            <img
                              src={item?.thumbnail}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="link_icon">
                              <div className="new_arrow absolute content['*'] m-auto p-3 rounded-3xl top-[50%] bottom-[50%] left-0 right-0 z-10 w-[50px] h-[50px] flex justify-center bg-yellow-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-move-up-right"
                                >
                                  <path d="M13 5H19V11" />
                                  <path d="M19 5L5 19" />
                                </svg>
                              </div>
                            </div>
                            <div className="play_icon absolute bottom-4 left-4">
                              <p className="text-white font-semibold text-lg line-clamp-2">
                                {item?.maintitle}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="sec_grid grid py-10">
                      {secondHalf &&
                        secondHalf.map((item) => (
                          <div
                            className="box overflow-hidden relative rounded-xl"
                            key={item.id}
                            onClick={() =>
                              handleClick(
                                item.subtitle,
                                item.title,
                                item.id,
                                item.maintitle
                              )
                            }
                          >
                            <img src={item?.thumbnail} />
                            <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-gradient-to-t from-black to-transparent"></div>
                            <div className="link_icon">
                              <div className="new_arrow absolute content['*'] m-auto p-3 rounded-3xl top-[50%] bottom-[50%] left-0 right-0 z-10 w-[50px] h-[50px] flex justify-center bg-yellow-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#ffffff"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-move-up-right"
                                >
                                  <path d="M13 5H19V11" />
                                  <path d="M19 5L5 19" />
                                </svg>
                              </div>
                            </div>
                            <div className="play_icon absolute bottom-4 left-4">
                              <p className="text-white font-semibold text-lg line-clamp-2">
                                {item.maintitle}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </SwiperSlide>
                </Swiper>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProject