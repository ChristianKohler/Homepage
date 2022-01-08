import { expect, test } from "vitest";
import { createSlug } from "./create-slug";

test("Correct Slug for Introducing Papertown", () => {
  const title = "Introducing Papertown";
  const slug = "introducing-papertown";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for One bite at a time - How to introduce new lint rules in a large codebase", () => {
  const title =
    "One bite at a time - How to introduce new lint rules in a large codebase";
  const slug =
    "one-bite-at-a-time-how-to-introduce-new-lint-rules-in-a-large-codebase";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for Improved Dependency Injection with the new providedIn scopes 'any' and 'platform'", () => {
  const title =
    "Improved Dependency Injection with the new providedIn scopes 'any' and 'platform'";
  const slug =
    "improved-dependency-injection-with-the-new-providedin-scopes-any-and-platform";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for Angular Dependency Injection Infographic", () => {
  const title = "Angular Dependency Injection Infographic";
  const slug = "angular-dependency-injection-infographic";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for How to use ResizeObserver with Angular", () => {
  const title = "How to use ResizeObserver with Angular";
  const slug = "how-to-use-resizeobserver-with-angular";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for Reactive Angular with ngrx/component", () => {
  const title = "Reactive Angular with ngrx/component";
  const slug = "reactive-angular-with-ngrx-component";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for Lessons learned from building a Grid List in React Native", () => {
  const title = "Lessons learned from building a Grid List in React Native";
  const slug = "lessons-learned-from-building-a-grid-list-in-react-native";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for It’s a trap - The biggest pitfall of String.prototype.replace()", () => {
  const title =
    "It’s a trap - The biggest pitfall of String.prototype.replace()";
  const slug = "it-s-a-trap-the-biggest-pitfall-of-string-prototype-replace";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for How to avoid Prop-drilling in Angular", () => {
  const title = "How to avoid Prop-drilling in Angular";
  const slug = "how-to-avoid-prop-drilling-in-angular";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for Bundling Angular Modules", () => {
  const title = "Bundling Angular Modules";
  const slug = "bundling-angular-modules";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for Angular Change Detection Infographic", () => {
  const title = "Angular Change Detection Infographic";
  const slug = "angular-change-detection-infographic";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for Angular Modules Best Practices 2021", () => {
  const title = "Angular Modules Best Practices 2021";
  const slug = "angular-modules-best-practices-2021";
  expect(createSlug(title)).toBe(slug);
});

test("Correct Slug for Angular View Engine was removed - What you need to know", () => {
  const title = "Angular View Engine was removed - What you need to know";
  const slug = "angular-view-engine-was-removed-what-you-need-to-know";
  expect(createSlug(title)).toBe(slug);
});
