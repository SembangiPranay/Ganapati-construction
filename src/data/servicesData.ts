export interface ServiceDetail {
  id: string
  number: string
  title: string
  shortDescription: string
  fullDescription: string
  heroImage: string
  badgeColor: 'green' | 'red'
  tagline: string
  capabilities: {
    title: string
    description: string
  }[]
  machineryEquipment: string[]
  qualitySafety: string[]
  applications: string[]
  specifications: {
    label: string
    value: string
  }[]
}

export const companyProfile = {
  name: 'S GANAPATI CONSTRUCTION',
  legalName: 'S Ganapati Construction',
  proprietor: 'Garaka Sreedevi',
  phonePrimary: '94417 71333',
  phoneSecondary: '90320 79333',
  gstin: '37DIPPG2975E1ZX',
  email: 'sganapati1585@gmail.com',
  address: {
    doorNo: '11-30/27, F-no.303',
    building: 'GSN Towers',
    colony: 'Bhagath Singh Nagar, Yellapuvanipalem',
    area: 'Gopalapatnam, Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '530027',
    full: '11-30/27, F-no.303, GSN Towers, Bhagath Singh Nagar, Yellapuvanipalem, Gopalapatnam, Visakhapatnam, Andhra Pradesh - 530027',
  },
  slogan: 'Engineering Excellence in Steel Infrastructure',
  tagline: 'Specialists: Structural Fabrications, Erection, Heavy Equipment Works',
  metrics: {
    projects: '1000+ Projects Executed',
    professionals: '50+ Certified Professionals',
    safety: 'OHSAS 18001 Certified Standards',
    quality: 'International Quality Standards',
  },
}

