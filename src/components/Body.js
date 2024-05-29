"use client";

import MainList from "@/components/MainList"
import ListControl from "@/components/ListControl"
import {fetchAllData} from "@/components/DBFetch"
import { useState,useContext,createContext,useEffect } from 'react'
 export const FontContext = createContext();

const Body = (props) => {

  const [menu, setMenu] = useState(true);
  const  [currentFont, setCurrentFont] = useState("font-sans");




  const [allData, setAllData] = useState([]); 


  useEffect(() => {
    const getData = async () => {
      const data=await fetchAllData();
      setAllData(data);
    }

    getData()

  }, [])


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