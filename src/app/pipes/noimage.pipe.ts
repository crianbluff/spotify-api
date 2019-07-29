import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( item:any ):string {

    if ( !item.images && item.album ) {
      return item.album.images[0].url;
    }

    if ( item.images.length > 0 || !item.images ) {
      return item.images[0].url;
    } else {
        return 'assets/images/noimage.png';
      }

  }
  
}