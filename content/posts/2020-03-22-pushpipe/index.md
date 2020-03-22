---
title: "Reactive Angular with ngrx/component"
author: Chris Kohler
date: "2020-03-22"
hero: "./images/hero.jpg"
cover_image: "./images/hero.jpg"
published: false
secret: true
canonical_url: "https://christiankohler.net/reactive-angular-with-ngrx-component"
masterid: 20200322
excerpt: One step closer to zone-less Angular
description: One step closer to zone-less Angular
tags: angular, rxjs, ngrx
---

# tl;dr

Angular change detection relies on Zone.js which works well in most situations but is hard to debug and might lead to performance problems.

With the rise of reactive programming in Angular we might not need Zone.js at all and instead trigger change detection whenever the view state changes.

The ngrx team is working on a library named ngrx/component to make it easier to trigger change detection with observables.

In this article we look at how this new library helps us write maintainable code without Zone.js

# Toc

1. 🤔 What's wrong with Zone.js?
2. 🔦 When should we run change detection?
3. 🚲 Zone less approach in Angular
4. 💡 The reactive zone-less approach
5. 🚧 Async Pipe
6. 🚀 ngrx PushPipe and let directive
7. ❓ Should I now rewrite my code to zone-less?
8. 👩‍🚀 Be ready for a zone-less future
9. 📚 Resources

# 🤔 What's wrong with Zone.js?

Most Angular developers learn about Zone.js when they run into change detection issues. Zone.js doesn't do change detection but triggers it after async operations were completed. One good example is a `setTimeout()` callback after which Zone.js triggers change detection.

> In general Zone.js just works and helps Angular developers write less code.

But every design decision has its pros and cons.

## The problems withs Zone.js are

- it's hard to debug
- it might lead to performance issues
- no async await support

# 🔦 When should we run change detection?

With Zone.js Angular change detection magically works for almost any scenario. To make it work, it assumes that whenever you have an event like a click event, the state changed and the view has to be rerendered.

Let's take that simple example:

```typescript
@Component({
  template: `
    <div>Count is {{ count }}</div>
    <button (click)="increment()">Increment</button>
    <button (click)="noEffect()">Dummy Button</button>
  `
})
export class AppComponent {
  count = 0;

  // triggers change detection
  increment() {
    this.count = this.count + 1;
  }

  // also triggers change detection
  noEffect() {}
}
```

In this example Angular needs to trigger change detection after the `increment` method because we want to update our view. But we don't need to trigger change detection after we call the `noEffect` method

> Ideally we only trigger change detection when the view state changes

## The React way

In React you change the state explicitly which then triggers a rerender.

```jsx
function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

This approach is very clear and is much easier to understand and to debug.

# 🚲 Zone less approach in Angular

So let's get rid of Zone.js and let's try to make change detection more predictable and easier to debug.

We can easily disable Zone.js in Angular by setting ngZone to "noop":

```typescript
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZone: "noop"
});
```

Since change detection is not triggered anymore by Zone.js we need to trigger it manually:

```typescript
export class AppComponent {
  count = 0;

  constructor(private cdRef: ChangeDetectorRef) {}

  increment() {
    this.count = this.count + 1;
    this.cdRef.detectChanges();
  }

  noEffect() {}
}
```

This approach works but involves a lot of manual work and pollutes our code with change detection logic. Also due to the imperative nature of that code it can become very difficult to understand what triggered change detection the more complex the code gets.

# 💡 The reactive zone-less approach

The main idea behind the zone-less reactive approach is:

> When every view state is an observable, we know exactly when to trigger change detection.

Notice how this is a very similar to reacts approach?

# 🚧 Async Pipe

With Zone.js deactivated the first idea for a reactive approach would be to use Angulars Async pipe to trigger change detection when a new value is emitted.

```typescript
@Component({
  template: `
    <div>Count is {{ count$ | async }}</div>
    <button (click)="increment()">Increment</button>
    <button (click)="noEffect()">Dummy Button</button>
  `
})
export class AppComponent {
  increment$ = new Subject();

  count$ = this.increment$.pipe(
    scan(count => count + 1, 0),
    startWith(0)
  );

