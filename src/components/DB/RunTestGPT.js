export const runGPT = async () => { 
    const response = await fetch('api/updateHoroscopes'); 
  
    if (response.ok) { 
      const data = await response.json(); 

    } else { 
      alert('Failed to fetch data!'); 
    } 
  }; 

  