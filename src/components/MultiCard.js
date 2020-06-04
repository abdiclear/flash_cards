import React from 'react';

function MultiCard(props) {

    const question = props.questionData;
    const choices = ['a','b','c','d'];
    const options = question.options.map((option, i)=>{
        return(<li key={i}>{choices[i]}. {option}</li>)
    })

    const answerIndex = question.options.indexOf(question.answer);
    const answerLetter = choices[answerIndex];

    return (
        <div>
            <div className="card-back border border-info">
                <div>{question.service}</div>
                <ul className="multi">
                    {options}
                </ul>
            </div>
            <div className="card-front border border-success">
               {answerLetter}. {question.answer}
            </div>
        </div>
    )


}

export default MultiCard;