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

/* Test if the method works well with two MP4s given 
   with different bitrates */
twoMp4s = [{
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
  bitrate: 2000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
},
{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video5.mp4'
}
];

/* Test if the method works well with two MP4s given 
   with equal bitrates (first video expected) */
equalBitrates = [{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}
];

/* Test if the method works well with two MP4s given 
   with different bitrates, and the highest bitrate 
   as string, to check the behavior with other types
   of data, different than integers. */
twoVideosStringBitrate = [{
  bitrate: 22000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: "42000",
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}
];

/* Test if the method works well with two MP4s given 
   with different bitrates, and the highest bitrate 
   as float, to check the behavior with other types
   of data, different than integers. */
twoVideosFloatBitrate = [{
  bitrate: 22000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 43000.0,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}
];

/* Test if the method works well with four MP4s given 
   with different negative bitrates. Maybe this case
   is not as common as the rest, but our application
   should keep working even in that case, retrieving
   the URL of the video with higest bitrate. */
fourVideosNegativeBitrates = [{
  bitrate: -22000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: -43000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: -12000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: -42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

/* Test if the method works well with two MP4s given 
   without bitrate information (last video expected). */
videosWithoutBitrate = [{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}
];

/* Test if the method works well with three MP4s given 
   with different bitrates, having the maximum bitrate
   in the second position. */
threeMp4sMiddleMaxBitrate = [{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 120000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 4000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
}
];

/* Test if the method returns nothing when the array
   does not contain videos. */
noVideos = []

/* Test if the method returns nothing when the array
   does not contain MP4s. */
noMp4s = [{
  bitrate: 42000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegURL',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'application/x-mpegUrl',
  bitrate: 12000,
  url: 'https://video.twimg.com/video3.mp4'
}
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video4.mp4', '4_videos_one_mp4_last_one');
  assert.equal(getBestVideo(twoMp4s), 'https://video.twimg.com/video5.mp4', '5_videos_two_mp4s_last_one');
  assert.equal(getBestVideo(equalBitrates), 'https://video.twimg.com/video1.mp4', 'equal_bitrates_two_mp4s_last_one');
  assert.equal(getBestVideo(twoVideosStringBitrate), 'https://video.twimg.com/video2.mp4', 'two_videos_string_bitrate');
  assert.equal(getBestVideo(twoVideosFloatBitrate), 'https://video.twimg.com/video2.mp4', 'two_videos_float_bitrate');
  assert.equal(getBestVideo(fourVideosNegativeBitrates), 'https://video.twimg.com/video3.mp4', 'four_videos_negative_bitrates');
  assert.equal(getBestVideo(videosWithoutBitrate), 'https://video.twimg.com/video2.mp4', 'videos_without_bitrate');
  assert.equal(getBestVideo(threeMp4sMiddleMaxBitrate), 'https://video.twimg.com/video2.mp4', 'three_mp4s_middle_max_bitrate');
  assert.equal(getBestVideo(noVideos), null, 'no_videos'); // Fails due to no checking if there is any video in the array
  assert.equal(getBestVideo(noMp4s), null, 'no_mp4s'); // Fails due to no ckecing if there is any MP4 in the array
});
