 #!name=点歌卡片
 #!desc=黄白选网易，mikoto选qq
 #!author=mubai


[rewrite_local]
http-response ^https://www.hhlqilongzhu.cn/.*$ script-path=https://raw.githubusercontent.com/yongjian-dev/wechatsong/refs/heads/main/mubai_hb.js, requires-body=true, timeout=60, tag=黄白
http-response ^https?:\/\/api\.xingzhige\.com\/API\/NetEase_CloudMusic\/\?name=.+&n=1 script-path=https://raw.githubusercontent.com/yongjian-dev/wechatsong/refs/heads/main/mubai_hb.js, requires-body=true, timeout=60, tag=黄白
http-response ^https:\/\/api\.dragonlongzhu\.cn\/.* script-path=https://raw.githubusercontent.com/yongjian-dev/wechatsong/refs/heads/main/mubai.js, requires-body=true, timeout=60, tag=mikoto

[MitM]
hostname = api.xingzhige.com , www.hhlqilongzhu.cn , api.dragonlongzhu.cn
