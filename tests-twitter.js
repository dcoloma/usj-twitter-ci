//test 1: Videos without bitrate should get the first

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
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video4.mp4', 'Without_bitrate');
});

//test 2: Different bitrates in different videos should select the bigger one
twoMp4 = [{
  bitrate: 40000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 45000,
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 50000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 55000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video4.mp4', 'Different-br_diffent-video');
});

//Test 3: what happens if equal bitrates in all videos, in theory should happen as if we dont select any bitrate
threeMp4 = [{
  bitrate: 40000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 40000,
  content_type: 'application/x-mpegURL',
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
assert.equal(getBestVideo(threeMp4), 'https://video.twimg.com/video4.mp4', 'EQUAL-br-video');
});

//Test 4: what happens if we have videos with different extensions. It should only select according to bitrate, not to type
fourMp4 = [{
  bitrate: 40000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 40000,
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 50000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video3.wav'
},
{
  bitrate: 40000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(fourMp4), 'https://video.twimg.com/video4.mp4', 'DIFFERENT_EXTENSIONS');
});

//Test 5: what happens if we have the video with higher bitrate with wrong url, should get the next one
fiveMp4 = [{
  bitrate: 40000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 40000,
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 50000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 80000,
  content_type: 'video/mp4',
  url: 'ht://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(fiveMp4), 'https://video.twimg.com/video4.mp4', 'WRONG_URL_HIGHEST_BITRATE');
});

//Test 6: Non-existing extension, we should get another video
sixMp4 = [{
  content_type: 'video/mp5', //this is the not existing extension
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
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sixMp4), 'https://video.twimg.com/video4.mp4', 'Non-existing extension');
});   

//test 7: Videos without bitrate should get the first

sevenMp4 = [
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sevenMp4), 'https://video.twimg.com/video4.mp4', 'Without_videos');
});

//test 8 setting the mp as null to check if it returns null or crashes

eightMp4 = [
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(eightMp4), 'https://video.twimg.com/video4.mp4', 'NULL');
});

//test 9 trying to set all negative bitrates to check if it stills gets the highest
nineMp4 = [{
  bitrate: -40000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: -40000,
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: -50000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: -80000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(nineMp4), 'https://video.twimg.com/video4.mp4', 'NEGATIVE_BITRATES');
});