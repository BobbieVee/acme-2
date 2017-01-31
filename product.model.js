const _products = [
	{
		id: 1,
		product: 'Moe\'s Keychain'
	},
		{
		id: 2,
		product: 'Larry\'s Bible'
	},
			{
		id: 3,
		product: 'Curly\'s Fullstack T-shirt'
	}
];

const get = () => {return _products};

const add = (product) => {
	id = _products.reduce( (max, item) => {
		max = max <= item.id?item.id+1:max;
		return max;
	}, 0);
	_products.push({id: id, product: product});
	return id;
};

const edit = (product, id) => {
	_products[getIndex(id)] = {id: id, product: product}; 
};

const del = (id) => {
	_products.splice(getIndex(id),1);
}; 

const getIndex = (id) => {
	let prodIndex;
	_products.forEach((product, index) => {
		if (product.id === id) prodIndex = index;
	});
	return prodIndex;
};	

const getById = (id) => {
	return _products.filter((product) => {
		return (product.id === id);
	})[0]; 
};

module.exports = {
	get: get,
	add: add,
	edit: edit,
	delete: del,
	getById: getById
};