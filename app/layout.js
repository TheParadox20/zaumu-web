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
      <body className={`${poppins.className} bg-background-primary text-white lg:text-sm 2xl:text-base`}>
        <ContextProvider>
          {children}
        </ContextProvider>
        <Popup/>
        <Overlays/>
      </body>
    </html>
  );
}
