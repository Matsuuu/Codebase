# Pre-Demo

3 API's:
- Custom Elements API
- Shadow DOM API
- HTML Templates

1. Start off by explaining web components
 
2. Show how easily you can create a normal htmlelement
 
3. Show encapsulation
3.5 Show downfalls of shadow dom. Forms etc.
 
4. Show slots
  
5. Show named slots
  
6. Show templates
 
7. Showcase importing with just 2 lines of HTML (twitch-stream for example)

8. Showcase document.createElement

9. Host styling and the fact that you have your own component and not a div


# Starting Vanillademo
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

# Moving into lit html demo

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

# Moving into LitElement Demo

- Start introducing LitElement
- Show how much we can just remove from the code
- Show how nice the render method becomes
- Introduce properties

- Introcude a enlarge checkbox
- Make it change the this.large property
- Show property reflection
- Make it so that the index.html manages size on attributes and not the element
    - img: width: 100%;

- Show off the power of lit-html with ?checked on the checkbox on top of the
previously shown @click

- Create a pokemon-card-showcase -element that lists all pokemons with given name
- Show off how fast it is to create a new lit element, and how fast you can
get the data, iterate through it and display it
- Modify the pokemon-card with a "fetchCard" -flag that is default false
    - Disable fetch on update if set to false

- Show off how effective lit-html is with arrays of nodes: Only updates the attributes, and 
doesn't re-render the whole list

- Filter, opacity etc do cool shit
- On mouseenter and mouseleave launch event that makes all others opaque

- I don't know if we have time for more.

- Explain that this was JUST A SURFACE TOUCH.
THERES SO MUCH MORE

Other cool stuff if we have time:
