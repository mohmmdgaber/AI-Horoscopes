"use client";
import Image from "next/image";

const ImageContainer = ({name,img,contType}) => {

  const basisAddon=contType ? " basis-1/2":  "  ";
  return (

    <div className={" flex justify-center items-center"}>  
    <div className={" relative    "+basisAddon}  >
            <Image src={img}  className="object-contain  justify-center	 "  width={500} height={500}/>
            <div className="absolute  left-0 right-0  top-4/5 ">
                <div className=" text-center text-xs sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
                   {name}
                </div>
        </div>
    </div>
  </div>  

  )
}

export default ImageContainer
