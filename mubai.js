//  mikoto - 修改点歌卡片的封面by mubai
//使用方法：圈x 添加主机名  api.dragonlongzhu.cn
//修改本配置的文件名为mubai.js
//把这个配置放到文件app-quantumultx-Scripts
//修改本配置显示文本和封面链接
//然后点歌


let body = $response.body;
if (body) {
  try {
    let obj = JSON.parse(body);
    if (obj && obj.data) {
   
      let originalName =  "";
      let originalSinger =  "";
      //by夕颜
    
      obj.data.song_name = originalName + "" + originalSinger;
      // 将歌手改为固定文本“点击播放—>”
      obj.data.song_singer = "";
      // 修改封面为指定链接
      obj.data.cover = "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__53f0f9b1-de6a-4442-8d52-1787f525e32a_1742977662888.jpg";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败by mubai:", e);
    $done({body});
  }
} else {
  $done({});
}
//by mubai
