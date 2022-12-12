import React from 'react'
import {Link} from "react-router-dom";

// import re from '../../public/server/img';
export default function Article(props) {
return (
    <Link to={props.link} className='article'>
            <p className='article_label'>{props.label}</p>
            <h2 className='article_title'>{props.title}</h2>
            <p className='article_sub'>{props.sub}</p>
            <div className='article_image'>
                <img src={`${process.env.PUBLIC_URL}/server/img/${props.image}`} alt={props.title}/>
            </div>
    </Link>

)
}
