# 智能语音识别

## 关于各家语音识别情况调查结果

- 简单折腾了下，最后只有百度家的跑起来了，其它的由于配置太麻烦了，懒得折腾，没深入调研

||科大讯飞|百度|微软|谷歌|
|:--:|:--:|:--:|:--:|:--:|
|上手难易程度|无|简单|配置麻烦|配置麻烦|
|桌面版直接支持麦克风|否|否|是|否|
|.net支持|不友好|支持|支持|支持|
|.net发布版本|0|3.6.2|0.5|1.01|
|收费|免费|免费|收费|[0-60 分钟免费](https://cloud.google.com/speech-to-text/pricing)|

- 结论

  - 没找到有厂商直接支持电脑麦克风获取语音直接识别的，都是需要上传录音到云端再返回识别结果（在线识别），时效性由网络决定
  - 在线识别都会有配额限制，超出均需申请或付费提额
  - 没有调用麦克风的处理（微软家的好像可以，但是没配置好，没测试出来），处理音频都是以录音文件的形式发送到服务器识别
  - 整体来说语音助手在桌面端应用较少，并不如移动端广泛，很多都是厂商深度定制集成的，桌面端开发可能坑比较多，需要自己处理麦克风获取音频并处理格式
  - 目前看来，需要识别各种语言、各种方言的话，讯飞首选。论.net平台开发上手难易程度，当然是微软自家啦。识别效果的话，一跟音质有关，二跟算法识别准确度有关。算法优异和样本数量质量都很重要，这都不要紧，咱说的一口堡准普通话肯定能识别。
  - 仅供参考，调研不完全，以上并不能充分说明情况。