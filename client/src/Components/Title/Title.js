import React from 'react'
import image from '../Resources/Beautiful_Sunset_For_Portfolio.jpeg'
import arrow from '../Resources/arrow.png'
import './Title.css'

const Title = () => {
    console.log(image)
    return (
        <div className="overlay-image">            
            <img className="title-image" src={image} alt="Image of sunset"></img>
            <img className="arrow" src={arrow} alt="arrow to about"/>
            <div className="text">"The only thing I love more then building a beautiful webpage is a beautiful Colorado Sunset" -Adam Hoffman</div>
        </div>
    )
}

export default Title