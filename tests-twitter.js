/*Test if method returns the mp4 video*/
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
/*Test if method returns one of the mp4 videos with the best quality(highest bitrate).
 The best quality video is found in the third position. All videos are mp4 format*/
allMp4diff = [{
    bitrate: 532000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
},
{
    bitrate: 600000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
},
{
    bitrate: 800000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
},
{
    bitrate: 432000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
}
]
/*Test if method returns one of the mp4 videos with the best quality(highest bitrate). 
 * However, the bitrate type is different, some are float type and others are strings. Still, we expect the method to work the same as before.*/
allMp4DifferentType = [{
    bitrate: 532000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
},
{
    bitrate: 600000.00,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
},
{
    bitrate: "800000",
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
},
{
    bitrate: 432000.00,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
}
]
/*Now the we have two MPR4 videos with negative bitrate.
 We expect the method to work and choose the second video (highest quality)*/
Negativebitrate = [{
    bitrate: -5000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
},
{
    bitrate: -1000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
}
]
/*We have all MP4 videos with the same values but with different types.
 We should expect to get the first in the array.*/
allMp4DifferentTypeSame = [
{
    bitrate: "600000",
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
},
{
    bitrate: 600000.00,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
}
]
/*We have a MP4 video with no bitrate and a MP4 video with bitrate.
 It is expected to choose the second one.*/
MP4NoBitrate = [{
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
},
{
    bitrate: 532000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
}
];
/*We have two MP4 videos with no bitrate.
 It is expected to choose the first one.*/
allMP4NoBitrate = [{
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
},
{
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
}
];

/*We have two non-MP4 videos with no bitrate except the last one.
 It is expected to return null.*/

noMP4 = [{
    content_type: 'application/x-mpegURL',
    url: 'https://video.twimg.com/video1.mp4'
},
    {
    bitrate: 532000,
    content_type: 'application/x-mpegURL',
    url: 'https://video.twimg.com/video2.mp4'
}
];
/*There is an empty array. The method should return null*/
noVideo = [
];
/*Test if method returns one of the mp4 videos with the best quality(highest bitrate).
 * The best quality video is found at the last array*/
allMp4diff2 = [{
    bitrate: 532000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
},
{
    bitrate: 600000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
},
{
    bitrate: 432000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
},
{
    bitrate: 800000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
}
]

test("getBestVideo", function(assert) {
    assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video4.mp4', '4_videos_one_mp4_last_one');
    assert.equal(getBestVideo(allMp4diff), 'https://video.twimg.com/video3.mp4', '4_videos_four_mp4_third_one');
    assert.equal(getBestVideo(allMp4DifferentType), 'https://video.twimg.com/video3.mp4', '4_videos_four_mp4_third_one');
    assert.equal(getBestVideo(Negativebitrate), 'https://video.twimg.com/video2.mp4', '2_videos_2_mp4_last_one');
    assert.equal(getBestVideo(allMp4DifferentTypeSame), 'https://video.twimg.com/video1.mp4', '2_videos_2_mp4_first_one');
    assert.equal(getBestVideo(MP4NoBitrate), 'https://video.twimg.com/video2.mp4', '2_videos_2_mp4_last_one');
    assert.equal(getBestVideo(allMP4NoBitrate), 'https://video.twimg.com/video1.mp4', '2_videos_2_mp4_first_one');
    assert.equal(getBestVideo(noMP4), null, '2_videos_0_mp4');
    assert.equal(getBestVideo(noVideo), null, '0_videos');
    assert.equal(getBestVideo(allMp4diff2), 'https://video.twimg.com/video4.mp4', '4_videos_four_mp4_last_one');
});
