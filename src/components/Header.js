import { useEffect, useState } from 'react'
import logo from '../assets/logo.svg'
export const Header = () => {
    const [theme,settheme] = useState(JSON.parse(localStorage.getItem("theme"))||"dark");
    useEffect(() => {
        localStorage.setItem("theme",JSON.stringify(theme));
        document.documentElement.removeAttribute("class");
        document.documentElement.classList.add(theme);
    })
    return (
       <header>
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>Task Mate</span>
        </div>
        <div className="themeSelector">
            <span onClick={() => settheme("light")} className={theme==="light" ? "light activeTheme" : "light"}></span>
            <span onClick={() => settheme("medium")} className={theme==="medium" ? "medium activeTheme" : "medium"}></span>
            <span  onClick={() => settheme("dark")} className= {theme==="dark" ? "dark activeTheme" : "dark"}></span>
            <span  onClick={() => settheme("gOne")} className= {theme==="gOne" ? "gOne activeTheme" : "gOne"}></span>
            <span  onClick={() => settheme("gTwo")} className={theme==="gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
            <span  onClick={() => settheme("gThree")} className= {theme==="gThree" ? "gThree activeTheme" : "gThree"}></span>

        </div>
       </header>
    )
}