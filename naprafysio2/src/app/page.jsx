import Heading from "./components/Heading";
import Image from "next/image";
import { getIndexPageData } from "../../utils/sanityClient.mjs";

export default async function HomePage({ data }) {
  let sanityData = await getIndexPageData();
  console.log("data från sanity:", sanityData);

  return (
    <div>
      <Image layout="responsive" src="/images/testimg.jpg" alt="Beskrivande text för bilden" width={1600} height={900} />
      <Heading>NAPRAFYSIO</Heading>
      <p>{sanityData.title}</p>
      <p className="font-open-sans">
        detta är alltså sidans startsida?? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatem expedita reprehenderit asperiores
        dicta odio, sapiente voluptatibus laborum aliquid corrupti molestias, exercitationem rem iure culpa totam. Animi nostrum eveniet hic.
      </p>
    </div>
  );
}
