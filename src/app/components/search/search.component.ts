import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists:any[] = [];
  tracks:any[] = [];
  loadingArtist:boolean;
  loadingTrack:boolean;
  pagArtist:number = 0;
  pagTrack:number = 0;

  constructor(private spotify: SpotifyService) { }

  prevArtist() {
    if ( this.pagArtist >= 10  ) {
      this.pagArtist = this.pagArtist - 10;
    }
  }

  nextArtist() {
    this.pagArtist = this.pagArtist + 10;
  }

  prevTrack() {
    if ( this.pagTrack >= 10  ) {
      this.pagTrack = this.pagTrack - 10;
    }
  }

  nextTrack() {
    this.pagTrack = this.pagTrack + 10;
  }

  searchArtist(termArtist:string, number = this.pagArtist.toString()) {
    // this.pagArtist = 0;

    if ( termArtist === '' ) {
      return false;
    }
    
    this.loadingArtist = true;

    this.spotify.getArtists(termArtist, number)
    .subscribe( (data:any) => {
      // console.log(data);
      this.artists = data;
      this.loadingArtist = false;
    });
  }

  searchTrack(termTrack:string, number = this.pagTrack.toString()) {
    // this.pagTrack = 0;

    if ( termTrack === '' ) {
      return false;
    }
    
    this.loadingTrack = true;

    this.spotify.getTracks(termTrack, number)
    .subscribe( (data:any) => {
      // console.log(data);
      this.tracks = data;
      this.loadingTrack = false;
    });
  }

}
