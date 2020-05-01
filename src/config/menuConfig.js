/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "home",
    roles: ["admin"],
  },
  {
    title: "文档",
    path: "/doc",
    icon: "file"
  },
  {
    title: "组件",
    path: "/components",
    icon: "appstore",
    children: [
      {
        title: "回到顶部",
        path: "/components/back-to-top",
      },
    ]
  },
  {
    title: "图表",
    path: "/charts",
    icon: "area-chart",
    children: [
      {
        title: "键盘图表",
        path: "/charts/keyboard",
      },
      {
        title: "折线图",
        path: "/charts/line",
      },
      {
        title: "混合图表",
        path: "/charts/mix-chart",
      },
    ],
  },
  {
    title: "路由嵌套",
    path: "/nested",
    icon: "cluster",
    children: [
      {
        title: "菜单1",
        path: "/nested/menu1",
        children: [
          {
            title: "菜单1-1",
            path: "/nested/menu1/menu1-1",
          },
          {
            title: "菜单1-2",
            path: "/nested/menu1/menu1-2",
            children: [
              {
                title: "菜单1-2-1",
                path: "/nested/menu1/menu1-2/menu1-2-1",
              },
            ]
          },
        ]
      },
    ]
  },
  {
    title: "表格",
    path: "/table",
    icon: "table"
  },
];
export default menuList;
