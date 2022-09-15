import BreadCumb from "../components/bread-crump";
import Comment from "../components/comment";
import Footer from "../components/footer";
import Header from "../components/Header";
import Pagination from "../components/pagination";
import Post from "../components/Post";
import RelatedPost from "../components/related-post";

const PostDetailPage = {
  render: () => {
    return /*html*/ ` 
    <div class="container-fluid p-0">
        <div>${Header.render()}</div>
        <div class="outlet">
         ${BreadCumb.render("Detail Blog")}
          <section>
            ${Post.render()}
          </section>
          <section>
            ${RelatedPost.render()}
            ${Pagination.render()}
          </section>
          <section>
            ${Comment.render()}
          </section>
          
        </div>
        ${Footer.render()}  
    </div>`;
  },
  afterRender: () => {
    Header.afterRender();
    Pagination.afterRender();
  },
};

export default PostDetailPage;
