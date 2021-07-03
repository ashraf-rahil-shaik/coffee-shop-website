import React,{useState} from 'react';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from './HeroElements';



const Hero = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
        
    };
    
    
    return (
        
       <HeroContainer>
           
           <Navbar toggle={toggle} />
           <Sidebar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
            <HeroItems>
           
                
            <HeroH1>Life is better with coffee</HeroH1>
            <HeroP>Made for You</HeroP>
            <HeroBtn>Place Order</HeroBtn>
            </HeroItems>
        </HeroContent>
       
       </HeroContainer>

    );
};

export default Hero ;
