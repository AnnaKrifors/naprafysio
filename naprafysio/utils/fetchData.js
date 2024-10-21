import { client } from "../sanityClient";

export const fetchData = async (query) => {
  const query = "*[_type == 'indexPage']";
  try {
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    throw new Error("error fetching data");
  }
};
