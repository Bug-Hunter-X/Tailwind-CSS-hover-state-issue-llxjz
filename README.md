# Tailwind CSS Hover State Issue

This repository demonstrates a common issue encountered when using Tailwind CSS's hover pseudo-class.  The hover effect may not work as intended when the element is nested within another container that doesn't also have hover styles applied.  The example showcases the problem and its solution.

## Problem
The provided `bug.js` file contains a button with a hover effect defined using Tailwind's `hover:` modifier. However, under certain circumstances, the hover effect doesn't work properly.

## Solution
The `bugSolution.js` file provides a corrected version of the code that addresses the issue. The solution demonstrates how to properly apply the hover state by considering the parent element styles and applying additional selectors when needed.
