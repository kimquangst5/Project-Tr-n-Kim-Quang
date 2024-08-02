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

	// Pagination
	const pagination = {
		current: 1,
		limit: 4
	};

	if(req.query.page){
		pagination.current = parseInt(req.query.page);
	}

	
	pagination.skip = (pagination.current - 1) * pagination.limit
	
	pagination.cntProduct = await Product.countDocuments(find);
	if(pagination.cntProduct > 0){
		pagination.totalPage = Math.ceil(pagination.cntProduct / pagination.limit);
	}
	
	// Hết Pagination
	
	const product = await Product
	.find(find)
	.limit(pagination.limit)
	.skip(pagination.skip)
	
	res.render('admin/pages/product/index.pug', {
		pageTitle: 'Trang sản phẩm',
		product: product,
		keyword: keyword,
		filterStatus: filterStatus,
		pagination: pagination
	});
};