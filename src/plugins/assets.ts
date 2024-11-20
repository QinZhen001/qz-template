import '@/styles/variable.css'
import '@/styles/tailwind.css'
import '@/styles/global.css'

/** Tailwind's Preflight Style Override */
function naiveStyleOverride() {
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)
}

export function setupCSSAssets() {
  naiveStyleOverride()
}
