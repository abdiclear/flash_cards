import React from 'react';

function RandomWeighted(props) {

    const question = props.questionData;

    return (
        <div>
            <div className="card-back border border-info">
                <div>{question.service}</div>
                <div className="commonality">{question.common}</div>
            </div>
            <div className="card-front border border-success">
                <div>{question.cat}</div>
            </div>
        </div>

    )


}

export default RandomWeighted;