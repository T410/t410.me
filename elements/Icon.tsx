import Image, { ImageProps } from "next/image";
import { FC } from "react";

const Icon: FC<ImageProps> = ({ src, alt, ...props }) => {
	const wh = "36" + "px";
	return <Image src={src} alt={alt} {...props} width={wh} height={wh} />;
};

export default Icon;
