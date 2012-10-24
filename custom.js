var css = document.createElement('link'); 
    css.type = 'text/css'; 
    css.href = 'http://www.philiptutty.com/uqsss/custom.css';
    css.media = 'all';
    css.rel = 'stylesheet';
    var link = document.getElementsByTagName('title')[0]; 
    link.parentNode.insertBefore(css, link);