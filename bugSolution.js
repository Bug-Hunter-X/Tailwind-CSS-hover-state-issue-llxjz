```javascript
// Example showing correct usage of Tailwind's hover pseudo-class
<div class="relative">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Hover Me
  </button>
</div>
// OR
<button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
  Hover Me
</button>
// In this example the button background color will change on hover.  The first example shows how adding a relative parent helps to apply styles correctly.  The second example uses a more direct approach.
```