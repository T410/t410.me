const Item = () => {
	return <div className="w-11/12 h-fit mx-auto p-2 text-sm rounded bg-navy-600 text-white">Item</div>;
};

const Sidebar = () => {
	return (
		<div className="h-full hidden bg-navy-700 pt-5 sm:grid">
			<Item />
		</div>
	);
};

export default Sidebar;
