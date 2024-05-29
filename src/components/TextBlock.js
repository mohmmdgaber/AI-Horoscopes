"use client";
import { useState,useContext,createContext,React } from 'react'
import {FontContext} from "@/components/Body"




const TextBlock = ({reading,contType}) => {

    const {currentFont,setCurrentFont} = useContext(FontContext);

    const basisAddon=contType ?" text-l ": " text-xs ";

    


  return (
    <div className={currentFont+basisAddon+ "  break-normal min-w-1/2 mx-16 py-3 basis-4/5" }>

      {reading}
    </div>
  )
}

export default TextBlock
