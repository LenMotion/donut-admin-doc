export default {
  title: "Donut-Admin", //站点标题
  description: "一款基于SpringBoot3、JDK17、SaToken、MybatisPlus的开源管理系统", //mate标签description，多用于搜索引擎抓取摘要
  logo: "/public/favicon.svg",
  themeConfig: {
		sidebar: [
			{ text: "首页", link: "/" },
			{
				text: "指南",
				items: [
					{ text: "快速入门", link: "/guide/use" },
					{ text: "租户使用", link: "/guide/tenant" },
					{ text: "更新日志", link: "/guide/changeLog" },
					{ text: "开发计划", link: "/guide/devPlan" },
				],
			},
		],
    nav: [
      { text: "GitHub", link: "https://github.com/LenMotion/donut-admin" },
      { text: "Gitee", link: "https://gitee.com/LenMotion/donut-admin" },
    ],
    footer: {
      // message: 'Released under the <a target="_BLANK" href="https://github.com/LenMotion/donut-admin/blob/main/LICENSE">MIT License</a>. ',
      copyright:
        '<a style="color: blue" target="_BLANK" href="https://beian.miit.gov.cn/">蜀ICP备17020439号-2</a> | Copyright © 2024 LenMotion',
    },
  },
};
