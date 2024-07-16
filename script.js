document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.buttonone');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });
});