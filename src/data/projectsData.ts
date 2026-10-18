export interface PipeSizeSchedule {
  dia: string
  length: string
  rate?: string
  specification?: string
}

export interface ExecutedItem {
  slNo: string | number
  description: string
  uom: string
  rate: string
  qty: string
  amount: string
  category?: string
}

export interface ProjectGalleryPhoto {
  id: string
  url: string
  title: string
  description: string
  category: 'steel-structures' | 'crane-lifts' | 'bridges-fob' | 'foundations-civil' | 'utilities'
  categoryLabel: string
  projectId?: string
  projectTitle?: string
}

export interface OfficialProject {
  id: string
  projectNumber: string
  title: string
  shortTitle: string
  category: 'water-utilities' | 'steel-metallurgical' | 'cement-plants'
  categoryLabel: string
  client: string
  clientLocation: string
  endClient: string
  workOrderNo: string
  workOrderDate: string
  validityPeriod: string
  location: string
  districtState: string
  contractType: 'Official Government Work Order' | 'Running Account (RA) Milestone Bill' | 'Industrial Plant Work Order'
  verifiedBadge: string
  coverImage: string
  awaitingUserImages: boolean
  placeholderNote: string
  imageSlots: {
    title: string
    description: string
    imageUrl?: string
  }[]
  galleryPhotos?: ProjectGalleryPhoto[]
  summary: string
  detailedScope: string[]
  keyMetrics: {
    value: string
    label: string
  }[]
  pipeSchedule?: PipeSizeSchedule[]
  executedBillingItems?: ExecutedItem[]
  financialSummary?: {
    billNo?: string
    invoiceNo?: string
    billPeriod?: string
    grossAmount?: string
    baseAmount?: string
    gstAmount?: string
    cumulativeValueToDate?: string
    netPaidToDate?: string
  }
  ratesSchedule?: {
    item: string
    uom: string
    rate: string
    inwards: string
  }[]
  safetyStandards: string[]
}

