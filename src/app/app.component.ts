import { Component } from '@angular/core';
import { QuestionService } from './services/question.service';
import { QuestionBase } from './models/questionbase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicui';

  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService){
    this.questions$ = service.getQuestions();
  }
}
