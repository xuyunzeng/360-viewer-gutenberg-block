import { registerBlockType } from "@wordpress/blocks";
import edit from "./edit";
import save from "./save";
import "./style.css";

registerBlockType("bdg/pano", {
  title: "Pano Viewer",
  icon: "smiley",
  category: "media",
  attributes: {
    mediaId: {
      type: "number",
      default: 0,
    },
    mediaUrl: {
      type: "string",
      default: "",
    },
  },
  edit,
  save,
});
