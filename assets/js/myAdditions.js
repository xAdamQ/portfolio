function downloadResume() {
  const url = 'your-file-url';
  const a = document.createElement('a');
  a.href = url;
  a.download = 'your-file-name';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}