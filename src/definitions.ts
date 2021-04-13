declare module '@capacitor/core' {
  interface PluginRegistry {
    GalleryVideoPicker: GalleryVideoPickerPlugin;
  }
}

export enum PickerVideoType {
  CAMERA,
  GALLERY
}

export interface PickerVideoOptions {
  readonly sizeLimit: number;
  readonly textPermission: string;
  readonly textMaxVideoSize: string;
  readonly durationLimit: number;
}

export interface PickerVideoResults {
  readonly name: string;
  readonly size: number;
  readonly duration: number;
  readonly path: string;
  readonly type: string;
}

export interface PickerVideoPermissions {
  readonly permissionType: PickerVideoType;
}

export interface GalleryVideoPickerPlugin {
  getVideoFromGallery(options: PickerVideoOptions): Promise<PickerVideoResults>;
  getPermissions(options: PickerVideoPermissions): Promise<any>;
}
