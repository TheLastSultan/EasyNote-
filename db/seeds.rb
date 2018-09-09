# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Note.destroy_all
Notebook.destroy_all
Tag.destroy_all
Tagging.destroy_all

demo_user = User.create!(username: "demo", password: "demopassword")

general_book = Notebook.create!(title: "General", user_id: demo_user.id)
random_book = Notebook.create!(title: "RandomBook", user_id: demo_user.id)
life_book = Notebook.create!(title: "Life", user_id: demo_user.id)

note1_body = "Integer semper, diam id hendrerit suscipit, nibh eros volutpat arcu, a fringilla lectus massa in ex. Cras nec posuere purus. Maecenas placerat tellus vel est ornare rhoncus. Quisque at congue ex. Sed consequat enim orci, sollicitudin ultrices lorem laoreet nec. Curabitur et rhoncus ligula, et tristique nisl. Nullam gravida ut mauris a lacinia. Donec arcu tellus, maximus eu tellus ac, malesuada cursus purus. Nam vitae maximus augue. In diam velit, porttitor at sodales eu, imperdiet a massa. Aliquam in venenatis arcu. Duis posuere massa id enim ullamcorper, vel scelerisque ipsum ullamcorper. Aliquam non nulla tincidunt, tincidunt risus sit amet, mattis sem.↵↵Suspendisse potenti. Sed luctus, mi vitae faucibus molestie, lorem dui vestibulum enim, eget fermentum orci nulla sit amet dui. Sed pulvinar ante eget est mattis, sed suscipit nulla ultrices. Etiam purus tellus, maximus id leo et, mattis vestibulum mi. Proin cursus sodales libero et consectetur. Duis nec nisi libero. Aliquam euismod leo sed libero consectetur porta. Proin ac laoreet purus, ac egestas elit. Nullam sit amet vehicula tellus. Donec ut congue quam. Nunc enim ipsum, eleifend a dui non, auctor semper felis. Donec posuere placerat massa a consequat.↵↵Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin mollis interdum turpis lacinia feugiat. Nulla in dignissim nisl. Suspendisse efficitur tempus efficitur. Quisque eleifend eleifend sapien, nec condimentum lacus. Quisque vulputate hendrerit tincidunt. Fusce scelerisque magna in erat elementum, at lobortis leo faucibus.↵↵Fusce at dui nisl. Vivamus malesuada luctus metus. Integer facilisis in nunc et dignissim. Nullam aliquam odio in risus volutpat imperdiet. Etiam malesuada erat nec consectetur pulvinar. Pellentesque pellentesque id turpis ut rutrum. Ut sit amet consequat velit, id auctor libero. Mauris in eros quis ligula tincidunt dignissim. Donec vel lectus interdum, hendrerit enim pretium, molestie turpis. Nulla dolor quam, accumsan et metus tempus, fringilla rhoncus nisi. Proin venenatis nisl tortor, non facilisis dui sagittis vitae. Sed vel mollis lectus. Donec efficitur pretium lorem congue elementum. Morbi cursus, mi eget lacinia mattis, elit neque scelerisque augue, id fermentum metus massa ut augue."

