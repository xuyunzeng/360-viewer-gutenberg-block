import { __ } from "@wordpress/i18n";
import { Panel, PanelBody, PanelRow, Button } from "@wordpress/components";
import {
  useBlockProps,
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from "@wordpress/block-editor";

export default (props) => {
  const {
    attributes: { mediaId, mediaUrl },
    className,
    setAttributes,
  } = props;

  const onSelectMedia = (media) => {
    setAttributes({
      mediaId: media.id,
      mediaUrl: media.url,
    });
  };

  return (
    <div>
      <InspectorControls key="setting">
        <Panel>
          <PanelBody title="Thumbnail">
            <PanelRow>
              <MediaUploadCheck>
                <MediaUpload
                  onSelect={onSelectMedia}
                  value={mediaId}
                  allowedTypes={["image"]}
                  render={({ open }) => (
                    <Button
                      className={
                        mediaId == 0
                          ? "editor-post-featured-image__toggle"
                          : "editor-post-featured-image__preview"
                      }
                      onClick={open}
                    >
                      {mediaId === 0 ? (
                        __("Choose an image", "bdg")
                      ) : (
                        <img
                          src={mediaUrl}
                          style={{ height: "100%", width: "100%" }}
                        />
                      )}
                    </Button>
                  )}
                />
              </MediaUploadCheck>
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>
      <div className="">
        <img src={mediaUrl} />
      </div>
    </div>
  );
};
