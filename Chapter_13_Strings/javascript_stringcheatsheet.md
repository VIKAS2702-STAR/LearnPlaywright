# JavaScript String Methods Cheat Sheet

All 40+ string methods with one-liner examples.

---

## Table of Contents

1. [Properties & Length](#properties--length)
2. [Search & Check Methods](#search--check-methods)
3. [Extract & Slice Methods](#extract--slice-methods)
4. [Transform & Modify Methods](#transform--modify-methods)
5. [Conversion & Format Methods](#conversion--format-methods)
6. [Static Methods (String.*)](#static-methods-string)
7. [Quick Tips](#quick-tips)

---

## Properties & Length

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `length` | `"Hello".length` | `5` | Returns the number of characters in the string |
| `constructor` | `"Hello".constructor` | `String` | Returns the function that created the string |
| `prototype` | `String.prototype` | `object` | Allows adding properties to string objects |

---

## Search & Check Methods

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `indexOf()` | `"Hello World".indexOf("o")` | `4` | First occurrence index of substring (`-1` if not found) |
| `lastIndexOf()` | `"Hello World".lastIndexOf("o")` | `7` | Last occurrence index of substring (`-1` if not found) |
| `search()` | `"Hello World".search(/o/)` | `4` | Search with regex, returns first match index |
| `match()` | `"Hello World".match(/o/g)` | `["o","o"]` | Returns array of all regex matches |
| `matchAll()` | `[..."Hello World".matchAll(/o/g)]` | `[iterator]` | Returns iterator of all regex match results |
| `includes()` | `"Hello World".includes("World")` | `true` | Checks if string contains substring |
| `startsWith()` | `"Hello World".startsWith("Hello")` | `true` | Checks if string starts with substring |
| `endsWith()` | `"Hello World".endsWith("World")` | `true` | Checks if string ends with substring |
| `localeCompare()` | `"a".localeCompare("b")` | `-1` | Compares two strings in locale |

---

## Extract & Slice Methods

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `slice()` | `"Hello World".slice(0, 5)` | `"Hello"` | Extracts section from start to end (not inclusive) |
| `substring()` | `"Hello World".substring(0, 5)` | `"Hello"` | Extracts between two indices (swaps if start > end) |
| `substr()` | `"Hello World".substr(6, 5)` | `"World"` | Extracts length characters from start (deprecated) |
| `charAt()` | `"Hello".charAt(1)` | `"e"` | Returns character at specified index |
| `charCodeAt()` | `"Hello".charCodeAt(0)` | `72` | Returns Unicode of character at index |
| `codePointAt()` | `"Hello".codePointAt(0)` | `72` | Returns full Unicode code point at index |
| `at()` | `"Hello".at(-1)` | `"o"` | Returns character at index (supports negative) |
| `split()` | `"Hello World".split(" ")` | `["Hello","World"]` | Splits string into array by separator |
| `concat()` | `"Hello".concat(" ", "World")` | `"Hello World"` | Joins two or more strings |

---

## Transform & Modify Methods

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `toUpperCase()` | `"hello".toUpperCase()` | `"HELLO"` | Converts string to uppercase |
| `toLowerCase()` | `"HELLO".toLowerCase()` | `"hello"` | Converts string to lowercase |
| `trim()` | `"  hello  ".trim()` | `"hello"` | Removes whitespace from both ends |
| `trimStart()` | `"  hello  ".trimStart()` | `"hello  "` | Removes whitespace from start only |
| `trimEnd()` | `"  hello  ".trimEnd()` | `"  hello"` | Removes whitespace from end only |
| `trimLeft()` | `"  hello  ".trimLeft()` | `"hello  "` | Alias of `trimStart()` |
| `trimRight()` | `"  hello  ".trimRight()` | `"  hello"` | Alias of `trimEnd()` |
| `padStart()` | `"5".padStart(3, "0")` | `"005"` | Pads string from start to given length |
| `padEnd()` | `"5".padEnd(3, "0")` | `"500"` | Pads string from end to given length |
| `repeat()` | `"Hi".repeat(3)` | `"HiHiHi"` | Repeats string specified number of times |
| `replace()` | `"Hello World".replace("World", "JS")` | `"Hello JS"` | Replaces first match with new string |
| `replaceAll()` | `"Hello Hello".replaceAll("Hello", "Hi")` | `"Hi Hi"` | Replaces all matches with new string |
| `normalize()` | `"é".normalize("NFD")` | `"é"` | Returns Unicode Normalization Form |

---

## Conversion & Format Methods

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `toString()` | `"hello".toString()` | `"hello"` | Returns the string value |
| `valueOf()` | `"hello".valueOf()` | `"hello"` | Returns primitive value of string |
| `toLocaleUpperCase()` | `"i".toLocaleUpperCase("tr")` | `"İ"` | Locale-aware uppercase conversion |
| `toLocaleLowerCase()` | `"İ".toLocaleLowerCase("tr")` | `"i"` | Locale-aware lowercase conversion |
| `[Symbol.iterator]` | `[..."Hello"]` | `["H","e","l","l","o"]` | Makes string iterable (spreadable) |

---

## Static Methods (String.*)

| Method | Example | Result | Description |
|--------|---------|--------|-------------|
| `String.fromCharCode()` | `String.fromCharCode(72, 105)` | `"Hi"` | Creates string from Unicode values |
| `String.fromCodePoint()` | `String.fromCodePoint(72, 105)` | `"Hi"` | Creates string from code points (handles emojis) |
| `String.raw()` | ``String.raw`\n` `` | `"\\n"` | Raw template string (no escaping) |
| `String.fromCharCode()` - Multiple | `String.fromCharCode(0x1F600)` | `"😀"` (with surrogate) | Creates emoji via surrogate pairs |

---

## Quick Tips

- `slice()` vs `substring()`: `slice` accepts negatives, `substring` doesn't.
- `substr()` is deprecated — use `substring()` or `slice()` instead.
- `replace()` only replaces the first match (use `replaceAll()` or regex with `/g`).
- `match()` returns an array for `/g`, or a match object without `/g`.
- `search()` always returns an index, unlike `match()`.
- `indexOf()` and `includes()` are case-sensitive.
- `localeCompare()` is best for sorting strings alphabetically.
- Strings are immutable — all methods return new strings, they do not modify the original.
- `at()` is the modern way to get characters (supports negative indexing, unlike `charAt`).
- `String.raw` is great for file paths: ``String.raw`C:\Users\name` ``.

---

*Happy Coding! 🚀*
