export const getCommentsForVideo = (state,commentIds) => {
    if (!commentIds) return null;
    return commentIds.map(id => state.entities.comments[id])
}

export const getCommentsForVideoBeta = (state, videoId) => {
    let comments = Object.values(state.entities.comments);
    return comments.filter(comment => comment.videoId === videoId).reverse()
}

export const getRelatedVideos = (state,relatedVideosIds) => {
    if (!relatedVideosIds) return null;
    return relatedVideosIds.map(id => state.entities.videos[id])
}