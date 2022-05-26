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

/////////////////////////////////////////1
//two vieo content type

twoMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'video/mp4',
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
  assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video4.mp4', '4_videos_Two_mp4_last_one');
});

////////////////////////////////////2
//3 video content type

threeMp4 = [{
  content_type: 'application/x-mpegUrl',
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
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(threeMp4), 'https://video.twimg.com/video4.mp4', '4_videos_Three_mp4_last_one');
});

///////////////////////////////////3
//no bitrate

bilaterDifference1 = [{
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
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(bilaterDifference1), 'https://video.twimg.com/video4.mp4', 'Bufferning_difference_1');
});
/////////////////////////////////////4 
//over bitrate

bilaterDifference2 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 62000,
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
assert.equal(getBestVideo(bilaterDifference2), 'https://video.twimg.com/video4.mp4', 'Bufferning_difference_2');
});

/////////////////////////////////////5
//same bitrate

bilaterDifference3 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 52000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 52000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(bilaterDifference3), 'https://video.twimg.com/video4.mp4', 'Bufferning_difference_3');
});

/////////////////////////////////////6
//just url content

nonContType = [{
  url: 'https://video.twimg.com/video1.mp4'
},
{
  url: 'https://video.twimg.com/video2.mp4'
},
{
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 42000,
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(nonContType), null, 'No_Content_Type');
});

/////////////////////////////////////7
//null element pass

nullCont=[];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(nullCont), null, 'Null_Array');
});

/////////////////////////////////////8
//not url content pass

noUrlCont = [{
  content_type: 'application/x-mpegUrl',
},
{
  content_type: 'application/x-mpegURL',
},
{
  content_type: 'application/x-mpegURL',
},
{
  bitrate: 52000,
  content_type: 'video/mp4',
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(noUrlCont), null, 'Video_Url');
});

/////////////////////////////////////9
//negative bitrate
negativeBrit = [{
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
  bitrate: -42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(negativeBrit), 'https://video.twimg.com/video4.mp4', '4_videos_one_mp4_last_one');
});
