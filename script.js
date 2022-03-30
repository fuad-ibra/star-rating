const stars = document.querySelectorAll('.rating__star');
const value = document.querySelector('.rating__value');

stars.forEach((item, i) => {
	item.addEventListener('click', () => {
		stars.forEach((elem, j) => {
			if (j <= i) {
				elem.classList.add('active');
				value.innerHTML = j + 1;
			} else {
				elem.classList.remove('active');
			}
		});
	});
});



