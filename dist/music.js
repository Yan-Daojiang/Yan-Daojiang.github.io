const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [
    {
      name: "顽固",
      artist: '五月天',
      url: 'http://www.ytmp3.cn/down/49118.mp3',
      cover: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/wangu.jpg',
    }
  ]
})
