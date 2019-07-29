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
  pagArtist:number = 1;
  pagTrack:number = 1;
  totalArtist:any = [];
  totalTrack:any = [];
  nameArtist:string;
  nameTrack:string;
  minArtist:any;
  minTrack:any;
  maxArtist:any;
  maxTrack:any;

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
    if ( termArtist === '' ) {
      return false;
    }

    if (this.nameArtist !== termArtist) {
      this.nameArtist = termArtist;
      this.pagArtist = 1;
    }
    
    this.loadingArtist = true;

    number = (this.pagArtist - 1) * 10;

    this.paginationArtist();

    this.spotify.getArtists(termArtist, number.toString())
    .subscribe( (data:any) => {
      // console.log(data);
      this.artists = data.items;
      this.loadingArtist = false;

      this.totalArtist = [];
      for (let i = 0; i < data.total / 10; i++) {
        this.totalArtist.push(i + 1);
      }
      // console.log(this.totalArtist);
    });
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
    if ( termTrack === '' ) {
      return false;
    }

    if (this.nameTrack !== termTrack) {
      this.nameTrack = termTrack;
      this.pagTrack = 1;
    }
    
    this.loadingTrack = true;

    number = (this.pagTrack - 1) * 10;

    this.paginationTrack();

    this.spotify.getTracks(termTrack, number.toString())
    .subscribe( (data:any) => {
      // console.log(data);
      this.tracks = data.items;
      this.loadingTrack = false;

      this.totalTrack = [];
      for (let i = 0; i < data.total / 10; i++) {
        this.totalTrack.push(i + 1);
      }
      console.log(this.totalTrack);
    });
  }

}