import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noaudio'
})
export class NoAudioPipe implements PipeTransform {

  transform( audios:string ):any {

    if ( audios === null ) {
      return false;
    } else {
        return audios;
      }

  }
  
}