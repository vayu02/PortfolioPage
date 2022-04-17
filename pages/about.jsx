import Image from 'next/image'
import Link from 'next/link'

const about = () => {
  return (
    <div className="mb-20">
      <h1 className=" mt-8 text-center uppercase  font-extralight tracking-wider text-2xl font-josefin ">
        allow me to introduce myself
      </h1>
      <div className="grid grid-cols-[600px_minmax(400px,_1fr)] mt-10 ">
        <div className=" flex flex-col  justify-end items-center">
          <Image
            src="/images/about/ashish4.png"
            width="350"
            height="365.91"
            className="rounded-sm"
          />
        </div>
        <div className=" flex flex-col items-center">
          <p className="tracking-widest leading-8">
            I'm obsessed with making things and even more obsessed with making
            things better. I've been passionate about computers since I learned
            how to boot my Windows Xp when I was 12. I am Undergrad completed my
            first year in 2020 from Jvm Mehta College, I've been actively
            involved in the Web community for the last 2 years. I've helped in
            creating websites for small businesses, nonprofits when i was doing
            internship at Codify tech . i want to inspire people and give
            tutorials, resources of what i learned till now . My specialty is
            design and development, and turning it webapps into beautiful,
            semantic HTML & CSS. My interests, however, extend beyond the web
            and I love self improvement & spirituality, I even love volunteering
            for nonprofits When I'm not working, I'm probably hanging out with
            my family, playing football or messing around on something inspired
            by Linus Torvalds, Steve Jobs etc.
          </p>
        </div>
      </div>
    </div>
  )
}

export default about
