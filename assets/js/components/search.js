document.addEventListener("DOMContentLoaded", () =>{

    const input = document.querySelector('.search-bar input');

    const listItems = document.querySelectorAll('.game-offer-card');
        input.addEventListener('input', () => {
        const query = input.value.toLowerCase();

        listItems.forEach(item => {
            item.style.display = item.textContent.toLowerCase().includes(query) ? 'block' : 'none';
        });

    });

});