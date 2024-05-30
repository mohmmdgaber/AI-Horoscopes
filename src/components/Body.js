"use client";

import MainList from "@/components/MainList"
import ListControl from "@/components/ListControl"
import {fetchAllData} from "@/components/DB/DBFetch"
import {handleSaveData} from "@/components/DB/DBSend"
import { useState,useContext,createContext,useEffect } from 'react'
import {runGPT} from "@/components/DB/RunTestGPT"
import {Button} from "@nextui-org/react";

 export const FontContext = createContext();

const Body = () => {

  const [menu, setMenu] = useState(true);
  const  [currentFont, setCurrentFont] = useState("font-sans");
  


  const [allData, setAllData] = useState([]); 
  const [horoscopeDate, sethoroscopeDate] = useState(""); 


  useEffect(() => {
    const getData = async () => {
      const data=await fetchAllData();
      setAllData(data.Horoscope);
      sethoroscopeDate(data.Date)
    }

    getData()

  }, [])




  


  return (
    
    <div  >

      <title>Daily AI Horoscopes</title>
      <h1 className="flex justify-center m-10 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-600 md:text-5xl lg:text-6xl dark:text-grey">Daily AI Horoscopes</h1>


      <h3 className="flex justify-center m-10">Updated for date: {horoscopeDate}</h3>

      <div className=" justify-center "> 
      
        <FontContext.Provider value={{currentFont,setCurrentFont}}>
        <ListControl toggleFunc={setMenu} menu={menu}  />
        <MainList menu={menu} readingsList={allData} />
        </FontContext.Provider>
      
      </div>





      


    

    </div>

  )
}



export default Body
