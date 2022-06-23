import { FC, ReactNode } from "react";

const SubHeading: FC<{ children: ReactNode }> = ({ children }) => {
	return <p className="text-black text-2xl m-0 pb-2 text-center">{children}</p>;
};

export { SubHeading };
