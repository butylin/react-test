import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Implements list of quizzes and its functions View, Edit, Delete
 */
export default class QuizList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizList : this.props.quizList
        }
    }


    handleDelete(id) {
        let newQuizList = this.state.quizList.filter((q) => q.id !== id);
        this.setState({
            quizList : newQuizList
        },() => {
            this.props.updateQuizList(this.state.quizList);
        });
    }

    render() {
        let quizRows = this.state.quizList.map((q) =>{
            return (
                <tr key={q.id}>
                    <td>{q.title}</td>
                    <td>{q.questions.length}</td>
                    <td>{q.id}</td>
                    <td>
                        <a href='#view'
                           onClick={() => this.props.changePage('quizView', q)}
                           className='btn btn-info m-r-1em'> View
                        </a>
                        <a href='#edit'
                           onClick={() => this.props.changePage('quizEdit', q)}
                           className='btn btn-primary m-r-1em'> Edit
                        </a>
                        <button
                            onClick={this.handleDelete.bind(this, q.id)}
                            className='btn btn-danger'> Delete
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            this.state.quizList.length < 1 ?
                <div className='alert alert-danger'>Quiz list is empty!</div>
                    :
                <table className='table table-bordered table-hover'>
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Number of questions</th>
                        <th>ID</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {quizRows}
                    </tbody>
                </table>
        );
    }
}

QuizList.propTypes = {
    quizList : PropTypes.array,
    changePage : PropTypes.func,
    updateQuizList : PropTypes.func
};
QuizList.defaultProps = {quizList: []};