/**
 * Created by serg on 10-Jan-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Default question view
 */
export default class DefaultQuestionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question : {},
        };
    }

    componentWillMount() {
        this.setState({
           question : this.props.question
        });
    }

    render() {
        let answerComponents;
        if(this.state.question.answers){
            answerComponents = this.state.question.answers.map(a => {
                return (
                    <li key={a.index}>
                        {a.text} <strong>{a.correct ? ' correct': ''}</strong>
                    </li>
                );
            });
        }

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">{this.state.question.text}</div>
                <div className="panel-body">{answerComponents}</div>
            </div>
        )
    }
}

DefaultQuestionView.propTypes = {question : PropTypes.object};
DefaultQuestionView.defaultProps = {quiz: null};