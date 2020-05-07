export const getCommentsForVideo = (state,commentIds) => {
    debugger
    if (!commentIds) return null;
    return commentIds.map(id => state.entities.comments[id])
}