json.event do
    json.set! @event.id do
        json.partial! 'event', event: @event
    end
end