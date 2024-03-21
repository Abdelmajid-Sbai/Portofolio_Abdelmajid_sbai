import React, { useState } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
export default function Wordpress_site() {
    
  
    return (
        <>
        <div className="container py-5">
      <h3 class="mb-5" ><b>site web wordpress details</b></h3>
      <div className='row'>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/wordpress1.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/wordpress2.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/wordpress3.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/wordpress4.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/wordpress5.PNG"}  alt="Card image cap"/>
        </div>

        <div className='col-lg-12'>
        <h3 class="mb-5" ><b>page shop</b></h3>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/wordpressshop.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <h3 class="mb-5" ><b>page cart</b></h3>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/wordpresscart.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <h3 class="mb-5" ><b>page Contact</b></h3>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/wordpresscontact.PNG"}  alt="Card image cap"/>
        </div>
      </div>
    </div>
        </>
    )

}