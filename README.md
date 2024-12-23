# Uncommon Bug: Silent Ignoring of Non-Numeric Values

This repository demonstrates a subtle bug in JavaScript code that involves silently ignoring non-numeric values during array processing.  The `getNumbers` function is intended to extract all numbers from an array. However, if the input array contains non-numeric elements, these are simply skipped without any error or warning.  This behavior may lead to unexpected results in applications where all data is critical.

The `bug.js` file shows the buggy implementation. The solution, present in `bugSolution.js`, illustrates how to improve the code to handle such situations effectively, perhaps by throwing an error or providing a way to indicate that non-numeric elements have been encountered.