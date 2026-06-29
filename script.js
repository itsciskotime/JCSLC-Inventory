const defaultItems = [
  // CHEMISTRY
  { id: 1,  name: "Test Tube",          description: "13x100",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 29,  image: "test-tube.jpg" },
  { id: 2,  name: "Test Tube",          description: "16x100",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 37,  image: "test-tube.jpg" },
  { id: 3,  name: "Test Tube",          description: "16x120",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 32,  image: "test-tube.jpg" },
  { id: 4,  name: "Test Tube",          description: "16x125",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 34,  image: "test-tube.jpg" },
  { id: 5,  name: "Test Tube",          description: "16x150",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 29,  image: "test-tube.jpg" },
  { id: 6,  name: "Test Tube",          description: "18x150",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 23,  image: "test-tube.jpg" },
  { id: 7,  name: "Test Tube Rack",     description: "Wooden",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 66,  image: "test-tube-rack-wood.jpg" },
  { id: 8,  name: "Test Tube Rack",    description: "Plastic",       category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 38,  image: "test-tube-rack-plastic.jpg" },
  { id: 9,  name: "Test Tube Holder",            description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 22,  image: "test-tube-holder.jpg" },
  { id: 10, name: "Test Tube Brush",             description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 24,  image: "test-tube-brush.jpg" },
  { id: 11, name: "Beaker",              description: "100 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 13,  image: "beaker-100ml.jpg" },
  { id: 12, name: "Beaker",              description: "150 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 16,  image: "beaker-150ml.jpg" },
  { id: 13, name: "Beaker",              description: "250 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 16,  image: "beaker-250ml.jpg" },
  { id: 14, name: "Beaker",              description: "400 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 4,   image: "beaker-400ml.jpg" },
  { id: 15, name: "Beaker",              description: "500 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 11,  image: "beaker-500ml.jpg" },
  { id: 16, name: "Beaker",              description: "600 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 4,   image: "beaker-600ml.jpg" },
  { id: 17, name: "Beaker",             description: "1000 ml",       category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 10,  image: "beaker-1000ml.jpg" },
  { id: 18, name: "Erlenmeyer Flask",    description: "250 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 18,  image: "erlenmeyer-flask-250ml.jpg" },
  { id: 19, name: "Florence Flask",      description: "125 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 9,   image: "florence-flask.jpg" },
  { id: 20, name: "Florence Flask",      description: "250 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 9,   image: "florence-flask-250ml.jpg" },
  { id: 21, name: "Florence Flask",      description: "500 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 8,   image: "florence-flask-500ml.jpg" },
  { id: 22, name: "Distilling Flask",    description: "250 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 9,   image: "distilling-flask-250ml.jpg" },
  { id: 23, name: "Distilling Flask",    description: "500 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 6,   image: "distilling-flask-500ml.jpg" },
  { id: 24, name: "Reagent Bottle",      description: "500 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 5,   image: "reagent-bottle-500ml.jpg" },
  { id: 25, name: "Reagent Bottle",      description: "250 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 2,   image: "reagent-bottle-250ml.jpg" },
  { id: 26, name: "Glass Funnel",                description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 9,   image: "glass-funnel.jpg" },
  { id: 27, name: "Petri Dish",                  description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 7,   image: "petri.jpg" },
  { id: 28, name: "Iron Clamp w/ Ring",          description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 7,   image: "iron-clamp-with-ring.jpg" },
  { id: 29, name: "Iron Stand with Base",        description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 7,   image: "iron-stand-with-base.jpg" },
  { id: 30, name: "Iron Clamp Holder",           description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 5,   image: "iron-clamp-holder.jpg" },
  { id: 31, name: "Retort Clamp",                description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 7,   image: "retort-clamp.jpg" },
  { id: 32, name: "Goggles",                     description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 2,   image: "goggles.jpg" },
  { id: 33, name: "Aspirator",                   description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 2,   image: "aspirator.jpg" },
  { id: 34, name: "Mortar and Pestle",           description: "—",             category: "Chemistry",    status: "Available", condition: "1 no pestle",                  quantity: 7,   image: "mortar-pestle.jpg" },
  { id: 35, name: "Evaporating Dish",            description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 4,   image: "evaporating-dish.jpg" },
  { id: 36, name: "Wire Gauze",                  description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 15,  image: "wire-gauze.jpg" },
  { id: 37, name: "Spatula",             description: "Metal",         category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 5,   image: "spatula-metal.jpg" },
  { id: 38, name: "Spatula",           description: "Ceramic",       category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 11,  image: "spatula-ceramic.jpg" },
  { id: 39, name: "Cork Stopper",    description: "All sizes",     category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 374, image: "cork-stopper.jpg" },
  { id: 40, name: "Dropper",                     description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 6,   image: "dropper.jpg" },
  { id: 41, name: "Graduated Cylinder",  description: "100 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 16,  image: "cylinder.jpg" },
  { id: 42, name: "Graduated Cylinder",  description: "250 ml",        category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 9,   image: "cylinder.jpg" },
  { id: 43, name: "Watch Glass",                 description: "—",             category: "Chemistry",    status: "Available", condition: "1 broken",                     quantity: 11,  image: "watch-glass.jpg" },
  { id: 44, name: "Stirring Rod",                description: "—",             category: "Chemistry",    status: "Available", condition: "1 broken",                     quantity: 7,   image: "stirring-rod.jpg" },
  { id: 45, name: "Base Burette",         description: "50 ml",         category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 8,   image: "base-burette.jpg" },
  { id: 46, name: "Acid Burette",         description: "50 ml",         category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 8,   image: "acid-burette.jpg" },
  { id: 47, name: "Tripod",                      description: "—",             category: "Chemistry",    status: "Available", condition: "1 missing metal",               quantity: 10,  image: "tripod.jpg" },
  { id: 48, name: "Crucible Tong",               description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 6,   image: "crucible-tong.jpg" },
  { id: 49, name: "Crucible with Cover",         description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 4,   image: "crucible-with-cover.jpg" },
  { id: 50, name: "Pipette",                     description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 9,   image: "pipette.jpg" },
  { id: 51, name: "Alcohol Lamp",                description: "—",             category: "Chemistry",    status: "Available", condition: "1 no closing cup",              quantity: 12,  image: "alcohol-lamp.jpg" },
  { id: 52, name: "Bunsen Burner",               description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 14,  image: "burner.jpg" },
  { id: 53, name: "Alcohol Thermometer",         description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 8,   image: "alcohol-thermometer.jpg" },
  { id: 54, name: "pH Meter",                    description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 2,   image: "ph-meter.jpg" },
  { id: 55, name: "pH Paper",                    description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 2,   image: "pH-paper.jpg" },
  { id: 56, name: "Litmus Paper",          description: "Red",           category: "Chemistry",    status: "Available", condition: "Consumable",                    quantity: 5,   image: "litmus-paper-red.jpg" },
  { id: 57, name: "Litmus Paper",         description: "Blue",          category: "Chemistry",    status: "Available", condition: "Consumable",                    quantity: 5,   image: "litmus-paper-blue.jpg" },
  { id: 58, name: "Gloves",          description: "50pcs/box",     category: "Chemistry",    status: "Available", condition: "Consumable",                    quantity: 9,   image: "gloves.jpg" },
  { id: 59, name: "Filter Paper",                description: "—",             category: "Chemistry",    status: "Available", condition: "Consumable",                    quantity: 3,   image: "filter-paper.jpg" },
  { id: 60, name: "Modern Periodic Table", description: "Tarpaulin", category: "Chemistry", status: "Available", condition: "Good",                         quantity: 2,   image: "periodic-table.jpg" },
  { id: 61, name: "Laboratory Gown",             description: "—",             category: "Chemistry",    status: "Available", condition: "Good",                         quantity: 0,   image: "laboratory-gown.jpg" },
  { id: 62, name: "First Aid Kit",               description: "—",             category: "Chemistry",    status: "Available", condition: "No contents",                   quantity: 1,   image: "first-aid-kit.jpg" },

  // PHYSICS / INTEGRATED SCIENCE
  { id: 63, name: "Rock and Mineral Sample Collection", description: "Set",   category: "Physics",      status: "Available", condition: "Good",                         quantity: 3,   image: "rock-and-mineral-sample-collection.jpg" },
  { id: 64, name: "Solar System Model",          description: "—",             category: "Physics",      status: "Available", condition: "1 missing part; no batteries",  quantity: 2,   image: "solar-system-model.jpg" },
  { id: 65, name: "Atom Model",                  description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 1,   image: "atom-model.jpg" },
  { id: 66, name: "Planetarium Model",           description: "—",             category: "Physics",      status: "Available", condition: "No batteries",                  quantity: 1,   image: "planetarium-model.jpg" },
  { id: 67, name: "Telescope",                   description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 1,   image: "telescope.jpg" },
  { id: 68, name: "Meter Stick",         description: "Metal",         category: "Physics",      status: "Available", condition: "Good",                         quantity: 2,   image: "meter-stick-metal.jpg" },
  { id: 69, name: "Meter Stick",          description: "Wood",          category: "Physics",      status: "Available", condition: "Good",                         quantity: 2,   image: "meter-stick-wood.jpg" },
  { id: 70, name: "Magnet",           description: "U-shaped",      category: "Physics",      status: "Available", condition: "1 missing",                    quantity: 66,  image: "magnet-u-shaped.jpg" },
  { id: 71, name: "Magnet",         description: "Bar-shaped",    category: "Physics",      status: "Available", condition: "Good",                         quantity: 10,  image: "magnet-bar-shaped.jpg" },
  { id: 72, name: "Compass",                     description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 79,  image: "compass.jpg" },
  { id: 73, name: "Stopwatch",                   description: "—",             category: "Physics",      status: "Available", condition: "60 not functioning",            quantity: 61,  image: "stopwatch.jpg" },
  { id: 74, name: "Spring Scale",                description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 11,  image: "spring-scale.jpg" },
  { id: 75, name: "Multimeter",                  description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 2,   image: "multimeter.jpg" },
  { id: 76, name: "Ammeter",                     description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 6,   image: "ammeter.jpg" },
  { id: 77, name: "Voltmeter",                   description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 8,   image: "voltmeter.jpg" },
  { id: 78, name: "Portable Scale",              description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 1,   image: "portable-scale.jpg" },
  { id: 79, name: "Seismograph",                 description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 1,   image: "seismograph.jpg" },
  { id: 80, name: "Bread Board",                 description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 11,  image: "bread-board.jpg" },
  { id: 81, name: "Slinky",                description: "Big",           category: "Physics",      status: "Available", condition: "5 knotted",                    quantity: 1,   image: "slinky-big.jpg" },
  { id: 82, name: "Slinky",              description: "Small",         category: "Physics",      status: "Available", condition: "Good",                         quantity: 1,   image: "slinky-small.jpg" },
  { id: 83, name: "Tuning Fork",                 description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 2,   image: "tuning-fork.jpg" },
  { id: 84, name: "Plain Mirror",          description: "2x4",           category: "Physics",      status: "Available", condition: "Good",                         quantity: 18,  image: "plain-mirror.jpg" },
  { id: 85, name: "Plain Mirror",          description: "4x4",           category: "Physics",      status: "Available", condition: "Good",                         quantity: 2,   image: "plain-mirror.jpg"},
  { id: 86, name: "Convex Lens",                 description: "Set",           category: "Physics",      status: "Available", condition: "Good",                         quantity: 2,   image: "convex-lens.jpg" },
  { id: 87, name: "Magnifying Glass",            description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 6,   image: "magnifying-glass.jpg" },
  { id: 88, name: "Glass Plate",        description: "Square",        category: "Physics",      status: "Available", condition: "Good",                         quantity: 6,   image: "glass-plate-square.jpg" },
  { id: 89, name: "Glass Plate",     description: "Rectangle",     category: "Physics",      status: "Available", condition: "Good",                         quantity: 7,   image: "glass-plate-rectangle.jpg" },
  { id: 90, name: "Prism",                       description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 4,   image: "prism.jpg" },
  { id: 91, name: "Flashlight",                  description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 1,   image: "flashlight.jpg" },
  { id: 92, name: "Bulb",                        description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 14,  image: "bulb.jpg" },
  { id: 93, name: "Bulb House",                  description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 2,   image: "bulb-house.jpg" },
  { id: 94, name: "Set of Weights",              description: "—",             category: "Physics",      status: "Available", condition: "1 separated in a box",          quantity: 7,   image: "set-of-weights.jpg" },
  { id: 95, name: "Triple Beam Balance",         description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 7,   image: "triple-beam-balance.jpg" },
  { id: 96, name: "Double Beam Balance",         description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 1,   image: "double-beam-balance.jpg" },
  { id: 97, name: "Spring Balance",              description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 11,  image: "spring-balance.jpg" },
  { id: 98, name: "Laser",                       description: "—",             category: "Physics",      status: "Available", condition: "Good",                         quantity: 2,   image: "laser.jpg" },
  { id: 99, name: "Bottle Container",    description: "Small",         category: "Physics",      status: "Available", condition: "Good",                         quantity: 3,   image: "bottle-container-small.jpg" },
  { id: 100, name: "Bottle Container",     description: "Big",           category: "Physics",      status: "Available", condition: "Good",                         quantity: 7,   image: "bottle-container-big.jpg" },

  // BIOLOGY
  { id: 101, name: "Compound Microscope",        description: "Compound",      category: "Biology",      status: "Available", condition: "Good",                         quantity: 10,  image: "compound-microscope.jpg" },
  { id: 102, name: "Electric Microscope",        description: "Electric",      category: "Biology",      status: "Available", condition: "Good",                         quantity: 1,   image: "electric-microscope.jpg" },
  { id: 103, name: "Dissecting Set",             description: "—",             category: "Biology",      status: "Available", condition: "2 complete; 3 missing tools",   quantity: 5,   image: "dissecting-set.jpg" },
  { id: 104, name: "Dissecting Tools",           description: "Box",           category: "Biology",      status: "Available", condition: "Good",                         quantity: 4,   image: "dissecting-tools.jpg" },
  { id: 105, name: "Dissecting Pans",            description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 9,   image: "dissecting-pans.jpg" },
  { id: 106, name: "Wild Animal Cage",           description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 6,   image: "wild-animal-cage.jpg" },
  { id: 107, name: "Cover Slip",                 description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 5,   image: "cover-slip.jpg" },
  { id: 108, name: "Glass Slides",     description: "Prepared slides for biology",      category: "Biology", status: "Available", condition: "Good",          quantity: 1,   image: "glass-slides.jpg" },
  { id: 109, name: "Glass Slides",      description: "Prepared slides for botany",       category: "Biology", status: "Available", condition: "Good",          quantity: 2,   image: "glass-slides.jpg" },
  { id: 110, name: "Glass Slides",description: "Prepared slides for microbiology", category: "Biology", status: "Available", condition: "1 box empty",   quantity: 1,   image: "glass-slides.jpg" },
  { id: 112, name: "Glass Slides",description: "Prepared slides for parasitology", category: "Biology", status: "Available", condition: "Good",          quantity: 2,   image: "glass-slides.jpg" },
  { id: 113, name: "Glass Slides",     description: "Prepared slides for zoology",      category: "Biology", status: "Available", condition: "Good",          quantity: 3,   image: "glass-slides.jpg" },
  { id: 114, name: "Glass Slides",   description: "Prepared slides for histology",    category: "Biology", status: "Available", condition: "Good",          quantity: 1,   image: "glass-slides.jpg" },
  { id: 115, name: "Glass Slides",       description: "Plain",         category: "Biology",      status: "Available", condition: "3 boxes consumed",             quantity: 21,  image: "glass-slides.jpg" },
  { id: 116, name: "Chromatography Paper",       description: "100 pcs",       category: "Biology",      status: "Available", condition: "Good",                         quantity: 2,   image: "chromatography-paper.jpg" },
  { id: 117, name: "Plant & Animal Mitosis/Meiosis Model", description: "Set", category: "Biology",     status: "Available", condition: "Good",                         quantity: 1,   image: "plant-animal-mitosis-meiosis-model.jpg" },
  { id: 118, name: "DNA Model",                  description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 1,   image: "dna-model.jpg" },
  { id: 119, name: "Digestive System Model",     description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 1,   image: "digestive-system-model.jpg" },
  { id: 120, name: "Human Torso",    description: "Bi-sexual",     category: "Biology",      status: "Available", condition: "Good",                         quantity: 1,   image: "human-torso-bisexual.jpg" },
  { id: 121, name: "Respiratory System Model",   description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 1,   image: "respiratory-system-model.jpg" },
  { id: 122, name: "Skeletal System Model",      description: "—",             category: "Biology",      status: "Available", condition: "Broken jaw",                   quantity: 1,   image: "skeletal-system-model.jpg" },
  { id: 123, name: "Muscular System Model",      description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 1,   image: "muscular-system-model.jpg" },
  { id: 124, name: "Urinary System Model",       description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 1,   image: "urinary-system-model.jpg" },
  { id: 125, name: "Kidney Model",               description: "—",             category: "Biology",      status: "Available", condition: "Good",                         quantity: 1,   image: "kidney-model.jpg" },
  { id: 126, name: "Atom Model",                 description: "Unassembled",   category: "Biology",      status: "Available", condition: "Unassembled",                  quantity: 1,   image: "atom-model.jpg" },

  // GRADE SCHOOL
  { id: 127, name: "Double Beam Balance",   description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 3,   image: "double-beam-balance.jpg" },
  { id: 128, name: "Weights",                    description: "Set",           category: "Grade School", status: "Available", condition: "3 separated weights",           quantity: 1,   image: "set-of-weights.jpg" },
  { id: 129, name: "Jar",                        description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 7,   image: "jar.jpg" },
  { id: 130, name: "Mortar and Pestle",     description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 4,   image: "mortar-pestle.jpg" },
  { id: 131, name: "Test Tube Rack",        description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 10,  image: "test-tube-rack-wood.jpg" },
  { id: 132, name: "Test Tube Brush",       description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 2,   image: "test-tube-brush.jpg" },
  { id: 133, name: "Test Tube Holder",      description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 3,   image: "test-tube-holder.jpg" },
  { id: 134, name: "Alcohol Lamp",          description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 4,   image: "alcohol-lamp.jpg" },
  { id: 135, name: "Graduated Cylinder", description: "100 ml",   category: "Grade School", status: "Available", condition: "Good",                         quantity: 2,   image: "cylinder.jpg" },
  { id: 136, name: "Magnifying Glass",      description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 2,   image: "magnifying-glass.jpg" },
  { id: 137, name: "Beaker",         description: "100 ml",        category: "Grade School", status: "Available", condition: "Good",                         quantity: 4,   image: "beaker.jpg" },
  { id: 138, name: "Beaker",         description: "150 ml",        category: "Grade School", status: "Available", condition: "Good",                         quantity: 2,   image: "beaker.jpg" },
  { id: 139, name: "Beaker",         description: "250 ml",        category: "Grade School", status: "Available", condition: "Good",                         quantity: 4,   image: "beaker.jpg" },
  { id: 140, name: "Funnel",                description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 3,   image: "funnel.jpg" },
  { id: 141, name: "Dropper",               description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 1,   image: "dropper.jpg" },
  { id: 142, name: "Tripod",                description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 1,   image: "tripod.jpg" },
  { id: 143, name: "Test Tube",     description: "13x100",        category: "Grade School", status: "Available", condition: "Good",                         quantity: 9,   image: "test-tube.jpg" },
  { id: 144, name: "Test Tube",     description: "16x100",        category: "Grade School", status: "Available", condition: "Good",                         quantity: 10,  image: "test-tube.jpg" },
  { id: 145, name: "Test Tube",     description: "16x125",        category: "Grade School", status: "Available", condition: "Good",                         quantity: 10,  image: "test-tube.jpg" },
  { id: 146, name: "Test Tube",     description: "16x150",        category: "Grade School", status: "Available", condition: "Good",                         quantity: 10,  image: "test-tube.jpg" },
  { id: 147, name: "Human Torso",           description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 1,   image: "human-torso.jpg" },
  { id: 148, name: "Fire Blanket",               description: "—",             category: "Grade School", status: "Available", condition: "Good",                         quantity: 1,   image: "fire-blanket.jpg" },

  // CONSUMABLE CHEMICALS
  { id: 149, name: "Acetic Acid",                description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "acetic acid.jpg" },
  { id: 150, name: "Ammonia",                    description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "ammonia.jpg" },
  { id: 151, name: "Baking Soda",                description: "(2) 500 grams", category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 2,   image: "baking soda.jpg" },
  { id: 152, name: "Benedict's Solution",        description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "benedict's solution.jpg" },
  { id: 153, name: "Bromothymol Blue",           description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "bromothymol blue.jpg" },
  { id: 154, name: "Calcium Chloride",           description: "250 grams",     category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "calcium chloride.jpg" },
  { id: 155, name: "Calcium Hydroxide",          description: "250 grams",     category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "calcium hydroxide.jpg" },
  { id: 156, name: "Cooking Oil",                description: "1 L",           category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "cooking oil.jpg" },
  { id: 157, name: "Copper Sulfate",             description: "250 grams",     category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "copper sulfate.jpg" },
  { id: 158, name: "Ethyl Alcohol 95%",          description: "(2) 1 L",       category: "Chemicals",    status: "Available", condition: "1 L consumed",                  quantity: 2,   image: "ethyl alcohol.jpg" },
  { id: 159, name: "Fehling's Solution A",       description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "fehling's solutionA.jpg" },
  { id: 160, name: "Fehling's Solution B",       description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "fehling's solutionB.jpg" },
  { id: 161, name: "Glucose Solution",           description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "glucose.jpg" },
  { id: 162, name: "Iron Filings",               description: "250 g",         category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "iron fillings.jpg" },
  { id: 163, name: "Iodine Solution",            description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "iodine solution.jpg" },
  { id: 164, name: "Isopropyl Alcohol",          description: "1 L",           category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "isopropyl alcohol.jpg" },
  { id: 165, name: "Lead (II) Nitrate",          description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "lead nitrate.jpg" },
  { id: 166, name: "Lugol's solution",           description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "lugol's solution.jpg" },
  { id: 167, name: "Magnesium Sulfate",          description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "magnesium sulfate.jpg" },
  { id: 168, name: "Magnesium Ribbon",           description: "2 rolls",       category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 2,   image: "magnesium ribbon.jpg" },
  { id: 169, name: "Methyl Alcohol",             description: "1 L",           category: "Chemicals",    status: "Available", condition: "Consumed",                      quantity: 0,   image: "methyl alcohol.jpg" },
  { id: 170, name: "Methylene Blue",             description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "methylene blue.jpg" },
  { id: 171, name: "Potassium Nitrate",          description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "potassium nitrate.jpg" },
  { id: 172, name: "Potassium Sulfate",          description: "100 grams",     category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "potassium sulfate.jpg" },
  { id: 173, name: "Sodium Chloride",            description: "250 grams",     category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "sodium chloride.jpg" },
  { id: 174, name: "Phenolphthalein",            description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "phenolphthalein.jpg" },
  { id: 175, name: "Potassium Iodide",           description: "100 grams",     category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "potassium iodide.jpg " },
  { id: 176, name: "Sodium Hydroxide Solution",  description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "sodium hydroxide solution.jpg" },
  { id: 177, name: "Sucrose Solution",           description: "250 ml",        category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "sucrose.jpg" },
  { id: 178, name: "Vinegar",                    description: "1 L",           category: "Chemicals",    status: "Available", condition: "Consumable",                    quantity: 1,   image: "vinegar.jpg" },
];

let items = [];
let borrowedItems = [];
let selectedItemId = null;
let currentCategory = "All";
let searchQuery = "";

function loadState() {
  try {
    const raw = localStorage.getItem("inventory_state_v4");
    if (raw) {
      const parsed = JSON.parse(raw);
      items = parsed.items || defaultItems.slice();
      borrowedItems = parsed.borrowedItems || [];
      return;
    }
  } catch (e) {
    console.error("Failed to load state", e);
  }
  items = defaultItems.map(i => ({ ...i }));
}

function saveState() {
  localStorage.setItem(
    "inventory_state_v4",
    JSON.stringify({ items, borrowedItems }),
  );
}

function getCategories() {
  const cats = ["All", ...new Set(defaultItems.map(i => i.category))];
  return cats;
}

function renderCategoryDropdown() {
  const select = document.getElementById("category-filter");
  if (!select) return;
  select.innerHTML = "";
  getCategories().forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    select.appendChild(opt);
  });
  select.value = currentCategory;
  select.addEventListener("change", function () {
    currentCategory = this.value;
    renderBorrowItemsTable();
  });
}

function getConditionBadgeClass(condition) {
  if (!condition || condition === "Good") return "condition-good";
  const lower = condition.toLowerCase();
  if (lower.includes("broken") || lower.includes("missing") || lower.includes("no content") || lower.includes("not functioning")) return "condition-bad";
  if (lower.includes("consumable") || lower.includes("consumed") || lower.includes("knotted") || lower.includes("separated") || lower.includes("empty") || lower.includes("unassembled") || lower.includes("no batteries") || lower.includes("no closing")) return "condition-warning";
  return "condition-warning";
}

function renderBorrowItemsTable() {
  const table = document.getElementById("borrow-items-table");
  if (!table) return;
  table.innerHTML = "";

  const q = searchQuery.toLowerCase().trim();
  const filtered = items.filter(i => {
    const matchCat = currentCategory === "All" || i.category === currentCategory;
    const matchSearch = !q ||
      i.name.toLowerCase().includes(q) ||
      (i.description && i.description.toLowerCase().includes(q)) ||
      i.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="7" style="text-align:center;color:#aaa;padding:20px;">No items in this category.</td>`;
    table.appendChild(row);
    return;
  }

  filtered.forEach((item) => {
    const condClass = getConditionBadgeClass(item.condition);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.id}</td>
      <td>
        <img src="${item.image}" class="item-thumb" onerror="this.src='placeholder.jpg'">
        ${item.name}
      </td>
      <td class="description-cell">${item.description || "—"}</td>
      <td><span class="category-badge category-${item.category.replace(/\s+/g,'-').toLowerCase()}">${item.category}</span></td>
      <td>${item.quantity}</td>
      <td><span class="condition-badge ${condClass}">${item.condition || "Good"}</span></td>
      <td>
        <button class="borrow-btn ${item.quantity === 0 ? "disabled" : ""}"
                ${item.quantity === 0 ? "disabled" : ""}
                onclick="showBorrowForm(${item.id})">
            Borrow
        </button>
      </td>
    `;
    table.appendChild(row);
  });
}

function renderBorrowedList() {
  const list = document.getElementById("borrowed-list");
  if (!list) return;
  list.innerHTML = "";

  borrowedItems.forEach((b) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${b.borrower}</td>
      <td>${b.gradeSection || "—"}</td>
      <td><img class="item-thumb" src="IMAGES/${b.itemImage || ''}" alt="${b.itemName}" onerror="this.style.display='none'"> ${b.itemName}</td>
      <td>${b.quantity}</td>
      <td>${b.dateBorrowed || "—"}</td>
      <td>${b.returnDeadline}</td>
    `;
    list.appendChild(row);
  });
}

function showBorrowForm(id) {
  selectedItemId = id;
  const item = items.find((i) => i.id === id);
  if (item) {
    document.getElementById("borrow-item-name").textContent = item.name;
    document.getElementById("quantity").value = 1;
    const formWrapper = document.getElementById("borrow-form-wrapper") || document.getElementById("borrow-form");
    formWrapper.style.display = "block";
  }
}

function hideBorrowForm() {
  const formWrapper = document.getElementById("borrow-form-wrapper") || document.getElementById("borrow-form");
  if (formWrapper) {
    formWrapper.style.display = "none";
    const actualForm = formWrapper.tagName === "FORM" ? formWrapper : formWrapper.querySelector("form");
    if (actualForm) actualForm.reset();
  }
  selectedItemId = null;
}

function submitBorrowForm(event) {
  event.preventDefault();
  const item = items.find((i) => i.id === selectedItemId);
  const qtyInput = parseInt(document.getElementById("quantity").value, 10);

  if (item && item.quantity >= qtyInput && qtyInput > 0) {
    item.quantity -= qtyInput;

    borrowedItems.push({
      borrower: document.getElementById("borrower-name").value,
      gradeSection: document.getElementById("grade-section").value,
      itemName: item.name,
      itemImage: item.image,
      quantity: qtyInput,
      dateBorrowed: document.getElementById("borrow-time").value,
      returnDeadline: document.getElementById("return-deadline").value,
    });

    saveState();
    renderBorrowItemsTable();
    renderBorrowedList();
    hideBorrowForm();
    showToast("✅ Item borrowed successfully!", "success");
  } else {
    alert("Check quantity or stock availability.");
  }
}

window.onload = function () {
  loadState();
  renderCategoryDropdown();
  renderBorrowItemsTable();
  renderBorrowedList();

  const searchBar = document.getElementById("search-bar");
  if (searchBar) {
    searchBar.addEventListener("input", function () {
      searchQuery = this.value;
      renderBorrowItemsTable();
    });
  }

  const cancelBtn = document.getElementById("cancel-borrow");
  if (cancelBtn) {
    cancelBtn.addEventListener("click", function (e) {
      e.preventDefault();
      hideBorrowForm();
    });
  }

  const borrowForm = document.getElementById("borrow-form");
  if (borrowForm) {
    const actualForm = borrowForm.tagName === "FORM" ? borrowForm : borrowForm.querySelector("form");
    if (actualForm) {
      actualForm.onsubmit = submitBorrowForm;
    }
  }
};
function showToast(message, type = "success") {
  // Remove existing toast if any
  const existing = document.getElementById("jcslc-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.id = "jcslc-toast";
  toast.textContent = message;
  toast.style.cssText = `
    position: fixed;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%) translateY(60px);
    background: ${type === "success" ? "#2ecc71" : "#e74c3c"};
    color: #fff;
    padding: 14px 32px;
    border-radius: 10px;
    font-size: 1.05em;
    font-weight: 600;
    box-shadow: 0 6px 24px rgba(0,0,0,0.18);
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
  `;
  document.body.appendChild(toast);

  // Slide in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) translateY(0)";
    });
  });

  // Slide out after 2.8s
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(-50%) translateY(60px)";
    setTimeout(() => toast.remove(), 350);
  }, 2800);
}