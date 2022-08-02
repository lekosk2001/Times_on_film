import React from 'react'
import {Link} from "react-router-dom";

export default function Article(props) {
return (
    <Link to={props.link} className='article'>

            <div className='article_label font_mini color_blue'>{props.label}</div>
            <div className='article_title font_max font_bold'>{props.title}</div>
            <div className='article_sub font_regular'>{props.sub}</div>
            <div className='article_image'>{props.image}</div>

    </Link>


)
}
