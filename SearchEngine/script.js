const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const searchMoreBtn = document.getElementById("search-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.ariaValueMax;
    const url = `https://api.unsplash.com/search/photos?page=1&query=office`
}
