import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b30ef4d59c044d61be6d95f763aea959',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Shingeki no Craft Official Site & Wiki',
  domain: 'sncraft.online',
  author: 'Fanfo, Nijama & Zabat',

  // open graph metadata (optional)
  description: 'Shingeki no Craft Official Site.',

  // social usernames (optional)
  twitter: 'nijamaDev',
  github: 'nijamaDev',
  linkedin: 'nijamaDev',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  newsletter: '#', // optional newsletter URL
  youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Download',
      url: 'https://www.planetminecraft.com/data-pack/attack-on-titan-datapack-1-16-download'
    },
    {
      title: 'Get Started',
      pageId: '48d717b38f314885b6ed2b38a9582935'
    },
    {
      title: 'Wiki',
      pageId: '1b9effc9c7c841e5870f69e5c78b84e9'
    },
    {
      title: 'FAQ',
      pageId: '787b355a9dbd4bd2a3e3caa05d309999'
    },
    {
      title: 'Discord',
      url: 'https://discord.gg/zf6g5KQ6H4'
    },
    {
      title: 'About us',
      pageId: '50a460095a4e47d68d0b3226aee2cea1'
    },
    {
      title: 'Support us',
      url: 'https://www.patreon.com/Fanfo'
    }
  ]
})
