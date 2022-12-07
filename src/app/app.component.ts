import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from "@angular/forms";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
onSubmit($event: any) {
throw new Error('Method not implemented.');
}
  name = "Angular";

  contact = 
    {
      name: "lamar",
      email: "lamar@gmail.com",
      phone: "023232349403",
      country: "USA"
    };

  firstGroupForm: FormGroup;
  info: any;

  constructor(private fb: FormBuilder) {}

  get contacts(): FormArray {
    return <FormArray>this.firstGroupForm.get('contact');
  }

  ngOnInit() {




    
    this.firstGroupForm = this.fb.group({
      name: [this.contact.name, [Validators.required]],
      email: [this.contact.email, [Validators.required]],
      phone: [this.contact.phone, [Validators.required]],
      country: [this.contact.country, [Validators.required]]
    }); 
  }
  

  submitContact() {
    alert('Contact submitted: ' + JSON.stringify(this.contact));
  }
}
