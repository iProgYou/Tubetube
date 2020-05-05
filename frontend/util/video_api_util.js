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

export const createVideo = formData => (
    $.ajax({
        url: `/api/videos`,
        method: 'POST',
        data: formData ,
        contentType: false,
        processData: false
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