import React, { Component } from 'react';
import uuid from 'uuid';
import QuizView from './components/QuizView';
import QuizList from './components/QuizList';
import QuizEdit from './components/QuizEdit';
import NavBar from './components/NavBar';
import './App.css';

/**
 * Main components which controls application routing. Generates mock quizzes
 */
export default class App extends Component {
  constructor(props){
    super(props);

    let mockQuizzes = this.getMockQuizes();

    this.state = {
        quizzes : mockQuizzes,
        currentPage : 'quizList',
        currentQuiz : {}
    };

      this.handleChangePage = this.handleChangePage.bind(this);
      this.handleSaveQuiz = this.handleSaveQuiz.bind(this);
      this.handleUpdateQuizList = this.handleUpdateQuizList.bind(this);
  }

 /**
  * Updates the state responsible for switching pages
  */
  handleChangePage(page, quiz = null) {
      this.setState({
          currentPage : page,
          currentQuiz : quiz,
      });
  }

  /**
  * Creates new or updates existing quiz in the quiz list
  */
  handleSaveQuiz(quiz) {
      let newQuizzes = this.state.quizzes;
      let index = newQuizzes.findIndex((q) => q.id === quiz.id);

      if(index === -1){
          newQuizzes.push(quiz);
      }else{
          newQuizzes[index] = quiz;
      }

      this.setState({
          quizzes : newQuizzes,
      });

      this.handleChangePage('quizList');
  }

  handleUpdateQuizList(quizList) {
      this.setState({
          quizzes : quizList
      });
  }

  render() {
      let currentPageComponents  = this.getCurrentPageComponents();
      return (
        <div className="App">
            <NavBar changePage={this.handleChangePage}/>
            {currentPageComponents}
        </div>
      );
  }

  /**
  * Returns components based on the current state
  */
  getCurrentPageComponents() {
        let currentPageComponents;

        switch(this.state.currentPage){
            case 'quizList' :
                currentPageComponents = <QuizList quizList={this.state.quizzes} changePage = {this.handleChangePage} updateQuizList = {this.handleUpdateQuizList}/>;
                break;
            case 'quizView' :
                currentPageComponents = <QuizView quiz={this.state.currentQuiz} changePage = {this.handleChangePage}/>;
                break;
            case 'quizEdit' :
                currentPageComponents = <QuizEdit quiz={this.state.currentQuiz} saveQuiz = {this.handleSaveQuiz}/>;
                break;
            case 'quizCreate' :
                currentPageComponents = <QuizEdit quiz={null} saveQuiz = {this.handleSaveQuiz}/>;
                break;
            default :
                currentPageComponents = <QuizList quizList={this.state.quizzes} changePage = {this.handleChangePage}/>;
                break;
        }

        return currentPageComponents;
    }

    getMockQuizes() {
        let quizzes =
            [
                {
                    id: uuid.v4(),
                    title : 'Quiz1',
                    questions : [
                        {
                            id : 'QN_' + uuid.v4(),
                            type : 'MULT',
                            text : 'Your favourite language?',
                            answers : [
                                {
                                    index : '0',
                                    id : 'AN_' + uuid.v4(),
                                    correct : true,
                                    text : 'JavaScript'
                                },
                                {
                                    index : '1',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'Java'
                                },
                                {
                                    index : '2',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'C#'
                                },
                                {
                                    index : '3',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'Assembly'
                                },
                            ]
                        },
                        {
                            id : 'QN_' + uuid.v4(),
                            type : 'MULT',
                            text : 'Your favourite band?',
                            answers : [
                                {
                                    index : '0',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'Foo Fighters'
                                },
                                {
                                    index : '1',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'RHCP'
                                },
                                {
                                    index : '2',
                                    id : 'AN_' + uuid.v4(),
                                    correct : true,
                                    text : 'Incubus'
                                },
                                {
                                    index : '3',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'The Beatles'
                                },
                            ]
                        },

                    ]
                },
                {
                    id : uuid.v4(),
                    title : 'Quiz2',
                    questions : [
                        {
                            id : 'QN_' + uuid.v4(),
                            type : 'MULT',
                            text : 'Your favourite language?',
                            answers : [
                                {
                                    index : '0',
                                    id : 'AN_' + uuid.v4(),
                                    correct : true,
                                    text : 'JavaScript'
                                },
                                {
                                    index : '1',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'Java'
                                },
                                {
                                    index : '2',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'C#'
                                },
                                {
                                    index : '3',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'Assembly'
                                },
                            ]
                        },
                        {
                            id : 'QN_' + uuid.v4(),
                            type : 'MULT',
                            text : 'Your favourite band?',
                            answers : [
                                {
                                    index : '0',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'Foo Fighters'
                                },
                                {
                                    index : '1',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'RHCP'
                                },
                                {
                                    index : '2',
                                    id : 'AN_' + uuid.v4(),
                                    correct : true,
                                    text : 'Incubus'
                                },
                                {
                                    index : '3',
                                    id : 'AN_' + uuid.v4(),
                                    correct : false,
                                    text : 'The Beatles'
                                },
                            ]
                        },

                    ]
                }
            ];
        return quizzes;
    }
}
