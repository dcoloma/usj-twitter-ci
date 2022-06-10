// TC1 - the input array is empty
nullMp4 = [];

test("getBestVideo", function(assert) {
    assert.equal(getBestVideo(nullMp4), null, 'null_input');
})


// TC2 - the input array has no info about any mp4
zeroMp4 = [
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
    assert.equal(getBestVideo(zeroMp4), null,'zero_mp4');
});


// TC3 - Example given with one mp4
oneMp4 = [
    {
        content_type: 'video/mp4',
        url: 'https://video.twimg.com/video1.mp4'
    }
];

test("getBestVideo", function(assert) {
    assert.equal(getBestVideo(oneMp4), 'https://video.twimg.com/video1.mp4','one_mp4');
});


// TC4 - 2 videos of same content type and same bitrate
equalMp4 = [{
        content_type: 'application/x-mpegUrl',
        url: 'https://video.twimg.com/video1.mp4'
    },
    {
        content_type: 'application/x-mpegURL',
        url: 'https://video.twimg.com/video2.mp4'
    },
    {
        bitrate: 1000,
        content_type: 'video/mp4',
        url: 'https://video.twimg.com/video3.mp4'
    },
    {
        bitrate: 1000,
        content_type: 'video/mp4',
        url: 'https://video.twimg.com/video4.mp4'
    }
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(equalMp4), 'https://video.twimg.com/video3.mp4', 'same_bitrate_mp4');
})


// TC5 - multiple mp4 but with different bitrates
differentBitRate = [
    {
        bitrate: 1000,
        content_type:'video/mp4',
        url: 'https://video.twimg.com/video1.mp4'
    },
    {
        bitrate: 5000,
        content_type:'video/mp4',
        url: 'https://video.twimg.com/video2.mp4'
    },
    {
        bitrate: 4000,
        content_type:'video/mp4',
        url: 'https://video.twimg.com/video3.mp4'
    },
    {
        bitrate: 3000,
        content_type:'video/mp4',
        url: 'https://video.twimg.com/video4.mp4'
    }
];

test("getBestVideo", function(assert) {
    assert.equal(getBestVideo(differentBitRate), 'https://video.twimg.com/video1.mp4','different_bitrate_mp4');
});



// TC6 - comparing existing bitrate to non existent bitrate 
uncomparableBitrate = [
  {
    bitrate: 2000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 1000,
    content_type:'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
    assert.equal(getBestVideo(uncomparableBitrate), 'https://video.twimg.com/video1.mp4','uncomparable_bitrates');
});



// TC7 - No bitrates indicated
noBitrates = [{
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

test("getBestVideo", function(assert) {
    assert.equal(getBestVideo(noBitrates), null, '9_no_bitrates');
});




// TC8 - Same bitrates different content-types
equalBitDifferentContent = [
  {
    bitrate: 1000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
  },
  {
    bitrate: 1000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video2.mp4'
  },
  {
    bitrate: 1000,
    content_type: 'application/x-mpegUrl',
    url: 'https://video.twimg.com/video3.mp4'
  },
  {
    bitrate: 1000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video4.mp4'
  }
];

test("getBestVideo", function(assert) {
    assert.equal(getBestVideo(equalBitDifferentContent), 'https://video.twimg.com/video4.mp4','equal_bit_different_content');
});



// TC9 - Impossible/nonsensical bitrates, negative numbers
illegalBitrates = [{
    bitrate: -1000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video1.mp4'
},
{
    bitrate: -2000,
    content_type: 'video/mp4',
    url: 'https://video.twimg.com/video2.mp4'
}
];

test("getBestVideo", function(assert) {
    assert.equal(getBestVideo(illegalBitrates), null, 'negative_bitrates');
})


// TC10 - No content-type field
noContentfield = [
    {
        bitrate: 1000,
        url: 'https://video.twimg.com/video1.mp4'
    }
];

test("getBestVideo", function(assert) {
  assert.equal(getBestVideo(noContentfield), null,'no_content');
});
