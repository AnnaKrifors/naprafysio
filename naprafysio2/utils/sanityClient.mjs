import { createClient } from "next-sanity";
import { use } from "react";
import { indexPageQuery } from "./sanityQueries.mjs";

export const clientConfig = {
  projectId: "p9dma4ou",
  dataset: "production",
  apiVersion: "2024-10-08",
  useCdn: false,
};

export async function getIndexPageData() {
  const data = await client.fetch(indexPageQuery);
  return data;
}
export const client = createClient(clientConfig);
