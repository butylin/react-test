/**
 * Created by serg on 10-Jan-19.
 */
import React from 'react';
import DefaultQuestionView from '../components/DefaultQuestionView';

/**
 * Factory for building question view components base on question type
 */
export default class QuestionFactory {
    static getQuestionComponent(question) {
        switch (question.type) {
            case 'MULT':
                return <DefaultQuestionView key={question.id} question={question}/>;
            default:
                return undefined;
        }
    }
}
