import { MongoClient } from 'mongodb'; 
import { NextResponse } from 'next/server'

require('dotenv').config()

export async function POST(req) { 
    const { data } = await req.json(); 
    console.log(data)
  
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

}