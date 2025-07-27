function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
function confirmTransfer() {
    document.getElementById('confirmationMessage').style.display = 'block';
    return false;
}