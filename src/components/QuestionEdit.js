/**
 * Created by serg on 11-Jan-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export default class QuestionEdit extends Component{

    constructor(props) {
        super(props);

        let question = this.getQuestionForEdit();
        console.log(question);
        this.state = {
            question : question
        }

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

    handleAnswerChange(event) {
        let question = this.state.question;
        let index = event.target.getAttribute("id");
        //console.log(index);
        question.answers[index].text = event.target.value;

        this.setState({
            question : question
        });
    }

    getQuestionForEdit() {
        let question;

        if(this.props.question === null){
            question = {
                id : 'QN_' + uuid.v4(),
                type : 'MULT',
                text : '',
                answers : [
                    {
                        index : '0',
                        correct : undefined,
                        text : ''
                    },
                    {
                        index : '1',
                        correct : undefined,
                        text : ''
                    },
                    {
                        index : '2',
                        correct : undefined,
                        text : ''
                    },
                    {
                        index : '3',
                        correct : undefined,
                        text : ''
                    },
                ]
            };
        } else {
            question = this.props.question;
        }

        return question;
    }

    render() {
        let answers = this.state.question.answers.map((a) => {
            return (
                <li className = "list-group-item" key={a.id}>
                    <input
                        type='text'
                        id={a.index}
                        value={a.text}
                        onChange={this.handleAnswerChange}
                        required
                        className='form-control'
                    />
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