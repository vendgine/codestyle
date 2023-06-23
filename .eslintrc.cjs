// Member delimiter style configuration:
const memberDelimiterStyle = [
  "error",
  {
    "multiline": {
      "delimiter": "none",
      "requireLast": true
    },
    "singleline": {
      "delimiter": "semi",
      "requireLast": false
    }
  }
]

// Naming convention: 
const namingConvention = [
  "error",
  {
    "selector": "default",
    "format": ["camelCase"],
    "leadingUnderscore": "forbid",
    "trailingUnderscore": "forbid"
  },
  {
    "selector": "variable",
    "format": ["camelCase", "UPPER_CASE"],
    "leadingUnderscore": "forbid",
    "trailingUnderscore": "forbid"
  },
  {
    "selector": "parameter",
    "format": ["camelCase", "PascalCase", "UPPER_CASE"],
    "leadingUnderscore": "forbid",
    "trailingUnderscore": "forbid"
  },
  {
  "selector": "classProperty",
  "format": ["camelCase", "PascalCase", "UPPER_CASE"],
  "leadingUnderscore": "forbid",
  "trailingUnderscore": "forbid"
},
{
  "selector": "objectLiteralProperty",
  "format": null
},
{
    "selector": "typeLike",
    "format": ["PascalCase"]
  },
  {
    "selector": "enumMember",
    "format": ["PascalCase"]
  }
]

// Type aliases configuration:
const noTypeAlias = [
  "error",
  {
    "allowAliases": "always",
    "allowCallbacks": "always",
    "allowConditionalTypes": "always",
    "allowConstructors": "always",
    "allowLiterals": "always",
    "allowMappedTypes": "always",
    "allowTupleTypes": "always",
    "allowGenerics": "always"
  }
]

// Order of imports:
const importSorting = [
  "error",
  {
    "groups": [["^\\u0000"], ["^[^.]"], ["^(?!@\/)"], ["^@\/"], ["^\\."]]
  }
]

