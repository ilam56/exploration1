import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class FormData {

   _showTour: FormGroup;

   set showTour(value: FormGroup) {
      this._showTour = value;
   }

   get showTour(): FormGroup {
       return this._showTour;
   }

   constructor() {}

}