export const authenticProjects: OfficialProject[] = [
  {
    id: 'amrut-master-1314-a1',
    projectNumber: '01',
    title: 'AP AMRUT 2.0 & AIIB Urban Water Supply Scheme (Revised Master Contract)',
    shortTitle: 'AP AMRUT 2.0 HDPE Pipeline Network (11.7+ km)',
    category: 'water-utilities',
    categoryLabel: 'Public Utilities & Municipal Infrastructure',
    client: 'M/s. Civet Projects Private Limited (CIN: U45500TG1018PTC122108)',
    clientLocation: 'Rajamahendravaram & Hyderabad, Andhra Pradesh / Telangana',
    endClient: 'Government of Andhra Pradesh MA&UD Department (AMRUT 2.0 & AIIB)',
    workOrderNo: 'WO.NO.CPPL/AP AMRUT 2.0/2025-26/1314-A1',
    workOrderDate: 'Official Revised Work Order 2024–2026',
    validityPeriod: '2024 – 2026 (Active Execution)',
    location: 'Mandapeta & Peddapuram Municipalities',
    districtState: 'East Godavari & Kakinada Districts, Andhra Pradesh',
    contractType: 'Official Government Work Order',
    verifiedBadge: '✓ Verified Govt Contract: WO 1314-A1',
    coverImage: '/projects/7a42a22e-209c-4ee8-a002-3b1905c174b9.jpg',
    awaitingUserImages: false,
    placeholderNote: 'Authentic site photography of pipeline materials, crossing girders, and heavy crane lifts executed under AP AMRUT 2.0 schemes.',
    imageSlots: [
      {
        title: 'Pipeline Spool & Materials Yard',
        imageUrl: '/projects/7a42a22e-209c-4ee8-a002-3b1905c174b9.jpg',
        description: 'Pipes, specials, and precast foundation pedestals on active utility site',
      },
      {
        title: 'Heavy Structural Crossing Rigging',
        imageUrl: '/projects/d29f8059-59c6-42e1-9a85-bb6d7991cd32.jpg',
        description: 'Telescopic crane lifting heavy steel bridge composite girder across canal corridor',
      },
      {
        title: 'Railway Foot-Overbridge Span Erection',
        imageUrl: '/projects/3fcecc41-badb-4e81-9d43-27015c99ce1b.jpg',
        description: 'Crane placement of pedestrian crossing truss over active electrified tracks',
      },
      {
        title: 'Liebherr Heavy Crane Girder Launching',
        imageUrl: '/projects/a5d96051-f795-4187-8faa-653ce8fb0d7f.jpg',
        description: 'Liebherr telescopic crane lowering composite girder onto bridge pier abutment',
      },
    ],
    summary:
      'Direct revised work order awarded to M/s S Ganapati Construction for the comprehensive execution of 11,735+ running meters of heavy HDPE water transmission pipelines connecting municipal reservoirs, pump stations, and distribution zones across Mandapeta and Peddapuram Urban Local Bodies (ULBs).',
    detailedScope: [
      'Machine and manual trench excavation in all types of soil and hard rock, with shrub clearing, tree root removal, and trench dewatering.',
      'Diamond groove cutting of concrete roads and heavy CC pavement breaking (including thicknesses exceeding 7 inches).',
      'Trenchless horizontal directional auger boring for road, state highway, and drain crossings without surface vehicular interruption.',
      'Automated Butt-Fusion jointing executed by certified welding specialists across 110mm, 160mm, 200mm, 250mm, 315mm, and 355mm diameters.',
      'Fixing of high-pressure sluice valves, kinetic air valves, scour valves, bends, specials, and masonry valve chamber construction.',
      '100% Hydrostatic pressure testing of all pipeline sections prior to municipal commissioning, backfilling with compaction, and gap closing.',
    ],
    keyMetrics: [
      { value: '11,735+ Rmtr', label: 'Total HDPE Pipeline Length' },
      { value: '110–355 mm', label: 'Pipe Diameter Range' },
      { value: '2 Municipalities', label: 'Mandapeta & Peddapuram' },
      { value: '100% NDT & Hydro', label: 'Hydrostatic Pressure Tested' },
    ],
    pipeSchedule: [
      { dia: '110 mm Dia HDPE', length: '4,715 Rmtr', specification: 'PE100 PN6 / PN10' },
      { dia: '160 mm Dia HDPE', length: '3,649 Rmtr', specification: 'PE100 PN6 / PN10' },
      { dia: '200 mm Dia HDPE', length: '2,004 Rmtr', specification: 'PE100 PN6 / PN10' },
      { dia: '250 mm Dia HDPE', length: '193 Rmtr', specification: 'PE100 PN6 / PN10' },
      { dia: '315 mm Dia HDPE', length: '902 Rmtr', specification: 'PE100 PN6 / PN10' },
      { dia: '355 mm Dia HDPE', length: '272 Rmtr', specification: 'PE100 PN6 / PN10' },
    ],
    safetyStandards: [
      'OHSAS 18001 Occupational Health & Safety Compliance',
      'Daily Tool Box Talks (TBT) and Permit-to-Work (PTW) for trench depths > 1.5m',
      'Continuous trench barricading, retroreflective night warning tapes, and bypass traffic diversions',
      'Full personal protective equipment (PPE) mandatory: ISI helmets, safety boots, high-vis vests',
    ],
  },
  {
    id: 'jsw-toranagallu-steel-cement',
    projectNumber: '02',
    title: 'JSW Steel Ltd & JSW Cement Ltd Industrial Plants Fabrication & Erection',
    shortTitle: 'JSW Toranagallu Heavy Steel & Cement Plants',
    category: 'steel-metallurgical',
    categoryLabel: 'Integrated Steel & Cement Complex Works',
    client: 'M/s. Indu Constructions (Proprietor: S. Kesava Reddy, GSTIN: 29AOUPR9517F1Z3)',
    clientLocation: 'Toranagallu, Sandur Taluk, Bellary District, Karnataka - 583123',
    endClient: 'M/s. JSW Steel Limited & M/s. JSW Cement Limited',
    workOrderNo: 'IC-JSW-STEEL/TNGL/02/PO-002/2024-25 & PO-0011/2023-24',
    workOrderDate: '28.02.2024 (Steel) & 01.02.2023 (Cement)',
    validityPeriod: '2023 – 2025 (Multi-Year Maintenance & Capital Works)',
    location: 'JSW Complex, Toranagallu',
    districtState: 'Bellary District, Karnataka',
    contractType: 'Industrial Plant Work Order',
    coverImage: '/projects/0a98a433-bbc2-4c61-8704-a8c79019ee9a.jpg',
    awaitingUserImages: false,
    placeholderNote: 'Authentic photographs of structural steel fabrication, high-altitude crane rigging, and technological erection at JSW Toranagallu industrial plants.',
    imageSlots: [
      {
        title: 'Industrial Plant Steel Framework',
        imageUrl: '/projects/0a98a433-bbc2-4c61-8704-a8c79019ee9a.jpg',
        description: 'Heavy structural steel building columns, gantry crane beams, and high-altitude roof trusses',
      },
      {
        title: 'Heavy Plate Fabrication Yard & Welder Teams',
        imageUrl: '/projects/5afbf099-8e4f-4ad8-852b-aeafafa2b3c2.jpg',
        description: 'Certified welders, fitters, and Hydra cranes fabricating built-up plate girders with cement plant in backdrop',
      },
      {
        title: 'Colossal Conical Cyclone Rigging Lift',
        imageUrl: '/projects/422642a8-ab9d-4183-a534-245620c9d81a.jpg',
        description: 'Heavy crane hoist of giant metallurgical cyclone vessel with waffle stiffeners and taglines',
      },
      {
        title: 'Foundation Pedestals & Anchor Bolt Cages',
        imageUrl: '/projects/25f44efb-2dc6-485b-a81c-e7a36e6ddcba.jpg',
        description: 'Precision anchor bolt template alignment, column grouting, and reinforced civil foundation pedestals',
      },
    ],
    summary:
      'Official industrial subcontract work orders awarded to M/s Ganapati Constructions (Contact: Mr. G Suresh Reddy, 9441771333) by Indu Constructions for structural steel fabrication and high-altitude technological erection inside the integrated JSW Steel Ltd and JSW Cement Ltd industrial complexes in Toranagallu, Bellary, Karnataka.',
    detailedScope: [
      'Heavy structural steel fabrication of industrial building frameworks, crane runways, blast furnace ducting supports, and raw material handling transfer towers.',
      'Technological erection of structural columns, roof trusses, bracing systems, and equipment support platforms using 100T+ heavy mobile and crawler cranes.',
      'Cement plant clinker silo structures, raw mill feed bins, conveyor galleries, and elevator casings erection at JSW Cement site.',
      'Precision mechanical equipment assembly, baseplate grouting, and torque tightening under JSW engineering norms.',
      'All skilled and certified manpower provided by S Ganapati Construction, operating in strict compliance with JSW Safety Norms.',
    ],
    keyMetrics: [
      { value: '₹6,800 / MT', label: 'JSW Steel Fabrication Rate' },
      { value: '₹5,300 / MT', label: 'JSW Steel Erection Rate' },
      { value: '₹5,800 / MT', label: 'JSW Cement Fabrication Rate' },
      { value: '₹4,700 / MT', label: 'JSW Cement Erection Rate' },
    ],
    ratesSchedule: [
      { item: 'JSW Steel Fabrication Job', uom: 'MT', rate: '₹6,800.00', inwards: 'Six Thousand Eight Hundred per MT' },
      { item: 'JSW Steel Errection Job', uom: 'MT', rate: '₹5,300.00', inwards: 'Five Thousand Three Hundred per MT' },
      { item: 'JSW Cement Fabrication Job', uom: 'MT', rate: '₹5,800.00', inwards: 'Five Thousand Eight Hundred per MT' },
      { item: 'JSW Cement Errection Job', uom: 'MT', rate: '₹4,700.00', inwards: 'Four Thousand Seven Hundred per MT' },
    ],
    safetyStandards: [
      'Full compliance with M/s JSW Steel Ltd & JSW Cement Ltd site safety norms at Toranagallu KA',
      'Mandatory double-lanyard safety harnesses with shock absorbers for all work at elevation (> 2 meters)',
      '100% certified lifting tools & tackles (slings, shackles, spreader beams) with valid third-party load test certificates',
      'Lock-Out / Tag-Out (LOTO) and Confined Space Entry permit enforcement',
    ],
  },
  {
    id: 'mandapeta-ulb-ra01',
    projectNumber: '03',
    title: 'Mandapeta Municipality Urban Water Pipeline (Execution & RA Bill 01)',
    shortTitle: 'Mandapeta ULB Water Supply Network (RA Bill 01)',
    category: 'water-utilities',
    categoryLabel: 'AMRUT 2.0 Water Distribution Pipeline',
    client: 'M/s. Civet Projects Private Limited',
    clientLocation: 'Rajamahendravaram, East Godavari, Andhra Pradesh',
    endClient: 'Mandapeta Municipality / Government of Andhra Pradesh',
    workOrderNo: 'CPPL/AP AMRUT 2.0/2025-26/1314 (Bill No: 01)',
    workOrderDate: 'Bill Date: 30.08.2024 | Invoice: 01.09.2024',
    validityPeriod: 'Billing Period: 23.07.2024 to 25.08.2024',
    location: 'Mandapeta Municipality (ULB)',
    districtState: 'Dr. B.R. Ambedkar Konaseema / East Godavari, Andhra Pradesh',
    contractType: 'Running Account (RA) Milestone Bill',
    coverImage: '/projects/ca1a0ec5-c32d-4f32-b9fc-c25c81b27a78.jpg',
    awaitingUserImages: false,
    placeholderNote: 'Certified milestone execution photographs from Mandapeta Municipality ULB pipeline corridor under RA Bill 01.',
    imageSlots: [
      {
        title: 'Mandapeta Site Engineering Supervision',
        imageUrl: '/projects/ca1a0ec5-c32d-4f32-b9fc-c25c81b27a78.jpg',
        description: 'Supervisory engineers and technicians inspecting pipeline alignment and valve components',
      },
      {
        title: 'Fabrication Yard Steel Plate Stacking',
        imageUrl: '/projects/66a3f2c8-783f-4a8d-bc77-25485927ebb4.jpg',
        description: 'Handling equipment and steel plates preparation yard for utility structures',
      },
      {
        title: 'Rail-Mounted Gantry Material Handling',
        imageUrl: '/projects/5669f4d0-aa94-461c-945f-78d6c5ffcfcf.jpg',
        description: 'Electric overhead gantry handling system with magnetic beam for raw infrastructure materials',
      },
      {
        title: 'Composite Span Underdeck Alignment',
        imageUrl: '/projects/c2826311-34c7-470f-ad14-477068410786.jpg',
        description: 'Bolted diaphragms, shear splices, and elastomeric bearings across completed span',
      },
    ],
    summary:
      'Officially measured, certified, and billed milestone project under RA Bill 01 and Tax Invoice No. 11/26-27 for pipeline laying works executed in the Mandapeta Urban Local Body (ULB) area under the Andhra Pradesh AMRUT 2.0 Scheme.',
    detailedScope: [
      'Execution of 1,461.00 RMT of 110mm Dia HDPE pipeline including trench excavation, jointing, bends, specials, and backfilling.',
      'Execution of 624.00 RMT of 160mm Dia HDPE pipeline complete with lowering, butt fusion jointing, and earthwork.',
      'Mechanical CC road cutting across 132.00 RMT of concrete pavement to avoid road collapse and preserve street integrity.',
      'Trenchless auger boring across 17.00 RMT for crossing major road intersections and municipal storm water drains.',
      'Approved and signed by Site Incharge, Planning Department, Accounts, and Project Manager of Civet Projects Pvt Ltd.',
    ],
    keyMetrics: [
      { value: '₹2,77,100', label: 'Gross Billed Milestone Value' },
      { value: '2,085 Rmtr', label: 'Total HDPE Pipes Laid in RA 01' },
      { value: '132 Rmtr', label: 'CC Road Cutting Executed' },
      { value: '17 Rmtr', label: 'Trenchless Auger Boring' },
    ],
    financialSummary: {
      billNo: 'RA Bill 01',
      invoiceNo: '11/26-27',
      billPeriod: '23.07.2024 to 25.08.2024',
      baseAmount: '₹2,34,831.00',
      gstAmount: '₹42,269.50 (CGST 9% + SGST 9%)',
      grossAmount: '₹2,77,100.00',
    },
    executedBillingItems: [
      { slNo: '1.1', description: '110mm HDPE Excavation, Laying & Jointing (70%)', uom: 'RMT', rate: '₹110.00', qty: '1,461.00', amount: '₹1,12,497.00' },
      { slNo: '1.2', description: '110mm HDPE Bends & Specials Fixing (5%)', uom: 'RMT', rate: '₹110.00', qty: '1,461.00', amount: '₹8,036.00' },
      { slNo: '1.3', description: '110mm HDPE Backfilling & Compaction (10%)', uom: 'RMT', rate: '₹110.00', qty: '1,461.00', amount: '₹16,071.00' },
      { slNo: '2.1', description: '160mm HDPE Excavation, Laying & Jointing (70%)', uom: 'RMT', rate: '₹130.00', qty: '624.00', amount: '₹56,784.00' },
      { slNo: '2.2', description: '160mm HDPE Bends & Specials Fixing (5%)', uom: 'RMT', rate: '₹130.00', qty: '624.00', amount: '₹4,056.00' },
      { slNo: '2.3', description: '160mm HDPE Backfilling & Compaction (10%)', uom: 'RMT', rate: '₹130.00', qty: '624.00', amount: '₹8,112.00' },
      { slNo: '3', description: 'CC Road Cutting with Mechanical Diamond Cutters', uom: 'RMT', rate: '₹110.00', qty: '132.00', amount: '₹14,520.00' },
      { slNo: '4', description: 'Trenchless Horizontal Auger Boring', uom: 'RMT', rate: '₹800.00', qty: '17.00', amount: '₹13,600.00' },
      { slNo: '5', description: 'Manual Excavation & Laying of HDPE Pipes', uom: 'RMT', rate: '₹150.00', qty: '11.00', amount: '₹1,155.00' },
    ],
    safetyStandards: [
      'Comprehensive barricading and warning signage around open urban trenches',
      'Underground utility mapping to protect existing power and telecom fiber lines',
      'Certified butt fusion joint heating and dwell time recording',
      'Daily site clearance and debris removal to ensure public safety',
    ],
  },
  {
    id: 'peddapuram-ulb-ra02',
    projectNumber: '04',
    title: 'Peddapuram Municipality Urban Water Pipeline (Execution & RA Bill 02)',
    shortTitle: 'Peddapuram ULB Water Supply Network (RA Bill 02)',
    category: 'water-utilities',
    categoryLabel: 'AMRUT 2.0 Large-Diameter Pipeline',
    client: 'M/s. Civet Projects Private Limited',
    clientLocation: 'Rajamahendravaram, East Godavari, Andhra Pradesh',
    endClient: 'Peddapuram Municipality / Government of Andhra Pradesh',
    workOrderNo: 'CPPL/AP AMRUT 2.0/2025-26/1314-A1 (Bill No: 02)',
    workOrderDate: 'Bill Date: 08.10.2024 | Invoice: 08.10.2024',
    validityPeriod: 'Billing Period: 26.08.2024 to 03.10.2024',
    location: 'Peddapuram Municipality (ULB)',
    districtState: 'Kakinada District, Andhra Pradesh',
    contractType: 'Running Account (RA) Milestone Bill',
    coverImage: '/projects/340bd80d-55a0-494c-83df-694462dded8b.jpg',
    awaitingUserImages: false,
    placeholderNote: 'Certified milestone execution photographs from Peddapuram Municipality ULB large-diameter pipeline works under RA Bill 02.',
    imageSlots: [
      {
        title: 'Peddapuram Heavy Concrete & Column Works',
        imageUrl: '/projects/340bd80d-55a0-494c-83df-694462dded8b.jpg',
        description: 'Transit mixer and boom pump executing concrete works alongside heavy structural columns',
      },
      {
        title: 'Cylindrical Duct & Vessel Erection',
        imageUrl: '/projects/e08d930c-4f01-40ce-8dac-749d1f2aec22.jpg',
        description: 'Crane hoisting large-diameter steel transmission cylinder with tagline guide',
      },
      {
        title: 'Night Crane Heavy Lift Operation',
        imageUrl: '/projects/4fe1b776-ceb2-4166-add7-2f7018340c2c.jpg',
        description: 'SANY heavy crawler crane lifting industrial cylinder at night with safety rigging',
      },
      {
        title: 'Deep Foundation Reinforcement & Pedestals',
        imageUrl: '/projects/ee6f4400-591f-4457-b8a5-ee338ef356d6.jpg',
        description: 'Formwork, scaffolding, and concrete foundation block execution for heavy structures',
      },
    ],
    summary:
      'Certified and approved milestone project under RA Bill 02 and Tax Invoice No. 24/26-27 for high-capacity distribution and transmission water pipelines executed in Peddapuram Municipality under the Andhra Pradesh AMRUT 2.0 Scheme, bringing cumulative executed works to over ₹5.32 Lakhs.',
    detailedScope: [
      'Laying of large-diameter 315mm HDPE transmission mains across 223.00 RMT with specialized alignment and butt fusion jointing.',
      'Expansion of 110mm distribution lines (1,353 RMT in present bill, bringing cumulative total to 2,814 RMT).',
      'Heavy CC Road Breaking for pavements above 7" thickness with double-groove diamond cutting (54 RMT in present bill, 71 RMT cumulative).',
      'Deep horizontal directional auger boring across 32 RMT under highway and railway approaches.',
      'Comprehensive pipeline pressure testing, backfilling, and compaction certified by Civet Projects engineering authorities.',
    ],
    keyMetrics: [
      { value: '₹5,32,029', label: 'Cumulative Gross Value to Date' },
      { value: '₹2,85,199', label: 'RA Bill 02 Gross Milestone' },
      { value: '3,805 Rmtr', label: 'Cumulative HDPE Pipes Laid' },
      { value: '315 mm Dia', label: 'High-Capacity Transmission Mains' },
    ],
    financialSummary: {
      billNo: 'RA Bill 02',
      invoiceNo: '24/26-27',
      billPeriod: '26.08.2024 to 03.10.2024',
      baseAmount: '₹2,41,694.00',
      gstAmount: '₹43,504.92 (CGST 9% + SGST 9%)',
      grossAmount: '₹2,85,199.00',
      cumulativeValueToDate: '₹5,32,029.00',
      netPaidToDate: '₹3,96,060.00',
    },
    executedBillingItems: [
      { slNo: '1', description: '110mm HDPE Excavation, Laying & Jointing (Cumulative 2,814 RMT)', uom: 'RMT', rate: '₹110.00', qty: '1,353.00', amount: '₹1,04,181.00' },
      { slNo: '2', description: '160mm HDPE Excavation, Laying & Jointing (Cumulative 732 RMT)', uom: 'RMT', rate: '₹130.00', qty: '108.00', amount: '₹9,828.00' },
      { slNo: '3', description: '200mm HDPE Excavation, Laying & Jointing (Cumulative 36 RMT)', uom: 'RMT', rate: '₹140.00', qty: '36.00', amount: '₹3,528.00' },
      { slNo: '4', description: '315mm HDPE Large Transmission Main Jointing (223 RMT)', uom: 'RMT', rate: '₹190.00', qty: '223.00', amount: '₹29,659.00' },
      { slNo: '5', description: 'CC Road Breaking (Thickness > 7" Double Groove Cut)', uom: 'RMT', rate: '₹800.00', qty: '54.00', amount: '₹43,200.00' },
      { slNo: '6', description: 'Horizontal Auger Trenchless Boring (Cumulative 32 RMT)', uom: 'RMT', rate: '₹900.00', qty: '32.00', amount: '₹28,800.00' },
    ],
    safetyStandards: [
      'Heavy-duty trench shoring and soil collapse prevention for large 315mm excavations',
      'Hydraulic testing with calibrated digital pressure gauges and air release safety valves',
      'De-watering pumps deployed to prevent trench undermining during high water table conditions',
      'Sign-off on all operations by Site Incharge, Planning Department, and Civet Projects PM',
    ],
  },
]

