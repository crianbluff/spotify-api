import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists:any[] = [];
  tracks:any[] = [];

  // Loading
  isLoadingArtist:boolean = false;
  isLoadingTrack:boolean = false;
  
  // Pag
  pagArtist:number = 1;
  pagTrack:number = 1;
  
  totalArtist:any = [];
  totalTrack:any = [];

  nameArtist:string;
  nameTrack:string;

  // Min & Max
  minArtist:any;
  minTrack:any;
  maxArtist:any;
  maxTrack:any;

  // Errors
  isErrorArtist:boolean = false;
  isErrorTracks:boolean = false;
  errorArtistMessage:string;
  errorTracksMessage:string;

  constructor(private spotify: SpotifyService) { }

  firstArtist() {
    this.pagArtist = 1;
  }
  
  prevArtist() {
    if ( this.pagArtist !== 1 ) {
      this.pagArtist = this.pagArtist - 1
    }
  }
  
  goArtist(number) {
    this.pagArtist = number;
  }

  paginationArtist() {
    if (this.pagArtist > 9) {
      this.minArtist = this.pagArtist - 8;
      this.maxArtist = this.pagArtist + 1;
    } else {
      this.minArtist = 1;
      this.maxArtist = 10;
    }
  }
  
  nextArtist() {
    this.pagArtist = this.pagArtist + 1;
  }

  lastArtist() {
    if (this.totalArtist.length <= 999) {
      this.pagArtist = this.totalArtist.length;
    } else {
      this.pagArtist = 1000;
    }
  }

  searchArtist(termArtist:string, number) {
    this.isLoadingArtist = true;

    if ( termArtist === '' ) {
      return false;
    }

    if (this.nameArtist !== termArtist) {
      this.nameArtist = termArtist;
      this.pagArtist = 1;
    }

    number = (this.pagArtist - 1) * 10;
    this.paginationArtist();

    this.spotify.getArtists(termArtist, number.toString())
    .subscribe(
      (data:any) => {
        this.artists = data.items;
        this.isLoadingArtist = false;

        this.totalArtist = [];
        for (let i = 0; i < data.total / 10; i++) {
          this.totalArtist.push(i + 1);
        }
      },
      
      (error:any) => {
        this.artists = [];
        this.isErrorArtist = true;
        this.isLoadingArtist = false;
        this.errorArtistMessage = error.error.error.message;
      }
    );
  }

  firstTrack() {
    this.pagTrack = 1;
  }
  
  prevTrack() {
    if ( this.pagTrack !== 1 ) {
      this.pagTrack = this.pagTrack - 1
    }
  }
  
  goTrack(number) {
    this.pagTrack = number;
  }

  paginationTrack() {
    if (this.pagTrack > 9) {
      this.minTrack = this.pagTrack - 8;
      this.maxTrack = this.pagTrack + 1;
    } else {
      this.minTrack = 1;
      this.maxTrack = 10;
    }
  }
  
  nextTrack() {
    this.pagTrack = this.pagTrack + 1;
  }

  lastTrack() {
    if (this.totalTrack.length <= 999) {
      this.pagTrack = this.totalTrack.length;
    } else {
      this.pagTrack = 1000;
    }
  }

  searchTrack(termTrack:string, number) {
    this.isLoadingTrack = true;

    if ( termTrack === '' ) {
      return false;
    }

    if (this.nameTrack !== termTrack) {
      this.nameTrack = termTrack;
      this.pagTrack = 1;
    }
    
    number = (this.pagTrack - 1) * 10;
    this.paginationTrack();

    this.spotify.getTracks(termTrack, number.toString())
    .subscribe(
      (data:any) => {
        this.tracks = data.items;
        this.isLoadingTrack = false;

        this.totalTrack = [];
        for (let i = 0; i < data.total / 10; i++) {
          this.totalTrack.push(i + 1);
        }
      },

      (error:any) => {
        this.tracks = [];
        this.isErrorTracks = true;
        this.isLoadingTrack = false;
        this.errorTracksMessage = error.error.error.message;
      }
    );
  }

}