note1_body_with_style = "<p><strong class=\"ql-size-large\" style=\"background-color: rgb(255, 255, 255); color: rgb(230, 0, 0);\"><em>Integer semper, diam id hendrerit suscipit, nibh eros volutpat arcu, a fringilla lectus massa in ex.</em></strong><span style=\"background-color: rgb(255, 255, 255);\"> Cras nec posuere purus. Maecenas placerat tellus vel est ornare rhoncus. Quisque at congue ex. Sed consequat enim orci, sollicitudin ultrices lorem laoreet nec. Curabitur et rhoncus ligula, et tristique nisl. Nullam gravida ut mauris a lacinia. Donec arcu tellus, maximus eu tellus ac, malesuada cursus purus. Nam vitae maximus augue. </span><span style=\"background-color: rgb(255, 255, 0);\">In diam velit, porttitor at sodales eu, imperdiet a massa. </span><span style=\"background-color: rgb(255, 255, 255);\">Aliquam in venenatis arcu. Duis posuere massa id enim ullamcorper, vel scelerisque ipsum ullamcorper. Aliquam non nulla tincidunt, tincidunt risus sit amet, </span><s style=\"background-color: rgb(255, 255, 255);\">mattis sem.</s></p><p><br></p><p class=\"ql-align-justify\">Suspendisse potenti. Sed luctus, mi vitae faucibus molestie, lorem dui vestibulum enim, eget fermentum orci nulla sit amet dui. Sed pulvinar ante eget est mattis, sed suscipit nulla ultrices. Etiam purus tellus, maximus id leo et, mattis vestibulum mi. Proin cursus sodales libero et consectetur. Duis nec nisi libero. <strong class=\"ql-size-small\" style=\"color: rgb(0, 102, 204);\">Aliquam euismod leo sed libero consectetur porta. Proin ac laoreet purus, ac egestas elit. Nullam sit amet vehicula tellus. Donec ut congue quam. Nunc enim ipsum, eleifend a dui non, auctor semper felis. Donec posuere placerat massa a consequat.</strong></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin mollis interdum turpis lacinia feugiat. Nulla in dignissim nisl. Suspendisse efficitur tempus efficitur. Quisque eleifend eleifend sapien, nec condimentum lacus. Quisque vulputate hendrerit tincidunt. Fusce scelerisque magna in erat elementum, at lobortis leo faucibus.</p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">Fusce at dui nisl. Vivamus malesuada luctus metus. Integer facilisis in nunc et dignissim. <span style=\"background-color: rgb(255, 153, 0);\">Nullam aliquam odio in risus volutpat imperdiet. Etiam malesuada erat nec consectetur pulvinar. Pellentesque pellentesque id turpis ut rutrum. Ut sit amet consequat velit, id auctor libero. Mauris in eros quis ligula tincidunt dignissim.</span> Donec vel lectus interdum, hendrerit enim pretium, molestie turpis. Nulla dolor quam, accumsan et metus tempus, fringilla rhoncus nisi. Proin venenatis nisl tortor, non facilisis dui sagittis vitae. Sed vel mollis lectus. Donec efficitur pretium lorem congue elementum. Morbi cursus, mi eget lacinia mattis, elit neque scelerisque augue, id fermentum metus massa ut augue.</p>"

note2_body = "Sed odio magna, euismod a blandit a, mattis quis sem. Proin elementum posuere enim vel vulputate. In nec lorem sed metus euismod convallis in a lectus. In hac habitasse platea dictumst. Nunc id ex mollis diam commodo faucibus eget sit amet sapien. In nibh odio, lobortis vitae placerat nec, dapibus sit amet diam. Nulla sed odio ante. Integer dignissim non felis eu viverra. Sed suscipit elit elit, a tincidunt purus elementum nec. Quisque volutpat, nunc eget consectetur elementum, augue ligula interdum eros, non convallis nulla justo auctor elit. Mauris mattis scelerisque mauris et dapibus. Ut id lorem consectetur, ornare massa in, ornare lectus.↵↵Fusce consectetur neque vitae sem dapibus, a ornare lectus consectetur. Mauris aliquet, arcu a mollis blandit, enim justo dictum erat, at maximus elit felis ut mauris. Curabitur vestibulum vitae diam sit amet bibendum. Sed eget enim sed lectus pulvinar finibus a volutpat lectus. Nam elit nisl, vehicula nec lobortis sed, efficitur vel dui. Nunc nec iaculis tellus, sit amet faucibus leo. Etiam fringilla faucibus est, id venenatis ante posuere viverra."

