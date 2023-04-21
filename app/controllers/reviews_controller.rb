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
end
