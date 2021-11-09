import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons }
  from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  closeResult = '';
  requiredForm: any; // defiend from object
  constructor(private modalService: NgbModal, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.requiredForm = FormGroup; // assign formgroup
    this.myForm(); // call form initialize
  }

  // initialize reactive form....
  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      number: ['', Validators.required, Validators.pattern("^[0-9]*$")],
      dob: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]]
    });
  }

  // Hanle open modal event...
  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  get form() {
    return this.requiredForm.controls; // returning form controls
  }

  // validating form on submit button click...
  validateForm() {
    if (this.requiredForm.invalid) {
      this.requiredForm.get('name').markAsTouched();
      this.requiredForm.get('address').markAsTouched();
      this.requiredForm.get('city').markAsTouched();
      this.requiredForm.get('number').markAsTouched();
      this.requiredForm.get('dob').markAsTouched();
      this.requiredForm.get('email').markAsTouched();
      return;
    }
  }

  // handling form submition...
  submitForm() {
    this.validateForm(); // validate form
    if (this.requiredForm.invalid) {
      return
    }
    console.log(this.form)
  }
}