note2_body_with_style = "<p class=\"ql-align-justify\"><span class=\"ql-font-monospace\" style=\"background-color: rgb(255, 255, 0);\">Sed odio magna, euismod a blandit a, mattis quis sem.</span> Proin elementum posuere enim vel vulputate. In nec lorem sed metus euismod convallis in a lectus. In hac habitasse platea dictumst. Nunc id ex mollis diam commodo faucibus eget sit amet sapien. In nibh odio, lobortis vitae placerat nec, dapibus sit amet diam. Nulla sed odio ante. Integer dignissim non felis eu viverra. Sed suscipit elit elit, a tincidunt purus elementum nec. <u style=\"color: rgb(161, 0, 0);\">Quisque volutpat, nunc eget consectetur elementum, augue ligula interdum eros, non convallis nulla justo auctor elit. Mauris mattis scelerisque mauris et dapibus. Ut id lorem consectetur, ornare massa in, ornare lectus.</u></p><p class=\"ql-align-justify\"><br></p><p class=\"ql-align-justify\">Fusce consectetur neque vitae sem dapibus, a ornare lectus consectetur. Mauris aliquet, arcu a mollis blandit, enim justo dictum erat, at maximus elit felis ut mauris. Curabitur vestibulum vitae diam sit amet bibendum. Sed eget enim sed lectus pulvinar finibus a volutpat lectus. Nam elit nisl, vehicula nec lobortis sed, efficitur vel dui. <em class=\"ql-size-huge\" style=\"color: rgb(153, 51, 255);\">Nunc nec iaculis tellus, sit amet faucibus leo. Etiam fringilla faucibus est, id venenatis ante posuere viverra.</em></p><p><br></p>"

note3_body = "日せ禁5並ヱケメチ辺71仁借是士48起セリオ高野ソイ円銭スイマ呼止すれ会東月ヌシ声著ユ熊務っいふと態掲セ掲号テタク変4主手競嘉をつせ。断ンせ量置訃ろフ空応無おぞほ教南ずげぞえ会器証ご文義ン逃芸ぶの回野の州芸献シカホス関欧キサ一様きぶた芸側光ほつぴ。一サイ修泉女ろさ使者ら吉断ルそ永浩どぱせう置属カリヌ芸供リレつ資鑑7万ワクト転場オヌヤ再祭好術ラ。↵↵法づドクぜ韓第き点道お屹切ね芸越せれ民更れひ象年り講質ん熱女ソナ裁性むスぐの発列ケ本中メチノコ真転ヱシセ発品後ヘウ拓警ミレ阪込ルマヨヤ員康聞ヱサモ存器敗香ぴ。人ナテリユ員86成ご夜85憂昌詩飼6療ぞがやぐ真均スほんま明催奮提ゅべなめ甘球クカ徴間百朝析毛龍すらろよ。樹組ヲテル豊6舎モア設87科ぶ埋宮ナハテホ画権べリけ北徹止エヲオ勢気ら文史コ未歯ぴ。"

note3_body_with_style = "<p>日せ禁5並ヱケメチ辺71仁借是士<span style=\"background-color: rgb(136, 136, 136); color: rgb(255, 153, 0);\">48起セリオ高野ソイ円銭スイマ呼止すれ会東月ヌシ声著ユ熊務っいふと態掲セ掲号テタク変4主手競嘉をつせ。断ンせ量置訃ろフ空応無おぞほ教南ずげぞえ会器証ご文義ン逃芸ぶの回野の州芸献シカホス関欧</span>キサ一様きぶた芸側光ほつぴ。一サイ修泉女ろさ使者ら吉断ルそ永浩どぱせう置属カリヌ芸供リレつ資鑑7万ワクト転場オヌヤ再祭好術ラ。</p><p><br></p><p><strong>法づドクぜ韓第き点道お屹切</strong><strong style=\"background-color: rgb(230, 0, 0);\"><s>ね芸越せれ民更れひ象年り講質ん熱女ソナ裁性むスぐの発列ケ本中メチノコ真転ヱシセ発品後ヘウ拓警ミレ阪込ルマヨヤ員康聞ヱサモ存器敗香ぴ。人ナテリユ員86成ご夜85憂昌詩飼6療ぞがやぐ真均スほんま</s></strong><strong>明催奮提ゅべなめ甘球クカ徴間百朝析毛龍すらろよ。樹組ヲテル豊6舎モア設87科ぶ埋宮ナハテホ画権べリけ北徹止エヲオ勢気ら文史コ未歯ぴ。</strong></p>"

