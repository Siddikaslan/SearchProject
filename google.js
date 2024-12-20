function searchGoogle(){
    const query = document.getElementById('search-input').value;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');}

function feelingLucky(){
    const query = document.getElementById('search-input').value;
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
    window.open(url, '_blank');}

function searchImages(){
    const query = document.getElementById('search-input').value;
    const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
    window.open(url, '_blank');}