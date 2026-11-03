import {
  p101,
  p102,
  p103,
  p201,
  p202,
  p203,
  p301,
  p302,
  p303,
  p401,
  p402,
  p403,
  p501,
  p502,
  p601,
  p602,
  p603,
  p701,
  p702,
  p801,
  p802,
  p901,
  p902,
  p903,
  p1001,
  p1002
} from "../assets/algaeImages/index.js";

export const products = [
  {
    slug: "Spirulina",
    name: "Spirulina",
    price: 499,
    images: [p101, p102, p103],
    description:
      "Spirulina is a nutrient-rich blue-green microalga widely cultivated for its exceptional nutritional value and versatile applications in the food, nutraceutical, and biotechnology industries. Recognized as one of the leading microalgae in the global market, Spirulina is rich in complete protein, containing approximately 60–70% protein on a dry-weight basis, along with gamma-linolenic acid (GLA), provitamin A, bioavailable iron, and B-complex vitamins. Its distinctive blue pigment, C-phycocyanin, is a water-soluble bioactive compound valued for its antioxidant properties and applications as a natural blue food colorant. Spirulina is predominantly cultivated in shallow, open raceway ponds under alkaline conditions, producing a vibrant green to blue-green culture. Its characteristic spiral-shaped filaments and rich biochemical composition make it a valuable microalgal resource for nutritional, commercial, and industrial applications.",
    
    details: [
      { label: "Scientific Name", value: "Arthrospira platensis / Arthrospira maxima" },
      { label: "Product Category", value: "Microalgae / Cyanobacteria" },
      { label: "Protein Content", value: "60–70% dry weight" },
      { label: "Culture Color", value: "Forest green to blue-green" },
      { label: "Cultivation Method", value: "Open Raceway Pond" },
      { label: "Culture PH", value: "9-11" },
      { label: "Cell Structure", value: "Helical Filaments (Trichomes)" },
      { label: "Filament Width", value: "6–12 µm" },
      { label: "Filament Length", value: "Up to 500 µm" }
    ],
  },
  
  {
    slug: "Chlorella",
    name: "Chlorella",
    price: 499,
    images: [p201, p202, p203],
    description:
      "Chlorella is a nutrient-rich, single-celled green microalga widely cultivated for its nutritional, functional, and commercial applications in the dietary supplement, food, and cosmetic industries. Recognized as one of the leading commercially produced microalgae, Chlorella is valued for its high chlorophyll content, particularly chlorophyll-a and chlorophyll-b, and its distinctive Chlorella Growth Factor (CGF), a complex containing peptides, nucleic acids, amino acids, and polysaccharides. Its biochemical composition makes it a valuable ingredient in dietary tablets, smoothies, and cosmetic formulations. Chlorella is cultivated in open circular tanks, raceway ponds, and closed fermentation systems, producing an intense emerald-green suspension. Characterized by its spherical microscopic cells, rigid multi-layered cell wall, and cup-shaped chloroplast, Chlorella is a versatile microalgal resource for nutritional, commercial, and industrial applications.",

    details: [
      { label: "Scientific Name", value: "Chlorella vulgaris / Chlorella pyrenoidosa" },
      { label: "Common Name", value: "Chlorella" },
      { label: "Product Category", value: "Microalgae / Green Algae" },
      { label: "Culture Color", value: "Brilliant Emerald Green" },
      { label: "Cultivation Method", value: "Open Tanks, Raceway Ponds, Closed Fermenters" },
      { label: "Cell Structure", value: "Unicellular, Spherical to Subspherical" },
      { label: "Cell Diameter", value: "2–10 µm" },
      { label: "Cell Wall", value: "Smooth, Rigid, Multi-layered" },
      { label: "Chloroplast", value: "Single Parietal Cup-shaped Chloroplast" },
      { label: "Pyrenoid", value: "Present" },
      { label: "Special Bioactive Compound", value: "Chlorella Growth Factor (CGF)" },
      { label: "Key Pigments", value: "Chlorophyll-a and Chlorophyll-b" },
      { label: "Applications", value: "Dietary Supplements, Smoothies, Cosmetic Extracts" }
    ],
  },
  
  {
    slug: "Freshwater-Red-Alga",
    name: "Freshwater Red Alga / Astaxanthin Alga",
    price: 499,
    images: [p301, p302, p303],
    description:
      "Haematococcus pluvialis is a freshwater red microalga widely cultivated for its exceptional ability to produce natural astaxanthin, a valuable antioxidant carotenoid used in nutraceutical supplements, cosmetics, and aquaculture applications. Under environmental stress conditions such as intense sunlight and nitrogen depletion, this microalga accumulates astaxanthin within its cells, transforming its appearance from a green motile culture into a deep crimson-red suspension. Its natural astaxanthin content can reach approximately 3–5% of cell dry weight, making it an important source of this bioactive compound. Haematococcus pluvialis is commonly cultivated using controlled systems, including tubular photobioreactors, through a two-stage cultivation process involving active green growth followed by red cyst formation. Its distinctive transformation, astaxanthin-rich composition, and versatile applications make it a valuable microalgal resource for nutraceutical, cosmetic, and aquaculture industries.",

    details: [
      { label: "Scientific Name", value: "Haematococcus pluvialis" },
      { label: "Synonym", value: "Haematococcus lacustris" },
      { label: "Product Category", value: "Microalgae / Freshwater Green Alga" },
      { label: "Culture Color", value: "Green to Deep Crimson Red" },
      { label: "Cultivation Method", value: "Two-stage Cultivation / Tubular Photobioreactor" },
      { label: "Growth Phase", value: "Green Motile Vegetative Stage" },
      { label: "Stress Phase", value: "Red Aplanospore / Cyst Stage" },
      { label: "Key Bioactive Compound", value: "Natural Astaxanthin" },
      { label: "Astaxanthin Content", value: "Up to 3–5% of Cell Dry Weight" },
      { label: "Vegetative Cell Structure", value: "Green, Ovoid, Biflagellated Cells" },
      { label: "Flagella", value: "Two Anterior Flagella" },
      { label: "Cyst Cell Structure", value: "Spherical, Non-motile Aplanospores" },
      { label: "Cyst Cell Diameter", value: "30–50 µm" },
      { label: "Cyst Cell Wall", value: "Thickened, Multi-layered" },
      { label: "Pigment Accumulation", value: "Astaxanthin-rich Lipid Globules" },
      { label: "Applications", value: "Nutraceuticals, Cosmetics, Aquaculture Feed" }
    ],
  },
  
  {
    slug: "Saline-Alga",
    name: "Saline Alga",
    price: 499,
    images: [p401, p402, p403],
    description:
      "Dunaliella salina is a salt-tolerant unicellular microalga widely cultivated for its exceptional ability to produce natural beta-carotene and other valuable bioactive compounds. Known for its applications in the nutraceutical, food, and cosmetic industries, this microalga accumulates beta-carotene up to approximately 10–14% of its dry cell weight, including 9-cis and all-trans beta-carotene, which helps protect its cellular machinery against intense light and ultraviolet radiation. Dunaliella salina thrives in highly saline environments and produces intracellular glycerol to maintain osmotic balance under extreme salt conditions. As salinity and light intensity increase, its culture transforms from yellowish-green into vibrant orange, terracotta, or pink shades due to carotenoid accumulation. Commonly cultivated in hypersaline open-air ponds and lagoon systems, its flexible cell structure, distinctive pigmentation, and valuable biochemical composition make it an important microalgal resource for natural pigments, nutritional supplements, and commercial biotechnology applications.",

    details: [
      {
        label: "Scientific Name",
        value: "Dunaliella salina"
      },
      {
        label: "Common Name",
        value: "Saline Alga / Pink Lake Alga"
      },
      {
        label: "Product Category",
        value: "Microalgae / Halophilic Green Alga"
      },
      {
        label: "Culture Color",
        value: "Yellowish-Green to Orange, Terracotta, or Pink"
      },
      {
        label: "Cultivation Method",
        value: "Hypersaline Open-air Ponds / Lagoon Systems"
      },
      {
        label: "Salinity",
        value: "High Salinity (>10–20% NaCl)"
      },
      {
        label: "Key Bioactive Compound",
        value: "Natural Beta-Carotene"
      },
      {
        label: "Beta-Carotene Content",
        value: "Up to 10–14% of Dry Cell Weight"
      },
      {
        label: "Beta-Carotene Forms",
        value: "9-cis and All-trans Beta-Carotene"
      },
      {
        label: "Osmoregulation",
        value: "Intracellular Glycerol Production"
      },
      {
        label: "Cell Structure",
        value: "Unicellular, Ovoid to Pyriform"
      },
      {
        label: "Cell Length",
        value: "10–20 µm"
      },
      {
        label: "Cell Wall",
        value: "Absent; Flexible Plasma Membrane"
      },
      {
        label: "Flagella",
        value: "Two Equal Anterior Flagella"
      },
      {
        label: "Pigment Storage",
        value: "Orange-Red Lipid Droplets"
      },
      {
        label: "Applications",
        value: "Natural Pigments, Nutraceuticals, Food Coloring, Cosmetics"
      }
    ],
  },
    
  {
    slug: "Marine-Thraustochytrid",
    name: "Marine Thraustochytrid",
    price: 499,
    images: [p501, p502],
    description:
      "Schizochytrium sp. is a marine microalgal microorganism widely cultivated for its exceptional ability to produce docosahexaenoic acid (DHA), an important omega-3 fatty acid used in nutraceuticals, infant nutrition, pet food, and aquaculture feed. Species such as Schizochytrium limacinum are recognized for their high lipid productivity, with DHA accounting for approximately 30–45% of total lipid weight. Its naturally produced DHA provides a sustainable, vegetarian, and mercury-free alternative to conventional fish oil sources. Schizochytrium is cultivated through heterotrophic fermentation in controlled, sterile, lightless bioreactors using carbon sources such as glucose and glycerol. The resulting culture typically appears as a thick, milky-white to pale golden suspension without green pigments. Its spherical microscopic cells develop nutrient-absorbing ectoplasmic networks and accumulate abundant intracellular lipid bodies, making it a valuable microorganism for sustainable omega-3 production and commercial biotechnology applications.",

    details: [
      {
        label: "Scientific Name",
        value: "Schizochytrium sp."
      },
      
      {
        label: "Product Category",
        value: "Marine Microorganism / Omega-3 Producer"
      },
      {
        label: "Culture Color",
        value: "Milky White to Pale Golden"
      },
      {
        label: "Cultivation Method",
        value: "Heterotrophic Fermentation"
      },
      {
        label: "Cultivation System",
        value: "Sterile, Lightless Stainless-Steel Bioreactor"
      },
      {
        label: "Carbon Sources",
        value: "Glucose / Glycerol"
      },
      {
        label: "Key Bioactive Compound",
        value: "Docosahexaenoic Acid (DHA)"
      },
      {
        label: "DHA Content",
        value: "Approximately 30–45% of Total Lipid Weight"
      },
      {
        label: "Cell Structure",
        value: "Unicellular, Spherical to Globose"
      },
      {
        label: "Cell Diameter",
        value: "5–20 µm"
      },
      {
        label: "Nutrient Absorption",
        value: "Ectoplasmic Networks / Rhizoids"
      },
      {
        label: "Lipid Storage",
        value: "Abundant Intracellular Lipid Bodies"
      },
      {
        label: "Applications",
        value: "Omega-3 Supplements, Infant Nutrition, Pet Nutrition, Aquaculture Feed"
      }
    ],
  },
  
  {
    slug: "Nannochloropsis",
    name: "Nannochloropsis",
    price: 499,
    images: [p601, p602, p603],
    description:
      "Nannochloropsis is a marine microalga widely cultivated for its nutritional value, high lipid productivity, and applications in aquaculture, nutraceuticals, and biotechnology. Species such as Nannochloropsis oculata and Nannochloropsis gaditana are valued for their production of eicosapentaenoic acid (EPA), an essential omega-3 fatty acid important for marine fish larvae, shellfish hatcheries, and live-feed enrichment. Its EPA content can reach approximately 3–4% of dry biomass, while total lipid accumulation may reach 40–50% of dry weight under suitable cultivation conditions. Nannochloropsis is commonly cultivated in indoor carboys, acrylic columns, and industrial tubular photobioreactors, producing a deep, uniform grassy-green suspension. Its microscopic cells are characterized by a compact spherical to slightly oval shape, a thick outer cell wall, and a single cup-shaped chloroplast. The combination of valuable omega-3 fatty acids, high lipid productivity, and reliable cultivation characteristics makes Nannochloropsis an important microalgal resource for aquaculture nutrition and commercial biotechnology applications.",

    details: [
      {
        label: "Scientific Name",
        value: "Nannochloropsis oculata / Nannochloropsis gaditana"
      },
      {
        label: "Common Name",
        value: "Nannochloropsis / Marine Green Water"
      },
      {
        label: "Product Category",
        value: "Marine Microalgae / Eustigmatophyte"
      },
      {
        label: "Culture Color",
        value: "Deep, Uniform Grassy Green"
      },
      {
        label: "Cultivation Method",
        value: "Indoor Photobioreactor Cultivation"
      },
      {
        label: "Cultivation System",
        value: "Carboys, Acrylic Columns, Tubular Photobioreactors"
      },
      {
        label: "Key Bioactive Compound",
        value: "Eicosapentaenoic Acid (EPA)"
      },
      {
        label: "EPA Content",
        value: "Approximately 3–4% of Dry Biomass"
      },
      {
        label: "Total Lipid Content",
        value: "Up to 40–50% of Dry Weight"
      },
      {
        label: "DHA Content",
        value: "Virtually Absent"
      },
      {
        label: "Cell Structure",
        value: "Unicellular, Round to Slightly Oval"
      },
      {
        label: "Cell Diameter",
        value: "2–4 µm"
      },
      {
        label: "Cell Wall",
        value: "Thick, Recalcitrant Outer Cell Wall"
      },
      {
        label: "Chloroplast",
        value: "Single Cup-shaped Parietal Chloroplast"
      },
      {
        label: "Flagella",
        value: "Absent / Non-flagellated"
      },
      {
        label: "Applications",
        value: "Marine Aquaculture, Live-feed Enrichment, EPA Extraction, Biorefineries"
      }
    ],
  },
  
  {
    slug: "Dinoflagellate",
    name: "DHA Dinoflagellate",
    price: 499,
    images: [p701, p702],
    description:
      "Crypthecodinium cohnii is a marine heterotrophic dinoflagellate widely cultivated for its exceptional ability to produce docosahexaenoic acid (DHA), an important omega-3 fatty acid used in infant nutrition, nutraceuticals, and specialized food applications. Recognized as a traditional industrial source of DHA for infant formula supplementation, this microorganism is valued for its distinctive lipid profile, in which DHA is the predominant polyunsaturated fatty acid, with virtually no competing EPA or linoleic acid. Crypthecodinium cohnii is cultivated in controlled, closed heterotrophic fermentation systems, producing a light tan, cream, or golden-straw suspension. Its microscopic structure features cellulose-like thecal plates, characteristic flagellar grooves, and distinct motile and non-motile stages. The combination of specialized DHA production, controlled cultivation, and valuable nutritional properties makes Crypthecodinium cohnii an important microorganism for commercial omega-3 production and infant nutrition applications.",

    details: [
      {
        label: "Scientific Name",
        value: "Crypthecodinium cohnii"
      },
      {
        label: "Common Name",
        value: "DHA Dinoflagellate"
      },
      {
        label: "Product Category",
        value: "Marine Microorganism / Dinoflagellate"
      },
      {
        label: "Culture Color",
        value: "Light Tan / Cream / Golden Straw"
      },
      {
        label: "Cultivation Method",
        value: "Heterotrophic Fermentation"
      },
      {
        label: "Cultivation System",
        value: "Closed Fermentation Bioreactor"
      },
      {
        label: "Key Bioactive Compound",
        value: "Docosahexaenoic Acid (DHA)"
      },
      {
        label: "DHA Production",
        value: "DHA Predominates in the Polyunsaturated Fatty Acid Profile"
      },
      {
        label: "Lipid Profile",
        value: "Virtually Exclusive DHA Among Polyunsaturated Fatty Acids"
      },
      {
        label: "Cell Structure",
        value: "Marine Armored Dinoflagellate"
      },
      {
        label: "Cell Size",
        value: "10–30 µm"
      },
      {
        label: "Cell Covering",
        value: "Cellulose-like Thecal Plates"
      },
      {
        label: "Motile Stage",
        value: "Flagellated Cells with Transverse and Longitudinal Grooves"
      },
      {
        label: "Non-motile Stage",
        value: "Rounded Vegetative Cyst"
      },
      {
        label: "Applications",
        value: "Infant Formula, DHA Supplements, Nutraceuticals, Specialized Food Applications"
      }
    ],
  },
  
  {
    slug: "Golden-Brown-Flagellate",
    name: "Golden-Brown Flagellate",
    price: 499,
    images: [p801, p802],
    description:
      "Isochrysis galbana, particularly the T-Iso strain, is a marine microalga widely cultivated for its nutritional value and essential applications in commercial aquaculture. Recognized as a foundational live-feed organism in hatcheries, it is commonly used for rearing bivalves such as oysters, mussels, and scallops, as well as shrimp larvae. This microalga is rich in docosahexaenoic acid (DHA), the marine carotenoid fucoxanthin, and valuable sterols such as epibrassicasterol, which contribute to its nutritional importance in shellfish development and larval growth. Isochrysis galbana is cultivated in transparent photobioreactors and vertical hanging bags, producing a distinctive golden-amber to olive-brown suspension. Its microscopic cells are characterized by a small, unicellular structure, two active flagella, and golden-brown chloroplasts containing a central pyrenoid. Its valuable biochemical composition, characteristic pigmentation, and suitability for larval feeding make Isochrysis galbana an important microalgal resource for marine aquaculture and hatchery nutrition.",

    details: [
      {
        label: "Scientific Name",
        value: "Isochrysis galbana (Strain T-Iso)"
      },
      {
        label: "Common Name",
        value: "Golden-Brown Flagellate"
      },
      {
        label: "Product Category",
        value: "Marine Microalgae / Haptophyte"
      },
      {
        label: "Culture Color",
        value: "Golden-Amber to Olive-Brown"
      },
      {
        label: "Cultivation Method",
        value: "Marine Photobioreactor Cultivation"
      },
      {
        label: "Cultivation System",
        value: "Vertical Hanging Bags / Transparent Photobioreactors"
      },
      {
        label: "Key Bioactive Compounds",
        value: "DHA, Fucoxanthin, Epibrassicasterol"
      },
      {
        label: "Omega-3 Fatty Acid",
        value: "Docosahexaenoic Acid (DHA)"
      },
      {
        label: "Key Carotenoid",
        value: "Fucoxanthin"
      },
      {
        label: "Cell Structure",
        value: "Unicellular, Naked Cells"
      },
      {
        label: "Cell Size",
        value: "4–7 µm"
      },
      {
        label: "Flagella",
        value: "Two Equal, Active Flagella"
      },
      {
        label: "Chloroplast",
        value: "One or Two Golden-Yellow to Brown Lobed Chloroplasts"
      },
      {
        label: "Pyrenoid",
        value: "Central Pyrenoid Present"
      },
      {
        label: "Applications",
        value: "Bivalve Hatcheries, Oyster and Mussel Larvae, Scallops, Shrimp Larvae, Live-feed Aquaculture"
      }
    ],
  },
  
  {
    slug: "Euglena",
    name: "Euglena",
    price: 499,
    images: [p901, p902, p903],
    description:
      "Euglena gracilis is a versatile unicellular microorganism widely cultivated for its nutritional properties and applications in functional foods, beverages, cosmetics, and biotechnology. It is particularly valued for its unique storage compound, paramylon, a crystalline insoluble β-1,3-glucan associated with prebiotic and immune-modulating research. Euglena also contains a diverse range of nutrients, including vitamins, minerals, and amino acids, while its flexible proteinaceous pellicle allows cellular movement and shape changes without a rigid cellulose cell wall. Commonly cultivated in indoor tubular photobioreactors and light-assisted fermentation systems, Euglena produces a vibrant bright-green culture. Its elongated, spindle-shaped cells feature a prominent flagellum, an orange-red eyespot, and green chloroplasts, making it a distinctive microorganism for nutritional, functional food, and commercial biotechnology applications.",

    details: [
      {
        label: "Scientific Name",
        value: "Euglena gracilis"
      },
      {
        label: "Common Name",
        value: "Euglena"
      },
      {
        label: "Product Category",
        value: "Microalgae / Unicellular Protist"
      },
      {
        label: "Culture Color",
        value: "Vibrant Bright Grass Green"
      },
      {
        label: "Cultivation Method",
        value: "Phototrophic / Light-assisted Heterotrophic Cultivation"
      },
      {
        label: "Cultivation System",
        value: "Indoor Tubular Photobioreactor / Light-assisted Fermenter"
      },
      {
        label: "Key Bioactive Compound",
        value: "Paramylon"
      },
      {
        label: "Paramylon Composition",
        value: "Crystalline Insoluble β-1,3-Glucan"
      },
      {
        label: "Nutritional Components",
        value: "Vitamins, Minerals, Amino Acids"
      },
      {
        label: "Cell Structure",
        value: "Unicellular, Elongated, Spindle-shaped"
      },
      {
        label: "Cell Length",
        value: "35–65 µm"
      },
      {
        label: "Cell Covering",
        value: "Flexible Proteinaceous Pellicle"
      },
      {
        label: "Cell Movement",
        value: "Metaboly (Dynamic Shape Changes)"
      },
      {
        label: "Flagella",
        value: "Single Prominent Emergent Flagellum"
      },
      {
        label: "Eyespot",
        value: "Orange-Red Stigma"
      },
      {
        label: "Chloroplast",
        value: "Discoid Green Chloroplasts"
      },
      {
        label: "Applications",
        value: "Functional Foods, Beverages, Cosmetics, Nutraceuticals, Biotechnology"
      }
    ],
  },
  
  {
    slug: "Marine-Diatom",
    name: "Marine Diatom",
    price: 499,
    images: [p1001, p1002],
    description:
      "Phaeodactylum tricornutum is a marine microalga widely cultivated for its valuable bioactive compounds and applications in biotechnology, aquaculture, cosmetics, and nutritional research. Recognized as an important model diatom, it is valued for its production of fucoxanthin, a natural carotenoid with antioxidant properties, and eicosapentaenoic acid (EPA), an essential omega-3 fatty acid. Its biochemical composition makes it a promising resource for cosmetic formulations, metabolic health research, and specialized nutritional ingredients. Phaeodactylum tricornutum is commonly cultivated in controlled, closed photobioreactors, producing a characteristic golden-brown, khaki, or yellowish-brown suspension. Unlike many conventional diatoms, it can grow without silica supplementation under suitable conditions, offering flexibility in cultivation and reducing certain production requirements. Its distinctive pleomorphic morphology includes fusiform, triradiate, and oval cell forms, making it an important organism for microalgal research, industrial biotechnology, and commercial bioactive production.",

    details: [
      {
        label: "Scientific Name",
        value: "Phaeodactylum tricornutum"
      },
      {
        label: "Common Name",
        value: "Marine Diatom"
      },
      {
        label: "Product Category",
        value: "Marine Microalgae / Diatom"
      },
      {
        label: "Culture Color",
        value: "Golden-Brown / Khaki / Yellowish-Brown"
      },
      {
        label: "Cultivation Method",
        value: "Marine Photobioreactor Cultivation"
      },
      {
        label: "Cultivation System",
        value: "Closed Photobioreactor"
      },
      {
        label: "Key Bioactive Compounds",
        value: "Fucoxanthin and Eicosapentaenoic Acid (EPA)"
      },
      {
        label: "Key Carotenoid",
        value: "Fucoxanthin"
      },
      {
        label: "Omega-3 Fatty Acid",
        value: "Eicosapentaenoic Acid (EPA)"
      },
      {
        label: "Silica Requirement",
        value: "Can Grow Without Silica Supplementation Under Suitable Conditions"
      },
      {
        label: "Cell Structure",
        value: "Unicellular, Pleomorphic Marine Diatom"
      },
      {
        label: "Cell Size",
        value: "10–30 µm"
      },
      {
        label: "Morphological Variants",
        value: "Fusiform, Triradiate, and Oval"
      },
      {
        label: "Fusiform Morphology",
        value: "Spindle-shaped; Most Prevalent Form"
      },
      {
        label: "Triradiate Morphology",
        value: "Three-Armed Star-shaped Form"
      },
      {
        label: "Oval Morphology",
        value: "Oval-shaped Cell Form"
      },
      {
        label: "Applications",
        value: "Cosmetics, Aquaculture, Fucoxanthin Extraction, EPA Production, Biotechnology, Metabolic Health Research"
      }
    ],
  },

];

export const getProduct = (slug) => products.find((p) => p.slug === slug);