import React from 'react'
import "./Cards.css";
const Single = () => {
    return (
        <>
            <li className='cards__item bg-light' id="signature">
                <h6 className='cards__item__price'>極選系列</h6>
            </li>
            
            <li className='cards__item bg-light' id="beef">
                <h6 className='cards__item__price'>牛肉系列</h6>
            </li>
            <li className='cards__item bg-light' id="chicken">
                <h6 className='cards__item__price'>雞肉系列</h6>
            </li>
            <li className='cards__item bg-light' id="Mcnuggets">
                <h6 className='cards__item__price'>麥克雞塊系列</h6>
            </li>
            <li className='cards__item bg-light'id="crispy">
                <h6 className='cards__item__price'>麥脆雞系列</h6>
            </li>
            <li className='cards__item bg-light'id="pork_and_seafood">
                <h6 className='cards__item__price'>海鮮和豬系列</h6> 
            </li>
        </>
    )
}

export default Single
