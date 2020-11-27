import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { DropdownQuestion } from '../models/question-dropdown';
import { RadioButtonQuestion } from '../models/question-radiobutton';
import { TextboxQuestion } from '../models/question-textbox';
import { QuestionBase } from '../models/questionbase';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

  getQuestions(){

    const questions: QuestionBase<string>[] = [

      new DropdownQuestion({
        key: 'country',
        label: 'Select country',
        options: [
          {key: 'India',  value: 'India'},
          {key: 'UK',  value: 'UK'},
          {key: 'Ireland',   value: 'Ireland'},
          {key: 'USA', value: 'USA'}
        ],
        order: 3
      }),

      new RadioButtonQuestion({
        key: 'singlechoice',
        label: 'Do you want to diagnose?',
        options: [
          {key: 'Yes',  value: 'true'},
          {key: 'No',  value: 'false'},
        ],
        order: 4
      }),

      new RadioButtonQuestion({
        key: 'singlechoice1',
        label: 'Do you want to diagnose?',
        options: [
          {key: 'Yes',  value: 'true'},
          {key: 'No',  value: 'false'},
        ],
        order: 4
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));

  }
}
