import { Component } from '@angular/core';
import { Tutorial } from '../../models/model';
import { TutorialService } from '../../services/tutorial.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-addtutorial',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addtutorial.component.html',
  styleUrl: './addtutorial.component.css'
})

export class AddtutorialComponent {
  
  
  tutorial:Tutorial={
    title:'',
    description:'',
    published:false

  };
  submitted=false;
  constructor(private tutorialService:TutorialService){}

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e: any) => console.error(e)
    });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

}
