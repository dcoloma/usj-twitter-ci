//alu.98920 - Ignacio Hernández Abadías
//1- FIRST TEST AS EXAMPLE
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

//2- BETWEEN TWO video/mp4 WITH A BITRATE FIELD, IT IS EXPECTED THE ONE WITH HIGHEST BITRATE
twoMp4 = [{
content_type: 'application/x-mpegUrl',
url: 'https://video.twimg.com/video1.mp4'
},
{
content_type: 'application/x-mpegURL',
url: 'https://video.twimg.com/video2.mp4'
},
{
bitrate: 435000,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video3.mp4'
},
{
bitrate: 432000,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert)
{
assert.equal(getBestVideo(twoMp4), 'https://video.twimg.com/video3.mp4', '2_4_videos_one_mp4_last_one');
});

//3- IF NONE OF THE video/mp4 HAVE A BITRATE FIELD, IT SELECTS THE LAST VIDEO. NONE OF THE OTHERS ARE EXPECTED
threeMp4 = [{
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

test("getBestVideo", function(assert)
{
assert.equal(getBestVideo(threeMp4), 'https://video.twimg.com/video4.mp4', '3_4_videos_one_mp4_last_one');
});

//4- DESPITE THE FACT THAT THE URL OF THE FOURTH VIDEO IS NOT FROM A .mp4, IT EXPECTS IT AS THE VIDEO WITH HIGHEST BITRATE.
//IF I PUT A BITRATE FIELD IN THE THIRD VIDEO LARGER THAN THE FOURTH, IT WILL EXPECT THE THIRD, BUT LIKE THE FOURTH IS THE ONLY ONE THAT HAS THAT FIELD, IT EXPECTS HIM
//DESPITE THE FACT THAT IN THE URL IS NOT A .mp4
fourMp4 = [{
content_type: 'application/x-mpegUrl',
url: 'https://video.twimg.com/video1.mp4'
},
{
content_type: 'application/x-mpegURL',
url: 'https://video.twimg.com/video2.mp4'
},
{
content_type: 'video/mp4',
url: 'https://video.twimg.com/video3.mp4'
},
{
bitrate: 432000,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video4'
}
];

test("getBestVideo", function(assert)
{
assert.equal(getBestVideo(fourMp4), 'https://video.twimg.com/video4', '4_4_videos_one_mp4_last_one');
});

//5- IF THERE ARE NO "VIDEOS" WITH CONTENT TYPE 'video/mp4', IT CAN'T CHOOSE ANY OF THEM SO IT DOESN'T EXPECT ANY VALUE (EXPECTS NULL)
fiveMp4 = [{
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
content_type: 'application/x-mpegURL',
url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(fiveMp4), 'https://video.twimg.com/video4.mp4', '5_4_videos_one_mp4_last_one');
});

//6- IF THERE ARE TWO VIDEOS WITH THE SAME BITRATE, IT EXPECTS THE ONE WHO IS WRITTEN EARLIER IN THE ARRAY (video3 IN THIS CASE)
sixMp4 = [{
content_type: 'application/x-mpegUrl',
url: 'https://video.twimg.com/video1.mp4'
},
{
content_type: 'application/x-mpegURL',
url: 'https://video.twimg.com/video2.mp4'
},
{
bitrate: 432000,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video3.mp4'
},
{
bitrate: 432000,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(sixMp4), 'https://video.twimg.com/video3.mp4', '6_4_videos_one_mp4_last_one');
});

//7- IN THIS TEST WE CAN OBSERVE THAT FLOAT VALUES FOR THE BIRATE ARE ACCEPTED
sevenMp4 = [{
content_type: 'application/x-mpegUrl',
url: 'https://video.twimg.com/video1.mp4'
},
{
content_type: 'application/x-mpegURL',
url: 'https://video.twimg.com/video2.mp4'
},
{
bitrate: 432000,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video3.mp4'
},
{
bitrate: 432000.5,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(sevenMp4), 'https://video.twimg.com/video4.mp4', '7_4_videos_one_mp4_last_one');
});

//8- THE BITRATE ALSO DIFFERENTIATES BETWEEN POSITIVE AND NEGATIVE BITRATE. ALSO AS AN EXTRA POINT TESTED HERE, THE BITRATE READS AS EQUALS DE VALUES 0 AND -0.
eightMp4 = [{
content_type: 'application/x-mpegUrl',
url: 'https://video.twimg.com/video1.mp4'
},
{
content_type: 'application/x-mpegURL',
url: 'https://video.twimg.com/video2.mp4'
},
{
bitrate: -10,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video3.mp4'
},
{
bitrate: 10,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(eightMp4), 'https://video.twimg.com/video4.mp4', '8_4_videos_one_mp4_last_one');
});

//9- THE FUNCTION ALSO DETECTS WHEN THE BITRATE IS WRITTEN IN A STRING BUT ONLY IF THE STRING CONTENT IS A NUMBER. IF IT IS A CHARACTER OR A WORD (EVEN IN THE MIDDLE 
// OF THE WORD), IT DETECTS IT AS LIKE IF NONE BITRATE WERE WRITTEN.
nineMp4 = [{
content_type: 'application/x-mpegUrl',
url: 'https://video.twimg.com/video1.mp4'
},
{
content_type: 'application/x-mpegURL',
url: 'https://video.twimg.com/video2.mp4'
},
{
bitrate: '100000a',
content_type: 'video/mp4',
url: 'https://video.twimg.com/video3.mp4'
},
{
bitrate: '10',
content_type: 'video/mp4',
url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(nineMp4), 'https://video.twimg.com/video4.mp4', '9_4_videos_one_mp4_last_one');
});

//10- IF THE VIDEO WITH HIGHEST BITRATE DOESN'T HAVE ANY URL RELATED, IT WON'T SELECT THE NEXT VIDEO WITH HIGHEST BITRATE. IT WILL TRY TO COMPARE THE NAME OF THE VIDEO
// WE HAVE WRITTEN IN THE FUNCTION WITH UNDEFINED. IF WE WRITE IN THE FUNCTION 'undefined' (WITHOUT QUOTES) IT WILL SET THE TEST AS POSITIVE.
tenMp4 = [{
content_type: 'application/x-mpegUrl',
url: 'https://video.twimg.com/video1.mp4'
},
{
content_type: 'application/x-mpegURL',
url: 'https://video.twimg.com/video2.mp4'
},
{
bitrate: 100000,
content_type: 'video/mp4'
},
{
bitrate: 10,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(tenMp4), 'https://video.twimg.com/video4.mp4', '10_4_videos_one_mp4_last_one');
});

//11- IF ALL THE VIDEOS IN THE ARRAY HAS A BITRATE VALUE, THE TEST WILL RETURN THE LAST VIDEO, EVEN IF IT IS NOT THE ONE WITH HIGHEST BITRATE.
elevenMp4 = [{
bitrate: 10,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video1.mp4'
},
{
bitrate: 1,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video2.mp4'
},
{
bitrate: 1000,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video3.mp4'
},
{
bitrate: 100,
content_type: 'video/mp4',
url: 'https://video.twimg.com/video4.mp4'
}
];

test("getBestVideo", function(assert) {
assert.equal(getBestVideo(elevenMp4), 'https://video.twimg.com/video3.mp4', '11_4_videos_one_mp4_last_one');
});