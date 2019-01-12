import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import QuestionEdit from '../components/QuestionEdit';

/**
 * Implements quiz edit/create page
 */
export default class QuizEdit extends Component{
    constructor(props) {
        super(props);

        let currentQuiz = this.getQuizForEdit();
        this.state = {
            currentQuiz : currentQuiz,
            newQuestions : [],
            success : null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
    }

    /**
     * Gets existing of creates empty quiz
     */
    getQuizForEdit() {
        let newQuiz = {};

        if(this.props.quiz === null){
            newQuiz = this.getEmptyQuiz();
        }else {
            newQuiz = this.props.quiz;
        }

        return newQuiz;
    }

    getEmptyQuiz() {
        return {
            id : uuid.v4(),
            title : '',
            questions : []
        };
    }

    handleSubmit(event){
        let oldQuestions = this.state.currentQuiz.questions;
        let newQuestions = this.state.newQuestions;
        let currentQuiz = this.state.currentQuiz;

        //merges old and newly created questions in a quiz
        currentQuiz.questions = oldQuestions.concat(newQuestions);
        this.props.saveQuiz(currentQuiz);
        event.preventDefault();
    }

    handleTitleChange(event) {
        let newQuiz = this.state.currentQuiz;
        newQuiz.title = event.target.value;
        this.setState({
            currentQuiz : newQuiz
        });
    }

    handleAddQuestion(){
        let newQuestion = this.getEmptyQuestion();
        let newQuestions = this.state.newQuestions;
        newQuestions.push(newQuestion);

        this.setState({
            newQuestions : newQuestions
        });
    }

    //for simplification all questions contain exactly 4 answers
    getEmptyQuestion() {
        return {
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
    }

    render() {
        let questionListComponents = this.state.currentQuiz.questions.concat(this.state.newQuestions).map((q) => {
            return (
                <QuestionEdit key={q.id} question={q}/>
            );
        });

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <table className='table table-bordered table-hover'>
                        <tbody>

                        <tr>
                            <td>ID</td>
                            <td>
                                <input
                                    type='text'
                                    defaultValue={this.state.currentQuiz.id}
                                    readOnly="readOnly"
                                    required
                                    className='form-control'
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Title</td>
                            <td>
                                <input
                                    type='text'
                                    onChange={this.handleTitleChange}
                                    value={this.state.currentQuiz.title}
                                    required
                                    className='form-control'
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Questions</td>
                            <td>
                                {questionListComponents}
                                <button className="btn btn-primary" onClick={this.handleAddQuestion}>Add question</button>
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>
                                <input
                                    type="submit"
                                    title="Save"
                                    className='btn btn-success'
                                />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}

QuizEdit.propTypes = {
    quiz : PropTypes.object,
    saveQuiz : PropTypes.func
};

QuizEdit.defaultProps = {
    quiz : null
};
