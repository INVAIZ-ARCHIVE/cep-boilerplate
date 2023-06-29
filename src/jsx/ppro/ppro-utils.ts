export const getProjectFrame = () => {
  const project: Project = app.project;
  const seq = project.activeSequence;
  const videoTracks = seq.videoTracks;
  const clip = getSelectedClip(videoTracks);
  const projectItem: ProjectItem = clip.projectItem;
  const footage = projectItem.getFootageInterpretation();
  return footage.frameRate;
};

export const getSequenceFrame = (): FrameObject => {
  const seq = app.project.activeSequence;
  const setting = seq.getSettings();
  const previewFrameWidth = setting.previewFrameWidth;
  const previewFrameHeight = setting.previewFrameHeight;
  const frameObj = {
    width: previewFrameWidth,
    height: previewFrameHeight,
  };
  return frameObj;
};

export const getSelectedClip = (videoTracks: TrackCollection | null): TrackItem => {
  if (videoTracks) {
    for (let i = 0; i < videoTracks.numTracks; i++) {
      let currentTrack = videoTracks[i].clips;
      for (let clipIndex = 0; clipIndex < currentTrack.numItems; clipIndex++) {
        let currentClip = currentTrack[clipIndex];
        if (currentClip.isSelected()) {
          return currentClip;
        }
      }
    }
    throw new Error("is not selected clip");
  }
  throw new Error("videoTracks is null");
};

export const getActiveVideoTrackIndex = (videoTracks: TrackCollection | null): number => {
  if (videoTracks) {
    for (let i = 0; i < videoTracks.numTracks; i++) {
      let currentTrack = videoTracks[i].clips;
      for (let j = 0; j < currentTrack.numItems; j++) {
        let currentClip = currentTrack[j];
        if (currentClip.isSelected()) {
          return i;
        }
      }
    }
  }

  throw new Error("is not selected clip");
};
