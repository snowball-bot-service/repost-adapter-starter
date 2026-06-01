import type {
  Adapter,
  AdapterContext,
  RepostAdapterRequestParams,
  RepostAdapterResponsePayload, SocialProvider,
} from '@snowball-bot/repost-adapter';

// ============================================================================
// TODO: 1. 修改下方 manifest 信息
// ============================================================================
//
// - manifest.name: 必须以 `repost-adapter-` 开头
// - manifest.provider: 你的平台标识符，比如 'twitter' / 'bilibili'
// - manifest.whitelistHosts: 你的 adapter 接管的域名列表（不带 www）
// - manifest.version: 适配器自己的版本号，每次有重大变化时递增
// - manifest.author: 你的昵称
// - manifest.billing: 各类费用雪花定价
// - manifest.providerInfo: 该适配器的基本信息
//
// ============================================================================

const provider: SocialProvider = "REPLACE_ME";

const adapter: Adapter = {
  manifest: {
    name: 'repost-adapter-REPLACE_ME',
    provider: provider,
    whitelistHosts: ['example.com'],
    version: 1,
    author: 'REPLACE_ME',
    billing: {
      text: 100,
      token: 100,
      media: 1000,
      green: 1,
    },
    providerInfo: {
      name: 'REPLACE_ME',
      icon: '✨',
      color: '#FFFFFF',
      bgColor: '#000000',
    }
  },

  /**
   * 适配器初始化时触发，在此处注册各类资源
   * @param ctx
   */
  async initState(ctx: AdapterContext) {
    // 注册转发请求处理器
    ctx.on('onRepostRequest', (req) => handle(req, ctx, {  }));

    ctx.logger.info(`[${provider}] Adapter initialized.`);
  },

  /**
   * 适配器销毁时触发，在此处清理各类资源
   *
   * eg. 关闭 HTTP 客户端, 清空定时器, 断开长连接...
   */
  async dispose() {

  },
};

// ============================================================================
// TODO: 2. 实现下方的 handle 函数
// ============================================================================
//
// 这是 adapter 的核心：接收一个 URL，返回标准化的转发数据。
//
// ============================================================================

interface AdapterOptions {

}

async function handle(
  req: RepostAdapterRequestParams,
  ctx: AdapterContext,
  options: AdapterOptions
): Promise<RepostAdapterResponsePayload | null> {
  ctx.logger.debug(`[${provider}] fetching ${req.source}`);

  // TODO: 1) 从 req.url 解析出 post id / 用户名 等
  // const postId = extractPostId(req.url);

  // TODO: 2) 调用平台 API 拿到原始数据
  // const raw = await fetchFromApi(postId, options.apiKey);

  const postId = "";
  const publishAt = new Date();

  const requesterUserId = "";
  const requesterNickname = "";

  const authorNickname = "";

  // TODO: 3) 转换成标准 response 格式
  return {
    code: req.code,
    provider: provider,
    originalUrl: req.source,
    method: "post",

    postId: postId,
    publishAt: publishAt,

    requester: {
      userId: requesterUserId,
      nickname: requesterNickname,
    },
    author: {
      nickname: authorNickname,
    },

    title: "",
    content: `TODO: real content from ${req.source}`,
    cover: "",
    images: [],
    overlayCoverBuffer: undefined,
    child: undefined,
    badges: [],
    strawberry: undefined,
    watermelon: undefined,

    useProxy: false,
    useTranslator: false,

    canvasWidth: undefined,
    extra: undefined,
  };
}

export default adapter;
