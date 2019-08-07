Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    get '/search', to: 'search#search'
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :events, only: [:index, :show]
    resources :teams, only: [:index, :show]
    resources :venues, only: [:index, :show]
    resources :tickets, except: [:new, :edit]
  end
  
  root "static_pages#root"
end
