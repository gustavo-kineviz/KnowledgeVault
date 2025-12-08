// Node.js script to create complete Obsidian investment database
// Run this in VS Code terminal: node create-complete-database.js

const fs = require('fs');
const path = require('path');

// Define your Dataview folder path - UPDATE THIS PATH
const DATAVIEW_FOLDER = './Dataview'; // Change to your actual Dataview folder path

// Complete file data with all entities and proper links
const files = [
  // Core Companies
  {
    filename: 'TPC Corporation.md',
    content: `---
type: company
category: family_business_conglomerate
generation: 4th_generation
headquarters: Singapore
employees: 9000+
countries: 15
founded: early_1900s
original_business: shipping
current_structure: investment_holding_company
target_return: "5% above US risk-free rate (~10% total)"
large_ticket_size: "300-500M USD"
typical_asia_ticket: "100-200M USD"
guiding_purpose: "To serve the well-being of life and create wealth at the same time"
philosophy: "When I am well, we are well. When we are well, I am well."
recent_focus: real_estate_japan
japan_properties_acquired: 10
japan_timeframe: "last 24 months"
japan_returns: "80% (50-60% capital appreciation + 20% currency)"
decision_making: "based on chairman, difficult to put processes in place"
structure: "everything integrated, can be messy with overlaps"
---

Chairman:: [[Chavalit Frederick Tsao]]
Principal:: [[Niap]]
CIO:: [[Harish]]

Main Groups:: [[IMC Industrial Group]], [[Octave Group]]

Investment Arms:: [[IMC Ventures]], [[OCTAVE Well-being Economy Fund]], [[Heritas Capital]]

Strategic Partners:: [[China Merchants]], [[COSCO]], [[Mitsui]], [[MODEC]], [[Mark Dalio]], [[Andre Hoffmann]], [[Frederic Hoffmann]]

**TPC Corporation** is a fourth-generation family business founded in the early 1900s as a shipping company in Shanghai. Today, it has transformed into a multinational investment holding company with interests in logistics, shipping, impact investment, real estate, and the well-being economy.`
  },
  
  {
    filename: 'Datum Group.md',
    content: `---
type: investment_group
category: long_term_active_investment
philosophy: flexible_agile_long_term
financial_structure: no_debt_strong_cash
track_record: "30+ years"
---

Owner:: [[Jan Haudemann-Andersen]]

Investment Models:: growth_equity, buy_and_build_rollup, constructivism_minority_stakes, early_stage_vc, liquidity_management

Investment Focus:: life_sciences_biotech, health_tech, fintech, edtech, enterprise_software, proptech, consumer_tech, energy_renewables, industrial_automation

Active Investments:: [[Kahoot!]], [[Vaccibody]], [[Techstep]], [[Seen]], [[Base Eiendom]]

Leadership Team:: [[Jan Haudemann-Andersen]], [[Harald Arnet]], [[Kyrre Høidalen]], [[Alexandra Haudemann-Andersen]], [[Magnus Lund-Roland]], [[Nicolai Resch]], [[Carl Gustaf Lenngren]]

**Datum Group** is a long-term, active investment group owned by Jan Haudemann-Andersen, with over 30 years of experience in financial investments.`
  },

  // Key People - TPC
  {
    filename: 'Chavalit Frederick Tsao.md',
    content: `---
type: person
role: chairman
generation: 4th_generation
age: 68
ownership: "100% (bought out siblings)"
author_of: "One Choice, One World"
philosophy: "Eastern philosophy with Western science"
personality: visionary, highly_creative, highly_entrepreneurial, impatient
decision_style: "new ideas every day, inspiration_driven"
public_speaking: loves_publicity, speaker_advocate, writes_books
real_estate: apartment_tokyo_motisando
inspiration_source: "YouTube videos, conferences"
---

Company:: [[TPC Corporation]]
Close Friends:: [[Andre Hoffmann]]
Interactions:: [[Frederic Hoffmann]]
Works With:: [[Mark Dalio]], [[Andre Hoffmann]]

Interests:: well-being_economy, sustainability, human_consciousness
Leadership Positions:: founding_chairman_family_business_network_asia, council_member_family_business_network_international

**Chavalit Frederick Tsao** is the 4th-generation Chairman of TPC Corporation, age 68. He emphasizes the rise of a "well-being and happiness economy" and integrates Eastern philosophy with Western science.`
  },

  {
    filename: 'Niap.md',
    content: `---
type: person
role: principal
age: 56
background: former_temasek
position: "butler for the company"
role_description: right_hand_man
board_role: "sits on board as chairman of most group companies"
willing_to_change: true
patriarch_style: typical_patriarch
process_challenges: "difficult to put in place processes"
challenge: "decision making based on him, needs more professionalization"
---

Company:: [[TPC Corporation]]

Responsibilities:: corporate_functions, investments, finance, business_operations, personal_staff_duties
Personal Services:: property_purchases, art_acquisition, diamond_purchases, general_personal_assistance
Office Amenities:: yoga_room, meditation_room, pilates_room, physiotherapists, tcm_practitioners, private_wellness_dining

**Niap** is the Principal at TPC Corporation, serving as Chairman Frederick Tsao's most trusted person and "butler for the company."`
  },

  {
    filename: 'Harish.md',
    content: `---
type: person
role: cio
title: Chief Investment Officer
tenure: "1-2 years"
previous_role: recently_hired
---

Company:: [[TPC Corporation]]

Focus Areas:: public_equity, hedge_funds, private_equity, venture_capital, strategic_co_investment_opportunities

**Harish** is the Chief Investment Officer at TPC Corporation, responsible for fund investments including public equity, hedge funds, private equity, and venture capital.`
  },

  // Key People - External Network
  {
    filename: 'Jan Haudemann-Andersen.md',
    content: `---
type: person
role: owner_chairman
experience: "40+ years"
background: private_investor_company_founder
approach: active_involvement
connections: wide_international_network
focus: building_global_companies
---

Company:: [[Datum Group]]
Daughter:: [[Alexandra Haudemann-Andersen]]

Specialties:: ma_transactions, ipos, capital_raises, corporate_events

**Jan Haudemann-Andersen** is the Owner & Chairman of Datum Group with 40+ years of experience as a private investor and company founder.`
  },

  {
    filename: 'Stefan Knuser.md',
    content: `---
type: person
specialization: overlay_strategies
location: Singapore
residency: singapore_government_granted
previous_work: european_commodities_family
---

Company:: [[Temasek]]
Potential Connection:: [[TPC Corporation]]

**Stefan Knuser** works with Temasek on overlay strategies and is based in Singapore. He has experience helping European commodities families transition to investment strategies.`
  },

  {
    filename: 'Mark Dalio.md',
    content: `---
type: person
family: ray_dalio_family
location: singapore_frequent_visits
approach: impact_investing
technology_tools: epic_games_engines
---

Organization:: [[Ocean Acts]]

Collaborative Projects:: [[TPC Corporation]], ocean_conservation, nonprofit_foundation_work
Investment Focus:: impact_investing
Co-GP Opportunities:: ocean_fund

**Mark Dalio** is from the Ray Dalio family and works with Ocean Acts. He frequently visits Singapore and collaborates with TPC Corporation on ocean conservation and impact investing projects.`
  },

  {
    filename: 'Andre Hoffmann.md',
    content: `---
type: person
company: roche_pharmaceutical
relationship_to_tpc: close_friend
---

Friend Of:: [[Chavalit Frederick Tsao]]
Son:: [[Frederic Hoffmann]]

Organizations:: family_business_network, council_member_family_business_network_international

**Andre Hoffmann** is associated with Roche Pharmaceutical and is a close friend of Chairman Frederick Tsao. They serve together on Family Business Network councils.`
  },

  {
    filename: 'Frederic Hoffmann.md',
    content: `---
type: person
grew_up: same_area_as_chairman_tsao
activities: skiing_together
availability: cannot_attend_events
---

Father:: [[Andre Hoffmann]]
Interactions With:: [[TPC Corporation]]

**Frederic Hoffmann** is Andre Hoffmann's son who grew up in the same area as Chairman Tsao and has historical connections to the family.`
  },

  // Business Groups
  {
    filename: 'IMC Industrial Group.md',
    content: `---
type: business_group
website: imcindustrialgroup.com
focus: maritime_supply_chain_logistics
---

Parent Company:: [[TPC Corporation]]
Venture Arm:: [[IMC Ventures]]

Key Subsidiaries:: [[Aurora Tankers]], [[IMC Pelita Logistik]], [[Unithai Shipyard & Engineering]], [[Uniwise Offshore]], [[CUEL Limited]]

Strategic Alliances:: [[China Merchants]], [[COSCO]], [[Mitsui]], [[MODEC]]

Maritime Logistics:: dry_bulk_shipping, tankers, project_cargo, chemicals, coal_logistics
Marine Offshore Engineering:: shipbuilding, ship_repair, conversions, offshore_fabrication
Infrastructure:: thailand_largest_shipyard, 730000_sqm_offshore_yard

**IMC Industrial Group** is TPC's traditional industrial pillar focusing on integrated maritime supply chain, industrial logistics, and marine & offshore engineering.`
  },

  {
    filename: 'Octave Group.md',
    content: `---
type: business_group
focus: well_being_transformation
website: octaveinstitute.com
octave_living: real_estate_hospitality
octave_institute: nonprofit_research_consciousness
octave_capital: investment_arm_wellness
---

Parent Company:: [[TPC Corporation]]
Investment Fund:: [[OCTAVE Well-being Economy Fund]]

Key Properties:: SANGHA_Retreat_Suzhou, The_Living_Room_Shanghai, OCTAVE_Institute_Singapore

Investment Areas:: agriculture, food_tech, sustainability, well_being, healthcare_startups, education_platforms
Research Focus:: consciousness, mindfulness, breath_work, meditation, tcm_traditional_chinese_medicine

**Octave Group** represents TPC's well-being and transformation business, integrating lifestyle, wellness, research, and investment activities.`
  },

  // Investment Arms
  {
    filename: 'IMC Ventures.md',
    content: `---
type: investment_arm
focus: maritime_logistics_innovation
stage: "Pre-Series A to Series B"
geographic_focus: "Singapore/SEA, also US and Europe"
mandate: "startups in maritime and logistics innovation"
---

Parent Company:: [[IMC Industrial Group]]

Innovation Areas:: maritime_autonomy, carbon_reduction, cold_chain, transport_software, ai_for_vessels, underwater_vehicles

Portfolio Companies:: [[BeeX]], [[Sea Machines]], [[Everimpact]], [[SWAT Mobility]], [[Fresh Factory]], [[AIDrivers]], [[Motion Ventures]]

**IMC Ventures** is the corporate venture arm of IMC Industrial Group, focusing on startups in maritime and logistics innovation.`
  },

  {
    filename: 'OCTAVE Well-being Economy Fund.md',
    content: `---
type: investment_fund
category: strategic_impact_vc
focus: well_being_economy
approach: impact_investing
return_expectation: "some sacrifice on returns for impact"
partnership_model: co_gp_opportunities
---

Parent Company:: [[Octave Group]]

Investment Areas:: agriculture, food_tech, sustainability, well_being, healthcare

Portfolio Companies:: [[Varaha]], [[Evo Commerce]]

Partnerships:: [[Ocean Acts]], [[Mark Dalio]]

**OCTAVE Well-being Economy Fund** is TPC's strategic impact VC fund investing in agriculture, food tech, sustainability, and well-being sectors.`
  },

  {
    filename: 'Heritas Capital.md',
    content: `---
type: investment_firm
relationship: partnered_investment_arm
website: heritascapital.com
location: Singapore
category: pe_vc
investments_since_2013: ~40
fund_structure: "5 or 6 funds"
total_aum: "~200M USD"
fund_holding_period: "10+ years"
target_returns: "15-20%"
primary_market: Asia
---

Primary Investor:: [[TPC Corporation]]

Investment Focus:: healthcare, education, technology
Themes:: healthy_living, lifelong_learning, smart_platforms
Focus Areas:: asian_impact, inclusive_growth

Notable Portfolio:: Holmusk, Tessa_Therapeutics, mfine, Jio_Health, Alodokter, Pintek

**Heritas Capital** is a Singaporean PE/VC firm with partnership relationship to TPC, focusing on Healthcare, Education, and Technology in Asia.`
  },

  // Portfolio Companies - IMC Ventures
  {
    filename: 'BeeX.md',
    content: `---
type: portfolio_company
business: autonomous_underwater_vehicles
technology: advanced_hauv_systems
---

Investor:: [[IMC Ventures]]

Services:: marine_inspection_analytics

**BeeX** develops advanced autonomous underwater vehicles (HAUVs) for marine inspection and analytics.`
  },

  {
    filename: 'Sea Machines.md',
    content: `---
type: portfolio_company
business: ai_for_vessels
technology: autonomous_marine_vessel_control
---

Investor:: [[IMC Ventures]]

Specialization:: ai_navigation, ship_automation, autonomous_marine_systems

**Sea Machines Robotics** is a pioneering company in autonomous marine vessel control systems, AI navigation, and ship automation.`
  },

  {
    filename: 'Everimpact.md',
    content: `---
type: portfolio_company
business: carbon_measurement
technology: emissions_monitoring_software
---

Investor:: [[IMC Ventures]]

Focus:: carbon_emissions_monitoring, reduction_platforms, cities_industrial_clients

**Everimpact** provides carbon emissions monitoring and reduction software/platform for cities and industrial clients.`
  },

  {
    filename: 'SWAT Mobility.md',
    content: `---
type: portfolio_company
business: ai_routing
technology: ai_driven_vehicle_routing
---

Investor:: [[IMC Ventures]]

Specialization:: demand_responsive_transportation, logistics_optimization, commuter_transport_solutions

**SWAT Mobility** offers AI-driven vehicle routing and demand-responsive transportation for the logistics and commuter sectors.`
  },

  {
    filename: 'Fresh Factory.md',
    content: `---
type: portfolio_company
business: hyperlocal_cold_chain_fulfillment
geographic_focus: southeast_asia
---

Investor:: [[IMC Ventures]]

Specialization:: food_logistics, perishable_supply_chain, cold_chain_solutions

**Fresh Factory** provides hyperlocal cold-chain fulfillment, mainly supporting food and perishable logistics in Southeast Asia.`
  },

  {
    filename: 'AIDrivers.md',
    content: `---
type: portfolio_company
business: ai_autonomous_driving_ports_logistics
---

Investor:: [[IMC Ventures]]

Specialization:: ai_powered_autonomous_driving, port_operations, logistics_sites, industrial_automation

**AIDrivers** specializes in deploying AI-powered autonomous driving for ports, logistics, and industrial sites.`
  },

  {
    filename: 'Motion Ventures.md',
    content: `---
type: portfolio_company
business: strategic_vc_maritime_supply_chain
specialization: maritime_supply_chain_tech_innovation
investment_type: strategic_global_vc_fund
---

Investor:: [[IMC Ventures]]

**Motion Ventures** is a strategic global VC fund for maritime and supply chain tech innovation and adoption.`
  },

  // Portfolio Companies - OCTAVE Fund
  {
    filename: 'Varaha.md',
    content: `---
type: portfolio_company
business: regenerative_agriculture_carbon_credits
---

Investor:: [[OCTAVE Well-being Economy Fund]]

Specialization:: nature_based_solutions, analytics_platforms, verified_carbon_credits, agriculture_focus

**Varaha** builds nature-based solutions and analytics platforms for verified carbon credits in agriculture.`
  },

  {
    filename: 'Evo Commerce.md',
    content: `---
type: portfolio_company
business: affordable_health_beauty_products
location: Singapore
focus: premium_accessible_wellness_beauty_products
---

Investor:: [[OCTAVE Well-being Economy Fund]]

**Evo Commerce** is a Singapore-based creator of premium, accessible wellness and beauty products.`
  },

  // Subsidiaries
  {
    filename: 'Aurora Tankers.md',
    content: `---
type: subsidiary
business: liquid_chemicals_petroleum_transportation
---

Parent Company:: [[IMC Industrial Group]]

Specialization:: worldwide_transportation, liquid_chemicals, petroleum_products, contract_spot_charters

**Aurora Tankers** specializes in the worldwide transportation of liquid chemicals and petroleum products, focusing on contract and spot charters.`
  },

  {
    filename: 'IMC Pelita Logistik.md',
    content: `---
type: subsidiary
website: imcpelitalog.com
location: Indonesia
stock_listing: "PT IMC Pelita Logistik Tbk"
geographic_focus: indonesia_southeast_asia
---

Parent Company:: [[IMC Industrial Group]]

Specialization:: dry_bulk_logistics, sea_transportation, mining_industry, energy_commodities

**IMC Pelita Logistik** is a leading Indonesian logistics firm specializing in dry bulk logistics and sea transportation for the mining, energy, and commodity industries.`
  },

  {
    filename: 'Unithai Shipyard & Engineering.md',
    content: `---
type: subsidiary
website: unithai.com
location: Thailand
distinction: thailand_largest_shipyard
---

Parent Company:: [[IMC Industrial Group]]

Specialization:: ship_repair, ship_conversion, newbuilding, offshore_fabrication
Industries Served:: maritime, oil_gas, related_industries

**Unithai Shipyard & Engineering** is Thailand's largest and most advanced shipyard, offering comprehensive maritime services.`
  },

  {
    filename: 'Uniwise Offshore.md',
    content: `---
type: subsidiary
website: uniwise.co.th
location: Thailand
geographic_focus: gulf_of_thailand
industries_served: oil_gas_operations
---

Parent Company:: [[IMC Industrial Group]]

Specialization:: offshore_support_vessels, towage_services

**Uniwise Offshore** is a leading provider of offshore support vessels and towage services in Thailand.`
  },

  {
    filename: 'CUEL Limited.md',
    content: `---
type: subsidiary
website: cuel.co.th
location: laem_chabang_thailand
infrastructure: major_yard_laem_chabang
---

Parent Company:: [[IMC Industrial Group]]

Specialization:: offshore_oil_gas_engineering, fabrication, installation, maintenance

**CUEL Limited** specializes in offshore oil & gas engineering, fabrication, installation, and maintenance, operating a major yard in Laem Chabang, Thailand.`
  },

  // Strategic Partners
  {
    filename: 'China Merchants.md',
    content: `---
type: strategic_partner
industry: shipping_logistics
partnership_type: strategic_alliance
---

Relationship:: [[TPC Corporation]]

**China Merchants** is a strategic alliance partner of TPC Corporation in shipping and logistics.`
  },

  {
    filename: 'COSCO.md',
    content: `---
type: strategic_partner
industry: shipping_logistics
partnership_type: strategic_alliance
---

Relationship:: [[TPC Corporation]]

**COSCO** is a strategic alliance partner of TPC Corporation in shipping and logistics.`
  },

  {
    filename: 'Mitsui.md',
    content: `---
type: strategic_partner
industry: shipping_logistics
partnership_type: strategic_alliance
---

Relationship:: [[TPC Corporation]]

**Mitsui** is a strategic alliance partner of TPC Corporation in shipping and logistics.`
  },

  {
    filename: 'MODEC.md',
    content: `---
type: strategic_partner
industry: shipping_logistics
partnership_type: strategic_alliance
---

Relationship:: [[TPC Corporation]]

**MODEC** is a strategic alliance partner of TPC Corporation in shipping and logistics.`
  },

  // Datum Group Team
  {
    filename: 'Alexandra Haudemann-Andersen.md',
    content: `---
type: person
role: investment_manager
education: LSE_MSc
---

Company:: [[Datum Group]]
Father:: [[Jan Haudemann-Andersen]]

Previous Experience:: Antler, SEB

**Alexandra Haudemann-Andersen** is an Investment Manager at Datum Group and daughter of Jan Haudemann-Andersen.`
  },

  {
    filename: 'Harald Arnet.md',
    content: `---
type: person
role: ceo
experience: "35+ years"
---

Company:: [[Datum Group]]

Expertise:: finance, investments
Board Positions:: [[Techstep]], [[Base Eiendom]]

**Harald Arnet** is the CEO of Datum Group with 35+ years of experience in finance and investments.`
  },

  {
    filename: 'Kyrre Høidalen.md',
    content: `---
type: person
role: cfo
tenure_datum: "since 2006"
previous_experience: deloitte_auditor
---

Company:: [[Datum Group]]

Locations Worked:: Oslo, London

**Kyrre Høidalen** is the CFO of Datum Group, with the company since 2006 and former Deloitte auditor experience.`
  },

  {
    filename: 'Magnus Lund-Roland.md',
    content: `---
type: person
role: financial_analyst
experience: venture_project_experience
geographic_focus: europe
---

Company:: [[Datum Group]]

**Magnus Lund-Roland** is a Financial Analyst at Datum Group with venture project experience across Europe.`
  },

  {
    filename: 'Nicolai Resch.md',
    content: `---
type: person
role: investment_professional
education: MSc_NHH
---

Company:: [[Datum Group]]

Previous Experience:: Crux_Advisers, Pareto_Securities

**Nicolai Resch** is an Investment Professional at Datum Group with experience at Crux Advisers and Pareto Securities.`
  },

  {
    filename: 'Carl Gustaf Lenngren.md',
    content: `---
type: person
role: investment_professional
---

Company:: [[Datum Group]]

Previous Experience:: Goldman_Sachs, ABG, FSN_Capital
Education:: MSc_NTNU, Harvard

**Carl Gustaf Lenngren** is an Investment Professional at Datum Group with experience at Goldman Sachs, ABG, and FSN Capital.`
  },

  // Datum Group Portfolio
  {
    filename: 'Kahoot!.md',
    content: `---
type: portfolio_company
sector: edtech
involvement_since: 2017
description: educational_technology_platform
stage: public_company
datum_contribution: helped_scale_from_ipo
---

Investor:: [[Datum Group]]

**Kahoot!** is an educational technology platform that Datum Group has been invested in since 2017, helping scale from IPO.`
  },

  {
    filename: 'Vaccibody.md',
    content: `---
type: portfolio_company
sector: biotechnology
involvement_since: 2014
---

Investor:: [[Datum Group]]

Focus:: vaccines, immunotherapies

**Vaccibody** is a biotechnology company focused on vaccines and immunotherapies, with Datum Group investment since 2014.`
  },

  {
    filename: 'Techstep.md',
    content: `---
type: portfolio_company
sector: enterprise_software
---

Investor:: [[Datum Group]]

Services:: digital_workplace_software, managed_mobility_services

**Techstep** provides digital workplace software and managed mobility services.`
  },

  {
    filename: 'Seen.md',
    content: `---
type: portfolio_company
sector: martech
specialization: data_driven_personalized_video_tech
geographic_focus: nordics
market_position: leading_provider
---

Investor:: [[Datum Group]]

**Seen** is a leading provider of data-driven personalized video technology in the Nordics.`
  },

  {
    filename: 'Base Eiendom.md',
    content: `---
type: portfolio_company
sector: real_estate
location: stavanger_norway
type_business: housing_developer
---

Investor:: [[Datum Group]]

**Base Eiendom** is a housing developer based in Stavanger, Norway.`
  },

  // Organizations
  {
    filename: 'Ocean Acts.md',
    content: `---
type: organization
focus: ocean_conservation
conferences: un_ocean_conference
presence: nice_monaco_luxembourg
---

Leader:: [[Mark Dalio]]

Collaborations:: [[TPC Corporation]], nonprofit_foundation_work, impact_investing

**Ocean Acts** is an ocean conservation organization led by Mark Dalio that collaborates with TPC Corporation on environmental and impact investing initiatives.`
  },

  {
    filename: 'Temasek.md',
    content: `---
type: organization
location: Singapore
focus: sovereign_wealth_fund
---

Employee:: [[Stefan Knuser]]

**Temasek** is Singapore's sovereign wealth fund where Stefan Knuser works on overlay strategies.`
  }
];

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Function to create files
function createFiles() {
  // Ensure Dataview directory exists
  ensureDirectoryExists(DATAVIEW_FOLDER);
  
  let successCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(DATAVIEW_FOLDER, file.filename);
    
    try {
      // Check if file already exists
      if (fs.existsSync(filePath)) {
        console.log(`⚠️  File already exists: ${file.filename}`);
        return;
      }
      
      // Write file
      fs.writeFileSync(filePath, file.content, 'utf8');
      console.log(`✅ Created: ${file.filename}`);
      successCount++;
      
    } catch (error) {
      console.error(`❌ Error creating ${file.filename}:`, error.message);
      errorCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`✅ Successfully created: ${successCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Location: ${path.resolve(DATAVIEW_FOLDER)}`);
  console.log(`\n🔗 Complete investment database with ${files.length} interconnected files!`);
  console.log(`\n💡 Sample queries to try:`);
  console.log(`   TABLE Company, Investor FROM "Dataview" WHERE Investor`);
  console.log(`   TABLE "Parent Company", type FROM "Dataview" WHERE "Parent Company"`);
}

// Run the script
createFiles();