import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newsSongs:any[] = [];
  loading:boolean;
  error:boolean;
  messageError:string;

  constructor( private spotify:SpotifyService ) {

    this.loading = true;
    this.error = false;
    
    this.spotify.getNewReleases()
    .subscribe( (data:any) => {
      // console.log(data);
      this.newsSongs = data;
      this.loading = false;
    }, ( errorService ) => {
      this.loading = false;
      this.error = true;
      console.log(errorService);
      this.messageError = errorService.error.error.message;
    });
    
  }

}