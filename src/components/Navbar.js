import { fetchData } from "@/lib/api";
import Image from "next/image";

const Navbar = async () => {
  const data = await fetchData("/acf-options/header");
  if (!data) {
    console.log("failed to fetch data");
    return <p>Error loading header</p>;
  }

  const result = data.header;

  return (
    <>
      <header className="flex items-center justify-between absolute px-4 sm:px-6 lg:px-8 bg-transparent w-[100%] z-10">
        <a href="/">
        <div className="mt-6 flex items-center cursor-pointer">
          <Image
            src={result?.header_logo?.logo_image?.image}
            srcSet={`${
              result?.header_logo?.logo_image?.image
            } 1x, ${result?.header_logo?.logo_image?.image.replace(
              ".jpg",
              "@2x.jpg"
            )} 2x`}
            width={144}
            height={80}
            alt="Logo"
            loading="lazy"
          />
        </div>
        </a>
        <nav className="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
          <div className="flex flex-row items-center gap-1 md:gap-3 lg:gap-4">
            {result?.social_media_sections &&
              result?.social_media_sections?.map((icon, index) => (
                <div key={index} className="p-2 rounded-full">
                  <a href={icon.link} target="_blank">
                    <img
                      className="inline-block !h-5 !w-5"
                      src={icon.social_media_icon}
                      alt={icon.social_media_name}
                    />
                  </a>
                </div>
              ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
