/**
 * Created by serg on 10-Jan-19.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class QuizList extends Component {
    constructor() {
        super();

        this.state = {
            quizList : []
        }
    }

    componentDidMount() {
        this.setState({
            quizList : this.props.quizList
        });
    }

    render() {
        let quizRows = this.state.quizList.map((q) =>{
            // console.log('curr quiz');
            // console.log(q);
            return (
                <tr key={q.id}>
                    <td>{q.id}</td>
                    <td>{q.title}</td>
                    <td>{q.questions.length}</td>
                    <td>
                        <button
                           onClick={() => this.props.changePage('quizView', q)}
                           className='btn btn-info m-r-1em'> View
                        </button>
                        <button href='#'
                           onClick={() => this.props.changePage('quizEdit', q)}
                           className='btn btn-primary m-r-1em'> Edit
                        </button>
                        <button
                            onClick={() => this.props.changePage('quizEdit', q)}
                            className='btn btn-danger'> Delete
                        </button>
                    </td>
                </tr>
            );
        });

        return (
            this.state.quizList.length < 1 ?
                <div className='alert alert-danger'>No quizzes created</div>
                    :
                <table className='table table-bordered table-hover'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Questions number</th>
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
    changePage : PropTypes.func
};
QuizList.defaultProps = {quizList: []};

