import { FC, ReactNode } from "react";

enum FlexDirection {
	row = "row",
	col = "col",
}

const FlexDiv: FC<{ children: ReactNode; flexType: FlexDirection }> = ({ children, flexType }) => {
	let className = `${flexType === FlexDirection.row ? "flex-row justify-between space-x-4" : "flex-col space-y-4"}`;
	return <div className={`w-full flex flex-1 items-start ${className}`}>{children}</div>;
};

interface LineProps {
	width: string;
	height: string;
}

const Line: FC<LineProps> = ({ width, height }) => {
	return <div className={`${width} ${height} rounded bg-slate-400`} />;
};

export default function Loading() {
	return (
		<div className="w-full rounded-lg border-slate-900 p-8">
			<div className="animate-pulse flex flex-col space-y-2">
				<FlexDiv flexType={FlexDirection.row}>
					<div className="rounded-full w-12 h-12 bg-orange-500" />
					<FlexDiv flexType={FlexDirection.col}>
						<Line width="w-full" height="h-2" />
						<Line width="w-full" height="h-2" />
					</FlexDiv>
				</FlexDiv>
				<br />
				<FlexDiv flexType={FlexDirection.col}>
					<Line width="w-full" height="h-2" />
					<Line width="w-full" height="h-2" />
					<Line width="w-full" height="h-2" />
					<Line width="w-full" height="h-2" />
				</FlexDiv>
				<FlexDiv flexType={FlexDirection.row}>
					<Line width="w-full" height="h-2" />
					<Line width="w-full" height="h-2" />
					<Line width="w-full" height="h-2" />
					<Line width="w-full" height="h-2" />
				</FlexDiv>
			</div>
		</div>
	);
}
