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

export const updateVideo = (formData,videoId) => (
    $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'PATCH',
        data: formData ,
        contentType: false,
        processData: false
    })
)

export const deleteVideo = videoId => (
    $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'DELETE'
    })
)