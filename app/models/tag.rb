# == Schema Information
#
# Table name: tags
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Tag < ApplicationRecord
  validates :name, presence: true
  validates :user_id, presence: true

  has_many :taggings,
    foreign_key: :tag_id,
    class_name: :Tagging,
    dependent: :destroy

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :notes,
    through: :taggings


end
