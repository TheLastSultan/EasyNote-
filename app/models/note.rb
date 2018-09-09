# == Schema Information
#
# Table name: notes
#
#  id              :integer          not null, primary key
#  title           :string           not null
#  body            :text
#  user_id         :integer          not null
#  notebook_id     :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  body_with_style :text
#

class Note < ApplicationRecord
  validates :title, presence: true
  validates :user_id, presence: true

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  has_many :taggings,
    foreign_key: :note_id,
    class_name: :Tagging,
    dependent: :destroy

  has_many :tags,
    through: :taggings

  # Note#tags
  # Note#tag_ids
  # Note#tag_ids=
    # * destroy/create record in join table
    # * new_tags = [1, 2]
    # * noteA.tag_ids=(new_tag)
    # * first it queries noteA.tag_ids to get the id's of noteA's current tags
    # * Any id's in new_tags but not in noteA.tag_ids yet, it builds and saves a new Tagging object {note_id: noteA.id, tag_id: new_tag_id}
    # * Any id's in noteA.tag_ids but not in new_tags will have that Tagging destroyed.



end
