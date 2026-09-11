/**
 * ALICE ESL Phonics P4 - 小兔冰上拼讀大冒險題庫
 * 課本學習範圍：Page 04 - 12
 * 主題：Farm Animals, Beginning Sounds & Consonant Blends
 */

const P4_VOCABULARY = [
  {
    "id": "Holly",
    "word": "Holly",
    "zh": "Holly",
    "image": "P4_flashcards_images/P4_Holly.webp",
    "audioEn": "P4_flashcards_audios/P4_Holly.mp3",
    "audioZh": "P4_flashcards_audios/P4_Holly_zh.mp3"
  },
  {
    "id": "back",
    "word": "back",
    "zh": "back",
    "image": "P4_flashcards_images/P4_back.webp",
    "audioEn": "P4_flashcards_audios/P4_back.mp3",
    "audioZh": "P4_flashcards_audios/P4_back_zh.mp3"
  },
  {
    "id": "bench",
    "word": "bench",
    "zh": "bench",
    "image": "P4_flashcards_images/P4_bench.webp",
    "audioEn": "P4_flashcards_audios/P4_bench.mp3",
    "audioZh": "P4_flashcards_audios/P4_bench_zh.mp3"
  },
  {
    "id": "black",
    "word": "black",
    "zh": "black",
    "image": "P4_flashcards_images/P4_black.webp",
    "audioEn": "P4_flashcards_audios/P4_black.mp3",
    "audioZh": "P4_flashcards_audios/P4_black_zh.mp3"
  },
  {
    "id": "block",
    "word": "block",
    "zh": "block",
    "image": "P4_flashcards_images/P4_block.webp",
    "audioEn": "P4_flashcards_audios/P4_block.mp3",
    "audioZh": "P4_flashcards_audios/P4_block_zh.mp3"
  },
  {
    "id": "blue",
    "word": "blue",
    "zh": "blue",
    "image": "P4_flashcards_images/P4_blue.webp",
    "audioEn": "P4_flashcards_audios/P4_blue.mp3",
    "audioZh": "P4_flashcards_audios/P4_blue_zh.mp3"
  },
  {
    "id": "bread",
    "word": "bread",
    "zh": "bread",
    "image": "P4_flashcards_images/P4_bread.webp",
    "audioEn": "P4_flashcards_audios/P4_bread.mp3",
    "audioZh": "P4_flashcards_audios/P4_bread_zh.mp3"
  },
  {
    "id": "brown",
    "word": "brown",
    "zh": "brown",
    "image": "P4_flashcards_images/P4_brown.webp",
    "audioEn": "P4_flashcards_audios/P4_brown.mp3",
    "audioZh": "P4_flashcards_audios/P4_brown_zh.mp3"
  },
  {
    "id": "brush",
    "word": "brush",
    "zh": "brush",
    "image": "P4_flashcards_images/P4_brush.webp",
    "audioEn": "P4_flashcards_audios/P4_brush.mp3",
    "audioZh": "P4_flashcards_audios/P4_brush_zh.mp3"
  },
  {
    "id": "bubble",
    "word": "bubble",
    "zh": "bubble",
    "image": "P4_flashcards_images/P4_bubble.webp",
    "audioEn": "P4_flashcards_audios/P4_bubble.mp3",
    "audioZh": "P4_flashcards_audios/P4_bubble_zh.mp3"
  },
  {
    "id": "came",
    "word": "came",
    "zh": "came",
    "image": "P4_flashcards_images/P4_came.webp",
    "audioEn": "P4_flashcards_audios/P4_came.mp3",
    "audioZh": "P4_flashcards_audios/P4_came_zh.mp3"
  },
  {
    "id": "can",
    "word": "can",
    "zh": "can",
    "image": "P4_flashcards_images/P4_can.webp",
    "audioEn": "P4_flashcards_audios/P4_can.mp3",
    "audioZh": "P4_flashcards_audios/P4_can_zh.mp3"
  },
  {
    "id": "car",
    "word": "car",
    "zh": "car",
    "image": "P4_flashcards_images/P4_car.webp",
    "audioEn": "P4_flashcards_audios/P4_car.mp3",
    "audioZh": "P4_flashcards_audios/P4_car_zh.mp3"
  },
  {
    "id": "cat",
    "word": "cat",
    "zh": "cat",
    "image": "P4_flashcards_images/P4_cat.webp",
    "audioEn": "P4_flashcards_audios/P4_cat.mp3",
    "audioZh": "P4_flashcards_audios/P4_cat_zh.mp3"
  },
  {
    "id": "catch",
    "word": "catch",
    "zh": "catch",
    "image": "P4_flashcards_images/P4_catch.webp",
    "audioEn": "P4_flashcards_audios/P4_catch.mp3",
    "audioZh": "P4_flashcards_audios/P4_catch_zh.mp3"
  },
  {
    "id": "chain",
    "word": "chain",
    "zh": "chain",
    "image": "P4_flashcards_images/P4_chain.webp",
    "audioEn": "P4_flashcards_audios/P4_chain.mp3",
    "audioZh": "P4_flashcards_audios/P4_chain_zh.mp3"
  },
  {
    "id": "cheap",
    "word": "cheap",
    "zh": "cheap",
    "image": "P4_flashcards_images/P4_cheap.webp",
    "audioEn": "P4_flashcards_audios/P4_cheap.mp3",
    "audioZh": "P4_flashcards_audios/P4_cheap_zh.mp3"
  },
  {
    "id": "church",
    "word": "church",
    "zh": "church",
    "image": "P4_flashcards_images/P4_church.webp",
    "audioEn": "P4_flashcards_audios/P4_church.mp3",
    "audioZh": "P4_flashcards_audios/P4_church_zh.mp3"
  },
  {
    "id": "clap",
    "word": "clap",
    "zh": "clap",
    "image": "P4_flashcards_images/P4_clap.webp",
    "audioEn": "P4_flashcards_audios/P4_clap.mp3",
    "audioZh": "P4_flashcards_audios/P4_clap_zh.mp3"
  },
  {
    "id": "clock",
    "word": "clock",
    "zh": "clock",
    "image": "P4_flashcards_images/P4_clock.webp",
    "audioEn": "P4_flashcards_audios/P4_clock.mp3",
    "audioZh": "P4_flashcards_audios/P4_clock_zh.mp3"
  },
  {
    "id": "cow",
    "word": "cow",
    "zh": "cow",
    "image": "P4_flashcards_images/P4_cow.webp",
    "audioEn": "P4_flashcards_audios/P4_cow.mp3",
    "audioZh": "P4_flashcards_audios/P4_cow_zh.mp3"
  },
  {
    "id": "crab",
    "word": "crab",
    "zh": "crab",
    "image": "P4_flashcards_images/P4_crab.webp",
    "audioEn": "P4_flashcards_audios/P4_crab.mp3",
    "audioZh": "P4_flashcards_audios/P4_crab_zh.mp3"
  },
  {
    "id": "cry",
    "word": "cry",
    "zh": "cry",
    "image": "P4_flashcards_images/P4_cry.webp",
    "audioEn": "P4_flashcards_audios/P4_cry.mp3",
    "audioZh": "P4_flashcards_audios/P4_cry_zh.mp3"
  },
  {
    "id": "drink",
    "word": "drink",
    "zh": "drink",
    "image": "P4_flashcards_images/P4_drink.webp",
    "audioEn": "P4_flashcards_audios/P4_drink.mp3",
    "audioZh": "P4_flashcards_audios/P4_drink_zh.mp3"
  },
  {
    "id": "drum",
    "word": "drum",
    "zh": "drum",
    "image": "P4_flashcards_images/P4_drum.webp",
    "audioEn": "P4_flashcards_audios/P4_drum.mp3",
    "audioZh": "P4_flashcards_audios/P4_drum_zh.mp3"
  },
  {
    "id": "duck",
    "word": "duck",
    "zh": "duck",
    "image": "P4_flashcards_images/P4_duck.webp",
    "audioEn": "P4_flashcards_audios/P4_duck.mp3",
    "audioZh": "P4_flashcards_audios/P4_duck_zh.mp3"
  },
  {
    "id": "eighteen",
    "word": "eighteen",
    "zh": "eighteen",
    "image": "P4_flashcards_images/P4_eighteen.webp",
    "audioEn": "P4_flashcards_audios/P4_eighteen.mp3",
    "audioZh": "P4_flashcards_audios/P4_eighteen_zh.mp3"
  },
  {
    "id": "eleven",
    "word": "eleven",
    "zh": "eleven",
    "image": "P4_flashcards_images/P4_eleven.webp",
    "audioEn": "P4_flashcards_audios/P4_eleven.mp3",
    "audioZh": "P4_flashcards_audios/P4_eleven_zh.mp3"
  },
  {
    "id": "fifteen",
    "word": "fifteen",
    "zh": "fifteen",
    "image": "P4_flashcards_images/P4_fifteen.webp",
    "audioEn": "P4_flashcards_audios/P4_fifteen.mp3",
    "audioZh": "P4_flashcards_audios/P4_fifteen_zh.mp3"
  },
  {
    "id": "float",
    "word": "float",
    "zh": "float",
    "image": "P4_flashcards_images/P4_float.webp",
    "audioEn": "P4_flashcards_audios/P4_float.mp3",
    "audioZh": "P4_flashcards_audios/P4_float_zh.mp3"
  },
  {
    "id": "fly",
    "word": "fly",
    "zh": "fly",
    "image": "P4_flashcards_images/P4_fly.webp",
    "audioEn": "P4_flashcards_audios/P4_fly.mp3",
    "audioZh": "P4_flashcards_audios/P4_fly_zh.mp3"
  },
  {
    "id": "fourteen",
    "word": "fourteen",
    "zh": "fourteen",
    "image": "P4_flashcards_images/P4_fourteen.webp",
    "audioEn": "P4_flashcards_audios/P4_fourteen.mp3",
    "audioZh": "P4_flashcards_audios/P4_fourteen_zh.mp3"
  },
  {
    "id": "frog",
    "word": "frog",
    "zh": "frog",
    "image": "P4_flashcards_images/P4_frog.webp",
    "audioEn": "P4_flashcards_audios/P4_frog.mp3",
    "audioZh": "P4_flashcards_audios/P4_frog_zh.mp3"
  },
  {
    "id": "fruit",
    "word": "fruit",
    "zh": "fruit",
    "image": "P4_flashcards_images/P4_fruit.webp",
    "audioEn": "P4_flashcards_audios/P4_fruit.mp3",
    "audioZh": "P4_flashcards_audios/P4_fruit_zh.mp3"
  },
  {
    "id": "girl",
    "word": "girl",
    "zh": "girl",
    "image": "P4_flashcards_images/P4_girl.webp",
    "audioEn": "P4_flashcards_audios/P4_girl.mp3",
    "audioZh": "P4_flashcards_audios/P4_girl_zh.mp3"
  },
  {
    "id": "glass",
    "word": "glass",
    "zh": "glass",
    "image": "P4_flashcards_images/P4_glass.webp",
    "audioEn": "P4_flashcards_audios/P4_glass.mp3",
    "audioZh": "P4_flashcards_audios/P4_glass_zh.mp3"
  },
  {
    "id": "glue",
    "word": "glue",
    "zh": "glue",
    "image": "P4_flashcards_images/P4_glue.webp",
    "audioEn": "P4_flashcards_audios/P4_glue.mp3",
    "audioZh": "P4_flashcards_audios/P4_glue_zh.mp3"
  },
  {
    "id": "go",
    "word": "go",
    "zh": "go",
    "image": "P4_flashcards_images/P4_go.webp",
    "audioEn": "P4_flashcards_audios/P4_go.mp3",
    "audioZh": "P4_flashcards_audios/P4_go_zh.mp3"
  },
  {
    "id": "goat",
    "word": "goat",
    "zh": "goat",
    "image": "P4_flashcards_images/P4_goat.webp",
    "audioEn": "P4_flashcards_audios/P4_goat.mp3",
    "audioZh": "P4_flashcards_audios/P4_goat_zh.mp3"
  },
  {
    "id": "goose",
    "word": "goose",
    "zh": "goose",
    "image": "P4_flashcards_images/P4_goose.webp",
    "audioEn": "P4_flashcards_audios/P4_goose.mp3",
    "audioZh": "P4_flashcards_audios/P4_goose_zh.mp3"
  },
  {
    "id": "grass",
    "word": "grass",
    "zh": "grass",
    "image": "P4_flashcards_images/P4_grass.webp",
    "audioEn": "P4_flashcards_audios/P4_grass.mp3",
    "audioZh": "P4_flashcards_audios/P4_grass_zh.mp3"
  },
  {
    "id": "green",
    "word": "green",
    "zh": "green",
    "image": "P4_flashcards_images/P4_green.webp",
    "audioEn": "P4_flashcards_audios/P4_green.mp3",
    "audioZh": "P4_flashcards_audios/P4_green_zh.mp3"
  },
  {
    "id": "grocery",
    "word": "grocery",
    "zh": "grocery",
    "image": "P4_flashcards_images/P4_grocery.webp",
    "audioEn": "P4_flashcards_audios/P4_grocery.mp3",
    "audioZh": "P4_flashcards_audios/P4_grocery_zh.mp3"
  },
  {
    "id": "hello",
    "word": "hello",
    "zh": "hello",
    "image": "P4_flashcards_images/P4_hello.webp",
    "audioEn": "P4_flashcards_audios/P4_hello.mp3",
    "audioZh": "P4_flashcards_audios/P4_hello_zh.mp3"
  },
  {
    "id": "lobby",
    "word": "lobby",
    "zh": "lobby",
    "image": "P4_flashcards_images/P4_lobby.webp",
    "audioEn": "P4_flashcards_audios/P4_lobby.mp3",
    "audioZh": "P4_flashcards_audios/P4_lobby_zh.mp3"
  },
  {
    "id": "nineteen",
    "word": "nineteen",
    "zh": "nineteen",
    "image": "P4_flashcards_images/P4_nineteen.webp",
    "audioEn": "P4_flashcards_audios/P4_nineteen.mp3",
    "audioZh": "P4_flashcards_audios/P4_nineteen_zh.mp3"
  },
  {
    "id": "pack",
    "word": "pack",
    "zh": "pack",
    "image": "P4_flashcards_images/P4_pack.webp",
    "audioEn": "P4_flashcards_audios/P4_pack.mp3",
    "audioZh": "P4_flashcards_audios/P4_pack_zh.mp3"
  },
  {
    "id": "pan",
    "word": "pan",
    "zh": "pan",
    "image": "P4_flashcards_images/P4_pan.webp",
    "audioEn": "P4_flashcards_audios/P4_pan.mp3",
    "audioZh": "P4_flashcards_audios/P4_pan_zh.mp3"
  },
  {
    "id": "pet",
    "word": "pet",
    "zh": "pet",
    "image": "P4_flashcards_images/P4_pet.webp",
    "audioEn": "P4_flashcards_audios/P4_pet.mp3",
    "audioZh": "P4_flashcards_audios/P4_pet_zh.mp3"
  },
  {
    "id": "pig",
    "word": "pig",
    "zh": "pig",
    "image": "P4_flashcards_images/P4_pig.webp",
    "audioEn": "P4_flashcards_audios/P4_pig.mp3",
    "audioZh": "P4_flashcards_audios/P4_pig_zh.mp3"
  },
  {
    "id": "plane",
    "word": "plane",
    "zh": "plane",
    "image": "P4_flashcards_images/P4_plane.webp",
    "audioEn": "P4_flashcards_audios/P4_plane.mp3",
    "audioZh": "P4_flashcards_audios/P4_plane_zh.mp3"
  },
  {
    "id": "play",
    "word": "play",
    "zh": "play",
    "image": "P4_flashcards_images/P4_play.webp",
    "audioEn": "P4_flashcards_audios/P4_play.mp3",
    "audioZh": "P4_flashcards_audios/P4_play_zh.mp3"
  },
  {
    "id": "police",
    "word": "police",
    "zh": "police",
    "image": "P4_flashcards_images/P4_police.webp",
    "audioEn": "P4_flashcards_audios/P4_police.mp3",
    "audioZh": "P4_flashcards_audios/P4_police_zh.mp3"
  },
  {
    "id": "purple",
    "word": "purple",
    "zh": "purple",
    "image": "P4_flashcards_images/P4_purple.webp",
    "audioEn": "P4_flashcards_audios/P4_purple.mp3",
    "audioZh": "P4_flashcards_audios/P4_purple_zh.mp3"
  },
  {
    "id": "queen",
    "word": "queen",
    "zh": "queen",
    "image": "P4_flashcards_images/P4_queen.webp",
    "audioEn": "P4_flashcards_audios/P4_queen.mp3",
    "audioZh": "P4_flashcards_audios/P4_queen_zh.mp3"
  },
  {
    "id": "question",
    "word": "question",
    "zh": "question",
    "image": "P4_flashcards_images/P4_question.webp",
    "audioEn": "P4_flashcards_audios/P4_question.mp3",
    "audioZh": "P4_flashcards_audios/P4_question_zh.mp3"
  },
  {
    "id": "quiet",
    "word": "quiet",
    "zh": "quiet",
    "image": "P4_flashcards_images/P4_quiet.webp",
    "audioEn": "P4_flashcards_audios/P4_quiet.mp3",
    "audioZh": "P4_flashcards_audios/P4_quiet_zh.mp3"
  },
  {
    "id": "quiz",
    "word": "quiz",
    "zh": "quiz",
    "image": "P4_flashcards_images/P4_quiz.webp",
    "audioEn": "P4_flashcards_audios/P4_quiz.mp3",
    "audioZh": "P4_flashcards_audios/P4_quiz_zh.mp3"
  },
  {
    "id": "rabbit",
    "word": "rabbit",
    "zh": "rabbit",
    "image": "P4_flashcards_images/P4_rabbit.webp",
    "audioEn": "P4_flashcards_audios/P4_rabbit.mp3",
    "audioZh": "P4_flashcards_audios/P4_rabbit_zh.mp3"
  },
  {
    "id": "ribbon",
    "word": "ribbon",
    "zh": "ribbon",
    "image": "P4_flashcards_images/P4_ribbon.webp",
    "audioEn": "P4_flashcards_audios/P4_ribbon.mp3",
    "audioZh": "P4_flashcards_audios/P4_ribbon_zh.mp3"
  },
  {
    "id": "schedule",
    "word": "schedule",
    "zh": "schedule",
    "image": "P4_flashcards_images/P4_schedule.webp",
    "audioEn": "P4_flashcards_audios/P4_schedule.mp3",
    "audioZh": "P4_flashcards_audios/P4_schedule_zh.mp3"
  },
  {
    "id": "school",
    "word": "school",
    "zh": "school",
    "image": "P4_flashcards_images/P4_school.webp",
    "audioEn": "P4_flashcards_audios/P4_school.mp3",
    "audioZh": "P4_flashcards_audios/P4_school_zh.mp3"
  },
  {
    "id": "scooter",
    "word": "scooter",
    "zh": "scooter",
    "image": "P4_flashcards_images/P4_scooter.webp",
    "audioEn": "P4_flashcards_audios/P4_scooter.mp3",
    "audioZh": "P4_flashcards_audios/P4_scooter_zh.mp3"
  },
  {
    "id": "score",
    "word": "score",
    "zh": "score",
    "image": "P4_flashcards_images/P4_score.webp",
    "audioEn": "P4_flashcards_audios/P4_score.mp3",
    "audioZh": "P4_flashcards_audios/P4_score_zh.mp3"
  },
  {
    "id": "seventeen",
    "word": "seventeen",
    "zh": "seventeen",
    "image": "P4_flashcards_images/P4_seventeen.webp",
    "audioEn": "P4_flashcards_audios/P4_seventeen.mp3",
    "audioZh": "P4_flashcards_audios/P4_seventeen_zh.mp3"
  },
  {
    "id": "she",
    "word": "she",
    "zh": "she",
    "image": "P4_flashcards_images/P4_she.webp",
    "audioEn": "P4_flashcards_audios/P4_she.mp3",
    "audioZh": "P4_flashcards_audios/P4_she_zh.mp3"
  },
  {
    "id": "sheep",
    "word": "sheep",
    "zh": "sheep",
    "image": "P4_flashcards_images/P4_sheep.webp",
    "audioEn": "P4_flashcards_audios/P4_sheep.mp3",
    "audioZh": "P4_flashcards_audios/P4_sheep_zh.mp3"
  },
  {
    "id": "sixteen",
    "word": "sixteen",
    "zh": "sixteen",
    "image": "P4_flashcards_images/P4_sixteen.webp",
    "audioEn": "P4_flashcards_audios/P4_sixteen.mp3",
    "audioZh": "P4_flashcards_audios/P4_sixteen_zh.mp3"
  },
  {
    "id": "skate",
    "word": "skate",
    "zh": "skate",
    "image": "P4_flashcards_images/P4_skate.webp",
    "audioEn": "P4_flashcards_audios/P4_skate.mp3",
    "audioZh": "P4_flashcards_audios/P4_skate_zh.mp3"
  },
  {
    "id": "skirt",
    "word": "skirt",
    "zh": "skirt",
    "image": "P4_flashcards_images/P4_skirt.webp",
    "audioEn": "P4_flashcards_audios/P4_skirt.mp3",
    "audioZh": "P4_flashcards_audios/P4_skirt_zh.mp3"
  },
  {
    "id": "sleep",
    "word": "sleep",
    "zh": "sleep",
    "image": "P4_flashcards_images/P4_sleep.webp",
    "audioEn": "P4_flashcards_audios/P4_sleep.mp3",
    "audioZh": "P4_flashcards_audios/P4_sleep_zh.mp3"
  },
  {
    "id": "slide",
    "word": "slide",
    "zh": "slide",
    "image": "P4_flashcards_images/P4_slide.webp",
    "audioEn": "P4_flashcards_audios/P4_slide.mp3",
    "audioZh": "P4_flashcards_audios/P4_slide_zh.mp3"
  },
  {
    "id": "small",
    "word": "small",
    "zh": "small",
    "image": "P4_flashcards_images/P4_small.webp",
    "audioEn": "P4_flashcards_audios/P4_small.mp3",
    "audioZh": "P4_flashcards_audios/P4_small_zh.mp3"
  },
  {
    "id": "smile",
    "word": "smile",
    "zh": "smile",
    "image": "P4_flashcards_images/P4_smile.webp",
    "audioEn": "P4_flashcards_audios/P4_smile.mp3",
    "audioZh": "P4_flashcards_audios/P4_smile_zh.mp3"
  },
  {
    "id": "snail",
    "word": "snail",
    "zh": "snail",
    "image": "P4_flashcards_images/P4_snail.webp",
    "audioEn": "P4_flashcards_audios/P4_snail.mp3",
    "audioZh": "P4_flashcards_audios/P4_snail_zh.mp3"
  },
  {
    "id": "snake",
    "word": "snake",
    "zh": "snake",
    "image": "P4_flashcards_images/P4_snake.webp",
    "audioEn": "P4_flashcards_audios/P4_snake.mp3",
    "audioZh": "P4_flashcards_audios/P4_snake_zh.mp3"
  },
  {
    "id": "spider",
    "word": "spider",
    "zh": "spider",
    "image": "P4_flashcards_images/P4_spider.webp",
    "audioEn": "P4_flashcards_audios/P4_spider.mp3",
    "audioZh": "P4_flashcards_audios/P4_spider_zh.mp3"
  },
  {
    "id": "spoon",
    "word": "spoon",
    "zh": "spoon",
    "image": "P4_flashcards_images/P4_spoon.webp",
    "audioEn": "P4_flashcards_audios/P4_spoon.mp3",
    "audioZh": "P4_flashcards_audios/P4_spoon_zh.mp3"
  },
  {
    "id": "swallow",
    "word": "swallow",
    "zh": "swallow",
    "image": "P4_flashcards_images/P4_swallow.webp",
    "audioEn": "P4_flashcards_audios/P4_swallow.mp3",
    "audioZh": "P4_flashcards_audios/P4_swallow_zh.mp3"
  },
  {
    "id": "swim",
    "word": "swim",
    "zh": "swim",
    "image": "P4_flashcards_images/P4_swim.webp",
    "audioEn": "P4_flashcards_audios/P4_swim.mp3",
    "audioZh": "P4_flashcards_audios/P4_swim_zh.mp3"
  },
  {
    "id": "thirteen",
    "word": "thirteen",
    "zh": "thirteen",
    "image": "P4_flashcards_images/P4_thirteen.webp",
    "audioEn": "P4_flashcards_audios/P4_thirteen.mp3",
    "audioZh": "P4_flashcards_audios/P4_thirteen_zh.mp3"
  },
  {
    "id": "train",
    "word": "train",
    "zh": "train",
    "image": "P4_flashcards_images/P4_train.webp",
    "audioEn": "P4_flashcards_audios/P4_train.mp3",
    "audioZh": "P4_flashcards_audios/P4_train_zh.mp3"
  },
  {
    "id": "tree",
    "word": "tree",
    "zh": "tree",
    "image": "P4_flashcards_images/P4_tree.webp",
    "audioEn": "P4_flashcards_audios/P4_tree.mp3",
    "audioZh": "P4_flashcards_audios/P4_tree_zh.mp3"
  },
  {
    "id": "twelve",
    "word": "twelve",
    "zh": "twelve",
    "image": "P4_flashcards_images/P4_twelve.webp",
    "audioEn": "P4_flashcards_audios/P4_twelve.mp3",
    "audioZh": "P4_flashcards_audios/P4_twelve_zh.mp3"
  },
  {
    "id": "twenty",
    "word": "twenty",
    "zh": "twenty",
    "image": "P4_flashcards_images/P4_twenty.webp",
    "audioEn": "P4_flashcards_audios/P4_twenty.mp3",
    "audioZh": "P4_flashcards_audios/P4_twenty_zh.mp3"
  },
  {
    "id": "wash",
    "word": "wash",
    "zh": "wash",
    "image": "P4_flashcards_images/P4_wash.webp",
    "audioEn": "P4_flashcards_audios/P4_wash.mp3",
    "audioZh": "P4_flashcards_audios/P4_wash_zh.mp3"
  },
  {
    "id": "watch",
    "word": "watch",
    "zh": "watch",
    "image": "P4_flashcards_images/P4_watch.webp",
    "audioEn": "P4_flashcards_audios/P4_watch.mp3",
    "audioZh": "P4_flashcards_audios/P4_watch_zh.mp3"
  },
  {
    "id": "whale",
    "word": "whale",
    "zh": "whale",
    "image": "P4_flashcards_images/P4_whale.webp",
    "audioEn": "P4_flashcards_audios/P4_whale.mp3",
    "audioZh": "P4_flashcards_audios/P4_whale_zh.mp3"
  },
  {
    "id": "wheel",
    "word": "wheel",
    "zh": "wheel",
    "image": "P4_flashcards_images/P4_wheel.webp",
    "audioEn": "P4_flashcards_audios/P4_wheel.mp3",
    "audioZh": "P4_flashcards_audios/P4_wheel_zh.mp3"
  },
  {
    "id": "white",
    "word": "white",
    "zh": "white",
    "image": "P4_flashcards_images/P4_white.webp",
    "audioEn": "P4_flashcards_audios/P4_white.mp3",
    "audioZh": "P4_flashcards_audios/P4_white_zh.mp3"
  },
  {
    "id": "why",
    "word": "why",
    "zh": "why",
    "image": "P4_flashcards_images/P4_why.webp",
    "audioEn": "P4_flashcards_audios/P4_why.mp3",
    "audioZh": "P4_flashcards_audios/P4_why_zh.mp3"
  },
  {
    "id": "yellow",
    "word": "yellow",
    "zh": "yellow",
    "image": "P4_flashcards_images/P4_yellow.webp",
    "audioEn": "P4_flashcards_audios/P4_yellow.mp3",
    "audioZh": "P4_flashcards_audios/P4_yellow_zh.mp3"
  }
];

