@tags.each do |tag|
  json.set! tag.id do
    json.extract! tag, :id, :name, :user_id, :created_at, :updated_at

    json.set! :notesID do
         json.array! tag.notes.map(&:id)
    end
  end
end

# 
# {
#     "6": {
#         "id": 6,
#         "name": "TTAG",
#         "user_id": 8,
#         "created_at": "2018-04-12T08:04:23.162Z",
#         "updated_at": "2018-04-12T08:04:23.162Z",
#         "notesID": [
#             145,
#             160
#         ]
#     },
#     "7": {
#         "id": 7,
#         "name": "t2t",
#         "user_id": 8,
#         "created_at": "2018-04-12T08:10:39.313Z",
#         "updated_at": "2018-04-12T08:10:39.313Z",
#         "notesID": []
#     },
#     "8": {
#         "id": 8,
#         "name": "t3",
#         "user_id": 8,
#         "created_at": "2018-04-12T15:16:18.229Z",
#         "updated_at": "2018-04-12T15:16:18.229Z",
#         "notesID": []
#     }
# }



# {
#     "2": {
#         "id": 2,
#         "name": "test tag 1",
#         "user_id": 8,
#         "created_at": "2018-04-11T21:10:49.442Z",
#         "updated_at": "2018-04-11T21:10:49.442Z"
#     },
#     "3": {
#         "id": 3,
#         "name": "TT1",
#         "user_id": 8,
#         "created_at": "2018-04-11T21:13:39.902Z",
#         "updated_at": "2018-04-11T21:13:39.902Z"
#     }
# }
