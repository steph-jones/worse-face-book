# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  # has_one :about_me, dependent: :destroy
  has_one :list, dependent: :destroy
  has_one :profile, dependent: :destroy
  has_many :post, dependent: :destroy

  after_create :init_profile
  after_create :init_list

  def init_profile
    self.create_profile!
  end

  def init_list
    self.create_list!
  end

  # serialize :friends, Array

  # def self.random_friend(ids)
  #   ids = ids.empty? ? [0] : ids
  #   About_me.where("id NOT IN (?)", ids).order("RANDOM()")
  # end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    About_me.where("id IN (?)", ids)
  end

  # def self.top_friends(ids)
  #   ids = ids.empty? ? [0] : ids
  #   About_me.where("id IN (?)", ids)
  # end

end

