// function getSelectedClip(videoTracks: TrackCollection | null): TrackItem {
//   if (videoTracks) {
//     for (let i = 0; i < videoTracks.numTracks; i++) {
//       let currentTrack = videoTracks[i].clips;
//       for (let clipIndex = 0; clipIndex < currentTrack.numItems; clipIndex++) {
//         let currentClip = currentTrack[clipIndex];
//         if (currentClip.isSelected()) {
//           return currentClip;
//         }
//       }
//     }
//     throw new Error("is not selected clip");
//   }
//   throw new Error("videoTracks is null");
// }

// const project: Project = app.project;
// const seq = project.activeSequence;
// const videoTracks = seq.videoTracks;
// const clip = getSelectedClip(videoTracks);
// const projectItem: ProjectItem = clip.projectItem;
// const footage = projectItem.getFootageInterpretation();
