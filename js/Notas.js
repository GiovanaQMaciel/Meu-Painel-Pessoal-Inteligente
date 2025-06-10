(function() {
  const textarea = document.getElementById('notas');
  const STORAGE_KEY = 'blocoNotasRapido';

  const savedNotes = localStorage.getItem(STORAGE_KEY);
  if (savedNotes) {
    textarea.value = savedNotes;
  }

  textarea.addEventListener('input', () => {
    localStorage.setItem(STORAGE_KEY, textarea.value);
  });
})();
