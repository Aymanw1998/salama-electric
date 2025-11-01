const generateThumbnail = (videoUrl, at = 0.1) =>
  new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.preload = "metadata";
    video.muted = true;
    video.playsInline = true;

    video.addEventListener("loadedmetadata", () => {
      const t = Math.min(at, (video.duration || at) - 0.01);
      try { video.currentTime = t > 0 ? t : 0; } catch {}
    });

    video.addEventListener("seeked", () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        resolve({
          posterUrl: canvas.toDataURL("image/png"),
          w: video.videoWidth,
          h: video.videoHeight,
        });
      } catch (e) { reject(e); }
    });

    video.addEventListener("error", reject);
  });

function importAll(r) {
  const entries = r.keys().map((item, index) => {
    const url = r(item);
    return generateThumbnail(url)
      .catch(() => ({ posterUrl: "/images/poster-placeholder.jpg", w: 16, h: 9 }))
      .then(({ posterUrl, w, h }) => ({
        id: index,
        index,
        type: "video",
        title: item.replace("./", ""),
        poster: posterUrl,
        w, h,                        // נשמור יחס
        sources: [{ src: url, type: "video/mp4" }],
      }));
  });
  return Promise.all(entries);
}

// ייצוא פונקציה אסינכרונית שמחזירה Promise<Array>
export const loadVideos = () =>
  importAll(require.context("../../images/proj-images", false, /\.(mp4)$/));
