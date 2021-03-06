import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import { FormData } from '../form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  spamProtect: boolean = false;

  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router, private formData: FormData) {

  }

  ngOnInit() { 
    //create form
      this.form = this.fb.group({
        e2complete: [''],
        e2prepared: [''],
        e2feel: [''],
        challenge01: [''],
        challenge02: [''],
        challenge03: [''],
        exploration1: [''],
        node: [''],
        mongoDB: [''],
        communication: [''],
        other: ['']

    });
  }



  submitForm(form: FormGroup) {
    //submit form to data service so can be used on view page
    if(!this.spamProtect){
      this.spamProtect = true;
      this.formData.showTour = form;
      const config = { headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*') };
          //submit the form to backend
          this.http.post('https://www.ilam56.com:8080/exploration2/submit',form.value, config).subscribe(
            (response) => {console.log(response)
            this.router.navigate(['/view']);
            },
            (error) => {console.log(error)
            this.spamProtect = false;
            }
          );
    }
  }


}