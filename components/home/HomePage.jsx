import Image from 'next/image'
import Link from 'next/link'


const HomePage = () => {
  return (
    <article className="mt-5 font-spartan ">
      <div className="grid grid-cols-[600px_minmax(400px,_1fr)] py-[10rem]  shadow-lg ">
        <div className="flex justify-center ">
          <div className="">
            {/* <Image src="/images/home/ashishportfolio.png" width="400" height="400"  className="rounded-lg" />
             */}
            <Image src="/images/Navigation/logo.svg" width="200" height="200" />
          </div>
        </div>
        <section className="leading-8 font-bold  text-2xl text-gray-600 ml-36 flex flex-col justify-center items-start gap-y-3 ">
          <h2>
            Hello, my name is{' '}
            <span className="text-purple-600 ">
              Ashish Shejwal
            </span>
          </h2>
          <h2>UI Developer based in Mumbai, India</h2>
          <p> If you have project or Any work</p>
          <p>
            i can help with don't shy to {" "} 
            <span className="text-green-500 underline hover:underline-offset-2   ">
              <Link href="/contact">
                <a > Say Hello</a>
              </Link>
            </span>
          </p>
        </section>
      </div>
    </article>
  )
}

export default HomePage
