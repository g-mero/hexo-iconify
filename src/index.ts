import { getIcon, getIconClass, saveIcons } from './modules/icon'

hexo.extend.helper.register('icon', function (iconName: string) {
  const iconHTML = getIcon(iconName)
  return iconHTML
})

hexo.extend.helper.register(
  'icons',
  function (iconName: string, fileName?: string) {
    return getIconClass(iconName, fileName)
  },
)

hexo.extend.tag.register('icon', function (args) {
  const iconName = args[0]
  const iconHTML = getIcon(iconName)
  return iconHTML
})

hexo.extend.filter.register('after_render:css', function (str, data) {
  let defaultFile = 'icons.css'

  // 使用配置文件中的文件名
  if (hexo.config.iconify?.file) {
    defaultFile = hexo.config.iconify.file
  }

  // 优先使用主题配置文件中的文件名
  if (hexo.theme.config.iconify?.file) {
    defaultFile = hexo.theme.config.iconify.file
  }

  saveIcons.forEach((value, key) => {
    const fileName = value.file || defaultFile
    if (data.path.includes(fileName)) {
      hexo.log.info(`iconify: 写入图标 ${key} 到 ${fileName}`)
      str += `.${key}{--svg:url("${value.data}");}`
    }
  })

  return str
})
