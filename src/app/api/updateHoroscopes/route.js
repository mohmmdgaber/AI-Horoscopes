
require('dotenv').config()
import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'; 
import { revalidatePath } from 'next/cache';


export const maxDuration = 60; 
export  async function GET(req,res) {

        const authToken = (req.headers.get('authorization') || '')
        .split('Bearer ')
        .at(1)

        // if not found OR the bearer token does NOT equal the CRON_SECRET
        if (!authToken || authToken != process.env.AUTH_TOKEN) {
          return NextResponse.json({ error: 'Unauthorized' }, {
          status: 401 })
        }



                
       const path =req.nextUrl.searchParams.get('path') || '/';
       revalidatePath(path);
  
    
        const apiKey = process.env.OPENAI_API_KEY
        const url = 'https://api.openai.com/v1/chat/completions'
      
  

        const date = new Date();
        const showDate = date.getDate() 
            + '/' + (date.getMonth()+1) 
            + "/" + date.getFullYear();

        const showTime = date.getHours() 
            + ':' + (date.getMinutes()) 


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

          const gptReq = async (body) =>{


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
            return data.choices[0].message.content;
  
            } catch (error) {
              return  NextResponse.json( { message: 'Error with ChatGPT API!' } ,{ status:500 } );
            }
            
          }
          


           
          for await (const zodiacSign of zodiacSigns){
            var messageStruct="Write a horoscope reading for the sign: "+zodiacSign.sign+", on the date of: "+showDate+", make it 2.5 paragraphs at max, and don't include the date and the sign in the begenning";
            const body = JSON.stringify({
            messages:[{ role: "user", content: messageStruct }],
            model: 'gpt-3.5-turbo',
            stream: false
          })
            zodiacSign.reading= await gptReq(body);
        };


        console.log("THE LIST HERE");
        console.log(zodiacSigns);


        /// Uploading generated horoscopes to mongodb
        var formattedData= {"Horoscope":zodiacSigns,"Date":showDate}
        const  SaveToDB = async (data) =>{

          const client = new MongoClient(process.env.MONGODB_URI, { 
          }); 
        
          try { 
            await client.connect(); 
            const database = client.db('horoscopes'); // Choose a name for your database 
            const collection = database.collection('horoscopesproject'); // Choose a name for your collection 
             await collection.deleteMany({});
             await collection.insertOne({ data });
             return  NextResponse.json( { message: 'Data saved successfully!' } ,{ status:201 } )
        
          } catch (error) { 
            return  NextResponse.json( { message: 'Something went wrong!' } ,{ status:500 } )
        
          } finally { 
            await client.close(); 
          }

        };
        await SaveToDB(formattedData)


   
      

        return  NextResponse.json( { message: 'Data saved successfully!'+ showDate} ,{ status:200 } )

    

          

   
  }
  