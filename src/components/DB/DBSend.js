export const  handleSaveData = async (inputData) => { 
    
    const response = await fetch('/api/saveAllData/', { 
      method: 'POST', 
      headers: { 
        'Content-Type': 'application/json', 
      }, 
      body: JSON.stringify({data: inputData }), 
    }); 
  
    if (response.ok) { 
      alert('Data saved successfully!'); 
    } else { 
      alert('Something went wrong!'); 
    } 
  }; 
