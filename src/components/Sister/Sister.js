import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const money = useContext(MoneyContext);
    return (
        <div>
            <h3>Sister: {money} </h3>
        </div>
    );
};

export default Sister;