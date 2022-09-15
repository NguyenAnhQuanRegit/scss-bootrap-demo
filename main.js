import Navigo from "navigo";
import PostDetailPage from "./src/pages/PostDetailPage";

const router = new Navigo("/", { linksSelector: "a", hash: "true" });

const render = (element) => {
  document.getElementById("app").innerHTML = element.render();
  if (element.afterRender) element.afterRender();
};

router.on({
  "/": () => render(PostDetailPage),
});

router.resolve();
