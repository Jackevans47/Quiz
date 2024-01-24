# Testing

## Compatibility


In order to test the quiz for correct appearance, reponsivness and functionality:

+ The website was tested on: Chrome and Firefox.

  - Chrome
  - ![Screenshot 2024-01-24 at 18 21 15](https://github.com/Jackevans47/Quiz/assets/148341732/932bf155-3cac-4407-9a5d-30bed3821a66)


  - Firefox
    ![firefox](https://github.com/Jackevans47/Quiz/assets/148341732/2fdd9ba3-c54e-4c7b-be10-9d825be62df6)

  ## Responsiveness

  + The quiz was checked by devtools on Firefox and Chrome browsers for different screen types.
 
     - Mobile:
       
      ![responsive mobile](https://github.com/Jackevans47/Quiz/assets/148341732/e77f81f2-7ed7-4ed0-9e32-b9fbddeaf691)

     - Tablet:
   
      ![responsive tablet](https://github.com/Jackevans47/Quiz/assets/148341732/7c1e967a-2f0b-4074-b064-6120283bde2d)

     - Desktop:
   
      ![responsive screen](https://github.com/Jackevans47/Quiz/assets/148341732/9c580fd0-8b1c-4b36-9d8f-72e75e2d5830)


## Manual testing

| feature | action | expected result | tested | passed | comments |
| --- | --- | --- | --- | --- | --- |
| Home | Click on the "Home" button| The user is shown a message asking for confirmation| Yes | Yes | - |
| Yes | Click on the "Yes" button | The user is redirected to the the start page | Yes | Yes | 
| No | Click on the "No" button | The user remains on the quiz page| Yes | Yes | 
| Start | Click on the "Start" button | The user is redirected to the first question | Yes | Yes | - |
| Answer buttons | Click on the "Answer button" | The user has selected the answer | Yes | Yes | - |
| Correct answer| Click on the "Answer button | If correct, the answer and background will be green | Yes | Yes | - |
| Incorrect answer | Click on the "Answer button| If incorrect, the answer and background will be red| Yes | Yes | - |
| Next| Click on the "Next" button| The next question is presented to the user | Yes | Yes | - |
| Points | Shows the users score| The points increase with every correct answer | Yes | Yes | - |
| Question tally | Increases by one for every question | Displays the question total and what question the user is on  | Yes | Yes | - |
| GitHub icon | Click on the "icon" | The user is redirected to my github page | Yes | Yes | - |
| Play again | Click the "play again" icon | The user is returned to the start page | Yes | Yes | |


---
## Validator testing
+ ### HTML
   - No errors or warnings found when passing throught the offical W3C validator
     
![W3C validator HTML](https://github.com/Jackevans47/Quiz/assets/148341732/3ec2ee14-4cda-449c-ac68-613020130b44)

+ ### CSS
   - No errors or warnings found when passing throught the offical W3C validator
 
     ![W3C validator CSS](https://github.com/Jackevans47/Quiz/assets/148341732/54772e43-e114-44c4-ae98-4150223f26d2)

+ ### JShint
  - JS hint is not prepared to evaluate import statement in js, however i have tested it on different browsers and the code is still functional. so i have ignored the warnings.
   
![Screenshot 2024-01-24 at 19 27 51](https://github.com/Jackevans47/Quiz/assets/148341732/bea68bfd-f1b4-4197-8efe-4100bc7ad528)


+ ## Lighthouse report
   - Using lighthouse in devtools, I confirmed that the quiz accessible, performs well and all design choices allow the text to be readable.

     ![lighthouse report](https://github.com/Jackevans47/Quiz/assets/148341732/c576591f-f316-48f4-b2b6-0f157a3df399)


---
## Bugs
+ ### Solved bugs
1. Encountered issue where i originally tried to impliment a restart button at the end by renaiming the start quiz function, it would take  me back to the first question instead of the welcome page. This was respolved by creating a Play again button instead that would return to the start page.

2. Encountered issue allowing users to continue to select other potions after selecting their answer. This was resolved by implementing  button.disabled = true; inside the array that determines which answer is true.
+ ### Unsolved bugs
  - None.
