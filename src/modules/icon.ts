import { locate } from '@iconify/json'
import {
  getIconData,
  iconToHTML,
  iconToSVG,
  replaceIDs,
  stringToIcon,
} from '@iconify/utils'
import { readFileSync } from 'hexo-fs'

const iconCache: Record<string, string> = {}

export default function getIcon(iconName: string) {
  const iconInfo = stringToIcon(iconName)

  if (!iconInfo) {
    throw new Error(`Invalid icon name "${iconName}"`)
  }

  let icons: any = {}

  if (iconCache[iconInfo.prefix]) {
    icons = iconCache[iconInfo.prefix]
  } else {
    const iconPath = locate(iconInfo.prefix) as string
    icons = JSON.parse(readFileSync(iconPath) as string)
    iconCache[iconInfo.prefix] = icons
  }

  const iconData = getIconData(icons, iconInfo.name)

  if (!iconData) {
    throw new Error(`Icon "${iconName}" is missing`)
  }

  const renderData = iconToSVG(iconData, {
    height: '1em',
    width: '1em',
  })

  return iconToHTML(replaceIDs(renderData.body), renderData.attributes)
}
