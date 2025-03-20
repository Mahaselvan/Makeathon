// Optional: Add functionality to handle dropdown interactions
document.getElementById('search-bar').addEventListener('input', function() {
    const dropdown = document.getElementById('dropdown');
    const searchText = this.value.toLowerCase();

    // Filter dropdown options based on search input
    Array.from(dropdown.getElementsByTagName('a')).forEach(option => {
        if (option.textContent.toLowerCase().includes(searchText)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
});