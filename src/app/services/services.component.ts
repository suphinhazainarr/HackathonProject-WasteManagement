import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
imports:[CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services = [
    {
      iconClass: 'fas fa-leaf', // Font Awesome class for leaf icon
      title: 'Corporate Services',
      description: 'Guaranteed that all of your universal waste management is performed safely and responsibly.'
    },
    {
      iconClass: 'fas fa-truck', // Font Awesome class for pickup icon
      title: 'Convenient Pickup',
      description: 'We offer business pickup services to safely recycle your electronics in a safe manner.'
    },
    {
      iconClass: 'fas fa-calendar-alt', // Font Awesome class for calendar icon
      title: 'E-waste Events',
      description: 'We work with non-profits, businesses, and other organizations to host community e-waste events.'
    }
  ];
}
