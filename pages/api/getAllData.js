import { MongoClient } from 'mongodb'; 
require('dotenv').config()
 
export default async function handler(req, res) {
  console.log("INFUNC"); 
  if (req.method === 'GET') { 
    const client = new MongoClient(process.env.MONGODB_URI, { }); 
  
    try { 
      await client.connect(); 
      const database = client.db('horoscopes');  
      const collection = database.collection('horoscopesproject'); 
      const allData = await collection.find({}).toArray(); 
  
      res.status(200).json(allData); 
      console.log(allData)
    } catch (error) { 
      res.status(500).json({ message: 'Something went wrong!' }); 
    } finally { 
      await client.close(); 
    } 
  } else { 
    res.status(405).json({ message: 'Method not allowed!' }); 
  } 
}
