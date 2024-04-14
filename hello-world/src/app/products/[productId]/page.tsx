import { Metadata } from "next";

type Props = {
  params: {
    productId: string;
  };
};

export const generateMetadata = ({params}:Props) :Metadata =>{{
  return {
    title:`Product ${params.productId}`
  }
}}//used to generate metadata about a page its dynamic can also use async function


export default function ProductDetails({ params }: Props) {
  return <h1>ProductDetails {params.productId}</h1>;
}
