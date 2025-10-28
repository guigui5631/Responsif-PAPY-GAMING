document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {

            const wasOpen = item.classList.contains('is-open');

            faqItems.forEach(otherItem => {
                otherItem.classList.remove('is-open');
            });


            if (!wasOpen) {
                item.classList.add('is-open');
            }
        });
    });

})