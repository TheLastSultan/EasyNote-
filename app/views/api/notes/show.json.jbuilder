# json.set! @note.id do
  json.set! :tagsID do
    json.array! @note.tags.map(&:id)
  end

  json.extract! @note, :id, :title, :body, :body_with_style, :user_id, :notebook_id
# end

# {

#         "id": 3,
#         "title": "test3",
#         "body": "test_body",
#         "body_with_style": "<p>test_body</P>",
#         "user_id": 8,
#         "notebook_id": null

# }

# {
#     "tagsID": [
#         6
#     ],
#     "id": 160,
#     "title": "A NEW NOTE",
#     "body": "AAAAdd",
#     "body_with_style": "<p>AAAAdd</p>",
#     "user_id": 8,
#     "notebook_id": 11
# }
