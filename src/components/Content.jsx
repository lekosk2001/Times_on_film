import React from 'react'
import {Link} from "react-router-dom";



export default function Content(props) {

    // 만약 개봉 날짜가 10 미만이면, 0을 붙이기.
    let release_date_zero = "";
    if (props.release[1]<10){
        release_date_zero = "0"
    }
    let tv_mark = [];
    if (props.type.includes("TV 프로그램")){
        tv_mark.push(<div className='tv_mark' key={props.link}>TV</div>)
    }
    return (
    <li className='content'>
        <Link to={props.link}>
            <div className='content_img' > {tv_mark} <img src={"/server/img/"+props.img} alt={props.title} /> </div>
            <h4 className='content_title'>{props.title}</h4>
            <p className='content_release'>{props.release[0]+". "+release_date_zero+props.release[1]+"."}</p>
        </Link>
    </li>
    )
}