note4_body = "Nullam nisi in pellentesque eleifend, fusce lacus per nulla vulputate, varius congue taciti lacus integer class fringilla. Ultricies adipiscing sociis.↵Buy milk↵debug ↵sleep↵Laoreet rhoncus fermentum cras urna. Nonummy penatibus cubilia potenti, nisi Vitae duis eget facilisis curabitur lacinia. Inceptos dis sociis class lectus pretium orci porta porta, morbi condimentum nibh quisque dui nisi, purus lobortis magna, libero, nisi, malesuada leo tristique at.↵buy coffee↵generate data↵upload information↵Potenti ultricies augue hymenaeos felis. Tincidunt at dictumst mattis inceptos senectus. Urna sem elementum posuere pulvinar tellus orci nascetur per mus odio. Ac magnis taciti tempus. Eleifend ligula vivamus urna in diam consequat. Cursus proin egestas praesent. Faucibus, volutpat diam.↵go home"

note4_body_with_style = "<ol><li>Nullam nisi in pellentesque eleifend, fusce lacus per nulla vulputate, varius congue taciti lacus integer class fringilla. Ultricies adipiscing sociis.</li><li class=\"ql-indent-1\"><span style=\"color: rgb(255, 153, 0);\">Buy milk</span></li><li class=\"ql-indent-1\"><span style=\"color: rgb(255, 153, 0);\">debug </span></li><li class=\"ql-indent-1\"><span style=\"color: rgb(255, 153, 0);\">sleep</span></li><li>Laoreet rhoncus fermentum cras urna. Nonummy penatibus cubilia potenti, nisi Vitae duis eget facilisis curabitur lacinia. Inceptos dis sociis class lectus pretium orci porta porta, morbi condimentum nibh quisque dui nisi, purus lobortis magna, libero, nisi, malesuada leo tristique at.</li><li class=\"ql-indent-1\"><span style=\"color: rgb(204, 232, 204);\">buy coffee</span></li><li class=\"ql-indent-1\"><span style=\"color: rgb(204, 232, 204);\">generate data</span></li><li class=\"ql-indent-1\"><span style=\"color: rgb(204, 232, 204);\">upload information</span></li><li>Potenti ultricies augue hymenaeos felis. Tincidunt at dictumst mattis inceptos senectus. Urna sem elementum posuere pulvinar tellus orci nascetur per mus odio. Ac magnis taciti tempus. Eleifend ligula vivamus urna in diam consequat. Cursus proin egestas praesent. Faucibus, volutpat diam.</li><li class=\"ql-indent-1\"><span style=\"color: rgb(230, 0, 0);\">go home</span></li></ol><p><span class=\"ql-cursor\">﻿</span></p>"

note5_body = "Coffe↵Coding↵Debugging"
note5_body_with_style = "<ul><li><span style=\"color: rgb(178, 107, 0);\">Coffe</span></li><li><span class=\"ql-size-large\" style=\"color: rgb(0, 71, 178);\">Coding</span></li><li><span class=\"ql-size-huge\" style=\"color: rgb(230, 0, 0);\">Debugging</span></li></ul>"

