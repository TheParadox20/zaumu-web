import { useEffect, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import useSWR from "swr";
import { fetcher, postData } from "@/app/lib/data";

export default function useCart () {
    let {isLogged} = useContext(Context);
    const { data, isError, isLoading, mutate } = useSWR(['/cart',{}], fetcher,{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false,
        errorRetryInterval: 300000
    })
    useEffect(()=>{
        if(isLogged) mutate()
        else mutate([])
    },[isLogged])
    
    let addToCart = (e,product)=>{
        e.preventDefault();
        popupE('Processing','Feature pending')
        console.log(product)
        postData((_)=>{},product,'/cart/add')
        e.stopPropagation();
    }

    return {
        cart: (isLoading || isError || !isLogged)?[]:data,
        isLoading,
        isError,
        mutate,
        addToCart
    }
}