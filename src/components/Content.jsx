import React from 'react'
import {Link} from "react-router-dom";

export default function Content(props) {
    return (
    <li className='content' key={props.id}>
        <Link to={props.link} >
            <div className='content_img' > <img src={"/server/img/"+props.img} alt="" /> </div>
            <h4 className='content_title'>{props.title}</h4>
            <p className='content_release'>{props.release[0]+". "+props.release[1]+"."}</p>
        </Link>
    </li>
    )
}
