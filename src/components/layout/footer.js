import React from "react";
import images from "../../constants/images";
import { Link } from "gatsby";
import { useSiteMetadata } from "../../hooks/use-site-metadata"

function Footer() {
    const { phoneNumber } = useSiteMetadata();

    const links = [
        {
          route: `/testing`,
          title: `ABOUT US`,
        },
        {
          route: `/services`,
          title: `SERVICES`,
        },
        {
          route: `/coaching`,
          title: `VENUES`,
        },
        {
          route: `/contact`,
          title: `CONTACT`,
        }
      ];

      const NavItems = links.map((link) => (
        <Link key={link.title} to={link.route}>
            <p className="uppercase font-13 text-yellow-1 pb-4 md:pb-0 pr-0 md:pr-8">{link.title}</p>
        </Link>
      ));
    return (
        <footer className="">
            <div className="container grid grid-cols-1 md:grid-cols-2 col-gap-10 row-gap-10 px-8 py-8">
                <div className="bg-whitegray sm:flex border-b-7 border-yellow-1 pl-6 pr-4 py-8 md:py-12 lg:pl-12 lg:pr-8 xl:py-16 items-center">
                    <img src={images.IMG_HITCHED} className="pl-2 lg:pl-3 pr-1 py-1 mx-auto w-124 h-124"/>
                    <p className="px-2 sm:pl-6 pl-2 font-21 sm:pr-0 leading-normal md:leading-tight lg:leading-normal lg:pl-34 text-grey-1 font-baskerville">We work with you to plan and organise<br className="hidden xl:block"/> your wedding entertainment to ensure<br className="hidden xl:block"/> everything goes smoothly and<br className="hidden xl:block"/> you Get Hitched without a hitch.</p>
                </div>
                <div className="bg-whitegray sm:flex border-b-7 border-yellow-1 pl-6 pr-4 py-8 md:py-12 lg:pl-12 lg:pr-8 xl:py-16 items-center">
                    <img src={images.IMG_STARGROUP} className="pl-2 lg:pl-3 pr-1 py-1 mx-auto w-124 h-124"/>
                    <p className="px-2 sm:pl-6 pl-2 font-21 sm:pr-0 leading-normal md:leading-tight lg:leading-normal lg:pl-34 text-grey-1 font-baskerville">We work with you to plan and organise<br className="hidden xl:block"/> your wedding entertainment to ensure<br className="hidden xl:block"/> everything goes smoothly and<br className="hidden xl:block"/> you Get Hitched without a hitch.</p>
                </div>
            </div>
            <div className="container grid grid-cols-1 md:grid-cols-2">
                <form className="bg-yellow-2 py-10 pl-44 lg:pl-68 xl:pl-135 pr-44 md:pr-59" method="POST" name="stayinformed" data-netlify="true">
                    <p className="uppercase text-lg text-white pt-1 font-nexabold">Stay informed</p>
                    <p className="pr-25 pt-14 text-lg text-white h-24 sm:h-20 lg:h-16 font-baskerville">Stay informed about service updates, new entertainment<br className="hidden xl:block"/> packages and exclusive discounts</p>
                    <div className="pt-18 max-w-478 flex-none xl:flex w-full">
                        <input type="text" className="min-w-153 h-input px-6 xl:px-6 w-full form-input" placeholder="First Name"/>
                        <input type="text" className="w-full mt-4 xl:mt-0 ml-0 xl:ml-4 px-6 xl:px-6 h-input form-input" placeholder="Email address"/>
                    </div>
                    <button type="submit" className="mt-6 mb-2 uppercase bg-yellow-1 text-yellow-2 text-center w-full font-nexabold h-40 max-w-478">Subscribe</button>
                </form>
                <form className="bg-yellow-3 pl-44 md:pl-59 py-10 pr-44 md:pr-68" method="POST" name="requestcallback" data-netlify="true">
                    <p className="uppercase text-lg text-white pt-1 font-nexabold">Request a Call back</p>
                    <p className="pr-25 pt-14 text-lg text-white h-24 sm:h-20 lg:h-16 font-baskerville">Speak to our friendly team to help you get started.</p>
                    <div className="pt-18 max-w-478 flex-none xl:flex w-full">
                        <input type="text" className="min-w-153 h-input px-6 xl:px-6 w-full form-input" placeholder="First Name"/>
                        <input type="text" className="w-full mt-4 xl:mt-0 ml-0 xl:ml-4 px-6 xl:px-6 h-input form-input" placeholder="Email address"/>
                    </div>
                    <button type="submit" className="mt-6 mb-2 uppercase bg-yellow-1 text-yellow-2 text-center w-full font-nexabold h-40 max-w-478">Subscribe</button>
                </form>
            </div>
            <div className="container border-b border-yellow-2 pt-4">
                <div className="relative">
                    <div className="w-full h-full relative md:absolute top-0 left-0 flex items-center" style={{}}>
                        <Link to="/" className="mx-auto">
                            <svg id="Component_1_1" data-name="Component 1 – 1" xmlns="http://www.w3.org/2000/svg" width="145" height="57" viewBox="0 0 137 53">
                                <text id="Hitched" transform="translate(0 43)" fill="#707070" className="font-baskerville font-42"><tspan x="0" y="0">Hitched</tspan></text>
                                <text id="get" transform="translate(92 19)" fill="#bfb882" className="font-nexabold font-20 fontweight-700"><tspan x="0" y="0">get</tspan></text>
                            </svg>
                        </Link>
                    </div>
                    <div className="flex-none md:flex justify-between items-center px-53 h-83">
                        <div className="flex mt-4 md:mt-0">
                            <div className="flex items-center mx-auto h-37">
                                <svg id="_003---Call" data-name="003---Call" className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20.637" height="20.636" viewBox="0 0 20.637 20.636">
                                    <path id="Shape" d="M9.543,12.129A8.329,8.329,0,0,1,7.028,7.4a.707.707,0,0,1,.2-.592L8.825,5.215a.712.712,0,0,0,.1-.881L6.388.394A.712.712,0,0,0,5.466.135L1.392,2.053A.708.708,0,0,0,1,2.76,19.694,19.694,0,0,0,7,14.674a19.688,19.688,0,0,0,11.913,6,.708.708,0,0,0,.707-.391L21.536,16.2a.712.712,0,0,0-.258-.92l-3.941-2.537a.712.712,0,0,0-.881.1l-1.593,1.594a.707.707,0,0,1-.592.2,8.329,8.329,0,0,1-4.729-2.515Z" transform="translate(-0.997 -0.038)" fill="#bfb882"/>
                                    <path id="Shape-2" data-name="Shape" d="M34.76,17.472a.712.712,0,0,1-.712-.712,5.343,5.343,0,0,0-5.337-5.337.712.712,0,1,1,0-1.423,6.768,6.768,0,0,1,6.76,6.76A.712.712,0,0,1,34.76,17.472Z" transform="translate(-18.392 -6.442)" fill="#bfb882"/>
                                    <path id="Shape-3" data-name="Shape" d="M38.318,11.03a.712.712,0,0,1-.712-.712,8.9,8.9,0,0,0-8.895-8.895.712.712,0,1,1,0-1.423A10.329,10.329,0,0,1,39.03,10.318a.712.712,0,0,1-.712.712Z" transform="translate(-18.392)" fill="#bfb882"/>
                                </svg>
                                <p className="text-grey-1 pl-8 font-baskerville font-28">{phoneNumber}</p>
                            </div>
                        </div>
                        <div className="flex mt-4 md:mt-0">
                            <div className="flex items-center mx-auto">
                                <img src={images.IMG_FACEBOOK} className="w-21 h-21 mr-4"/>
                                <img src={images.IMG_INSTAGRAM} className="w-21 h-21 mr-4"/>
                                <img src={images.IMG_LINKEDIN} className="w-21 h-21"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex pt-10 pb-8">
                <div className="flex-none md:flex mx-auto">
                    {NavItems}
                </div>
            </div>
            <div className="bg-whitegray text-center pt-3 h-35">
                <p className="font-10 text-grey-2">© 2020. Company name. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
