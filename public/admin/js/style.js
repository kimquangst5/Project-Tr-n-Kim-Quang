const buttonStatus = document.querySelectorAll(`button[button-status]`);

if(buttonStatus.length > 0){
	const url = new URL(window.location.href);
	buttonStatus.forEach(button => {
		button.addEventListener('click', () => {
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

// Form Search
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
