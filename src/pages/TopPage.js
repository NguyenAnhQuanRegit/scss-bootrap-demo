import Footer from "../components/footer";
import Header from "../components/Header";
import ListPostHome from "../components/ListPostHome";
import Pagination from "../components/pagination";

const TopPage = {
  render: () => {
    return /*html*/ `
        <div class= "container-fluid p-0">
            ${Header.render("detailPage")}
            <div class="main">
                <div class="banner">
                    <img src="https://res.cloudinary.com/dukoxsuhq/image/upload/v1663293151/Regit%20Demo/laptop-in-modern-office_1_g2cg6u.png" alt="" class="img-fluid">
                </div>
                ${ListPostHome.render()}
                ${Pagination.render("home")}
            </div>
            ${Footer.render()}
        </div>
    `;
  },
  afterRender: () => {
    Header.afterRender();
    Pagination.afterRender("home");
  },
};

export default TopPage;
