import Header from "@/app/UI/Menus";
import Footer from "@/app/UI/Footer";
export default function LandingLayout({children}){
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}