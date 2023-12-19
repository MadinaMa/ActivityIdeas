import { useEffect, useState } from 'react';
import './App.css';
import video from './video.mp4';

function App() {

  const [advice, setAdvice] = useState ("");

  useEffect(() => {
    getAdvice();
  }, [])

  const getAdvice = async () => {
    const response = await fetch (`https://www.boredapi.com/api/activity/`);
    const data = await response.json();
    setAdvice(data.activity);
    console.log(data.activity)
  }


  return (<div>
      <div>
           <video autoPlay muted loop>
                <source src={video} type="video/mp4" />
           </video>
        </div>

    <div className='container h1'>
      <h1> Are you running out of ideas what to do?! </h1>
      </div>

      <div className='container'>
      <button onClick={getAdvice}> Get an idea </button>
      </div>
    

      <div className='container'>
      <p> {advice}!</p>
      </div>

      </div>
  );
}

export default App;
