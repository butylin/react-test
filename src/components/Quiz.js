/**
 * Created by serg on 10-Jan-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../utils/QuestionFactory';

export default class Quiz extends Component {
    constructor(){
        super();
        this.state = {
            quiz : {}
        }
    }

    componentWillMount() {
        this.setState({
           quiz : this.props.quiz
        });

    }

    render() {
        console.log(this.state.quiz);
        let questionComponents;
        if(this.state.quiz){
            questionComponents = this.state.quiz.questions.map(q => QuestionFactory.getQuestionComponent(q));
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.state.quiz.title}</div>
                <div className="panel-body">{questionComponents}</div>
            </div>
        );
    }
}

Quiz.propTypes = {quiz : PropTypes.object};
Quiz.defaultProps = {quiz: null};

