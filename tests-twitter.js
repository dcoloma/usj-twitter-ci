//Test Case 1, Empthy Array
oneMp4 = [];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), null, 'Empthy_Array');
});

//------------------------------------------------------------------------------//
//Test Case 2, Empthy URL
secondMp4 = [{
    content_type: 'video/mp4',
    url: 
  },
  {
    content_type: 'video/mp4',
    url: 
  },
  {
    content_type: 'video/mp4',
    url: 
  },
  {
    content_type: 'video/mp4',
    url:
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(secondMp4), null, 'Empthy_URL');
});
//------------------------------------------------------------------------------//
//Test Case 3, Different bit value
thirdMp4 = [{
    bitrate: 30000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 45000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 90000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 42000,
    content_type: 'video/mp4',
    url:'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(thirdMp4), 'https://video.twimg.com/video4.mp3', '4_videos_different_bit_value');
});
//------------------------------------------------------------------------------//
//Test Case 4, Negative bit value
fourthMp4 = [{
    bitrate: -30000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: -45000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: -90000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: -42000,
    content_type: 'video/mp4',
    url:'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fourthMp4), null, '4_videos_negative_value');
});
//------------------------------------------------------------------------------//
//Test Case 5, Different content_type
fifthMp4 = [{
    content_type: 'video/mp4',
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
    content_type: 'video/mp4',
    url:'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fifthMp4), 'https://video.twimg.com/video4.mp4', '4_videos_different_content_type');
});
//------------------------------------------------------------------------------//
//Test Case 6, Same bit rate but different content_type
sixthMp4 = [{
    bitrate: 42000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 42000,
    content_type: 'application/x-mpegURL',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 42000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 432000,
    content_type: 'video/mp4',
    url:'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sixthMp4), 'https://video.twimg.com/video4.mp4', '4_videos_same_bit_rate_but_different_content_type');
});
//------------------------------------------------------------------------------//
//Test Case 7, No content_type and same bit rate
seventhMp4 = [{
    bitrate: 42000,
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 42000,
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 42000,
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 42000,
    url:'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(seventhMp4), 'https://video.twimg.com/video4.mp4', '4_videos_same_bit_rate_but_no_content_type');
});
//------------------------------------------------------------------------------//
//Test Case 8, Strange content_type
eighthMp4 = [{
    content_type: 'video/AAA',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    content_type: 'video/BBB',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    content_type: 'video/CCC',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    content_type: 'video/DDD',
    url:'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(eighthMp4), null, '4_videos_strange_format');
});
//------------------------------------------------------------------------------//
