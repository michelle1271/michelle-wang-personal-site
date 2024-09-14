const menu = document.getElementById('menu');
const close = document.getElementById('close');

menu.addEventListener('click', function(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
})

close.addEventListener('click', function(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
})

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

