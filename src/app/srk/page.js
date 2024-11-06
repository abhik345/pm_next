import Newpdf from "@/page/Newpdf";

export async function generateMetadata() {
  return {
    title: "PDF Viewer - SRK x Pramod Maloo",
    description: "View the SRK x Pramod Maloo PDF document.",
    openGraph: {
      title: "PDF Viewer - SRK x Pramod Maloo",
      description: "View the SRK x Pramod Maloo PDF document.",
      url: "/SRKxPramodMalooNew.pdf",
      type: "article",
      images: [
        {
          url: "/srk.png",
          width: 1200,
          height: 630,
          alt: "PDF document thumbnail",
        },
      ],
    },
  };
}

const page = () => {
  return (
    <>
      <Newpdf />
    </>
  );
};

export default page;
