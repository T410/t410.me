import NextHead from "next/head";
import { useRouter } from "next/router";

import { FC } from "react";

interface HeadProps {
	title: string;
	description?: string;
}
const Head: FC<HeadProps> = ({ title, description }) => {
	const { asPath } = useRouter();
	return (
		<NextHead>
			<title>{`${title}`}</title>
			<meta property="title" content={title} />
			<meta property="og:title" content={title} />
			<meta property="twitter:title" content={title} />
			<meta itemProp="name" content={title} />

			{description && (
				<>
					<meta name="description" content={description} />
					<meta name="og:description" content={description} />
					<meta name="twitter:description" content={description} />
					<meta itemProp="description" content={description} />
				</>
			)}
			<meta property="og:url" content={`https://t410.me${asPath}`} />

			<meta property="twitter:card" content="summary" />
			<meta property="twitter:url" content={`https://t410.me${asPath}`} />

			<meta property="og:type" content="website" />

			<meta property="og:image" content="https://t410.me/logo_big.png" />
			<meta property="twitter:image" content="https://t410.me/logo_big.png" />
			<meta itemProp="image" content="https://t410.me/logo_big.png" />

			<meta property="og:image:width" content="790" />
			<meta property="og:image:height" content="735" />
		</NextHead>
	);
};

export default Head;