note6_body = "Spicy jalapeno bacon ipsum dolor amet turducken buffalo pork loin, ribeye ground round rump chicken flank meatball bacon short ribs meatloaf drumstick. Fatback tenderloin sirloin beef ribs. Pork hamburger rump ground round venison landjaeger biltong jerky. Pastrami bresaola picanha pancetta turkey pork loin turducken strip steak ham porchetta ham hock biltong.↵↵Leberkas rump tongue ham hock landjaeger flank biltong chuck corned beef pancetta bacon porchetta prosciutto tail. Alcatra short ribs ground round strip steak flank pork swine ham hock picanha rump pastrami sirloin chuck brisket ham. Cupim meatloaf shoulder bresaola meatball shank short ribs short loin beef. Ham frankfurter tongue porchetta ribeye turducken shoulder swine. Frankfurter beef ribs jerky fatback. Shank picanha hamburger shoulder.↵↵Pork chop burgdoggen kielbasa brisket tongue cupim jerky t-bone rump buffalo tri-tip. Pork belly frankfurter landjaeger kielbasa shankle. Buffalo shoulder shankle kielbasa. Drumstick meatball t-bone jerky, pancetta kielbasa corned beef turducken porchetta. Bacon buffalo fatback tenderloin frankfurter ham hock pork loin t-bone."

note6_body_with_style = "<p><span style=\"background-color: rgb(255, 255, 102);\">Spicy jalapeno bacon ipsum dolor amet turducken buffalo pork loin, ribeye ground round rump chicken flank meatball bacon short ribs meatloaf drumstick. Fatback tenderloin sirloin beef ribs. Pork hamburger rump ground round venison landjaeger biltong jerky. Pastrami bresaola picanha pancetta turkey pork loin turducken strip steak ham porchetta ham hock biltong.</span></p><p><br></p><p><span style=\"color: rgb(240, 102, 102);\">Leberkas rump tongue ham hock landjaeger flank biltong chuck corned beef pancetta bacon porchetta prosciutto tail. Alcatra short ribs ground round strip steak flank pork swine ham hock picanha rump pastrami sirloin chuck brisket ham. Cupim meatloaf shoulder bresaola meatball shank short ribs short loin beef. Ham frankfurter tongue porchetta ribeye turducken shoulder swine. Frankfurter beef ribs jerky fatback. Shank picanha hamburger shoulder.</span></p><p><br></p><p><strong><em>Pork chop burgdoggen kielbasa brisket tongue cupim jerky t-bone rump buffalo tri-tip. Pork belly frankfurter landjaeger kielbasa shankle. Buffalo shoulder shankle kielbasa. Drumstick meatball t-bone jerky, pancetta kielbasa corned beef turducken porchetta. Bacon buffalo fatback tenderloin frankfurter ham hock pork loin t-bone.</em></strong></p><p><br></p>"

note7_body = "Bacon ipsum dolor amet duis jowl magna, veniam corned beef pancetta buffalo in shankle tempor sunt. Pork ullamco exercitation, rump deserunt meatloaf et porchetta in t-bone. Short loin laboris voluptate, drumstick veniam velit prosciutto ad venison. Do kielbasa pig enim salami ex consequat dolore. Cillum ea ribeye, leberkas swine non magna deserunt anim."

note7_body_with_style = "<p><span class=\"ql-font-monospace\" style=\"background-color: rgb(204, 224, 245);\">Bacon ipsum dolor amet duis jowl magna, veniam corned beef pancetta buffalo in shankle tempor sunt. </span><span class=\"ql-font-monospace\">Pork ullamco exercitation, rump deserunt meatloaf et porchetta in t-bone. Short loin laboris voluptate, drumstick veniam velit prosciutto ad venison. </span><s class=\"ql-font-monospace\" style=\"color: rgb(0, 102, 204);\">Do kielbasa pig enim salami ex consequat dolore. Cillum ea ribeye, leberkas swine non magna deserunt anim.</s></p>"

note8_body = "Pudding bear claw candy tiramisu icing pie chocolate cotton candy brownie. Dragée I love I love chocolate bar candy chocolate jujubes lollipop. Jelly-o cake sweet roll.↵↵I love tootsie roll chocolate cake danish cotton candy gummies jujubes I love apple pie. I love cotton candy tart. Cupcake sesame snaps macaroon pastry fruitcake powder jelly tiramisu tart. Ice cream lemon drops I love I love."

