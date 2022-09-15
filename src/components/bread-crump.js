const BreadCumb = {
  render: (name) => {
    return /*html*/ `
  <nav aria-label="breadcrumb" class="breadcrumb-row">
    <ol class="breadcrumb">
      <li class="breadcrumb__1st breadcrumb-item "><a href="#">Home</a></li>
      <li class="breadcrumb__2nd breadcrumb-item " aria-current="page"><a>${name}</a></li>
    </ol>
  </nav>
    `;
  },
};

export default BreadCumb;
