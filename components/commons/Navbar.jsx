import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="pt-3 pb-2 flex justify-around text-xs lg:text-sm text-[#CBCBCB]  bg-[#060D32] box-border ">
      <div className="">Logo</div>
      <div className="flex text-center ">
        <div className="mx-4 cursor-pointer hover:text-white hover:underline">
          <Image
            src="/images/Navigation/Home.svg"
            width="36"
            height="26"
            alt="Nav"
          />
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>
        </div>
        <div className="mx-4 cursor-pointer hover:text-white hover:underline">
          <Image
            src="/images/Navigation/About.svg"
            width="36"
            height="26"
            alt="Nav"
          />
          <div>
            <Link href="/about">
              <a>About Me</a>
            </Link>
          </div>
        </div>
        <div className="mx-4 cursor-pointer hover:text-white hover:underline">
          <Image
            src="/images/Navigation/Projects.svg"
            width="36"
            height="26"
            alt="Nav"
          />
          <div>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </div>
        </div>
        <div className="mx-4 cursor-pointer hover:text-white hover:underline">
          <Image
            src="/images/Navigation/Blogs.svg"
            width="36"
            height="26"
            alt="Nav"
          />
          <div>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
        </div>
        <div className="mx-4 cursor-pointer hover:text-white hover:underline">
          <Image
            src="/images/Navigation/Contact.svg"
            width="36"
            height="26"
            alt="Nav"
          />
          <div>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
