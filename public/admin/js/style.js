const buttonStatus = document.querySelectorAll(`button[button-status]`);

if(buttonStatus.length > 0){
	const url = new URL(window.location.href);
	buttonStatus.forEach(button => {
		button.addEventListener('click', () => {
			url.searchParams.set('page', 1);
			const status = button.getAttribute('button-status');
			if(status){
				url.searchParams.set('status', status);
			}
			else url.searchParams.delete('status');
			window.location.href = url.href;
		});
	});

	const statusCurrent = url.searchParams.get('status') || '';
	const buttonCurrent = document.querySelector(`button[button-status = '${statusCurrent}' ]`);
	if(buttonCurrent){
		buttonCurrent.classList.add('bg-[#4BC18F]', 'text-[white]')
	}
}

// Tìm kiếm
const formSearch = document.querySelector(`form[form-search]`);

if(formSearch){
	formSearch.addEventListener('submit', (event) => {
		event.preventDefault();
		let value = event.target.elements.keyword.value;
		let url = new URL(window.location.href);
		if(value){
			url.searchParams.set('keyword', value);
		}
		else{
			url.searchParams.delete('keyword');
		}
		window.location.href = url.href;
	});
}
// Hết Tìm kiếm

// Pagination
const buttonPage = document.querySelectorAll(`[button-page]`);
if(buttonPage.length > 0){
	const url = new URL(window.location.href);
	buttonPage.forEach(button => {
		button.addEventListener('click', () => {
			const value = button.getAttribute('button-page');
			if(value){
				url.searchParams.set('page', value);
			}
			else{
				url.searchParams.delete('page');
			}
			window.location.href = url.href;
		});
	});

	const currentPage = url.searchParams.get('page') || '1';
	if(currentPage){
		const buttonCurrentPage = document.querySelector(`[button-page = '${currentPage}']`);
		buttonCurrentPage.classList.add('bg-[#FA6B04]', 'text-[white]')
	}

	const vetrang1 = document.querySelector('[vetrang1]');
	if(vetrang1){
		vetrang1.addEventListener('click', () => {
			url.searchParams.delete('page');
			window.location.href = url.href;
		});
	}

	const quayvetrang = document.querySelector('[quayvetrang]');
	if(quayvetrang){
		quayvetrang.addEventListener('click', () => {
			const current = quayvetrang.getAttribute('quayvetrang');
			url.searchParams.set('page', parseInt(current) - 1);
			window.location.href = url.href;
		});
	}

	const page1 = url.searchParams.get('page');
	if(page1 == 1){
		url.searchParams.delete('page');
		window.location.href = url.href;
	}

	const vecuoitrang = document.querySelector('[vecuoitrang]');
	if(vecuoitrang){
		vecuoitrang.addEventListener('click', () => {
			const total = vecuoitrang.getAttribute('vecuoitrang');
			url.searchParams.set('page', total);
			window.location.href = url.href;
		});
	}

	const tientoitrang = document.querySelector('[tientoitrang]');
	if(tientoitrang){
		tientoitrang.addEventListener('click', () => {
			const current = tientoitrang.getAttribute('tientoitrang');
			url.searchParams.set('page', parseInt(current)  + 1);
			window.location.href = url.href;
		});
	}

	
}
let url = new URL(window.location.href);
console.log(url);

const pageTim = url.searchParams.get('page');
console.log(pageTim);

const vecuoitrang = document.querySelector('[vecuoitrang]');
const total = vecuoitrang.getAttribute('vecuoitrang');
console.log(total);

if(parseInt(pageTim) < 1 || parseInt(pageTim) > parseInt(total)){
	url.searchParams.set('page', 1);
	window.location.href = url.href;
}
// Pagination