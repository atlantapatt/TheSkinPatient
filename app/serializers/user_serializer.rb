class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :password
end
