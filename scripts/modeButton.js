document.body.classList.add(localStorage.getItem('theme') || 'light');

document.getElementById('toggle').textContent = (localStorage.getItem('theme') || 'light') == 'dark' ? 'Light Mode' : 'Dark Mode';

document.getElementById('toggle').addEventListener('click', function(){
    if(document.body.classList.contains('light')){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        document.getElementById('toggle').textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    }
    else{
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        document.getElementById('toggle').textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});