export  const  handleSaveData = async (inputData) => { 
    
    const response = await fetch(process.env.URL +'/api/saveAllData/', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify({data: inputData }), 
    }); 
  
 
  }; 
