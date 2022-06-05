//Test #1: Check what happends if there isn´t any Mp4 video on the array
//The expected result is null and is what we get
noMp4Videos = [{
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
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

//Test #2: Check what happends if all the videos are in format Mp4
//The expected result is that the program will choose the last one in the array and is what we get
AllMp4Videos = [{
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
  }
];

//Test #3: Empty array of videos
//The expected result is an that the program returns null and is what we get
emptyArray = [];

//Test #4: All videos Mp4 and the bitrate are the same in all videos
//The expected result is that program will choose the last one of the array and is what we get
AllMp4SameBitrate = [{
    bitrate: 42000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 42000,
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

//Test #5: All videos Mp4 and the bitrate is different for each video
//The expected result is that program will choose the video that have a more higher bitrate with are the video 3
//but what we get is the video number 4 witch is the las one instead of the video 3
AllMp4DifferentBitrate = [{
    bitrate: 35000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 45000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 67000,    
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 52000,    
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

//Test #6: Different content type videos and different bitrates of each video
//The expected result is that the program will choose the video 3 witch is the one with higher bitrate and mp4 format
//The result is the expected one
DifferentContent_TypeDifferentBitrates = [{
    bitrate: 35000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 45000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 67000,    
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 52000,    
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

//Test #7: Check what happends when we user content types different than "video/mp4" or "application/x-mpegUrl"
//The result that we are getting is and error because the program dont recognize the content type mp3 and mkv
NewContent_Type = [{
    content_type: 'video/mp3',
    url: 'https://video.twimg.com/video1.mp4'
  },  
  {
    content_type: 'video/mkv',
    url: 'https://video.twimg.com/video2.mp4'
  }
];

//Test #8: Check what happends if we remove the "url" field from the array declaration
//The expected result is null and is what we get
NoURL = [{
    content_type: 'application/x-mpegUrl',    
  },
  {
    content_type: 'application/x-mpegURL',    
  },
  {
    content_type: 'application/x-mpegUrl',    
  },
  {
    bitrate: 42000,
    content_type: 'video/mp4',    
  }
];

//Test #9: Check what happends if we remove the "content_type" field from the array declaration
//The expected result is null and is what we get
NoContent_Type = [{    
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

//Test #10: Check what happends when we add a new field called "VideoQuality" on the array declaration
//The result is that the program will ignore the new field and the result will be the video with the bitrate higher and is what we get
NewField = [{
    videoQuality: 'FullHD',
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    videoQuality: '480p',
    content_type: 'application/x-mpegURL',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    videoQuality: '720p',
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    videoQuality: 'FullHD',
    bitrate: 42000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
]

//Different test cases region
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(noMp4Videos), null, '#1_Test_NoMp4');
  assert.equal(getBestVideo(AllMp4Videos), 'https://video.twimg.com/video4.mp4', '#2_Test_AllMp4');
  assert.equal(getBestVideo(emptyArray), null, '#3_Test_EmptyArray');
  assert.equal(getBestVideo(AllMp4SameBitrate), 'https://video.twimg.com/video4.mp4', '#4_Test_AllMp4SameBitrate');
  assert.equal(getBestVideo(AllMp4DifferentBitrate), 'https://video.twimg.com/video3.mp4', '#5_Test_AllMp4DifferentBitrate');
  assert.equal(getBestVideo(DifferentContent_TypeDifferentBitrates), 'https://video.twimg.com/video3.mp4', '#6_Test_DifferentContent_TypeDifferentBitrates');
  assert.equal(getBestVideo(NewContent_Type), 'https://video.twimg.com/video3.mp4', '#7_Test_NewContent_Type');
  assert.equal(getBestVideo(NoURL), null, '#8_NoURL');
  assert.equal(getBestVideo(NoContent_Type), null, '#9_NoContent_Type');
  assert.equal(getBestVideo(NewField), 'https://video.twimg.com/video4.mp4', '#10_NewField');
});

