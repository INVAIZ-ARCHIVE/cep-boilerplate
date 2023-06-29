app.enableQE();

const PPRO_LumetriColor: PPRO_LumetriColor = {
  modifyColor: function (props, diff) {
    const project: Project = app.project;
    const seq = project.activeSequence;
    const videoTracks = seq.videoTracks;
    const clip: TrackItem = PPRO_Utils.getSelectedClip(videoTracks);
    if (!clip) throw new Error("please select clip");

    const clipComponents = clip.components;
    const matchName = "AE.ADBE Lumetri" as const;
    let language = "";
    let effectName = "";
    switch (qe?.language) {
      case "ko_KR":
        language = "ko_KR";
        effectName = "Lumetri 색상";
        break;
      case "ja_JP":
        language = "ja_JP";
        effectName = "Lumetri カラー";
        break;
      default:
        language = "en_US";
        effectName = "Lumetri Color";
        break;
    }

    const targetProps: LumetriProps = {
      category: "BasicCorrection",
      property: "Temperature",
    };

    let isExist = false;
    let compIndex = -1;

    for (let i = 0; i < clipComponents.numItems; i++) {
      if (clipComponents[i].matchName === matchName) {
        isExist = true;
        compIndex = i;
      }
    }

    const targetEffect = clipComponents[compIndex];

    for (let propsIndex = 0; propsIndex < targetEffect.properties.numItems; propsIndex++) {
      let categoryName = targetEffect.properties[propsIndex].displayName;
      const { category, property } = targetProps;
      if (categoryName === category) {
        for (let targetIndex = propsIndex + 1; targetIndex < targetEffect.properties.numItems; targetIndex++) {
          let targetProperty = targetEffect.properties[targetIndex];
          if (targetProperty.displayName === property) {
            if (!targetProperty.isTimeVarying()) {
              // 로직
            }
          } else {
            // 로직
          }
        }
      }
    }
  },
};
