class Api::NotebooksController < ApplicationController
  before_action :require_login

  def create
    @notebook = current_user.notebooks.new(notebook_params)
    # @notebook = Notebook.new(notebook_params)
    @notebook.user_id = current_user.id
    if @notebook.save
      # render 'api/users/show'
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = current_user.notebooks.find(params[:id])
    # @notebook = Notebook.find(params[:id])
    if @notebook.update(notebook_params)
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])
    # @notebook = Notebook.find(params[:id])
    if @notebook.destroy
      render json: {}
    else
      render json: ['Fail to delete notebook'], status: 422
    end
  end

  def show
    @notebook = current_user.notebooks.find(params[:id])
    # @notebook = Notebook.find(params[:id])
    render :show
  end

  def index
    @notebooks = current_user.notebooks.all
    # @notebooks = Notebook.all
    render :index
  end

  private
  def notebook_params
    params.require(:notebook).permit(:title, :user_id)
  end
end
