import { FC, ReactNode } from "react";

const Tag: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="dark:bg-dark-background bg-light-background border dark:border-dark-lightBorderColor border-light-lightBorderColor rounded-lg text-base py-0.4rem px-0.6rem font-semibold dark:text-dark-brightFont text-light-brightFont hover:!text-accent hover:!border-accent cursor-default">
			<p className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-tagTo">{children}</p>
		</div>
	);
};

export default Tag;
