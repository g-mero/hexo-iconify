import getIcon from './modules/icon'

hexo.extend.helper.register('icon', function (iconName: string) {
  const iconHTML = getIcon(iconName)
  return iconHTML
})
