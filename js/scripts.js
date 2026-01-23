document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");

    if (!aboutSection) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("show");
            }
        },
        { threshold: 0.3 }
    );

    observer.observe(aboutSection);
});
