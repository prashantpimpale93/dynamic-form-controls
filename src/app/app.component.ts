import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form-array';

  userJson: any = [{
    "question": "Who Was The First Indian To Hit A Test Century?",
    "options": ["Lala Amarnath", "Kapil Dev", "Sunil Gavaskar"], "ans": "Lala Amarnath"
  },
  {
    "question": "Who Won The Inaugural Asia Cup Championship?",
    "options": ["Pakistan", "Sri Lanka", "India"], "ans": "India"
  },
  {
    "question": "Who Was Australia’s First Captain?",
    "options": ["F.S.Jackson", "D.W. Gregory", "Tony Lewis"], "ans": "D.W. Gregory"
  }, {
    "question": " When And Where Was The First Ranji Trophy Match Played?",
    "options": ["kolkata", "Mumbai", "Chennai", "Satara"], "ans": "Chennai"
  }];
}
