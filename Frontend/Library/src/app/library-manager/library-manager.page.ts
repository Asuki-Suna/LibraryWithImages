import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-library-manager',
  templateUrl: './library-manager.page.html',
  styleUrls: ['./library-manager.page.scss'],
})
export class LibraryManagerPage implements OnInit {

  books: any = []
  titleID!: string;
  authorID!: any;
  capturedPhoto: any = "";

  constructor(private libraryService: LibraryService, private router: Router,
    public formBuilder: FormBuilder, private photoService: PhotoService) { }

  ionViewWillEnter() {
    this.capturedPhoto = "";
  }

  clickBack() {
    this.getAll()
    this.router.navigateByUrl("/library")
  }

  ngOnInit() {
    this.getAll();
  }

  takePhoto() {
    // DECOMMENT:
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  pickImage() {
    // DECOMMENT:
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    // DECOMMENT:
    this.capturedPhoto = null;
  }

  getAll() {
    this.libraryService.getBooks().subscribe(response => {
      this.books = response;
      console.log(this.books)
    });
  }

  async addBook() {
    let book = {
      title: this.titleID,
      author: this.authorID,
    }
    let blob = null;
    if (this.capturedPhoto != "") {
      const response = await fetch(this.capturedPhoto);
      blob = await response.blob();
    }

    this.libraryService.createBook(book, blob).subscribe(response => {
      console.log("Book added");
      this.getAll()
      this.router.navigateByUrl("/library")
    })
  }

  onClickDelete(id: number) {
    console.log(id)
    // console.log("alguito")
    // console.log(id)
    this.libraryService.deleteBook(id).subscribe(resp => {
      console.log("se elimino correctamente")
      this.getAll()
    })
  }

  async onClickUpdate(id: number) {
    console.log(id)
    let book = {
      title: this.titleID,
      author: this.authorID,

    }
    let blob = null;
    if (this.capturedPhoto != "") {
      const response = await fetch(this.capturedPhoto);
      blob = await response.blob();
    }

    this.libraryService.updateBook(id, book, blob).subscribe(response => {
      console.log("Book update");
      this.getAll()
    })
  }

}
