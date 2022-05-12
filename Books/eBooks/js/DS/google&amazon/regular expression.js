-Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are 
also objects. These patterns are used with the exec and test methods of RegExp, and with the match, replace, search, and
split methods of String. This chapter describes JavaScript regular expressions.

-Creating a regular expression
  Using a regular expression literal, which consists of a pattern enclosed between slashes
   var re = /ab+c/;

Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular 
expression remains constant, using this can improve performance.

Or calling the constructor function of the RegExp object
 var re = new RegExp('ab+c');

Using the constructor function provides runtime compilation of the regular expression. Use the constructor function when
 you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another
 source, such as user input.

-Writing a regular expression pattern
  A regular expression pattern is composed of simple characters, such as /abc/, or a combination of simple and special
  characters, such as /ab*c/ or /Chapter (\d+)\.\d*/. 

-Using simple patterns
  example, the pattern /abc/ matches character combinations in strings only when exactly the characters 'abc' occur
  together and in that order. Such a match would succeed in the strings "Hi, do you know your abc's?" and The latest
  airplane designs evolved from slabcraft.In both cases the match is with the substring 'abc'. There is no match in 
  the string 'Grab crab' because while it contains the substring 'ab c', it does not contain the exact substring 'abc'.

-Using special characters
 When the search for a match requires something more than a direct match, such as finding one or more b's, or finding
 white space, the pattern includes special characters. For example, the pattern /ab*c/ matches any character combination
 in which a single 'a' is followed by zero or more 'b's (* means 0 or more occurrences of the preceding item) and then
 immediately followed by 'c'. In the string "cbbabbbbcdebc," the pattern matches the substring 'abbbbc'.

-\
 A backslash that precedes a special character indicates that the next character is not special and should be interpreted
 literally. For example, the pattern /a*/ relies on the special character '*' to match 0 or more a's. By contrast, the 
 pattern /a\*/ removes the specialness of the '*' to enable matches with strings like 'a*'.

-^
 /^A/ does not match the 'A' in "an A", but does match the 'A' in "An E".
 The '^' has a different meaning when it appears as the first character in a character set pattern.

-$
 Matches end of input. If the multiline flag is set to true, also matches immediately before a line break character.
For example, /t$/ does not match the 't' in "eater", but does match it in "eat".

-*
 Matches the preceding expression 0 or more times. Equivalent to {0,}.
For example, /bo*/ matches 'boooo' in "A ghost booooed" and 'b' in "A bird warbled" but nothing in "A goat grunted".

-+
 Matches the preceding expression 1 or more times. Equivalent to {1,}.
For example, /a+/ matches the 'a' in "candy" and all the a's in "caaaaaaandy", but nothing in "cndy".

-?
 If used immediately after any of the quantifiers *, +, ?, or {}, makes the quantifier non-greedy 
 (matching the fewest possible characters), as opposed to the default, which is greedy (matching as many characters as 
 possible). For example, applying /\d+/ to "123abc" matches "123". But applying /\d+?/ to that same string matches only 
 the "1".

Also used in lookahead assertions, as described in the x(?=y) and x(?!y) entries of this table.

-.
 (The decimal point) matches any single character except the newline character.
For example, /.n/ matches 'an' and 'on' in "nay, an apple is on the tree", but not 'nay'.

-(x)
 Matches 'x' and remembers the match, as the following example shows. The parentheses are called capturing parentheses.

-(?:x)
 Matches 'x' but does not remember the match. The parentheses are called non-capturing parentheses, and let you define
 subexpressions for regular expression operators to work with. Consider the sample expression /(?:foo){1,2}/. If the 
 expression was /foo{1,2}/, the {1,2} characters would apply only to the last 'o' in 'foo'. With the non-capturing 
 parentheses, the {1,2} applies to the entire word 'foo'.

-x(?=y)
 Matches 'x' only if 'x' is followed by 'y'. This is called a lookahead.

-x(?!y)
 Matches 'x' only if 'x' is not followed by 'y'. This is called a negated lookahead.

-x|y
 Matches 'x', or 'y' (if there is no match for 'x').

-{n}
 Matches exactly n occurrences of the preceding expression. N must be a positive integer.

-{n,}
 Matches at least n occurrences of the preceding expression. N must be a positive integer.

-{n,m}
 Where n and m are positive integers and n <= m. Matches at least n and at most m occurrences of the preceding 
 expression. When m is omitted, it's treated as ∞.

-[xyz]
 Character set. This pattern type matches any one of the characters in the brackets, including escape sequences. Special
 characters like the dot(.) and asterisk (*) are not special inside a character set, so they don't need to be escaped. 
 You can specify a range of characters by using a hyphen, as the following examples illustrate.

The pattern [a-d], which performs the same match as [abcd], matches the 'b' in "brisket" and the 'c' in "city". The
patterns /[a-z.]+/ and /[\w.]+/ match the entire string "test.i.ng".

-[^xyz]
 A negated or complemented character set. That is, it matches anything that is not enclosed in the brackets. You can 
 specify a range of characters by using a hyphen. Everything that works in the normal character set also works here.

-[\b]
 Matches a backspace (U+0008). You need to use square brackets if you want to match a literal backspace character. 
 (Not to be confused with \b.)

 Matches a word boundary. A word boundary matches the position where a word character is not followed or preceded by
 another word-character. Note that a matched word boundary is not included in the match. In other words, the length of 
 a matched word boundary is zero. (Not to be confused with [\b].)

 -\0
  Matches a NULL (U+0000) character. Do not follow this with another digit, because \0<digits> is an octal escape
  sequence. Instead use \x00.

-\xhh	Matches the character with the code hh (two hexadecimal digits)

-\uhhhh	Matches the character with the code hhhh (four hexadecimal digits).

-\u{hhhh}	(only when u flag is set) Matches the character with the Unicode value hhhh (hexadecimal digits).