//Chrome Extension Specific JS to enable Search button
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("button").addEventListener("click", HTMLFunc);
})

//Search Box JS
function HTMLFunc() {
    var search = document.getElementById("search").value;
    if (search.length > 0) {
        var win = window.open('https:www.reddit.com/r/' +
            search.split(' ')[0] + '/search?q=' + search.split(' ').splice(1, 999).join(' ') + '&restrict_sr=on&sort=relevance&t=all');
        if (win) {
            win.focus();
        }
    }
}