class Api::TicketsController < ApplicationController
    # skip_before_action :verify_authenticity_token

    ## skip_before_action wasn't here before, I addded it to be able to test on Postman

    def index
        @tickets = Ticket.all
    end

    def show
        @ticket = Ticket.find(params[:id])
    end

    def create
        @ticket = Ticket.new(ticket_params)

        if @ticket.save
            render :show
        else
            render json: @ticket.errors.full_messages, status: 422
        end
    end

    def update
        @ticket =  Ticket.find(params[:id])

        if @ticket.update(ticket_params)
            render :show
        else
            render json: @ticket.errors.full_messages, status: 422
        end
    end

    def destroy
        @ticket = Ticket.find(params[:id])

        if @ticket.destroy
            render :show
        else
            render json: @ticket.errors.full_messages, status: 422
        end
    end

    private

    def ticket_params
        params.require(:ticket).permit(:owner_id, :venue_id, :event_id, :price, :row, :section)
    end
end
