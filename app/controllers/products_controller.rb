class ProductsController < ApplicationController

    def index
        products = Product.all
        render json: products
    end

    def show
        products = Product.find_by(id: params[:id])
        if products
            render json: products, serializer: ProductReviewSerializer
        end
    end
end
