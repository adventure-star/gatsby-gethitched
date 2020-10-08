import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import CheckBox from "../components/checkbox";

import images from "../constants/images"

import ContactMap from "../components/map"
import { withScriptjs } from "react-google-maps";



function ContactPage() {
  const MapLoader = withScriptjs(ContactMap);
  return (
    <Layout>
      <SEO
        title="Contact"
      />
      <div className="relative">
        <div className="container relative">
          <img src={images.BG_CONTACTUS} className="object-none object-right h-298" />
          <div className="bg-yellow-3 w-full h-full absolute left-0 top-0 opacity-80"></div>
          <div className="w-full h-full absolute left-0 top-0 text-center flex items-center">
            <div className="text-center md:text-left w-full pt-0 md:pt-100">
              <span className="pl-0 md:pl-149 font-40 text-white opacity-100 text-center font-avenirlight">Contact us</span>
              <span className="hidden md:block pl-149 font-100 text-white font-athen mt-minus53 opacity-63">Let&apos;s talk</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex py-6 text-center border-b border-yellow-2">
        <div className="flex mx-auto py-1">
          <img src={images.IMG_FACEBOOK} className="pr-4" />
          <img src={images.IMG_INSTAGRAM} className="pr-4" />
          <img src={images.IMG_LINKEDIN} />
        </div>
      </div>
      <div className="container flex-none md:flex justify-between px-44 lg:px-68 xl:px-135 py-16 bg-yellow-4">
        <div className="pt-2 w-full md:w-1/2 xl:w-auto text-center md:text-left">
          <p className="uppercase text-lg text-blue-1 font-nexabold">call us</p>
          <div className="w-full flex">
            <div className="flex items-center pb-12 mx-auto md:ml-0 md:mr-0">
              <image src={images.IMG_PHONE} />
              <p className="text-grey-1 font-28 font-baskerville">01234 567 890</p>
            </div>
          </div>
          <p className="uppercase text-lg text-blue-1 pt-1 pb-4 font-nexabold">address</p>
          <p className="font-21 text-grey-1 pb-8 md:pb-0 font-baskerville">
            11 Lindley Moor Rd<br />
            Elland<br />
            Huddersfield<br />
            HD3 3RT
          </p>
        </div>
        <form className="pt-6 pb-4 px-8 bg-white w-full md:w-1/2 xl:w-auto ml-auto mr-auto xl:ml-0 xl:mr-0 max-w-614 max-h-445" method="POST" name="contact" data-netlify="true">
          <p className="uppercase text-blue-1 text-lg pt-1 pb-1 font-nexabold">ask us everything</p>
          <input type="text" className="border border-yellow-3 mt-6 px-6 py-4 w-full form-input" placeholder="NAME" />
          <input type="text" className="border border-yellow-3 mt-3 px-6 py-4 w-full form-input" placeholder="EMAIL ADDRESS" />
          <input type="text" className="border border-yellow-3 mt-3 px-6 py-4 w-full form-input" placeholder="PHONE NUMBER" />
          <CheckBox title="Please add me to your mailing list"/>
          <button type="submit" className="text-yellow-2 uppercase font-14 py-3 mt-6 mb-6 bg-yellow-1 w-full font-nexabold">send request</button>
        </form>
      </div>
      <div className="container relative">
        <MapLoader
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7Ry6_w9cokLllNNBIgH4HsEAh8UDRL94"
          loadingElement={<div></div>}
        />
      </div>
    </Layout>
  );

}

export default ContactPage;

