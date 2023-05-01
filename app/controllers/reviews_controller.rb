class ReviewsController < ApplicationController
    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end

    def show
        product = Product.find_by(id: params[:id])
        reviews = Review.where(product_id: product)
        if reviews
            render json: reviews, status: :ok
        else
            render json: {error: "No Items on Wislist"}
        end
    end

    def create
        review = Review.create(review_params)
        render json: review, status: :created
    end


    private

    def review_params
        params.permit(:user_id, :product_id, :rating, :info)
    end

end
