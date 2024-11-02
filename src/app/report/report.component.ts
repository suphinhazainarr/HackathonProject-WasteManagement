import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  reportForm: FormGroup;
  photoPreview: string | ArrayBuffer | null = null;
  location: { latitude: number, longitude: number } | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.reportForm = this.fb.group({
      photo: [null, Validators.required],
      description: ['', [Validators.required, Validators.maxLength(10)]],
      location: [null, Validators.required]
    });
  }

  capturePhoto(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result;
      };
      reader.readAsDataURL(file);
      this.reportForm.patchValue({ photo: file });
    }
  }

  detectLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        this.reportForm.patchValue({
          location: this.location
        });
      }, error => {
        console.error('Location access denied:', error);
        alert('Location access denied. Please enable location services.');
      });
    } else {
      console.error('Geolocation not supported by this browser.');
      alert('Geolocation is not supported by your browser.');
    }
  }

  submitReport() {
    if (this.reportForm.valid) {
      const reportData = new FormData();
      reportData.append('photo', this.reportForm.get('photo')?.value);
      reportData.append('description', this.reportForm.get('description')?.value);
      reportData.append('location', JSON.stringify(this.reportForm.get('location')?.value));

      // Send reportData to the backend
      this.http.post('http://localhost:3000/api/report', reportData).subscribe(
        (response) => {
          console.log('Report submitted successfully:', response);
          alert('Report uploaded successfully');
          this.reportForm.reset();
          this.photoPreview = null;
          this.location = null;
        },
        (error) => {
          console.error('Error submitting report:', error);
          alert('Failed to upload report. Please try again.');
        }
      );
    } else {
      console.error('Form is not valid');
      alert('Please complete all required fields.');
    }
  }
}
