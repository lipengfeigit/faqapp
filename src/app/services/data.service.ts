import { Injectable } from '@angular/core';
import { Question } from '../models/Questions'
@Injectable()
export class DataService {
  questions: Question[];
  constructor() {
  	// this.questions = [
  	// 	{
  	// 		text: "你叫什么名字",
  	// 		answer: "米斯特李",
  	// 		hide: true
  	// 	},
  	// 	{
  	// 		text: "你喜欢什么颜色",
  	// 		answer: "黄色",
  	// 		hide: true
  	// 	},
  	// 	{
  	// 		text: "你的爱好是什么",
  	// 		answer: "打英雄联盟",
  	// 		hide: true
  	// 	}
  	// ]
  }
  getQuestions() {
    if(localStorage.getItem("questions") == null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem("questions"))
    }
  	return this.questions;
  }

  addQuestion(question: Question) {
    this.questions.unshift(question)

    let questions;
    if(localStorage.getItem("questions") == null){
      questions = [];
      questions.unshift(question);
      localStorage.setItem("questions",JSON.stringify(questions));
    }else{
      questions = JSON.parse(localStorage.getItem("questions"));
      questions.unshift(question);

      localStorage.setItem("questions",JSON.stringify(questions));
    }

  }

  removeQuestion(question: Question){
    for(let i=0; i < this.questions.length; i++){
      if(this.questions[i] == question){
        this.questions.splice(i,1);
      }
    }
    localStorage.setItem("questions",JSON.stringify(this.questions))
  }

}

