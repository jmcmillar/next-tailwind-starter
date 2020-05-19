import Link from "next/link";

const Home = () => (
    <div>
        <h1>Home</h1>
        <Link href="/">
            <div>Go back to index</div>
        </Link>
    </div>
);

export default Home;