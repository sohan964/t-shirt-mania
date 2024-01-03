import React, { createContext, useState } from 'react';
import './Grandpa.css'
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';

//it's called context api
export const RingContext = createContext('ring');
export const MoneyContext = createContext(558);
const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(558);
    return (
        <RingContext.Provider value={[house,setHouse]}>
            <MoneyContext.Provider value={money}>
            <div className='grandpa'>
            <h3>Grandpa</h3>
              <section className='flex'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
                
              </section>
            </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;