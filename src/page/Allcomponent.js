import About from "@/components/About";
import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import Journey from "@/components/Journey";
import NewProject from "@/components/NewProject";
import Posts from "@/components/Posts";
import Brand from "@/components/Brand";
import Newsletter from "@/components/Newsletter";
import Awards from "../components/Awards";
import CTAButton from "../components/CTAButton";
const AllComponent = () => {
  return (
    <>
      <>
        <Banner />
        <About />
        <Journey />
        <NewProject />
        <Brand />
        <Blog />
        <Posts />
        <Awards />
        <Newsletter />
        <CTAButton />
      </>
    </>
  );
};

export default AllComponent;
