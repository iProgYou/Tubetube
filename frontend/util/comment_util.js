export const fetchComments = videoId => (
    $.ajax({
        url: `/api/videos/${videoId}/comments`,
    })
)

export const createComment = comment => {
    // debugger
    return $.ajax({
        url: `/api/videos/${comment.video_id}/comments`,
        method: "POST",
        data: { comment }
    })
}

// export const updateComment = comment => (
//     $.ajax({
//         url: `/api/videos/${comment.videoId}/comments/${comment.id}`,
//         method: "PATCH",
//         data: { comment }
//     })
// )

export const deleteComment = comment => (
    $.ajax({
        url: `/api/videos/${comment.video_id}/comments/${comment.id}`,
        method: "DELETE",
    })
)

