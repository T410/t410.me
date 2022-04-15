const Item = () => {
	return <div className="w-full h-fit mx-auto p-2 text-sm rounded bg-navy-600 text-white">Item</div>;
};

const Sidebar = () => {
	return (
		<div className="h-full hidden bg-navy-700 pt-5 px-2 sm:grid">
			<Item />
		</div>
	);
};

export default Sidebar;
