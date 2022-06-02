//1
//Check what happens if the array is empty
//Expect: return null as there is no mp4
//Result: Expected behaviour
empty = [
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(empty), null, '1_check_empty_array');
});

//2
//Check what happens if there is no mp4 content type inside the array
//Expect: return null as there is no mp4
//Result: Expected behaviour
noMP4 = [
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
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(noMP4), null,'2_check_no_mp4_in_array');
});

//3
//Check what happens if there is only one mp4 inside the array
//Expect: return the only member in the array
//Result: Expected behaviour
oneMp4 = [
  {
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video1.mp4','3_check_single_mp4_in_array');
});

//4
//Check what happens if there are multiple mp4 in the array with different bitrates
//Expected: Return the mp4 with the higher bitrate
//Result: returns the last item in the array which is not the one with highest bitrate (fail)
differentBitRate = [
  {
    bitrate: 50000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 30000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 40000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 35000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(differentBitRate), 'https://video.twimg.com/video1.mp4','4_check_different_mp4_bitrate');
});

//5
//Check what happens if there are all mp4 with same bitrate
//Expected: return any of the array
//Result: Expected behaviour
sameBitRate = [
  {
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
  },
  {
    bitrate: 40000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(sameBitRate), 'https://video.twimg.com/video4.mp4','5_check_same_mp4_bitrate');
});

//6
//Check what happens if there are items with bitrate and others without
//Expected: return mp4 with highest bitrate
//Result: return the last item in the array but it is not the one with the highest bitrate (failure)
noBitRate = [
  {
    bitrate: 45000,
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
  },
  {
    bitrate: 40000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(noBitRate), 'https://video.twimg.com/video1.mp4','6_check_items_with_no_bitrate');
});

//7
//Check what happens if the content type is not exactly "video/mp4"
//Expected: return the video as the content type references the same.
//Result: the code is not able to interpret the content type (failure)
wrongFormat = [
  {
    content_type: 'video/MP4',
    url: 'https://video.twimg.com/video1.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(wrongFormat), 'https://video.twimg.com/video1.mp4','7_check_content_type_wrong_format');
});

//8
//Check what happens if the item has not url
//Expected: return a valid url
//Result: It returns the last item in the array even if it has no URL
noURL = [
  {
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 42000,
    content_type: 'video/mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(noURL), 'https://video.twimg.com/video1.mp4','8_check_no_url');
});

//9
//Check what happens if the item has not content-type attribute
//Expected: return null as there is no valid item in the array
//Result: It returns the last item in the array
noContenType = [
  {
    bitrate: 42000,
    url: 'https://video.twimg.com/video1.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(noContenType), null,'9_check_no_content_type');
});

//10
//Check what happens it we have different content types
//Expected: return a mp4 with highest bit rate 
//Result: Expected behaviour
normal = [
  {
    bitrate: 50000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 30000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 50000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video3.mp4'
  }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(normal), 'https://video.twimg.com/video1.mp4','10_check_different_types_of_contents_with_different_bit_rates');
});