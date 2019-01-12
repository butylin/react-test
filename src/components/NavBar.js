import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * Navigation panel component
 */
export default class NavBar extends Component{
    render() {
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Menu</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><a href="#/quizlist" onClick={() => this.props.changePage('quizList')}>Quiz List</a></li>
                        <li><a href="#/createquiz" onClick={() => this.props.changePage('quizCreate', null)}>Create Quiz</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    changePage : PropTypes.func
}
