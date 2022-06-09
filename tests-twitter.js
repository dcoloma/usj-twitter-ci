//Test 1: Empty array

oneMp4 = [];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), null, 'empty_array');
});

//Test 2: None format mp4 specifyed
twoMp4 = [
  {
    content_type: 'application/x-mpegURL',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video3.mp4'
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

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video4.mp4', 'None_mp4_format');
});

//Test 3: Different bitrates in the same video
threeMp4 = [{
  bitrate: 43000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 44000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    content_type: 'application/x-mpegURL',
    bitrate: 45000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 42000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(threeMp4), 'https://video.twimg.com/video4.mp4', 'SameVideo_Different_br');
});

//test 4: Different bitrates in different videos
fourMp4 = [{
  bitrate: 43000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 44000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    content_type: 'application/x-mpegURL',
    bitrate: 45000,
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
  assert.equal(getBestVideo(fourMp4), 'https://video.twimg.com/video4.mp4', 'DifferentVideo_Different_br');
});

//Test 5: two videos with same bitrate
fiveMp4 = [{
  bitrate: 45000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 44000,
    content_type: 'video/mp4',
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
  assert.equal(getBestVideo(fiveMp4), 'https://video.twimg.com/video4.mp4', '2Videos_same_bt');
});

//test 6: Different video extensions
sixMp4 = [{
  bitrate: 45000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 44000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 42000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 42000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sixMp4), 'https://video.twimg.com/video4.mp4', 'Different_video_extensions');
});

//Test 7: No video has bitrate defined
sevenMp4 = [{
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
    bitrate: 432000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sevenMp4), 'https://video.twimg.com/video4.mp4', 'No bitrate defined');
});

//Test 8: Non-existing extension
eightMp4 = [{
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
  assert.equal(getBestVideo(eightMp4), 'https://video.twimg.com/video4.mp4', 'Non-existing extension');
});  