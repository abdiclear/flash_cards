import React from 'react';

function RegularCard(props) {

    const question = props.questionData;

    return (
        <div>
            <div className="card-back border border-info">
                {question.service}
            </div>
            <div className="card-front border border-success">
                <div>{question.desc}</div>
                <div>{question.cat}</div>
            </div>
        </div>
    )


}

export default RegularCard;