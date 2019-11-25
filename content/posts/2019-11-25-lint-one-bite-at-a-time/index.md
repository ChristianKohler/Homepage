---
title: "One bite at a time - How to introduce new lint rules in a large codebase"
author: Chris Kohler
date: "2019-11-25"
hero: "./images/hero.jpg"
cover_image: "./images/hero.jpg"
published: false
secret: true
canonical_url: "https://christiankohler.net/one-bite-at-a-time-how-to-introduce-new-lint-rules-in-a-large-codebase"
masterid: 20191125
excerpt: How to improve legacy code by gradually introducing linting rules.
description: How to improve legacy code by gradually introducing linting rules.
tags: javascript, webdev, lint,
---

Linters like ESLint or TSLint can help make your code more readable and maintainable and help you to identify errors earlier. It's a good thing to use linters from the start of a project but it's also a good idea to introduce linters in an existing codebases.

This article focuses on introducing linters in existing codebases.

# tl;dr;

- Use autofix if possible
- Extend lint config with a second config
- Add new rules to the second config
- Run linter with the second config with a precommit hook

# The problem

Let's say the codebase is 1000 files large. You create a linter config, run the linter and you get like **1000000 errors**. 🤯😱

Now what can you do?

**Autofix**

A lot of linting rule can be autofixed. For example the tslint rule

```
"no-var-keyword": true
```

can be autofixed. The autofixer replaces the _var_ keyword with a _let_ keyword.

Tip: All autofixable keywords in the [list](https://palantir.github.io/tslint/rules/) have the "Has Fixer" tag.

**Manually fix**

If you can't auto fix it, you have to manually fix it. That can be a "herculean task". So what often happens is that a rule is just not used because it's to much work to fix all the existing errors.

# The solution: The Boy Scout Rule

> Leave your code better than you found it. ...

The boy scout approach to apply new rules is:

- Fix existing errors when you touch existing code
- Don't add new errors

## Different Rules for CI/CD and changed files

We need two sets of rules. The main one and one which extends it and adds new rules.

| Name                 | Usage          | Rules                                        |
| -------------------- | -------------- | -------------------------------------------- |
| tslint.json          | CI/CD          | Rules which apply for all files              |
| tslint.newrules.json | precommit hook | New rules which only apply for changed files |

**Example tslint.json**

Used by the CI/CD pipeline.

```json
{
  "defaultSeverity": "error",
  "rules": {
    "no-empty": true
  }
}
```

**Example tslint.newrules.json**

Used during the precommit hook.

```json
{
  "defaultSeverity": "error",
  "extends": ["./tslint.json"],
  "rules": {
    "no-any": true
  }
}
```

Important: The tslint.newrules.json extends the main ruleset.

```json
{
  "extends": ["./tslint.json"]
}
```

## Enforce tslint.newrules.json with a precommit hook

This part is very easy nowadays thanks to the amazing libraries [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky).

So just install lint-staged and then configure the precommit hook to run tslint or eslint with the the correct configuration.

```
npm install --save-dev lint-staged@beta
```

```json
{
  "lint-staged": {
    "**/*.{ts}": ["tslint --project tsconfig.json -c tslint.newrules.json"]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

# Summary

It's very easy and very little work to set up a "newrule" config and enforce the config with a precommit hook. Now your codebase should become better every day as people are working on it. Without the upfront costs you'd have with fixing all errors in one commit. That's how you eat an elephant\*. One bite at a time.

> “How do you eat an elephant? One bite at a time.”

\* I am strongly against eating elephants. It's a saying. Google it 😉

Hero photo by @keilahoetzel
