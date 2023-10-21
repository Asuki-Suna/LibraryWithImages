import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  books: any= []

  constructor(private libraryService: LibraryService, private router: Router) { }

  onClick(){
    this.getAll()
    this.router.navigateByUrl("/library-manager")
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.libraryService.getBooks().subscribe(response =>{
      this.books = response;
      console.log(this.books)
    });
  }

}
