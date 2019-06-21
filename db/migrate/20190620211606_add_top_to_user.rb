class AddTopToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :top_profiles, :text
  end
end
