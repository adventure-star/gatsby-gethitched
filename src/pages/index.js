import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from 'gatsby'

function IndexPage() {
  const services = [
    {
      route: `/single`,
      title: 'wedding singers',
      image: images.IMG_SCREENSHOT1,
    },
    {
      route: `/single`,
      title: 'magic mirrors',
      image: images.IMG_SCREENSHOT2,
    },
    {
      route: `/single`,
      title: 'dance floors',
      image: images.IMG_SCREENSHOT3,
    },
    {
      route: `/single`,
      title: 'photo booths',
      image: images.IMG_SCREENSHOT4,
    }
  ];
  const ServiceItems = services.map((service) => (
    <Link key={service.title} to={service.route}>
      <div className="w-306 flex-shrink-0 bg-white text-center shadow-md mr-10">
        <img src={service.image}/>
        <div className="text-center px-6">
          <div className="flex justify-between pt-4 pb-6 items-center mx-auto">
            <p className="text-grey-1 font-30 capitalize pr-3 h-10 tracking-tight font-baskerville">{service.title}</p>
            <img src={images.IMG_RIGHTARROWSMALL} className="h-15 mt-4"/>
          </div>
        </div>
      </div>
    </Link>
  ));
  return (
    <Layout>
      <SEO
        title="Home"
      />
      <div className="relative">
        <div className="container relative">
          <img src={images.BG_YOUNGCOUPLE} className="object-none w-full object-right h-298"/>
          <div className="bg-yellow-3 w-full h-full absolute left-0 top-0 opacity-80"></div>
          <div className="w-full h-full absolute left-0 top-0 text-center flex items-center">
            <div className="text-center w-full pt-0 md:pt-24">
              <span className="pr-0 md:pr-7 font-40 text-white opacity-100 text-center font-avenirlight">Your Wedding Entertainment</span>
              <span className="hidden md:block font-100 text-white font-athen mt-minus53 opacity-63">Reimagined</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex text-center w-full pt-12 border-b pb-4 border-yellow-2">
        <div className="flex pr-3 pb-2 mx-auto items-center overflow-x-auto">
          <div className="pl-44 lg:pl-68 xl:pl-135">
            <div className="text-center">
              <img src={images.IMG_LOVEBOOK} className="mx-auto"/>
            </div>
            <p className="uppercase pt-4 font-13 text-yellow-1">contact us</p>
          </div>
          <div className="pl-10 pr-2 lg:pl-12 lg:pr-4 xl:pl-60 xl:pr-8">
            <img src={images.IMG_RIGHTARROW} className="w-8 h-4"/>
          </div>
          <div className="">
            <div className="text-center">
              <img src={images.IMG_LOVELETTER} className="mx-auto"/>
            </div>
            <p className="uppercase pt-6 font-13 text-yellow-1">plan your entertainment</p>
          </div>
          <div className="px-6 lg:px-8 xl:px-44">
            <img src={images.IMG_RIGHTARROW} className="w-8 h-4"/>
          </div>
          <div className="">
            <div className="text-center">
              <img src={images.IMG_LOCK} className="mx-auto"/>
            </div>
            <p className="uppercase pt-6 font-13 text-yellow-1">pay your deposit</p>
          </div>
          <div className="px-8 lg:px-44 xl:px-53">
            <img src={images.IMG_RIGHTARROW} className="w-8 h-4"/>
          </div>
          <div className="">
            <div className="text-center">
              <img src={images.IMG_BELL} className="mx-auto"/>
            </div>
            <p className="uppercase pt-5 font-13 text-yellow-1">stay informed</p>
          </div>
          <div className="pl-8 pr-4 lg:pl-44 lg:pr-6 xl:pl-59 xl:pr-34">
            <img src={images.IMG_RIGHTARROW} className="w-8 h-4"/>
          </div>
          <div className="pr-44 md:pr-68 lg:pr-118 xl:pr-135">
            <div className="text-center">
              <img src={images.IMG_BALOONS} className="mx-auto"/>
            </div>
            <p className="uppercase pt-4 font-13 text-yellow-1">celebrate your day</p>
          </div>
        </div>
      </div>
      <div className="flex-none md:flex justify-between container">
        <div className="pt-16 pb-60 w-full md:w-1/2 xl:w-auto pl-44 lg:pl-68 xl:pl-135 pr-39">
          <p className="uppercase pt-1 text-blue-1 text-lg text-left font-nexabold">welcome</p>
          <p className="text-grey-1 font-21 pt-4 font-baskerville">
            GetHitched Entertainment™ is here to support you in<br className="hidden xl:block"/>creating the best entertainment packages for <br className="hidden xl:block"/>special day from our range of unique and tailored <br className="hidden xl:block"/>entertainment options.
          </p>
          <p className="text-grey-1 font-21 pt-4 tracking-tight font-baskerville">  
            We work with you to plan and organise your wedding<br className="hidden xl:block"/>entertainment to ensure everything goes smoothly and<br className="hidden xl:block"/>you Get Hitched without a hitch.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 xl:w-auto mb-8 md:mb-0">
          <img src={images.IMG_WEDDING} className="object-cover w-full h-full px-44 md:px-0"/>
          <div className="absolute top-0 left-0 w-full h-full z-10 px-44 md:px-0">
            <div className="w-full h-full bg-blue-1 opacity-80"></div>
          </div>
        </div>
      </div>
      <div className="container bg-yellow-4 py-12 text-center">
        <div className="pl-44 lg:pl-68 xl:pl-135 pb-8">
          <p className="w-full uppercase pt-1 pb-8 text-blue-1 text-lg text-left font-nexabold">popular services</p>
          <div className="flex pt-1 pb-4 overflow-x-auto max-w-none">
            {ServiceItems}
          </div>
        </div>
        <div className="pb-3">
          <Link to="/services" className="my-auto">
            <button className="py-3 pl-6 pr-8 bg-white border border-yellow-2 uppercase font-13 text-yellow-1">view all services</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}


export default IndexPage;

