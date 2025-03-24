//  mikoto - 修改点歌卡片的封面by夕颜
//使用方法：圈x 添加主机名  api.dragonlongzhu.cn
//修改本配置的文件名为mkqqyy.js
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
      obj.data.cover = "https://api.yujn.cn/api/upload_tx.php?url=https://img.xiyan.pro/i/2025/03/24/uij1jo.png";
    }
    $done({body: JSON.stringify(obj)});
  } catch (e) {
    console.log("解析失败by夕颜:", e);
    $done({body});
  }
} else {
  $done({});
}
//by夕颜
