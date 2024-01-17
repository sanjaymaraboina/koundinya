
// import {img1} from '../../src/assets/aditya.jpg'

import React from 'react'
import data from '../db.json'
import "./Dummy.css"

const Dummy = () => {
    console.log(data);
   let img = data.DataOfAdmin[0].src;
   console.log(img)
  return (
    <div className='dummy'>
    <p>{img}</p>
    <p>Hello</p>
    <img src={img} alt=""/>

    {
        data.DataOfAdmin.map((each)=>{
            return(<div key={each.id}>
                <p>{each.user}</p>
                <img src={each.src} alt=""/>

                
                </div>)
        })
    }
 
    </div>
  )
}

export default Dummy











