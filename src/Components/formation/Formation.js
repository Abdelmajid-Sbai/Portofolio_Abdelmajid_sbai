import React from 'react';
import "./formation.css";
import ismontic from "../../assets/ismontic.jpeg";
import fsjest from "../../assets/fsjest.jpeg";




const foramtion = [
    {
      id: 1,
      image: ismontic,
      title: "ISMONTIC TANGER 2022- Present" ,
      description:
        "Technician specialized in full stack web digital development.",
    },
    {
      id: 2,
      image: fsjest,
      title: "Faculte des sciences juridique economique et social 2021- Present",
      description:
        "Licence Economique et gestion.",
    },
    
  ];

const Formation = () => {
  return (
    <section className='formation container section' id='formation'>
      <h2 className='section__title'>Formation</h2>

      <div className='formation__container grid'>
        {foramtion.map(({id,image,title,description})=>{
          return (
            <div className='formation__card' key={id}>
              <img src={image} alt=' ' className='formation__img'/>
              <h3 className='formation__title'>{title}</h3>
              <p className='formation__description'>{description}</p>


            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Formation