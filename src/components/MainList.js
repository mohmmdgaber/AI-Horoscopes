"use client";
import { useState } from 'react'

import HorizentalComponent from "@/components/HorizentalComponent"
import VerticalComponent from "@/components/VerticalComponent"

const MainList = ({menu,readingsList}) => {
 const ListComponent= menu ? HorizentalComponent: VerticalComponent;
 const parseData = i => [i.sign, i.reading];
 



  return (
    <div className={menu ?  "relative p-5 mx-auto rounded-b-lg bg-slate-600 w-4/5 grid grid-cols-3 gap-3": "relative p-5 mx-auto rounded-b-lg bg-slate-600 w-4/5 grid grid-cols-1 gap-3 " }    >
      
      {
      
      readingsList.length ? 
      
      readingsList.map((parseData) => (  <div key={parseData.sign}>  { <ListComponent name={parseData.sign} img={"./"+parseData.sign+".svg"} reading={parseData.reading}/> } </div>  )) :

      <h1 className="text-white">Loading...</h1>

    }
    </div>
    

  );


} 

export default MainList
