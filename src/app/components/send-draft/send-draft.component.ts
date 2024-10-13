import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-draft',
  templateUrl: './send-draft.component.html',
  styleUrl: './send-draft.component.css'
})
export class SendDraftComponent {
  draftForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.draftForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.draftForm.valid) {
      this.router.navigate(['/sent'], { state: { formData: this.draftForm.value } });
    }
  }
}
