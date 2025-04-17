document.addEventListener('DOMContentLoaded', () => {
    // Make all content sections visible immediately
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('is-visible');
    });

    // Keep the Intersection Observer for future use if needed
    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Already added the class above, but keep this for future use
                entry.target.classList.add('is-visible');
                // Optional: Stop observing the element once it's visible
                // observer.unobserve(entry.target);
            }
            // Optional: Remove class if element scrolls out of view
            // else {
            //     entry.target.classList.remove('is-visible');
            // }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
