import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import Article from '../components/Article'
import ConetentsList from '../components/ConetentsList'

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
            label="인류의 역사를 비추는 컨텐츠"
            title= "시대별로 정리된 영화와 드라마"
            sub="고대시대부터 현대까지 역사를 담은 컨텐츠들을 정리했습니다."
            image=""
            link="/search"
        />

        <Article

            label="역사적 사건 별로 검색"
            title= "인류사에 큰 획을 남긴 사건들"
            sub="인류의 흥망성쇠를 결정한 역사적 사건들을 확인하세요."
            image=""
            link="/search"
        />

        <Article

            label="보고싶은 영화, 드라마를 즐겨찾기"
            title= "컨텐츠를 찜하고, 평가를 공유"
            sub="컨텐츠를 보관함에 담거나, 컨텐츠를 평가할 수 있습니다."
            image=""
            link="/bookmark"
        />
    </section>



    <section className='home_section2'>
    <div className="film_container">
        <div>
            <Link to="/search/1"><div className="film_text">고대·고전
                <div className='film_mini' >기원전 40세기 - 4세기</div>
            </div></Link>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2007_300.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>

        <div>
            <div className="film_text"/>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2018_thegreatbattle.jpg" alt="" /></div></Link></div>
            <Link to="/search/2"><div className="film_text">중세 초기
                <div className='film_mini' >5세기 - 10세기</div>
            </div></Link>
        </div>

        <div>
            <Link to="/search/3"><div className="film_text">중세 성기
                <div className='film_mini' >11세기 - 13세기</div>
            </div></Link>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2005_kingdomofheaven.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>

        <div>
            <div className="film_text"/>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2019_theking.jpg" alt="" /></div></Link></div>
            <Link to="/search/4"><div className="film_text">중세 말기
                <div className='film_mini' >14세기 - 15세기</div>
            </div></Link>
        </div>

        <div>
            <Link to="/search/5"><div className="film_text">근세
                <div className='film_mini' >16세기 - 18세기 중반</div>
            </div></Link>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2014_roaringcurrents.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>

        <div>
            <div className="film_text"/>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2018_mr.sunshine.jpg" alt="" /></div></Link></div>
            <Link to="/search/6"><div className="film_text">근대
                <div className='film_mini' >18세기 중반 - 20세기 초반</div>
            </div></Link>
        </div>

        <div>
            <Link to="/search/7"><div className="film_text">세계대전
                <div className='film_mini' >20세기 초반 - 중반</div>
            </div></Link>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2014_fury.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>

        <div>
            <div className="film_text"/>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2018_firstman.jpg" alt="" /></div></Link></div>
            <Link to="/search/8"><div className="film_text">냉전
                <div className='film_mini' >20세기 중반 - 후반</div>
            </div></Link>
        </div>

        <div>
            <Link to="/search/9"><div className="film_text">현대
                <div className='film_mini' >20세기 후반 - 현재</div>
            </div></Link>
            <div className="film"><Link to="/search"><div className='film_box'><img src="server/img/2017_1987.jpg" alt="" /></div></Link></div>
            <div className="film_text"/>
        </div>
        
        </div>
    </section>

    {/* <section className='home_section3'>
        <ConetentsList contents_all={props.contents_all} keyword="십자군전쟁"/>
        <ConetentsList contents_all={props.contents_all} keyword="안시성 전투"/>
        <ConetentsList contents_all={props.contents_all} keyword="고증이 좋은"/>
    </section> */}

    </div>
)
}