// TEST 1: Empty array
test_array = [];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), null, 'empty_array');
   
// TEST 2: Same bitrate and different videos
test_array = [{
  bitrate: 8000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 8000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 8000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 8000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), 'https://video.twimg.com/video1.mp4', 'different_videos_same_bitrate');
});
    
// TEST 3: Negative bitrate value
test_array = [{
  bitrate: -8000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
}];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), null, 'negative_bitrate');
});
    
// TEST 4: Empty URL
test_array = [{
  content_type: 'video/mp4',
  url: ''
}];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), null, 'empty_url');
});
    
// TEST 5: Expected behaviour
test_array = [{
  bitrate: 50000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 10000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 7000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
}];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), 'https://video.twimg.com/video1.mp4', 'expected_behaviour');
});
    
// TEST 6: Different file than mp4
test_array = [{
  bitrate: 50000,
  content_type: 'audio/mp3',
  url: 'https://video.twimg.com/audio.mp3'
}];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), null, 'mp3_file');
});
    
// TEST 7: Random data
test_array = [{
  size: 10,
  name: 'Juan'
}];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), null, 'random_data');
});
    
// TEST 8: Non-existing file
test_array = [{
  bitrate: 7000,
  content_type: 'video/mp4',
  url: 'https://aaaaaaaaaaaaaaaaaaa.com/adajsjdasdjihasdkjasd.mp4'
}];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), null, 'nonexisting_file');
});
    
// TEST 9: Different types in url
test_array = [{
  bitrate: 50000,
  content_type: 'video/mp4',
  url: 25
},
{
  bitrate: 50000,
  content_type: 'video/mp4',
  url: []
},
{
  bitrate: 10000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}];
test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(test_array), 'https://video.twimg.com/video1.mp4', 'no_string_url');
});   
