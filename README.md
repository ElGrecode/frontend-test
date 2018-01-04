### Instructions for test
The goal of this test is to create a drawer pattern in which we can select options for purchase. This test will hit on some features of frontend development and test your knowledge, but moreover thought process, in building it.

#### Getting Started
- [ ] Take a look at package.json and start scripts `json-server` and `start`. `json-server` will fire up a fake API endpoint on port localhost:5555/ and `start` will create a webpack automated bundle refreshing changes on the screen.

<!-- 3 col layout, 1 col drawer -->
<!-- ------------- | ------------- | ------------- | ------------- -->
<!-- ------------- | ------------- | ------------- | ------------- -->
<!-- -- Details -- | --- IMG ----- | --- Select -- | -- drawer --- -->
<!-- -- Unused --- | --- AREA ---- | --- AREA ---- | ---- for ---- -->
<!-- ------------- | ------------- | ------------- | -- options -- -->
<!-- ------------- | ------------- | - Size Btn -> | ------------- -->
<!-- ------------- | ------------- | -- Hgt Btn -> | ------------- -->
<!-- ------------- | ------------- | ------------- | ------------- -->
<!-- ------------- | ------------- | ------------- | ------------- -->
<!-- ------------- | ------------- | -- Cart Btn - | ------------- -->
<!-- ------------- | ------------- | ------------- | ------------- -->

#### 2 Main Tasks
- [ ] Make 2 GET requests for our endpoints (*/sizes* and */height*) (Please note: these are on port 5555 because we are faking a server, so ports will need to be included in the request). These endpoints will return the options for selection.
- [ ] Utilize this data to build out a drawer component. In this drawer component  we can select those options and have them persist when we click add to bag.

#### Minor Tasks
*CSS Problem*
- [ ] Why is the button extending 3 column lengths? Can we fix this.

##### UI Functionality
*Dress Size ->*
- [ ] Clicking on `Dress Size` button will pull out a drawer section that will overlay on top of the customization area
- [ ] The `Size` component will display all available sizes and allow a user to click on one.
- [ ] Clicking on a size will "save" that size to local memory (state) and pull back the drawer overlay
- [ ] This size information will be inline with `Dress Size`  

*Height ->*
- [ ] Clicking on `Height` button will pull out a drawer section that will overlay on top of the customization area
- [ ] The `Height` Drawer component will display all available height options (Petite, Standard, Tall) in buttons with information regarding those heights adjacent to the button.
- [ ] Clicking on a height will "save" that size to local memory (state) and pull back the drawer overlay
- [ ] This size information will be inline with `Height and Hemline`

*Add to Bag*
- [ ] Add to Bag button click should generate a JSON object with keys of `size` and `height`
- [ ] We can log this to the console to confirm.

##### Additional Tasks
- [ ] Let's talk about how to make this better if you had the time. What would you do to improve?
