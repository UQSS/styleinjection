var css = document.createElement('link'); 
    css.type = 'text/css'; 
    css.href = 'https://raw.github.com/UQSS/styleinjection/master/custom.css';
    css.media = 'all';
    css.rel = 'stylesheet';
    var link = document.getElementsByTagName('title')[0]; 
    link.parentNode.insertBefore(css, link);