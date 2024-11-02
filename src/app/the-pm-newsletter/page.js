"use client"

import { fetchData } from "@/lib/api"
import Link from "next/link"
import { useEffect, useState } from "react"

const page = () => {

    const [newsletterData,setnewsletterData] = useState(null)
    const [imageLoaded, setImageLoaded] = useState(false);
    useEffect(()=>{
        const fetchNewsletter = async () => {
            try {
                const data = await fetchData('/pages/614?_fields=acf.newsletter_section&acf_format=standard')
                if (data) {
                    setnewsletterData(data?.acf?.newsletter_section)
                } else {
                    console.log("faild to fetch newsletter Data")
                }
            } catch (error) {
                console.log(error)
            }
        }
        fetchNewsletter()
    },[])

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailError(" ");
      };

      const handleSubmit=()=>{

      }

      const OpenPdf = (pdf) => {
        window.open(`${pdf}`);
      };

  return (
    <>
      <section className="newsletter bg-white mx-auto  w-full">
        <div className="newletter_div  mx-auto flex flex-col items-center lg:items-start relative">
          <div className="top_news_div flex items-center">
            <div className="title_main relative left-0 right-0  w-full h-44 lg:w-[600px] xl:w-[700px] 2xl:w-[900px] flex flex-col lg:flex-row justify-between items-center bg-orange-500 text-white p-4 lg:p-6  rounded-r-md">
              <div className="heading_part_news_part w-full flex items-center">
                <Link href={"/"}>
                  <img className="absolute" src="/logo_news_page.png" />
                </Link>
                <h1 className="title_section absolute text-3xl text-center pl-0 2xl:pl-32 xl:pl-24 pt-0 2xl:pt-0 xl:pt-0 lg:pt-0 sm:pt-10 sm:text-4xl lg:text-5xl xl:text-5xl font-bold mb-4 lg:mb-0">
                  {newsletterData?.title_section?.title_one}
                </h1>
              </div>
              <div className="news_letter_add relative w-[100%]">
                <p className="text-black font-medium text-lg absolute">
                  {newsletterData?.title_section?.title_two}
                </p>
                <img className="absolute" src="/Arrow_animation.gif" />
              </div>
              <div className="date_element bg-gray-800 text-white absolute top-40 right-10 h-10 w-44 rounded-lg px-4 py-2">
                {newsletterData?.date}
              </div>
            </div>
            <div className="svg_news_part">
              <div className="name_svg relative z-10 flex justify-center m-auto">
                <svg
                  className="svg_comma_icon absolute w-8 md:w-10  -top-10 lg:w-14 text-[#DCA514] z-10"
                  viewBox="0 0 16 16"
                  fill="#FF8B00"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z" />
                </svg>
                <p className="line-clamp-3 flex justify-center items-center z-10  w-[50%] text-center mt-5 text-gray-800 font-normal ">
                  {newsletterData?.quote_text}
                  <br />
                  <span className="text_heading_name">
                    {newsletterData?.quote_field}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="full_contain container mx-auto gap-8 w-full 2xl:py-9 2xl:px-2 xl:py-9 xl:px-2 lg:py-9 lg:px-2 md:gap-2 flex  ">
            <div className="news_text_part w-[40%]">
              <h4 className="line-clamp-2 text-2xl font-semibold my-5 ">
                {newsletterData?.heading}
              </h4>
              <p className="text-base font-normal my-3  line-clamp-6">
                {newsletterData?.texts?.substring(0, 74)}
              </p>
              <p className="text-base font-normal my-3  line-clamp-6">
                {newsletterData?.texts?.substring(74)}
              </p>
              <div className="form_part">
                <form onSubmit={handleSubmit} className="mt-4 lg:mt-6 flex">
                  <input
                    type="email"
                    // value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter Your Email Address"
                    required
                    className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm lg:text-base"
                  />
                  <button className="p-3 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 text-sm lg:text-base">
                    Subscribe
                  </button>
                </form>
                {/* {emailError && <p className="text-red-500">{emailError}</p>} */}
              </div>
            </div>
            <div className="news_part relative w-[40%]">
              {!imageLoaded && (
                <div className="flex items-center justify-center w-[100%] h-[300px] bg-gray-300 rounded-r-lg">
                  <span>Loading...</span>
                </div>
              )}

              <img
                className={`rounded-r-lg overflow-hidden w-[100%] z-10 h-[300px] object-cover transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                src={newsletterData?.image}
                alt="Newsletter"
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="news_archive w-[20%] z-10 pt-5">
              <ul>
                <li className="gap-2 block justify-center m-auto text-center">
                  <h6 className="font-semibold text-base lg:text-center mb-3 text-[#f97316]">
                    Newsletter Archives
                  </h6>
                  {newsletterData?.archives?.map((Newsitems, index) => (
                    <p
                      key={index}
                      onClick={() => OpenPdf(Newsitems?.pdf)}
                      className=" font-medium text-base cursor-pointer pb-1 hover:text-orange-500 hover:font-bold"
                    >
                      <button>{Newsitems?.date}</button>
                    </p>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page