const router = require('express').Router();
const products = require('../product.model') ;
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

router.use(bodyParser.urlencoded({extended: false}));
router.use(methodOverride('_method'));
router.get('/', (req,res,next) => {
	res.render('index');
});

router.get('/products', (req, res, next) => {
	res.render('products', {products: products.get()});
});

router.post('/products', (req, res, next) => {
	const product = req.body.product;
	products.add(product);
	res.redirect('/products');
});

router.get('/products/add',(req, res, next) => {
	res.render('add');
});

router.get('/products/:id/edit', (req, res, next) => {
	const id = req.params.id;
	res.render('edit', {id: id})
});

router.put('/products/:id/', (req, res, next) => {
	const id = req.params.id;
	const product = req.body.product;
		console.log('put for product, id = ', product, id)
	products.edit(product,id);

	res.redirect('/products'); 
});



module.exports = router;