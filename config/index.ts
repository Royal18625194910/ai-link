export const siteConfig = {
  name: "AI Link",
  description: "大模型中转站 - 一站式访问全球主流 AI 模型",
  tagline: "一个 API Key，访问所有大模型",
  
  invite: {
    link: "https://ai-link.com/invite?ref=official",
    code: "AI2026",
    title: "限时邀请码",
    description: "使用邀请码注册，立享 10% 终身折扣",
  },
  
  cta: {
    primary: {
      text: "立即开始",
      href: "/dashboard",
    },
    secondary: {
      text: "查看文档",
      href: "/docs",
    },
  },
  
  models: [
    {
      id: "gpt-4o",
      name: "GPT-4o",
      provider: "OpenAI",
      description: "最新多模态模型，视觉理解能力出色",
      tags: ["多模态", "GPT-4", "最新"],
      price: "¥0.015/千tokens",
      color: "from-green-400 to-emerald-600",
    },
    {
      id: "claude-3-5-sonnet",
      name: "Claude 3.5 Sonnet",
      provider: "Anthropic",
      description: "平衡性能与成本，适合日常使用",
      tags: ["快速", "经济", " Claude"],
      price: "¥0.008/千tokens",
      color: "from-orange-400 to-amber-600",
    },
    {
      id: "gemini-1-5-pro",
      name: "Gemini 1.5 Pro",
      provider: "Google",
      description: "超长上下文支持，百万级 token 处理",
      tags: ["长上下文", "1M+", "Google"],
      price: "¥0.012/千tokens",
      color: "from-blue-400 to-cyan-600",
    },
    {
      id: "deepseek-v2",
      name: "DeepSeek V2",
      provider: "深度求索",
      description: "国产大模型，代码能力优秀",
      tags: ["国产", "代码", "开源"],
      price: "¥0.005/千tokens",
      color: "from-purple-400 to-violet-600",
    },
    {
      id: "llama-3-70b",
      name: "Llama 3 70B",
      provider: "Meta",
      description: "开源顶尖模型，可微调部署",
      tags: ["开源", "微调", "Meta"],
      price: "¥0.006/千tokens",
      color: "from-blue-400 to-indigo-600",
    },
    {
      id: "qwen-max",
      name: "Qwen Max",
      provider: "阿里",
      description: "通义千问顶级模型，中文理解能力强",
      tags: ["中文", "阿里", "企业级"],
      price: "¥0.008/千tokens",
      color: "from-orange-400 to-red-600",
    },
  ],
  
  features: [
    {
      icon: "unite",
      title: "统一接口",
      description: "一套 API 规范，适配所有模型。无需为每个平台单独开发，降低集成成本。",
    },
    {
      icon: "zap",
      title: "极速响应",
      description: "全球 CDN 加速，就近接入。智能负载均衡，保证 99.9% 可用性。",
    },
    {
      icon: "shield",
      title: "安全可靠",
      description: "企业级加密传输，API Key 多维度权限控制。完整的审计日志，合规无忧。",
    },
    {
      icon: "chart",
      title: "用量监控",
      description: "实时监控 API 调用量、Token 消耗。按模型维度统计，成本一目了然。",
    },
    {
      icon: "users",
      title: "团队协作",
      description: "支持多成员管理，子账号独立配额。角色权限细粒度控制，安全便捷。",
    },
    {
      icon: "code",
      title: "开发者友好",
      description: "多语言 SDK 支持，详细的 API 文档。活跃的开发者社区，问题快速响应。",
    },
  ],
  
  social: {
    twitter: "https://twitter.com/ailink",
    github: "https://github.com/ailink",
    discord: "https://discord.gg/ailink",
    email: "contact@ai-link.com",
  },
  
  footer: {
    copyright: "© 2026 AI Link. All rights reserved.",
    links: [
      { text: "隐私政策", href: "/privacy" },
      { text: "服务条款", href: "/terms" },
      { text: "联系我们", href: "/contact" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
