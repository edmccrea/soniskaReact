//Accordion

const accordions = document.querySelectorAll('.faq-accordion')

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function() {
        this.classList.toggle('faq-active');
        let panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
            this.style.borderBottom = '1px solid #555'
        } else {
            panel.style.display = 'block';
            panel.style.borderBottom = '1px solid #555'
            this.style.borderBottom = 'none'
        }

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }


    });
}