import React, { useEffect,useState } from 'react'
export default function Category(props) {

    useEffect(() => {
        setCheckedInputs([])
        if (props.innerWidth<800){setCategoryHide(true)}
        else {setCategoryHide(false)}
    },[props.innerWidth]);

    const [categoryHide,setCategoryHide] = useState(false);
    const [checkedInputs, setCheckedInputs] = useState([]);

    function changeHandler(checked, id){
        if (checked) { setCheckedInputs( [...checkedInputs, id] ) } 
        else { setCheckedInputs( checkedInputs.filter((el) => el !== id) ) }
    };

    function categotyList (props) {

        if (props.type === "list"){
            let categotyList = [];
            for (let i = 0; i < props.data.length; i++) {
    
                categotyList.push(
    
                    <label
                        className='category_item'
                        key={i}
                        htmlFor={props.data[i].name}
                    >
    
                        <input
                            type="checkbox"
                            onChange={(e)=> changeHandler(e.currentTarget.checked, props.data[i].name) }
                            checked={checkedInputs.includes(props.data[i].name) ? true : false}
                            id={props.data[i].name}
                        />
    
                        {props.data[i].name}
    
                        <span> {props.data[i].total} </span>
    
                    </label>
                )
            }
            return categotyList
        }

        else if (props.type === "tags"){
            let categotyList = [];
            for (let i = 0; i < props.data.length; i++) {
    
                categotyList.push(
                        <label
                            className='category_item'
                            key={i}
                            htmlFor={props.data[i]}
                        >
        
                            <input
                                type="radio"
                                onChange={(e)=> changeHandler(e.currentTarget.checked, props.data[i]) }
                                checked={checkedInputs.includes(props.data[i]) ? true : false}
                                id={props.data[i]}
                            />
        
                            {props.data[i]}
        
                        </label>
                )
            }
            return <div className='tags_wrap'>{categotyList}</div>
        }
    }


return (
    <div className='category'>
        <div className='category_title'>
            <span className='category_logo'>
                <img src={props.logo} alt={props.title} />
                <span>{props.title}</span>
            </span>

            <button onClick={()=>setCategoryHide((prev) => !prev)}
            >{categoryHide?'+':'-'}</button>
        </div>

        <div className={categoryHide?'category_items_hide':null}>
            {categotyList (props)}
        </div>
    </div>
)
}
