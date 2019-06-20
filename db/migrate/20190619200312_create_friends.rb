class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.text :top_friend, array: true, default: []
      t.text :friends_connections, array: true, default: []
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
