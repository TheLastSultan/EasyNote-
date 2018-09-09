class Api::TagsController < ApplicationController
  before_action :require_login
  def create
    @tag = Tag.new(tag_params)
    @tag.user_id = current_user.id
    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = current_user.tags.find(params[:id])
    # @tag = Tag.find(params[:id])
    if @tag.destroy
      render json: {}
    else
      render json: ['Fail to delete note'], status: 422
    end
  end

  def show
    @tag = current_user.tags.find(params[:id])
    # @tag = Tag.find(params[:id])
    render :show
  end

  def index
    # need user_id because we can create blank tag
    @tags = current_user.tags.all
    # @tags = Tag.all
    render :index
  end

  private
  def tag_params
    params.require(:tag).permit(:name, :user_id)
  end
end
