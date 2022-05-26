oneMp4 = [
  {
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

//With this test we can see that there are different mp4 videos with different bitrates. The program should select the highest bitrate if it is the last
threeMp4 = [
  {
    content_type: "application/x-mpegUrl",
    url: "https://video.twimg.com/video1.mp4",
  },

  {
    content_type: "application/x-mpegURL",
    url: "https://video.twimg.com/video2.mp4",
  },

  {
    content_type: "application/x-mpegUrl",
    url: "https://video.twimg.com/video3.mp4",
  },

  {
    bitrate: 42000,
    content_type: "video/mp4",
    url: "https://video.twimg.com/video4.mp4",
  },

  {
    bitrate: 44000,
    content_type: "video/mp4",
    url: "https://video.twimg.com/video5.mp4",
  },

  {
    bitrate: 46000,
    content_type: "video/mp4",
    url: "https://video.twimg.com/video6.mp4",
  }
];

//With two mp4 videos with different bitrates, the function will choose the first one that has the highest bitrate
twoMp4_first = [ 
  {
    bitrate: 44000,
    content_type: "video/mp4",
    url: "https://video.twimg.com/video5.mp4",
  },

  {
    content_type: "application/x-mpegUrl",
    url: "https://video.twimg.com/video1.mp4",
  },

  {
    content_type: "application/x-mpegURL",
    url: "https://video.twimg.com/video2.mp4",
  },

  {
    content_type: "application/x-mpegUrl",
    url: "https://video.twimg.com/video3.mp4",
  },

  {
    bitrate: 42000,
    content_type: "video/mp4",
    url: "https://video.twimg.com/video4.mp4",
  }
];

//Here we set two videos with the same bitrate. The program should choose the first that encounters.
twoMp4_sameBitRate = [ 
  {
    bitrate: 42000,
    content_type: "video/mp4",
    url: "https://video.twimg.com/video5.mp4",
  },

  {
    content_type: "application/x-mpegUrl",
    url: "https://video.twimg.com/video1.mp4",
  },

  {
    content_type: "application/x-mpegURL",
    url: "https://video.twimg.com/video2.mp4",
  },

  {
    content_type: "application/x-mpegUrl",
    url: "https://video.twimg.com/video3.mp4",
  },

  {
    bitrate: 42000,
    content_type: "video/mp4",
    url: "https://video.twimg.com/video4.mp4",
  }
];

//Here we have four mp4 but none has bitrate but the first one that is NaN. In this case, the program will choose the first one that gathers.
Mp4_noneWithBitRate_butWithNaN = [ 
  {
    bitrate: Number.NaN,
    content_type: "video/mp4",
    url: "https://video.twimg.com/video4.mp4",
  },

  {
    content_type: "application/x-mpegUrl",
    url: "https://video.twimg.com/video1.mp4",
  },

  {
    content_type: "application/x-mpegURL",
    url: "https://video.twimg.com/video2.mp4",
  },

  {
    content_type: "application/x-mpegUrl",
    url: "https://video.twimg.com/video3.mp4",
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video4.mp4', '4_videos_one_mp4_last_one');
});

test("getBestVideo", function (assert) {
  assert.equal(getBestVideo(threeMp4),"https://video.twimg.com/video6.mp4","6_videos_three_mp4_last_one");
});

test("getBestVideo", function (assert) {
  assert.equal(getBestVideo(twoMp4_first),"https://video.twimg.com/video5.mp4","5_videos_two_mp4_first_one");
});

test("getBestVideo", function (assert) {
  assert.equal(getBestVideo(twoMp4_sameBitRate),"https://video.twimg.com/video5.mp4","5_videos_two_mp4_sameBitRate_select_first_one");
});

test("getBestVideo", function (assert) {
  assert.equal(getBestVideo(Mp4_noneWithBitRate_butWithNaN),"https://video.twimg.com/video1.mp4","4_videos_one_mp4_NaN");
});

//Here we test the functionality for null. If we try to get the best video without referencing a list, then the result will be null as expected
test("getBestVideo", function (assert) {
  assert.equal(getBestVideo([]),null,"null");
});
