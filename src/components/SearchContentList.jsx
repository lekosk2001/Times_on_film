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
    let unictags=[];
    for (let j = 0; j < list.length; j++) {
        list[j].props.keyword.forEach(word => {
            if(!tags.includes(word)){
                tags.push(word);
                unictags.push(<li key={word+j}><p>{"# "+word}</p></li>);
            }
        });
    }

return (
<li className={'list '+props.title.replace(/ /g,"")}>
    <div className='list_info'>

        <div className='list_upside' onClick={()=>{document.getElementById(props.id).click()}}>
            <span>
                    <h2 className='list_title'> {props.title} </h2>
                    <h4 className='list_age'> {props.age} </h4>
            </span>
            
            <span className='font_mini color_40per'>전체보기</span>
            
        </div>

    <div className='list_tags'>
        <ul>
            {unictags}
        </ul>
    </div>

    </div>
    <ul className='contents_box'>
    {list}
    </ul>

</li>
)
}
