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

//TEST 1
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video4.mp4', '4_videos_one_mp4_last_one');
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//TEST 2
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo([]), "", 'empty_array_empty_return' )
});

//TEST 3
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo([]), null, 'empty_array_null_return' )
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

noMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 42000,
  content_type: 'video/mp3',
  url: 'https://video.twimg.com/video4.mp4'
}
];

//TEST 4
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(noMp4), "", 'noMP4_empty_return' )
});

//TEST 5
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(noMp4), null, 'noMP4_null_return' )
});

//TEST 6
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(noMp4), "https://video.twimg.com/video4.mp4", 'noMP4_Higher_bitrate_return' )
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

twoMp4_sameBitrate = [{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/videoB.mp4'
},
{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/videoA.mp4'
}
];

//TEST 7 
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(twoMp4_sameBitrate), "https://video.twimg.com/videoB.mp4", 'twoMP4_same_bitrate_return_first_found' )
});

//TEST 8
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(twoMp4_sameBitrate), "https://video.twimg.com/videoA.mp4", 'twoMP4_same_bitrate_return_last_found' )
});

//TEST 9
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(twoMp4_sameBitrate), "https://video.twimg.com/videoA.mp4", 'twoMP4_same_bitrate_return_first_alphabetic_found' )
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

twoMp4_diffBitrate = [{
  bitrate: 4200,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}
];

//TEST 10
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(twoMp4_diffBitrate), "https://video.twimg.com/video2.mp4", 'twoMP4_diff_bitrate_return_highestBitrate ' )
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

twoMp4_NoBitrate = [{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}
];

//TEST 11
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(twoMp4_NoBitrate), null, 'twoMP4_no_bitrate_return_null' )
});

//TEST 12
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(twoMp4_NoBitrate), "https://video.twimg.com/video1.mp4", 'twoMP4_no_bitrate_return_firstMP4_found' )
});

//TEST 12
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(twoMp4_NoBitrate), "https://video.twimg.com/video2.mp4", 'twoMP4_no_bitrate_return_lastMP4_found' )
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

oneMp5 = [{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'video/mp5',
  url: 'https://video.twimg.com/video2.mp4'
}
];

//TEST 13
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(oneMp5), "https://video.twimg.com/video2.mp4", 'oneMP5_MP5_return')
});

//TEST 14
test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(oneMp5), "https://video.twimg.com/video1.mp4", 'oneMP5_MP4_return')
});
