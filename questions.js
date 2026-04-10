// LTI 四个恋爱人格维度（攻击性拉满版）
// 第一维度: 主动出击(A) vs 被动躺平(P)
// 第二维度: 理性控制(R) vs 感性发疯(C)
// 第三维度: 专一舔狗(F) vs 海王养鱼(H)
// 第四维度: 依赖黏人(D) vs 独立冷血(I)

const questions = [
  {
    id: 1,
    text: "遇到心动的人，你的第一反应是？",
    options: [
      { text: "直接冲上去要微信，管他那么多", dimension: "A", value: 2 },
      { text: "等着呗，缘分到了自然会来", dimension: "P", value: 2 },
      { text: "心跳加速，开始脑补孩子的名字", dimension: "C", value: 2 },
      { text: "先分析ta的星座和MBPI", dimension: "R", value: 2 }
    ]
  },
  {
    id: 2,
    text: "对方半小时没回消息，你会？",
    options: [
      { text: "再发三条：在吗？在忙吗？看到我了吗？", dimension: "D", value: 2 },
      { text: "行，你不回我我也不找你", dimension: "I", value: 2 },
      { text: "开始查ta朋友圈，看是不是在和别人聊天", dimension: "C", value: 2 },
      { text: "ta可能在忙，正常", dimension: "R", value: 2 }
    ]
  },
  {
    id: 3,
    text: "第一次约会，你会？",
    options: [
      { text: "提前三天规划好所有行程", dimension: "R", value: 2 },
      { text: "带ta去最贵的地方，钱不是问题", dimension: "A", value: 2 },
      { text: "随便，我都可以，听你的", dimension: "P", value: 2 },
      { text: "满脑子都是牵手后要不要直接亲上去", dimension: "C", value: 2 }
    ]
  },
  {
    id: 4,
    text: "谈恋爱后，你的朋友圈会？",
    options: [
      { text: "一天发八条秀恩爱，屏蔽老板", dimension: "D", value: 2 },
      { text: "根本不发，恋爱是自己的事", dimension: "I", value: 2 },
      { text: "仅ta可见：宝宝今天也好爱你", dimension: "F", value: 2 },
      { text: "分组可见：给A看岁月静好，给B看单身人设", dimension: "H", value: 2 }
    ]
  },
  {
    id: 5,
    text: "吵架后，你的处理方式是？",
    options: [
      { text: "不管谁的错，先跪下道歉再说", dimension: "F", value: 2 },
      { text: "列个Excel分析谁对谁错", dimension: "R", value: 2 },
      { text: "直接拉黑，然后等ta来找我", dimension: "I", value: 2 },
      { text: "在朋友圈发伤感文案，内涵ta", dimension: "C", value: 2 }
    ]
  },
  {
    id: 6,
    text: "你的恋爱观是？",
    options: [
      { text: "宁缺毋滥，一个人总比将就强", dimension: "I", value: 2 },
      { text: "遇到喜欢的就追，管他那么多", dimension: "A", value: 2 },
      { text: "广撒网，总有上钩的", dimension: "H", value: 2 },
      { text: "爱就完了，想那么多干嘛", dimension: "C", value: 2 }
    ]
  },
  {
    id: 7,
    text: "周末约会，你更想？",
    options: [
      { text: "24小时黏在一起，上厕所都要发视频", dimension: "D", value: 2 },
      { text: "见一面就行，我还有自己的事", dimension: "I", value: 2 },
      { text: "我来安排，你跟着走就行", dimension: "A", value: 2 },
      { text: "随便，我都可以（其实心里有想法但不说）", dimension: "P", value: 2 }
    ]
  },
  {
    id: 8,
    text: "看到对象和异性聊天，你会？",
    options: [
      { text: "当场黑脸，质问ta什么意思", dimension: "C", value: 2 },
      { text: "表面微笑，回家后疯狂翻ta手机", dimension: "F", value: 2 },
      { text: "正常社交而已，关我什么事", dimension: "I", value: 2 },
      { text: "那我也去找异性聊，看谁先急", dimension: "H", value: 2 }
    ]
  },
  {
    id: 9,
    text: "表白被拒后，你会？",
    options: [
      { text: "继续追！ta只是还没看到我的好！", dimension: "F", value: 2 },
      { text: "体面退出，祝ta幸福", dimension: "R", value: 2 },
      { text: "转身就找下一个，天涯何处无芳草", dimension: "H", value: 2 },
      { text: "发条朋友圈：有些人错过了就错过了", dimension: "P", value: 2 }
    ]
  },
  {
    id: 10,
    text: "你理想中的恋爱状态是？",
    options: [
      { text: "每天都像偶像剧，甜到齁", dimension: "D", value: 2 },
      { text: "搭伙过日子，平平淡淡才是真", dimension: "R", value: 2 },
      { text: "各自有生活，偶尔约会就好", dimension: "I", value: 2 },
      { text: "新鲜感不能断，要一直有激情", dimension: "H", value: 2 }
    ]
  },
  {
    id: 11,
    text: "对象问你"我好看吗"，你会？",
    options: [
      { text: "好看！宇宙第一好看！我配不上你！", dimension: "F", value: 2 },
      { text: "客观评价：今天妆有点浓", dimension: "R", value: 2 },
      { text: "嗯，好看（继续玩手机）", dimension: "I", value: 2 },
      { text: "你今天是不是又P图了？", dimension: "A", value: 2 }
    ]
  },
  {
    id: 12,
    text: "你的恋爱底线是？",
    options: [
      { text: "不能背叛我，一次都不行", dimension: "F", value: 2 },
      { text: "不能冷暴力，有事说清楚", dimension: "A", value: 2 },
      { text: "不能限制我的自由和社交", dimension: "I", value: 2 },
      { text: "底线？爱到深处自然没有", dimension: "C", value: 2 }
    ]
  },
  {
    id: 13,
    text: "纪念日忘了过，你的反应？",
    options: [
      { text: "气炸了！你根本不在乎我！", dimension: "C", value: 2 },
      { text: "提醒一下，然后让ta补一份礼物", dimension: "R", value: 2 },
      { text: "算了，反正我也没记住", dimension: "P", value: 2 },
      { text: "我自己去买个包，然后说这是你送的", dimension: "H", value: 2 }
    ]
  },
  {
    id: 14,
    text: "你会同时和多个异性保持暧昧吗？",
    options: [
      { text: "绝对不行，我只对一个人好", dimension: "F", value: 2 },
      { text: "偶尔聊聊，但心里有数", dimension: "R", value: 2 },
      { text: "看情况，不主动但也不拒绝", dimension: "P", value: 2 },
      { text: "当然，我的鱼塘可不能空着", dimension: "H", value: 2 }
    ]
  },
  {
    id: 15,
    text: "谈恋爱后，你最大的变化是？",
    options: [
      { text: "变得很黏人，离开ta就活不了", dimension: "D", value: 2 },
      { text: "变得更冷漠，觉得恋爱不过如此", dimension: "I", value: 2 },
      { text: "变得神经质，一点小事就崩溃", dimension: "C", value: 2 },
      { text: "变得更卑微，什么都是我的错", dimension: "F", value: 2 }
    ]
  },
  {
    id: 16,
    text: "分手后，你会？",
    options: [
      { text: "哭到崩溃，然后去ta楼下等ta", dimension: "C", value: 2 },
      { text: "冷静复盘这段感情的得失", dimension: "R", value: 2 },
      { text: "三天后发朋友圈：单身真好", dimension: "H", value: 2 },
      { text: "默默删掉所有合照，假装没发生过", dimension: "P", value: 2 }
    ]
  },
  {
    id: 17,
    text: "你觉得恋爱中最重要的事是？",
    options: [
      { text: "忠诚，不能有二心", dimension: "F", value: 2 },
      { text: "沟通，有话直说别让人猜", dimension: "A", value: 2 },
      { text: "空间，别24小时黏着我", dimension: "I", value: 2 },
      { text: "激情，要一直有新鲜感", dimension: "C", value: 2 }
    ]
  },
  {
    id: 18,
    text: "你会主动给对象准备惊喜吗？",
    options: [
      { text: "经常准备，仪式感是恋爱的灵魂", dimension: "A", value: 2 },
      { text: "看心情，想不起来就算了", dimension: "P", value: 2 },
      { text: "实用最重要，搞那些虚的干嘛", dimension: "R", value: 2 },
      { text: "我连自己生日都记不住，算了吧", dimension: "I", value: 2 }
    ]
  },
  {
    id: 19,
    text: "你的朋友们怎么评价你的恋爱？",
    options: [
      { text: "你太恋爱脑了吧，没救了", dimension: "D", value: 2 },
      { text: "你对象对你真好，你上辈子拯救了银河系", dimension: "F", value: 2 },
      { text: "你太冷漠了，真的爱ta吗？", dimension: "I", value: 2 },
      { text: "你换对象的速度比我换手机壳还快", dimension: "H", value: 2 }
    ]
  },
  {
    id: 20,
    text: "用一句话形容你的恋爱观？",
    options: [
      { text: "爱ta就要给ta全部", dimension: "F", value: 2 },
      { text: "爱情而已，又不是活不下去", dimension: "I", value: 2 },
      { text: "主动才能有故事", dimension: "A", value: 2 },
      { text: "跟着感觉走，疯就完了", dimension: "C", value: 2 }
    ]
  }
];

