Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]

    resource :session, only: [:create, :destroy]

    resources :notes, only: [:create, :update, :index, :show, :destroy] do
      # resources :taggings, only: [:create, :destroy, :index, :show]
    end

    resources :notebooks, only: [:create, :update, :index, :show, :destroy] do
      resources :notes, only: [:index] # this is for fetching notes from a notebook
    end

    resources :tags, only: [:create, :destroy, :index, :show] do
      # resources :taggings, only: [:create, :destroy, :index, :show]
    end

    resources :taggings, only: [:create]

  end
end
