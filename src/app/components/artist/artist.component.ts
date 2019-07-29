import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent {

  artist:any = {};
  topTracks:any[] = [];
  albums:any = {};
  loadingArtist:boolean;
  loadingAlbums:boolean;
  loadingTopTracks:boolean;

  constructor( private router:ActivatedRoute, private spotify:SpotifyService ) {

    this.loadingArtist = true;
    this.loadingAlbums = true;
    this.loadingTopTracks = true;
    this.router.params.subscribe( params => {
      this.getArtist( params['id'] );
      this.getTopTracks( params['id'] );
      this.getAlbums( params['id'] );
    });

  }

  getArtist(id:string) {
    this.loadingArtist = true;
    this.spotify.getArtist(id)
    .subscribe( artist => {
      // console.log(artist);
      this.artist = artist;
      this.loadingArtist = false;
    });
  }

  getAlbums(id:string) {
    this.loadingAlbums = true;
    this.spotify.getAlbums(id)
    .subscribe( album => {
      // console.log(album);
      this.albums = album;
      this.loadingAlbums = false;
    });
  }

  getTopTracks(id:string) {
    this.loadingTopTracks = true;
    this.spotify.getTopTracks(id)
    .subscribe( topTracks => {
      // console.log(topTracks);
      this.topTracks = topTracks;
      this.loadingTopTracks = false;
    });
  }

}