// 16种恋爱人格类型（攻击性拉满版）
// dim1: A(主动出击) vs P(被动躺平)
// dim2: C(感性发疯) vs R(理性控制)
// dim3: F(专一舔狗) vs H(海王养鱼)
// dim4: D(依赖黏人) vs I(独立冷血)
const personalityTypes = {
  "ACFD": {
    name: "终极舔狗",
    emoji: "🐕",
    description: "你是恋爱界舔狗中的战斗机！主动出击、感性发疯、专一到卑微、24小时黏着对方。你就是那种'ta虐我千百遍，我待ta如初恋'的传奇人物。",
    fun: "ta已读不回，你发了20条消息后说'没关系我知道你忙记得吃饭'。",
    traits: ["主动到不要脸", "感性到神经质", "专一到失去自我", "24小时在线待命", "舔狗界天花板"],
    color: "#ff1744"
  },
  "ACFI": {
    name: "悲情小丑",
    emoji: "🤡",
    description: "你主动付出、感性到崩溃、专一到可笑，但对方根本不在乎你。你就是恋爱舞台上的小丑，拼尽全力逗ta开心，最后发现自己才是个笑话。",
    fun: "你精心准备了纪念日惊喜，ta说'我们只是朋友啊'。",
    traits: ["主动当冤大头", "感性到自我感动", "专一到像个笑话", "独自崩溃还要笑", "恋爱小丑本王"],
    color: "#d500f9"
  },
  "ACHD": {
    name: "疯批海王",
    emoji: "🌊",
    description: "你主动出击、感性冲动、鱼塘广阔，还要求每条鱼都时刻陪伴。你就是恋爱界的疯批海王，爱的时候是真疯，换人的时候也是真快。",
    fun: "你同时和五条鱼说'你是我这辈子唯一'，而且每次都是真心的。",
    traits: ["主动出击", "感性疯批", "鱼塘管理大师", "要求鱼都在线", "疯批海王本王"],
    color: "#ff6d00"
  },
  "ACHI": {
    name: "冷血海后",
    emoji: "🦋",
    description: "你主动、感性但不专一，而且极其冷漠。你撩人的时候很真，但腻了就走。你就是那种'我爱过你是真的，不爱了也是真的'的冷血玩家。",
    fun: "刚分手三天，你就发朋友圈'单身真好，下一个更乖'。",
    traits: ["主动撩人", "感性上头快", "换人比换衣服快", "冷漠无情", "海后本后"],
    color: "#ff9100"
  },
  "ARFD": {
    name: "守护工具人",
    emoji: "🔧",
    description: "你主动、理性、专一，还24小时随叫随到。你不是在恋爱，你是在做一份名为'对象'的全职工作。你就是传说中的人形ATM+情绪垃圾桶。",
    fun: "凌晨三点ta说想吃城南的烧烤，你立刻穿好衣服出门。",
    traits: ["主动当牛做马", "理性分析ta的需求", "专一到可笑", "随叫随到的工具人", "人形ATM"],
    color: "#6200ea"
  },
  "ARFI": {
    name: "独立清醒派",
    emoji: "🧊",
    description: "你主动、理性、专一但极其独立。你是恋爱界的一股清流：我爱你但你是自由的，我是认真的但我也需要空间。你就是那种'我很好但你不配'的清醒派。",
    fun: "ta说'我们冷静一下'，你说'好的'然后去健身了。",
    traits: ["主动但不卑微", "理性看待感情", "专一但有底线", "独立到冷漠", "人间清醒"],
    color: "#00b0ff"
  },
  "ARHD": {
    name: "霸道总裁",
    emoji: "👔",
    description: "你主动、理性、花心但要求对方陪伴。你就是那种'我给你花钱但你得听我的'的控制型海王。你的感情是交易，你的爱是条件交换。",
    fun: "你说'我不是花心，我只是想给每个女孩一个家（和一张附属卡）'。",
    traits: ["主动掌控全局", "理性计算成本", "多线发展", "要求对方服从", "霸总型海王"],
    color: "#2979ff"
  },
  "ARHI": {
    name: "理性渣王",
    emoji: "🎯",
    description: "你主动、理性、花心且冷漠。你就是恋爱界的精准打击器：广泛撒网、重点培养、随时撤退。你把感情经营得像风投一样理性。",
    fun: "你的微信备注是A123、B456、C789，但你从来不翻车。",
    traits: ["主动出击", "理性管理鱼塘", "随时准备撤", "冷漠到无情", "渣王本王"],
    color: "#00e676"
  },
  "PCFD": {
    name: "卑微等待怪",
    emoji: "🥺",
    description: "你不主动、感性发疯、专一到执着，还24小时等着对方找你。你就是那种'我不找你但你不找我我会死'的卑微等待怪。",
    fun: "你等了ta三个月的消息，最后ta和别人官宣了，你发了条'祝你幸福'然后哭了三天。",
    traits: ["被动到离谱", "感性到自我折磨", "专一到偏执", "等待到地老天荒", "卑微界王者"],
    color: "#f50057"
  },
  "PCFI": {
    name: "自我感动型",
    emoji: "😭",
    description: "你不主动但感性爆炸、专一到可笑，还喜欢独自沉浸在自己的深情里。你就是那种'我这么爱你你怎么看不到'的自我感动型人格。",
    fun: "你写了3000字的小作文发给ta，ta回了一个'嗯'，你觉得ta一定被感动了。",
    traits: ["被动等待", "感性到自欺欺人", "专一到自我感动", "独处时疯狂内耗", "自我感动大师"],
    color: "#aa00ff"
  },
  "PCHD": {
    name: "绿茶养鱼王",
    emoji: "🍵",
    description: "你不主动但感性、花心且黏人。你就是恋爱界的绿茶天花板：不拒绝、不负责、不主动，但每条鱼都觉得你对ta是特别的。",
    fun: "你说'我只是把你当朋友'，但每天和ta聊到凌晨。",
    traits: ["被动勾人", "感性且虚伪", "广撒网不主动", "需要鱼都在线", "绿茶王者"],
    color: "#c51162"
  },
  "PCHI": {
    name: "摆烂海王",
    emoji: "🛋️",
    description: "你不主动、感性、花心且冷漠。你就是恋爱界的咸鱼海王：爱来不来，不来拉倒。你的鱼塘很大，但你懒得管。",
    fun: "三条鱼同时找你，你说'你们三个自己商量吧'然后继续刷抖音。",
    traits: ["被动到躺平", "感性但懒得管", "有鱼塘但不维护", "冷漠到极致", "摆烂海王"],
    color: "#ff3d00"
  },
  "PRFD": {
    name: "老好人备胎",
    emoji: "🎈",
    description: "你不主动、理性、专一但随叫随到。你就是恋爱界的超级备胎：ta需要你的时候你在，ta不需要你的时候你也在。你就是那种'你很好但我配不上你'的专业户。",
    fun: "ta结婚那天给你发了请柬，你还随了888的份子钱。",
    traits: ["被动到极点", "理性到无趣", "专一到成为备胎", "随叫随到老好人", "备胎界天花板"],
    color: "#607d8b"
  },
  "PRFI": {
    name: "寡王",
    emoji: "🗿",
    description: "你不主动、理性、专一且独立。你就是恋爱界的活化石：一个人活得很好，为什么要谈恋爱？你就是那种'智者不入爱河'的终身成就奖得主。",
    fun: "别人问你怎么还不谈恋爱，你说'我在等一个完美的人'，其实你根本没打算找。",
    traits: ["被动到极致", "理性到冷血", "专一到宁缺毋滥", "独立到不需要任何人", "寡王本王"],
    color: "#455a64"
  },
  "PRHD": {
    name: "被动女王",
    emoji: "👸",
    description: "你不主动、理性、花心但需要陪伴。你就是那种'你追我我可以考虑，但你要是不追我就换人'的高冷型海王。你的鱼塘里都是主动上钩的鱼。",
    fun: "你同时吊着五个人，但每个人都说'ta好像只对我有意思'。",
    traits: ["被动高冷", "理性养鱼", "不主动但来者不拒", "需要人捧着", "女王级海王"],
    color: "#ffc107"
  },
  "PRHI": {
    name: "冷血型渣王",
    emoji: "🥶",
    description: "你不主动、理性、花心且极其冷漠。你是恋爱界的终极反派：不主动撩人，但谁靠近都被你养在鱼塘里。你就是那种'我没让你喜欢我'的冷血型渣王。",
    fun: "ta质问你为什么同时和那么多人聊天，你说'我回个消息也算聊天吗'。",
    traits: ["被动冷漠", "理性到冷血", "广撒网不负责", "独立到绝情", "渣王终结者"],
    color: "#263238"
  }
};
