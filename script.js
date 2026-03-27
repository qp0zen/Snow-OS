function openTab(evt, tabName) {
    let content = document.getElementsByClassName("tab-content");
    for (let i = 0; i < content.length; i++) {
        content[i].classList.remove("active");
    }

    let links = document.getElementsByClassName("tab-link");
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function startDownload(type) {
    let countId = type === 'iso' ? 'iso-count' : 'usb-count';
    let countEl = document.getElementById(countId);
    
    alert("Loading SnowOS " + type.toUpperCase() + " started!");
    
    let current = parseInt(countEl.innerText);
    countEl.innerText = current + 1;
}
