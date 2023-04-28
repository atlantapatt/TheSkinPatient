class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :rating, :info, :user

  belongs_to :product
end
