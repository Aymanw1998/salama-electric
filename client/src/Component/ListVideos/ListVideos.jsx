import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// ייבוא תוספים – כל תוסף מהנתיב שלו
import Captions from "yet-another-react-lightbox/plugins/captions";
import Download from "yet-another-react-lightbox/plugins/download";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { loadVideos } from "./data";

const VideoDisplay = ({ slides, onClick }) => {
  const isMobile = useMediaQuery("(max-width:600px)");

    const containerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: isMobile ? "center" : "flex-start",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 20,
    gap: 20,
  };

  const thumbStyle = {
    width: window.innerWidth * (isMobile ? 1 : 0.3),
    height: window.innerHeight * (isMobile ? 0.5 : 0.6),
    borderRadius: 12,
    objectFit: "contain",
    cursor: "pointer",
  };

  const playOverlay = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    background: "rgba(0,0,0,0.5)",
    borderRadius: "50%",
    width: 60,
    height: 60,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 30,
    pointerEvents: "none", // שלא יתפוס קליקים
  };

  const videoCard = {
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  };



  return (
    <div style={containerStyle}>
      {slides.map((s, idx) => (
        <div
          key={idx}
          style={videoCard}
          onClick={() => onClick(idx)}
          aria-label={s.title}
        >
          <img src={s.poster} alt={s.title} style={thumbStyle} />
          <div style={playOverlay}>▶</div>
        </div>
      ))}
    </div>
  );
};

const ListVideos = () => {
  const [slides, setSlides] = useState([]);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    let alive = true;
    loadVideos().then((arr) => { if (alive) setSlides(arr); });
    return () => { alive = false; };
  }, []);

  return (
    <>
      <VideoDisplay slides={slides} onClick={(i) => setIndex(i)} />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails, Video]}
        slides={slides}
        carousel={{ finite: true }}
        controller={{ closeOnBackdropClick: true }}
        render={{
          buttonDownloadFileName: ({ slide, index: i }) =>
            slide.title ? `${slide.title}.mp4` : `video-${i + 1}.mp4`,
        }}
      />
    </>
  );
};

export default ListVideos;
