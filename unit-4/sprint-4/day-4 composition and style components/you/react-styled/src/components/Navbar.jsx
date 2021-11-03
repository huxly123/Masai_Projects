import React from 'react'
import style from "./navbar.module.css"

function Navbar() {
    return (
        <div className={style.navbar}>
            <div>
                       <img className={style.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Imgur_logo.svg/1200px-Imgur_logo.svg.png" alt="pic"></img>
                       </div>
                       <div>
      <span > <a className={style.link1}  href="">Link 1</a></span> 
    <span >    <a className={style.link2} href="">Link 2</a></span>
        
        </div>
        </div>
    )
}

export default Navbar
