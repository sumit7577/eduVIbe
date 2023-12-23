import { videoDetailsType } from "@/networking/types";


const BASE_BUNNY = "https://iframe.mediadelivery.net/embed/"
const EMBED = "?autoplay=true&loop=false&muted=false&preload=true&responsive=true"

export const videoLinkCreator = (data: videoDetailsType) => {
  return BASE_BUNNY + data.videoLibraryId + "/" + data.guid + EMBED

}

export function fancyTimeFormat(duration: number) {
  // Hours, minutes and seconds
  const hrs = ~~(duration / 3600);
  const mins = ~~((duration % 3600) / 60);
  const secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  let ret = "";

  if (hrs > 0) {
    ret += "" + hrs + " hrs " + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + " mins " + (secs < 10 ? "0" : "");
  ret += "" + secs + " sec";

  return ret;
}