export const servicesData: ServiceDetail[] = [
  {
    id: 'structural-works',
    number: '01',
    title: 'Structural Works',
    shortDescription: 'Industrial steel frameworks, technological structures, process buildings, and support systems.',
    tagline: 'Comprehensive structural engineering and fabrication for large-scale industrial complexes.',
    heroImage: '/assets/industrial-crane-site.jpg',
    badgeColor: 'green',
    fullDescription:
      'S Ganapati Construction specializes in large-scale structural works across steel plants, cement plants, material handling facilities, and power infrastructure. We deliver end-to-end solutions spanning engineering review, material sourcing, structural framing, and integrated site assembly with strict dimensional tolerances and safety compliance.',
    capabilities: [
      {
        title: 'Industrial Plant Steel Framework',
        description: 'Design verification and heavy structural construction for blast furnaces, rolling mill bays, melt shops, and technological process structures.',
      },
      {
        title: 'Overhead Pipe Racks & Utility Gantries',
        description: 'Multi-tier modular pipe racks, steam line supports, and technological utility bridges across live industrial operating zones.',
      },
      {
        title: 'High-Bay Industrial Buildings & Sheds',
        description: 'Heavy portal frameworks, crane runway systems, roof trusses, and purlins for manufacturing facilities and high-capacity warehouses.',
      },
      {
        title: 'Process Towers & Technological Platforms',
        description: 'Multi-level staircase towers, operating platforms, catwalks, and furnace auxiliary frameworks adhering to IS 800 standards.',
      },
    ],
    machineryEquipment: [
      'Heavy Mobile & Crawler Cranes (50T to 250T)',
      'Total Stations & Digital Optical Theodolites',
      'Hydraulic Torque Wrenches for HSFG Bolting',
      'Multi-Operator Welding Rectifiers & Inverters',
      'Articulated Boom Lifts & High-Capacity Modular Scaffolding',
    ],
    qualitySafety: [
      '100% adherence to OHSAS 18001 Occupational Health & Safety Management System',
      'Laser alignment and survey checks at every milestone elevation',
      'Mill test certificate (MTC) traceability for all structural steel members',
      'JSW-Dolvi Model emergency response and hazard mitigation protocols',
    ],
    applications: [
      'Integrated Steel Plants & Metallurgical Facilities',
      'Thermal & Hydroelectric Power Stations',
      'Cement Plants & Material Handling Corridors',
      'Chemical & Petrochemical Industrial Units',
    ],
    specifications: [
      { label: 'Standard Adherence', value: 'IS 800, IS 2062, AISC Code of Practice' },
      { label: 'Erection Capacity', value: 'Single elements up to 80+ MT, heights to 90m' },
      { label: 'Bolting Grade', value: 'HSFG Grade 8.8 & 10.9 (IS 3757, IS 4000)' },
      { label: 'Quality Audit', value: 'Third-party inspection (EIL, TUV, BV, DNV, CEIL)' },
    ],
  },
  {
    id: 'fabrication-works',
    number: '02',
    title: 'Fabrication Works',
    shortDescription: 'Precision fabrication of structural steel components, built-up girders, and bulk handling vessels.',
    tagline: 'High-tolerance fabrication with automatic submerged arc welding and certified NDT testing.',
    heroImage: '/assets/welding-sparks.jpg',
    badgeColor: 'red',
    fullDescription:
      'Operating equipped fabrication yards with automated cutting, submerged arc welding, and plate bending, we fabricate heavy built-up plate girders, box columns, storage bins, chutes, and hoppers engineered for high mechanical stress, vibration, and harsh thermal environments.',
    capabilities: [
      {
        title: 'Heavy Built-up Beams & Box Columns',
        description: 'Automatic submerged arc welding (SAW) fabrication of crane girders, columns, and heavy box sections to precise camber and sweep.',
      },
      {
        title: 'Storage Bins, Silos, Chutes & Hoppers',
        description: 'Wear-resistant plate fabrication of coal hoppers, limestone bins, iron ore discharge chutes, and bulk storage silos.',
      },
      {
        title: 'Conveyor Galleries & Transfer Towers',
        description: 'Long-span technological truss galleries, junction houses, and conveyor support structures for bulk material handling systems.',
      },
      {
        title: 'Pre-Engineered Building (PEB) Structural Members',
        description: 'Fabrication of tapered columns, rafter sections, cold-formed purlins, and industrial canopies.',
      },
    ],
    machineryEquipment: [
      'Automatic Submerged Arc Welding (SAW) Stations',
      'CNC Oxy-Fuel & High-Definition Plasma Profile Cutters',
      'Heavy Hydraulic Plate Shearing & Beveling Machines (up to 40mm)',
      'Hydraulic Plate Bending Rolls & Profile Presses',
      'Heavy Radial Arm Drilling & Magnetic Core Drill Units',
      'Shot/Grit Blasting & Protective Airless Coating Bays',
    ],
    qualitySafety: [
      '100% Non-Destructive Testing (NDT): UT, MPI, DPT, and Radiography as per QAP',
      'WPS & PQR certified under ASME Section IX and AWS D1.1',
      'Dimensional tolerance verification compliant with IS 7215',
      'Surface finish to Sa 2.5 profile with Dry Film Thickness (DFT) testing',
    ],
    applications: [
      'Steel Melt Shops & Blast Furnaces',
      'Cement Clinker Storage & Raw Material Handling',
      'Thermal Power Plant Coal Handling Plants (CHP)',
      'Port Bulk Cargo Terminals & Mineral Processing',
    ],
    specifications: [
      { label: 'Monthly Capacity', value: '400 – 600+ Metric Tons' },
      { label: 'Plate Thickness', value: 'Up to 80mm heavy structural plates' },
      { label: 'Steel Grades', value: 'IS 2062 E250 / E350 / E450, ASTM A36' },
      { label: 'Surface Preparation', value: 'Sa 2.5 Shot Blasting + High-Build Epoxy' },
    ],
  },
  {
    id: 'erection-works',
    number: '03',
    title: 'Erection Works',
    shortDescription: 'High-altitude lifting, precision alignment, and erection of prefabricated steel structures.',
    tagline: 'Disciplined high-altitude erection: "Engineered Lifting. Controlled Erection. Assured Stability."',
    heroImage: '/assets/crane-high-lift.jpg',
    badgeColor: 'green',
    fullDescription:
      'We carry out the safe lifting, positioning, and erection of prefabricated steel structures for industrial buildings, process towers, and plant support systems. Our certified rigging crews, heavy crane fleet, and experienced site engineers ensure precision structural alignment with an uncompromising safety record.',
    capabilities: [
      {
        title: 'High-Rise Industrial Framework Erection',
        description: 'Sequential erection of furnace structures, boiler frameworks, and technological towers reaching heights over 90 meters.',
      },
      {
        title: 'Crane & Heavy Lifting Operations',
        description: 'Engineered lift planning with tower cranes, crawler cranes, and heavy hydraulic cranes featuring boom extensions for long-reach placement.',
      },
      {
        title: 'Skilled Rigging & Load Balancing',
        description: 'Dedicated rigging crews specialized in center-of-gravity calculations, multi-crane tandem lifts, and high-altitude load stabilization.',
      },
      {
        title: 'Crane Runway & Gantry Girder Erection',
        description: 'Precision installation and millimeter leveling of heavy overhead EOT crane runways, surge girders, and guide rails.',
      },
    ],
    machineryEquipment: [
      'Tower Cranes, Heavy Crawler & Mobile Hydraulic Cranes',
      'High-Capacity Hydraulic Winches & Derricks',
      'Electronic Total Stations & Laser Leveling Aligners',
      'Calibrated Hydraulic & Manual Torque Wrenches',
      'Articulated Boom Lifts & Overhead Lifeline Systems',
    ],
    qualitySafety: [
      'Comprehensive Job Safety Analysis (JSA) and daily Tool Box Talks (TBT)',
      '100% Dual-Lanyard Safety Harness tie-off with static lifeline systems',
      'Continuous crane outrigger load ground testing and wind speed monitoring',
      'Strict compliance with OHSAS 18001 standards and client safety codes',
    ],
    applications: [
      'Industrial Sheds & High-Bay Workshops',
      'Steel Plant Technological Towers & Furnaces',
      'Bulk Material Handling Conveyor Galleries',
      'Thermal Power Plant Boiler Supporting Structures',
    ],
    specifications: [
      { label: 'Max Erection Elevation', value: '90+ meters' },
      { label: 'Tandem Lift Capacity', value: '100+ Metric Tons single lift' },
      { label: 'Alignment Precision', value: 'Complies with IS 12843 & AISC norms' },
      { label: 'Site Safety Record', value: 'Zero Lost-Time Incidents (LTI)' },
    ],
  },
  {
    id: 'equipment-installation',
    number: '04',
    title: 'Equipment Installation',
    shortDescription: 'Mechanical assembly, heavy positioning, and precision installation of industrial machinery.',
    tagline: 'Precision mechanical installation of rotary equipment, mills, gearboxes, and overhead cranes.',
    heroImage: '/assets/gearbox-assembly.jpg',
    badgeColor: 'red',
    fullDescription:
      'S Ganapati Construction provides comprehensive mechanical installation for industrial machinery, including reduction gearboxes, rotary mills, conveyors, bucket elevators, and rolling mill machinery. We deploy laser alignment tools and non-shrink grouting to ensure vibration-free, long-term operational reliability.',
    capabilities: [
      {
        title: 'Heavy Rotary Equipment Assembly',
        description: 'Rigging, placing, and aligning ball mills, cement kilns, cooler assemblies, rotary dryers, and heavy industrial drives.',
      },
      {
        title: 'Overhead EOT & Gantry Cranes',
        description: 'Complete mechanical erection, crab trolley placement, electrical festooning, and dynamic load testing for industrial cranes.',
      },
      {
        title: 'Rolling Mill & Wire Rod Mill (WRM) Machinery',
        description: 'Precision installation of roughing stands, intermediate stands, finishing blocks, pinch rolls, and laying heads.',
      },
      {
        title: 'Bulk Material Handling Bucket Elevators',
        description: 'High-lift bucket elevator erection, boot-and-head casing alignment, internal chain/belt installation, and drive testing.',
      },
    ],
    machineryEquipment: [
      'Multi-Axle Heavy Haulage & Hydraulic Skidding Units',
      'Hydraulic Jacks (10T to 200T) with Multi-Point Manifolds',
      'Laser Shaft Alignment Systems & Dial Run-Out Indicators',
      'High-Pressure Grout Pumps for Non-Shrink Foundation Grouting',
      'Certified Heavy-Duty Slings, Spreader Beams & D-Shackles',
    ],
    qualitySafety: [
      'Engineered lift plans with exact center-of-gravity (CoG) verification',
      'Shaft run-out and coupling alignment within 0.04 mm tolerance',
      'High-strength non-shrink epoxy and cementitious baseplate grouting',
      'Pre-commissioning no-load run testing and baseline vibration reports',
    ],
    applications: [
      'Steel Plants: Wire Rod Mills, Rolling Mills, SMS Bays',
      'Cement Plants: Raw Mills, Cement Mills, Clinker Coolers',
      'Thermal Power: Turbines, ID/FD Fans, Condensers',
      'Mining: Heavy Primary Crushers, Screens & Feeders',
    ],
    specifications: [
      { label: 'Single Equipment Lift', value: 'Up to 120+ MT individual weight' },
      { label: 'Shaft Alignment Tolerance', value: 'Within 0.04 mm using laser tools' },
      { label: 'Grouting Standard', value: 'High-early-strength non-shrink epoxy' },
      { label: 'Compliance Code', value: 'ASME B30 & OEM installation manuals' },
    ],
  },
  {
    id: 'maintenance-services',
    number: '05',
    title: 'Maintenance Services',
    shortDescription: 'Industrial maintenance, bearing fitting, gearbox overhauling, and hydraulic/pneumatic piping.',
    tagline: 'Planned turnaround maintenance, precision alignment, and emergency shutdown support.',
    heroImage: '/assets/pipe-rigging.jpg',
    badgeColor: 'green',
    fullDescription:
      'We provide specialized industrial plant maintenance and alignment services designed to maximize equipment uptime and prevent costly operational failures. Our mechanical maintenance teams handle bearing fitting, heavy gearbox overhauling, conveyor belt setup, and high-pressure hydraulic and pneumatic pipeline installation during planned plant shutdowns.',
    capabilities: [
      {
        title: 'Precision Bearing Fitting & Replacement',
        description: 'Hot oil bath / induction heating fitting of heavy spherical roller bearings, cylindrical bearings, and journal bearings.',
      },
      {
        title: 'Gearbox Overhauling & Replacement',
        description: 'Disassembly, inspection, gear tooth backlash checking, seal replacement, and re-alignment of heavy reduction gearboxes.',
      },
      {
        title: 'Conveyor & Belt System Setup',
        description: 'Idler frame alignment, pulley vulcanization, belt tensioning, take-up counterweight calibration, and chute liner maintenance.',
      },
      {
        title: 'Hydraulic & Pneumatic Pipeline Installation',
        description: 'Fabrication, chemical pickling, flushing, and high-pressure hydrostatic testing of industrial hydraulic power pack lines.',
      },
    ],
    machineryEquipment: [
      'Induction Bearing Heaters & Hydraulic Bearing Pullers',
      'Mechanical Torque Multipliers & Impact Wrenches',
      'Digital Dial Indicators & Vibration Measurement Meters',
      'High-Pressure Hydrostatic Test Pumps & Nitrogen Purging Gear',
      'Heavy Pipe Bending & High-Pressure Orbital TIG Welding Sets',
    ],
    qualitySafety: [
      'Permit-to-Work (PTW) protocols: Lock-Out / Tag-Out (LOTO) enforcement',
      'Hydrostatic pressure testing at 1.5x design pressure with safety relief',
      'Bearing clearance checks recorded against OEM tolerance charts',
      'Daily safety auditing under OHSAS 18001 standards',
    ],
    applications: [
      'Steel Plant Continuous Casting & Rolling Mill Turnarounds',
      'Cement Plant Kiln & Mill Annual Overhauls',
      'Bulk Material Handling Conveyor Re-Belting & Alignment',
      'Process Plant High-Pressure Hydraulic Maintenance',
    ],
    specifications: [
      { label: 'Pipeline Pressure Rating', value: 'Up to 350 bar hydrostatic testing' },
      { label: 'Turnaround Capacity', value: 'Round-the-clock 24/7 shutdown crews' },
      { label: 'Alignment Standard', value: 'Laser optical shaft & pulley alignment' },
      { label: 'Safety Permit System', value: 'Strict LOTO and Confined Space Permits' },
    ],
  },
  {
    id: 'commissioning-works',
    number: '06',
    title: 'Commissioning & Specialized Machinery',
    shortDescription: 'Coke oven & CDQ systems, launching gantries, and Raw Material Handling System (RMHS) commissioning.',
    tagline: 'Specialized industrial commissioning, battery equipment alignment, and launching gantry erection.',
    heroImage: '/assets/coke-oven-machinery.jpg',
    badgeColor: 'red',
    fullDescription:
      'We excel in specialized industrial machinery erection, precision battery equipment alignment, and commissioning for complex metallurgical and infrastructure works. From Coke Oven Stamping-Charging-Pushing (SCP) cars and Coke Dry Quenching (CDQ) systems to Segmental Launching Gantries and RMHS conveyor networks, we ensure seamless operational handover.',
    capabilities: [
      {
        title: 'Coke Oven & CDQ System Equipment',
        description: 'Erection, alignment, and commissioning of Coke Pusher Machines, Stamping Charging Cars, and Coke Dry Quenching chambers & duct systems.',
      },
      {
        title: 'Launching Gantry & Heavy Bridge Segment Erection',
        description: 'Installation of segmental launching gantry systems, guide rail platforms, gantry car marching systems, and hydraulic lifting modules.',
      },
      {
        title: 'Battery Equipment Precision Alignment',
        description: 'Micro-alignment using optical lasers and heavy-duty positioning tools to guarantee long-term operational reliability.',
      },
      {
        title: 'RMHS Belt Conveyor Network Commissioning',
        description: 'Continuous raw material movement setup, tower crane boom erection, drive commissioning, and interlock trial runs.',
      },
    ],
    machineryEquipment: [
      'Segmental Launching Gantry Systems with Hydraulic Walking Modules',
      'Heavy Rail Alignment & Precision Survey Theodolites',
      'Coke Oven Battery Guide Rail Installation Tools',
      'Tower Crane Booms & High-Rigidity Rigging Sets',
      'Dynamic Balancing Instruments & Load Monitoring Cells',
    ],
    qualitySafety: [
      'Full pre-commissioning dry runs and sequential interlock verification',
      'Confined space smart surveillance monitoring during CDQ duct works',
      'Contractor Safety Code enforcement with daily supervisor sign-offs',
      'Zero-compromise safety protocols verified under JSW-Dolvi Model',
    ],
    applications: [
      'Coke Oven Batteries & CDQ Plants in Metallurgical Complexes',
      'Highway & Elevated Metro Segmental Launching Bridges',
      'Raw Material Handling Systems (RMHS) in Ports & Steel Plants',
      'Specialized Process Chemical & Mineral Refining Plants',
    ],
    specifications: [
      { label: 'Machinery Types', value: 'Coke Pusher, SCP Cars, CDQ Ducts, Launching Gantries' },
      { label: 'Conveyor Networks', value: 'RMHS Belt Conveyors up to 2,500 TPH capacity' },
      { label: 'Alignment Precision', value: 'Sub-millimeter guide rail tolerance' },
      { label: 'Handover Protocol', value: 'Full trial run & commercial commissioning sign-off' },
    ],
  },
]

