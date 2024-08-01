const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {
	const product = await Product.find({
		deleted: false
	});

	res.render('admin/pages/product/index.pug', {
		pageTitle: 'Trang sản phẩm',
		product: product
	});
};