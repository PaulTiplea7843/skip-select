import {useState, useEffect} from 'react';
import './App.css';
import EXTERNAL_API from "./constants";
import Card from "./components/Card";



function App() {

  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);


  useEffect(()=>{
    fetch(EXTERNAL_API)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [])

  return (
    <>
      <div className='header text-center items-center mt-4'>
        <h1 className='text-red-500 font-bold text-2xl'>Choose Your Skip Size</h1>
        <p className='text-lg'>Select the skip size that best suits your needs</p>
      </div>
      <div className='content grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 p-4'>
        {data.map((item)=>{
          return (
            <Card key={item.id}
            item={item}
            isSelected={selectedId === item.id}
            onSelect={() => setSelectedId(item.id)}  />
          )
        })}
      </div>  
        
    </>
  )
}

export default App
