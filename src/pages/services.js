import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import images from "../constants/images"
import { Link } from 'gatsby'


function ServicesPage() {
  const services = [
    {
      route: `/single`,
      title: 'wedding singers',
      image: images.IMG_SCREENSHOT1_SMALL,
    },
    {
      route: `/single`,
      title: 'magic mirrors',
      image: images.IMG_SCREENSHOT2_SMALL,
    },
    {
      route: `/single`,
      title: 'dance floors',
      image: images.IMG_SCREENSHOT3_SMALL,
    },
    {
      route: `/single`,
      title: 'photo booths',
      image: images.IMG_SCREENSHOT4_SMALL,
    },
    {
      route: `/single`,
      title: 'wedding singers',
      image: images.IMG_SCREENSHOT1_SMALL,
    },
    {
      route: `/single`,
      title: 'magic mirrors',
      image: images.IMG_SCREENSHOT2_SMALL,
    },
    {
      route: `/single`,
      title: 'dance floors',
      image: images.IMG_SCREENSHOT3_SMALL,
    },
    {
      route: `/single`,
      title: 'photo booths',
      image: images.IMG_SCREENSHOT4_SMALL,
    },
    {
      route: `/single`,
      title: 'wedding singers',
      image: images.IMG_SCREENSHOT1_SMALL,
    },
    {
      route: `/single`,
      title: 'magic mirrors',
      image: images.IMG_SCREENSHOT2_SMALL,
    },
    {
      route: `/single`,
      title: 'dance floors',
      image: images.IMG_SCREENSHOT3_SMALL,
    },
    {
      route: `/single`,
      title: 'photo booths',
      image: images.IMG_SCREENSHOT4_SMALL,
    }
  ];
  const ServiceItems = services.map((service) => (
    <Link key={service.title} to={service.route}>
      <div className="w-full bg-white text-center shadow-md mx-auto max-w-262">
        <img src={service.image} className="w-full"/>
        <div className="text-center px-5">
          <div className="flex justify-between pt-4 pb-6 items-center mx-auto">
            <p className="text-grey-1 font-25 capitalize pr-2 h-10 tracking-tighter font-baskerville">{service.title}</p>
            <img src={images.IMG_RIGHTARROWSMALL} className="h-15 mt-2"/>
          </div>
        </div>
      </div>
    </Link>
  ));
  return (
    <Layout>
      <SEO
        title="Services"
      />
      <div className="relative">
        <div className="container relative">
          <img src={images.BG_WEDDINGSERVICE} className="object-none object-right h-298"/>
          <div className="bg-yellow-3 w-full h-full absolute left-0 top-0 opacity-80"></div>
          <div className="w-full h-full absolute left-0 top-0 text-center flex items-center">
            <div className="text-center md:text-left w-full pt-0 md:pt-100">
              <span className="pl-0 md:pl-149 font-40 text-white opacity-100 text-center font-avenirlight">Wedding Entertainment</span>
              <span className="hidden md:block pl-149 font-100 text-white font-athen mt-minus53 opacity-63">Services</span>
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
      <div className="container bg-yellow-4 pt-12 pb-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 col-gap-8 row-gap-8 pt-6 pb-1 px-4 md:px-108">
            {ServiceItems}
          </div>
      </div>
    </Layout>
  );
}


export default ServicesPage;

