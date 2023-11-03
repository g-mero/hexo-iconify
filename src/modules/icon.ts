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

function svgToDataURI(svg: string) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export const saveIcons = new Map<string, { data: string; file?: string }>()

export function getIcon(iconName: string) {
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

  const renderData = iconToSVG(iconData)

  const svgHtml = iconToHTML(replaceIDs(renderData.body), renderData.attributes)

  return svgHtml
}

export function getIconClass(iconName: string, cssFileName?: string) {
  const iconInfo = stringToIcon(iconName)
  if (!iconInfo) {
    throw new Error(`Invalid icon name "${iconName}"`)
  }
  const svgHtml = getIcon(iconName)
  saveIcons.set(`icons-${iconInfo.prefix}-${iconInfo.name}`, {
    data: svgToDataURI(svgHtml),
    file: cssFileName,
  })

  return `icons icons-${iconInfo.prefix}-${iconInfo.name}`
}
