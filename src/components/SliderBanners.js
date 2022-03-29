import React, {useState} from 'react';
import BtnSlider from './BtnSlider';
import banners from '../utils/featured-banners.json';



export default function SliderBanners(props) {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if(slideIndex !== banners.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === banners.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(banners.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }
    
  return (
      
    <div className="container-slider">
    {props.banners.results.map((banner, index) => {
        return (
            <div
            key={banner.id}
            className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
            >
                <img src={banner.data.main_image.url} 
                alt={banner.data.title}/>
            </div>
        )
    })}
    <BtnSlider moveSlide={nextSlide} direction={"next"} />
    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

        <div className="container-dots">
            {Array.from({length: 3}).map((item, index) => (
                <button
                onClick={() => moveDot(index + 1)}
                className={slideIndex === index + 1 ? "dot active" : "dot"}
                />
                ))}
        </div>

   
</div>
      
  )
}
