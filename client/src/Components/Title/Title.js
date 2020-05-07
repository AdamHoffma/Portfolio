import React from 'react'
import image from '../Resources/Beautiful_Sunset_For_Portfolio.jpeg'
import './Title.css'

const Title = () => {
    console.log(image)
    return (
        <div>
            <img className="title_image" src={image} alt="Image of sunset"></img>
        </div>
    )
}

export default Title