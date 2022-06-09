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

/*Test nº2: This test is to evaluate what would happen if there are videos with different bitrate value. 
  Having to select the one that has the highest value of them.*/
twoMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 40000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 60000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video4.mp4', 'Video with hight bitrate');
});

/*Test nº3: This test is to evaluate what would happen if the array were empty. 
  No data would have to be returned in this case (null).*/
threeMp4 = [
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(treeMp4), null, 'Empty array');
});

/*Test nº4: This test is to evaluate what would happen if there were no video files in the array.
  Not having to return any response in this case (null).*/
fourMp4 = [{
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
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fourMp4), null, 'No mp4 file in the array');
});

/*Test nº5: This test is to evaluate what would happen if we had videos with the same bitrate. 
  Assuming the first one was selected in this case.*/
fiveMp4 = [{
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
},
{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video5.mp4'
}
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fiveMp4), 'https://video.twimg.com/video3.mp4','Several videos with the same quality');
});

/*Test nº6: This test is to evaluate what would happen if we had videos with different extensions (.mp4 or .avi).
  Having to be able to select any type of them, and only depending on your bitrate in this case.*/
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
  url: 'https://video.twimg.com/video4.mp4'
},
{
  bitrate: 50000,
  content_type: 'video/avi',
  url: 'https://video.twimg.com/video5.avi'
}
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sixMp4), 'https://video.twimg.com/video5.avi','AVI format video');
});

/*Test nº7: This test is to evaluate what would happen if no element of any kind had the bitrate attribute. 
  Having to select in this case the video type element.*/
sevenMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sevenMp4), 'https://video.twimg.com/video4.mp4','Video without attribute bitrate');
});


/*Test nº8: In this test we try to evaluate what would happen if the video 
  with higher bitrate had an incorrect URL, which sent us to a different 
  file than the one we are looking for. Having to be able to evaluate 
  if the URL corresponds to the given file, and selecting an option that contains a correct URL.*/
eightMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 10000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 50000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/audio4.mp3'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(eightMp4), 'https://video.twimg.com/video3.mp4','Video with erroneous URL');
});

/*Test nº9: This test is to evaluate what would happen if no video element had the bitrate attribute. 
Having to select in that case the first video type element found in the array.*/
nineMp4 = [{
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
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(nineMp4), 'https://video.twimg.com/video1.mp4','All videos without bitrate');
});

/*Test nº10: This test is to evaluate what would happen if any type of element 
  had the betray attribute. Having to support only 
  video elements even if everyone uses this attribute.*/
tenMp4 = [{
  bitrate: 40000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 50000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 10000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(tenMp4), 'https://video.twimg.com/video3.mp4','All elements regardless of type with bitrate');
});

