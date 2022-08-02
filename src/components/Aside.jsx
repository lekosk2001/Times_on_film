import React from 'react'
import Category from './Category'

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



return (
    <aside>
        <Category
            title={"구분"}
            logo={<img src='' alt='구분'/>}
            type={"list"}
            data={typeArr}
        />

        <Category
            title={"지역"}
            logo={<img src='' alt='지역'/>}
            type={"list"}
            data={countryArr}
        />

        <Category
            title={"각색"}
            logo={<img src='' alt='각색'/>}
            type={"list"}
            data={adaptationArr}
        />
        
        <Category
            title={"키워드"}
            logo={<img src='' alt='키워드'/>}
            type={"tags"}
            data={uniqueKeyword}
        />
    </aside>
)
}
