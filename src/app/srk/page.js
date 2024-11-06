import Newpdf from "@/page/Newpdf";

export async function generateMetadata() {
  // Fetch data from the API
  const response = await fetch("https://api.pramodmaloo.com/wp-json/wp/v2/pages/10?_fields=acf.pdf&acf_format=standard");
  const data = await response.json();

  // Extract URLs from the response
  const pdfUrl = data.acf.pdf.pdf_file;
  const screenshotUrl = data.acf.pdf.screenshot;

  return {
    title: "Stars come and go... But SRK comes once",
    description: "Stars come and go... But SRK comes once, Happens once & Stays Forever!",
    openGraph: {
      title: "Stars come and go... But SRK comes once",
      description: "Stars come and go... But SRK comes once, Happens once & Stays Forever!",
      url: pdfUrl,
      type: "website",
      images: [
        {
          url: screenshotUrl,
          width: 1200,
          height: 630,
          alt: "SRK PDF Thumbnail",
        },
      ],
    },
  };
}

const Page = () => {
  return (
    <>
      <Newpdf />
    </>
  );
};

export default Page;