export const projectsData = [
  {
    id: '01',
    title: 'Wire Rod Mill (WRM) Equipment Assembly',
    location: 'Industrial Steel Complex, AP',
    client: 'Integrated Steel Plant Facility',
    category: 'Equipment Installation',
    image: '/assets/gearbox-assembly.jpg',
    scope: 'Complete mechanical assembly, alignment, and foundation setting for reduction gearboxes, mill stands, pinch rolls, and drive motors.',
    metrics: ['Precision Laser Alignment', '0.04mm Tolerance', 'Commissioned on Schedule'],
  },
  {
    id: '02',
    title: 'Coke Oven SCP Car & CDQ System Installation',
    location: 'Metallurgical Complex, South India',
    client: 'Major Steel Manufacturer',
    category: 'Commissioning & Specialized Machinery',
    image: '/assets/coke-oven-machinery.jpg',
    scope: 'Assembly, rail alignment, and mechanical erection of Coke Pusher Machines, Stamping Charging Cars, and Coke Dry Quenching ducts.',
    metrics: ['Coke Oven SCP Cars', 'CDQ Chamber Ducts', 'Zero-Incident Delivery'],
  },
  {
    id: '03',
    title: 'RMHS Raw Material Handling Conveyor Network',
    location: 'Visakhapatnam, Andhra Pradesh',
    client: 'Bulk Material Handling Terminal',
    category: 'Structural Works',
    image: '/assets/rmhs-conveyor-network.jpg',
    scope: 'Turnkey fabrication and high-altitude erection of long-span conveyor galleries, transfer towers, junction houses, and take-up towers.',
    metrics: ['2,500 TPH Capacity', '45m High Galleries', 'Sa 2.5 Blasted & Coated'],
  },
  {
    id: '04',
    title: 'Heavy Crane Lifting & Technological Structure Erection',
    location: 'Industrial Infrastructure Project',
    client: 'Heavy Engineering Complex',
    category: 'Erection Works',
    image: '/assets/crane-high-lift.jpg',
    scope: 'Crane and heavy lifting operations using crawler and tower cranes for prefabricated steel structures, furnace frames, and vessel placements.',
    metrics: ['100+ MT Single Lifts', 'Tower & Crawler Cranes', '100% Lifeline Compliance'],
  },
  {
    id: '05',
    title: 'Bucket Elevator Erection for Bulk Material Handling',
    location: 'Cement & Mineral Processing Facility',
    client: 'Industrial Processing Plant',
    category: 'Equipment Installation',
    image: '/assets/rotary-bucket-wheel.jpg',
    scope: 'Vertical bucket elevator erection, boot-and-head casing alignment, internal chain/belt installation, and drive tensioning tests.',
    metrics: ['High-Lift Vertical Units', 'Heavy Duty Drive Setup', 'Trial Run Tested'],
  },
  {
    id: '06',
    title: 'Heavy Segmental Launching Gantry & Bridge Modules',
    location: 'Infrastructure Corridor',
    client: 'Bridge & Infrastructure Authority',
    category: 'Commissioning & Specialized Machinery',
    image: '/assets/heavy-platform-skid.jpg',
    scope: 'Installation and testing of Segmental Launching Gantry systems including guide rail platforms, marching systems, and hydraulic lifting modules.',
    metrics: ['Hydraulic Walking Modules', 'Guide Rail Platforms', 'Precision Load Tested'],
  },
]

