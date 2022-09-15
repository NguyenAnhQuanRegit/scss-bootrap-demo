const Post = {
  render: () => {
    return /*html*/ `
        <div>
            <div class="post-title"><h3>My cat is like the boss</h3></div>
            <div class="post-author d-flex">
                <div class="post-author__img flex-shrink-0"><img class="img-fluid" src="./assets/img/avatar-girl.png"/></div>
                <div class="post-author__text flex-grow-1 ms-2 d-flex flex-column justify-content-start">
                    <h4>MyName</h4>
                    <p>05/09/2022</p>
                </div>
            </div>
            <div class="post-img">
                <img class="img-fluid" src="./assets/img/cat.png"/>
            </div>
            <div class="post-describe">
                <p>Because she is. At least in her mind. Cats are affectionately narcissistic in a very subtle. It's like somehow they just know that in ancient Egypt they were once worshipped as Gods and that is their self image that's natural to them. This is only my opinion based on the cats that I have lived with.</p>
            </div>
        </div>        
    `;
  },
};

export default Post;