  increment() {
    this.increment$.next();
  }
}
```

Unfortunately that _doesn't trigger the change detection_ since the Async pipe only runs markForChecked on the components ChangeDetectorRef.

So we need a Async pipe which can trigger change detection. Luckily the ngrx team is [working](https://github.com/ngrx/platform/pull/2046) on exactly that.

# 🚀 ngrx PushPipe and let directive

The ngrx team is working on a new library name ngrx/component. It's not released yet but we can already try it out. It's a collection of tools to make it easier to write reactive angular components. Currently it consists of two features:

- PushPipe, a drop in replacement for the async pipe
- Let directive, a alternative to ngIf

## PushPipe

The PushPipe is a drop-in replacement for the async pipe.

_It triggers change detection_ in a zone-less context or triggers markForCheck like the async pipe in a zone context.

### Usage

Replace the async pipe:

```html
{{ count$ | async }}
```

with the ngrx push pipe:

```html
{{ count$ | ngrxPush }}
```

### Example

[Here is a Stackblitz example](https://stackblitz.com/edit/blog-pushpipe-example?file=src/app/app.module.ts) with the counter and the PushPipe. Try it out and replace the ngrxPush with async to see how it affects change detection. Also check the [PushPipe documentation](https://github.com/ngrx/platform/blob/680f77fbe38c8086f9684f9033d7722b14a78025/projects/ngrx.io/content/guide/component/push.md) for more examples.

## Let Directive

Another great addition to make it easier to build reactive Angular components is the let-directive.

The let directive is very similar to \*ngIf but handles 0 values and supports zone-less the same way the PushPipe does. That means it also triggers change detection when a new value is emitted.

### Usage

Replace the \*ngIf:

```html
<div *ngIf="count$ | async as count">Count is {{ count }}</div>
```

width \*ngrxLet:

```html
<div *ngrxLet="count$ as count">Count is {{ count }}</div>
```

### Example

[Here is a Stackblitz example](https://stackblitz.com/edit/blog-pushpipe-example?file=src/app/app.module.ts) with the counter and the let directive. Try it out and replace the ngrxLet with tgif to see how it affects change detection. Also check the [Let directive documentation](https://github.com/ngrx/platform/blob/680f77fbe38c8086f9684f9033d7722b14a78025/projects/ngrx.io/content/guide/component/let.md) for more examples.

# ❓ Should I now rewrite my code to zone-less?

Short answer: **No**

- ✅ For most use cases Zone.js works very well
- 🧨 PushPipe and the let directive are not released yet (as of 23 March 2020)
- 🧨 Many 3rd party lib rely on Zone.js

One area where I see a lot of benefits though are Angular Elements. It would simplify the usage of Angular Elements and reduce the bundle size.

# 👩‍🚀 Be ready for a zone-less future

It's getting easier to write zone-less Angular code and might be the way how we write Angular apps in a year or two.

If you are a 3rd party library make sure your library works in a zone-less environment.

If you are a developer, embrace RxJs and write your code in a reactive way. It will make it easier for you to use new features like the PushPipe.

If you liked the article 🙌, spread the word and [follow me on twitter](https://twitter.com/KohlerChristian) for more posts on Angular and web technologies.

# 📚 Resources

- [Design Doc - Coalescing of Change Detection - HackMD](https://hackmd.io/42oAMrzYReizA65AwQ7ZlQ)
- [Design Doc - Push Pipe - HackMD](https://hackmd.io/Uus0vFu3RmWRVGgmtzuUWQ?view)
- [Design Doc - Let Directive - HackMD](https://hackmd.io/8_3rp0A7RweSYJiulsifbQ?view)
- [Ngrx component setup by BioPhoton](https://github.com/ngrx/platform/pull/2046)
- [GitHub - ngrx/component-builds: @ngrx/component nightly builds](https://github.com/ngrx/component-builds)
- [platform/let.md](https://github.com/ngrx/platform/blob/680f77fbe38c8086f9684f9033d7722b14a78025/projects/ngrx.io/content/guide/component/let.md)
- [platform/push.md](https://github.com/ngrx/platform/blob/680f77fbe38c8086f9684f9033d7722b14a78025/projects/ngrx.io/content/guide/component/push.md)
