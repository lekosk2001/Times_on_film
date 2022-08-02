import React from 'react'
import {Link} from "react-router-dom";

export default function Content(props) {
    return (
    <li className='content' key={props.id}>
        <Link to={props.link} >
            <div className='content_img' > <img src={"/server/img/"+props.img} alt="" /> </div>
            <div className='content_title'>{props.title}</div>
            <div className='content_release font_mini color_40per'>{props.release[0]+". "+props.release[1]+"."}</div>
        </Link>
    </li>
    )
}
