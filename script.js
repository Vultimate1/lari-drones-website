function showPage(pageId) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  // show the one we want
  document.getElementById(pageId).classList.remove('hidden');
}