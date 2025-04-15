window.onscroll = function () {
    const btn = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};
document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // 只触发一次
        }
    });
});

document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
});
