import { FC, ReactNode } from "react";

const CardViewer: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<section className="grid gap-8 w-full justify-center grid-cols-auto-300 md:grid-cols-auto-full">{children}</section>
	);
};

export default CardViewer;
