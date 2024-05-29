"use client";
import ImageContainer from "@/components/ImageContainer"
import TextBlock from "@/components/TextBlock"

 const HorizentalComponent = ({name,img,reading,menu }) => {
  return (
    <div className="bg-slate-400 p-1 rounded-lg  drop-shadow-2xl	max-w-1/3	" >
      <ImageContainer name={name} img={img} contType={false}></ImageContainer>
      

      <TextBlock reading={reading} contType={false}></TextBlock>

      </div>
  )
}

export default HorizentalComponent
