const allBtns = document.querySelectorAll('.post-title button');
const allPosts = document.querySelectorAll('.post-content');

allBtns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
        allPosts.forEach(function (post) {
            post.classList.remove('showPost');
        });
        allBtns.forEach(function (btn) {
            btn.classList.remove('activeBtn');
        });
this.classList.add('activeBtn');
allPosts[index].classList.add('showPost');
    });
});