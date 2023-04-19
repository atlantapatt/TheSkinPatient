class ProductWishlistSerializer < ActiveModel::Serializer
  attributes :id, :product_id, :wishlist_id
end
