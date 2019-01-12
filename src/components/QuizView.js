import React, {Component} from 'react';
import PropTypes from 'prop-types';
import QuestionFactory from '../utils/QuestionFactory';

/**
 * Implements the view component of a quiz
 */
export default class QuizView extends Component {
    constructor(props){
        super(props);
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
            //question components are provided by QuestionFactory based on question type
            questionComponents = this.state.quiz.questions.map((q) => QuestionFactory.getQuestionComponent(q));
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">{this.state.quiz.title}</div>
                <div className="panel-body">{questionComponents}</div>
            </div>
        );
    }
}

QuizView.propTypes = {quiz : PropTypes.object};
QuizView.defaultProps = {quiz: null};

