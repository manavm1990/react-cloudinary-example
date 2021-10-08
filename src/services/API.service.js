import config from "@app/utils/config";
import ky from "ky";

const BASE_URL = `https://api.cloudinary.com/v1_1/${config.cloudinary.cloudName}/upload`;

export default {
  async create(payload) {
    // Will hold uploaded file contents
    const fd = new FormData();

    // https://codepen.io/team/Cloudinary/pen/QgpyOK?editors=1010
    fd.append("upload_preset", config.cloudinary.uploadPreset);
    fd.append("file", payload);

    return ky
      .post(BASE_URL, {
        body: fd,
      })
      .json();
  },
};
