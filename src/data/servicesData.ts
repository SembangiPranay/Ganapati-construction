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

export const servicesData: ServiceDetail[] = [
  {
    id: 'structural-fabrication',
    number: '01',
    title: 'Structural Fabrication',
    shortDescription: 'Fabrication of structural steel components for industrial applications.',
    tagline: 'High-tolerance engineering and precision steel fabrication for heavy industries.',
    heroImage: '/assets/welding.jpg',
    badgeColor: 'green',
    fullDescription:
      'S Ganapati Construction provides comprehensive structural steel fabrication services tailored to heavy industrial infrastructure. Operating with certified welding procedures and stringent quality management, we manufacture structural members designed to withstand heavy dynamic loads, extreme operational conditions, and corrosive industrial environments.',
    capabilities: [
      {
        title: 'Heavy Industrial Built-up Beams & Girders',
        description: 'Fabrication of plate girders, crane runway beams, box columns, and lattice trusses engineered to exact design specifications.',
      },
      {
        title: 'Technological & Process Structures',
        description: 'Complex steel framework for blast furnaces, sinter plants, steel melt shops, kilns, and refinery process units.',
      },
      {
        title: 'Conveyor Galleries & Trestles',
        description: 'Long-span material handling conveyor galleries, transfer towers, junction houses, and conveyor supporting trestles.',
      },
      {
        title: 'Storage Bins, Silos, Chutes & Hoppers',
        description: 'Heavy plate fabrication of wear-resistant raw material hoppers, coal/ore bins, discharge chutes, and storage silos.',
      },
      {
        title: 'Pipe Racks & Cable Bridge Structures',
        description: 'Modular multi-tier pipe racks, utility bridge structures, and cable trench supporting gantries for process industries.',
      },
      {
        title: 'Pre-Engineered Building (PEB) Structural Members',
        description: 'Primary and secondary framing systems, purlins, girts, and structural canopies for warehouses and manufacturing bays.',
      },
    ],
    machineryEquipment: [
      'Automatic Submerged Arc Welding (SAW) Stations',
      'Heavy-duty MIG / CO2 & TIG Welding Inverters',
      'Hydraulic Plate Shearing & Beveling Machines (up to 40mm)',
      'Hydraulic Plate Bending Rolls & Profile Bending Presses',
      'CNC Oxy-Fuel & High-Definition Plasma Cutting Systems',
      'Heavy Radial Arm Drilling & Magnetic Core Drill Units',
      'Dedicated Grit Blasting & Airless Protective Coating Bays',
    ],
    qualitySafety: [
      '100% Non-Destructive Testing (NDT): UT, MPI, DPT & Radiography as per QAP',
      'WPS, PQR, and certified welders qualified under ASME Section IX and AWS D1.1',
      'Dimensional tolerance checks in strict compliance with IS 7215 and IS 800',
      'Full mill test certificate (MTC) traceability for all structural steel plates and sections',
      'Blasting surface profile verification and Dry Film Thickness (DFT) testing',
      'Regular inspection by Third-Party Agencies (EIL, TUV, BV, DNV, CEIL)',
    ],
    applications: [
      'Integrated Steel Plants & Metallurgical Facilities',
      'Thermal & Hydroelectric Power Stations',
      'Cement Plants & Bulk Material Handling Terminals',
      'Oil, Gas & Petrochemical Refineries',
      'Port Handling Facilities, Jetties & Shipyards',
      'Heavy Manufacturing, Warehouse & Industrial Complexes',
    ],
    specifications: [
      { label: 'Monthly Fabrication Capacity', value: '350 – 500+ Metric Tons' },
      { label: 'Steel Grades Handled', value: 'IS 2062 E250 / E350 / E450, ASTM A36, High-Tensile Steel' },
      { label: 'Plate Thickness Capability', value: '6 mm up to 80 mm heavy plates' },
      { label: 'Welding Standards', value: 'AWS D1.1, ASME Sec IX, IS 816, IS 9595' },
      { label: 'Quality Certification', value: 'ISO-compliant Quality Assurance Plan (QAP)' },
      { label: 'Surface Finish', value: 'Sa 2.5 Shot/Grit Blasting + Epoxy/PU Paint Systems' },
    ],
  },
  {
    id: 'structural-erection',
    number: '02',
    title: 'Structural Erection',
    shortDescription: 'On-site assembly and erection of steel structures.',
    tagline: 'Disciplined high-altitude erection with zero-compromise safety protocols.',
    heroImage: '/assets/structure.jpg',
    badgeColor: 'red',
    fullDescription:
      'We excel in safe, precise, and timely on-site erection of heavy steel structures at demanding heights and complex industrial layouts. From high-bay factory structures to towering conveyor galleries, our skilled erection crews and rigging specialists deploy advanced survey systems and heavy lifting machinery to deliver flawless alignment.',
    capabilities: [
      {
        title: 'High-Rise Industrial Structure Erection',
        description: 'Staged erection of multi-tier furnace structures, process towers, boiler support frames, and heavy column assemblies at elevation.',
      },
      {
        title: 'Heavy Crane Runway Beam Installation',
        description: 'Precise erection, leveling, and alignment of heavy EOT crane girders and rail tracks with micro-millimeter tolerance.',
      },
      {
        title: 'Overhead Conveyor Galleries & Trestle Erection',
        description: 'Ground pre-assembly and single-lift tandem erection of long-span conveyor galleries across operating plants.',
      },
      {
        title: 'Pre-Engineered Building (PEB) Site Erection',
        description: 'Rapid, safe sequential erection of PEB portals, roof sheeting, side cladding, and industrial ventilation systems.',
      },
      {
        title: 'Field Bolting & Torquing',
        description: 'Calibrated torque-wrench tightening of High-Strength Friction Grip (HSFG) bolts ensuring structural integrity.',
      },
      {
        title: 'On-Site Field Welding & Modifications',
        description: 'Certified site welding, splice joints, reinforcement stiffening, and custom retrofitting to match exact site conditions.',
      },
    ],
    machineryEquipment: [
      'Heavy Hydraulic & Crawler Mobile Cranes (50T to 250T)',
      'Hydraulic Winches, Derricks & Guyed Mast Systems',
      'Electronic Total Stations, Digital Theodolites & Laser Alignment Tools',
      'Calibrated Hydraulic & Manual Torque Wrenches for HSFG Bolting',
      'Mobile Diesel Generator Units & Multi-Operator Welding Inverters',
      'Manlifts, Articulated Boom Lifts & High-Capacity Scaffolding Systems',
    ],
    qualitySafety: [
      'Comprehensive Job Safety Analysis (JSA) and daily Tool Box Talks (TBT)',
      '100% Dual-Lanyard Safety Harness tie-off with static lifeline systems',
      'Certified rigging crews, qualified signalmen, and certified lifting equipment',
      'Laser survey alignment verified at each erection elevation prior to grouting',
      'Real-time wind speed monitoring and crane outrigger load ground testing',
      'Zero-incident safety culture audited to strict industrial HSE guidelines',
    ],
    applications: [
      'Industrial Sheds & High-Bay Workshops',
      'Process Plants & Technological Structures',
      'Material Handling Conveyor Networks',
      'Power Plant Boiler & Turbine Buildings',
      'Steel Melt Shop (SMS) & Blast Furnace Complexes',
      'Heavy Manufacturing & Assembly Plants',
    ],
    specifications: [
      { label: 'Erection Height Capability', value: 'Up to 90+ meters' },
      { label: 'Single Lift Capacity', value: 'Tandem crane lifts up to 100+ MT' },
      { label: 'Alignment Tolerance', value: 'Strictly as per IS 12843 / AISC Code of Standard Practice' },
      { label: 'Bolting Standards', value: 'HSFG Grade 8.8 / 10.9 (IS 3757, IS 4000)' },
      { label: 'Site Safety Protocol', value: 'OSHA & Indian Factory Act compliant HSE Plan' },
      { label: 'Workforce', value: 'Certified Riggers, Fitters & Coded Welders' },
    ],
  },
  {
    id: 'heavy-equipment-works',
    number: '03',
    title: 'Heavy Equipment Works',
    shortDescription: 'Installation and handling of heavy equipment for industrial projects.',
    tagline: 'Engineering-led rigging, installation, and precision mechanical alignment.',
    heroImage: '/assets/crane.jpg',
    badgeColor: 'green',
    fullDescription:
      'Handling, offloading, positioning, and mechanical installation of massive industrial machinery requires rigorous planning, specialized rigging gear, and precision alignment. S Ganapati Construction provides end-to-end heavy equipment erection services for critical plant machinery, ensuring stable vibration-free operation.',
    capabilities: [
      {
        title: 'EOT & Gantry Crane Installation',
        description: 'Complete mechanical erection, trolley placement, electrical integration, and dynamic load testing of heavy-capacity cranes.',
      },
      {
        title: 'Heavy Rotary Equipment Assembly',
        description: 'Precision positioning and alignment of ball mills, rotary kilns, cooler shells, dryers, and heavy industrial drives.',
      },
      {
        title: 'Process Vessels, Columns & Reactors',
        description: 'Tandem-lift offloading, uprighting, and foundation anchor setting for pressure vessels, distillation columns, and heat exchangers.',
      },
      {
        title: 'Heavy Crushers, Screens & Feeders',
        description: 'Rigging and installation of primary jaw crushers, cone crushers, vibrating screens, and apron feeders with anti-vibration mountings.',
      },
      {
        title: 'Precision Shaft & Coupling Alignment',
        description: 'Laser alignment and dial-indicator dial run-out checking for motor-gearbox-pump drive trains to minimize mechanical wear.',
      },
      {
        title: 'Equipment Foundation Grouting',
        description: 'High-strength non-shrink epoxy and cementitious grouting beneath equipment baseplates for permanent structural damping.',
      },
    ],
    machineryEquipment: [
      'Multi-Axle Heavy Haulage & Skidding Equipment',
      'Hydraulic Jacks (10T to 200T Capacity) with Multi-Point Manifolds',
      'Heavy Duty Heavy-Lift Slings, Spreader Beams & D-Shackles (Certified)',
      'Laser Shaft Alignment Systems & Precision Dial Indicators',
      'High-Pressure Grout Pumps & Mechanical Torque Multipliers',
      'Tandem Lifting Rigging Assemblies & Dynamic Load Cells',
    ],
    qualitySafety: [
      'Engineered Lift Plans with Center-of-Gravity (CoG) & ground bearing studies',
      'Third-party certified lifting tackles with current proof load certificates',
      'Comprehensive pre-lift checklists and exclusion zone security barricading',
      'Vibration analysis and baseline mechanical alignment verification reports',
      'Strict adherence to OEM installation manuals and manufacturer specifications',
    ],
    applications: [
      'Power Plants: Turbines, Generators, Transformers & ID/FD Fans',
      'Steel Plants: Rolling Mill Stands, Ladle Turrets, Continuous Casting Units',
      'Cement Plants: Raw Mills, Cement Mills, Clinker Coolers & Baghouses',
      'Chemical & Fertilizer: Compressors, Blowers, Autoclaves & Columns',
      'Mining & Minerals: Heavy Ore Crushers, Washers & Beneficiation Units',
    ],
    specifications: [
      { label: 'Single Equipment Lifting', value: 'Up to 120+ MT individual equipment weight' },
      { label: 'Alignment Precision', value: 'Within 0.05 mm using digital laser tools' },
      { label: 'Grouting System', value: 'Non-shrink high-early-strength epoxy & cementitious grouts' },
      { label: 'Rigging Standard', value: 'IS 2762, ASME B30 compliant lift methodologies' },
      { label: 'Testing & Commissioning', value: 'No-load and trial run operational support' },
    ],
  },
  {
    id: 'industrial-construction',
    number: '04',
    title: 'Industrial Construction',
    shortDescription: 'Support for industrial facilities, process structures and auxiliary works.',
    tagline: 'End-to-end civil, structural, and mechanical integration for industrial plants.',
    heroImage: '/assets/plant.jpg',
    badgeColor: 'red',
    fullDescription:
      'S Ganapati Construction delivers integrated industrial infrastructure support, bridging heavy civil foundations, structural erection, and auxiliary mechanical installations. We execute turnkey infrastructure projects with a strong focus on scheduled milestones, site safety, and environmental stewardship.',
    capabilities: [
      {
        title: 'Heavy Equipment Foundations & Civil Infrastructure',
        description: 'Mass concrete foundations, machine pits, vibration-isolated transformer plinths, and industrial flooring.',
      },
      {
        title: 'Process Plant Buildings & Control Rooms',
        description: 'Construction of MCC buildings, plant control rooms, electrical substations, and industrial administrative blocks.',
      },
      {
        title: 'Industrial Plant Auxiliary & Utility Networks',
        description: 'Cooling tower sumps, pump houses, industrial drainage networks, water treatment basins, and utility trenches.',
      },
      {
        title: 'Plant Modernization, Debottlenecking & Expansions',
        description: 'Live plant retrofits, structural reinforcement of existing sheds, and planned shutdown revamp execution.',
      },
      {
        title: 'Industrial Flooring & Hardstanding Areas',
        description: 'Heavy-duty steel-fiber-reinforced concrete floors, vacuum dewatered flooring (VDF), and acid-resistant finishes.',
      },
      {
        title: 'Civil-Mechanical Integration & Commissioning Support',
        description: 'Complete cross-disciplinary coordination ensuring embedded parts, insert plates, and anchor bolts align flawlessly.',
      },
    ],
    machineryEquipment: [
      'Batching Plant & Transit Concrete Mixers',
      'Concrete Boom Placers & High-Pressure Concrete Pumps',
      'Earth Moving Machinery: Hydraulic Excavators, Backhoe Loaders & Dozers',
      'Vibratory Soil Compactors & Plate Tampers',
      'Steel Bending & Rebar Cutting Machines',
      'Scaffolding & Heavy Formwork Systems (Cuplock & H-Beam)',
    ],
    qualitySafety: [
      'Comprehensive concrete cube compressive strength testing at 7 and 28 days',
      'Soil compaction testing (FDD) and core-cutter density verification',
      'Mill test certificate verification for all reinforcement rebar and cement',
      'Full personal protective equipment (PPE) enforcement and HSE surveillance',
      'Environmental compliance: dust suppression, waste management, sediment control',
    ],
    applications: [
      'Greenfield & Brownfield Industrial Complexes',
      'Manufacturing & Production Facilities',
      'Heavy Logistics Parks & Warehouse Hubs',
      'Utility Buildings & Substation Infrastructure',
      'Water Treatment & Industrial Effluent Facilities',
      'Industrial Roadways, Drainage & Paved Yards',
    ],
    specifications: [
      { label: 'Project Scope', value: 'Civil, Structural & Mechanical Turnkey Execution' },
      { label: 'Foundation Types', value: 'Raft, Pile Cap, Machine Foundation, Mass Concrete' },
      { label: 'Concrete Grades', value: 'M25, M30, M35, M40 & Self-Compacting Concrete (SCC)' },
      { label: 'Project Scheduling', value: 'CPM / Gantt Milestones with weekly progress tracking' },
      { label: 'Regulatory Adherence', value: 'IS 456, IS 1893, NBC & Industrial Factory Norms' },
    ],
  },
]

