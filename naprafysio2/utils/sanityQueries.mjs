import { groq } from "next-sanity";

export const indexPageQuery = groq`
  *[_type == "indexPage"][0] {
    title,
    content,
    "slug": slug.current
  }
`;
