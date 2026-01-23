document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");

    // Safety check: stop if element doesn't exist
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                aboutSection.classList.add("show");
                // Stop observing once shown so it doesn't fade out again
                observer.unobserve(aboutSection);
            }
        },
        { 
            threshold: 0.3, // Trigger when 30% of element is visible
            rootMargin: "0px" 
        }
    );

    observer.observe(aboutSection);
});
