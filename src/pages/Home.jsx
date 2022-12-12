import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import Article from '../components/Article'

export default function Home(props) {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });})

return (
<div className='home'>

    <section className='home_section1'>
        <Article
            label="소개 및 이용안내"
            title= "타임즈 온 필름이란?"
            sub="역사 컨텐츠 등재기준 및 서비스 취지를 확인해보세요."
            image="landing-ge33e12695_1280.jpg"
            link="./about"
        />

        <Article

            label="컨텐츠 찾기"
            title= "시대별로 정리된 영화와 드라마"
            sub="고대부터 현대까지 역사를 담은 컨텐츠들을 정리했습니다."
            image="horse-gb00f95245_1280.jpg"
            link="./search"
        />

        <Article

            label="내가 찜한 컨텐츠"
            title= "컨텐츠를 찜하고, 평가를 공유"
            sub="컨텐츠를 보관함에 담거나, 컨텐츠를 평가할 수 있습니다."
            image="man-g6515b16d6_1280.jpg"
            link="./bookmark"
        />
    </section>



    <section className='home_section2'>
    <div className="film_container">
        <div>
            <Link to="/search"><h4 className="film_text">고대·고전
                <p className='film_mini' >기원전 40세기 - 4세기</p>
            </h4></Link>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2007_300.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>

        <div>
            <div className="film_text"/>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2018_thegreatbattle.jpg" alt="" /></div></Link></div>
            <Link to="/search"><h4 className="film_text">중세 초기
                <p className='film_mini' >5세기 - 10세기</p>
            </h4></Link>
        </div>

        <div>
            <Link to="/search"><h4 className="film_text">중세 성기
                <p className='film_mini' >11세기 - 13세기</p>
            </h4></Link>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2005_kingdomofheaven.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>

        <div>
            <div className="film_text"/>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2019_theking.jpg" alt="" /></div></Link></div>
            <Link to="/search"><h4 className="film_text">중세 말기
                <p className='film_mini' >14세기 - 15세기</p>
            </h4></Link>
        </div>

        <div>
            <Link to="/search"><h4 className="film_text">근세
                <p className='film_mini' >16세기 - 18세기 중반</p>
            </h4></Link>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2014_roaringcurrents.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>

        <div>
            <div className="film_text"/>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2018_mr.sunshine.jpg" alt="" /></div></Link></div>
            <Link to="/search"><h4 className="film_text">근대
                <p className='film_mini' >18세기 중반 - 20세기 초반</p>
            </h4></Link>
        </div>

        <div>
            <Link to="/search"><h4 className="film_text">세계대전
                <p className='film_mini' >20세기 초반 - 중반</p>
            </h4></Link>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2014_fury.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>

        <div>
            <div className="film_text"/>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2018_firstman.jpg" alt="" /></div></Link></div>
            <Link to="/search"><h4 className="film_text">냉전
                <p className='film_mini' >20세기 중반 - 후반</p>
            </h4></Link>
        </div>

        <div>
            <Link to="/search"><h4 className="film_text">현대
                <p className='film_mini' >20세기 후반 - 현재</p>
            </h4></Link>
            <div className="film"><Link to="./search"><div className='film_box'><img src="./server/img/2017_1987.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>
        
        </div>
    </section>

    </div>
)
}