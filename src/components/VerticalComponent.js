"use client";
import ImageContainer from "@/components/ImageContainer"
import TextBlock from "@/components/TextBlock"

 const VerticalComponent = ({name,img,reading }) => {
  return (
    <div className=" bg-slate-400  justify-center rounded-lg  drop-shadow-2xl	flex flex-row py-10 " >
      <ImageContainer name={name} img={img} contType={true}></ImageContainer>
      

      <TextBlock reading={reading} contType={true}/>

      </div>
  )
}

export default VerticalComponent
