import { MongoClient } from 'mongodb'; 
import { NextResponse } from 'next/server'

require('dotenv').config()
 
export  async function GET(res) {
  console.log("OUTFUNC"); 
  const client = new MongoClient(process.env.MONGODB_URI, { }); 
  
    try { 
      await client.connect(); 
      const database = client.db('horoscopes');  
      const collection = database.collection('horoscopesproject'); 
      const allData = await collection.find({}).toArray(); 
      return  NextResponse.json( allData ,{ status:200 } )


    } catch (error) { 
      return  NextResponse.json({ message: 'Something went wrong!' }, { status: 500 }); 
    } finally { 
      await client.close(); 
    } 

} 

