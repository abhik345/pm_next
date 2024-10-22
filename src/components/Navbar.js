const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Navbar = async () => {
  const response = await fetch(`${NEXT_PUBLIC_API_BASE_URL}/acf-options/header`, { method: 'GET' });
  if (!response.ok) {
    console.log("failed to fetch data")
  };
  const data = await response.json();
    const result = data.header;
    console.log(result);
  return (
    <>
      <header className="flex items-center justify-between absolute px-4 sm:px-6 lg:px-8 bg-transparent w-[100%] z-10">
        <div className="mt-6 flex items-center cursor-pointer">
          <img
            srcSet={`${
              result?.header_logo?.logo_image?.image
            } 1x, ${result?.header_logo?.logo_image?.image.replace(".jpg", "@2x.jpg")} 2x`}
            src={result?.header_logo?.logo_image?.image}
            className="h-20 w-36"
            alt="Logo"
            loading="lazy"
          />
        </div>
        <nav className="flex items-center space-x-4 md:space-x-6 lg:space-x-10">
          <div className="flex flex-row items-center gap-1 md:gap-3 lg:gap-4">
            <>
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
              
            </>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar
