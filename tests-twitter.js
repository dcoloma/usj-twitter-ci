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


//For these tests we are putting as requirement that the content of the tweet is video/mp4 and if no bitrate is provided, the last video will be taken


//We are going to test if the function return back what expected if two videos have content_type video/mp4


twoMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
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
assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video4.mp4', 'Two videos with content_type: video/mp4');
});


//We are going to test if the function return back what expected if two videos have different bitrates and different content_type


differentBitratesContentType = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 50000,
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(differentBitratesContentType), 'https://video.twimg.com/video4.mp4', 'Two videos with different bitrate and different content_type');
});


//We are going to test if the function return back what expected if two videos have different bitrates and same content_type


differentBitrates = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 50000,
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
assert.equal(getBestVideo(differentBitrates), 'https://video.twimg.com/video3.mp4', 'Two videos with different bitrate');
});


//We are going to test if the function return back what expected if two videos have the same bitrate


twoSameBitrates = [{
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
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(twoSameBitrates), 'https://video.twimg.com/video3.mp4', 'Two videos with the same bitrate');
});


//We are going to test if the function return back what expected if there are no videos with content_type video/mp4


noMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 42000,
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(noMp4), null, 'Videos without a content_type: video/mp4');
});


//We are going to test if the function return back what expected if there is not bitrate as atribute


noBitrate = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(noBitrate), 'https://video.twimg.com/video4.mp4', 'Videos without bitrate');
});


//We are going to test if the function return back what expected if there is not content_type as atribute


noContentType = [{
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
assert.equal(getBestVideo(noContentType), null, 'Videos without content_type');
});


//We are going to test if the function return back what expected if there is not URL as atribute


noUrl = [{
  content_type: 'application/x-mpegUrl',
},
{
  content_type: 'application/x-mpegURL',
},
{
  content_type: 'application/x-mpegURL',
},
{
  bitrate: 42000,
  content_type: 'video/mp4L',
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(noUrl), null, 'Video without URL');
});


//We are going to test if the function return back what expected if the array is empty (there are no videos)


nullArray = [];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(nullArray), null, 'Null array of videos');
});
