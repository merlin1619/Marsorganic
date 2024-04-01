import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CarouselModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  logged_in: boolean = false;
  language: string = 'English';
  user_role!: any;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  ngDoCheck() {
    this.user_role = sessionStorage.getItem("role");
    const user_sesson_id = sessionStorage.getItem("user_session_id");
    if(user_sesson_id){
      this.logged_in = true;
    }
  }

}
