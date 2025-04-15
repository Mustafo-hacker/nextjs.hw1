"use client"
import React from 'react'
import image1 from '../../public/image1.svg'
import image2 from '../../public/image2.svg'
import image3 from '../../public/image3.svg'
import image4 from '../../public/image4.svg'
import image5 from '../../public/image5.svg'
import image6 from '../../public/image6.svg'
import image7 from '../../public/image7.svg'
import image8 from '../../public/image8.svg'
import image9 from '../../public/image9.svg'
import image10 from '../../public/image10.svg'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-160"
        style={{ backgroundImage: `url(${image1.src})` }}
      >
        <div className='flex'>
          <h1 className='text-[white] text-[20px] pt-[30px] pl-[350px]'>Collections</h1>
          <h1 className='text-[white] text-[20px] pt-[30px] pl-[100px]'>Products</h1>
          <h1 className='text-[white] text-[20px] pt-[30px] pl-[100px]'>Inspiration</h1>
          <h1 className='text-[white] text-[20px] pt-[30px] pl-[100px]'>About us</h1>
          <h1 className='text-[white] text-[20px] pt-[30px] pl-[100px]'>Find a dealer</h1>
        </div>
        <div>
          <h1 className='text-[white] text-[45px] font-[600] tracking-[5px] text-center pt-[170px]'>Lasting memories</h1>
        </div>
      </div>
      <div>
        <div>
          <Image className='ml-[1100px] mt-[30px]' alt='alo' src={image2} />
        </div>
        <div>
          <h1 className='text-[48px] font-[600] pl-[80px] w-[300px] leading-13 mt-[-60px]'>making tables heroes</h1>
        </div>
      </div>
      <div className="flex">
        <div>
          <h1 className='pl-[80px] pt-[35px] tracking-[2px] text-[18px] w-[600px]'>
            Chairs, cabinets, but especially tables by Joli are durable products, designed to last and to be used intensively.
          </h1>
          <div className="flex">

          </div>
        </div>
        <div>
          <Image className='ml-[100px]' alt='alo' src={image3} />
        </div>
      </div>
      <div className='flex'>
        <button className='border-2 p-[10_30] rounded-[50px] ml-[80px]'>About us</button>
        <button className='ml-[20px]'>Collections</button>
      </div>
      <div className="bg-[#f2efec] mt-20 p-[80px]">
        <h1 className="text-[48px] font-semibold leading-[1.2]">
          our<br />collections
        </h1>

        <div className="flex gap-4 mt-[20px] text-[17px] tracking-wide font-[400]">
          {['central', 'olivo', 'morisot', 'curve', 'wire', 'marguerite', 'fizz', 'rafael', 'chagall'].map((item, index) => (
            <span key={index} className="cursor-pointer hover:underline">{item}</span>
          ))}
        </div>

        <div className="mt-[60px] gap-[30px]">
          <Image alt='alo' src={image4} />
          <h1 className='pt-3'>
            ready to become the centerpiece of your home
          </h1>
        </div>
        <div className="flex justify-end mt-[20px] pr-[10px] text-[14px]">
          <span className="mr-2">1 / 9</span>
          <span className="rotate-[45deg]">→</span>
        </div>
      </div>
      <div className="flex w-full h-[600px]">
        <div className="w-1/2 h-full flex flex-col justify-center pl-[80px]">
          <div>
            <h1 className="text-[56px] font-semibold leading-[1.1]">
              find&nbsp;&nbsp;&nbsp;a<br />dealer
            </h1>
            <p className="text-[18px] mt-[30px] w-[360px] text-gray-700 leading-[1.5]">
              We work together with dealers in 19 countries, all over the world. Find out which one is closest to you.
            </p>
          </div>
          <div className="mt-[40px]">
            <input
              type="text"
              placeholder="Your location"
              className="text-[16px] border border-gray-300 px-[18px] py-[12px] rounded-[10px] w-[260px] focus:outline-none"
            />
            <button className="mt-[20px] px-[30px] py-[10px] text-[16px] border border-black rounded-[25px] block">
              search
            </button>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <Image src={image5} alt="Dealer Image" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="w-full h-[600px] bg-black text-white relative flex flex-col items-center justify-start">
        <h1 className="text-[50px] font-light mb-[10px] mt-20">terrace</h1>
        <h2 className="text-[40px] font-semibold mb-[30px]">ceremonies & meetings</h2>
        <button className="border border-white px-[25px] py-[10px] rounded-[25px] hover:bg-white hover:text-black transition">
          inspire me
        </button>
        <div className="absolute top-[40px] left-[100px] w-[200px] h-[280px] bg-gray-300 rounded-md overflow-hidden">
          <Image alt='alo' src={image6} />
        </div>
        <div className="absolute top-[40px] right-[100px] w-[200px] h-[150px] bg-gray-300 rounded-md overflow-hidden">
          <Image alt='alo' src={image7} />
        </div>
        <div className="absolute bottom-[40px] right-[100px] w-[200px] h-[150px] bg-gray-300 rounded-md overflow-hidden">
          <Image alt='alo' src={image8} />
        </div>
      </div>

      <div className="w-full bg-white py-[100px] text-center">
        <h1 className="text-[30px] font-bold leading-[1.5] w-[80%] max-w-[500px] mx-auto">
          joli manages to <br />
          offer designs <br />
          that are both <br />
          timelessly modern <br />
          and trendy
        </h1>
        <button className="mt-[30px] border border-black px-[25px] py-[10px] rounded-[25px]">
          about us
        </button>
      </div>
      <div className="flex w-full h-[600px]">
        <div className="w-1/2 h-full">
          <Image src={image9} alt="Dealer Image" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center pl-[80px]">
          <div>
            <h1 className="text-[56px] font-semibold leading-[1.1]">
              Become&nbsp;&nbsp;&nbsp;a<br />dealer
            </h1>
            <p className="text-[18px] mt-[30px] w-[360px] text-gray-700 leading-[1.5]">
              We work together with dealers in 19 countries, all over the world. Find out which one is closest to you.
            </p>
          </div>
          <div className="mt-[40px]">
            <button className="mt-[20px] px-[30px] py-[10px] text-[16px] border border-black rounded-[25px] block">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <Image alt='alo' src={image10} />
      <div>
        <footer className="w-full bg-black text-white py-[60px] px-[80px]">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-5 gap-[30px] mb-[40px]">
              <div>
                <h3 className="font-bold mb-[20px] text-white">collections</h3>
                <ul className="space-y-[10px]">
                  {['sites', 'Drive', 'Fire', 'Marguerites'].map((item, index) => (
                    <li key={index} className="text-gray-300 hover:text-white transition">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-[20px] text-white">products</h3>
                <ul className="space-y-[10px]">
                  {['tickets', 'Clients', 'Customs', 'Accountants'].map((item, index) => (
                    <li key={index} className="text-gray-300 hover:text-white transition">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-[20px] text-white">irrigation</h3>
                <ul className="space-y-[10px]">
                  {['soil, topic', '2007', 'Terrace', 'Communities & Meetings'].map((item, index) => (
                    <li key={index} className="text-gray-300 hover:text-white transition">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-[20px] text-white">about us</h3>
                <ul className="space-y-[10px]">
                  {['sidewalks', 'Find a cluster', 'Investments', 'News'].map((item, index) => (
                    <li key={index} className="text-gray-300 hover:text-white transition">{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-[20px] text-white">content</h3>
                <ul className="space-y-[10px]">
                  {['Industrialization &', 'BND Records', 'Fertigicides', ''].map((item, index) => (
                    <li key={index} className="text-gray-300 hover:text-white transition">{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-[12px] text-gray-400">
              <p>Source:</p>
              <p>[2020] Study    customer    reach to aim</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default page
