import React from 'react';
import { StyledHeroImage } from '../styles/StyledHeroImage';


const HeroImage = ({ image, title, text }) => (
    <StyledHeroImage image={image}>
        <div className="HeroImage-content">
            <div className="HeroImage-text">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    </StyledHeroImage>
)

export default HeroImage;