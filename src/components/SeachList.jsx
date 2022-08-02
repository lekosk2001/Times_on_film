import React, { useEffect,useState } from 'react'
import SearchContentList from './SearchContentList'
export default function SeachList(props) {




    const [x,setX] = useState("")

    let lists = document.querySelectorAll(".seachList_wrap section > ul > li");

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
        setX("전체")

        // function hide() {
        //     document.querySelectorAll(".contents_box").map(x=>{
        //             if(document.querySelectorAll( x +" > li").length===0){
        //                 document.querySelectorAll(x).classList.add("hidden")
        //         }}
        //     )
        // }
    },[]);

    console.log(document.querySelectorAll(".contents_box").length)

    const totalContentsNumber =
        props.contents_all.length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    
    function handleClickRadio(e){
        setX(e.target.value)
        console.log(e.target.value)

        lists.forEach((list)=>{
			list.classList.add("hidden");
            if (e.target.value === "전체"){list.classList.remove("hidden")}
            else if(list.classList.contains(e.target.value)){list.classList.remove("hidden")}
		})
		}

    
    
    return (

        <div className='seachList_wrap'>
        <section className='search_Option'>
                
                <div className='list_viewOption'>
                    <input type="button" value="개봉일순"/>
                    <input type="button"/>
                    <input type="button" className="active"/>
                </div>

                <div className='contents_total'>
                    총{" "}
                    <span className='font_max font_bold color_blue'> {totalContentsNumber} </span>
                    {" "}개의 작품을 정리하였습니다.
                </div>

                <div className='tabs_wrap'>
                    <input
                        id="tab1"
                        type="radio"
                        name="tab"
                        value="전체"
                        checked={x === "전체"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab1">전체</label>

                    <input
                        id="tab2"
                        type="radio"
                        name="tab"
                        value="고대·고전"
                        checked={x === "고대·고전"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab2">고대·고전</label>

                    <input
                        id="tab3"
                        type="radio"
                        name="tab"
                        value="중세초기"
                        checked={x === "중세초기"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab3">중세 초기</label>

                    <input
                        id="tab4"
                        type="radio"
                        name="tab"
                        value="중세성기"
                        checked={x === "중세성기"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab4">중세 성기</label>

                    <input
                        id="tab5"
                        type="radio"
                        name="tab"
                        value="중세말기"
                        checked={x === "중세말기"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab5">중세 말기</label>

                    <input
                        id="tab6"
                        type="radio"
                        name="tab"
                        value="근세"
                        checked={x === "근세"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab6">근세</label>

                    <input
                        id="tab7"
                        type="radio"
                        name="tab"
                        value="근대"
                        checked={x === "근대"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab7">근대</label>

                    <input
                        id="tab8"
                        type="radio"
                        name="tab"
                        value="세계대전"
                        checked={x === "세계대전"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab8">세계대전</label>

                    <input
                        id="tab9"
                        type="radio"
                        name="tab"
                        value="냉전"
                        checked={x === "냉전"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab9">냉전</label>

                    <input
                        id="tab10"
                        type="radio"
                        name="tab"
                        value="현대"
                        checked={x === "현대"}
                        onChange={handleClickRadio}
                    >
                    </input>
                    <label htmlFor="tab10">현대</label>

                </div>
        </section>

        <section>
            <ul>
                <SearchContentList contents_all = {props.contents_all} title = "고대·고전" age="기원전 40세기 - 4세기" id="tab2" src="1"/>
                <SearchContentList contents_all = {props.contents_all} title = "중세 초기" age="5세기 - 10세기" id="tab3" src="2"/>
                <SearchContentList contents_all = {props.contents_all} title = "중세 성기" age="11세기 - 13세기" id="tab4" src="3"/>
                <SearchContentList contents_all = {props.contents_all} title = "중세 말기" age="14세기 - 15세기" id="tab5" src="4"/>
                <SearchContentList contents_all = {props.contents_all} title = "근세" age="16세기 - 18세기 중반" id="tab6" src="5"/>
                <SearchContentList contents_all = {props.contents_all} title = "근대" age="18세기 중반 - 20세기 초반" id="tab7" src="6"/>
                <SearchContentList contents_all = {props.contents_all} title = "세계대전" age="20세기 초반 - 20세기 중반" id="tab8" src="7"/>
                <SearchContentList contents_all = {props.contents_all} title = "냉전" age="20세기 중반 - 후반" id="tab9" src="8"/>
                <SearchContentList contents_all = {props.contents_all} title = "현대" age="20세기 후반 - 현재" id="tab10" src="9"/>
            </ul>
        </section>
    </div>


    )
}
