### Instructions for test
The goal of this test is mimic some of the functionality we currently see on the site and rebuild it! This test will hit on some features of frontend development and test your knowledge, but moreover thought process, in building it.

#### Main Tasks
- [ ] Get requests for our two endpoints (*/sizes* and */height*) (Please note: these are on port 5555 because we are faking a server, so ports will need to be included in the request)
- [ ] Utilizing this data to build our size component and height component

#### UI Functionality
*Dress Size*
- [ ] Clicking on `Dress Size` will pull out a drawer section that will overlay on top of the customization area
- [ ] The `Size` component will display all available sizes and allow a user to click on one.
- [ ] Clicking on a size will "save" that size to local memory (state) and pull back the drawer overlay
- [ ] This size information will be inline with `Dress Size`  

*Height and Hemline*
- [ ] Clicking on `Height and Hemline` will pull out a drawer section that will overlay on top of the customization area
- [ ] The `Height` component will display all available height options (Petite, Standard, Tall) in buttons with information regarding those heights adjacent to the button.
- [ ] Clicking on a height will "save" that size to local memory (state) and pull back the drawer overlay
- [ ] This size information will be inline with `Height and Hemline`

*Add to Bag*
- [ ] Add to Bag button should generate a json object with keys of `size` and `height`
- [ ] We can just log this to the console to confirm.

#### Additional Tasks
- [ ] Let's talk about how to make this better. What would you do to improve?
- [ ] Let's make this mobile friendly.
