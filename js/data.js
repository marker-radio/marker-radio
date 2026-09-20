const STORIES = [
  {
    id: "hicksville-founding",
    name: "Hicksville",
    lat: 41.2958,
    lng: -84.7592,
    radius: 1200,
    short: "You are in Hicksville. In 1835 the Hicks Land Company of New York, led by Henry W. Hicks, platted this town on the edge of the Great Black Swamp. The first settler, a man named Burwell, built a cabin where High Street meets Main. The timber here was meant for ships. The swamp had to be drained before farms could live.",
    long: "",
    names: ["Henry W. Hicks", "Hicks Land Company", "Burwell", "Great Black Swamp"]
  },
  {
    id: "hicksville-st-pauls",
    name: "St. Paul's Church",
    lat: 41.2923,
    lng: -84.7636,
    radius: 180,
    short: "St. Paul's Episcopal Church, built in 1875 on West High Street and paid for by A.P. Edgerton. It is on the National Register of Historic Places. In the 1970s neighbors formed the Friends of St. Paul's to save it. That group became the Hicksville Historical Society.",
    long: "",
    names: ["St. Paul's Episcopal Church", "A.P. Edgerton", "Hicksville Historical Society"]
  },
  {
    id: "hicksville-land-office",
    name: "Hicks Land Office",
    lat: 41.2936,
    lng: -84.7618,
    radius: 160,
    short: "The Hicks Land Office at 108 West High Street. In 1838 A.P. Edgerton built this as headquarters and sold more than a hundred thousand acres to settlers. It still stands beside Johnson Memorial Library.",
    long: "",
    names: ["Hicks Land Office", "A.P. Edgerton", "Johnson Memorial Library"]
  },
  {
    id: "hicksville-edgerton",
    name: "A.P. Edgerton",
    lat: 41.2940,
    lng: -84.7615,
    radius: 200,
    short: "Alfred Peck Edgerton arrived from New York in 1837 to run the land company. He became postmaster, Ohio senator, a U.S. congressman, and the first U.S. Civil Service Commissioner. He steered the Baltimore and Ohio Railroad through Hicksville instead of Newville, Indiana. The village of Edgerton is named for him.",
    long: "",
    names: ["A.P. Edgerton", "Baltimore and Ohio Railroad", "Edgerton Ohio"]
  },
  {
    id: "hicksville-railroad",
    name: "B and O Railroad",
    lat: 41.2930,
    lng: -84.7590,
    radius: 350,
    short: "August 13, 1874, at 1:35 in the afternoon, the first train passed through Hicksville on the new Baltimore and Ohio line. Edgerton had pulled the main track here. The first depot sat on the south side of High Street, on Railroad Street. Farmers flagged trains down in the fields. President Hayes rolled through in 1876.",
    long: "",
    names: ["Baltimore and Ohio Railroad", "A.P. Edgerton", "Rutherford B. Hayes"]
  },
  {
    id: "hicksville-antwerp-pike",
    name: "Antwerp Pike",
    lat: 41.2900,
    lng: -84.7595,
    radius: 400,
    short: "In 1845 Edgerton helped win a toll road from Hicksville to Antwerp, today's Route 49. Wagons took crops to the Miami and Erie Canal. They crossed the Maumee by ferry near Antwerp. The pike was a corduroy road of logs that rotted in the swamp until the ditches came.",
    long: "",
    names: ["Antwerp Pike", "Miami and Erie Canal", "Maumee River", "A.P. Edgerton"]
  },
  {
    id: "hicksville-native-land",
    name: "Maumee Valley",
    lat: 41.2958,
    lng: -84.7592,
    radius: 900,
    short: "Before the land office, this was Maumee Valley hunting ground. Miami, Ottawa, Potawatomi, Shawnee, and Delaware people used the river trails and the portage toward the Wabash. The Treaty of Greenville in 1795 opened this country to survey and sale. The towns came after the treaties, not before.",
    long: "",
    names: ["Miami", "Ottawa", "Potawatomi", "Shawnee", "Delaware", "Treaty of Greenville", "Maumee River"]
  },
  {
    id: "hicksville-bingham-beveridge",
    name: "Bingham and Beveridge",
    lat: 41.2942,
    lng: -84.7610,
    radius: 180,
    short: "Two Hicksville women went west and changed the map. Amelia Swilley Bingham became a Broadway actress and one of the first American women to produce and manage her own company. Daeida Hartell Wilcox Beveridge helped lay out Hollywood, California. Their Ohio marker stands near High Street.",
    long: "",
    names: ["Amelia Bingham", "Daeida Wilcox Beveridge", "Hollywood"]
  },
  {
    id: "hicksville-huber",
    name: "Huber Opera House",
    lat: 41.2952,
    lng: -84.7612,
    radius: 160,
    short: "The Huber Opera House began as Mackey's Brick Hotel in 1882. After the Pettit Opera House burned, George Huber turned this building into a tryout house for shows bound for Chicago and New York. Amelia Bingham played here. William Jennings Bryan spoke here. The town saved it from becoming a parking lot.",
    long: "",
    names: ["Huber Opera House", "George Huber", "Amelia Bingham", "William Jennings Bryan"]
  },
  {
    id: "hicksville-twain",
    name: "Huck Finn",
    lat: 41.2958,
    lng: -84.7592,
    radius: 800,
    short: "In 1885 Mark Twain put this town in Adventures of Huckleberry Finn. Tom Sawyer claims he is a stranger from Hicksville, Ohio. That is the town's first appearance in American literature, and locals still tell it.",
    long: "",
    names: ["Mark Twain", "Tom Sawyer", "Adventures of Huckleberry Finn"]
  },
  {
    id: "hicksville-veterans",
    name: "Veterans Memorials",
    lat: 41.2945,
    lng: -84.7685,
    radius: 220,
    short: "North Bryan Street holds the town's war stones. Fourteen Hicksville men died in the First World War. Three were killed on the same day, November 4, 1918. There is a Civil War G.A.R. monument, a Meuse-Argonne Avenue, and a stone for every war from the Revolution to the present.",
    long: "",
    names: ["Meuse-Argonne", "Grand Army of the Republic"]
  },
  {
    id: "hicksville-park",
    name: "Hicksville Park",
    lat: 41.2980,
    lng: -84.7620,
    radius: 300,
    short: "The village park is the public ground Hicksville kept for itself. Ball fields, the Rotary pavilion, the track, the pool. Not a battlefield. Just the square of land a farm town set aside so the next generation would have a place to stand.",
    long: "",
    names: ["Hicksville Parks"]
  },
  {
    id: "hicksville-industry",
    name: "Timber and Handles",
    lat: 41.2932,
    lng: -84.7585,
    radius: 300,
    short: "Hicksville was timber before it was corn. Handle factories and stave mills sat by the railroad. Crook and Miller made handles on Railroad Street. Local shops even turned out a curly-fry machine. The swamp was drained so farms and factories could use the same tracks.",
    long: "",
    names: ["Crook and Miller", "Great Black Swamp"]
  }
 {
    id: "fortwayne-kekionga",
    name: "Kekionga",
    lat: 41.0814,
    lng: -85.1339,
    radius: 900,
    short: "Before the fort, this was Kekionga — the capital of the Miami nation, at the meeting of the St. Joseph, St. Marys, and Maumee rivers. Little Turtle called it that glorious gate through which all the good words of our chiefs had to pass. The portage here linked the Great Lakes to the Mississippi. The towns came after the treaties, not before.",
    long: "",
    names: ["Kekionga", "Miami", "Little Turtle", "Maumee River", "St. Joseph River", "St. Marys River"]
  },
  {
    id: "fortwayne-wayne",
    name: "Anthony Wayne",
    lat: 41.0814,
    lng: -85.1339,
    radius: 700,
    short: "General Mad Anthony Wayne built the first American fort here on October twenty-second, seventeen ninety-four, after defeating the Miami at Fallen Timbers. He named it for himself. Two more forts followed — one survived the eighteen-twelve siege, the last was torn down in eighteen nineteen. The city took the fort's name.",
    long: "",
    names: ["Anthony Wayne", "Fallen Timbers", "Fort Wayne"]
  },
  {
    id: "fortwayne-siege",
    name: "Siege of 1812",
    lat: 41.0797,
    lng: -85.1394,
    radius: 600,
    short: "September fifth to twelfth, eighteen twelve — the only time Fort Wayne was truly threatened. After Detroit and Fort Dearborn fell, Potawatomi and Miami warriors besieged the garrison. Captain Rhea held on, barely. William Henry Harrison's relief army arrived on the twelfth and the attackers fled. Two soldiers died. The frontier held.",
    long: "",
    names: ["Siege of Fort Wayne", "William Henry Harrison", "War of 1812"]
  },
  {
    id: "fortwayne-canal",
    name: "Wabash and Erie Canal",
    lat: 41.0797,
    lng: -85.1394,
    radius: 800,
    short: "Ground broke here February twenty-second, eighteen thirty-two. The Wabash and Erie was the longest canal ever built in North America — four hundred sixty-eight miles. Fort Wayne sat at its highest point, the summit, which is why the city is still called Summit City. The canal made the town a boomtown before the railroads killed it.",
    long: "",
    names: ["Wabash and Erie Canal", "Summit City"]
  },
  {
    id: "fortwayne-appleseed",
    name: "Johnny Appleseed",
    lat: 41.1118,
    lng: -85.1232,
    radius: 250,
    short: "John Chapman — Johnny Appleseed — spent his last years planting orchards around Fort Wayne and is buried in Johnny Appleseed Park on Parnell Avenue. The stone reads: He lived for others. Seventeen seventy-four to eighteen forty-five.",
    long: "",
    names: ["Johnny Appleseed", "John Chapman", "Johnny Appleseed Park"]
  },
  {
    id: "fortwayne-richardville",
    name: "Chief Richardville",
    lat: 41.0314,
    lng: -85.1644,
    radius: 200,
    short: "Chief Jean Baptiste de Richardville — Pinšiwa — built this house in eighteen twenty-seven on the St. Marys River. Principal chief of the Miami from eighteen eighteen until his death in eighteen forty-one, he signed five treaties with the United States. It is one of only three treaty houses east of the Mississippi, and a National Historic Landmark.",
    long: "",
    names: ["Chief Richardville", "Jean Baptiste de Richardville", "Pinšiwa", "Miami"]
  },
  {
    id: "fortwayne-courthouse",
    name: "Allen County Courthouse",
    lat: 41.0797,
    lng: -85.1394,
    radius: 300,
    short: "The Allen County Courthouse — Beaux-Arts masterpiece by local architect Brentwood Tolan, completed nineteen oh two. Copper dome two hundred fifty-five feet high, topped by a fourteen-foot Lady Liberty. Murals, scagliola, stained glass. National Historic Landmark. The building the whole city used to give directions by.",
    long: "",
    names: ["Allen County Courthouse", "Brentwood Tolan", "Lady Liberty"]
  },
  {
    id: "fortwayne-history-center",
    name: "The History Center",
    lat: 41.0795,
    lng: -85.1363,
    radius: 200,
    short: "The History Center — Fort Wayne's old city hall, built eighteen ninety-three in Richardsonian Romanesque sandstone. It served as city government until nineteen seventy-one, then became the museum. The old jail in the basement is still unrestored. Thirty thousand artifacts, from the Ice Age to today.",
    long: "",
    names: ["The History Center", "Old City Hall", "Wing and Mahurin"]
  },
  {
    id: "fortwayne-littleturtle",
    name: "Little Turtle",
    lat: 41.0912,
    lng: -85.1324,
    radius: 150,
    short: "Chief Little Turtle — Me-she-kin-no-quah — the Miami war leader who defeated two American armies here in seventeen ninety and ninety-one, then chose peace. He died in Fort Wayne in eighteen twelve and was buried with full military honors. His grave was rediscovered in nineteen twelve under a house on Lawton Place. The sword Washington gave him is in the History Center.",
    long: "",
    names: ["Little Turtle", "Me-she-kin-no-quah", "Miami"]
  },
  {
    id: "fortwayne-headwaters",
    name: "Headwaters Park",
    lat: 41.0843,
    lng: -85.1395,
    radius: 400,
    short: "Headwaters Park — thirty acres at the exact spot where the St. Marys and St. Joseph rivers join to form the Maumee. This is the reason Fort Wayne exists. Flood-control basin, festival ground, and the zero-mile marker of the Rivergreenway. The first night baseball game in America was played here in eighteen eighty-three.",
    long: "",
    names: ["Headwaters Park", "Three Rivers", "Rivergreenway"]
  }
{
    id: "auburn-founding",
    name: "Auburn Automobile Company",
    lat: 41.3667,
    lng: -85.0589,
    radius: 1500,
    short: "The Auburn Automobile Company grew out of the Eckhart Carriage Company — Charles Eckhart built horse-drawn buggies here from eighteen seventy-four. His sons Frank and Morris switched to cars, named the company in nineteen hundred, and sold the first Auburn to the public in nineteen oh three: a single-cylinder, six-horsepower machine for fourteen hundred fifty dollars. The town's whole identity rides on that switch.",
    long: "",
    names: ["Auburn Automobile Company", "Eckhart Carriage Company", "Frank Eckhart", "Morris Eckhart", "Charles Eckhart"]
  },
  {
    id: "auburn-cord",
    name: "E.L. Cord",
    lat: 41.3667,
    lng: -85.0589,
    radius: 1200,
    short: "Errett Lobban Cord — a salesman, not an engineer — took control in nineteen twenty-six and turned a struggling shop into a luxury empire. He bought Duesenberg a year later, founded the Cord Corporation, and put his name on the front-wheel-drive Cord L-29, the first production car with that layout. Sales peaked above fourteen thousand cars a year, then the Depression and an SEC investigation shut the doors in nineteen thirty-seven.",
    long: "",
    names: ["E.L. Cord", "Errett Lobban Cord", "Cord Corporation", "Cord L-29"]
  },
  {
    id: "auburn-duesenberg",
    name: "Duesenberg Brothers",
    lat: 41.3667,
    lng: -85.0589,
    radius: 1200,
    short: "Fred and Augie Duesenberg built racing engines in St. Paul, moved to Indianapolis in nineteen twenty, and won the Indianapolis five hundred four times in the twenties. Cord bought the bankrupt company in nineteen twenty-six and made it his top marque. Only about four hundred eighty Model J and SJ chassis were ever built — roughly five a month — which is why a Duesenberg is still the measuring stick for American luxury.",
    long: "",
    names: ["Fred Duesenberg", "Augie Duesenberg", "Duesenberg", "Indianapolis 500", "Model J"]
  },
  {
    id: "auburn-museum",
    name: "Auburn Cord Duesenberg Museum",
    lat: 41.3558,
    lng: -85.0572,
    radius: 250,
    short: "The museum lives in the company's own nineteen thirty Art Deco headquarters on South Wayne Street — limestone carved with the company name, designed by Fort Wayne architect Alvin Strauss. Locals saved it from demolition in nineteen seventy-four and opened it on July sixth as the Home of the Classics. Named a National Historic Landmark in two thousand five — one of only forty-two in Indiana.",
    long: "",
    names: ["Auburn Cord Duesenberg Automobile Museum", "Alvin M. Strauss", "National Historic Landmark", "South Wayne Street"]
  },
  {
    id: "auburn-buehrig",
    name: "Gordon Buehrig",
    lat: 41.3558,
    lng: -85.0572,
    radius: 250,
    short: "Gordon Buehrig designed the Auburn Boattail Speedster and the Cord eight-ten and eight-twelve at twenty-five years old — the cars that made Auburn famous in Hollywood. A street beside the museum now bears his name. The clay model of his Cord, covered in his own notes, is still on display inside.",
    long: "",
    names: ["Gordon Buehrig", "Auburn Boattail Speedster", "Cord 810", "Cord 812"]
  },
  {
    id: "auburn-kruse",
    name: "Kruse Auctions",
    lat: 41.3667,
    lng: -85.0589,
    radious: 1500,
    short: "Dean Kruse started auctioneering farm equipment in Auburn in nineteen fifty-two and turned it into the world's biggest collector-car auction. His Labor Day weekend sale still fills the town every September — the fifty-sixth edition in twenty twenty-six pulled over twenty-one million dollars. Auburn didn't just build the cars; it became the place the world comes to buy them.",
    long: "",
    names: },
  {
    id: "auburn-railroad",
    name: "Wabash Railroad",
    lat: 41.3667,
    lng: -85.0589,
    radius: 1000,
    short: "Auburn sits on the Wabash Railroad, the line that carried Eckhart carriages out and brought Cord's luxury buyers in. The depot is gone, but the tracks still run through town — the same steel that made a carriage shop into an automaker.",
    long: "",
    names: ["Wabash Railroad"]
  },
  {
    id: "auburn-native",
    name: "Miami Land",
    lat: 41.3667,
    lng: -85.0589,
    radius: 2000,
    short: "Before the carriages, this was Miami land along the St. Joseph River. The Treaty of St. Mary's in eighteen eighteen opened DeKalb County to settlement, and Auburn was platted soon after. The name comes from the golden color of the autumn leaves, not the hair.",
    long: "",
    names: ["Miami", "Treaty of St. Mary's", "St. Joseph River", "DeKalb County"]
  }

];

