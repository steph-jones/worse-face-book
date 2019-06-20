class Profile < ApplicationRecord
  belongs_to :user
  before_save :default_values
  
  private
  def default_values
    self[:name] ||= user[:name]
    self[:email] ||= user[:email]
  end

end
