// All pages code
const linkAll = document.getElementById("all")
const linkWebSites = document.getElementById('websites')
const linkContacts = document.getElementById('contacts')

linkAll.addEventListener('click', () => {
    window.location.href="../html/all.html"
})

linkWebSites.addEventListener('click', () => {
    window.location.href = "../html/websites.html";
})

linkContacts.addEventListener('click', () => {
    window.location.href="../html/contacts.html"
})
