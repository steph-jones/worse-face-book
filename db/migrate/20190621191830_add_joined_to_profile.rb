class AddJoinedToProfile < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :year_joined, :string
  end
end
