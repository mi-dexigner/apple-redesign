import {groq} from "next-sanity";
import {sanityClient } from '../../utils/sanity'
  const query = groq`*[_type == "product" && !(_id in path('drafts.**'))]{
    _id,
    ...
  } | order(_createdAt desc)`;
export default async function handler(req, res) {
    const products = await sanityClient.fetch(query);
    res.status(200).json(products);
  }