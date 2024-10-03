'use client'
import { useState, useContext, useEffect } from "react";
import { Context } from "@/app/lib/ContextProvider";
import Link from "next/link"
import { usePathname} from "next/navigation";
import Logo from "@/app/UI/Logo";
import { hide, show} from "@/app/lib/controlls";
import { overlayE } from "@/app/lib/trigger";
import useUser from "@/app/lib/hooks/useUser";
import Search from "./Search";
import Filter from "./Filter";

export function MobileTopMenu(){
    return(
        <div className="block md:hidden">
            <div className="flex justify-between items-center px-3 py-3  mb-1">
                <Logo/>
                <button onClick={e=>show('mobile_side_menu')} className="icon-[solar--hamburger-menu-outline] w-8 h-8"/>
            </div>
        </div>
    )
}
export function MobileSideMenu(){
    const {isLoading,error, user, logout } = useUser();
    let {isLogged} = useContext(Context);
    let pathname = usePathname();
    useEffect(()=>{
        hide('mobile_side_menu');
    },[pathname])
    return(
        <>
        <div id="mobile_side_menu" className="block fixed z-40 top-0 md:top-10 2xl:top-24 right-0 w-[60vw] translate-x-[60vw] md:w-[20vw] md:h-[80vh] md:overflow-y-scroll md:rounded-lg pt-4 h-[100vh] bg-background-primary md:hidden px-2 md:px-4 md:large-scroll">
            <button onClick={e=>hide('mobile_side_menu')} className="w-full text-right pr-4 mt-2 absolute"><span className="icon-[material-symbols-light--close] w-8 h-8"/></button>
            <div className="my-12"></div>
            {
                isLogged && !error && !isLoading &&
                <div className="">
                </div>
            }
            <div>
                <Link href={'/'} className={`flex items-center my-4 ${pathname==='/'?'text-primary':''} `}>
                    <div className="mx-3"><span className={`icon-[solar--home-smile-angle-linear] w-8 h-8`}/></div>
                    <span className="truncate text-xs font-bold text-center">Home</span>
                </Link>
                <a target="blank" href={'https://ngwindsongk.com/'} className={`flex items-center my-4 ${pathname==='/'?'text-primary-light':''} `}>
                    <div className="mx-3"><span className={`icon-[gis--story-map] w-8 h-8`}/></div>
                    <span className="truncate text-xs font-bold text-center">Our Story</span>
                </a>
                <Link href={'/contact'} className={`flex items-center my-4 ${pathname==='/contact'?'text-primary':''} `}>
                    <div className="mx-3"><span className={`icon-[line-md--phone-call-loop] w-8 h-8`}/></div>
                    <span className="truncate text-xs font-bold text-center">Contact</span>
                </Link>
                <Link href={'/FAQs'} className={`flex items-center my-4 ${pathname==='/FAQs'?'text-primary':''} `}>
                    <div className="mx-3"><span className={`icon-[material-symbols--contact-support-outline] w-8 h-8`}/></div>
                    <span className="truncate text-xs font-bold text-center">FAQs</span>
                </Link>
            </div>
            
            
            {
                (isLogged && !error && !isLoading) ?
                <div className="border-t-[1px] border-Grey p-2 w-full">
                    <button onClick={e=>logout()} className="text-Error font-semibold flex items-center mt-3"><span className="icon-[material-symbols-light--logout] w-7 h-7"/>Logout</button>
                </div>
                :
                <div className="flex justify-around border-t-[1px] border-Grey p-2 absolute md:relative md:bottom-0 bottom-20 w-full">
                    <button onClick={e=>overlayE('/login')} className="w-24  py-3 text-center rounded-lg font-semibold hover:scale-105 border-2 border-primary" >Log In</button>
                    <button onClick={e=>overlayE('/signup')} className="w-24  py-3 text-center rounded-lg font-semibold hover:scale-105 bg-primary text-white">Join Now</button>
                </div>
                
            }
        </div>
        </>
    )
}

export function TopMenu(){
    let pathname = usePathname();
    const {isLoading,error, user } = useUser();
    let {isLogged} = useContext(Context);
    
    return(
        <div className="hidden md:block bg-primary-dark z-30 py-3 2xl:py-5 px-4 sticky top-0">
            <div className="flex justify-between px-5 items-center">
                <Logo/>
                <div className="flex gap-12 items-center">
                    <Link className={`font-semibold flex items-center`} href="/"><span className="icon-[bi--stars] w-7 h-7 mr-1"/> Match AI</Link>
                    <Link className={`font-semibold`} href="/creators">Creators</Link>
                    <Link className={`font-semibold`} href="/brands">Brands</Link>
                    <Link className={`font-semibold`} href="/">Trending</Link>
                    {
                        isLogged && !error && !isLoading?
                        <div className="flex gap-3">
                        </div>
                        :
                        <div className="flex gap-5">
                            <Link href={'/login'} className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105" >Log In</Link>
                            <Link href={'/join'} className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105 bg-blue-primary text-white">Register</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default function Header(){``
    return (
        <header className="">
            <TopMenu/>
            <MobileTopMenu/>
            <MobileSideMenu/>
        </header>
    )
}