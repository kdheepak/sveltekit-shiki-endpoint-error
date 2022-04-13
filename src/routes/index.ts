import * as shiki from 'shiki'
import { base } from '$app/paths'

export async function get() {
  shiki.setCDN(`${base}/shiki/`)
  const highlighter = await shiki.getHighlighter({ theme: 'github-dark' })
  return {
    body: { data: highlighter.codeToHtml(`console.log('shiki');`, { lang: 'js' }) },
  }
}
