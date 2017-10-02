# Module 5 Coding Assignment

Coursera course: [HTML, CSS, and Javascript for Web Developers](https://www.coursera.org/learn/html-css-javascript-for-web-developers)

Last assignment and you are DONE!

**Time to complete:** About 30 minutes.

**Summary:** In this assignment, we are going to have a bit of fun with our built restaurant web application. The front page of our web app contains 3 clickable tiles: Menu, Specials, and Map. If you click on the Specials tile, you will be taken to a single category page where all the menu items that belong to the Specials menu category will be shown. Your task in this assignment is to alter this behavior such that when the user clicks on the Specials tile, the web app takes the user to a random single category menu page, listing menu items in the category, be it "Lunch", "Dinner", "Sushi", etc. That way, any random category can become the Specials! What fun! (not! :-) )

In order to accomplish this, we need to change the home HTML snippet and, besides pulling it dynamically from the server, also insert a random category `short_name` into the function call of the following code. Previously, the code to send the user to the "Specials" category was this:

```html
<a href="#" onclick="$dc.loadMenuItems('SP');">
```

For this assignment, we changed this line to prepare it for a random category `short_name` to be this:

```html
<a href="#" onclick="$dc.loadMenuItems({{randomCategoryShortName}});">
```

**NOTE: the provided code will not run. It is up to you to follow the instructions to get it to run.**

6. You are NOT allowed to change the `home-snippet.html` file. Any adjustments to the value of `randomCategoryShortName` property needs to be done in Javascript code.

7. There are 4-5 fairly simple steps to implement the required functionality.
  * Open up `js/script.js` file.
  * Find TODO: STEP 0, and follow the instructions until you are done with TODO: STEP 4.

8. Once you are done, verify that the desired functionality is working correctly. Use Browser Sync or deploy your solution to GitHub pages.
  * Load the home page in the browser.
  * Click on the Specials tile. A single page category with a list of menu items for **some** category should appear.
  * Click on the restaurant logo to go back to the home page.
  * Click on the Specials tile again. Most likely, a different single page category page will be shown.
<br><br>
Repeat this several times to make sure that most of the time you see a different single category page.


# HTML/CSS/JS Assignment #5

1. Implement all of the Assignment 5 requirements that are posted for regular Coursera students. I encourage you to try to stick to the “harder” path for this part. 

2. In addition to the regular requirements, you will also implement the ‘About’ page. 

    a. Create a snippet placeholder for `about.html`. Change the link to the ‘About’ page such that the contents of the `about.html` snippet are loaded within the same `index.html` page, replacing the ‘home’ view content. In this page, you will implement and show a simple 5-star based rating of the restaurant. (The only thing is that it will be a random rating.) 

   b. Download Font Awesome. Once you click ‘Download’, you can simply choose ‘No thanks, just download Font Awesome’ option). Once you download and unzip the package, use the directions on their Getting Started page under the heading Using CSS to install it into your index.html page. 

    c. In the `about.html` snippet (or partial as it’s sometimes called), create 5 span tags with empty content. How you choose to position them in the page is up to you. They just have to be all in a row (not stacking). Each span will have a class attribute with a property we’ll substitute later using our `insertProperty` function. So, the first one should be `<span class=""></span>`, the second one should be `<span class=""></span>`, and so on until the last, 5th one. 

    d. In your Javascript code, create a function that produces a random number from 1 to 5 (inclusively). 

    e. Use that random function to assign values to each classX property. An empty star should have its class value be `class="fa fa-star-o"`. A filled star should have its class value be `class="fa fa-star"`. The empty star, if any, should be the last one in the list. 

3. Remember that since we don’t (yet!) have client-side routing implemented, in order to see the random number of stars filled in, you’ll need to click on the restaurant logo to navigate to the home view and then click on the About link again to see that code in action. 

4. (Bonus/Optional) A really easy one. Display the numeric/textual number of stars right next to the star icons. For example, after the 4 filled in stars and one empty star, it should say the words `“4-star rating”`.