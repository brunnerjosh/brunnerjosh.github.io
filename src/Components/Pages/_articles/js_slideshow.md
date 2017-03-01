PROVIDE A CODEPEN FOR THIS?

---
title: JavaScript Slideshow
author: Josh Brunner
date: 2015-04-26
template: article.jade
---

After reading an [article] [1] written by Chris Zacharias, a former YouTube employee, I was inspired to begin practicing various JavaScript problems. The goal I have since set for myself is to keep up on these types of problems and to make sure that I know and comprehend solutions to solve them.

[1]: http://www.computedstyle.com/2010/12/hiring-front-end-engineers.html

---

# Summary
In the article, Chris talks a lot about hiring front-end engineers and gave an example problem he would ask to the interviewees. He would mention how candidates tended to rely on jQuery and either couldn't solve this problem without it or would spend "the next 30 minutes sweating through an often regrettable solution."

Thus, I wanted to prove to myself that I could solve this problem. So, here it goes!

    > A div with an id of 'slideshow' contains five images, the first of which
    > is shown and the others are hidden using a display style of none.
    > Using Javascript, create a simple slideshow that cycles through the
    > images, displaying each for three seconds at a time, looping back to the
    > first image when the end is reached.
    >
    > You cannot use jQuery or any other library.

## HTML
As described in the problem above, here is the described HTML structure that will be used as the basis to build the slideshow. It includes a `div` with an id of 'slideshow'. Inside the `div` are five images with the first image shown and the others hidden with a display style of `none`.
```html
<div id="slideshow">
  <img src="picture-1.jpg">
  <img src="picture-2.jpg" style="display: none;">
  <img src="picture-3.jpg" style="display: none;">
  <img src="picture-4.jpg" style="display: none;">
  <img src="picture-5.jpg" style="display: none;">
</div>
```

## JavaScript
The code that I built to accomplish the slideshow utilizes a variable to hold an array of the images that are within the 'slideshow' `div`. There's a function called `runSlideshow` that gets called on page load to begin the image slideshow.
```javascript
// Grab the div that has the id of 'slideshow'
var slideshow = document.getElementById('slideshow')

// Grab the images within the 'slideshow' div
var images = slideshow.getElementsByTagName('img')

// Initialize the counter
var index = 0;

// Function used to swap images, simulating a slideshow.
function runSlideshow() {

  // Check if we are within the bounds of the 'images' array
  if ((index+1) < images.length) {

    // Hide the current image
    images[index].style.display = 'none'

    // Show the next image
    images[index+1].style.display = 'block'

    // Increment the counter
    index++

  } else {

    // Hide the current image
    images[index].style.display = 'none'

    // Reset the index variable
    index = 0

    // Start back over from the top
    images[0].style.display = 'block'
  }

  // Wait 3 seconds and call changeImage() again
  setTimeout('runSlideshow()', 3000)
}
