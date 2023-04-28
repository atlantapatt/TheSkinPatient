class ProductReviewSerializer < ActiveModel::Serializer
    attributes :id, :name, :category, :description, :image, :brand

    has_many :reviews, serializer: ReviewSerializer
  end