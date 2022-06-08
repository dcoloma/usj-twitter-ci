//ORIGINAL CODE

oneMp4 = [{
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    content_type: 'application/x-mpegURL',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 42000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video4.mp4', '4_videos_one_mp4_last_one');
});


//-------------------------------------------------------


// TEST CASE 1: Empty array

null_Array = [];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(null_Array), null, 'empty_array');

    
//-------------------------------------------------------
    

// TEST CASE 2: Wrong format in the url

gif_element = [{
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video1.gif'
  }
];
    
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(gif_element), null, 'empty_array');

    
//-------------------------------------------------------
    
    
// TEST CASE 3: Wrong format bit rate

strangeFormatBitRate = [{
    bitrate: "456789",
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  },
  {
    bitrate: true,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];
 
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(strangeFormatBitRate), null, 'empty_array');

    
//-------------------------------------------------------
    
    
// TEST CASE 4: Only URLS

onlyURL = [{
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    url: 'https://video.twimg.com/video2.mp4'
  }
];
 
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(onlyURL), null, 'empty_array');

    
//-------------------------------------------------------
    
    
// TEST CASE 5: Only bit rate
    
onlyBitRate = [{
    bitrate: 1,
  },
  {
    bitrate: 2,
  }
];
 
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(onlyBitRate), null, 'empty_array');
    
    
//-------------------------------------------------------


// TEST CASE 6: Same bit rate


    sameBitRate = [{
    bitrate: 555,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 555,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  }
];
 
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sameBitRate), null, 'empty_array');

    
//-------------------------------------------------------
    
// TEST CASE 7: Only content type

onlyContentType = [{
    content_type: 'video/mp4',
  },
  {
    content_type: 'video/mp4',
  }
];
 
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(onlyContentType), null, 'empty_array');

    
//-------------------------------------------------------
    

// TEST CASE 8: Same element

sameElement = [{
    bitrate: 555,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  },
  {
    bitrate: 555,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];
 
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sameElement), null, 'empty_array');

    
//-------------------------------------------------------
    

// TEST CASE 9: Non sense element

nonSenseElement = [{
    randomText: "El Psy Kongroo",
  }
];
 
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(nonSenseElement), null, 'empty_array');

    
//-------------------------------------------------------
    
    
// TEST CASE 10: Wrong URL

wrongURL = [{
    bitrate: 555,
    content_type: 'video/mp4',
    url: 'https://paginawebqueseguramentenoexiste.org/videosquenoexisten/videoquenoexiste.mp4'
  }
];
 
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(wrongURL), null, 'empty_array');

    
//-------------------------------------------------------
