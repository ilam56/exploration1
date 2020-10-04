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

  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router, private formData: FormData) {

  }

  ngOnInit() { 
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

    const config = { headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*') };

        this.http.post('https://www.ilam56.com:8080/exploration2/submit',form.value, config).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
        );
    this.formData.showTour = form;
    this.router.navigate(['/view']);

  }


}