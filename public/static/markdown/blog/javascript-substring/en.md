---
title: Substring() In JavaScript - How To Extract Part Of A String?
openGraphImage: ./images/cover.png
date: 2021-11-29
description: A guide on how does the substring() function work in JavaScript? Definition. Substring vs slice vs substr.
author: Tim Mouskhelichvili
tags: javascript
---

In JavaScript, to extract part of a string, you need to use the `substring()` function, or one of its alternatives.

You may know the `substring()` function, but do you know everything about it? 

In this article, you will find all the information needed, from the definition to the difference between `substring()`, `slice()`, and `substr()`.

Also, I will provide valuable examples for some of the most common use cases that you may encounter while developing your next hit application.

![JavaScript Substring](./images/cover.png)

<Summary />

## Definition

The `substring()` function is used to extract a substring between the start and the end positions.

Here is the `substring()` function syntax.
```javascript
str.substring(start[, end]);
```

There are 3 different ways to call the `substring()` function:

#### 1. When you specify both the start and end parameters.

```javascript
const str = "This is a very long string!";

// This will return => "This i"
console.log(str.substring(0, 6));
```

It will return a new substring, in this case: "This i".

#### 2. When you specify the start but omit the end parameter.

```javascript
const str = "This is a very long string!";

// This will return => "s a very long string!"
console.log(str.substring(6));
```

It will return a new substring from index 6, in this case: "s a very long string!".

#### 3. When you specify a negative start position.

```javascript
const str = "This is a very long string!";

// This will return => "This i"
console.log(str.substring(-2, 6));
```

This will give the same result as when the start parameter is ZERO.

> If the start or the end parameter is negative, it will be treated as ZERO.

![JavaScript Substring](./images/1.jpeg)

### 1. Parameters

| Parameters | Necessity | Description |
| --- | ---- | ----------- |
| start | Required | The start position. |
| end | Optional | The end position. |


> 1. The start index is 0.
> 2. If no end parameter is provided => the end parameter will default to the rest of the string.
> 3. If the start parameter is greater than the end parameter, the function will swap both arguments.
> 4. If any argument is negative or is `NaN`, it will be treated as ZERO.

### 2. Return Value

The substring method will return a new `string` containing part of the given string.

## Browser Support

The `substring()` function works on [all browsers](https://caniuse.com/?search=substring). 🥳

| Browser | Support |
| ------- | ------- |
| Chrome | YES ✅ |
| Firefox | YES ✅ |
| Opera | YES ✅ |
| Safari | YES ✅ |
| Edge | YES ✅ |
| Internet Explorer | YES ✅ |

## Examples

Here, I've compiled a list of some common use cases for the `substring()` method.

## 1. How to get a substring before a specified character?

You can get a substring before a specified character using the `substring()` and `indexOf()` functions.

```javascript
const str = "This is a, very long string!";

// This will return => "This is a"
console.log(str.substring(0, str.indexOf(',')));
```

In this case, it will return: "This is a".

## 2. How to get a substring between two characters?

You can get a substring between two characters by using the `substring()`, `indexOf()` and `lastIndexOf()` functions.

```javascript
const str = "This is a, very long string!";

// This will return => " very long string"
console.log(str.substring(
	str.indexOf(",") + 1, 
	str.lastIndexOf("!")
));
```

In this case, it will return: " very long string".

![JavaScript Substring](./images/2.jpg)

## 3. How to get the first character?

You can get the first character of a string by using the `substring()` function with 0 as the start position and 1 as the end position.

```javascript
const str = "This is a, very long string!";

// This will return => "T"
console.log(str.substring(0, 1));
```

In this case, it will return: "T".

## 4. How to get the last character of a string?

You can get the last character of a string by using the `substring()` function with the length of the string minus 1 as the start position.

```javascript
const str = "This is a, very long string!";

// This will return => "!"
console.log(str.substring(str.length - 1));
```

In this case, it will return: "!".

## The difference between `substring()` and `substr()`

Those two methods are nearly identical (even their names are very similar), so a lot of people (including me), get confused between them.

The biggest differences between those functions are:

#### 1. The second parameter

For the `substring()` method the parameters are: *start position* AND *end position*.

For the `substr()` method the parameters are: *start position* AND *length*.

```javascript
const str = "This is a, very long string!";

// This will return => "is"
console.log(str.substring(2, 4));
// This will return => "is i"
console.log(str.substr(2, 4));
```

#### 2. Negative values

Another difference to know is when the first argument is negative, `substr()` will read from the end of the string. The `substring()` function will treat the negative value as ZERO.

```javascript
const str = "This is a, very long string!";

// This will return => "This"
console.log(str.substring(-2, 4));
// This will return => "g!"
console.log(str.substr(-2, 4));
```

> The `substr()` function [is considered deprecated](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr), so if you see it in your code replace it.

![JavaScript Substring](./images/3.jpeg)

## The difference between `substring()` and `slice()`

The biggest differences between those functions are:

#### 1. Negative Values

The `slice()` function will read from the end of the string when the first parameter is negative.

The `substring()` function will transform the negative value into a ZERO.

```javascript
const str = "This is a, very long string!";

// This will return => "This"
console.log(str.substring(-2, 4));
// This will return => "g!"
console.log(str.slice(-2));
```

#### 2. Parameter Consistency

When the first parameter is greater than the second parameter, the `slice()` function will return an empty string.

When the first parameter is greater than the second parameter, the `substring()` function will swap those two parameters.

```javascript
const str = "This is a, very long string!";

// This will return => "This i"
console.log(str.substring(6, 0));
// This will return => ""
console.log(str.slice(6, 0));
```

## `substring()` vs `substr()` vs `slice()`

Here is a table with all the differences.

| | `substring()` | `substr()` | `slice()` |
| ------- | ------- | ------- | ------- |
| Parameters | StartPosition, EndPosition | StartPosition, Length | StartPosition, EndPosition |
| Negative Values | Transforms to ZERO | Reads from the end | Reads from the end |
| 1st parameter greater than 2nd | Will swap parameters | Will return an empty string | Will return an empty string |
| Deprecated | NO | YES | NO |

Do not forget that the `substr()` function is *deprecated*.

![JavaScript Substr](./images/4.jpg)

## Final Thoughts

The `substring()` and `slice()` functions offer the developer two different methods of getting part of a string, and now you know which to use and when.

As for `substr()`, it's deprecated don't use it.