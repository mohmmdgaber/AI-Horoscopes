
require('dotenv').config()
import { NextResponse } from 'next/server'

import {handleSaveData} from "@/components/DB/DBSend"


export  async function GET(res) {
    
        const apiKey = process.env.OPENAI_API_KEY
        const url = 'https://api.openai.com/v1/chat/completions'
      
  

        const date = new Date();
        const showDate = date.getDate() 
            + '/' + (date.getMonth()+1) 
            + "/" + date.getFullYear();


        var zodiacSigns = [
            { sign: "Aries", reading: "" },
            { sign: "Taurus", reading: "" },
            { sign: "Gemini", reading: "" },
            { sign: "Cancer", reading: "" },
            { sign: "Leo", reading: "" },
            { sign: "Virgo", reading: "" },
            { sign: "Libra", reading: "" },
            { sign: "Scorpio", reading: "" },
            { sign: "Sagittarius", reading: " " },
            { sign: "Capricorn", reading: "" },
            { sign: "Aquarius", reading: "" },
            { sign: "Pisces", reading: "" }
          ];
          


           
          for await (const zodiacSign of zodiacSigns){
            var messageStruct="Write a horoscope reading for the sign: "+zodiacSign.sign+", on the date of: "+showDate+", make it 2 paragraphs at max, and don't include the date and the sign in the begenning";

            const body = JSON.stringify({
            messages:[{ role: "user", content: messageStruct }],
            model: 'gpt-3.5-turbo',
            stream: false
          })
        
          try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`
              },
              body
            })
          const data = await response.json();

          console.log("Here's the data")

          console.log(data.choices[0].message.content);
          zodiacSign.reading=data.choices[0].message.content;

          } catch (error) {
            return  NextResponse.json( { message: 'Error with ChatGPT API!' } ,{ status:500 } );
          }

        };


        console.log("THE LIST HERE");
        console.log(zodiacSigns);

        
         await handleSaveData({"Horoscope":zodiacSigns,"Date":showDate});


        return  NextResponse.json( { message: 'Data saved successfully!'+ showDate} ,{ status:200 } )

    

          

   
  }
  