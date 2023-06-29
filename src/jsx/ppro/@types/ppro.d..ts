//@ts-ignore
declare interface FrameObject {
  width: number;
  height: number;
}

declare interface LumetriProps {
  category: "BasicCorrection" | "Creative" | "Curves" | "HSLSecondary" | "Vignette";
  property: string;
}

declare interface PPRO_Utils {
  getProjectFrame(): number;
  getSequenceFrame(): FrameObject;
  getSelectedClip(videoTracks: TrackCollection | null): TrackItem;
  getActiveVideoTrackIndex(videoTracks: TrackCollection | null): number;
  getVersion: () => number;
  findEffect: (clipComponents: ComponentCollection, matchName: string) => void;
}
