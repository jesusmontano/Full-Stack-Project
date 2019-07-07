class Api::VenuesController < ApplicationController
    
    def index
        @venues = Venue.all
        render :index
    end

    def show
        @venue = Venue.find(params[:id])
        render :show
    end

end
