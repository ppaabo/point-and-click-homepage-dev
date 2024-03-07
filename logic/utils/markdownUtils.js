import { pages } from "../../data/pages";
import { marked } from "marked";

/**
 * Fetches the raw markdown from github and uses marked to conver it into html string
 * @param {string} url - the rawgithubuserconent url for the markdown wiki page
 * @returns {string} - Markdown content transformed into a html string
 */
export const fetchPage = async (url) => {
  const response = await fetch(`${url}`);
  const data = await response.text();
  marked.use({ gfm: true });
  const htmlString = marked.parse(data);
  return htmlString;
};

// Generates list from wiki page titles. Adds a click listener for each to render the page as html
export const generateList = () => {
  const backBtn = document.getElementById("back-btn")
  const pageContainer = document.getElementById('page-container');
  const ulElem = document.getElementById('wiki-list');

  let htmlList = pages.map((page, index) => {
    return `<li id="page-${index}"><a href="${page.url}">${page.title}</a></li>`;
  }).join('');
  ulElem.innerHTML = htmlList;

  pages.forEach((page, index) => {
    document.getElementById(`page-${index}`).addEventListener('click', async(event) => {
      event.preventDefault();
      pageContainer.style.display = 'flex';
      const htmlString  = await fetchPage(page.url);
      pageContainer.innerHTML = htmlString;
      ulElem.style.display = 'none'
      backBtn.style.display = "none";

      // Button for going back to the list
      const pageBackBtn = document.createElement('button');
      pageBackBtn.textContent = 'Palaa';
      pageBackBtn.id = 'page-back-btn';
      pageBackBtn.classList.add('button');
      pageBackBtn.addEventListener('click', () => {
        pageContainer.innerHTML = '';
        pageContainer.style.display = "none";
        ulElem.style.display = 'block';
        pageBackBtn.remove();
        backBtn.style.display = "";
      })
      pageContainer.appendChild(pageBackBtn);
    })
  })
}

// Displays the list of wiki page. When a item is clicked, renders the wiki page as html
export const showList = (app, gameContainer) => {
  const container = document.getElementById("markdown-container");
  const showPdf = document.getElementById("show-pdf");
  showPdf.style.display = "none";
  container.style.display = "flex";
  app.stage.visible = false;
  gameContainer.eventMode = "none";
  document.getElementById("game-container").style.display = "none";

  document.getElementById("back-btn").addEventListener("click", () => {
    showPdf.style.display = "";
    container.style.display = "none";
    document.getElementById("game-container").style.display = "";
    app.stage.visible = true;
    gameContainer.eventMode = "static";
  });
}