import { Component, OnInit } from '@angular/core';
import { FormData } from '../form-data';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  form: FormGroup = this.formData.showTour;
  formValue: any;
  //results array shows how many of each result. is populated later by get. The loading values are just for a default loading text.
  results: any = {
          "e2complete": {
                  "Yes": "loading",
                  "No": "loading"
          },
          "e2prepared": {
                  "Yes": "loading",
                  "No": "loading"
          },
          "e2feel": {
                  "Awesome!": "loading",
                  "Good": "loading",
                  "Meh": "loading",
                  "Bad": "loading"
          },
          "past": {
                  "challenge01": "loading",
                  "challenge02": "loading",
                  "challenge03": "loading",
                  "exploration1": "loading"
          },
          "trouble": {
                  "node": "loading",
                  "mongoDB": "loading",
                  "communication": "loading",
                  "other": "loading"
          }
  };

  constructor(private formData: FormData, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    //this is to store in local storage for refresh
    if(this.form){
      localStorage.setItem('form', JSON.stringify(this.form.value));
      this.formValue = this.form.value;
    } else {
      this.formValue = JSON.parse(localStorage.getItem('form'));
    }
    //if haven't filled out survey at least once redirect back to survey.
    if(!this.formValue){
      this.router.navigate(['']);
    }

    //do get request for the results.
    const config = { headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*') }; //this was done so I could test the server on stackblitz without cors error.

        this.http.get('https://www.ilam56.com:8080/exploration2/results',config).subscribe(
          (response) => this.results = response,
          (error) => console.log(error)
        );
  }

}