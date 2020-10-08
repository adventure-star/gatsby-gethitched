import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import CheckBox from "../components/checkbox";
import images from "../constants/images"


function SinglePage() {
  return (
    <Layout>
      <SEO
        title="Single"
      />
      <div className="relative">
        <div className="container relative">
          <img src={images.BG_WEDDINGSINGERS} className="object-none object-right h-298"/>
          <div className="bg-yellow-3 w-full h-full absolute left-0 top-0 opacity-80"></div>
          <div className="w-full h-full absolute left-0 top-0 text-center flex items-center">
            <div className="text-center md:text-left w-full pt-0 md:pt-100">
              <span className="pl-0 md:pl-149 font-40 text-white opacity-100 text-center font-avenirlight">Singing Waiters</span>
              <span className="hidden md:block pl-149 font-100 text-white font-athen mt-minus53 opacity-63">Wedding singers</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex py-4 text-center border-b border-yellow-2">
        <div className="flex items-center mx-auto h-12">
          <div className="flex border-r border-yellow-2 pr-3 items-center">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="17px" viewBox="0 0 459 459" fill="#707070">
              <path d="M0,382.5h350v-51H0V382.5z M0,76.5v51h459v-51H0z M0,255h459v-51H0V255z"/>
            </svg>
            <p className="uppercase pl-4 text-grey-1 text-sm">list</p>
          </div>
          <div className="flex pl-3 items-center">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 270 270" fill="#000000">
              <path d="M114,0H10C4.5,0,0,4.5,0,10v104c0,5.5,4.5,10,10,10h104c5.5,0,10-4.5,10-10V10C124,4.5,119.5,0,114,0z M104,104H20V20h84V104z"/>
              <path d="M260,0H156c-5.5,0-10,4.5-10,10v104c0,5.5,4.5,10,10,10h104c5.5,0,10-4.5,10-10V10C270,4.5,265.5,0,260,0z M250,104h-84V20h84V104z"/>
              <path d="M114,146H10c-5.5,0-10,4.5-10,10v104c0,5.5,4.5,10,10,10h104c5.5,0,10-4.5,10-10V156C124,150.5,119.5,146,114,146z M104,250H20v-84h84V250z"/>
              <path d="M260,146H156c-5.5,0-10,4.5-10,10v104c0,5.5,4.5,10,10,10h104c5.5,0,10-4.5,10-10V156C270,150.5,265.5,146,260,146z M250,250h-84v-84h84V250z"/>
            </svg>
            <p className="uppercase pl-4 text-black text-sm">images</p>
          </div>
        </div>
      </div>
      <div className="flex-none lg:flex bg-yellow-4 justify-between container">
        <div className="pt-16 pb-8 lg:pb-60 w-full lg:w-1/2 xl:w-auto pl-44 lg:pl-68 xl:pl-135 pr-39">
          <p className="uppercase pt-1 pb-4 text-blue-1 text-lg text-left font-nexabold">
            Our job for your wedding or event is to<br className="hidden xl:block"/>
            create something special that will have a<br className="hidden xl:block"/>
            lasting effect on anyone in the room.
          </p>
          <p className="text-grey-1 font-21 pt-4 font-baskerville">
            The moment we burst into song, we take everyone by<br className="hidden xl:block"/>
            surprise and start to build an atmosphere like no other.<br className="hidden xl:block"/>
            Guests that have never met before will be dancing<br className="hidden xl:block"/>
            around the room together, The will be starting a<br className="hidden xl:block"/>
            conga line, your friends will be singing along to with<br className="hidden xl:block"/> 
            such passion that you’ll be able to see the veins in<br className="hidden xl:block"/>
            their neck!
          </p>
        </div>
        <div className="relative w-full lg:w-1/2 xl:w-auto">
          <img src={images.IMG_SINGER1} className="object-cover w-full h-full px-44 lg:px-0"/>
          <div className="absolute top-0 left-0 w-full h-full z-10 px-44 lg:px-0">
            <div className="w-full h-full bg-blue-1 opacity-80"></div>
          </div>
        </div>
      </div>
      <div className="flex-none lg:flex bg-yellow-4 justify-between container pt-12 pb-8 lg:pb-16">
        <div className="relative w-full lg:w-1/2 xl:w-auto">
          <img src={images.IMG_SINGER2} className="object-cover w-full h-full px-44 lg:px-0"/>
          <div className="flex-shrink-0 absolute top-0 left-0 w-full h-full z-10 px-44 lg:px-0">
            <div className="w-full h-full bg-yellow-3 opacity-80"></div>
          </div>
        </div>
        <div className="flex flex-shrink-1 overflow-y-hidden w-full lg:w-1/2 xl:w-auto pb-3 pl-0 pr-44 lg:pr-0 xl:pl-0 xl:pr-135 max-w-none lg:max-w-720">
          <p className="text-grey-1 font-21 pt-4 lg:pt-0 font-baskerville w-full pr-44 xl:pr-12 pl-44">
            Surprise Wedding Singers ( Jason ) is a very
            talented performer who has been performing
            from the ag of 6. He delivers more than just
            amazing vocals. He offers a memorable, unique
            and fun surprise entertainment act that is perfect
            for any occasion.<br/><br/>
            Let’s face it, there are plenty of amazing singers
            out there – but no one can deliver a performance
            like the Surprise Wedding Singers can.<br/><br/>
            We are a small family business and both my
            myself and Samantha are passionate about what
            we do. Playing a part in your special day or
            entertaining your guests at your event or party,
            really does mean the world to us. We’re
            passionate about making your day a success and
            that’s why we work with you from booking right
            until the day finishes. Together we will plan your
            surprise, from carefully selecting your playlist
            right to deciding how and when we will make our
            grand entrance.
          </p>
        </div>
      </div>
      <div className="flex-none lg:flex bg-yellow-4 justify-between container pb-20 pl-44 lg:pl-68 xl:pl-135 pr-39 xl:pr-0">
        <div className="w-full lg:w-1/2 xl:w-auto pb-60 overflow-hidden">
          <p className="text-grey-1 font-21 pt-4 pr-4 font-baskerville">
            The goal is to make sure everyone celebrates your<br className="hidden xl:block"/> 
            special event in style. We guarantee everyone will<br className="hidden xl:block"/> 
            be talking about just how perfect your event was <br className="hidden xl:block"/>
            for many years to come.<br/><br/>
            We offer event entertainment, party<br className="hidden xl:block"/> 
            entertainment and wedding entertainment, but<br className="hidden xl:block"/> 
            we relish a challenge and can provide<br className="hidden xl:block"/> 
            entertainment for any occasion. When you book<br className="hidden xl:block"/> 
            the Surprise Wedding Singers your event will be<br className="hidden xl:block"/> 
            one for everyone there to remember forever.<br/><br/>
            I go undercover as waiter getting to know your<br className="hidden xl:block"/> 
            guests. After hours of undercover work, when the<br className="hidden xl:block"/> 
            time is right, we give your guests the biggest<br className="hidden xl:block"/> 
            surprise of their lives by bursting into song! We<br className="hidden xl:block"/> 
            perform an exciting and interactive set that is sure<br className="hidden xl:block"/> 
            to get the crowd going.
          </p>
        </div>
        <div className="w-full lg:w-1/2 xl:w-full  ml-auto mr-auto xl:mr-16 max-w-614">
          <div className="pt-6 px-8 bg-white mx-auto">
            <form method="POST" name="addtobusket" data-netlify="true">
              <p className="uppercase text-blue-1 text-lg pt-1 pb-6 font-nexabold">entertainment busket</p>
              <button type="submit" className="text-white uppercase font-14 pt-4 pb-5 mb-6 bg-yellow-3 w-full font-nexabold">add to busket</button>
            </form>
            <p className="uppercase pt-1 pb-4 font-14 text-grey-3 text-center font-nexabold">or</p>
            <form method="POST" name="addmailinglist" data-netlify="true">
              <p className="uppercase text-blue-1 text-lg pt-1 pb-8 font-nexabold">TELL ME MORE ABOUT Wedding singers</p>
              <div className="flex-none xl:flex">
                <input type="text" className="border border-yellow-3 px-6 xl:px-6 py-4 w-full min-w-174 form-input" placeholder="FIRST NAME"/>
                <input type="text" className="border border-yellow-3 px-6 xl:px-6 w-full my-4 xl:my-0 ml-0 xl:ml-4 py-4 form-input" placeholder="EMAIL ADDRESS"/>
              </div>
              <CheckBox title="Please add me to your mailing list"/>
              <button type="submit" className="text-yellow-2 uppercase font-14 py-3 mb-8 bg-yellow-1 w-full font-nexabold">send request</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}


export default SinglePage;

