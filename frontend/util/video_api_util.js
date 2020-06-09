export const fetchVideos = (searchQuery="") => {
    return( $.ajax({
            url: '/api/videos',
            data: {searchQuery}
        })
    )
}

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