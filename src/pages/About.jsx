import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="about_info">
            
            <div className="about_wrap">
                    <p>역사별 컨텐츠 검색엔진</p>
                    <h1>TIMES ON FILM</h1>
                    <div className="about_visual">
                        <img src={`${process.env.PUBLIC_URL}/server/img/landing-ge33e12695_1280.jpg`} alt="" />
                    </div>

                <section>
                    <h2>타임즈 온 필름을 소개합니다.</h2>
                    <p>인류의 역사가 시작된 이래로, 고대부터 현대까지 사람들의 소소한 생활상부터 인류의 운명을 뒤바꾼 거대한 전쟁을 넘어 다양한 역사적 배경을 비추는 영상물을 한데 모았습니다.</p>
                </section>

                <section>
                    <h2>이 서비스는?</h2>
                    <p>본 서비스는 영화 및 드라마 컨텐츠를 역사적 시대 흐름의 관점을 기준으로 정리하여, 인류사에 대한 큰 흐름과 다양한 문화에 대한 이해를 돕고자 제작되었습니다. 역사를 조망하는 가장 흥미로운 매체인 미디어 컨텐츠를 통하여, 많은 사람들이 다른 문화와 역사속 사람들의 이야기를 쉽고 재미있게 관심을 가질 수 있도록 이해의 폭을 넓히는 장이 되었으면 합니다.</p>
                </section>

                <section>
                    <h2>작품 등재와 시대 구분에 대하여</h2>
                    <p>일반적으로 시대를 구분하는 기준은 객관적이지 못하며, 본 서비스도 한국에서 가장 대중적인 (할리우드를 포함한) 서구문화를 중심으로 시대를 구분하였습니다. 또한 컨텐츠의 등재기준은 실제 사건의 역사적인 고증을 1순위 요소로 고려하지 않았고, 역사 컨텐츠로 하여금 많은 관심을 받은 작품들을 위주로 등재하였습니다. 
                    <br/>
                    <br/>
                    때문에 역사적 시대배경을 차용하여 만들어진 판타지 작품이 포함되어 있는 등, 실제 역사만을 한정하여 다루는것 이상으로 다양한 작품이 포함되어 있음을 알립니다.
                    </p>
                </section>

                <Link to="../Times_on_film/search">
                    <button>
                        <h2>컨텐츠 검색</h2>
                    </button>
                </Link>
            </div>

            <div className="contact">
                <section>
                    <h2>CONTACT US</h2>
                    <p>lekosk2001@naver.com │ 010-4734-1086</p>

                    <p>컨텐츠 오류 정정 및 피드백은 메일로 회신 바랍니다.</p>
                </section>
            </div>
            
        </div>
    );
}