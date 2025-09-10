# Dataview for Obsidian

Dataview is an Obsidian plugin that turns your vault into a database, allowing you to automatically query and display information from your notes.

## When to Use Dataview

**Use dataview** when you want to:

- Automatically collect notes with specific tags or properties
- Create dynamic dashboards that update themselves
- Track tasks, projects, or habits across multiple notes
- Generate automatic indexes or tables of contents
- Build reports from your note metadata

**Don't use dataview** for:

- Simple, static lists (regular markdown is better)
- One-time queries (manual search is faster)
- Notes that rarely change

## Why Use Dataview

- **Saves time**: No manual updating of lists
- **Reduces errors**: Automatically stays current
- **Reveals patterns**: See connections across notes
- **Improves organization**: Creates structure from chaos
- **Enables automation**: Smart workflows for knowledge management

## How Tags Work in Dataview

### Basic Tag Structure

```
#project/work    - Nested tag
#status/active   - Category with value
#priority/high   - Another category
```

### Tag Queries

```dataview
LIST FROM #project/work
LIST FROM #status AND #priority/high
LIST FROM #project AND -#completed
```

**Tag Tips:**

- Use consistent naming conventions
- Create hierarchies with forward slashes
- Combine multiple tags for filtering
- Use `-` to exclude tags

## Writing Dataview Queries

### Basic Structure

````
```dataview
COMMAND FROM source WHERE conditions SORT order
````

````

### Key Components
- **COMMAND**: What type of output (LIST, TABLE, TASK, CALENDAR)
- **FROM**: Which notes to search
- **WHERE**: Conditions to filter results  
- **SORT**: How to order results

### Common Sources
```dataview
FROM "folder"           - Specific folder
FROM #tag              - Notes with tag
FROM [[note]]          - Specific note
FROM "folder" AND #tag - Combination
````
