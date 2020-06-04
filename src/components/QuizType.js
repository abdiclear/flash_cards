import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faWeightHanging, faFolderOpen, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faLayerGroup);
library.add(faWeightHanging);
library.add(faFolderOpen);
library.add(faHatWizard);


function QuizType(props) {
    return (
        <li className="col-sm-3 text-center">
            <div className={props.quizType === props.currentStyle ? "nav-card highlight" : "nav-card"} 
            onClick={()=>{props.userChoice(props.quizType)}}>
                <FontAwesomeIcon icon={props.icon} size="4x" />
                <span>{props.quizType}</span>
            </div>
        </li>
    )

}

export default QuizType;