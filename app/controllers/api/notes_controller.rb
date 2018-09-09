class Api::NotesController < ApplicationController
  before_action :require_login
  def create
    # @note = current_user.notes.new(note_params)
    @note = Note.new(note_params)
    @note.user_id = current_user.id
    if @note.save
      # render 'api/users/show'
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = current_user.notes.find(params[:id])
    # @note = Note.find(params[:id])
    if @note.update(note_params)
      render :show
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def index
    # 
    if params[:notebook_id]
      # @notes = current_user.notes.where(notebook_id: params[:notebook_id])
      @notes = Note.where(notebook_id: params[:notebook_id])

    else
      @notes = current_user.notes.all
      # @notes = Note.all
    end
    render :index
  end

  def show
    @note = current_user.notes.find(params[:id])
    # @note = Note.find(params[:id])
    render :show
  end

  def destroy
    @note = current_user.notes.find(params[:id])
    # @note = Note.find(params[:id])
    if @note.destroy
      render json: {}
    else
      render json: ['Fail to delete note'], status: 422
    end
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :body_with_style, :user_id, :notebook_id)
  end
end
