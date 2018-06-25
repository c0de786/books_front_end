import {Component, OnInit} from '@angular/core';
import {BookListService} from './book_list.service';
import {UserService} from './user.service';
import {throwError} from 'rxjs';  // Angular 6/RxJS 6
declare var $: any ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
/**
   * An object representing the user for the login form
   */
  public user: any;
  /**
   * An array of all the BlogPost objects from the API
   */
  public posts;

  /**
   * An object representing the data in the "add" form
   */
  public new_post: any;
  public bookdetails: any;



    constructor(private _bookListService: BookListService, public _userService: UserService) { }

  ngOnInit() {
    this.getAllBooks();
    this.new_post = {};
    this.bookdetails = {};
    this.user = {
      username: '',
      password: ''
    };
  }

  login() {
    this._userService.login({'username': this.user.username, 'password': this.user.password});
  }

  refreshToken() {
    this._userService.refreshToken();
  }

  logout() {
    this._userService.logout();
  }

  getAllBooks() {
    this._bookListService.list().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.posts = data;
        // console.log(data);

      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
       () => console.log('done loading booklist')
    );
  }

  addBook() {
    // console.log(this.new_post);
    this._bookListService.create(this.new_post, this.user.token).subscribe(
       data => {
         // refresh the list
         this.getAllBooks();
         $('#addBookModal').modal('hide');
         $('#add_form')[0].reset();
         return true;
       },
       error => {
        // console.error('Error saving!');
         return throwError(error);
       }
    );
  }
  deleteBook(id) {
      this._bookListService.delete(id, this.user.token).subscribe(
          data => {
              // refresh the list
              this.getAllBooks();
              return true;
          },
          error => {
              console.error('Error saving booklist!');
              return throwError(error);
          }
      );
  }
    showEditBook(book) {
    this.bookdetails = book;
    }

    updateBook(book) {
        this._bookListService.update(book, this.user.token).subscribe(
            data => {
                $('#updateBookModal').modal('hide');
                $('#update_form')[0].reset();
                // refresh the list
                this.getAllBooks();
                return true;
            },
            error => {
                console.error(error);
                return throwError(error);
            }
        );
    }



}
