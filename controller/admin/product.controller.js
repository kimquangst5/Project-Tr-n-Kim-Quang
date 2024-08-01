const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {

	let find = {
		deleted: false
	};

	if(req.query.status){
		find.status = req.query.status
	}

	const product = await Product.find(find);

	res.render('admin/pages/product/index.pug', {
		pageTitle: 'Trang sản phẩm',
		product: product
	});
};