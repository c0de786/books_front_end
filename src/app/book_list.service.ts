import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserService} from './user.service';

@Injectable()
export class BookListService {

    constructor(private http: HttpClient, private _userService: UserService) {
    }

    // Uses http.get() to load data from a single API endpoint
    list() {
        return this.http.get('http://localhost:8000/all/');
    }

    // send a POST request to the API to create a new data object
    create(post, token) {
        return this.http.post('http://localhost:8000/booklists/', JSON.stringify(post), this.getHttpOptions());
    }

    delete(id, token) {
        return this.http.delete('http://localhost:8000/booklists/' + id + '/', this.getHttpOptions());
    }

    update(book, token) {
        return this.http.patch('http://localhost:8000/booklists/' + book.id + '/', JSON.stringify(book), this.getHttpOptions());
    }

    // helper function to build the HTTP headers
    getHttpOptions() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'JWT ' + this._userService.token
            })
        };
    }

}
