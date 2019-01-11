import React, { Component } from 'react';
import uuid from 'uuid';
import Quiz from './components/Quiz';
import QuizList from './components/QuizList';
import QuizEdit from './components/QuizEdit';
import NavBar from './components/NavBar';
import './App.css';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
        currentPage : 'quizList',
        currentQuiz : {},
        currentQuestion : {},
        quizzes : [],
    };

      this.handleChangePage = this.handleChangePage.bind(this);
      this.handleSaveQuiz = this.handleSaveQuiz.bind(this);
  }

  componentWillMount(){
      this.getQuizzes();
  }

  handleChangePage(page, quiz = null, question = null) {
      this.setState({
          currentPage : page,
          currentQuiz : quiz,
          currentQuestion: question
      });
  }

  handleSaveQuiz(quiz) {
      let newQuizzes = this.state.quizzes;
      //console.log('new quiz ID: ' + quiz.id);
      let index = newQuizzes.findIndex((q) => q.id === quiz.id);
      //console.log('found index: ' + index);

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

  render() {
      let currentPageComponents  = this.getCurrentPageComponents();
      return (
        <div className="App">
            <NavBar changePage={this.handleChangePage}/>
            {currentPageComponents}
        </div>
      );
  }

    getCurrentPageComponents() {
        let currentPageComponents;

        switch(this.state.currentPage){
            case 'quizList' :
                currentPageComponents = <QuizList quizList={this.state.quizzes} changePage = {this.handleChangePage}/>;
                break;
            case 'quizView' :
                currentPageComponents = <Quiz quiz={this.state.currentQuiz} changePage = {this.handleChangePage}/>;
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

  getQuizzes(){
    this.setState({
        quizzes : [
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
        ]
    });
  }
}
