import React from 'react'
import {Link} from "react-router-dom";

export default function Header() {
return (
    <nav>
        <span className='logo'>
            <Link to="/">
                <div className='font_mini color_80per'>역사별 컨텐츠 검색엔진</div>
                <div className='font_max font_bold'>TIMES ON FILM</div>
            </Link>
        </span>

        <span className='menu'>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/search">검색</Link></li>
                <li><Link to="/bookmark">보관함</Link></li>
            </ul>
        </span>

        <span>
            <Link to="/" className='font_mini'><span className='login'>로그인</span></Link>
        </span>

        
    </nav>
)
}
