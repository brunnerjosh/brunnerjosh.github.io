# JavaScript Slideshow

_April 26, 2015_

After reading an [article](http://www.computedstyle.com/2010/12/hiring-front-end-engineers.html) written by Chris Zacharias, a former YouTube employee, I was inspired to begin practicing various JavaScript problems. The goal I have since set for myself is to keep up on these types of problems and to make sure that I know and comprehend solutions to solve them.

## Summary
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

<iframe height='200' scrolling='no' title='Vanilla JavaScript Slideshow' src='//codepen.io/brunnerjosh/embed/EWmmQa/?height=200&theme-id=0&default-tab=html&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/brunnerjosh/pen/EWmmQa/'>Vanilla JavaScript Slideshow</a> by Josh Brunner (<a href='http://codepen.io/brunnerjosh'>@brunnerjosh</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## JavaScript
The code that I built to accomplish the slideshow utilizes a variable to hold an array of the images that are within the 'slideshow' `div`. There's a function called `runSlideshow` that gets called on page load to begin the image slideshow.

<iframe height='378' scrolling='no' title='Vanilla JavaScript Slideshow' src='//codepen.io/brunnerjosh/embed/EWmmQa/?height=378&theme-id=0&default-tab=js&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/brunnerjosh/pen/EWmmQa/'>Vanilla JavaScript Slideshow</a> by Josh Brunner (<a href='http://codepen.io/brunnerjosh'>@brunnerjosh</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>
