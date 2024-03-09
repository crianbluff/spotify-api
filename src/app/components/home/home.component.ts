import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  releases:any[] = [];
  isLoadingReleases:boolean = false;
  error:boolean;
  messageError:string;

  // Min & Max
  minRelease:any;
  maxRelease:any;
  totalReleases:number;
  pagRelease:number = 1;
  pageOffset:number;

  constructor( private spotify:SpotifyService ) {
    this.getNewReleases(0);
  }

  getNewReleases(offset?:number) {
    this.isLoadingReleases = true;

    this.spotify.getNewReleases(offset)
    .subscribe(
      (data:any) => {
        this.releases = data.items;
        this.pageOffset = data.offset;
        this.isLoadingReleases = false;
        this.totalReleases = data.total / data.items.length;
      },

      (errorService) => {
        this.isLoadingReleases = false;
        this.error = true;
        this.releases = [];
        this.messageError = errorService.error.error.message;
      }
    );
  }

  firstRelease() {
    this.pagRelease = 1;
  }
  
  prevRelease() {
    if ( this.pagRelease !== 1 ) {
      this.pagRelease = this.pagRelease - 1;
    }
  }
  
  goRelease(number) {
    this.pagRelease = number;
  }

  nextRelease() {
    this.pagRelease = this.pagRelease + 1;
  }

  lastRelease() {
    if (this.totalReleases <= 999) {
      this.pagRelease = this.totalReleases;
    } else {
      this.pagRelease = 1000;
    }
  }

}