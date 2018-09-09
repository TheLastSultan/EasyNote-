@notebooks.each do |notebook|
  json.set! notebook.id do
    json.extract! notebook, :id, :title, :user_id, :created_at, :updated_at
  end
end


# {
#     "1": {
#         "id": 1,
#         "title": "test_nb1",
#         "user_id": 8,
#         "created_at": "2018-04-09T17:54:48.936Z",
#         "updated_at": "2018-04-09T17:54:48.936Z"
#     },
#     "2": {
#         "id": 2,
#         "title": "test_nb2",
#         "user_id": 8,
#         "created_at": "2018-04-09T17:55:39.825Z",
#         "updated_at": "2018-04-09T17:55:39.825Z"
#     }
# }
