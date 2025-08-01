# Create a random Graph


# Create X nodes
Just change **X** for the number of nodes you want
```viewof createNodesButton = Inputs.button("Create X Nodes", {
  reduce: () => {
    const nodes = Array.from({ length: X }, (, i) => ({ id: N${i} }));
    gxr.add(nodes);
  }
})```

