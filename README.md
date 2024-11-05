# OpenhabSVG
Create a Dynamic SVG Representation
I got the idea from Word, where it is possible to add icons and later assign color attributes to them. I wanted to illustrate changes in temperature in my boiler and ultimately my entire house heating system. Currently, the repository includes three elements for you to use:

1) Item Definitions
   Files for controlling the colors/items located at items/SVG.items.
2) Representation of the Image In HTML
   Located at html/boiler.html.
4) Script for Updating the Item:
   Located at automation/js/boilerSVG.js
   this script will alter the url of the boiler.html with new attributes corresponding to the actual boiler temperature like so:
   ```
   "boiler.html?offset1=25%&offset2=100%&color1=red&color2=blue"
   ```
6) Lastly you will need to create an widget like so:
  a) navigate to the navigate to the dashboard and goto Development tools
  b) select widgets
  c) create new widget and paste below code in:
```

uid: BoilerWidget
tags: []
props:
  parameters: []
  parameterGroups: []
timestamp: Nov 4, 2024, 9:48:24 PM
component: oh-webframe-card
config:
  src: =items.BoilerURL.state
  height: 400
  title: Boiler
  footer: =items.BoilerLEVEL.state + '% ~' + items.BoilerTemperature.state + ' C°'
  borders: true
```
And for Buffer:
```
uid: BufferWidget
tags: []
props:
  parameters: []
  parameterGroups: []
timestamp: Nov 4, 2024, 9:48:24 PM
component: oh-webframe-card
config:
  src: =items.BufferURL.state
  height: 400
  title: Boiler
  footer: =items.BufferLEVEL.state + '% ~' + items.BufferTemperature.state + ' C°'
  borders: true
```

Please note that I am by no means a professional in this field, but I am eager to learn! (-; This project might end up in the trash bin, but let's see what happens.
Try it out it is a lot of fun and has great potential
if you create som cool svg blocks then share 
