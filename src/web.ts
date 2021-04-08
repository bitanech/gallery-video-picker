import { WebPlugin } from '@capacitor/core';
import { GalleryVideoPickerPlugin, PickerVideoOptions, PickerVideoResults } from './definitions';

export class GalleryVideoPickerWeb extends WebPlugin implements GalleryVideoPickerPlugin {
  constructor() {
    super({
      name: 'GalleryVideoPicker',
      platforms: ['web'],
    });
  }

  async getVideoFromGallery(options: PickerVideoOptions): Promise<PickerVideoResults> {
    console.log(options);
    return { duration: 0, name: 'Unsupported', path: 'Unsupported', size: 0, type: 'Unsupported' };
  }
}

const GalleryVideoPicker = new GalleryVideoPickerWeb();

export { GalleryVideoPicker };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(GalleryVideoPicker);
