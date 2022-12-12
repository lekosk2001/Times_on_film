import React, { useState } from 'react'
import {Link} from "react-router-dom";

export default function Header() {
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
    const toggleMenu = () => {
          setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

return (
    <nav>
        <span className='nav_pc'>
            <span className='logo'>
                <Link to="Times_on_film">
                    <p className='font_mini color_80per'>역사별 컨텐츠 검색엔진</p>
                    <h2>TIMES ON FILM</h2>
                </Link>
            </span>

            <span className='menu'>
                <ul>
                    <li><Link to="Times_on_film">홈</Link></li>
                    <li><Link to="Times_on_film/about">소개</Link></li>
                    <li><Link to="Times_on_film/search">검색</Link></li>
                    <li><Link to="Times_on_film/bookmark">보관함</Link></li>
                </ul>
            </span>

            <span className={isOpen ? "hamburger_active" : "hamburger"} onClick={()=>toggleMenu()}>
                <span></span>
                <span></span>
                <span></span>
            </span>

        </span>
        
        <span className={isOpen ? "hamburger_down" : "hamburger_down hide"}>
            <ul>
                <li><Link to="/about" onClick={()=>toggleMenu()}>소개</Link></li>
                <li><Link to="/search" onClick={()=>toggleMenu()}>검색</Link></li>
                <li><Link to="/bookmark" onClick={()=>toggleMenu()}>보관함</Link></li>
            </ul>
        </span>

        <span className={isOpen ? "shade" : "hidden"} onClick={()=>toggleMenu()}></span>

    </nav>

)
}
