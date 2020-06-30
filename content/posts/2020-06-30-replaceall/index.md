---
title: "It’s a trap - The biggest pitfall of String.prototype.replace()"
author: Chris Kohler
date: "2020-06-30"
hero: "./images/hero.jpg"
cover_image: "./images/hero.jpg"
published: true
secret: false
canonical_url: "https://christiankohler.net/it-s-a-trap-the-biggest-pitfall-of-string-prototype-replace"
masterid: 20200630
excerpt: How to avoid the biggest pitfall of the replace function
description: How to avoid the biggest pitfall of the replace function
tags: javascript, webdev, typescript
---

Replacing a substring is a very common task. It should also be a very simple one but actually it isn’t.

In this short post I will show you the biggest pitfall, how to avoid it and how a new JavaScript feature is going to improve the situation.

## tl;dr

`String.prototype.replace` only replaces the first occurrence when used with a string as pattern argument. A global regex can be used to replace all occurrences instead.

`String.prototype.replaceAll` will fix that and also replace all occurrences with a string pattern.

## What we want to achieve

We want to replace 🌧 with 🌈 in this weather forecast which is basically a string.

```javascript
// Input:  "Mon: 🌧, Tue: 🌧, Wed 🌧"
// Result: "Mon: 🌈, Tue: 🌈, Wed 🌈"
```

## Naive approach (the pitfall 🚨)

The first approach most (newbie) developers would use is `String.prototype.replace` with a substring argument.

replace takes two arguments. The first argument can be either a substring or a regex pattern, the second argument is the replacement substring.

```javascript
"Mon: 🌧, Tue: 🌧, Wed 🌧".replace("🌧", "🌈");
```

The result would look like this. Only the first occurrence would be replaced.

```javascript
// Result: "Mon: 🌈, Tue: 🌧, Wed 🌧"
```

`String.prototype.replace` only replaces the first occurrence when used with a substring argument.

> The pitfall is that you might test your code for a single replacement but it then fails when the string has more then one occurrence.

I said that would be the approach taken by newbies but honestly I still find myself walking in this trap from time to time.

Now let’s have a look how you can replace all occurrences in a string.

## Working approach (with regex)

When using a global regex pattern instead of a simple substring for the first argument the `String.prototype.replace` function replaces all occurrences.

```javascript
// Input:  "Mon: 🌧, Tue: 🌧, Wed 🌧"
// Result: "Mon: 🌈, Tue: 🌈, Wed 🌈"
"Mon: 🌧, Tue: 🌧, Wed 🌧".replace(/🌧/g, "🌈");
```

This approach works, is supported by all browsers and is fast. But it’s harder to read and you have to remember to use the regex pattern if you want to replace all occurrences.

## New approach (with replaceAll)

For many use cases a regex is not required and just makes the code a little bit harder to read. That’s were the new `String.prototype.replaceAll` comes in. ReplaceAll is a stage 4 proposal but is already supported by most modern browsers.

It allows you to replace all occurrences with the substring argument.

```javascript
// Input:  "Mon: 🌧, Tue: 🌧, Wed 🌧"
// Result: "Mon: 🌈, Tue: 🌈, Wed 🌈"
"Mon: 🌧, Tue: 🌧, Wed 🌧".replaceAll("🌧", "🌈");
```

## When to use which approach?

There are a few things to consider.

**Compatibility**. Check if your targets support `String.prototype.replaceAll` directly or if your toolchain (e.g. babel) polyfills it. You can check the status here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll

**Performance**. Both functions are very fast for short strings. If you don’t plan to parse a full book the difference is neglectable.

Here are the results of the benchmark in Safari. Those results differ depending on your browser and machine. They might also change with future browser versions.

```javascript
"...".replace(/🌧/g, "🌈"); // 130,000,000 ops/s
"...".replaceAll("🌧", "🌈"); //   6,300,000 ops/s
"...".replaceAll(/🌧/g, "🌈"); //   1,600,000 ops/s
```

I came up with two simple rules which makes it easier to decide what to use.

### Rule I

Always use replaceAll if your environment supports it. You can use it with the string pattern or the regex pattern and you avoid the pitfall of replacing only the first occurrence. This is imho how replace should work.

### Rule II

If you have to use replace, avoid the string pattern and always use the regex patten. You could even add a linting rule to avoid the pitfall.

## Summary

If you reached the end of the blogpost, congratulations on reading a full blogpost about a single JavaScript function 😉

I hope I could show you the problem with replace and how to avoid it.

If you liked the article 🙌, spread the word and [follow me on Twitter](https://twitter.com/KohlerChristian) for more posts on web technologies.

Did you find typos 🤓? Please help improve the blogpost and open an issue [here](https://github.com/ChristianKohler/homepage)

## Resources

[GitHub - tc39/proposal-string-replaceall: ECMAScript proposal: String.prototype.replaceAll](https://github.com/tc39/proposal-string-replaceall)
[String.prototype.replaceAll · V8](https://v8.dev/features/string-replaceall)
[core-js/esnext.string.replace-all.js at master · zloirock/core-js · GitHub](https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/esnext.string.replace-all.js)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
