import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

/**
 * Implements question edit/create page
 */
export default class QuestionEdit extends Component{
    constructor(props) {
        super(props);

        let question = this.props.question;
        console.log(question);
        this.state = {
            question : question
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleAnswerChange = this.handleAnswerChange.bind(this);
    }

    handleTextChange(event) {
        let question = this.state.question;
        question.text = event.target.value;
        this.setState({
            question : question
        });
    }

    handleSetCorrect(event) {
        let question = this.state.question;
        let index = event.target.value;
        question.answers[index].correct = !question.answers[index].correct;
        this.setState({
            question : question
        });
    }

    handleAnswerChange(event) {
        let question = this.state.question;
        let index = event.target.getAttribute("id");
        question.answers[index].text = event.target.value;
        this.setState({
            question : question
        });
    }

    handleQuestionDelete(id) {
        alert('delete ' + this.state.question.id);
    }

    render() {
        let answers = this.state.question.answers.map((a) => {
            return (
                <li key = {a.id} className = "list-group-item">
                    <input
                        type = 'text'
                        id = {a.index}
                        value = {a.text}
                        onChange = {this.handleAnswerChange}
                        required
                        className = 'form-control'
                    />
                    <label className="checkbox-inline">
                        <input
                            type="checkbox"
                            value={a.index}
                            defaultChecked = {a.correct}
                            onChange={this.handleSetCorrect.bind(this)}
                        />
                            Correct
                    </label>
                </li>
            );

        });

        //console.log(answers);

        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <label>Text</label><br/>
                    <input
                        type='text'
                        value={this.state.question.text}
                        onChange={this.handleTextChange}
                        required
                        className='form-control'
                    />
                    <label>Answers</label><br/>
                    <ul className="list-group">
                        {answers}
                    </ul>
                </div>
            </div>
        );
    }
}

QuestionEdit.propTypes = {
    question : PropTypes.object
}

QuestionEdit.defaultProps = {
    question : null
}