# Investment Database DataviewJS Views

## 1. Investment Portfolio Overview

```dataviewjs
const portfolioCompanies = dv.pages('"Dataview"')
  .where(p => p.type === "portfolio_company");

dv.table(
  ["Company", "Investor", "Sector", "Business"],
  portfolioCompanies.map(p => [
    p.file.link,
    p.Investor || "N/A",
    p.sector || "N/A", 
    p.business || "N/A"
  ])
);
```

## 2. Network Connections Map

```dataviewjs
const people = dv.pages('"Dataview"')
  .where(p => p.type === "person");

dv.table(
  ["Person", "Role", "Company", "Key Connections"],
  people.map(p => [
    p.file.link,
    p.role || "N/A",
    p.Company || p.company || "N/A",
    [p["Works With"], p["Close Friends"], p.Daughter, p.Son].filter(x => x).join(", ") || "N/A"
  ])
);
```

## 3. Investment Arms Comparison

```dataviewjs
const investmentArms = dv.pages('"Dataview"')
  .where(p => p.type === "investment_arm" || p.type === "investment_fund");

dv.table(
  ["Investment Arm", "Focus", "Parent", "Geographic Scope"],
  investmentArms.map(p => [
    p.file.link,
    p.focus || "N/A",
    p["Parent Company"] || "N/A",
    p.geographic_focus || p.primary_market || "N/A"
  ])
);
```

## 4. TPC Corporation Ecosystem

```dataviewjs
const tpcEntities = dv.pages('"Dataview"')
  .where(p => 
    p.Company && p.Company.toString().includes("TPC Corporation") ||
    p["Parent Company"] && p["Parent Company"].toString().includes("TPC Corporation") ||
    p.file.name === "TPC Corporation"
  );

dv.table(
  ["Entity", "Type", "Role/Business", "Connection to TPC"],
  tpcEntities.map(p => [
    p.file.link,
    p.type || "N/A",
    p.role || p.business || p.focus || "N/A",
    p.Company || p["Parent Company"] || "Core Company"
  ])
);
```

## 5. Geographic Presence Analysis

```dataviewjs
const entitiesWithLocation = dv.pages('"Dataview"')
  .where(p => p.location || p.geographic_focus || p.headquarters);

const locationCounts = {};
entitiesWithLocation.forEach(p => {
  const locations = [p.location, p.geographic_focus, p.headquarters]
    .filter(x => x)
    .join(", ");
  
  if (locations) {
    locationCounts[locations] = (locationCounts[locations] || 0) + 1;
  }
});

dv.table(
  ["Location/Region", "Number of Entities"],
  Object.entries(locationCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([location, count]) => [location, count])
);
```

## 6. Key Decision Makers Dashboard

```dataviewjs
const keyPeople = dv.pages('"Dataview"')
  .where(p => p.type === "person" && 
    (p.role === "chairman" || p.role === "ceo" || p.role === "cio" || p.role === "owner_chairman"));

dv.table(
  ["Name", "Role", "Company", "Age/Experience", "Key Relationships"],
  keyPeople.map(p => [
    p.file.link,
    p.role,
    p.Company || p.company || "N/A",
    p.age || p.experience || "N/A",
    [p["Works With"], p["Close Friends"]].filter(x => x).join(", ") || "N/A"
  ])
);
```

