const Item = () => {
	return <div className="w-11/12 h-fit mx-auto p-2 text-sm rounded bg-orange-600 text-white">Item</div>;
};

const Sidebar = () => {
	return (
		<div className="h-full hidden bg-slate-700 rounded pt-5 sm:grid">
			<Item />
		</div>
	);
};

export default Sidebar;