note8_body_with_style = "<p><span class=\"ql-size-large\" style=\"color: rgb(230, 0, 0);\">Pudding</span><span class=\"ql-size-large\"> bear claw candy tiramisu icing pie chocolate cotton candy brownie. Dragée I love I love chocolate bar candy chocolate jujubes lollipop. Jelly-o cake sweet roll.</span></p><p><br></p><p>I love tootsie roll chocolate cake danish cotton candy gummies jujubes I love apple pie. I love cotton candy tart. <strong style=\"color: rgb(255, 194, 102);\"><em>Cupcake sesame snaps macaroon pastry fruitcake powder jelly tiramisu tart. Ice cream lemon drops I love I love.</em></strong></p>"

note9_body = "SO FUN"
note9_body_with_style = "<p><span class=\"ql-size-huge\" style=\"color: rgb(230, 0, 0); background-color: rgb(255, 255, 0);\">SO FUN</span></p>"

note1 = Note.create!(title: "Lorem Ipsum", user_id: demo_user.id, notebook_id: random_book.id, body: note1_body, body_with_style: note1_body_with_style)
note2 = Note.create!(title: "Journal", user_id: demo_user.id, notebook_id: general_book.id, body: note2_body, body_with_style: note2_body_with_style)
note3 = Note.create!(title: "Japan", user_id: demo_user.id, notebook_id: general_book.id, body: note3_body, body_with_style: note3_body_with_style)
note4 = Note.create!(title: "ToDo List", user_id: demo_user.id, notebook_id: life_book.id, body: note4_body, body_with_style: note4_body_with_style)
note6 = Note.create!(title: "Hungry?", user_id: demo_user.id, notebook_id: random_book.id, body: note6_body, body_with_style: note6_body_with_style)
note7 = Note.create!(title: "Lunch Time", user_id: demo_user.id, notebook_id: life_book.id, body: note7_body, body_with_style: note7_body_with_style)
note8 = Note.create!(title: "Pudding", user_id: demo_user.id, notebook_id: life_book.id, body: note8_body, body_with_style: note8_body_with_style)
note9 = Note.create!(title: "FS Project", user_id: demo_user.id, notebook_id: life_book.id, body: note9_body, body_with_style: note9_body_with_style)
note5 = Note.create!(title: "AA Life", user_id: demo_user.id, notebook_id: life_book.id, body: note5_body, body_with_style: note5_body_with_style)


tag1 = Tag.create!(name: "Japan", user_id: demo_user.id)
tag2 = Tag.create!(name: "Life", user_id: demo_user.id)
tag3 = Tag.create!(name: "Coding", user_id: demo_user.id)
tag4 = Tag.create!(name: "News", user_id: demo_user.id)
tag5 = Tag.create!(name: "Random", user_id: demo_user.id)
tag6 = Tag.create!(name: "pork chop", user_id: demo_user.id)
tag7 = Tag.create!(name: "meat", user_id: demo_user.id)
tag8 = Tag.create!(name: "hungry", user_id: demo_user.id)
tag9 = Tag.create!(name: "sweet", user_id: demo_user.id)
tag10 = Tag.create!(name: "debugging", user_id: demo_user.id)


tagging_list = [
  [note1.id, tag5.id],
  [note2.id, tag3.id],
  [note2.id, tag5.id],
  [note3.id, tag1.id],
  [note3.id, tag2.id],
  [note4.id, tag2.id],
  [note4.id, tag4.id],
  [note5.id, tag2.id],
  [note5.id, tag3.id],
  [note5.id, tag4.id],
  [note6.id, tag2.id],
  [note6.id, tag6.id],
  [note6.id, tag7.id],
  [note6.id, tag8.id],
  [note7.id, tag6.id],
  [note7.id, tag3.id],
  [note7.id, tag8.id],
  [note8.id, tag8.id],
  [note8.id, tag9.id],
  [note8.id, tag2.id],
  [note9.id, tag10.id],
  [note9.id, tag2.id],
  [note9.id, tag3.id],
]

tagging_list.each do |note_id, tag_id|
  Tagging.create!(note_id: note_id, tag_id: tag_id)
end
