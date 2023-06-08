---
id: gby47omg
title: Marmaid draft
file_version: 1.1.2
app_version: 1.9.11
---

<!--MERMAID {width:25}-->
```mermaid
stateDiagram-v2
[\*] --> Still
Still --> [\*]
Still --> `System.Linq`
Moving --> Still
Moving --> `get`
Crash --> [\*]

```
<!--MCONTENT {content: "stateDiagram-v2<br/>\n\\[\\*\\] \\-\\-\\> Still<br/>\nStill \\-\\-\\> \\[\\*\\]<br/>\nStill \\-\\-\\> `System.Linq`<swm-token data-swm-token=\":repositories/TreatmentRepository.cs:3:2:4:`using System.Linq;`\"/><br/>\nMoving \\-\\-\\> Still<br/>\nMoving \\-\\-\\> `get`<swm-token data-swm-token=\":repositories/TreatmentRepository.cs:12:1:1:`            get { return Context as MyContext; }`\"/><br/>\nCrash \\-\\-\\> \\[\\*\\]<br/>\n<br/>"} --->

<br/>

<!--MERMAID {width:50}-->
```mermaid
classDiagram
Animal <|-- Duck
Animal <|-- Fish
Animal <|-- Zebra
Animal : +int age
Animal : +String gender
Animal: +isMammal()
Animal: +mate()
class Duck{
+String beakColor
+swim()
+quack()
}
class Fish{
\-int sizeInFeet
\-canEat()
}
class Zebra{
+bool is\_wild
+run()
}

```
<!--MCONTENT {content: "classDiagram<br/>\nAnimal <|-- Duck<br/>\nAnimal <|-- Fish<br/>\nAnimal <|-- Zebra<br/>\nAnimal : +int age<br/>\nAnimal : +String gender<br/>\nAnimal: +isMammal()<br/>\nAnimal: +mate()<br/>\nclass Duck{<br/>\n+String beakColor<br/>\n+swim()<br/>\n+quack()<br/>\n}<br/>\nclass Fish{<br/>\n\\-int sizeInFeet<br/>\n\\-canEat()<br/>\n}<br/>\nclass Zebra{<br/>\n+bool is\\_wild<br/>\n+run()<br/>\n}<br/>\n<br/>"} --->

<br/>

This file was generated by Swimm. [Click here to view it in the app](http://localhost:5001/repos/Z2l0aHViJTNBJTNBY3NoYXJwLXNoYXVsLXRlc3QlM0ElM0Fzd2ltbWlv/docs/gby47omg).