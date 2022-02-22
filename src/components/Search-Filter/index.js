import React,{useState} from 'react';

function SearchFilter(){
    const list = [
        "Banana",
        "Apple",
        "Watermelon",
        "Orange",
        "Pineapple",
        "Mango"
    ];

    const [filterList,setFilterList] =useState(list);

    const handleSearch = (e) =>{
        if(e.target.value === ''){
            setFilterList(list);
            return;
        }

        const filteredValues = list.filter(
            (item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        )

        setFilterList(filteredValues);
    };
    return (
        <div className = "App">
            <div className='SearchFilter'>
                Search: <input name='query' type='text' onChange={handleSearch}/>
            </div>
            {filterList && filterList.map((item)=>(
                <div>
                    {item}
                </div>
            ))}
        </div>
    )
}

export default SearchFilter;