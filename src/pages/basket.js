import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import CheckBox from "../components/checkbox";

import images from "../constants/images"


function BusketPage() {
  const items = [
    {
      route: `/single`,
      title: 'wedding singers',
      image: images.IMG_PARTY1,
    },
    {
      route: `/single`,
      title: 'magic mirror',
      image: images.IMG_PARTY2,
    },
    {
      route: `/single`,
      title: 'photo booth',
      image: images.IMG_PARTY3,
    }
  ];
  const BasketItems = items.map((item) => (
    <div key={item.title} className="flex-none md:flex items-center w-full bg-white mx-auto mt-3 text-center px-2 py-4 md:py-0 max-w-614">
      <img src={item.image} className="m-2 w-124 flex flex-shrink-0 mx-auto"/>
      <div className="flex flex-shrink-1 justify-between items-center w-full px-8 py-4 md:py-0">
        <p className="font-25 text-grey-1 capitalize font-baskerville">{item.title}</p>
        <p className="font-13 text-blue-1 font-nexabold">X REMOVE</p>
      </div>
    </div>
  ));
  return (
    <Layout>
      <SEO
        title="Basket"
      />
      <div className="relative">
        <div className="container relative">
          <img src={images.BG_BASKET} className="object-none object-right h-298"/>
          <div className="bg-yellow-3 w-full h-full absolute left-0 top-0 opacity-80"></div>
          <div className="w-full h-full absolute left-0 top-0 text-center flex items-center">
            <div className="text-center md:text-left w-full pt-0 md:pt-100">
              <span className="pl-0 md:pl-149 font-40 text-white text-center font-avenirlight">MY BASKET</span>
              <span className="hidden md:block pl-149 font-100 text-white font-athen mt-minus53 opacity-63">Let&apos;s party</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex py-6 text-center border-b border-yellow-2">
        <div className="flex items-center mx-auto">
          <svg id="_003---Call" data-name="003---Call" className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20.637" height="20.636" viewBox="0 0 20.637 20.636">
              <path id="Shape" d="M9.543,12.129A8.329,8.329,0,0,1,7.028,7.4a.707.707,0,0,1,.2-.592L8.825,5.215a.712.712,0,0,0,.1-.881L6.388.394A.712.712,0,0,0,5.466.135L1.392,2.053A.708.708,0,0,0,1,2.76,19.694,19.694,0,0,0,7,14.674a19.688,19.688,0,0,0,11.913,6,.708.708,0,0,0,.707-.391L21.536,16.2a.712.712,0,0,0-.258-.92l-3.941-2.537a.712.712,0,0,0-.881.1l-1.593,1.594a.707.707,0,0,1-.592.2,8.329,8.329,0,0,1-4.729-2.515Z" transform="translate(-0.997 -0.038)" fill="#bfb882"/>
              <path id="Shape-2" data-name="Shape" d="M34.76,17.472a.712.712,0,0,1-.712-.712,5.343,5.343,0,0,0-5.337-5.337.712.712,0,1,1,0-1.423,6.768,6.768,0,0,1,6.76,6.76A.712.712,0,0,1,34.76,17.472Z" transform="translate(-18.392 -6.442)" fill="#bfb882"/>
              <path id="Shape-3" data-name="Shape" d="M38.318,11.03a.712.712,0,0,1-.712-.712,8.9,8.9,0,0,0-8.895-8.895.712.712,0,1,1,0-1.423A10.329,10.329,0,0,1,39.03,10.318a.712.712,0,0,1-.712.712Z" transform="translate(-18.392)" fill="#bfb882"/>
          </svg>
          <p className="text-grey-1 pl-8 font-28 font-baskerville">01234 567 890</p>
        </div>
      </div>
      <form className="container py-16 bg-yellow-4 px-44" method="POST" name="busket" data-netlify="true">
        {BasketItems}
        <div className="pt-6 pb-4 mb-6 px-8 w-full bg-white mx-auto mt-8 max-w-614">
          <p className="uppercase text-blue-1 text-lg pt-1 pb-1 font-nexabold">send enquiry</p>
          <input type="text" className="border border-yellow-3 mt-6 mb-3 px-6 py-4 w-full" placeholder="NAME"/>
          <input type="text" className="border border-yellow-3 mt-3 px-6 py-4 w-full" placeholder="EMAIL ADDRESS"/>
          <input type="text" className="border border-yellow-3 mt-3 px-6 py-4 w-full" placeholder="PHONE NUMBER"/>
          <CheckBox title="Please add me to your mailing list"/>
          <button type="submit" className="text-yellow-2 uppercase font-14 py-3 mt-6 mb-6 bg-yellow-1 w-full font-nexabold">send request</button>
        </div>
      </form>
    </Layout>
  );
}


export default BusketPage;

