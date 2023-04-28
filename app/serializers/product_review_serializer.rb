class ProductReviewSerializer < ActiveModel::Serializer
    attributes :id, :name, :category, :description, :image, :brand, :reviews
  end