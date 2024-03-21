import React,{useState} from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";


const Side = () => {

  const[toggle,showMenu]=useState(false);

  return (
    <>
    <aside className={toggle? "aside show-menu" : "aside"}>
      <a href='#home' className='nav__logo no9ta'>
        <b>S'bai</b>.
      </a>

      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link'>
                <i className='icon-home'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#about' className='nav__link'>
              <i className='icon-user-following'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#services' className='nav__link'>
              <i className='icon-briefcase'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#formation' className='nav__link'>
              <i className='icon-graduation'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#portfolio' className='nav__link'>
              <i className='icon-layers'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
              <i className='icon-note'></i>
              </a>
            </li>

           
          </ul>
        </div>
      </nav>

      <div className='nav__footer'>
        <span className='copyright'>
          <span>&copy;S'bai :2024</span>
        </span>

      </div>
    </aside>

    <div className={toggle ? "nav__toggle nav__toggle-oppen" : "nav__toggle"} onClick={()=>showMenu(!toggle)}>
      <i className='icon-menu'></i>
    </div>
    </>
  )
}

export default Side
