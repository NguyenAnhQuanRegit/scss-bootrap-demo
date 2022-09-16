import Navigo from "navigo";
import PostDetailPage from "./src/pages/PostDetailPage";
import TopPage from "./src/pages/TopPage";

const router = new Navigo("/", { linksSelector: "a", hash: "true" });

const render = (element) => {
  document.getElementById("app").innerHTML = element.render();
  if (element.afterRender) element.afterRender();
};

router.on({
  "/detail-post": () => render(PostDetailPage),
  "/": () => render(TopPage),
});

router.resolve();
