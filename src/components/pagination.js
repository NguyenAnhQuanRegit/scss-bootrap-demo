const Pagination = {
  render: (page) => {
    return page === "home"
      ? /*html*/ `
  <div class="pagination--home" id="pagination">
  <div class="pagination__icon--home"><img src="https://res.cloudinary.com/dukoxsuhq/image/upload/v1663293150/Regit%20Demo/Vector_a7oih2.png" alt="" class="img-fluid"></div>
      <button class="pagination__button--home active"><span class="pagination__page--home ">1</span></button>
      <button class="pagination__button--home"><span class="pagination__page--home">2</span></button>
      <button class="pagination__button--home"><span class="pagination__page--home">3</span></button>
      <button class="pagination__button--home"><span class="pagination__page--home">4</span></button>
      <button class="pagination__button--home"><span class="pagination__page--home">5</span></button>
  <div class="pagination__icon--home"><img src="https://res.cloudinary.com/dukoxsuhq/image/upload/v1663293150/Regit%20Demo/Vector2_moqvkm.png" alt="" class="img-fluid"></div>
</div>`
      : /*html*/ `
  <div class="pagination" id="pagination">
  <button class="pagination__button active"><span class="pagination__page "></span></button>
  <button class="pagination__button"><span class="pagination__page"></span></button>
  <button class="pagination__button"><span class="pagination__page"></span></button>
  <button class="pagination__button"><span class="pagination__page"></span></button>
</div>
  `;
  },
  afterRender: (page) => {
    // animation active pagination-detail
    const paginationRow = document.getElementById("pagination");
    const paginationButton =
      page === "home"
        ? paginationRow.getElementsByClassName("pagination__button--home")
        : paginationRow.getElementsByClassName("pagination__button");

    for (let i = 0; i < paginationButton.length; i++) {
      paginationButton[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  },
};

export default Pagination;
