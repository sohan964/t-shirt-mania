import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Myself = () => {
    const [house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h3>Myself:{house}</h3>
            <button onClick={()=> setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Myself;