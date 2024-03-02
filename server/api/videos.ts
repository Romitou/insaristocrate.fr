import { defineEventHandler } from 'h3';
import { videos } from '~/events.config.ts';

export default defineEventHandler(async (event) => {
  let videosList = [];
  for (const video of videos) {
    if (Date.now() >= video.showDate) {
      videosList.push({
        id: video.id,
        name: video.name,
        cdnLink: video.cdnLink,
        youtube: video.youtube,
      })
    } else {
      videosList.push({
        id: video.id,
        name: video.name,
        cdnLink: 'https://media.insaristocrate.fr/tv-noise.mp4',
        showDate: video.showDate,
      })
    }
  }

  videosList = videosList.sort((a, b) => {
    return a.showDate - b.showDate;
  });

  return videosList;
})
