export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>ProductDetails {params.productId}</h1>;
}
