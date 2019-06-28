import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms'

@Component({
  selector: 'app-dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  styleUrls: ['./dynamic-form-array.component.css']
})
export class DynamicFormArrayComponent implements OnInit {

  ngOnInit() {
    console.log(this.questions);
    this.cricketForm = this.fb.group({
      questionArray: this.fb.array([])
    });
    this.addControlsInFormArray();
  }

  cricketForm: FormGroup;
  questionArray: FormArray;

  @Input() questions: any[]= []; 


  constructor(private fb: FormBuilder) {
    
  }

  onSubmit() {
    console.log(this.cricketForm.value);
  }

  addControlsInFormArray() {
    for (let i = 0; i < this.questions.length; i++) {
      let obj = this.questions[i];
      this.questionArray = this.cricketForm.get('questionArray') as FormArray;
      this.questionArray.push(this.createQuestion(obj));
    }
  }

  createQuestion(obj): FormGroup {
    return this.fb.group({
      question: new FormControl(obj.question),
      options: new FormControl("", [Validators.required])
    });
  }
}
