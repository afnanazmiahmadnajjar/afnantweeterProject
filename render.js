const Renderer  = function () {

    const renderPosts = function (posts) {
        $("#posts").empty();

        for(let post of posts) {
            $("#posts").append(
                `<div class="post" id=${post.id} data-id=${post.id}>
                   ${post.text}
                   <div calss="comments" id="comments">
                     <input type="text" placeholder="Add your comment" class="comment-input">
                     <button id="add-comment">Add Comment</button>
                   </div>
                   <button class="delete-post">Delete Post</button>
                </div>`
            );

            for(let comment of post.comments){
                let postId = "#" + post.id; 
                $(postId).append(
                    `<div class="comment" data-id=${comment.id}>
                       ${comment.text} <button class="delete-comment" >X</button>
                    </div>`
                )
            }
        }    
    } 
    return {
        renderPosts: renderPosts,
    }  
}

