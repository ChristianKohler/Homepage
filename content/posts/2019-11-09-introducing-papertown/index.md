---
title: "Introducing Papertown"
author: Chris Kohler
date: "2019-11-09"
hero: "./images/hero.png"
cover_image: "https://thepracticaldev.s3.amazonaws.com/i/r6y5v0tlsem4m01ydg1z.png"
published: true
canonical_url: "https://christiankohler.net/introducing-papertown"
masterid: 20191109
excerpt: Dead simple blog syndication for everyone
---

[Papertown](https://github.com/ChristianKohler/papertown) syncs you personal markdown blog with blog platforms like dev.to. It's a command line tool and works perfectly in combination with static blog frameworks like [Gatsby](https://www.gatsbyjs.org/).

# The idea 💡

The core idea of [Papertown](https://github.com/ChristianKohler/papertown) is that it runs on overy commit and creates and updates blogpost on dev.to and other platforms.

```javascript
// Current setup
+-----------+       +-----------+        +-----------+
| Commit md |  ---> |  Gatsby   |  --->  |  Webhost  |
+-----------+       +-----------+        +-----------+
```

```javascript
// With Papertown

                    +-----------+        +-----------+
                  / |  Gatsby   |  --->  |  Webhost  |
+-----------+    /  +-----------+        +-----------+
| Commit md |
+-----------+    \  +-----------+        +-----------+
                  \ | Papertown |  --->  | devto etc |
                    +-----------+        +-----------+

```

# Why did I write it? 📝

I had two requirements for my personal blog:

✅ Blog content is owned and managed by me

✅ I want to syndicate my post on other platforms as easy as possible

# How to use it 🚀

The easiest way to get started is to just run it locally with npx within you blog root folder:

```
npx papertown sync --devtoApiKey apikey
```

> Don't worry, no blogpost are pushed to dev.to unless you add a masterid to a blogpost

## Masterid?

Papertown needs an Id to identify blogpost and update them. **Blogpost without a masterid are ignored**.

```
---
title: "Minimal Blogpost example frontmatter"
author: "Chris Kohler"
masterid: 20191109
published: false
canonical_url: "https://christiankohler.net/url-to-this-blogpost"
---
```

## Draft or published?

Add **published: false** if you don't want to publish the blogpost right now.

```
published: false
```

## Correct root folder

The default rootfolder is blog-articles. To change it just set the root folder:

```
papertown sync --rootFolder posts
```

# Alternatives to Papertown 🔭

There are two solutions I know of:

### RSS feed support by dev.to

[RSS feed support](https://dev.to/settings/publishing-from-rss) is not bad but is not as flexibel as I'd wish for updates and drafts.

### Use dev.to as a source together with Gastby

[Dev.to as a source](https://dev.to/devteam/you-can-now-generate-self-hostable-static-blogs-right-from-your-dev-content-via-stackbit-7a5) is not an option for me since I want to be the master of the blog articles.

# Source 👨‍💻

Source is MIT and on Github: https://github.com/ChristianKohler/papertown

# What's next? 👀

Over the next weeks I will focus on the dev.to integration and fixing bugs. The highest prioritiy currently is adding support for images. After that I will start to work on the medium integration. If you would like to help please open an issue or pr on Github. All contributions are appreciated.
