// //T.S
const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabs = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

const hideTabContent = () => {
    tabContentBlocks.forEach(block => {
        block.style.display = "none";
    });
    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = "block";
    tabs[id].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent();
                showTabContent(tabIndex)
            }
        });
    }
};

//CONVERT
const usdInput = document.querySelector("#usd");
const somInput = document.querySelector("#som");

somInput.oninput = () => {
    const request = new XMLHttpRequest();
    request.open("GET", '../data/converter.json');
    request.setRequestHeader('Content-type', 'application/json');
    request.send()

    request.onload = () => {
        const data = JSON.parse(request.response);
        usdInput.value = somInput.value * data.usd.toFixed(2);
    }
}


//DRY - don`t repeat yourself
//KISS - keep it super stupid
