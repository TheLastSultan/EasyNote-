class Api::SessionsController < ApplicationController
  def create
    # Find the user by credential
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
    # 
    if @user.nil?
      render json: ['Invalid credentials! Please enter valid username & password'], status: 401
    else
      login(@user)
      render 'api/users/show'
    end
  end

  def destroy
    if current_user.nil?
      render json: ['Fail to logout!'], status: 404
    else
      logout
      render json: {}
    end
  end
end
