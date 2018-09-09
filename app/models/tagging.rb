# == Schema Information
#
# Table name: taggings
#
#  id         :integer          not null, primary key
#  tag_id     :integer
#  note_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Tagging < ApplicationRecord
  validates :tag_id, :note_id, presence: true

  validates :tag_id, uniqueness: { scope: :note_id }

  belongs_to :tag,
    foreign_key: :tag_id,
    class_name: :Tag

  belongs_to :note,
    foreign_key: :note_id,
    class_name: :Note

end
