import Link from "next/link";

function Product({ productId = 100 }) {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/product/1">
        <h1>
          <a>Product 1</a>
        </h1>
      </Link>
      <Link href="/product/2">
        <h1>
          <a>Product 2</a>
        </h1>
      </Link>
      <Link href="/product/3" replace>
        <h1>
          <a>Product 3</a>
        </h1>
      </Link>
      <Link href={`/product/${productId}`}>
        <h1>
          <a>Product {productId}</a>
        </h1>
      </Link>
    </>
  );
}

export default Product;
