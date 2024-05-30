 
 const  handleSaveData = async (inputData) => { 
    
    const response = await fetch('/api/saveAllData/', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify({data: inputData }), 
    }); 
  
    return response 
  
  }; 



export default async function handler(req, res) {

    const date = new Date();
    const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();


        const zodiacSigns = [
            { sign: "Aries", reading: "Courageous and energetic"+showTime },
            { sign: "Taurus", reading: "Patient and reliable" +showTime},
            { sign: "Gemini", reading: "Adaptable and curious" },
            { sign: "Cancer", reading: "Intuitive and emotional" },
            { sign: "Leo", reading: "Generous and warm-hearted" },
            { sign: "Virgo", reading: "Practical and loyal" },
            { sign: "Libra", reading: "Diplomatic and social" },
            { sign: "Scorpio", reading: "Passionate and determined" },
            { sign: "Sagittarius", reading: "Optimistic and adventurous" },
            { sign: "Capricorn", reading: "Responsible and disciplined" },
            { sign: "Aquarius", reading: "Inventive and friendly" },
            { sign: "Pisces", reading: "Compassionate and artistic" }
          ];

          handleSaveData({"Horoscope":allData});

          return  NextResponse.json( { message: 'Data saved successfully!'+ showTime} ,{ status:201 } )

    

          

   
  }
  