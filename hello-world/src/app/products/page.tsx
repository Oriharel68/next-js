import Link from "next/link";

export default function ProductsList() {
    const productid = 100;
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h1>
        <Link href="/products/1">Prod 1</Link>
      </h1>
      <h1>
        <Link href="/products/2">Prod 2</Link>
      </h1>
      <h1>
        <Link href="/products/3"  replace>Prod 3</Link>
      </h1>
      <h1>
        <Link href={`/products/${productid}`}>Prod {productid}</Link>
      </h1>
    </>
  );
}
