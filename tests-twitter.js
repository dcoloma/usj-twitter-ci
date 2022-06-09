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
    bitrate: 432000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video4.mp4', '4_videos_one_mp4_last_one');
});

//Test with empty array
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo([]), null, 'null');
});

twoMp4 = [{
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
  bitrate: 62000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
},
{
  bitrate: 52000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video5.mp4'
}
];

//Test where there are multiple mp4s with different bitrate, first appear is the best
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video4.mp4', 'two_videos_different_bitrate_first_best');
});

threeMp4 = [{
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
}
];

//Test with no mp4s in the array
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(threeMp4), null, 'noMp4');
});

fourMp4 = [
  {
  bitrate: 0,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
}
  
];
//Test with best video with 0 bitrate
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fourMp4), null, 'bitrate0');
});

fiveMp4 = [
{
  bitrate: 2000,
  content_type: 'video/mp4',
  url: ''
},
{
  bitrate: 1000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}
  
];

//Test with best video with no url in best bitrate mp4
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fiveMp4), 'https://video.twimg.com/video2.mp4', 'noUrlInBestBitrate');
});

sixMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video4.mp4'
},
{
  bitrate: 52000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video5.mp4'
}
];

//Test where there are multiple mp4s with different bitrate, last appear is the best
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sixMp4), 'https://video.twimg.com/video5.mp4', 'two_videos_different_bitrate_last_best');
});

sevenMp4 = [
{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: Number.MAX_VALUE,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}
];

//Max number can be introduced and our function works properly
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sevenMp4), 'https://video.twimg.com/video2.mp4', 'max_bitrate');
});

eightMp4 = [
 
  {
    bitrate: Number.MIN_VALUE,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  }
  ];

  //Min number can be introduced and our function works properly
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(eightMp4), 'https://video.twimg.com/video1.mp4', 'min_bitrate');
});

nineMp4 = [
 
  {
    bitrate: Number.NaN,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  }
  ];

  //Nan number can be introduced and our function works properly
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(nineMp4), null, 'NaN_bitrate');
});

tenMp4 = [
 
  {
    bitrate: Number.POSITIVE_INFINITY,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  }
  ];

  //Infinite number can be introduced and our function works properly
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(tenMp4), null, 'PositiveInfinity_bitrate');
});

elevenMp4 = [
 
  {
    bitrate: Number.NEGATIVE_INFINITY,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  }
  ];

//Infinite NEGATIVE number can be introduced and our function works properly
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(elevenMp4), null, 'NegativeInfinity_bitrate');
});


twelveMp4 = [
 
  {
    bitrate: -5,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  }
  ];

//Infinite NEGATIVE number can be introduced and our function works properly
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(twelveMp4), null, 'Negative_bitrate');
});

thirteenMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: "62000",
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video4.mp4'
},
{
  bitrate: 52000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video5.mp4'
}
];

//Highest bitrate is not a number, it is a string
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(thirteenMp4), 'https://video.twimg.com/video3.mp4', 'string_highest_bitrate');
});
