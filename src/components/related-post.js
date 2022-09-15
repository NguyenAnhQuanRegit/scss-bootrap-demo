const RelatedPost = {
  render: () => {
    const print = [1, 2, 3, 4];
    return /*html*/ `
        <div>
            <div class="related-post-title">
                <h4 class="relative">Related</h4>
            </div>
            <div class="list-post">
                ${print
                  .map(
                    (item) => /*html*/ `
                        <div class="list-post__item">
                            <div class="list-post__item__img"><img class="img-fluid" src="./assets/img/cat2.png"/></div>
                            <div class="list-post__title">Lorem ipsum dolor sit amet,  adipiscing elit.</div>
                        </div>
                    `
                  )
                  .join("")}
            </div>
        </div>
    `;
  },
};

export default RelatedPost;
