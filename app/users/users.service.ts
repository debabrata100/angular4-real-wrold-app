import {Http} from 'angular2/http';
import Observable from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';

@Injectable()
export class UsersService{
    private _url = 'https://jsonplaceholder.typicode.com/users';
    constructor(private _http: Http){
 
    }

    getUser(id){
        return this._http.get(this._url+'/'+id)
        .map(res=>res.json());
    }
    getUsers(){
       return this._http.get(this._url)
        .map(res=>res.json());
    }
    addUser(user){
      return  this._http.post(this._url,JSON.stringify(user))
        .map(res=>res.json());
    }
    updateUser(user){
      return  this._http.put(this.getUserUrl(user.id),JSON.stringify(user))
        .map(res=>res.json());
    }

    private getUserUrl(userId){
        return this._url+'/'+userId;
    }

}