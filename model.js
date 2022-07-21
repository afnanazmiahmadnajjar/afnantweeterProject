const Tweeter = function () {
    const _posts = []

    let postIdCounter = 3;
    let commentIdCounter = 7;

    const getPosts = function () {
        return _posts ;

    }

    const addPost = function (postText) {
        let post = {
            text : postText,
            id: "p" + postIdCounter ,
            comments: []
        }
        _posts.push(post);
        postIdCounter++ ;
    }

    const removePost = function (postId) {
        for (let postIndex in _posts) {
            if (_posts[postIndex].id == postId){
                _posts.splice(postIndex , 1);
            }
        }
    }

    const addComment = function (postId , commentText) {
        let commentObj = {
            id : "c" + commentIdCounter ,
            text : commentText
        }

        for (let postIndex in _posts){
            if (_posts[postIndex].id == postId){
                _posts[postIndex].comments.push(commentObj); 
                commentIdCounter++ ; 
            }
        }
    }

    const removeComment = function (postId , commentId) {
        for (let postIndex in _posts) {
            if (_posts[postIndex].id == postId) {
                for (let commentIndex in _posts[postIndex].comments) {
                    if(_posts[postIndex].comments[commentIndex].id == commentId) {
                        _posts[postIndex].comments.splice(commentIndex , 1);
                    } 
                }
            }    
        }
    }

    return {
        getPosts : getPosts,
        addPost : addPost,
        removePost : removePost,
        addComment : addComment,
        removeComment : removeComment
    }

}