module.exports = {
  "root": true,
  // Use TypeScript parser for vendgine package:
  "parser": "@typescript-eslint/parser",
  // Set up the environments:
  "env": {
    // Use browser, ECMAScript and mocha globals:
    "browser": true,
    "es2022": true,
    "mocha": true
  },
  // Set up typescript parser:
  "parserOptions": {
    // Use ES2022 syntax:
    "ecmaVersion": 2022,
    // Use tsconfig from root directory:
    "tsconfigRootDir": __dirname,
    "project": "./tsconfig.json",
    // Add extra file extensions for typescript parser:
    "extraFileExtensions": [".cjs", ".mjs"],
    // Set module source type:
    "sourceType": "module"
  },
  // Enable a list of plugins:
  "plugins": [
    // TypeScript parser for eslint:
    "@typescript-eslint",
    // Sort order of imports:
    "simple-import-sort",
    // Validate and fix imports:
    "import",
    // Validate jsdoc comments:
    "jsdoc"
  ],
  // Plugin's configuration options:
  "settings": {
      // Allow "cjs" and "mjs" as imports from modules:
      "import/extensions": [".cjs", ".mjs"],
      // Use "@/" as root directory name:
      "import/internal-regex": "^@\//",
  },
  // Empty "extends" and "rules" at root level:
  "extends": [],
  "rules": {},
  // Override configuration for different file types:
  "overrides": [
    {
      // Configure settings for "mts" files:
      "files": ["*.mts"],
      // Extend configuration for plugins:
      "extends": [
        // Use eslint/typescript-eslint recommendations:
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        // Configure import validator:
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
        // Use recommendations for jsdoc:
        "plugin:jsdoc/recommended"
      ],
      // Reconfigure a set of validation rules:
      "rules": {
        // Require that function overload signatures be consecutive
        "@typescript-eslint/adjacent-overload-signatures": "error",
        // Require consistently using either T[] or Array<T> for arrays
        "@typescript-eslint/array-type": ["error", {"default": "array-simple"}],
        // Disallow awaiting a value that is not a Thenable
        "@typescript-eslint/await-thenable": "error",
        // Disallow @ts-<directive> comments or require descriptions after directives
        "@typescript-eslint/ban-ts-comment": "error",
        // Disallow certain types
        "@typescript-eslint/ban-types": "error",
        // Enforce that literals on classes are exposed in a consistent style
        "@typescript-eslint/class-literal-property-style": "off",
        // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call
        "@typescript-eslint/consistent-generic-constructors": ["error", "type-annotation"],
        // Require or disallow the Record type
        "@typescript-eslint/consistent-indexed-object-style": ["error", "index-signature"],
        // Enforce consistent usage of type assertions
        "@typescript-eslint/consistent-type-assertions": ["error", {"assertionStyle": "as", "objectLiteralTypeAssertions": "allow-as-parameter"}],
        // Enforce type definitions to consistently use either interface or type
        "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
        // Enforce consistent usage of type exports
        "@typescript-eslint/consistent-type-exports": "error",
        // Enforce consistent usage of type imports
        "@typescript-eslint/consistent-type-imports": ["error", {"prefer": "type-imports", "disallowTypeAnnotations": true}],
        // Require explicit return types on functions and class methods
        "@typescript-eslint/explicit-function-return-type": "error",
        // Require explicit accessibility modifiers on class properties and methods
        "@typescript-eslint/explicit-member-accessibility": ["error", {"accessibility": "no-public"}],
        // Require explicit return and argument types on exported functions' and classes' public class methods
        "@typescript-eslint/explicit-module-boundary-types": "error",
        // Require a specific member delimiter style for interfaces and type literals
        "@typescript-eslint/member-delimiter-style": memberDelimiterStyle,
        // Require a consistent member declaration order
        "@typescript-eslint/member-ordering": "error",
        // Enforce using a particular method signature syntax
        "@typescript-eslint/method-signature-style": ["error", "method"],
        // Enforce naming conventions for everything across a codebase
        "@typescript-eslint/naming-convention": namingConvention,
        // Require .toString() to only be called on objects which provide useful information when stringified
        "@typescript-eslint/no-base-to-string": "error",
        // Disallow non-null assertion in locations that may be confusing
        "@typescript-eslint/no-confusing-non-null-assertion": "error",
        // Require expressions of type void to appear in statement position
        "@typescript-eslint/no-confusing-void-expression": "error",
        // Disallow duplicate enum member values
        "@typescript-eslint/no-duplicate-enum-values": "error",
        // Disallow using the delete operator on computed key expressions
        "@typescript-eslint/no-dynamic-delete": "error",
        // Disallow the declaration of empty interfaces
        "@typescript-eslint/no-empty-interface": "off",
        // Disallow the any type
        "@typescript-eslint/no-explicit-any": ["error", {"fixToUnknown": false, "ignoreRestArgs": true}],
        // Disallow extra non-null assertions
        "@typescript-eslint/no-extra-non-null-assertion": "error",
        // Disallow classes used as namespaces
        "@typescript-eslint/no-extraneous-class": ["error", {"allowEmpty": true}],
        // Require Promise-like statements to be handled appropriatel
        "@typescript-eslint/no-floating-promises": "error",
        // Disallow iterating over an array with a for-in loop
        "@typescript-eslint/no-for-in-array": "error",
        // Disallow usage of the implicit any type in catch clauses
        "@typescript-eslint/no-implicit-any-catch": "error",
        // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
        "@typescript-eslint/no-inferrable-types": "error",
        // Disallow void type outside of generic or return types
        "@typescript-eslint/no-invalid-void-type": "error",
        // Disallow the void operator except when used to discard a value
        "@typescript-eslint/no-meaningless-void-operator": "error",
        // Enforce valid definition of new and constructor
        "@typescript-eslint/no-misused-new": "error",
        // Disallow Promises in places not designed to handle them
        "@typescript-eslint/no-misused-promises": "error",
        // Disallow TypeScript namespaces
        "@typescript-eslint/no-namespace": "error",
        // Disallow non-null assertions in the left operand of a nullish coalescing operato
        "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
        // Disallow non-null assertions after an optional chain expressio
        "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
        // Disallow non-null assertions using the ! postfix operator
        "@typescript-eslint/no-non-null-assertion": "off",
        // Disallow the use of parameter properties in class constructors
        "@typescript-eslint/no-parameter-properties": "off",
        // Disallow members of unions and intersections that do nothing or override type information
        "@typescript-eslint/no-redundant-type-constituents": "off",
        // Disallow invocation of require()
        "@typescript-eslint/no-require-imports": "error",
        // Disallow aliasing this
        "@typescript-eslint/no-this-alias": "error",
        // Disallow type aliases
        "@typescript-eslint/no-type-alias": noTypeAlias,
        // Disallow unnecessary equality comparisons against boolean literals
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
        // Disallow conditionals where the type is always truthy or always falsy
        "@typescript-eslint/no-unnecessary-condition": "error",
        // Disallow unnecessary namespace qualifiers
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        // Disallow type arguments that are equal to the default
        "@typescript-eslint/no-unnecessary-type-arguments": "error",
        // Disallow type assertions that do not change the type of an expression
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        // Disallow unnecessary constraints on generic type
        "@typescript-eslint/no-unnecessary-type-constraint": "error",
        // Disallow calling a function with a value with type any
        "@typescript-eslint/no-unsafe-argument": "error",
        // Disallow assigning a value with type any to variables and properties
        "@typescript-eslint/no-unsafe-assignment": "error",
        // Disallow calling a value with type any
        "@typescript-eslint/no-unsafe-call": "error",
        // Disallow member access on a value with type any
        "@typescript-eslint/no-unsafe-member-access": "error",
        // Disallow returning a value with type any from a function
        "@typescript-eslint/no-unsafe-return": "error",
        // Disallow empty exports that don't change anything in a module file
        "@typescript-eslint/no-useless-empty-export": "error",
        // Disallow require statements except in import statements
        "@typescript-eslint/no-var-requires": "error",
        // Enforce non-null assertions over explicit type casts
        "@typescript-eslint/non-nullable-type-assertion-style": "error",
        // Require or disallow parameter properties in class constructors
        "@typescript-eslint/parameter-properties": ["error", {"allow": ["readonly"]}],
        // Enforce the use of as const over literal type
        "@typescript-eslint/prefer-as-const": "error",
        // Require each enum member value to be explicitly initialize
      "@typescript-eslint/prefer-enum-initializers": "off",
        // Enforce the use of for-of loop over the standard for loop where possible
        "@typescript-eslint/prefer-for-of": "error",
        // Enforce using function types instead of interfaces with call signatures
        "@typescript-eslint/prefer-function-type": "error",
        // Enforce includes method over indexOf method
        "@typescript-eslint/prefer-includes": "error",
        // Require all enum members to be literal values
        "@typescript-eslint/prefer-literal-enum-member": "error",
        // Require using namespace keyword over module keyword to declare custom TypeScript modules
        "@typescript-eslint/prefer-namespace-keyword": "error",
        // Enforce using the nullish coalescing operator instead of logical chainin
        "@typescript-eslint/prefer-nullish-coalescing": "error",
        // Enforce using concise optional chain expressions instead of chained logical and
        "@typescript-eslint/prefer-optional-chain": "error",
        // Require private members to be marked as readonly if they're never modified outside of the constructor
        "@typescript-eslint/prefer-readonly": "error",
        // Require function parameters to be typed as readonly to prevent accidental mutation of inputs
        "@typescript-eslint/prefer-readonly-parameter-types": "off",
        // Enforce using type parameter when calling Array#reduce instead of casting
        "@typescript-eslint/prefer-reduce-type-parameter": "error",
        // Enforce RegExp#exec over String#match if no global flag is provided
        "@typescript-eslint/prefer-regexp-exec": "error",
        // Enforce that this is used when only this type is returned
        "@typescript-eslint/prefer-return-this-type": "error",
        // Enforce using String#startsWith and String#endsWith over other equivalent methods of checking substrings
        "@typescript-eslint/prefer-string-starts-ends-with": "error",
        // Enforce using @ts-expect-error over @ts-ignore
        "@typescript-eslint/prefer-ts-expect-error": "error",
        // Require any function or method that returns a Promise to be marked async
        "@typescript-eslint/promise-function-async": "off",
        // Require Array#sort calls to always provide a compareFunction
        "@typescript-eslint/require-array-sort-compare": "error",
        // Require both operands of addition to be the same type and be bigint, number, or string
        "@typescript-eslint/restrict-plus-operands": "error",
        // Enforce template literal expressions to be of string type
        "@typescript-eslint/restrict-template-expressions": "error",
        // Enforce members of a type union/intersection to be sorted alphabetically
        "@typescript-eslint/sort-type-union-intersection-members": "error",
        // Disallow certain types in boolean expressions
        "@typescript-eslint/strict-boolean-expressions": "error",
        // Require switch-case statements to be exhaustive with union type
        "@typescript-eslint/switch-exhaustiveness-check": "error",
        // Disallow certain triple slash directives in favor of ES6-style import declarations
        "@typescript-eslint/triple-slash-reference": "error",
        // Require consistent spacing around type annotations
        "@typescript-eslint/type-annotation-spacing": "error",
        // Require type annotations in certain places
        "@typescript-eslint/typedef": "error",
        // Enforce unbound methods are called with their expected scope
        "@typescript-eslint/unbound-method": "error",
        // Disallow two overloads that could be unified into one with a union or an optional/rest parameter
        "@typescript-eslint/unified-signatures": "error",
        // Enforce consistent brace style for blocks
        "@typescript-eslint/brace-style": ["error", "stroustrup"],
        // Require or disallow trailing commas
        "@typescript-eslint/comma-dangle": ["error", "always-multiline"],
        // Enforce consistent spacing before and after commas
        "@typescript-eslint/comma-spacing": "error",
        // Enforce default parameters to be last
        "@typescript-eslint/default-param-last": "error",
        // Enforce dot notation whenever possible
        "@typescript-eslint/dot-notation": "error",
        // Require or disallow spacing between function identifiers and their invocations
        "@typescript-eslint/func-call-spacing": "error",
        // Enforce consistent indentation
        "@typescript-eslint/indent": ["error", 4],
        // Require or disallow initialization in variable declarations
        "@typescript-eslint/init-declarations": "off",
        // Enforce consistent spacing before and after keywords
        "@typescript-eslint/keyword-spacing": "error",
        // Require or disallow an empty line between class members
        "@typescript-eslint/lines-between-class-members": ["error", "never"],
        // Disallow generic Array constructors
        "@typescript-eslint/no-array-constructor": "error",
        // Disallow duplicate class members
        "@typescript-eslint/no-dupe-class-members": "error",
        // Disallow duplicate imports
        "@typescript-eslint/no-duplicate-imports": "error",
        // Disallow empty functions
        "@typescript-eslint/no-empty-function": "off",
        // Disallow unnecessary parentheses
        "@typescript-eslint/no-extra-parens": "error",
        // Disallow unnecessary semicolons
        "@typescript-eslint/no-extra-semi": "error",
        // Disallow the use of eval()-like methods
        "@typescript-eslint/no-implied-eval": "error",
        // Disallow this keywords outside of classes or class-like objects
        "@typescript-eslint/no-invalid-this": "error",
        // Disallow function declarations that contain unsafe references inside loop statements
        "@typescript-eslint/no-loop-func": "error",
        // Disallow literal numbers that lose precision
        "@typescript-eslint/no-loss-of-precision": "error",
        // Disallow magic numbers
        "@typescript-eslint/no-magic-numbers": "off",
        // Disallow variable redeclaration
        "@typescript-eslint/no-redeclare": "error",
        // Disallow variable declarations from shadowing variables declared in the outer scope
        "@typescript-eslint/no-shadow": "off",
        // Disallow throwing literals as exceptions
        "@typescript-eslint/no-throw-literal": "error",
        // Disallow unused expressions
        "@typescript-eslint/no-unused-expressions": "error",
        // Disallow unused variables
        "@typescript-eslint/no-unused-vars": "error",
        // Disallow the use of variables before they are defined
        "@typescript-eslint/no-use-before-define": "error",
        // Disallow unnecessary constructors
        "@typescript-eslint/no-useless-constructor": "error",
        // Enforce consistent spacing inside braces
        "@typescript-eslint/object-curly-spacing": "error",
        // Require or disallow padding lines between statements
        "@typescript-eslint/padding-line-between-statements": "error",
        // Enforce the consistent use of either backticks, double, or single quotes
        "@typescript-eslint/quotes": ["error", "double"],
        // Disallow async functions which have no await expression
        "@typescript-eslint/require-await": "error",
        // Enforce consistent returning of awaited values
        "@typescript-eslint/return-await": "error",
        // Require or disallow semicolons instead of ASI
        "@typescript-eslint/semi": ["error", "never"],
        // Enforce consistent spacing before blocks
        "@typescript-eslint/space-before-blocks": "error",
        // Enforce consistent spacing before function parenthesis
        "@typescript-eslint/space-before-function-paren": ["error", "never"],
        // Require spacing around infix operators
        "@typescript-eslint/space-infix-ops": "error",
        // Enforce return statements in callbacks of array methods
        "array-callback-return": "error",
        // Require `super()` calls in constructors
        "constructor-super": "error",
        // Enforce "for" loop update clause moving the counter in the right direction.
        "for-direction": "error",
        // Enforce `return` statements in getters
        "getter-return": "error",
        // Disallow using an async function as a Promise executor
        "no-async-promise-executor": "error",
        // Disallow `await` inside of loops
        "no-await-in-loop": "off",
        // Disallow reassigning class members
        "no-class-assign": "error",
        // Disallow comparing against -0
        "no-compare-neg-zero": "error",
        // Disallow assignment operators in conditional expressions
        "no-cond-assign": "error",
        // Disallow reassigning `const` variables
        "no-const-assign": "error",
        // Disallow expressions where the operation doesn't affect the value
        "no-constant-binary-expression": "error",
        // Disallow constant expressions in conditions
        "no-constant-condition": "error",
        // Disallow returning value from constructor
        "no-constructor-return": "error",
        // Disallow control characters in regular expressions
        "no-control-regex": "error",
        // Disallow the use of `debugger`
        "no-debugger": "off",
        // Disallow duplicate arguments in `function` definitions
        "no-dupe-args": "error",
        // Disallow duplicate class members
        "no-dupe-class-members": "off",
        // Disallow duplicate conditions in if-else-if chains
        "no-dupe-else-if": "error",
        // Disallow duplicate keys in object literals
        "no-dupe-keys": "error",
        // Disallow duplicate case labels
        "no-duplicate-case": "error",
        // Disallow duplicate module imports
        "no-duplicate-imports": "off",
        // Disallow empty character classes in regular expressions
        "no-empty-character-class": "error",
        // Disallow empty destructuring patterns
        "no-empty-pattern": "error",
        // Disallow reassigning exceptions in `catch` clauses
        "no-ex-assign": "error",
        // Disallow fallthrough of `case` statements
        "no-fallthrough": "error",
        // Disallow reassigning `function` declarations
        "no-func-assign": "error",
        // Disallow assigning to imported bindings
        "no-import-assign": "error",
        // Disallow variable or `function` declarations in nested blocks
        "no-inner-declarations": "error",
        // Disallow invalid regular expression strings in `RegExp` constructors
        "no-invalid-regexp": "error",
        // Disallow irregular whitespace
        "no-irregular-whitespace": "error",
        // Disallow literal numbers that lose precision
        "no-loss-of-precision": "off",
        // Disallow characters which are made with multiple code points in character class syntax
        "no-misleading-character-class": "error",
        // Disallow `new` operators with the `Symbol` object
        "no-new-symbol": "error",
        // Disallow calling global object properties as functions
        "no-obj-calls": "error",
        // Disallow returning values from Promise executor functions
        "no-promise-executor-return": "error",
        // Disallow calling some `Object.prototype` methods directly on objects
        "no-prototype-builtins": "error",
        // Disallow assignments where both sides are exactly the same
        "no-self-assign": "error",
        // Disallow comparisons where both sides are exactly the same
        "no-self-compare": "error",
        // Disallow returning values from setters
        "no-setter-return": "error",
        // Disallow sparse arrays
        "no-sparse-arrays": "error",
        // Disallow template literal placeholder syntax in regular strings
        "no-template-curly-in-string": "error",
        // Disallow `this`/`super` before calling `super()` in constructors
        "no-this-before-super": "error",
        // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
        "no-undef": "off",
        // Disallow confusing multiline expressions
        "no-unexpected-multiline": "error",
        // Disallow unmodified loop conditions
        "no-unmodified-loop-condition": "error",
        // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
        "no-unreachable": "error",
        // Disallow loops with a body that allows only one iteration
        "no-unreachable-loop": "error",
        // Disallow control flow statements in `finally` blocks
        "no-unsafe-finally": "error",
        // Disallow negating the left operand of relational operators
        "no-unsafe-negation": "error",
        // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
        "no-unsafe-optional-chaining": "error",
        // Disallow unused private class members
        "no-unused-private-class-members": "error",
        // Disallow unused variables
        "no-unused-vars": "off",
        // Disallow the use of variables before they are defined
        "no-use-before-define": "off",
        // Disallow useless backreferences in regular expressions
        "no-useless-backreference": "error",
        // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
        "require-atomic-updates": "error",
        // Require calls to `isNaN()` when checking for `NaN`
        "use-isnan": "error",
        // Enforce comparing `typeof` expressions against valid strings
        "valid-typeof": "error",
        // Enforce getter and setter pairs in objects and classes
        "accessor-pairs": "off",
        // Require braces around arrow function bodies
        "arrow-body-style": "off",
        // Enforce the use of variables within the scope they are defined
        "block-scoped-var": "off",
        // Enforce camelcase naming convention
        "camelcase": "off",
        // Enforce or disallow capitalization of the first letter of a comment
        "capitalized-comments": "error",
        // Enforce that class methods utilize `this`
        "class-methods-use-this": "off",
        // Enforce a maximum cyclomatic complexity allowed in a program
        "complexity": ["error", 20],
        // Require `return` statements to either always or never specify values
        "consistent-return": "off",
        // Enforce consistent naming when capturing the current execution context
        "consistent-this": "error",
        // Enforce consistent brace style for all control statements
        "curly": "error",
        // Require `default` cases in `switch` statements
        "default-case": "off",
        // Enforce default clauses in switch statements to be last
        "default-case-last": "error",
        // Enforce default parameters to be last
        "default-param-last": "off",
        // Enforce dot notation whenever possible
        "dot-notation": "off",
        // Require the use of `===` and `!==`
        "eqeqeq": "error",
        // Require function names to match the name of the variable or property to which they are assigned
        "func-name-matching": "error",
        // Require or disallow named `function` expressions
        "func-names": "off",
        // Enforce the consistent use of either `function` declarations or expressions
        "func-style": "off",
        // Require grouped accessor pairs in object literals and classes
        "grouped-accessor-pairs": "error",
        // Require `for-in` loops to include an `if` statement
        "guard-for-in": "error",
        // Disallow specified identifiers
        "id-denylist": "off",
        // Enforce minimum and maximum identifier lengths
        "id-length": "off",
        // Require identifiers to match a specified regular expression
        "id-match": "off",
        // Require or disallow initialization in variable declarations
        "init-declarations": "off",
        // Enforce a maximum number of classes per file
        "max-classes-per-file": "off",
        // Enforce a maximum depth that blocks can be nested
        "max-depth": "off",
        // Enforce a maximum number of lines per file
        "max-lines": "off",
        // Enforce a maximum number of lines of code in a function
        "max-lines-per-function": "off",
        // Enforce a maximum depth that callbacks can be nested
        "max-nested-callbacks": "off",
        // Enforce a maximum number of parameters in function definitions
        "max-params": "off",
        // Enforce a maximum number of statements allowed in function blocks
        "max-statements": "off",
        // Enforce a particular style for multiline comments
        "multiline-comment-style": "error",
        // Require constructor names to begin with a capital letter
        "new-cap": "off",
        // Disallow the use of `alert`, `confirm`, and `prompt`
        "no-alert": "error",
        // Disallow `Array` constructors
        "no-array-constructor": "error",
        // Disallow bitwise operators
        "no-bitwise": "off",
        // Disallow the use of `arguments.caller` or `arguments.callee`
        "no-caller": "error",
        // Disallow lexical declarations in case clauses
        "no-case-declarations": "error",
        // Disallow arrow functions where they could be confused with comparisons
        "no-confusing-arrow": "error",
        // Disallow the use of `console`
        "no-console": "off",
        // Disallow `continue` statements
        "no-continue": "off",
        // Disallow deleting variables
        "no-delete-var": "error",
        // Disallow division operators explicitly at the beginning of regular expressions
        "no-div-regex": "error",
        // Disallow `else` blocks after `return` statements in `if` statements
        "no-else-return": "off",
        // Disallow empty block statements
        "no-empty": "off",
        // Disallow empty functions
        "no-empty-function": "off",
        // Disallow `null` comparisons without type-checking operators
        "no-eq-null": "error",
        // Disallow the use of `eval()`
        "no-eval": "error",
        // Disallow extending native types
        "no-extend-native": "error",
        // Disallow unnecessary calls to `.bind()`
        "no-extra-bind": "error",
        // Disallow unnecessary boolean casts
        "no-extra-boolean-cast": "error",
        // Disallow unnecessary labels
        "no-extra-label": "error",
        // Disallow unnecessary semicolons
        "no-extra-semi": "off",
        // Disallow leading or trailing decimal points in numeric literals
        "no-floating-decimal": "error",
        // Disallow assignments to native objects or read-only global variables
        "no-global-assign": "error",
        // Disallow shorthand type conversions
        "no-implicit-coercion": "error",
        // Disallow declarations in the global scope
        "no-implicit-globals": "error",
        // Disallow the use of `eval()`-like methods
        "no-implied-eval": "off",
        // Disallow inline comments after code
        "no-inline-comments": "error",
        // Disallow use of `this` in contexts where the value of `this` is `undefined`
        "no-invalid-this": "error",
        // Disallow the use of the `__iterator__` property
        "no-iterator": "error",
        // Disallow labels that share a name with a variable
        "no-label-var": "error",
        // Disallow labeled statements
        "no-labels": "error",
        // Disallow unnecessary nested blocks
        "no-lone-blocks": "error",
        // Disallow `if` statements as the only statement in `else` blocks
        "no-lonely-if": "error",
        // Disallow function declarations that contain unsafe references inside loop statements
        "no-loop-func": "off",
        // Disallow magic numbers
        "no-magic-numbers": "off",
        // Disallow mixed binary operators
        "no-mixed-operators": "error",
        // Disallow use of chained assignment expressions
        "no-multi-assign": "error",
        // Disallow multiline strings
        "no-multi-str": "error",
        // Disallow negated conditions
        "no-negated-condition": "error",
        // Disallow nested ternary expressions
        "no-nested-ternary": "error",
        // Disallow `new` operators outside of assignments or comparisons
        "no-new": "error",
        // Disallow `new` operators with the `Function` object
        "no-new-func": "error",
        // Disallow `Object` constructors
        "no-new-object": "error",
        // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
        "no-new-wrappers": "error",
        // Disallow `\8` and `\9` escape sequences in string literals
        "no-nonoctal-decimal-escape": "error",
        // Disallow octal literals
        "no-octal": "error",
        // Disallow octal escape sequences in string literals
        "no-octal-escape": "error",
        // Disallow reassigning `function` parameters
        "no-param-reassign": "error",
        // Disallow the unary operators `++` and `--`
        "no-plusplus": "off",
        // Disallow the use of the `__proto__` property
        "no-proto": "error",
        // Disallow variable redeclaration
        "no-redeclare": "off",
        // Disallow multiple spaces in regular expressions
        "no-regex-spaces": "error",
        // Disallow specified names in exports
        "no-restricted-exports": "off",
        // Disallow specified global variables
        "no-restricted-globals": "off",
        // Disallow specified modules when loaded by `import`
        "no-restricted-imports": "off",
        // Disallow certain properties on certain objects
        "no-restricted-properties": "off",
        // Disallow specified syntax
        "no-restricted-syntax": "off",
        // Disallow assignment operators in `return` statements
        "no-return-assign": "error",
        // Disallow unnecessary `return await`
        "no-return-await": "off",
        // Disallow `javascript:` urls
        "no-script-url": "error",
        // Disallow comma operators
        "no-sequences": "error",
        // Disallow variable declarations from shadowing variables declared in the outer scope
        "no-shadow": "off",
        // Disallow identifiers from shadowing restricted names
        "no-shadow-restricted-names": "off",
        // Disallow ternary operators
        "no-ternary": "off",
        // Disallow throwing literals as exceptions
        "no-throw-literal": "off",
        // Disallow initializing variables to `undefined`
        "no-undef-init": "error",
        // Disallow the use of `undefined` as an identifier
        "no-undefined": "off",
        // Disallow dangling underscores in identifiers
        "no-underscore-dangle": "error",
        // Disallow ternary operators when simpler alternatives exist
        "no-unneeded-ternary": "error",
        // Disallow unused expressions
        "no-unused-expressions": "error",
        // Disallow unused labels
        "no-unused-labels": "error",
        // Disallow unnecessary calls to `.call()` and `.apply()`
        "no-useless-call": "error",
        // Disallow unnecessary `catch` clauses
        "no-useless-catch": "error",
        // Disallow unnecessary computed property keys in objects and classes
        "no-useless-computed-key": "error",
        // Disallow unnecessary concatenation of literals or template literals
        "no-useless-concat": "error",
        // Disallow unnecessary constructors
        "no-useless-constructor": "off",
        // Disallow unnecessary escape characters
        "no-useless-escape": "error",
        // Disallow renaming import, export, and destructured assignments to the same name
        "no-useless-rename": "error",
        // Disallow redundant return statements
        "no-useless-return": "error",
        // Require `let` or `const` instead of `var`
        "no-var": "off",
        // Disallow `void` operators
        "no-void": "off",
        // Disallow specified warning terms in comments
        "no-warning-comments": "error",
        // Disallow `with` statements
        "no-with": "error",
        // Require or disallow method and property shorthand syntax for object literals
        "object-shorthand": "error",
        // Enforce variables to be declared either together or separately in functions
        "one-var": ["error", "never"],
        // Require or disallow newlines around variable declarations
        "one-var-declaration-per-line": "error",
        // Require or disallow assignment operator shorthand where possible
        "operator-assignment": "error",
        // Require using arrow functions for callbacks
      "prefer-arrow-callback": "off",
        // Require `const` declarations for variables that are never reassigned after declared
        "prefer-const": "error",
        // Require destructuring from arrays and/or objects
        "prefer-destructuring": "off",
        // Disallow the use of `Math.pow` in favor of the `**` operator
        "prefer-exponentiation-operator": "error",
        // Enforce using named capture group in regular expression
        "prefer-named-capture-group": "error",
        // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
        "prefer-numeric-literals": "error",
        // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
        "prefer-object-has-own": "error",
        // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
        "prefer-object-spread": "error",
        // Require using Error objects as Promise rejection reasons
        "prefer-promise-reject-errors": "off",
        // Disallow use of the `RegExp` constructor in favor of regular expression literals
        "prefer-regex-literals": "error",
        // Require rest parameters instead of `arguments`
        "prefer-rest-params": "error",
        // Require spread operators instead of `.apply()`
        "prefer-spread": "error",
        // Require template literals instead of string concatenation
        "prefer-template": "error",
        // Require quotes around object literal property names
        "quote-props": "off",
        // Enforce the consistent use of the radix argument when using `parseInt()`
        "radix": "error",
        // Disallow async functions which have no `await` expression
        "require-await": "off",
        // Enforce the use of `u` flag on RegExp
        "require-unicode-regexp": "error",
        // Require generator functions to contain `yield`
        "require-yield": "error",
        // Enforce sorted import declarations within modules
        "sort-imports": "off",
        // Require object keys to be sorted
        "sort-keys": "off",
        // Require variables within the same declaration block to be sorted
        "sort-vars": "off",
        // Enforce consistent spacing after the `//` or `/*` in a comment
        "spaced-comment": "error",
        // Require or disallow strict mode directives
        "strict": "error",
        // Require symbol descriptions
        "symbol-description": "off",
        // Require `var` declarations be placed at the top of their containing scope
        "vars-on-top": "off",
        // Require or disallow "Yoda" conditions
        "yoda": "error",
        // Enforce linebreaks after opening and before closing array brackets
        "array-bracket-newline": "off",
        // Enforce consistent spacing inside array brackets
        "array-bracket-spacing": "error",
        // Enforce line breaks after each array element
        "array-element-newline": "off",
        // Require parentheses around arrow function arguments
        "arrow-parens": "error",
        // Enforce consistent spacing before and after the arrow in arrow functions
        "arrow-spacing": "error",
        // Disallow or enforce spaces inside of blocks after opening block and before closing block
        "block-spacing": "error",
        // Enforce consistent brace style for blocks
        "brace-style": "off",
        // Require or disallow trailing commas
        "comma-dangle": "off",
        // Enforce consistent spacing before and after commas
        "comma-spacing": "off",
        // Enforce consistent comma style
        "comma-style": ["error", "last"],
        // Enforce consistent spacing inside computed property brackets
        "computed-property-spacing": "error",
        // Enforce consistent newlines before and after dots
        "dot-location": "error",
        // Require or disallow newline at the end of files
        "eol-last": "error",
        // Require or disallow spacing between function identifiers and their invocations
        "func-call-spacing": "error",
        // Enforce line breaks between arguments of a function call
        "function-call-argument-newline": "off",
        // Enforce consistent line breaks inside function parentheses
        "function-paren-newline": ["error", "consistent"],
        // Enforce consistent spacing around `*` operators in generator functions
        "generator-star-spacing": "error",
        // Enforce the location of arrow function bodies
        "implicit-arrow-linebreak": "error",
        // Enforce consistent indentation
        "indent": "off",
        // Enforce the consistent use of either double or single quotes in JSX attributes
        "jsx-quotes": "off",
        // Enforce consistent spacing between keys and values in object literal properties
        "key-spacing": "error",
        // Enforce consistent spacing before and after keywords
        "keyword-spacing": "error",
        // Enforce position of line comments
        "line-comment-position": "error",
        // Enforce consistent linebreak style
        "linebreak-style": ["error", "unix"],
        // Require empty lines around comments
        "lines-around-comment": "off",
        // Require or disallow an empty line between class members
        "lines-between-class-members": "off",
        // Enforce a maximum line length
        "max-len": ["error", 140],
        // Enforce a maximum number of statements allowed per line
        "max-statements-per-line": ["error", { "max": 1 }],
        // Enforce newlines between operands of ternary expressions
        "multiline-ternary": "error",
        // Enforce or disallow parentheses when invoking a constructor with no arguments
        "new-parens": ["error", "always"],
        // Require a newline after each call in a method chain
        "newline-per-chained-call": "error",
        // Disallow unnecessary parentheses
      "no-extra-parens": "off",
        // Disallow mixed spaces and tabs for indentation
        "no-mixed-spaces-and-tabs": "error",
        // Disallow multiple spaces
        "no-multi-spaces": "error",
        // Disallow multiple empty lines
        "no-multiple-empty-lines": "error",
        // Disallow all tabs
        "no-tabs": "error",
        // Disallow trailing whitespace at the end of lines
        "no-trailing-spaces": "error",
        // Disallow whitespace before properties
        "no-whitespace-before-property": "error",
        // Enforce the location of single-line statements
        "nonblock-statement-body-position": "error",
        // Enforce consistent line breaks after opening and before closing braces
        "object-curly-newline": "error",
        // Enforce consistent spacing inside braces
        "object-curly-spacing": "error",
        // Enforce placing object properties on separate lines
        "object-property-newline": "error",
        // Enforce consistent linebreak style for operators
        "operator-linebreak": ["error", "before"],
        // Require or disallow padding within blocks
        "padded-blocks": ["error", "never"],
        // Require or disallow padding lines between statements
        "padding-line-between-statements": "error",
        // Enforce the consistent use of either backticks, double, or single quotes
        "quotes": "off",
        // Enforce spacing between rest and spread operators and their expressions
        "rest-spread-spacing": "error",
        // Require or disallow semicolons instead of ASI
        "semi": "off",
        // Enforce consistent spacing before and after semicolons
        "semi-spacing": "error",
        // Enforce location of semicolons
        "semi-style": ["error", "last"],
        // Enforce consistent spacing before blocks
        "space-before-blocks": "off",
        // Enforce consistent spacing before `function` definition opening parenthesis
        "space-before-function-paren": "off",
        // Enforce consistent spacing inside parentheses
        "space-in-parens": "off",
        // Require spacing around infix operators
        "space-infix-ops": "off",
        // Enforce consistent spacing before or after unary operators
        "space-unary-ops": "error",
        // Enforce spacing around colons of switch statements
        "switch-colon-spacing": "error",
        // Require or disallow spacing around embedded expressions of template strings
        "template-curly-spacing": "error",
        // Require or disallow spacing between template tags and their literals
        "template-tag-spacing": "error",
        // Require or disallow Unicode byte order mark (BOM)
        "unicode-bom": "error",
        // Require parentheses around immediate `function` invocations
        "wrap-iife": "error",
        // Require parenthesis around regex literals
        "wrap-regex": "off",
        // Require or disallow spacing around the `*` in `yield*` expressions
        "yield-star-spacing": "error",
        // Sorts imports of modules
        "simple-import-sort/imports": importSorting,
        // Sorts exports of modules
        "simple-import-sort/exports": "error",
        // Ensure imports point to a file/module that can be resolved.
        "import/no-unresolved": "off",
        // Ensure named imports correspond to a named export in the remote file.
        "import/named": "error",
        // Ensure a default export is present, given a default import.
        "import/default": "error",
        // Ensure imported namespaces contain dereferenced properties as they are dereferenced.
        "import/namespace": "error",
        // Restrict which files can be imported in a given folder
        "import/no-restricted-paths": "off",
        // Forbid import of modules using absolute paths
        "import/no-absolute-path": "error",
        // Forbid require() calls with expressions
        "import/no-dynamic-require": "error",
        // Prevent importing the submodules of other modules
        "import/no-internal-modules": "error",
        // Forbid webpack loader syntax in imports
        "import/no-webpack-loader-syntax": "error",
        // Forbid a module from importing itself
        "import/no-self-import": "error",
        // Forbid a module from importing a module with a dependency path back to itself
        "import/no-cycle": "error",
        // Prevent unnecessary path segments in import and require statements
        "import/no-useless-path-segments": "error",
        // Forbid importing modules from parent directories
        "import/no-relative-parent-imports": "error",
        // Prevent importing packages through relative paths
        "import/no-relative-packages": "error",
        // Report any invalid exports, i.e. re-export of the same name
        "import/export": "error",
        // Report use of exported name as identifier of default export
        "import/no-named-as-default": "error",
        // Report use of exported name as property of default export
        "import/no-named-as-default-member": "error",
        // Report imported names marked with @deprecated documentation tag
        "import/no-deprecated": "error",
        // Forbid the use of extraneous packages
        "import/no-extraneous-dependencies": "error",
        // Forbid the use of mutable exports with var or let.
        "import/no-mutable-exports": "off",
        // Report modules without exports, or exports without matching import in another module
        "import/no-unused-modules": "error",
        // Report potentially ambiguous parse goal (script vs. module)
        "import/unambiguous": "error",
        // Report CommonJS require calls and module.exports or exports.*.
        "import/no-commonjs": "error",
        // Report AMD require and define calls.
        "import/no-amd": "error",
        // No Node.js builtin modules.
        "import/no-nodejs-modules": "error",
        // Forbid imports with CommonJS exports
        "import/no-import-module-exports": "off",
        // Ensure all imports appear before other statements
        "import/first": "error",
        // Ensure all exports appear after other statements
        "import/exports-last": "off",
        // Report repeated import of the same module in multiple places
        "import/no-duplicates": "error",
        // Forbid namespace (a.k.a. "wildcard" *) imports
        "import/no-namespace": "error",
        // Ensure consistent use of file extension within the import path
        "import/extensions": ["error", "ignorePackages"],
        // Enforce a convention in module import order
        "import/order": "off",
        // Enforce a newline after import statements
        "import/newline-after-import": "error",
        // Prefer a default export if module exports a single name
        "import/prefer-default-export": "off",
        // Limit the maximum number of dependencies a module can have
        "import/max-dependencies": "off",
        // Forbid unassigned imports
        "import/no-unassigned-import": "off",
        // Forbid named default exports
        "import/no-named-default": "off",
        // Forbid default exports
        "import/no-default-export": "error",
        // Forbid named exports
        "import/no-named-export": "off",
        // Forbid anonymous values as default exports
        "import/no-anonymous-default-export": "off",
        // Prefer named exports to be grouped together in a single export declaration
        "import/group-exports": "off",
        // Enforce a leading comment with the webpackChunkName for dynamic imports
        "import/dynamic-import-chunkname": "off",
        // Checks that @access tags 
        "jsdoc/check-access": "error",
        // Reports invalid alignment of JSDoc block asterisks
        "jsdoc/check-alignment": "error",
        // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules
        "jsdoc/check-examples": "off",
        // Reports invalid padding inside JSDoc blocks
        "jsdoc/check-indentation": "error",
        // Reports invalid alignment of JSDoc block lines
        "jsdoc/check-line-alignment": "error",
        // Ensures that parameter names in JSDoc match those in the function declaration
        "jsdoc/check-param-names": "error",
        // Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots
        "jsdoc/check-property-names": "error",
        // Reports against syntax not encouraged for the mode (e.g., Google Closure Compiler in "jsdoc" or "typescript" mode)
        "jsdoc/check-syntax": "error",
        // Reports invalid block tag names
        "jsdoc/check-tag-names": "error",
        // Reports invalid types
        "jsdoc/check-types": "error",
        // This rule checks the values for a handful of tags
        "jsdoc/check-values": "error",
        // Expects tags to be empty of any content
        "jsdoc/empty-tags": "error",
        // Reports an issue with any non-constructor function using @implements
        "jsdoc/implements-on-classes": "error",
        // Enforces a regular expression pattern on descriptions
        "jsdoc/match-description": "error",
        // Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks
        "jsdoc/multiline-blocks": "error",
        // Enforces a consistent padding of the block description
        "jsdoc/newline-after-description": "error",
        // This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block
        "jsdoc/no-bad-blocks": "error",
        // This rule reports defaults being used on the relevant portion of @param or @default
        "jsdoc/no-defaults": "error",
        // This rule lets you report if certain always expected comment structures are missing
        "jsdoc/no-missing-syntax": "off",
        // Prevents use of multiple asterisks at the beginning of lines
        "jsdoc/no-multi-asterisks": "error",
        // Reports when certain comment structures are present
        "jsdoc/no-restricted-syntax": "off",
        // This rule reports types being used on @param or @returns
        "jsdoc/no-types": "off",
        // Checks that types in jsdoc comments are defined
        "jsdoc/no-undefined-types": "error",
        // Requires that each JSDoc line starts with an *
        "jsdoc/require-asterisk-prefix": "error",
        // Requires block descriptions, explicit @description, and @param/@returns tag descriptions
        "jsdoc/require-description": "error",
        // Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences
        "jsdoc/require-description-complete-sentence": "error",
        // Requires that all functions have examples
        "jsdoc/require-example": "off",
        // Checks that all files have a @file, @fileoverview, or @overview tag with correct contents
        "jsdoc/require-file-overview": "off",
        // Requires (or disallows) a hyphen before the @param description
        "jsdoc/require-hyphen-before-param-description": "off",
        // Checks for presence of jsdoc comments, on class declarations as well as functions
        "jsdoc/require-jsdoc": "error",
        // Checks for presence of params
        "jsdoc/require-param": "error",
        // Requires that each @param tag has a description value.
        "jsdoc/require-param-description": "error",
        // Requires that all function parameters have names
        "jsdoc/require-param-name": "error",
        // Requires that all function parameters have types
        "jsdoc/require-param-type": "off",
        // Requires that all @typedef and @namespace tags have @property when their type is a plain object, Object, or PlainObject
        "jsdoc/require-property": "error",
        // Requires that each @property tag has a description value
        "jsdoc/require-property-description": "error",
        // Requires that all function @property tags have names
        "jsdoc/require-property-name": "error",
        // Requires that each @property tag has a type value
        "jsdoc/require-property-type": "off",
        // Checks if return values are described in JSDoc
        "jsdoc/require-returns": "off",
        // Requires a return statement (or non-undefined Promise resolve value) in function bodies
        "jsdoc/require-returns-check": "error",
        // Requires that the @returns tag has a description value
        "jsdoc/require-returns-description": "error",
        // Requires that the @returns tag has a type
        "jsdoc/require-returns-type": "off",
        // Requires all thrown errors to be listed in current block's jsdoc
        "jsdoc/require-throws": "error",
        // Requires @yield to present on generator functions
        "jsdoc/require-yields": "error",
        // Requires yield to present in function body
        "jsdoc/require-yields-check": "error",
        // Enforces lines (or no lines) between tags
        "jsdoc/tag-lines": "error",
        // Require all types to be valid
        "jsdoc/valid-types": "error",
      }
    },
    {
      // Configure settings for "html" files:
      "files": ["*.html"],
      "extends": [],
      "rules": {
        // Validate code line length:
        "max-len": ["error", { "code": 140 }]
      }
    }
  ]
}
