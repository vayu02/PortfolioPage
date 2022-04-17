import Image from 'next/image'
import Link from 'next/link'

const contact = () => {
  return  <article className="mt-5 font-spartan ">
      <div className="grid grid-cols-[600px_minmax(400px,_1fr)] py-[10rem]  shadow-lg ">
        <div className="flex justify-center ">
          <div className="">
            {/* <Image src="/images/home/ashishportfolio.png" width="400" height="400"  className="rounded-lg" />
             */}
            <Image src="/images/Navigation/logo.svg" width="200" height="200" />
          </div>
        </div>
        <section className="leading-8 font-bold  text-2xl text-gray-600 ml-36 flex flex-col justify-center items-start gap-y-3 ">
                 <h1>Connect with Me</h1> 
                 <ul>
                   <li>Phone : 9892896924</li>
                   <li></li>
                   <li></li>

                 </ul>
        </section>
      </div>
    </article>;
};

export default contact;
