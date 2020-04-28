class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params) 
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def index
    end

    def show
    end

    def destroy
    end

    def update
    end

    private
    def user_params
        params.require(:user).permit(:username, :email,:password)
    end

end