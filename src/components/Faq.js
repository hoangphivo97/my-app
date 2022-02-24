import React, {useState} from 'react';
import Data from '../FAQ_DATA';
import SingleQuestion from './Question/Question';

const Faq = () => {
    const [questions,setQuestions] = useState(Data);

    return (
        <div className='container'>
            <h2>FAQ</h2>
                <section className='info'>
                    {
                        questions.map((question)=>{
                            return <SingleQuestion key={question.id} {...question}/>

                        })
                    }
                </section>
        </div>
    )
}

export default Faq