import Heading from "./components/Heading";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { getIndexPageData } from "../../utils/sanityClient.mjs";

export default async function HomePage({ data }) {
  let sanityData = await getIndexPageData();
  console.log("data från sanity:", sanityData);

  console.log("Sanity content data:", JSON.stringify(sanityData.content, null, 2));

  return (
    <div>
      <Image layout="responsive" src="/images/testimg.jpg" alt="Beskrivande text för bilden" width={1600} height={900} />
      <Heading>{sanityData.title}</Heading>
      <PortableText value={sanityData.content} />
    </div>
  );
}
