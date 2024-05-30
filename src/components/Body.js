"use client";

import MainList from "@/components/MainList"
import ListControl from "@/components/ListControl"
import {fetchAllData} from "@/components/DB/DBFetch"
import {handleSaveData} from "@/components/DB/DBSend"
import { useState,useContext,createContext,useEffect } from 'react'
import { Button } from "@nextui-org/react";
 export const FontContext = createContext();

const Body = (props) => {

  const [menu, setMenu] = useState(true);
  const  [currentFont, setCurrentFont] = useState("font-sans");
  




  const [allData, setAllData] = useState([]); 


  useEffect(() => {
    const getData = async () => {
      const data=await fetchAllData();
      setAllData(data.Horoscope);
    }

    getData()

  }, [])


  const sendData=async ()=>{

      allData[0].sign="ass5"


      console.log(allData[0].sign);
      await handleSaveData({"Horoscope":allData});
  }


  


  return (
    
    <div >

      <FontContext.Provider value={{currentFont,setCurrentFont}}>
         <ListControl toggleFunc={setMenu} menu={menu}  />
         <MainList menu={menu} readingsList={allData} />


      </FontContext.Provider>



      


    

    </div>

  )
}



export default Body
