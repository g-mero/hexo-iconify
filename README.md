## 插件介绍

hexo-iconify 为 hexo 博客生成程序提供了 iconify 图标集的支持，你可以轻松的使用[Icônes (icones.netlify.app)](https://icones.netlify.app/collection/all)的所有图标，它以 helper 的形式注入 hexo，占用了 icon 这一 helper 名，务必确保你的程序中没有使用到 icon 这一 helper 名，然后你就可以在项目中像这样使用插件了：

`span.menu-icon !{icon('ant-design:home-outlined')}`

它输出为 svg 格式的 html 内容：

```html
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="1em"
  height="1em"
  viewBox="0 0 1024 1024"
>
  <path
    fill="currentColor"
    d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7l23.1 23.1L882 542.3h-96.1z"
  ></path>
</svg>
```

## 插件安装

> i 插件外部依赖于`@iconify/json`和`@iconify/utils`，并使用到了`hexo-fs`(该依赖默认情况下，hexo 是自带的)，因此如果你的项目中没有引入以上插件，务必先行安装。

`npm i @iconify/json @iconify/utils`

我更推荐你下载 hexo-iconify 的编译后文件，直接放到主题目录的`scripts`文件夹中，这样更加合理

当然你也可以通过 npm 安装 hexo-iconify，这会使得所有主题都能使用 icon 的 helper

`npm i hexo-iconify`
