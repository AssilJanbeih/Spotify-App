import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, Self, ViewChild } from '@angular/core';
import { AbstractControl, FormsModule, NgControl, ReactiveFormsModule } from '@angular/forms';

// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @ViewChild('input', { static: true }) input!: ElementRef;
  @Input() label: string = '';
  @Input() inputType: string = 'text';
  @Input() id: string = '';
  @Input() placeholderText: string = '';
  @Input() control: AbstractControl | null = null;
  @Input() inputClass : string = 'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-800 sm:text-sm sm:leading-6';
  @Input() labelClass : string = 'block text-sm font-medium leading-2 text-gray-900';
  @Input() isRequired: boolean = false;
  


  // matcher = new MyErrorStateMatcher();

  constructor(@Self() public controlDir: NgControl) {
    this.controlDir.valueAccessor = this;
  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    if (control){
      //sync validators like pattern, required..
      const validators = control.validator ? [control.validator] : [];
      //async validators like valdiator that needs to call an api..
      const asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];

      control.setValidators(validators);
      control.setAsyncValidators(asyncValidators);
      control.updateValueAndValidity();
    }
  }

  writeValue(obj: any): void {
    this.input.nativeElement.value = obj || '';
  }

  onChange(event: any) {
  }

  onTouched(event?: any) {
    const control = this.controlDir.control;
    if (control?.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
