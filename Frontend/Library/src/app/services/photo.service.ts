import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, GalleryPhoto, Photo } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async takePhoto(): Promise<Photo> {
    const capturePhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
    return capturePhoto;
  }

  public async pickImage(): Promise<GalleryPhoto> {
    const capturePhotos = await Camera.pickImages({
      limit: 1,
      quality: 100
    });
    return capturePhotos.photos[0];
  }
}
