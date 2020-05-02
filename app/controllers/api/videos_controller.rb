class Api::VideosController < ApplicationController

    def index
        @videos = Video.all
        render :index
    end

    def show
        # print(params)
        # debugger
        @video = Video.find(params[:id])
        # @video.increment_plays
        render :show
    end

    def create

    end

    def update

    end

    def destroy

    end

end
