const renderer = Renderer();
const tweeter = Tweeter();

const render = function() {
    renderer.renderPosts(tweeter.getPosts());
}

$("#post").on("click", function () {
    let postText = $("#input").val();
    tweeter.addPost(postText);
    render();
});

$("#posts").on("click", ".delete-post", function () {
    let postId = $(this).closest(".post").data().id;
    tweeter.removePost(postId);
    render();
});

$("body").on("click", "#add-comment", function () {
    let postId =  $(this).closest(".post").data().id;
    let commentText = $(this).siblings(".comment-input").val();
    tweeter.addComment(postId, commentText);
    render();
  });

$("#posts").on("click", ".delete-comment", function () {
    let commentId = $(this).closest(".comment").data().id;
    let postId = $(this).closest('.post').data().id;
    tweeter.removeComment(postId, commentId);
    render();
});

