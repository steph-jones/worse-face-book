class List < ApplicationRecord
  belongs_to :user
  # before_save :default_values
  
  private
  # def default_values
  #   self[:top_friend] ||= []
  #   self[:friends_connections] ||= []
  # end
end