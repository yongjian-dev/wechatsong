let body = $response.body; 
let headers = $response.headers;  

if (body) {
  try {
    let obj = JSON.parse(body);

    if (obj) { 
      const songCombination = {
        song_name: "",
        song_singer: "",
        cover: "http://fmc-75014.picgzc.qpic.cn/consult_viewer_pic__6ab72284-c539-4889-9de3-97eafa57de88_1742814943630.jpg"
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
