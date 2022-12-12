import Category from './Category'
import React, { useEffect,useState } from 'react'

export default function Aside(props) {
    
    let contents_all = props.contents_all;


    function getType(value){
        return contents_all.filter(content=>{ return content.type.includes(value)})
    }

    let allType = [];
    contents_all.map(content=>{ return content.type.map(x=>allType.push(x))})
    const uniqueType = [...new Set(allType)];

    let typeArr = [];
    for (let i = 0; i < uniqueType.length; i++) {
        typeArr.push({name:uniqueType[i], total:getType(uniqueType[i]).length})
    }



    function getCountry(value){
        return contents_all.filter(content=>{ return content.country.includes(value)})
    }

    let allCountry = [];
    contents_all.map(content=>{ return content.country.map(x=>allCountry.push(x))})
    const uniqueCountry = [...new Set(allCountry)];

    let countryArr = [];
    for (let i = 0; i < uniqueCountry.length; i++) {
        countryArr.push({name:uniqueCountry[i], total:getCountry(uniqueCountry[i]).length})
    }



    function getAdaptation(value){
        return contents_all.filter(content=>{ return content.adaptation.includes(value)})
    }

    let allAdaptation = [];
    contents_all.map(content=>{ return allAdaptation.push(content.adaptation)})
    const uniqueAdaptation = [...new Set(allAdaptation)];


    let adaptationArr = [];
    for (let i = 0; i < uniqueAdaptation.length; i++) {
        adaptationArr.push({name:uniqueAdaptation[i], total:getAdaptation(uniqueAdaptation[i]).length})
    }


    let allKeyword = [];
    contents_all.map(content=>{ return content.keyword.map(x=>allKeyword.push(x))})
    const uniqueKeyword = [...new Set(allKeyword)];

    
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeListener = () => {
        setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", resizeListener);
    });

return (
    <aside>
        <Category
            innerWidth={innerWidth}
            title={"구분"}
            logo={`${process.env.PUBLIC_URL}/server/img/film-solid.svg`}
            type={"list"}
            data={typeArr}
        />

        <Category
            innerWidth={innerWidth}
            title={"지역"}
            logo={`${process.env.PUBLIC_URL}/server/img/globe-solid.svg`}
            type={"list"}
            data={countryArr}
        />

        <Category
            innerWidth={innerWidth}
            title={"각색"}
            logo={`${process.env.PUBLIC_URL}/server/img/pen-nib-solid.svg`}
            type={"list"}
            data={adaptationArr}
        />
        
        <Category
            innerWidth={innerWidth}
            title={"키워드"}
            logo={`${process.env.PUBLIC_URL}/server/img/tag-solid.svg`}
            type={"tags"}
            data={uniqueKeyword}
        />
    </aside>
)
}
