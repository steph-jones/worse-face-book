class AddJoinedToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :year_joined, :string
  end
end
