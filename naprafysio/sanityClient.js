import { createClient } from "next-sanity";

export const clientConfig = {
  projectId: "p9dma4ou",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-10-03",
};

export const client = createClient(clientConfig);
