function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('js-show');
		}
	});
}
let options = {
	threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.js-hide');
for (let elm of elements) {
	observer.observe(elm);
}


$(document).ready(function() {
    $('.gallary-block__show-more-btn').click(function () {
        $('.gallary-block__item:hidden').show(300);
        $('.gallary-block__item:hidden').length < 1 ? $('.gallary-block__show-more-btn').hide() : false;
    });
});
