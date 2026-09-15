import * as React from "react";

/**
 * @typedef {React.ImgHTMLAttributes<HTMLImageElement> & {
 *   fittingType?: string, originWidth?: number, originHeight?: number,
 *   focalPointX?: number, focalPointY?: number, quality?: number
 * }} ImageProps
 */

// All site images are local. Preserve the exported component interface and crop.
const Image = React.forwardRef(
  /** @param {ImageProps} props @param {React.ForwardedRef<HTMLImageElement>} ref */
  function Image({ src, fittingType = "fill", originWidth, originHeight,
    focalPointX, focalPointY, quality, style, onError, ...props }, ref) {
    const [failedSrc, setFailedSrc] = React.useState(null);
    const failed = failedSrc === src;
    return <img {...props} ref={ref}
      src={failed ? "/brand/elegance-logo.png" : src}
      width={props.width || originWidth} height={props.height || originHeight}
      style={{ objectFit: fittingType === "fit" ? "contain" : "cover",
        ...(typeof focalPointX === "number" && typeof focalPointY === "number"
          ? { objectPosition: `${focalPointX}% ${focalPointY}%` } : {}), ...style }}
      data-error-image={failed || undefined}
      onError={(event) => { if (!failed) { setFailedSrc(src); onError?.(event); } }} />;
  }
);
Image.displayName = "Image";
export { Image };
