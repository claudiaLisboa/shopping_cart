import { useState } from "react"

export function useLocalStorage<T>(kye: string, initialValue: T | (() => T) ){
   
    const[value, setValue] = useState<T>(() =>{
        const jsonValue = localStorage.getItem(key)
            if(jsonValue != null) return JSON.parse(jsonValue)

            if(typeof initialValue === "function"){
                return (initialValue as () => T)()
            }else{
                return initialValue

            }

    })
    
}