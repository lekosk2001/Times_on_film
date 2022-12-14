import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

export default function Detail(props) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });})

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

// 만약 개봉 날짜가 10 미만이면, 0을 붙이기.
let release_date_zero = "";
if (props.content.release[1]<10){
    release_date_zero = "0"
}

return (
    <section className='detail_wrap'>
        <div className='up_info'>
            <span>
                <Link to="..">
                    <span className='backarrow'>{"<"}</span>
                    <span className='up_title'>{props.content.category}</span>
                    <span className='up_age'>{props.content.age}</span>
                </Link>
            </span>

            <span
                className='share_btn_box'
                // OnClick={CopyUrlToClipboard()}
            >
                <div className='share_logo'>
                    <img src={`${process.env.PUBLIC_URL}/server/img/share-nodes-solid.svg`} alt="share" />
                </div>
                <div className='share_logo_label'>Share</div>
            </span>
        </div>

        <div className='detail_main'>
            <span className='left_info_wrap'>

            {/* logo={`${process.env.PUBLIC_URL}/server/img/film-solid.svg`} */}
                <div className='detail_poster'>
                    <img src={`${process.env.PUBLIC_URL}/server/img/${props.content.img}`} alt={props.content.englishTitle}></img>
                </div>

                <div className='detail_title_box'>
                    <p className='detail_title_mini'>{props.content.englishTitle+" │ "+props.content.release[0]+". "+release_date_zero+props.content.release[1]+"."+" │ "+props.content.country}</p>
                    <h2 className='detail_title'>{text_space(props.content.title)}</h2> 
                </div>

                <div className='left_info_box'>
                    <div className='left_info_item'>
                        <h4 className='info_title'>구분</h4>
                        <p className='info_text'>{text_space(props.content.type)}</p>
                    </div>

                    <div className='left_info_item'>
                        <h4 className='info_title'>장르</h4>
                        <p className='info_text'>{text_space(props.content.genre)}</p>
                    </div>

                    <div className='left_info_item'>
                        <h4 className='info_title'>재생시간</h4>
                        <p className='info_text'>{text_space(props.content.playTime)}</p>
                    </div>

                    <div className='left_info_item'>
                        <h4 className='info_title'>제작자</h4>
                        <p className='info_text'>{text_space(props.content.creater)}</p>
                    </div>

                </div>

            </span>

            <span className='right_info_wrap'>
                <div className='video'>
                    <iframe width="100%" height="100%" src={"https://www.youtube.com/embed/"+props.content.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div className='right_info_item'>
                    <h4 className='info_title'>시놉시스</h4>
                    <p className='info_text'>{props.content.synopsis}</p>
                </div>

                <div className='right_info_item'>
                    <h4 className='info_title'>출연진</h4>
                    <p className='info_text'>{text_space(props.content.cast)}</p>
                </div>

                <div className='right_info_item'>
                    <h4 className='info_title'>배경</h4>
                    <p className='info_text'>{props.content.category}</p>
                    <p className='info_text color_40per'>{" │ "}</p>
                    <p className='info_text'>{text_space(props.content.background)}</p>
                </div>
                
                <div className='right_info_item'>
                    <h4 className='info_title'>각색정도</h4>
                    <p className='info_text'>{text_space(props.content.adaptation)}</p>
                </div>

                <div className='right_info_item '>
                    <h4 className='info_title'>키워드</h4>
                    <p className='info_keyword_box'>
                        {keywords}
                    </p>
                </div>

            </span>
        </div>
    </section>
)
}