export const projectsData = [
  {
    id: '01',
    title: 'Industrial Plant Structure Fabrication & Erection',
    location: 'Visakhapatnam, Andhra Pradesh',
    client: 'Industrial Infrastructure Client',
    category: 'Structural Fabrication & Erection',
    image: '/assets/structure.jpg',
    scope: 'Fabrication and safe erection of 1,200+ MT heavy structural steel framework, technological platforms, and crane girder runways.',
    metrics: ['1,200+ MT Steel', 'Zero Incidents', '3 Weeks Ahead of Schedule'],
  },
  {
    id: '02',
    title: 'Heavy Equipment Installation & Crane Gantry',
    location: 'Industrial Corridor, AP',
    client: 'Heavy Engineering Plant',
    category: 'Heavy Equipment Works',
    image: '/assets/crane.jpg',
    scope: 'Offloading, rigging, foundation setting, and laser alignment of twin 50T overhead EOT cranes and secondary drive mechanisms.',
    metrics: ['50T Crane Lifts', '0.04mm Alignment', 'Dynamic Load Tested'],
  },
  {
    id: '03',
    title: 'Process Plant Expansion & Structural Works',
    location: 'Gopalapatnam, Visakhapatnam',
    client: 'Process Industry Facility',
    category: 'Industrial Construction',
    image: '/assets/plant.jpg',
    scope: 'Turnkey fabrication and erection of pipe racks, process towers, transfer chutes, and heavy equipment civil foundations.',
    metrics: ['450 MT Pipe Racks', 'High-Rise Tower', 'Turnkey Execution'],
  },
  {
    id: '04',
    title: 'High-Precision Structural Steel Fabrication',
    location: 'Fabrication Yard, Visakhapatnam',
    client: 'Infrastructure Development Corp',
    category: 'Structural Fabrication',
    image: '/assets/welding.jpg',
    scope: 'Shop fabrication of heavy built-up plate girders, box columns, and roof trusses with 100% UT and MPI testing.',
    metrics: ['800+ MT Fabricated', '100% NDT Passed', 'Sa 2.5 Blasted & Coated'],
  },
]
