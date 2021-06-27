- type devserver => Print alias code

- Unix philospohy: Make simple components that do one thing 
well and interoperate with others nicely

- Pokemon example.
    - First create element
    - Show it works
    - Make template
    - Explain tempaltes
    - Add image
    - Connect to Pokemon-api
    - Show with Psyduck or anything rly
    - Nice joke on the `this.getAttribute("")` returning Type: Null -pokemon
    - Show how to reflect attributes to properties
    - Add 3 attributes: pokemon, set, large.
        - Show how to handle boolean attributes and reflection

After showing off the HTML Example, show how fast you can get up and running with lit

- npm init -y
- npm install lit
- Yeah we can also install devserver as Dev Dep.
- npm install -D @web/dev-server

- Copy the pokemon-card.js from previous showcase here. We'll modify that one
- Create a update form for the index.html
- Add Event listeners
- Update the attributes of the pokemon card.
- Showcase property to attribute reflection

- With this card it's quite simple to update the image and such
- Tell how this might have been really simple, but if we were working it
for example a list, or some kind of conditional data, we would be 
in a lot more trouble

- Showcase how we introduce lit-html to the process

- Attribute de-sync, since 2 attributes change
    - Show a simple requestAnimationFrame requestUpdate

- 
