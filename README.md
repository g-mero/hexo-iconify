# hexo-iconify 提供两种轻松使用iconify上几十万个图标的方法

## 插件介绍

hexo-iconify 为 hexo 博客生成程序提供了 iconify 图标集的支持，你可以轻松的使用[Icônes (icones.netlify.app)](https://icones.netlify.app/collection/all)的所有图标，它以 helper 的形式注入 hexo，占用了 icon 和 icons 这两个 helper 名，务必确保你的程序中没有使用到 icon和icons 这两个 helper 名，然后你就可以在项目中像这样使用插件了：

`span.menu-icon !{icon('ant-design:home-outlined')}`

或者

`span.menu-icon(class=icons('ant-design:home-outlined','main.min.css'))`

icon 以内联的方式写入html, 没有任何负担，就是有可能会明显的增大单页面的体积

icons 则是以类名的方式调用图标，插件会在静态文件生成的时候将图标的以mask image的方式写入到给出的css文件的最后面。它返回的是类似于 .icons .icons-ph-magnifying-glass 的类名，
你需要自行设置和调整基类icons的样式

类似于:

```css
.icons {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: -.15em;
    background-color: currentcolor;
    mask: no-repeat center / 100%;
    mask-image: var(--svg);
}

/* 以下代码由插件自动生成, 会自动注入到您给出的css文件中 */
.icons-ph-magnifying-glass {
    --svg: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%221em%22%20height%3D%221em%22%20viewBox%3D%220%200%20256%20256%22%3E%3Cpath%20fill%3D%22currentColor%22%20d%3D%22m229.66%20218.34l-50.07-50.06a88.11%2088.11%200%201%200-11.31%2011.31l50.06%2050.07a8%208%200%200%200%2011.32-11.32ZM40%20112a72%2072%200%201%201%2072%2072a72.08%2072.08%200%200%201-72-72Z%22%2F%3E%3C%2Fsvg%3E);
}
```

## 插件安装

> i 插件外部依赖于`@iconify/json`和`@iconify/utils`，并使用到了`hexo-fs`(该依赖默认情况下，hexo 是自带的)，因此如果你的项目中没有引入以上插件，务必先行安装。

`npm i @iconify/json @iconify/utils`

我更推荐你下载 hexo-iconify 的编译后文件，直接放到主题目录的`scripts`文件夹中，这样更加合理

当然你也可以通过 npm 安装 hexo-iconify，这会使得所有主题都能使用 icon 的 helper

`npm i hexo-iconify`

如果你使用icons helper，并不是很喜欢在每次调用时都要写css文件名，你可以在hexo的根目录_config文件中添加如下配置

```yaml
iconify:
  # 默认写入的文件
  file: 'main.min.css' 
```
