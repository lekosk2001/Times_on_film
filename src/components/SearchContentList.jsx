import Content from './Content'
import React, { useEffect } from 'react'
export default function SearchContentList(props) {


    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    },[]);
    


    let list = [];
    props.contents_all.map(
        content => { 
            if(content.category.includes(props.title))
            {list.push(
                <Content
                    id={content.title}
                    img={content.img}
                    link={content.src}
                    title={content.title}
                    release={content.release}
                    keyword={content.keyword}
                />)}
        }
    )


    let tags = [];
    for (let j = 0; j < list.length; j++) {
        list[j].props.keyword.forEach(word => {
            tags.push(<span key={word+j}>{"# "+word}</span>)
        });
    }




return (
<li className={'list '+props.title.replace(/ /g,"")}>
    <div className='list_info'>

        <div className='list_upside' onClick={()=>{document.getElementById(props.id).click()}}>
            <span>
                    <span className='list_title'> {props.title} </span>
                    <span className='list_age'> {props.age} </span>
            </span>
            
            <span className='font_mini color_40per'>전체보기</span>
            
        </div>

    <div className='list_tags'>
        {tags}
    </div>

    </div>
    <ul className='contents_box'>
    {list}
    </ul>

</li>
)
}
