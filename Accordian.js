import React, { useState } from 'react';
import { questions } from './api_que';
import "./App.css"; 
import List from './List';

const Accordian = () => {
    const [data, setData] = useState(questions);
  return (
    <>
        <section className='main-div'>
            <h1 >React Prep Question</h1>
            {
                data.map((currElement) =>{
                    
                    return <List key ={currElement.id}{...currElement}/>
                })
            }
        </section>
        
    </>
  )
}

export default Accordian;
