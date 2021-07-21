// Hide the navbar on scroll down, show it again on scroll up.
let prevScrollpos = window.pageYOffset,
	header = document.querySelector('#header');

window.addEventListener('scroll', () => {
	const currentScrollPos = window.pageYOffset;

	if (prevScrollpos > currentScrollPos) {
		header.style.transform = 'translateY(0)';
		header.style.transition = 'transform 500ms ease-out';
	} else {
		header.style.transform = 'translateY(-100px)';
		header.style.transition = 'transform 500ms ease-out';
	}
	prevScrollpos = currentScrollPos;
});

// Gallery filter
const homePage = document.querySelector('#home-page');

if (document.body === homePage) {
	const buttons = document.querySelectorAll('.filter-btn'),
		placeholders = document.querySelectorAll('.placeholder');

	buttons.forEach((button) => {
		button.addEventListener('click', () => {
			for (let i = 0; i < buttons.length; i++) {
				buttons[i].classList.remove('active');
			}
			button.classList.add('active');

			placeholders.forEach((placeholder) => {
				placeholder.style.display = 'none';

				let filterName = button.textContent;

				if (
					placeholder.getAttribute('data-filter') === filterName ||
					filterName === 'All'
				) {
					placeholder.style.display = 'block';
				}
			});
		});
	});

	// Initialize tobii lightbox
	const tobii = new Tobii({
		zoom: false,
	});

	// Sharing links
	const toggle = document.querySelector('.toggle');

	toggle.addEventListener('click', () => {
		const sharingLinks = document.querySelectorAll('.sharing-link');

		for (let i = 0; i < sharingLinks.length; i++) {
			sharingLinks[i].classList.toggle('open');
		}
	});

	// SCROLL back to top
	const scrollToTop = document.querySelector('.scrollButton');

	window.addEventListener('scroll', () => {
		// share button
		if (
			document.body.scrollTop > 1000 ||
			document.documentElement.scrollTop > 1000
		) {
			toggle.style.display = 'initial';
		} else {
			toggle.style.display = 'none';
		}

		// scrollToTop button
		if (
			document.body.scrollTop > 1500 ||
			document.documentElement.scrollTop > 1500
		) {
			scrollToTop.style.display = 'block';
		} else {
			scrollToTop.style.display = 'none';
		}
	});

	scrollToTop.addEventListener('click', () => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
}

// Textarea auto resize
const aboutHome = document.querySelector('#about-home');

if (document.body === aboutHome) {
	(function autoResize() {
		const textArea = document.querySelector('[data-autoresize]'),
			offset = textArea.offsetHeight - textArea.clientHeight;

		textArea.addEventListener('input', (e) => {
			e.target.style.height = 'auto';
			e.target.style.height = e.target.scrollHeight + offset + 'px';
		});
	})();
}

// Date
const currentYear = document.querySelector('#currentYear');
currentYear.innerText = new Date().getFullYear();
