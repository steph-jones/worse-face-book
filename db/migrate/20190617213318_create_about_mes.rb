class CreateAboutMes < ActiveRecord::Migration[5.2]
  def change
    create_table :about_mes do |t|
      t.text :bio
      t.string :name
      t.string :nickname
      t.string :current_city
      t.string :image
      t.string :relationship
      t.date :birthday
      t.string :hometown
      t.string :job_title
      t.string :fav_quote
      t.string :fav_book
      t.string :fav_movie
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
