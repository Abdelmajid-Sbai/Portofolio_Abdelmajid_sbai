import React from 'react';
import "./services.css";
import development from "../../assets/developpement.jpeg";
import ui from "../../assets/images.jpeg";
import excel from "../../assets/excel.png";


const data = [
  {
    id: 1,
    image: development,
    title: "Web Development" ,
    description:
      "Full Stack Developpement .",
  },
  {
    id: 2,
    image: ui,
    title: "UI/UX design",
    description:
      "Design with logiciel Figma.",
  },
  {
    id: 3,
    image: excel,
    title: "Excel",
    description:
      "Microsoft Excel .",
  },
];

const Services = () => {
  return (
    <section className='services container section' id='services'>
      <h2 className='section__title'>Services</h2>

      <div className='services__container grid'>
        {data.map(({id,image,title,description})=>{
          return (
            <div className='services__card' key={id}>
              <img src={image} alt=' ' className='services__img'/>
              <h3 className='services__title'>{title}</h3>
              <p className='services__description'>{description}</p>


            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services