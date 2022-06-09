//Test 1 - Initial example of one Mp4
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
    bitrate: 40000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video4.mp4', '4_videos_one_mp4_last_one');
});

//Test 2 - Empty array
empty = [
];

test("gestBestVideo", function(assert){
  assert.equal(getBestVideo(empty), null, 'empty_array' )
});

//Test 3 - No Mp4 content type
noMp4 = [{
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

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(noMP4), null,'no_mp4_in_array');
});

//Test 4 - All Mp4 have different bitrate
allMp4_diffBitrate = [{
     bitrate: 40000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 20000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 30000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(allMp4_diffBitrate),'https://video.twimg.com/video1.mp4' , 'all_mp4_diff_bitrate');
});

//Test 5 - All Mp4 have the same bitrate

allMp4_sameBitrate = [{
     bitrate: 40000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 40000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 40000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(allMp4_sameBitrate),'https://video.twimg.com/video1.mp4' , 'all_mp4_same_bitrate');
});

//Test 6 - One of three Mp4s have no bitrate`
OneofThree_noBitRate = [
  {
    bitrate: 40000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 30000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(OneofThree_noBitRate), 'https://video.twimg.com/video1.mp4','one_of_three_no_bitrate');
});

//Test 7 - All Mp4 but two has the same bitrate
AllMp4_twoSameBitrate = [
  {
    bitrate: 40000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 30000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 30000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(AllMp4_twoSameBitrate), 'https://video.twimg.com/video1.mp4','three_mp4_two_same_bitrate');
});

//Test 8 - Different content type
DifferentContentType = [
  {
    bitrate: 40000,
    content_type:'video/nothing',
    url: 'https://video.twimg.com/video1.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(DifferentContentType), 'https://video.twimg.com/video1.mp4','different_content_type');
});

//Test 9 - No Url
NoUrl = [
  {
    bitrate: 40000,
    content_type:'video/mp4',
  },
  {
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(NoUrl), 'https://video.twimg.com/video1.mp4','two_mp4_one_no_Url');
});

//Test 10 - Same bitrate different content type
SameBitrate_DifferentType = [
  {
    bitrate: 40000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 40000,
    content_type: 'application/x-mpegUrl'
    url: 'https://video.twimg.com/video2.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(SameBitrate_DifferentType), 'https://video.twimg.com/video1.mp4','two_mp4_same_bitrate_different_content_type');
});

//Test 11 - Highest bitrate with no content type
HighestBitrate_Notype = [
  {
    bitrate: 40000,
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 20000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(HighestBitrate_Notype), 'https://video.twimg.com/video1.mp4','highest_bitrate_no_content_type');
});