export const masterGalleryPhotos: ProjectGalleryPhoto[] = [
  {
    id: 'p01',
    url: '/projects/0a98a433-bbc2-4c61-8704-a8c79019ee9a.jpg',
    title: 'Industrial Heavy Steel Bay Columns',
    description: 'Massive red structural steel bay columns, overhead gantry crane runways, and high-altitude roof trusses at JSW Toranagallu complex',
    category: 'steel-structures',
    categoryLabel: 'Heavy Steel Structures',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p02',
    url: '/projects/20b32382-3a6a-4068-8e67-88f96af9741a.jpg',
    title: 'Night Crane Lift of Transmission Duct',
    description: 'Telescopic crane hoisting massive cylindrical steel duct section onto transport carrier during night shift rigging',
    category: 'crane-lifts',
    categoryLabel: 'Crane Lifts & Rigging',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p03',
    url: '/projects/25f44efb-2dc6-485b-a81c-e7a36e6ddcba.jpg',
    title: 'Foundation Bolt Cage Alignment & Pedestals',
    description: 'Heavy rebar foundation cages, template-positioned anchor bolts, and reinforced concrete pedestals for column baseplates',
    category: 'foundations-civil',
    categoryLabel: 'Civil Foundations & Pedestals',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p04',
    url: '/projects/2aedb4ca-7e16-4475-87b6-96739d1512df.jpg',
    title: 'Night High-Altitude Box Girder Rigging',
    description: 'Heavy crawler lattice boom crane hoisting industrial box girder onto concrete pier during nighttime plant shutdown window',
    category: 'crane-lifts',
    categoryLabel: 'Crane Lifts & Rigging',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p05',
    url: '/projects/340bd80d-55a0-494c-83df-694462dded8b.jpg',
    title: 'Concrete Boom Pump & Industrial Steel Bays',
    description: 'Mobile concrete boom pump and transit mixer pouring foundation pedestals alongside heavy structural steel portal frames',
    category: 'steel-structures',
    categoryLabel: 'Heavy Steel Structures',
    projectId: 'peddapuram-ulb-ra02',
    projectTitle: 'Peddapuram ULB Water Pipeline',
  },
  {
    id: 'p06',
    url: '/projects/3a4cbea8-a0a9-46ee-9533-9b556c71a37a.jpg',
    title: 'Railway Foot-Overbridge Stairway Framing',
    description: 'Pre-engineered steel staircase framework and elevated tower landing support over railway line embankment',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p07',
    url: '/projects/3fcecc41-badb-4e81-9d43-27015c99ce1b.jpg',
    title: 'Crane Placement of FOB Truss over Live Rail Tracks',
    description: 'Heavy mobile crane lowering foot-overbridge steel pedestrian truss across live electrified 25kV traction railway lines under line block',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p08',
    url: '/projects/41f08e9f-7b79-4a65-9a7e-7c788e4195c8.jpg',
    title: 'FOB Elevated Approach Tower & Stair Stringers',
    description: 'Heavy section channel columns and multi-tier stairway stringers under erection for public pedestrian crossing',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p09',
    url: '/projects/422642a8-ab9d-4183-a534-245620c9d81a.jpg',
    title: 'Colossal Conical Cyclone Rigging Lift',
    description: 'Heavy crane hoist of colossal metallurgical conical cyclone vessel equipped with perimeter waffle stiffening rings and tagline guides',
    category: 'crane-lifts',
    categoryLabel: 'Crane Lifts & Rigging',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p10',
    url: '/projects/4fe1b776-ceb2-4166-add7-2f7018340c2c.jpg',
    title: 'SANY Heavy Crawler Crane Night Rigging',
    description: 'Precision multi-point tagline rigging with certified safety slings lifting heavy cylindrical equipment at night',
    category: 'crane-lifts',
    categoryLabel: 'Crane Lifts & Rigging',
    projectId: 'peddapuram-ulb-ra02',
    projectTitle: 'Peddapuram ULB Water Pipeline',
  },
  {
    id: 'p11',
    url: '/projects/5669f4d0-aa94-461c-945f-78d6c5ffcfcf.jpg',
    title: 'Rail-Mounted Electric Gantry with Magnetic Beam',
    description: 'Heavy-duty rail-mounted portal gantry crane with electromagnetic spreader beam for billet, beam, and plate handling',
    category: 'steel-structures',
    categoryLabel: 'Heavy Steel Structures',
    projectId: 'mandapeta-ulb-ra01',
    projectTitle: 'Mandapeta ULB Water Pipeline',
  },
  {
    id: 'p12',
    url: '/projects/5afbf099-8e4f-4ad8-852b-aeafafa2b3c2.jpg',
    title: 'Plate Fabrication Yard & Hydra Crane Operation',
    description: 'Fabrication yard with fitters, certified SMAW/MIG welders, and Hydra mobile crane fabricating built-up plate girders',
    category: 'steel-structures',
    categoryLabel: 'Heavy Steel Structures',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p13',
    url: '/projects/66a3f2c8-783f-4a8d-bc77-25485927ebb4.jpg',
    title: 'Open Fabrication Yard & Steel Plate Stacks',
    description: 'Raw materials stockyard and mobile cranes staging heavy structural steel plates for layout and automated cutting',
    category: 'steel-structures',
    categoryLabel: 'Heavy Steel Structures',
    projectId: 'mandapeta-ulb-ra01',
    projectTitle: 'Mandapeta ULB Water Pipeline',
  },
  {
    id: 'p14',
    url: '/projects/751149f9-616a-48ea-98a2-3c2be6c85eb0.jpg',
    title: 'Multi-Bay Technological Plant Steel Structure',
    description: 'Interconnected multi-bay industrial plant steel framework with overhead crane runway girders and high-altitude walkways',
    category: 'steel-structures',
    categoryLabel: 'Heavy Steel Structures',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p15',
    url: '/projects/7a42a22e-209c-4ee8-a002-3b1905c174b9.jpg',
    title: 'Pipeline Spool & Materials Yard',
    description: 'Transmission pipeline spools, fabricated specials, and precast foundation pedestals on active utility site with engineers',
    category: 'utilities',
    categoryLabel: 'Public Utility & Piping',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p16',
    url: '/projects/9c63692e-c2ee-486a-9ab8-aa1c8aa40929.jpg',
    title: 'Under-Erection FOB Support Tower',
    description: 'Structural steel tower column with bracing and rigging rope guides for railway pedestrian overpass integration',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p17',
    url: '/projects/9fd38768-4fee-4e39-bc58-8525b4e4bd49.jpg',
    title: 'Railway Corridor FOB Truss Launching Operations',
    description: 'Platform overview of heavy mobile crane and engineering crews erecting steel pedestrian bridge across active railway tracks',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p18',
    url: '/projects/a5d96051-f795-4187-8faa-653ce8fb0d7f.jpg',
    title: 'Liebherr Heavy Crane Composite Girder Launching',
    description: 'Liebherr multi-axle telescopic all-terrain crane lowering composite steel bridge girder with shear connectors onto pier abutment',
    category: 'crane-lifts',
    categoryLabel: 'Crane Lifts & Rigging',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p19',
    url: '/projects/ae85c8dc-1afa-49bc-9a39-d26eeeafa937.jpg',
    title: 'Foundation Pedestal Rebar Cages & Baseplates',
    description: 'High-density reinforcing steel cages, leveling shims, and grouting formwork for heavy industrial building columns',
    category: 'foundations-civil',
    categoryLabel: 'Civil Foundations & Pedestals',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p20',
    url: '/projects/bcadc803-778a-45f8-a3db-8aeae5566a16.jpg',
    title: 'Elevated Stairway Stringers & Safety Handrails',
    description: 'Structural staircase framing and handrail balustrades aligned with foundation pedestals at railway approach',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p21',
    url: '/projects/c2826311-34c7-470f-ad14-477068410786.jpg',
    title: 'Underside View of Composite Bridge Girders',
    description: 'Underside perspective of erected composite bridge superstructure showing high-strength bolted splice plates, cross-frames, and bearings',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'mandapeta-ulb-ra01',
    projectTitle: 'Mandapeta ULB Water Pipeline',
  },
  {
    id: 'p22',
    url: '/projects/c6f30603-c914-4603-8419-c37909597bb7.jpg',
    title: 'Platform Gantry Superstructure Integration',
    description: 'Completed steel gantry footbridge and staircase structure adjacent to railway platform edge',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p23',
    url: '/projects/ca1a0ec5-c32d-4f32-b9fc-c25c81b27a78.jpg',
    title: 'Mandapeta Site Engineering Supervision',
    description: 'Engineers, supervisors, and technicians inspecting pipeline alignment, precast pedestals, and equipment placement',
    category: 'utilities',
    categoryLabel: 'Public Utility & Piping',
    projectId: 'mandapeta-ulb-ra01',
    projectTitle: 'Mandapeta ULB Water Pipeline',
  },
  {
    id: 'p24',
    url: '/projects/d29f8059-59c6-42e1-9a85-bb6d7991cd32.jpg',
    title: 'Heavy Telescopic Crane Launching Bridge Girder',
    description: 'Heavy telescopic crane with outriggers deployed launching steel composite bridge girder with top shear studs across canal corridor',
    category: 'crane-lifts',
    categoryLabel: 'Crane Lifts & Rigging',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
  {
    id: 'p25',
    url: '/projects/e08d930c-4f01-40ce-8dac-749d1f2aec22.jpg',
    title: 'Cylindrical Duct & Vessel Erection Hoist',
    description: 'Crane hoisting large-diameter steel transmission cylinder with internal radial spider stiffeners and tagline guides',
    category: 'crane-lifts',
    categoryLabel: 'Crane Lifts & Rigging',
    projectId: 'peddapuram-ulb-ra02',
    projectTitle: 'Peddapuram ULB Water Pipeline',
  },
  {
    id: 'p26',
    url: '/projects/e7d8de15-df77-4096-bbc0-d5ae7336e7e8.jpg',
    title: 'Night Crane Box Girder Placement',
    description: 'Nighttime crane hoist aligning heavy box-section runway girder onto structural column brackets',
    category: 'crane-lifts',
    categoryLabel: 'Crane Lifts & Rigging',
    projectId: 'jsw-toranagallu-steel-cement',
    projectTitle: 'JSW Steel & Cement Complex',
  },
  {
    id: 'p27',
    url: '/projects/ee6f4400-591f-4457-b8a5-ee338ef356d6.jpg',
    title: 'Civil Foundation Blocks, Scaffolding & Footings',
    description: 'Reinforced concrete foundation blocks, shuttering formwork, and staging scaffolding for heavy industrial columns',
    category: 'foundations-civil',
    categoryLabel: 'Civil Foundations & Pedestals',
    projectId: 'peddapuram-ulb-ra02',
    projectTitle: 'Peddapuram ULB Water Pipeline',
  },
  {
    id: 'p28',
    url: '/projects/ffce7dbb-68d9-4a27-9d05-a3e3da5fa9f5.jpg',
    title: 'Railway Foot-Overbridge Span & Stairway Framing',
    description: 'Overhead view of pre-engineered pedestrian footbridge superstructure framing and approach stairs along electrified rail line',
    category: 'bridges-fob',
    categoryLabel: 'Bridges & Railway FOBs',
    projectId: 'amrut-master-1314-a1',
    projectTitle: 'AP AMRUT 2.0 Water & Utility Schemes',
  },
]

// Automatically bind project-specific gallery photos to authenticProjects
authenticProjects.forEach((p) => {
  p.galleryPhotos = masterGalleryPhotos.filter((g) => g.projectId === p.id)
})

