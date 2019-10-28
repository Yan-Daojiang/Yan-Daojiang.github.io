const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  listFolded: false,
  audio: [
    {
      name: "顽固",
      artist: '五月天',
      url: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/wangu.mp3',
      cover: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/wangu.jpg',
    },
    {
      name: "如烟",
      artist: '五月天',
      url: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/ruyan.mp3',
      cover: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/ruyan.jpg',
    },
    {
      name: "干杯",
      artist: '五月天',
      url: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/ganbei.mp3',
      cover: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/ganbei.jpg',
    },
    //{
      //name: "如果我们不曾相遇",
      //artist: '五月天',
      //url: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/rgwmbcxy.mp3',
      //cover: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/rgwmbcxy.jpg',
    //},
    //{
      //name: "成名在望",
      //artist: '五月天',
      //url: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/cmzw.mp3',
      //cover: 'https://ydj-image-1258588170.cos.ap-chengdu.myqcloud.com/myimage/cmzw.jpg',
    //}
  ]
})


