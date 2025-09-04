# Guideline
a. **My audience is** beginner-to-intermediate data analysts or developers who want to visualize data in GraphXR without deep coding experience. They are _Data Visualization Enthusiasts_, working at _Kineviz_ or organizations exploring graph analytics.

b. **Their pain point** is that they find the process of loading and preparing graph data too technical and time-consuming.

c. **Because of this**, I'm going to demo: **Using vibe coding with Grove to generate and load graph data into GraphXR** — which will address their pain by **making the process faster, less technical, and more intuitive**.

---

# Demo
Hi! I’m Gustavo, and today I’m going to show you how you can use **Grove** to bring your data into **GraphXR** — even if you’re not a coder.

Let’s say I’ve got this messy dataset about Greek mythology. Right now, it’s just names in a table. Not very exciting, right? I think it would be much cooler if we could see the actual entities, and we can to that!

That’s where **Grove** comes in. Think of it as a **friendly notebook** that speaks GraphXR’s language. Normally, I’d have to hand-code commands to prepare my graph. But instead, I can just describe what I want in plain English, drop it into an AI like Claude, and Grove takes care of the heavy lifting.

So let's use claude to help us
_put the [[Grove - Vibe Coding Script#Claude Input]] into claude_

Looks like the button it gave me does not have the proper syntax, but no problem! Let's just give it a functional button as an example and try again.
_put the [[Useful Grove Buttons for General Applications]] (WIP) examples_

And there you have it. In just a few simple steps, we’ve transformed messy data into a rich, interactive graph. No complex coding — just plain English and a little help from AI. That’s the power of **vibe coding + Grove + GraphXR**: making your data come alive, fast.

And this is only the beginning. Grove can handle much more — from building complex relationships to automating entire workflows.

If you want to see what else is possible, or just hang out and talk about data visualization and technology news, join our [Discord](https://discord.gg/w96TPbgZKe). The link will the in the description.


--- 
# Claude Input
I'm using Grove, which is like a Jupyter Notebook that uses JavaScript and is "fluent" in the GraphXR API. I need to create a button that adds a "url" property to Entity nodes whose "label" property matches specific names.

Attached we have GraphXR's API for reference

Here's a working example from my Grove notebook showing the correct syntax patterns:
```javascript
// This is how we get nodes and iterate through them:
gxr.nodes({category: "Entity"}).forEach(node => {
   const label = node.properties.label;
   // Direct property assignment works like this:
   node.properties.someProperty = "someValue";
});
```
Please create a button that adds URL properties to these entities:

- Zeus: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-zeus.jpg
- Athena: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-athena.jpg
- Hades: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-hades.jpg
- Poseidon: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-poseidon.jpg
- Artemis: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-artemis.jpg
- Chaos: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-chaos.jpg
- Hydra: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic0.gamerantimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2021%2F06%2Fhades-lernie-the-bone-hydra.jpg&f=1&nofb=1&ipt=2708e69cdb2f7bc7191e3ab02d96d521bc374d00c8709ad290f5ec7fe2dbbab0
- Theseus: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-theseus.jpg
- Medusa: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-dusa.jpg
- Minotaur: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-asterius.jpg
- Cerberus: https://www.pockettactics.com/wp-content/sites/pockettactics/2022/06/hades-characters-cerberus.jpg