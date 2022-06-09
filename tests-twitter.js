//First case -> empty array
oneMP4 = [];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMP4), null, '1_Empty_array');
});

//Second case -> empty url
secondMP4 = [{
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
  }
];

  test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(secondMp4), null, '2_empty_URL');
});


//Third case -> negative bitrate
thirdMP4 = [{
    bitrate: -80000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: -15000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: -30000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: -90000,
    content_type: 'video/mp4',
    url:'https://video.twimg.com/video4.mp4'
  }
];

 test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(thirdMP4), null, '3_negative_bitrate');
});

//Fourth case -> Different content type, same bitrate 
fourthMP4 = [
  {
    bitrate: 40000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 40000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 40000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 40000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fourthMP4), 'https://video.twimg.com/video4.mp4','4_same_bitrate');
});

//Fifth case -> Different content type, different bitrate
fifthMP4 = [
  {
    bitrate: 60000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 60000,
    content_type:'application/x-mpegUrl',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 20000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 40000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fifthMP4), 'https://video.twimg.com/video1.mp4','5_different_content_types_different_bit_rates');
}); 

//Sixth case -> Same bitrate, same content type
sixthMP4 = [
  {
    bitrate: 30000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 30000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 30000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 30000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sixthMP4), 'https://video.twimg.com/video4.mp4','6_same_bitrate');
});

//Seventh case -> Different bitrates, same content type 
seventhMP4 = [{
  bitrate: 30000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 8000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 15000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
  {
    bitrate: 25000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(seventhMP4), 'https://video.twimg.com/video1.mp4', 'expected_behaviour');
});

//Eighth case -> Different bitrates, different content type, but the content type different from mp4 has higer bitrate
eighthMP4 = [
  {
    bitrate: 8000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 10000,
    content_type:'application/x-mpegUrl',
    url: 'https://video.twimg.com/video2.mp4'
  }
 ]

  test("getBestVideo", function(assert) {
assert.equal(getBestVideo(eighthMP4), 'https://video.twimg.com/video2.mp4', '8_different_bit_rate_different_content_type');
});

//Nineth case -> No bitrates
ninethMP4 = [{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
  {
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(ninethMP4), null, '9_no_bitrates');
});


//Tenth case -> No bitrate except one video
tenthMP4 = [{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
  {
  	bitrate: 10000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(tenthMP4), null, '10_no_bitrates_except_one');
});
