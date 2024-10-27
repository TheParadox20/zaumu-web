import { Poppins } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/app/lib/ContextProvider";
import Popup from "@/app/UI/Popup";
import Overlays from "@/app/UI/Overlays";

const poppins = Poppins({ subsets: ["latin"], weight:['200','300','400','600','800'], style:'normal' });

export const metadata = {
  title: `Zaumu | Home`,
  description: "create - connect - collaborate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
        dangerouslySetInnerHTML={{
          __html:`
          // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
          document.documentElement.classList.toggle(
            'dark',
            localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
          )

          // Whenever the user explicitly chooses light mode
          localStorage.theme = 'light'

          // Whenever the user explicitly chooses dark mode
          localStorage.theme = 'dark'

          // Whenever the user explicitly chooses to respect the OS preference
          localStorage.removeItem('theme')
          `
        }}
        />
      </head>
      <body className={`${poppins.className} bg-white dark:bg-background-primary dark:text-white lg:text-sm 2xl:text-base`}>
        <ContextProvider>
          {children}
        </ContextProvider>
        <Popup/>
        <Overlays/>
      </body>
    </html>
  );
}
