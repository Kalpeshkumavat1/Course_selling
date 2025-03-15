import { createContext, useContext, useRef } from "react";

const navcontext=createContext();
export function NavProvider({children}){
    const reviewref=useRef(null);
    const faqsref=useRef(null);
    const courseref=useRef(null);

    function ScrollTo(ref){
        if(ref.current){
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <navcontext.Provider value={{reviewref,courseref,faqsref,ScrollTo}}>
            {children}
        </navcontext.Provider>
    )
}
export function useNav(){
    return useContext(navcontext);
}