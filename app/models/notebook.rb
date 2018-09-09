# == Schema Information
#
# Table name: notebooks
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notebook < ApplicationRecord
  validates :title, presence: true
  validates :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :notes,
    foreign_key: :notebook_id,
    class_name: :Note

end
