import React, { useEffect } from 'react'
import Content from '../components/Content'

export default function Bookmark(props) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });

    let list = [];
    props.bookmarked_contents.map(
        (content,index) => {
            // console.log(index+content.src)
            list.push(
                <Content
                    key={index+content.src}
                    img={content.img}
                    type={content.type}
                    link={"/search/"+content.src}
                    title={content.title}
                    release={content.release}
                    keyword={content.keyword}
                />)
        }
    )

    const totalContentsNumber =
    props.bookmarked_contents.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


    return (
        <div className="bookmark_wrap">

            <div className='contents_total'>
                <h4>총{" "}</h4>
                <h2> {totalContentsNumber} </h2>
                <h4>{" "}개의 작품이 북마크되었습니다.</h4>
            </div>

            <ul className='contents_box'>
                {list}
            </ul>
        </div>
    );
}