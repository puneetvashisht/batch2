import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
  myForm: FormGroup;

  genders = [
    'male',
    'female'
  ];

  constructor(private formBuilder: FormBuilder) {
    // this.myForm = new FormGroup({
    //   'userData': new FormGroup({
    //     'username': new FormControl('Puneet', Validators.required),
    //     'email': new FormControl('', [
    //       Validators.required,
    //       Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
    //     ])
    //   }),
    //   'password': new FormControl('', Validators.required),
    //   'gender': new FormControl('male'),
    //   'hobbies': new FormArray([
    //     new FormControl('Cooking', Validators.required)
    //   ])
    // });

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Puneet', [Validators.required, this.exampleValidator]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }

  onAddHobby() {
    (<FormArray>this.myForm.controls['hobbies']).push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value === 'Example') {
            resolve({'invalid': true});
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

}
