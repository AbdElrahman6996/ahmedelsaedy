import React from 'react'
import img1 from '../../img/exmaple1.jpg'
import img2 from '../../img/exmaple2.jpg'
import img3 from '../../img/exmaple3.jpg'
import '../css/Photos.css'

const Photos = () => {
  return (
    <div className='photo-container'>
        <div className="headering">
            <h3>ابزر القصص</h3>
        </div>
        <div className="img-containers">
            <div className="card">
                <img src={img1} alt="" />
            </div>
            <div className="card">
                <img src={img2} alt="" />
            </div>
            <div className="card">
                <img src={img3} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Photos