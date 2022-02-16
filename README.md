# The Chase Graphics
This is a hacked together pair of webpages that aim to simulate the graphics used in the popular ITV game-show *The Chase*. The use case I had in mind was pub quizzes or social events etc. themed around The Chase's ruleset -- the idea is to provide a clear visualization of where the chaser and the players are, to be viewed or projected on a big screen. At any rate, it's far better than a low-tech alternative such as plastic figures on a sheet of paper on a table somewhere.

## Controls
The movement of players and chasers is controlled with the keyboard, so it's best to open this webpage on a desktop with a keyboard attached; it's pretty much unusable on mobile devices. Ensure that the window is focused and receiving input when using it. Each webpage has an alert() popup when launched which runs through the individual controls.

## Optional extensions
Downloaded as-is, the repository will *work*. But it is missing a few assets that can be used to make it more fancy, as described below.

### Fonts
I used Futura, which the program looks for in fonts/futura.ttf. This can be changed in both .css files.

### Audio files
The JavaScript will attempt to play audio files for certain actions. You can choose which ones to use -- but remember that stealing the ones from the show would likely be copyright infringement! The program will look for them in a folder audio/ in the same directory as this README file. You can look at the HTML for the exact filepaths it checks -- and change these if need be -- but they are repeated here. These are all from the root of the repository.

**Head-to-head**

- audio/headtohead/contmoves.ogg: Contestant moves forward
- audio/headtohead/chasermoves.ogg: Chaser moves forward
- audio/headtohead/contwins.ogg: Contestant wins the head-to-head
- audio/headtohead/chaserwins.ogg: Chaser catches contestant in head-to-head

**Final chase**
- audio/finalchase/contanswer.ogg: Contestant gets a correct answer
- audio/finalchase/chaseranswer.ogg: Chaser gets a correct answer
- audio/finalchase/finalchase.ogg: Background music (paused when timer stopped)
- audio/finalchase/stoptheclock.ogg: Clock paused sound effect
- audio/finalchase/pushback.ogg: Chaser pushed back by one space

## Disclaimer
I have never done any web design or JavaScript before, so the code is probably horrible. But it does what it's meant to, I think...
