import React from 'react'
import {Link} from "react-router-dom";
import Content from './Content'

export default function ConetentsList(props) {



let list = [];

props.contents_all.map(
    content => {
        if(content.keyword.includes(props.keyword))
        {list.push(content)}
    }
)

let homeContentList = [];
for (let i = 0; i < list.length; i++) {

        homeContentList.push(
            <Content
                id={list[i].title}
                img={list[i].img}
                link={"search/"+list[i].src}
                title={list[i].title}
                release={list[i].release}
            />
        )
    }

return (
    <div className='ContentsList'>
        <Link to="/search" className='list_upside'>
            <span className='list_title'>{props.keyword}</span>
            <span className='list_more'>더보기</span>
        </Link>

        <ul className='contents_box'>
            {homeContentList}
        </ul>
    </div>
)
}