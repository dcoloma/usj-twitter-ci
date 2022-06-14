//Test1: I will test if the function works correctly when there are one mp4 files.

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

//Test2: I will test if the function works correctly when there are two mp4 files.

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
  bitrate: 432000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video4.mp4', '4_videos_two_mp4_last_one');
});

//Test3: I will test if the function works correctly when there is no mp4 files.

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
assert.equal(getBestVideo(noMp4), null, '4_videos_no_mp4_null');
});

//Test4: I will test if the function works correctly when there are two mp4 files and their bitrates are different.

twoMp4differentBitrates = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 500000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 432000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(twoMp4differentBitrates), 'https://video.twimg.com/video3.mp4', '4_videos_two_mp4_differentBitrates_third_one');
});

//Test5: I will test if the function works correctly when there are two mp4 files and their bitrates are the same.

twoMP4sameBitrates = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 432000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 432000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(twoMP4sameBitrates), 'https://video.twimg.com/video3.mp4', '4_videos_two_mp4_sameBitrates_third_one');
});

//Test6: I will test if the function works correctly when there are three mp4 files and there are 3 different bitrates.

threeMp4threeDifferentBitrates = [{
  bitrate: 432000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 4320000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 4320,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(threeMp4threeDifferentBitrates), 'https://video.twimg.com/video2.mp4', '3_videos_three_mp4_3differentBitrates_second_one');
});

//Test7: I will test if the function works correctly when there are two mp4 files and there is no bitrate.

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
assert.equal(getBestVideo(noBitrate), 'https://video.twimg.com/video4.mp4', '4_videos_two_mp4_noBitrates_last_one');
});

//Test8: I will test if the function works correctly when there are no content types.

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
  bitrate: 432000,
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(noContentType), null, '4_videos_noContentType_null');
});

//Test9: I will test if the function works correctly when there are no URL.

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
  bitrate: 432000,
  content_type: 'video/mp4L',
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(noUrl), null, '4_videos_noURL_null');
});

//Test10: I will test if the function works correctly when there are no videos.

noVideos = [];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(noVideos), null, 'no_videos_noContentType_noURL_noBitrate_null');
});
