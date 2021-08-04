//acc
let accTitles = document.querySelectorAll('.js-acc-title');
let accContents = document.querySelectorAll('.js-acc-content');

Array.prototype.forEach.call(accTitles, function (accTitle) {
    accTitle.addEventListener('click', function (e) {
        if (!(e.target.parentNode.classList.contains('acc__item--active'))) {
            // Array.prototype.forEach.call(accTitles, function (accTitle) {
            //     accTitle.parentNode.classList.remove('acc__item--active');
            // })
            e.target.parentNode.classList.add('acc__item--active');
        } else {
            e.target.parentNode.classList.remove('acc__item--active');
        }
    });
});