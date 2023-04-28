class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :rating, :info, :user
end