// 自然發音/首音分組（對應課本 Page 04 - 12）
const PHONICS_GROUPS = {
  "Cc": [
    "cat",
    "catch",
    "cow",
    "car",
    "came",
    "can"
  ],
  "Gg": [
    "goat",
    "go",
    "girl",
    "goose",
    "green",
    "grass",
    "grocery"
  ],
  "Pp": [
    "police",
    "pig",
    "pet",
    "purple",
    "pack",
    "pan",
    "plane",
    "play"
  ]
};

// 課文動作與問答情境題庫
const ANIMAL_ACTION_QUESTIONS = [
  {
    "subject": "Cat",
    "action": "catch",
    "sentence": "The cat can catch the mouse!",
    "question": "What can the cat do?",
    "options": [
      "catch",
      "swim",
      "fly"
    ],
    "correct": "catch"
  },
  {
    "subject": "Goat",
    "action": "eat",
    "sentence": "The goat can eat green grass.",
    "question": "What does the goat eat?",
    "options": [
      "grass",
      "drum",
      "clock"
    ],
    "correct": "grass"
  },
  {
    "subject": "Pig",
    "action": "sleep",
    "sentence": "The little pig can sleep in the barn.",
    "question": "What can the pig do?",
    "options": [
      "sleep",
      "skate",
      "clap"
    ],
    "correct": "sleep"
  },
  {
    "subject": "Duck",
    "action": "swim",
    "sentence": "The white duck can swim in the lake.",
    "question": "What can the duck do?",
    "options": [
      "swim",
      "climb",
      "cry"
    ],
    "correct": "swim"
  },
  {
    "subject": "Frog",
    "action": "jump",
    "sentence": "The green frog can jump high.",
    "question": "What can the frog do?",
    "options": [
      "jump",
      "skate",
      "slide"
    ],
    "correct": "jump"
  }
];

// 全域掛載相容變數
if (typeof window !== "undefined") {
  window.P1_VOCABULARY = P4_VOCABULARY;
  window.P4_VOCABULARY = P4_VOCABULARY;
  window.PHONICS_GROUPS = PHONICS_GROUPS;
  window.ANIMAL_ACTION_QUESTIONS = ANIMAL_ACTION_QUESTIONS;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    P1_VOCABULARY: P4_VOCABULARY,
    P4_VOCABULARY,
    PHONICS_GROUPS,
    ANIMAL_ACTION_QUESTIONS
  };
}
