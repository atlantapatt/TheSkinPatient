class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :description, :image
end
