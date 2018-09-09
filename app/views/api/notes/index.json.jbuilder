@notes.each do |note|
  json.set! note.id do
    json.extract! note, :id, :title, :body, :body_with_style, :user_id, :notebook_id, :created_at, :updated_at

    json.set! :tagsID do
      json.array! note.tags.map(&:id)
    end
  end
end


# {
#     "2": {
#         "id": 2,
#         "title": "new_title",
#         "body": "new_body",
#         "body_with_style": "<p>test_body</P>",
#         "user_id": 8,
#         "notebook_id": null
#     },
#     "3": {
#         "id": 3,
#         "title": "test3",
#         "body": "test_body",
#         "body_with_style": "<p>test_body</P>",
#         "user_id": 8,
#         "notebook_id": null
#     }
# }

# {
#     "145": {
#         "id": 145,
#         "title": "NEW LIFE ",
#         "body": "COOFFFEEEE @@@@",
#         "body_with_style": "<p><span style=\"color: rgb(255, 153, 0); background-color: rgb(230, 0, 0);\">COOFFFEEEE @@@@</span></p>",
#         "user_id": 8,
#         "notebook_id": 12,
#         "created_at": "2018-04-10T00:44:44.653Z",
#         "updated_at": "2018-04-11T17:24:31.126Z",
#         "tagsID": [
#             6
#         ]
#     },
#     "160": {
#         "id": 160,
#         "title": "A NEW NOTE",
#         "body": "AAAAdd",
#         "body_with_style": "<p>AAAAdd</p>",
#         "user_id": 8,
#         "notebook_id": 11,
#         "created_at": "2018-04-11T17:24:44.640Z",
#         "updated_at": "2018-04-11T17:33:14.999Z",
#         "tagsID": [
#             6
#         ]
#     },
