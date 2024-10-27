'use client'

import { useState, useEffect } from "react";
import { load, save } from "@/app/lib/storage";

export default function ThemeSwitch() {
    let [theme, setTheme] = useState(null);

    useEffect(() => {
        if(load('theme') == 'dark') setTheme('dark')
        else if (load('theme') == 'light') setTheme('light')
        else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark')
        else {
            setTheme('dark')
            save('theme', 'dark')}
    }, []);

    function toggleTheme() {
        if (theme == 'dark') {
            save('theme', 'light')
            document.documentElement.classList.remove('dark')
            setTheme('light')
        } else {
            save('theme', 'dark')
            document.documentElement.classList.add('dark')
            setTheme('dark')
        }
    }

    return (
        <div>
            {
                theme == 'dark' && <button onClick={e=>toggleTheme()} className='icon-[ic--outline-dark-mode] text-black dark:text-white w-6 h-6'></button>
            }
            {
                theme == 'light' && <button onClick={e=>toggleTheme()} className='icon-[ic--outline-light-mode] text-black dark:text-white w-6 h-6'></button>
            }
        </div>
    )
}