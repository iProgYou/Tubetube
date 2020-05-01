export const fetchVideos = () => (
    $.ajax({
        url: '/api/videos'
    })
)

export const fetchVideo = videoId => (
    $.ajax({
        url: `/api/videos/${videoId}`
    })
)

export const createVideo = video => (
    $.ajax({
        url: `/api/users/${video.creator_id}/videos`,
        method: 'POST',
        data: { video }
    })
)

export const updateVideo = video => (
    $.ajax({
        url: `/api/users/${video.creator_id}/videos/${video.id}`,
        method: 'PATCH',
        data: { video }
    })
)

export const deleteVideo = video => (
    $.ajax({
        url: `/api/users/${video.creator_id}/videos/${video.id}`,
        method: 'DELETE'
    })
)