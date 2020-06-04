import React from 'react';
import QuizType from './QuizType';


function QuizBar(props){

    const quizArray = [
        {icon:"hat-wizard", quizType:"Random"},
        {icon:"folder-open", quizType:"Regular"},
        {icon:"weight-hanging", quizType:"Weighted"},
        {icon:"layer-group", quizType:"Multi"}
    ]

    const quizTypes = quizArray.map((qt, i)=>{
        return(
            <QuizType key={i} icon={qt.icon} quizType={qt.quizType} userChoice={props.userChoice} currentStyle={props.currentStyle}/>
        )
    })

    return(
        <div className="quiz-bar">
            <h1 className="display-1 underline"><u>Choose study mode</u></h1> 
            <ul className="nav nav-pills nav-fill">
               {quizTypes}
            </ul>
        </div>
    )

}

export default QuizBar;