export const safetyCertifications = [
  {
    title: 'OHSAS 18001 Certified Standards',
    description: 'All manufacturing, fabrication yards, and project sites comply with the OHSAS 18001 Occupational Health & Safety Management System.',
    icon: 'shield',
  },
  {
    title: 'JSW-Dolvi Emergency Response Model',
    description: 'On-site emergency response plans, hazard identification, risk mitigation, and site safety protocols modeled after industry benchmarks.',
    icon: 'helmet',
  },
  {
    title: 'Smart Surveillance & PPE Monitoring',
    description: 'Smart surveillance cameras deployed for confined spaces and restricted areas, combined with automated PPE compliance enforcement.',
    icon: 'target',
  },
  {
    title: 'Contractor Safety Code Enforcement',
    description: 'Strict site supervision, daily Tool Box Talks (TBT), permit-to-work systems (PTW/LOTO), and continuous third-party safety audits.',
    icon: 'document',
  },
]

export const trainingTopics = [
  'Introduction to Lifting Tools & Tackles',
  'Types of Cranes, Hoists & Rigging Systems',
  'Industry Standards & Legal Regulations',
  'Risk Assessment & Job Safety Analysis (JSA)',
  'Load Calculation & Safe Load Handling',
  'Equipment Fitness Inspection Procedures',
  'Safe Operation & Team Coordination',
  'Sling Selection & Rigging Practices',
]
