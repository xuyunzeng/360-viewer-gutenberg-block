import { useBlockProps } from "@wordpress/block-editor";

export default (props) => {
  const {
    attributes: { mediaUrl },
  } = props;

  return (
    <div className="pano-container alignfull" pano={mediaUrl}>
      {" "}
    </div>
  );
};
