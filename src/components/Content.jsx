import React from 'react'
import {Link} from "react-router-dom";



export default function Content(props) {

    // 만약 개봉 날짜가 10 미만이면, 0을 붙이기.
    let release_date_zero = "";
    if (props.release[1]<10){
        release_date_zero = "0"
    }

    return (
    <li className='content' key={props.id}>
        <Link to={props.link} >
            <div className='content_img' > <img src={"/server/img/"+props.img} alt="" /> </div>
            <h4 className='content_title'>{props.title}</h4>
            <p className='content_release'>{props.release[0]+". "+release_date_zero+props.release[1]+"."}</p>
        </Link>
    </li>
    )
}
