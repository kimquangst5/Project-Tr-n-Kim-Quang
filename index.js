const express = require('express');
require('dotenv').config();
const port = process.env.port;

// Khởi Chạy Ứng Dụng
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

// App Locals Variables
app.locals.admin = process.env.admin

// Route bên Client
const clientRoute = require('./routes/client/index.route');
clientRoute.index(app);

// Route bên Admin
const adminRoute = require('./routes/admin/index.route');
adminRoute.index(app);

// Nhúng File Tĩnh
app.use(express.static('public'));

// Database
const mongoose = require('./config/database');
mongoose.connect();

app.listen(port, () => {
	console.log(`Đang lắng nghe cổng ${port}`);
});