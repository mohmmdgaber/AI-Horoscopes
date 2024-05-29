
export const fetchAllData = async () => { 
    const response = await fetch('/api/getAllData'); 
  
    if (response.ok) { 
      const data = await response.json(); 
      return data[0].Horoscopes;

    } else { 
      alert('Failed to fetch data!'); 
    } 
  }; 