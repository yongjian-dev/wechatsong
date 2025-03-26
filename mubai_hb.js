let body = $response.body; 
let headers = $response.headers;  

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj) { 
      const songCombination = {
        song_name: "",
        song_singer: "",
        cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__53f0f9b1-de6a-4442-8d52-1787f525e32a_1742977662888.jpg"
      };

      // 更新歌曲信息
      obj.title = songCombination.song_name;
      obj.singer = songCombination.song_singer;
      obj.cover = songCombination.cover;

      let updatedBody = JSON.stringify(obj);
      $done({ body: updatedBody, headers: headers });

    } else {
      $done({ body: body, headers: headers });
    }

  } catch (e) {
    console.log("by mubai:", e);
    $done({ body: body, headers: headers });
  }
} else {
  $done({});
}
