document.addEventListener('DOMContentLoaded', function() {
  const helloButton = document.getElementById('hello-button');

  helloButton.addEventListener('click', function() {
    const obsidianUri = 'obsidian://google-jules-connector?action=hello';
    window.open(obsidianUri, '_self');
  });
});
