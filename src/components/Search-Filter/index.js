import React,{useState} from 'react';
import JSONDATA from '../../MOCK_DATA.json';

function SearchFilter(){

    const [filterList,setFilterList] =useState('');

    const handleSearch = (e) =>{
        setFilterList(e.target.value);

    };
    const filteredValue = JSONDATA.filter((val)=>{
        if(filterList === ""){
            return val
        }else if(val.animal_name.toLowerCase().includes(filterList.toLowerCase())){
            return val
        }
    })
    return (
        <div className = "App">
            <div className='SearchFilter'>
                <input name='query' type='text' placeholder='Search...' onChange={handleSearch}/>
                <p>
                    {
                    filteredValue.map((val,key)=>(
                        <div key={key}>
                            {val.animal_name}
                        </div>
                    ))}
                </p>
                
            </div>
            
        </div>
    )
}

export default SearchFilter;