import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormArray } from '@angular/forms'

@Component({
  selector: 'dynamic-form-array',
  templateUrl: './dynamic-form-array.component.html',
  styleUrls: ['./dynamic-form-array.component.css']
})
export class DynamicFormArrayComponent implements OnInit {

  cricketForm: FormGroup;
  questionArray: FormArray;

  @Input() questions: any[] = [];
  @Output() onSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cricketForm = this.fb.group({
      questionArray: this.fb.array([])
    });
    this.addControlsInFormArray();
  }

  submit() {
    this.onSubmit.emit(this.cricketForm.value)
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
      selectedOption: new FormControl("", [Validators.required])
    });
  }
}
