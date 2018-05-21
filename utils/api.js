module.exports = {
    VIDEO_ALL_CATEGORIES: '/video/allCategories', // 获取类目查询的标题
    HOTSEARCH_WORDS: '/hotsearch/words', // 热门搜索列表
    HOTSEARCH_LIST: '/hotsearch/list', // 搜索——符合条件关键字列表
    VIDEO_SEARCH_BY_TAGS: '/video/searchByTags/${pageNo}/${pageSize}', //根据条件搜索
    SUBSCRIBER: '/subscriber/${videoId}', // 订阅视频
    SUBSCRIBER_CANCLE: '/subscriber/cancle/${videoId}', // 取消订阅
    WATCHOUT: '/subscriber/reach/${videoId}', // 视频已看完
    WATCHOUT_CANCLE: '/video/reach/cancle/${videoId}', // 取消已看完
    VIDEO_RECOMMEND_VIDEOS: '/video/recommendVideos/${pageNo}/${pageSize}', // 每日推荐，week参数不传，则默认当天的星期，若指定，1-7分别表示周一至周日
    BANNERS_CATEGORIES: '/banners/categories/${pageNo}/${pageSize}', //首页分类
    BANNERS_LIST: '/banners/list/${pageNo}/${pageSize}', //首页分页?category=0
    VIDEO_SEARCH: '/video/search/${pageNo}/${pageSize}', //各种分类过滤列表
    VIDEO_SEARCHBYBANNERCATEGORY: '/video/searchByBannerCategory/${pageNo}/${pageSize}', //综合好剧
    VIDEO_DETAIL: '/video/detail/${videoId}', //详情简介
    VIDEO_DIRECTORY_SERIES: '/videoSeries/list/${videoId}/${pageNo}/${pageSize}', //视频分集
    MINI_APPLOGIN: '/wx/mini_app/callback', //微信授权登录
    MINI_USERINFO: '/wx/mini_app/user_info', //微信授权登录
    MINE_GET_VALIDATE_CODE: '/register/sms/noWx/${mobile}', //手机号登录获取验证码(旧)
    MINE_GET_VALIDATE_CODE_NEW: '/users/smses/login/${mobile}', //手机号登录获取验证码(新)
    MINE_BIND_PHONE_SMS: '/register/sms/${phone}', //手机号绑定获取验证码(旧)
    MINE_BIND_PHONE_SMS_NEW: '/users/smses/bind/${phone}', //手机号绑定获取验证码(新)
    MINE_BIND_PHONE: '/register/${unionid}', //手机号绑定
    MINE_MOBILE_LOGIN: '/register/noWx', //手机号码登录
    MINE_MOBILE_APP_LOGIN: '/register/app-register', //手机号码登录
    MINE_FEEDBACK: '/reportproblem/create', //用户反馈信息
    MINE_GET_USERINFO: '/users/userInfo/${userid}', //获取用户详情
    MINE_EDIT_NICKNAME: '/users/updateNickName/${userid}?nickName=${nickName}', //编辑用户昵称
    MINE_EDIT_SIGN: '/users/updateSign/${userId}?sign=${sign}', //编辑个性签名
    MINE_UPLOAD_PICTURE: '/users/updateAvter', //上传图片
    VIDEO_DIRECTORY_GROUP: '/videoSource/list/${pageNo}/${pageSize}', //视频合集
    VIDEO_DIRECTORY_GROUP_LIST: '/videoSource/vsCol/${videoSourceId}/${pageNo}/${pageSize}', //合集子链接
    VIDEO_DIRECTORY_SERIES_LIST: '/videoSource/links/${pageNo}/${pageSize}', //视频分集子链接
    VIDEO_ASEARCH: '/video/asearch', //条目搜索?key=使徒行者&page-size=4
    VIDEO_SUBSCRIBE: '/video/subscribe/${pageNo}/${pageSize}', //我的订阅
    VIDEO_REALTIVENUM: '/video/realtiveNum', //订阅和已看数量
    VIDEO_WATCHED: '/video/reach/${pageNo}/${pageSize}', //我的订阅
    VIDEO_NETWORK_RESULT: '/grabs', //全网搜索DomainCollection
    WEBSITE_COLLECTION_RESULT: '/websites', //全网搜索子链接(子页面)
    VIDEO_SERIES_WATCHED: '/videoSeries/watch/${videoSeriesId}/${enable}', //改变视频分集观看状态
    VIDEO_SERIES_WATCHLOGS: '/videoSeries/watchlogs/${pageNo}/${pageSize}', //获取最近观看列表
    OPERATELOG_TODAY: '/operateLog/today/${pageNo}/${pageSize}',
    OPERATELOG_YESTERDAY: '/operateLog/yesterday/${pageNo}/${pageSize}',
    OPERATELOG_PREWEEKLOGS: '/operateLog/preweeklogs/${pageNo}/${pageSize}',
    OPERATELOG_MORELOGS: '/operateLog/morelogs/${pageNo}/${pageSize}',
    REGISTER_UNBIND_PHONE: '/register/unbind/${phone}',
    BIND_REGISTERATIONID: '/users/bind/registrationId/${platform}/${registrationId}',
    RECENTLY_UPDATED: '/videoSeries/recentlyUpdated/${pageNo}/${pageSize}',
    JMESSAGES_PULL: '/jmessage/pull/${pageNo}/${pageSize}', //我的消息列表
    USERS_SYSSETTING_STOP_PUSH: '/users/syssetting/stop-push', //关闭推送
    USERS_SYSSETTING_RESUME_PUSH: '/users/syssetting/resume-push', //开启推送
    USERS_SYSSETTING_LIST: '/users/syssetting/list', //系统设置参数
    //URL_REPLACE_INTERCEPT: '/url-replace/intercept' //
    URL_REPLACE_INTERCEPT: '/vs/parsers/intercept' //替换链接
};
