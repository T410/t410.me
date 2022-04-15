export default function Loading() {
	return (
		<div className="card bg-neutral-900 shadow w-full">
			<div className="animate-pulse flex space-x-4">
				<div className="rounded-full bg-slate-700 h-10 w-10"></div>
				<div className="flex-1 space-y-12 py-1">
					<div className="h-2 bg-slate-700 rounded"></div>
					<div className="space-y-3">
						<div className="grid grid-cols-4 grid-rows-4 gap-4">
							<div className="h-2 bg-slate-700 rounded col-span-3"></div>
							<div className="h-2 bg-slate-700 rounded col-span-1"></div>
							<div className="h-16 w-full rounded bg-slate-700 col-span-2 sm:col-span-1 row-span-3"></div>
							<div className="h-2 bg-slate-700 rounded col-span-2 sm:col-span-3"></div>
							<div className="h-2 bg-slate-700 rounded col-span-1 sm:col-span-3"></div>
							<div className="h-2 bg-slate-700 rounded col-span-1"></div>
							<div className="h-2 bg-slate-700 rounded col-span-2"></div>
							<div className="h-2 bg-slate-700 rounded col-span-4 row-span-1"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
