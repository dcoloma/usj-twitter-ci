//Test 1: Empty array. The test doesn't fail but we are not sure what it is returned. Pretty sure that is null.

oneMp4 = [];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), null, 'empty_array');
});


//Test 2: Bitrate 0. It is expected to return the last mp4

twoMp4 = [{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 52000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 50000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 0,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video4.mp4', 'Bitrate 0');
});


//Test 3: Same video with different bitrates, it should return the mp4 with the highest bitrate

threeMp4 = [{
  bitrate: 42000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 52000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  bitrate: 40000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
},
{
  bitrate: 50000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(threeMp4), 'https://video.twimg.com/video4.mp4', 'Same_video_different_bitrates');
});

//Test 4: Different video extensions. Although we are declaring the content type as mp4, the result should be returning the one with avi extension

fourMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.avi'
},
{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.avi'
}
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fourMp4), 'https://video.twimg.com/video2.avi', 'Different_extensions');
});

//Test 5: Maximum bitrate. Will check what happens if we assign the maximum posible value of bitrate. In theory, it doesn't have to fail

fifthMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: Number.MAX_VALUE,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video1.mp4'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(fifthMp4), 'https://video.twimg.com/video1.mp4', 'Max_bitrate');
});

//Test 6: Minimum bitrate. Similar to the previous test, it is expected to return the one with the minimum bitrate

sixthMp4 = [{
  bitrate: Number.MIN_VALUE,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: Number.MIN_VALUE,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2.mp4'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sixthMp4), 'https://video.twimg.com/video2.mp4', 'Min_bitrate');
});


//Test 7: No extension. As expected, if we don't declase the extension of the file in the url and in the test the test shouldn't fail.

seventhMp4 = [{
 
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video2'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(seventhMp4), 'https://video.twimg.com/video2', 'No_extension');
});

//Test 8: Same bitrate with different formats. Between the two options the test should return the file with mp4 content type for it to be correct 

eighthMp4 = [{
 
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  bitrate: 40000,
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video3.mp4'
},
{
  bitrate: 40000,
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.mp4'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(eighthMp4), 'https://video.twimg.com/video3.mp4', 'Same_bitrate_with_different_formats');
});

//Test 9: Non-existing extension. Having the extension wrong written won't cause problems in the url but it will in the content type

ninethMp4 = [{
 
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.pm4'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(ninethMp4), 'https://video.twimg.com/video3.pm4', 'Non_existing extension');
});

//Test 10: Sensitive case. Same as the last test, it also happens with upper/lower cases.

tenthMp4 = [{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video1.mp4'
},
{
  content_type: 'application/x-mpegUrl',
  url: 'https://video.twimg.com/video2.mp4'
},
{
  content_type: 'video/mp4',
  url: 'https://video.twimg.com/video3.MP4'
}];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(tenthMp4), 'https://video.twimg.com/video3.MP4', 'Sensitive_case');
});
