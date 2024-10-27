'use client'
import Link from "next/link"
import Logo from "@/app/UI/Logo"

export default function Footer(){
    return(
        <footer className="px-2 mt-10 pt-14 pb-8 dark:bg-[#092330]">
            <div className="block dark:hidden border-b-2 mb-6 shadow-black"></div>
            <div className="flex flex-col md:flex-row md:justify-around  w-full md:mx-auto">
                <div className="flex flex-grow md:justify-around gap-x-12">
                    <div>
                        <p className="font-semibold text-lg text-blue-primary">Product</p>
                        <Link className="my-3 block" href={'#'}>Overview</Link>
                        <Link className="my-3 block" href={'#'}>Features</Link>
                        <Link className="my-3 block" href={'#'}>Solutions</Link>
                        <Link className="my-3 block" href={'#'}>Tutorials</Link>
                        <Link className="my-3 block" href={'#'}>Pricing</Link>
                        <Link className="my-3 block" href={'#'}>Releases</Link>
                    </div>
                    <div className="hidden md:block">
                        <p className="font-semibold text-lg text-blue-primary">Company</p>
                        <Link className="my-3 block" href={'/contact'}>About Us</Link>
                        <Link className="my-3 block" href={'/contact'}>Careers</Link>
                        <Link className="my-3 block" href={'/contact'}>Press</Link>
                        <Link className="my-3 block" href={'/contact'}>News</Link>
                        <Link className="my-3 block" href={'/contact'}>Media kit</Link>
                        <Link className="my-3 block" href={'/contact'}>Contact</Link>
                    </div>
                    <div className="">
                        <p className="font-semibold text-lg text-blue-primary">Resources</p>
                        <Link className="my-3 block" href={'/policy'}>Blog</Link>
                        <Link className="my-3 block" href={'/terms'}>Newsletter</Link>
                        <Link className="my-3 block" href={'/cookies'}>Events</Link>
                        <Link className="my-3 block" href={'/cookies'}>Help center</Link>
                        <Link className="my-3 block" href={'/cookies'}>Tutorials</Link>
                        <Link className="my-3 block" href={'/cookies'}>Support</Link>
                    </div>
                    <div className="hidden md:block">
                        <p className="font-semibold text-lg text-blue-primary">Usecases</p>
                        <Link className="my-3 block" href={'#'}>Startups</Link>
                        <Link className="my-3 block" href={'#'}>Enterprise</Link>
                        <Link className="my-3 block" href={'#'}>Government</Link>
                        <Link className="my-3 block" href={'#'}>Saas</Link>
                        <Link className="my-3 block" href={'#'}>Marketplaces</Link>
                        <Link className="my-3 block" href={'#'}>Ecommerce</Link>
                    </div>
                    <div className="">
                        <p className="font-semibold text-lg text-blue-primary">Social</p>
                        <a target="blank" className="my-3 block" href={'https://ngwindsongk.com/'}>Twitter(X)</a>
                        <a target="blank" className="my-3 block" href={'https://ngwindsongk.com/'}>LinkedIn</a>
                        <a target="blank" className="my-3 block" href={'https://ngwindsongk.com/'}>Facebook</a>
                        <a target="blank" className="my-3 block" href={'https://ngwindsongk.com/'}>Github</a>
                        <a target="blank" className="my-3 block" href={'https://ngwindsongk.com/'}>AngelList</a>
                        <a target="blank" className="my-3 block" href={'https://ngwindsongk.com/'}>Dribbble</a>
                    </div>
                    <div className="hidden md:block">
                        <p className="font-semibold text-lg text-blue-primary">Legal</p>
                        <Link className="my-3 block" href={'/policy'}>Privacy</Link>
                        <Link className="my-3 block" href={'/terms'}>Terms</Link>
                        <Link className="my-3 block" href={'/cookies'}>Cookies</Link>
                        <Link className="my-3 block" href={'/cookies'}>Licenses</Link>
                        <Link className="my-3 block" href={'/cookies'}>Settings</Link>
                        <Link className="my-3 block" href={'/cookies'}>Contact</Link>
                    </div>
                </div>
                <div className="flex md:hidden flex-gow md:flex-col mt-3 gap-x-5">
                    <Link className="my-3 block" href={'/policy'}>Privacy</Link>
                    <Link className="my-3 block" href={'/terms'}>Terms</Link>
                    <Link className="my-3 block" href={'/cookies'}>Cookies</Link>
                </div>
            </div>
            <hr className="md:mx-8 my-12 border-blue-primary" />
            <div className="flex flex-col-reverse gap-y-3 md:items-center justify-center relative text-center text-gray-500 mt-4 md:my-9">
                <p>&copy; 2024 Zaumu</p>
            </div>
        </footer>
    )
}