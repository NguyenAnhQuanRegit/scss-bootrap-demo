const Pagination = {
  render: () => /*html*/ `
    <div class="pagination" id="pagination">
        <button class="pagination__button active"><span class="pagination__page "></span></button>
        <button class="pagination__button"><span class="pagination__page"></span></button>
        <button class="pagination__button"><span class="pagination__page"></span></button>
        <button class="pagination__button"><span class="pagination__page"></span></button>
    </div>
  `,
  afterRender: () => {
    // animation active
    var paginationRow = document.getElementById("pagination");
    var paginationButton =
      paginationRow.getElementsByClassName("pagination__button");

    for (var i = 0; i < paginationButton.length; i++) {
      paginationButton[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  },
};

export default Pagination;
