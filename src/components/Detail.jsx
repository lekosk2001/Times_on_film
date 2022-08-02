import React, { useEffect } from 'react'
import { Link } from "react-router-dom";



export default function Detail(props) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });})

console.log(props.content.title);
function text_space(list){

    if (typeof list === 'string' ){
        return list
    }

    let spaced_text = [];
    for (let i = 0; i < list.length; i++) {
        spaced_text.push(
            <span key={i}>{list[i]}</span>
        )
}


return spaced_text
}


let keywords = [];
for (let j = 0; j < props.content.keyword.length; j++) {
    keywords.push(
        <span className='info_keyword' key={j}>{props.content.keyword[j]}</span>
    )
}

return (
    <section className='detail_wrap'>
        <div className='up_info'>
            <span>
                <Link to="/search">
                    <span className='backarrow'>{"<"}</span>
                    <span className='up_title'>{props.content.category}</span>
                    <span className='up_age'>{props.content.age}</span>
                </Link>
            </span>
            <span className='share_btn_box'>
                <div className='share_logo'></div>
                <div className='share_logo_label'>Share</div>
            </span>
        </div>

        <div className='detail_main'>
            <span className='left_info_wrap'>

                <div className='detail_poster'>
                    <img src={"/server/img/"+props.content.img} alt={props.content.englishTitle}></img>
                </div>

                <div className='detail_title_box'>
                    <div className='detail_title_mini'>{props.content.release+" │ "+props.content.country}</div>
                    <div className='detail_title'>{text_space(props.content.title)}</div> 
                </div>

                <div className='left_info_box'>
                    <div className='left_info_item'>
                        <span className='info_title'>구분</span>
                        <span className='info_text'>{text_space(props.content.type)}</span>
                    </div>

                    <div className='left_info_item'>
                        <span className='info_title'>장르</span>
                        <span className='info_text'>{text_space(props.content.genre)}</span>
                    </div>

                    <div className='left_info_item'>
                        <span className='info_title'>재생시간</span>
                        <span className='info_text'>{text_space(props.content.playTime)}</span>
                    </div>

                    <div className='left_info_item'>
                        <span className='info_title'>제작자</span>
                        <span className='info_text'>{text_space(props.content.creater)}</span>
                    </div>

                </div>

            </span>

            <span className='right_info_wrap'>
                <div className='video'>
                    <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+props.content.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className='right_info_item'>
                    <div className='info_title'>시놉시스</div>
                    <div className='info_text'>{props.content.synopsis}</div>
                </div>

                <div className='right_info_item'>
                    <div className='info_title'>출연진</div>
                    <span className='info_text'>{text_space(props.content.cast)}</span>
                </div>

                <div className='right_info_item'>
                    <div className='info_title'>배경</div>
                    <span className='info_text'>{props.content.category}</span>
                    <span className='info_text color_40per'>{" │ "}</span>
                    <span className='info_text'>{text_space(props.content.background)}</span>
                </div>
                
                <div className='right_info_item'>
                    <div className='info_title'>각색정도</div>
                    <div className='info_text'>{text_space(props.content.adaptation)}</div>
                </div>

                <div className='right_info_item '>
                    <div className='info_title'>키워드</div>
                    <div className='info_keyword_box'>
                        {keywords}
                    </div>
                </div>

            </span>
        </div>
    </section>
)
}
