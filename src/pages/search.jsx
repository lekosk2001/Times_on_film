import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";


import Aside from '../components/Aside'
import SeachList from '../components/SeachList'
import Detail from '../components/Detail';

export default function Search(props) {


    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });


    let all_details = [];
    for (let i = 0; i < props.contents_all.length; i++) {
        all_details.push(
            <Route 
                path={props.contents_all[i].src}
                element={
                    <Detail
                        content={props.contents_all[i]}
                    />
                }
            />
        )
    }
    
    console.log(props.contents_all.filter(content=>{ return content.category==="고대·고전"} ))

    return (  
    <div className="search_wrap">
        <Aside
            contents_all = {props.contents_all}
        />

        <Routes>
            <Route path="/" element={ <SeachList mode="전체" contents_all={props.contents_all} /> } />
            <Route path="1" element={ <SeachList mode="고대·고전" contents_all={props.contents_all.filter(content=>{ return content.category==="고대·고전"} )} /> } />
            <Route path="2" element={ <SeachList mode="중세 초기" contents_all={props.contents_all.filter(content=>{ return content.category==="중세 초기"} )} /> } />
            <Route path="3" element={ <SeachList mode="중세 성기" contents_all={props.contents_all.filter(content=>{ return content.category==="중세 성기"} )} /> } />
            <Route path="4" element={ <SeachList mode="중세 말기" contents_all={props.contents_all.filter(content=>{ return content.category==="중세 말기"} )} /> } />
            <Route path="5" element={ <SeachList mode="근세" contents_all={props.contents_all.filter(content=>{ return content.category==="근세"} )} /> } />
            <Route path="6" element={ <SeachList mode="근대" contents_all={props.contents_all.filter(content=>{ return content.category==="근대"} )} /> } />
            <Route path="7" element={ <SeachList mode="세계대전" contents_all={props.contents_all.filter(content=>{ return content.category==="세계대전"} )} /> } />
            <Route path="8" element={ <SeachList mode="냉전" contents_all={props.contents_all.filter(content=>{ return content.category==="냉전"} )} /> } />
            <Route path="9" element={ <SeachList mode="현대" contents_all={props.contents_all.filter(content=>{ return content.category==="현대"} )} /> } />
            {all_details}
        </Routes>


    </div>
);
}
