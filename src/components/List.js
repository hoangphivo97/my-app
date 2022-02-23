import React,{useState} from 'react';
import JSONDATA from '../MOCK_DATA_List.json';

const List = () => {
  const [list,setList] = useState(JSONDATA);

  return (
    <div className='App'>
        <div className='ShowList'>
            <h2>List</h2>
            <p>
              {list.map((val)=>(
                <div key={val.id}>
                  <p>{val.email}|{val.first_name}|{val.last_name}|{val.gender}</p>
                </div>
              ))}
            </p>
            
        </div>
    </div>
  )
}

export default List