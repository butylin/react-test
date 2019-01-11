/**
 * Created by serg on 10-Jan-19.
 */
import React from 'react';
import DefaultQuestion from '../components/DefaultQuestion';

export default class QuestionFactory {
    static getQuestionComponent(question) {
        switch (question.type) {
            case 'MULT':
                return <DefaultQuestion key={question.id} question={question}/>;
            default:
                return undefined;
        }
    }
}
