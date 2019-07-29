import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { }

  getQuery(query:string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    });

    return this.http.get(url , {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=10&offset=20')
    .pipe( map( data => data['albums'].items ));
  }

  getAlbums(id:string) {
    return this.getQuery(`artists/${id}/albums?limit=10`)
    .pipe( map( data => data['items'] ));
  }

  getArtist(id:string) {
    return this.getQuery(`artists/${id}`);
  }

  getArtists(term:string, number:string) {
    return this.getQuery(`search?q=${term}&type=artist&limit=10&offset=${number}`)
    .pipe( map( data =>  data['artists'] ));
  }
  
  getTracks(term:string, number:string) {
    return this.getQuery(`search?q=${term}&type=track&limit=10&offset=${number}`)
    .pipe( map( data => data['tracks'] ));
  }
  
  getTopTracks(id:string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data => data['tracks'] ));
  }

}