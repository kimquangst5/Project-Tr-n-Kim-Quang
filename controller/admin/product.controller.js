const Product = require('../../models/product.model');

module.exports.index = async (req, res) => {

	let find = {
		deleted: false
	};

	const filterStatus = [
		{
			lable: 'tất cả',
			value: ''
		},
		{
			lable: 'hoạt động',
			value: 'active'
		},
		{
			lable: 'dừng hoạt động',
			value: 'inactive'
		}
	];

	if(req.query.status){
		find.status = req.query.status
	}

	// Tính Năng Tìm Kiếm Cơ Bản
	let keyword = '';
	if(req.query.keyword){
		const regex = new RegExp(req.query.keyword, 'i')
		find.title = regex;
		keyword = req.query.keyword
	}
	// Hết Tính Năng Tìm Kiếm Cơ Bản

	const product = await Product.find(find);

	res.render('admin/pages/product/index.pug', {
		pageTitle: 'Trang sản phẩm',
		product: product,
		keyword: keyword,
		filterStatus: filterStatus
	});
};