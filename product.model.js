const _products = [
	{
		id: 1,
		product: 'Mo\'s Keychain'
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
	let prodIndex = 0;
	 _products.forEach((product, index) => {
	 	console.log('index, product.id, id = ', index, product.id, id)
		if (product.id === id*1) {
			prodIndex = index;
		}
	});
	console.log('_products index = ', prodIndex)
	_products[prodIndex] = {id: id, product: product}; 
}

module.exports = {
	get: get,
	add: add,
	edit: edit
};