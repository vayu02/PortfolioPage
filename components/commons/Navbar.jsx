import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="py-5  grid grid-cols-2 box-border font-spartan  ">
      <div className=" text-2xl text-gray-600  flex justify-start font-bold ">
        {/* <Image src="/images/Navigation/logo.svg" width="50" height="50" /> */}
        Vayu Builds
      </div>
      <div className="flex justify-end items-center text-center gap-x-12  text-md text-gray-500 font-semibold  ">
        <div className="hover:underline underline-offset-8 ">
            <Link href="/">
              <a>Home</a>
            </Link>
        </div>
        <div className="hover:underline underline-offset-8 ">
            <Link href="/about">
              <a>About Me</a>
            </Link>
        </div>
        <div className="hover:underline underline-offset-8">
            <Link href="/projects">
              <a>Projects</a>
            </Link>
        </div>
        {/* <div className="hover:underline underline-offset-8">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
        </div> */}
        <div className=" hover:underline  text-white  bg-purple-500 px-1 rounded-md ">
            <Link href="/contact">
              <a>Say Hello</a>
            </Link>
          </div>
      </div>
    </div>
    
  );
};

export default Navbar;
