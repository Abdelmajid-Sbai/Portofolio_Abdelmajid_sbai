import React, { useState } from 'react';
import './Nav.css';
import {Link} from 'react-router-dom'
export default function Laravel_site() {
    
  
    return (
        <>
         <div className="container py-5">
      <h3 class="mb-5" ><b>site web Ecommerce Laravel details</b></h3>
      <div className='row'>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/laravel1.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/laravel2.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/laravel3.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/laravel4.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/laravel5.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <h3 class="mb-5" ><b>Admin details</b></h3>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/laraveladmin.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/laraveladmin2.PNG"}  alt="Card image cap"/>
        </div>
        <div className='col-lg-12'>
        <h3 class="mb-5" ><b>User</b></h3>
        <img class="card-img-top  "  src={process.env.PUBLIC_URL+"/myphotos/laraveluser.PNG"}  alt="Card image cap"/>
        </div>
      </div>
    </div>
        </>
    )

}