import { MongoClient } from 'mongodb'; 
import { NextResponse,NextRequest } from 'next/server'
import { revalidatePath } from 'next/cache';


export const revalidate = 3600;
require('dotenv').config()
 
export  async function GET(req) {
  console.log("OUTFUNC"); 
  const client = new MongoClient(process.env.MONGODB_URI, { }); 
  
    try { 
      await client.connect(); 
      const database = client.db('horoscopes');  
      const collection = database.collection('horoscopesproject'); 
      const allData = await collection.find({}).toArray(); 

      // const path =req.nextUrl.searchParams.get('path') || '/';
      // revalidatePath(path);
  
      return  NextResponse.json( allData ,{ status:200 } );


    } catch (error) { 
      return  NextResponse.json({ message: 'Something went wrong!' }, { status: 500 }); 
    } finally { 
      await client.close(); 
    } 

} 

