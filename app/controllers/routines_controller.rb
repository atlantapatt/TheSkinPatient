class RoutinesController < ApplicationController

    def show
        user = User.find_by(id: params[:id])
        routines = Routine.where(user_id: user)
        if routines
            render json: routines, status: :ok
        else
            render json: {error: "No Items on Wislist"}
        end
    end
end
