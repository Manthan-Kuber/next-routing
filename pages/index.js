import Link from "next/link";

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/product">
        <a>products</a>
      </Link>
    </>
  );
};

export default Home;

//index.js => Route /
