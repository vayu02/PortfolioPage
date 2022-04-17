import Image from 'next/image'
import Link from 'next/link'

const projects = () => {
  return (
    <div className="mt ">
      <h1 className=" mb-8 text-center uppercase  font-extralight tracking-wider text-2xl font-josefin ">
        My Work
      </h1>
      <div className="grid grid-cols-2  gap-y-20  mb-20  ">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center py-6 projectCards w-max px-5  rounded-xl h-max ">
            <div className="">
              <Image
                src="/images/projects/tictactoe500.png"
                width="500"
                height="240.48"
              />
            </div>

            <Link href="https://v-tictactoe.netlify.app">
              <a className="text-center my-2 font-bold tracking-widest text-violet-900 text-lg ">
                TicTacToe
              </a>
            </Link>
            <div className="ml-1">
              <h1 className="text-md font-semibold my-2 ">
                Description & Feature{' '}
              </h1>
              <ul className="text-sm space-y-3 ml-2 font-medium text-gray-600 tracking-wider ">
                <li>TicTacToe is a classic board game with Interactive UI </li>
                <li>
                  1) Game History Current Player Move and Winning function
                </li>
                <li>
                  2) Uses Nano React App Git for Version Control and Track
                  Application{' '}
                </li>
                <li>3) Deployed on Netlify </li>
                <li>
                  <Link href="https://github.com/vayu02/tictactoe">
                    <a className="text-center my-3 font-bold tracking-widest text-violet-900 text-md ">
                      https://github.com/vayu02/tictactoe
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center py-6 projectCards w-max px-5  rounded-xl h-max ">
            <div className="">
              <Image
                src="/images/projects/aftermovie1.png"
                width="500"
                height="240.48"
              />
            </div>

            <Link href="https://vayu02.github.io/after-movie-research-app/">
              <a className="text-center my-2 font-bold tracking-widest text-violet-900 text-lg ">
                After Movie Research App
              </a>
            </Link>
            <div className="ml-1">
              <h1 className="text-md font-semibold my-2 ">
                Description & Feature
              </h1>
              <ul className="text-sm space-y-3 ml-2 font-medium text-gray-600 tracking-wider ">
                <li>
                  App was developed to find info related to tv shows movies and
                  artists
                </li>
                <li>1) Uses custom hooks to store data in local storage</li>
                <li>
                  2) React router for routing also front end has animation
                </li>
                <li>
                  3) Uses git as version control Deployed on Github Pages{' '}
                </li>
                <li>
                  <Link href="https://github.com/vayu02/after-movie-research-app">
                    <a className="text-center my-3 font-bold tracking-widest text-violet-900 text-md ">
                      https://github.com/vayu02/after-movie-research-app
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center py-6 projectCards w-max px-5  rounded-xl h-max ">
            <div className="">
              <Image
                src="/images/projects/hotelvayu1.png"
                width="500"
                height="240.48"
              />
            </div>

            <Link
              href="
https://hotelvayu.netlify.app"
            >
              <a className="text-center my-2 font-bold tracking-widest text-violet-900 text-lg ">
                Hotel Vayu
              </a>
            </Link>
            <div className="ml-1">
              <h1 className="text-md font-semibold my-2 ">
                Description & Feature
              </h1>
              <ul className="text-sm space-y-3 ml-2 font-medium text-gray-600 tracking-wider ">
                <li>Hotel Vayu is my first html css project </li>
                <li>1) An Static Webpage fully responsive for Hotel</li>
                <li>
                  2) Uses HTML CSS and Git for Version Control and Track
                  Application{' '}
                </li>
                <li>3) Deployed on Netlify </li>
                <li>
                  <Link href="https://github.com/vayu02/Hotel-Vayu">
                    <a className="text-center my-3 font-bold tracking-widest text-violet-900 text-md ">
                      https://github.com/vayu02/Hotel-Vayu
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects
