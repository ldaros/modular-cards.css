
function checkStorage() {
    let colormode = window.localStorage.getItem('colormode');

    if (colormode == 'light') return setLight()
    if (colormode == 'dark') return setDark() 

    // checks if the system is in dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return setDark()
    
    setLight()
};

function setDark() {
    let root = document.querySelector(':root').style;
    document.getElementById("checkbox").checked = true;

    root.setProperty('--main-bg', '#202124');
    root.setProperty('--navbar-bg', '#2E2F32');
    root.setProperty('--navbar-text', '#FFFFFF');
    root.setProperty('--navbar-links', '#DADADA');
    root.setProperty('--navbar-link-h', '#FFFFFF');
    root.setProperty('--sidenav-bg', '#2E2F32');
    root.setProperty('--sidenav-menu-bg', '#292A2E');
    root.setProperty('--sidenav-menu-text', '#FFFFFF');
    root.setProperty('--sidenav-menu-hover', '#FFFFFF');
    root.setProperty('--sidenav-copyright', '#BBBBBB');
    root.setProperty('--card-bg', '#28292A');
    root.setProperty('--card-text', '#F2F2F2');
    window.localStorage.setItem('colormode', 'dark');
    return
} 

function setLight() {
    let root = document.querySelector(':root').style;
    document.getElementsByName("checkbox").checked = true;

    root.setProperty('--main-bg', '#dedede');
    root.setProperty('--navbar-bg', '#f8f8f8');
    root.setProperty('--navbar-text', '#000000');
    root.setProperty('--navbar-links', '#686868');
    root.setProperty('--navbar-link-h', '#000000');
    root.setProperty('--sidenav-bg', '#eae9e9');
    root.setProperty('--sidenav-menu-bg', '#f2f2f2');
    root.setProperty('--sidenav-menu-text', '#222222');
    root.setProperty('--sidenav-menu-hover', '#000000');
    root.setProperty('--sidenav-copyright', '#7e7e7e');
    root.setProperty('--card-bg', '#ffffff');
    root.setProperty('--card-text', '#000000');
    window.localStorage.setItem('colormode', 'light');
    return
}


function changeColors(checkbox)
{
    if (checkbox.checked) return setDark(); 
    return setLight(); 
}


document.addEventListener("DOMContentLoaded", theDomHasLoaded, false);

function theDomHasLoaded(e) {
    return checkStorage() 
}