import React from 'react';
import "./portfolio.css";
import restaurant from "../../assets/newprojet.PNG";
import laravel from "../../assets/sitelaravel.PNG";
import wordpress from "../../assets/wodpress.PNG";
import {Link} from 'react-router-dom'



const data = [
  {
    id: 1,
    image: restaurant,
    title: "New city restaurant" ,
    lien:"https://abdelmajid-sbai.github.io/New-City-restaurant",
    description:
      "un site web d'un restaurant avec reactJs  (terminer pas) .",
  },
];

const Portfolio = () => {
  return (
    <section className='portfolio container section' id='portfolio'>
      <h2 className='section__title'>My projets</h2>

      <div className='portfolio__container grid'>
        {data.map(({id,image,title,lien,description})=>{
          return (
            <div className='portfolio__card' key={id}>
              <img src={image} alt=' ' className='portfolio__img'/>
              <h3 className='portfolio__title'>{title}</h3>
              <a href={lien} className='btn'>link to site</a>
              <p className='portfolio__description'>{description}</p>

            </div>
          )
        })}

        <div className='portfolio__card' >
              <img src={process.env.PUBLIC_URL+"/myphotos/sitelaravel.PNG"} alt=' ' className='portfolio__img'/>
              <h3 className='portfolio__title'>Electronique marcket</h3>
              <Link className="nav-link btn  ml-5  color-yel" to="/Laravel_site">More details</Link>
              <p className='portfolio__description'>Ecommerce site web with electronique product.</p>


            </div>

        <div className='portfolio__card' >
              <img src={process.env.PUBLIC_URL+"/myphotos/wodpress.PNG"} alt=' ' className='portfolio__img'/>
              <h3 className='portfolio__title'>Electronique market wordpress</h3>
              <Link className="nav-link btn  ml-5  color-yel" to="/Wordpress_site">More details</Link>
              <p className='portfolio__description'>ecommerce site web with wodpress.</p>


            </div>

      </div>
    </section>
  )
}

export default Portfolio