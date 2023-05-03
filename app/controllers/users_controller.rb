class UsersController < ApplicationController


    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
       
    end

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {error: "Not Authorized"}, status: :unauthorized
        end
    end

    def userReviews
        user = User.find_by(id: session[:user_id])
        reviews = Review.where(user_id: user)
        if reviews
            render json: reviews, status: :ok
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update!(user_params)
            render json: user
        else
            render json: {error: "user not found"}, status: :not_found
        end
    end


    def destroy
        user = User.find_by(id: params[:id])
        if user
            user.destroy
            head :no_content
        end
    end

    private

    def user_params
        params.permit(:id, :username, :password, :bio, :image)
    end
end
