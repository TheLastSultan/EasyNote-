class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
      # render :show
    else
      if params[:user][:password].length < 6
        render json: ["Password too short!"], status: 422
      else
        render json: ["Username is not valid or taken!"], status: 422
      end
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
