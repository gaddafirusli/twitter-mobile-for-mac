const path = require('path');
const {shell} = require('electron');
const fs = require('fs')

const webview = document.getElementById('twitter');
const loading = document.getElementById('loading');

webview.addEventListener('dom-ready', function(){
  webview.insertCSS(fs.readFileSync(path.join(__dirname, '/css/main.css'), 'utf8'));
});

webview.addEventListener('new-window', (event) => {
  event.preventDefault();
  shell.openExternal(event.url);
});

webview.addEventListener('did-start-loading', function(){
  loading.classList.add('isLoading');
});

webview.addEventListener('did-stop-loading', function(){
  loading.classList.remove('isLoading');
});
