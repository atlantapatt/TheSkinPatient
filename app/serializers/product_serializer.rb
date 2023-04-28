class ProductSerializer < ActiveModel::Serializer
    attributes :id, :name, :category, :description, :image, :brand
   
    # def productReviews
    #   product =  Product.find_by(id: params[:id])
    #   reviews = Review.all.where(product_id: product.id)
    #   orderedReviews =  reviews.order({created_at: :desc})
    #   return orderedReviews
    # end
  end
  