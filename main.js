'use strict'

function openExpress() {
  const priceLinks = document.querySelectorAll('.price');
  const display = document.querySelector('.text');
  for (let link of priceLinks) {
    link.addEventListener('click', function(){
      console.log(link.textContent);
    })
  }
}

function main() {
  openExpress();
}

document.addEventListener('DOMContentLoaded', main)