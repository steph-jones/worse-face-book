class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name
      t.text :bio
      t.string :nickname
      t.string :image
      t.string :email
      t.string :relationship
      t.date :birthday
      t.string :current_city
      t.string :hometown
      t.string :job_title
      t.string :fav_quote
      t.string :fav_book
      t.string :fav_movie
      t.string :spirit_animal
      t.string :gender
      t.string :superhero
      t.string :alumni
      t.string :constellation
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
