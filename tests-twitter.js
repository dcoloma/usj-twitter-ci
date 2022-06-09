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

// #1 Testing an empty array
emptyMp4 = [];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(emptyMp4Mp4), null, 'Empty array');
});
// #2 Testing if the best is first
firstOneIsBestMp4 = [
                         {
                           bitrate: 432000,
                           content_type: 'video/mp4',
                           url: 'https://video.twimg.com/video4.mp4'
                         },
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

                       ];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(firstOneIsBestMp4), 'https://video.twimg.com/video4.mp4', 'First one is best');
});

// #3 Testing for different bitrates
variousBitRatesMp4 = [
                         {
                           bitrate: 432000,
                           content_type: 'video/mp4',
                           url: 'https://video.twimg.com/video4.mp4'
                         },
                        {
                            bitrate: 431000,
                           content_type: 'application/x-mpegUrl',
                           url: 'https://video.twimg.com/video1.mp4'
                         },
                         {
                            bitrate: 433000,
                           content_type: 'application/x-mpegURL',
                           url: 'https://video.twimg.com/video2.mp4'
                         },
                         {
                            bitrate: 434000,
                           content_type: 'application/x-mpegUrl',
                           url: 'https://video.twimg.com/video3.mp4'
                         },

                       ];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(variousBitRatesMp4), 'https://video.twimg.com/video3.mp4', 'Different bitrates');
});

// #4 Testing if functions fail with empty url

emptyUrlMp4 = [

                         {
                            bitrate: 433000,
                           content_type: 'application/x-mpegURL',
                           url: 'https://video.twimg.com/video2.mp4'
                         },
                         {
                           content_type: 'application/x-mpegUrl',
                           url: ''
                         },

                       ];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(emptyUrlMp4), 'https://video.twimg.com/video2.mp4', 'Fail with empty URL');
});

// #5 Testing if it returns an empty video if it has better bitrate

variousBitRatesMp4 = [

                         {
                            bitrate: 433000,
                           content_type: 'application/x-mpegURL',
                           url: 'https://video.twimg.com/video2.mp4'
                         },
                         {
                            bitrate: 436000,
                           content_type: 'application/x-mpegUrl',
                           url: ''
                         },

                       ];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(variousBitRatesMp4), '', 'Empty video with higher bitrate');
});

