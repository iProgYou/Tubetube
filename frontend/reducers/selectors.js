export const getCommentsForVideo = (state,commentIds) => {
    if (!commentIds) return null;
    return commentIds.map(id => state.entities.comments[id])
}