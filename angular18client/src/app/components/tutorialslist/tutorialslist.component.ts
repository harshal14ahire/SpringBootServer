import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../../models/model';
import { TutorialService } from '../../services/tutorial.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TutorialdetailsComponent } from '../tutorialdetails/tutorialdetails.component';

@Component({
  selector: 'app-tutorialslist',
  imports: [CommonModule, FormsModule,TutorialdetailsComponent],
  templateUrl: './tutorialslist.component.html',
  styleUrl: './tutorialslist.component.css'
})

  export class TutorialslistComponent implements OnInit {
    tutorials?: Tutorial[];
    currentTutorial: Tutorial = {};
    currentIndex = -1;
    title = '';
  
    constructor(private tutorialService: TutorialService) {}
  
    ngOnInit(): void {
      this.retrieveTutorials();
    }
  
    retrieveTutorials(): void {
      this.tutorialService.getAll().subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
  
    refreshList(): void {
      this.retrieveTutorials();
      this.currentTutorial = {};
      this.currentIndex = -1;
    }
  
    setActiveTutorial(tutorial: Tutorial, index: number): void {
      this.currentTutorial = tutorial;
      this.currentIndex = index;
    }
  
    removeAllTutorials(): void {
      this.tutorialService.deleteAll().subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
    }
  
    searchTitle(): void {
      this.currentTutorial = {};
      this.currentIndex = -1;
  
      this.tutorialService.findByTitle(this.title).subscribe({
        next: (data) => {
          this.tutorials = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
    }
  }


