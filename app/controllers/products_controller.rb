class ProductsController < ApplicationController

    def index
        products = Product.all
        render json: products, status: :ok
    end

    def show
        products = Product.find_by(id: params[:id])
        if products
            render json: products, status: :ok
        end
    end
end
