import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder, private http: HttpClient) {

  }

  ngOnInit() { 
      this.form = this.fb.group({
        name: [''],
        character: ['']
    });
  }



  submitForm(form: FormGroup) {
  const formData = new FormData();
  const sendData = {'name': form.value.name};
  formData.set("name",form.value.name);
  formData.set("character",form.value.character);

  const config = { headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*') };

      console.log(formData.get("character"));
      this.http.post('https://www.ilam56.com:8080/exploration2/submit',formData, config).subscribe(
        (response) => console.log("test", response),
        (error) => console.log(error)
      );

    //}

  }


}