# Guideline
a. **My audience is** beginner-to-intermediate data analysts or developers who want to visualize data in GraphXR without deep coding experience. They are _Data Visualization Enthusiasts_, working at _Kineviz_ or organizations exploring graph analytics.

b. **Their pain point** is that they find the process of loading and preparing graph data too technical and time-consuming.

c. **Because of this**, I'm going to demo: **Using vibe coding with Grove to generate and load graph data into GraphXR** — which will address their pain by **making the process faster, less technical, and more intuitive**.

---

# Demo
Hi! I’m Gustavo, and today I’m going to show you how you can use **Grove** to bring your data into **GraphXR** — even if you’re not a coder.

Let’s say I’ve got this messy dataset about Greek mythology. Right now, it’s just names in a table. Not very exciting, right? I think it would be much cooler if we could see the actual entities, and we can to that!
_show how to add urls manually_

But that's... A lot of work to do individually, right?

That’s where **Grove** comes in. Think of it as a **friendly notebook** that speaks GraphXR’s language. Normally, I’d have to hand-code commands to prepare my graph. But instead, I can just describe what I want in plain English, drop it into an AI like Claude, and Grove takes care of the heavy lifting.

So let's use claude to help us
_put the [[Grove - Vibe Coding Script#Claude Input]] into claude_

Looks like the button it gave me does not have the proper syntax, but no problem! Let's just give it a functional button as an example and try again.
_put the [[Useful Grove Buttons for General Applications]] (WIP) examples_

And there you have it. In just a few simple steps, we’ve transformed messy data into a rich, interactive graph. No complex coding — just plain English and a little help from AI. That’s the power of **vibe coding + Grove + GraphXR**: making your data come alive, fast.

And this is only the beginning. Grove can handle much more — from building complex relationships to automating entire workflows.

If you want to see what else is possible, or just hang out and talk tech, join our [Discord](https://discord.gg/w96TPbgZKe)


--- 
# Claude Input
I'm using Grove, which is like a Jupyter Notebook that uses JavaScript and is "fluent" in the GraphXR API. I need to create a button that adds a "url" property to Entity nodes whose "label" property matches specific names.

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

- Zeus: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F4871485.jpg&f=1&nofb=1&ipt=70d8ab57990e40dcbff12378ac205e4b4d65bf484f86bcc150b14e5fb7344d87
- Athena: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.thegamerimages.com%2Fwordpress%2Fwp-content%2Fuploads%2Fwm%2F2024%2F05%2Fhades2athena.jpg&f=1&nofb=1&ipt=469b728402e1d80814852b030ea22bb5d434b93ca1cb345ae486c83a8f2406bf
- Apollo: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgameluster.com%2Fwp-content%2Fuploads%2F2024%2F05%2FHades-2-Apollo.jpg&f=1&nofb=1&ipt=9272b8a8e319c820e6a5e5b7a3a1a26b6c4aa2a00a6c7e7dc577782afc18eb2f
- Prometheus: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstaticg.sportskeeda.com%2Feditor%2F2024%2F10%2Fb05c8-17297624141807-1920.jpg%3Fw%3D640&f=1&nofb=1&ipt=5ca9ef231bba168c10840d85892f0ed485b55aaad5c0117eab53507a0c1ae6e7
- Hades: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fhades_gamepedia_en%2Fimages%2F0%2F0a%2FFP_Hades.png%2Frevision%2Flatest%3Fcb%3D20181212021114&f=1&nofb=1&ipt=903cd6dec86c701d056e6d5aa4d70d2832018fed4edf3f7aba76bc75fefe88ee
- Poseidon: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F1Eqmr0jzUHA%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=7add2f7300d2f3a5e2912a8a43f47a2d006453564099be41a6e817f6245ac36d
- Artemis: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fjzhwdrpz6na21.jpg&f=1&nofb=1&ipt=57c0b86742ff6438e3c13fe4a2ec8c668d14e8cf7be5e0b108e1929957754847
- Heracles: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FzOEyV_3gwpY%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=ebf2f1615777057203dfdd25afd0418d6162ad5e549a52dd4d28b1677641620f
- Chaos: https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fget.wallhere.com%2Fphoto%2FHades-Game-Supergiant-Games-Chaos-1744837.jpg&f=1&nofb=1&ipt=296977f1bb3359bf3652d09dc036c1fe685fa4ca4c5687139964c69a7ac0386b