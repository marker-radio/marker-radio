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
 {
    id: "columbus-founding",
    name: "Franklinton and Columbus",
    lat: 39.9612,
    lng: -82.9988,
    radius: 2000,
    short: "Before Columbus, there was Franklinton — laid out in seventeen ninety-seven by surveyor Lucas Sullivant on the west bank of the Scioto, named for Benjamin Franklin. A flood wiped out the first plat, so he rebuilt on higher ground. In eighteen twelve the state legislature picked the high banks opposite Franklinton for a permanent capital, donated by Lyne Starling and three partners, and named it Columbus. The capital came first; the city grew around it.",
    long: "",
    names: ["Lucas Sullivant", "Franklinton", "Lyne Starling", "Scioto River", "Olentangy River"]
  },
  {
    id: "columbus-statehouse",
    name: "Ohio Statehouse",
    lat: 39.9614,
    lng: -82.9990,
    radius: 300,
    short: "The Ohio Statehouse — cornerstone laid July fourth, eighteen thirty-nine, finished in eighteen sixty-one after twenty-two years of politics, panics, and cholera. Prison labor from the Ohio Penitentiary cut the stone. The old capitol burned in the eighteen fifties, which finally forced the work done. Lincoln visited three times. National Historic Landmark.",
    long: "",
    names: ["Ohio Statehouse", "Ohio Penitentiary", "Abraham Lincoln", "Capitol Square"]
  },
  {
    id: "columbus-camp-chase",
    name: "Camp Chase",
    lat: 39.9450,
    lng: -83.0450,
    radius: 500,
    short: "Camp Chase — Union training camp turned Confederate prison, named for Treasury Secretary Salmon P. Chase. From eighteen sixty-one to sixty-five, up to twenty-five thousand prisoners passed through. More than two thousand two hundred Confederates are buried in the cemetery on Sullivant Avenue — one of the largest Confederate cemeteries in the North. The camp itself is gone; the graves remain.",
    long: "",
    names: ["Camp Chase", "Salmon P. Chase", "Camp Chase Confederate Cemetery"]
  },
  {
    id: "columbus-kelton",
    name: "Kelton House",
    lat: 39.9560,
    lng: -82.9900,
    radius: 200,
    short: "The Kelton House on East Town Street — a confirmed Underground Railroad station. Fernando and Sophia Kelton hid freedom seekers in their Victorian home, built in eighteen fifty-two. Fernando was so committed he served as a pallbearer when Lincoln's funeral train passed through Columbus. The museum is closed for restoration after a fire in twenty twenty-five, but the story stands.",
    long: "",
    names: ["Kelton House", "Fernando Kelton", "Sophia Kelton", "Underground Railroad"]
  },
  {
    id: "columbus-scioto",
    name: "Scioto River",
    lat: 39.9612,
    lng: -82.9988,
    radius: 1500,
    short: "The Scioto is why Columbus exists — navigable, central, and the reason the capital landed here. It also nearly killed the city: cholera and typhoid from raw sewage, the nineteen thirteen flood that drowned Franklinton, and the nineteen fifty-nine flood that emptied it again. The Scioto Mile promenade and the dams that tamed it are the modern answer to an old river.",
    long: "",
    names: ["Scioto River", "Scioto Mile", "Griggs Dam", "O'Shaughnessy Dam"]
  },
  {
    id: "columbus-canal",
    name: "Ohio and Erie Canal",
    lat: 39.9612,
    lng: -82.9988,
    radius: 1500,
    short: "The Ohio and Erie Canal reached Columbus through an eleven-mile feeder from the main line at Newark. Completed in eighteen thirty-two, it carried grain and goods to Lake Erie and the Ohio River until the railroads killed it in the eighteen fifties. The canal made Columbus a shipping town before it was a railroad town.",
    long: "",
    names: ["Ohio and Erie Canal", "Columbus Feeder"]
  },
  {
    id: "columbus-native",
    name: "Adena Mound",
    lat: 39.9550,
    lng: -82.9980,
    radius: 400,
    short: "High Street once ran straight into a forty-foot Adena burial mound at the corner of High and Mound streets. In the eighteen thirties the city leveled it as an obstruction — and used the clay to make bricks for the first Statehouse. Shrum Mound in Campbell Park is one of the last cone-shaped mounds left in the city. The Hopewell earthworks nearby are now a UNESCO World Heritage Site.",
    long: "",
    names: ["Adena", "Hopewell", "Shrum Mound", "Campbell Park", "Mound Street"]
  },
  {
    id: "columbus-people",
    name: "Jack Nicklaus and James Thurber",
    lat: 39.9612,
    lng: -82.9988,
    radius: 2000,
    short: "Two Columbus names the world knows. Jack Nicklaus — the Golden Bear — was born here, studied at Ohio State, and dotted the I in the Script Ohio. James Thurber grew up in the house on Jefferson Avenue that is now the Thurber House; he wrote about the ghost that got in, and the house still hosts writers. One ruled the fairways, one ruled the page.",
    long: "",
    names: ["Jack Nicklaus", "Ohio State University", "James Thurber", "Thurber House"]
  },
  {
    id: "columbus-park",
    name: "Franklin Park Conservatory",
    lat: 39.9500,
    lng: -82.9700,
    radius: 400,
    short: "Franklin Park — a hundred acres of gardens, fountains, and the Franklin Park Conservatory, a Victorian glasshouse from eighteen ninety-five. It survived the nineteen thirteen flood that drowned the neighborhood around it. Chihuly glass, a butterfly house, and the city's oldest public greenhouse — the green heart of a city that once flooded.",
    long: "",
    names: },
  {
    id: "columbus-legend",
    name: "Mill Race Monster",
    lat: 39.9800,
    lng: -83.0200,
    radius: 500,
    short: "November nineteen seventy-four — Columbus had its own monster. Dozens of people reported a six-foot green hairy creature with claws near Mill Race Park. Women said it jumped on their car and scratched the paint. The parks director counted armed searchers. It turned out to be a man in green blankets and a mask. The legend stuck anyway.",
    long: "",
    names: ["Mill Race Monster", "Mill Race Park"]
  }
{
    id: "columbus-founding",
    name: "Franklinton and Columbus",
    lat: 39.9612,
    lng: -82.9988,
    radius: 2000,
    short: "Before Columbus, there was Franklinton — laid out in seventeen ninety-seven by surveyor Lucas Sullivant on the west bank of the Scioto, named for Benjamin Franklin. A flood wiped out the first plat, so he rebuilt on higher ground. In eighteen twelve the state legislature picked the high banks opposite Franklinton for a permanent capital, donated by Lyne Starling and three partners, and named it Columbus. The capital came first; the city grew around it.",
    long: "",
    names: ["Lucas Sullivant", "Franklinton", "Lyne Starling", "Scioto River", "Olentangy River"]
  },
  {
    id: "columbus-statehouse",
    name: "Ohio Statehouse",
    lat: 39.9614,
    lng: -82.9990,
    radius: 300,
    short: "The Ohio Statehouse — cornerstone laid July fourth, eighteen thirty-nine, finished in eighteen sixty-one after twenty-two years of politics, panics, and cholera. Prison labor from the Ohio Penitentiary cut the stone. The old capitol burned in the eighteen fifties, which finally forced the work done. Lincoln visited three times. National Historic Landmark.",
    long: "",
    names: ["Ohio Statehouse", "Ohio Penitentiary", "Abraham Lincoln", "Capitol Square"]
  },
  {
    id: "columbus-camp-chase",
    name: "Camp Chase",
    lat: 39.9450,
    lng: -83.0450,
    radius: 500,
    short: "Camp Chase — Union training camp turned Confederate prison, named for Treasury Secretary Salmon P. Chase. From eighteen sixty-one to sixty-five, up to twenty-five thousand prisoners passed through. More than two thousand two hundred Confederates are buried in the cemetery on Sullivant Avenue — one of the largest Confederate cemeteries in the North. The camp itself is gone; the graves remain.",
    long: "",
    names: ["Camp Chase", "Salmon P. Chase", "Camp Chase Confederate Cemetery"]
  },
  {
    id: "columbus-kelton",
    name: "Kelton House",
    lat: 39.9560,
    lng: -82.9900,
    radius: 200,
    short: "The Kelton House on East Town Street — a confirmed Underground Railroad station. Fernando and Sophia Kelton hid freedom seekers in their Victorian home, built in eighteen fifty-two. Fernando was so committed he served as a pallbearer when Lincoln's funeral train passed through Columbus. The museum is closed for restoration after a fire in twenty twenty-five, but the story stands.",
    long: "",
    names: ["Kelton House", "Fernando Kelton", "Sophia Kelton", "Underground Railroad"]
  },
  {
    id: "columbus-scioto",
    name: "Scioto River",
    lat: 39.9612,
    lng: -82.9988,
    radius: 1500,
    short: "The Scioto is why Columbus exists — navigable, central, and the reason the capital landed here. It also nearly killed the city: cholera and typhoid from raw sewage, the nineteen thirteen flood that drowned Franklinton, and the nineteen fifty-nine flood that emptied it again. The Scioto Mile promenade and the dams that tamed it are the modern answer to an old river.",
    long: "",
    names: ["Scioto River", "Scioto Mile", "Griggs Dam", "O'Shaughnessy Dam"]
  },
  {
    id: "columbus-canal",
    name: "Ohio and Erie Canal",
    lat: 39.9612,
    lng: -82.9988,
    radius: 1500,
    short: "The Ohio and Erie Canal reached Columbus through an eleven-mile feeder from the main line at Newark. Completed in eighteen thirty-two, it carried grain and goods to Lake Erie and the Ohio River until the railroads killed it in the eighteen fifties. The canal made Columbus a shipping town before it was a railroad town.",
    long: "",
    names: ["Ohio and Erie Canal", "Columbus Feeder"]
  },
  {
    id: "columbus-native",
    name: "Adena Mound",
    lat: 39.9550,
    lng: -82.9980,
    radius: 400,
    short: "High Street once ran straight into a forty-foot Adena burial mound at the corner of High and Mound streets. In the eighteen thirties the city leveled it as an obstruction — and used the clay to make bricks for the first Statehouse. Shrum Mound in Campbell Park is one of the last cone-shaped mounds left in the city. The Hopewell earthworks nearby are now a UNESCO World Heritage Site.",
    long: "",
    names: ["Adena", "Hopewell", "Shrum Mound", "Campbell Park", "Mound Street"]
  },
  {
    id: "columbus-people",
    name: "Jack Nicklaus and James Thurber",
    lat: 39.9612,
    lng: -82.9988,
    radius: 2000,
    short: "Two Columbus names the world knows. Jack Nicklaus — the Golden Bear — was born here, studied at Ohio State, and dotted the I in the Script Ohio. James Thurber grew up in the house on Jefferson Avenue that is now the Thurber House; he wrote about the ghost that got in, and the house still hosts writers. One ruled the fairways, one ruled the page.",
    long: "",
    names: ["Jack Nicklaus", "Ohio State University", "James Thurber", "Thurber House"]
  },
  {
    id: "columbus-park",
    name: "Franklin Park Conservatory",
    lat: 39.9500,
    lng: -82.9700,
    radius: 400,
    short: "Franklin Park — a hundred acres of gardens, fountains, and the Franklin Park Conservatory, a Victorian glasshouse from eighteen ninety-five. It survived the nineteen thirteen flood that drowned the neighborhood around it. Chihuly glass, a butterfly house, and the city's oldest public greenhouse — the green heart of a city that once flooded.",
    long: "",
    names: },
  {
    id: "columbus-legend",
    name: "Mill Race Monster",
    lat: 39.9800,
    lng: -83.0200,
    radius: 500,
    short: "November nineteen seventy-four — Columbus had its own monster. Dozens of people reported a six-foot green hairy creature with claws near Mill Race Park. Women said it jumped on their car and scratched the paint. The parks director counted armed searchers. It turned out to be a man in green blankets and a mask. The legend stuck anyway.",
    long: "",
    names: ["Mill Race Monster", "Mill Race Park"]
  }
{
    id: "columbus-german-village",
    name: "German Village",
    lat: 39.9450,
    lng: -82.9900,
    radius: 800,
    short: "German Village — the largest privately funded historic preservation district in the country. German immigrants settled here in the eighteen forties and by eighteen sixty-five made up nearly a third of Columbus. Red-brick homes, wrought-iron fences, brick-paved streets. Over sixteen hundred structures restored since nineteen sixty. National Register in nineteen seventy-four.",
    long: "",
    names: },
  {
    id: "columbus-schiller-park",
    name: "Schiller Park",
    lat: 39.9400,
    lng: -82.9950,
    radius: 300,
    short: "Schiller Park — the heart of German Village. The city bought twenty-three acres in eighteen sixty-seven for fifteen thousand dollars. In eighteen ninety-one a crowd of fifty thousand watched the dedication of a twenty-five-foot statue of the poet Friedrich von Schiller, cast in Munich and given to the city. The name was changed to Washington Park during World War One, then changed back in nineteen thirty.",
    long: "",
    names: ["Schiller Park", "Friedrich von Schiller", "German Village Society"]
  },
  {
    id: "columbus-goodale-park",
    name: "Goodale Park",
    lat: 39.9752,
    lng: -83.0068,
    radius: 400,
    short: "Goodale Park — Columbus's oldest public park, donated in eighteen fifty-one by Dr. Lincoln Goodale, the town's first physician. Thirty-seven acres in Victorian Village, second only to Boston Common at the time. During the Civil War it briefly served as Camp Jackson, a staging ground for Union troops. Today it hosts ComFest every June.",
    long: "",
    names: ["Goodale Park", "Lincoln Goodale", "Camp Jackson", "ComFest"]
  },
  {
    id: "columbus-topiary",
    name: "Topiary Park",
    lat: 39.9580,
    lng: -82.9850,
    radius: 250,
    short: "Topiary Park — the only park in the world modeled entirely on a painting. Fifty-four life-size topiary figures recreate Georges Seurat's A Sunday Afternoon on the Island of La Grande Jatte, plus boats, dogs, and one monkey. Sculptor James T. Mason trained the shrubs over metal frames. It sits on the grounds of the old Ohio School for the Deaf.",
    long: "",
    names: ["Topiary Park", "James T. Mason", "Georges Seurat", "Old Deaf School Park"]
  },
  {
    id: "columbus-ohio-stadium",
    name: "Ohio Stadium",
    lat: 40.0017,
    lng: -83.0197,
    radius: 500,
    short: "Ohio Stadium — the Horseshoe, built in nineteen twenty-two, seats over a hundred thousand. National Historic Landmark in nineteen seventy-four. Designed by Howard Dwight Smith. The Script Ohio is drawn here every home game. Jack Nicklaus dotted the I in nineteen sixty. The stadium is the reason Columbus bleeds scarlet and gray.",
    long: "",
    names: ["Ohio Stadium", "The Shoe", "Howard Dwight Smith", "Script Ohio", "Jack Nicklaus"]
  },
  {
    id: "columbus-osu",
    name: "Ohio State University",
    lat: 40.0067,
    lng: -83.0305,
    radius: 1500,
    short: "Ohio State — founded in eighteen seventy as the Ohio Agricultural and Mechanical College, opened with twenty-four students. Now one of the largest campuses in the country, nearly sixty thousand students. The Oval is its green heart. Mirror Lake was once the campus water supply. The university turned a farm college into a city within a city.",
    long: "",
    names: ["Ohio State University", "The Oval", "Mirror Lake", "Ohio Agricultural and Mechanical College"]
  },
  {
    id: "columbus-rickenbacker",
    name: "Eddie Rickenbacker",
    lat: 39.9350,
    lng: -82.9700,
    radius: 300,
    short: "Eddie Rickenbacker — Columbus-born, the Ace of Aces. Twenty-six confirmed aerial victories in World War One, Medal of Honor. His childhood home still stands in the Driving Park neighborhood. He later ran Eastern Air Lines and survived a twenty-four-day ordeal adrift in the Pacific in nineteen forty-two. The airport south of town bears his name.",
    long: "",
    names: ["Eddie Rickenbacker", "Rickenbacker International Airport", "Driving Park"]
  },
  {
    id: "columbus-floodwall",
    name: "Franklinton Floodwall",
    lat: 39.9550,
    lng: -83.0150,
    radius: 800,
    short: "The Franklinton Floodwall — seven point two miles of concrete along the Scioto, built from nineteen ninety-three to two thousand four at a final cost of one hundred thirty-four million dollars. It exists because of the nineteen thirteen flood, which killed ninety-three people and drowned Franklinton, and the nineteen fifty-nine flood that did it again. Senator John Glenn and Congresswoman Deborah Pryce fought for the money. The Bottoms finally stopped flooding.",
    long: "",
    names: ["Franklinton Floodwall", "Great Flood of 1913", "John Glenn", "Deborah Pryce", "Franklinton"]
  },
  {
    id: "columbus-brewery-district",
    name: "Brewery District",
    lat: 39.9450,
    lng: -82.9950,
    radius: 600,
    short: "The Brewery District — south of downtown, where German immigrant Louis Hoster opened a brewery in eighteen thirty-six. His Gold Top lager made him famous until Prohibition killed it. The old Hoster plant and the surrounding warehouses sat empty for decades, then came back as lofts, restaurants, and Columbus Brewing Company, founded in nineteen eighty-eight — the oldest craft brewery in Central Ohio.",
    long: "",
    names: ["Brewery District", "Louis Hoster", "Hoster Brewing", "Columbus Brewing Company", "Gold Top"]
  },
  {
    id: "columbus-anheuser-busch",
    name: "Anheuser-Busch Columbus",
    lat: 40.0800,
    lng: -82.9800,
    radius: 600,
    short: "Anheuser-Busch's Columbus brewery — six hundred twenty thousand square feet on Schrock Road, dedicated August fifteenth, nineteen sixty-eight. Forty million dollars to build, capacity of one point seven million barrels a year. The Clydesdales still parade down Parsons Avenue. It is one of only two Anheuser-Busch plants that brew non-alcohol beer, and the newest Brewhouse can make ten million barrels.",
    long: "",
    names: ["Anheuser-Busch", "Budweiser", "Clydesdales", "Schrock Road"]
  },
  {
    id: "columbus-leVeque",
    name: "LeVeque Tower",
    lat: 39.9620,
    lng: -82.9995,
    radius: 300,
    short: "LeVeque Tower — Art Deco skyscraper, the city's second-tallest, finished in nineteen twenty-seven. It was the tallest building between New York and Chicago when it opened. Named for Leslie LeVeque, who built it as the American Insurance Union Citadel. The limestone and terra-cotta tower still anchors the downtown skyline.",
    long: "",
    names: ["LeVeque Tower", "Leslie LeVeque", "American Insurance Union"]
  },
  {
    id: "columbus-santa-maria",
    name: "Santa Maria Replica",
    lat: 39.9600,
    lng: -83.0000,
    radius: 300,
    short: "A full-scale replica of Christopher Columbus's flagship, the Santa Maria, moored on the Scioto Riverfront. Installed in nineteen ninety-two for the five-hundredth anniversary of his voyage. The city is named for him, and the ship is the floating reminder of why. Genoa Park beside it is named for Columbus's birthplace.",
    long: "",
    names: }
{
    id: "columbus-german-village",
    name: "German Village",
    lat: 39.9450,
    lng: -82.9900,
    radius: 800,
    short: "German Village — the largest privately funded historic preservation district in the country. German immigrants settled here in the eighteen forties and by eighteen sixty-five made up nearly a third of Columbus. Red-brick homes, wrought-iron fences, brick-paved streets. Over sixteen hundred structures restored since nineteen sixty. National Register in nineteen seventy-four.",
    long: "",
    names: },
  {
    id: "columbus-schiller-park",
    name: "Schiller Park",
    lat: 39.9400,
    lng: -82.9950,
    radius: 300,
    short: "Schiller Park — the heart of German Village. The city bought twenty-three acres in eighteen sixty-seven for fifteen thousand dollars. In eighteen ninety-one a crowd of fifty thousand watched the dedication of a twenty-five-foot statue of the poet Friedrich von Schiller, cast in Munich and given to the city. The name was changed to Washington Park during World War One, then changed back in nineteen thirty.",
    long: "",
    names: ["Schiller Park", "Friedrich von Schiller", "German Village Society"]
  },
  {
    id: "columbus-goodale-park",
    name: "Goodale Park",
    lat: 39.9752,
    lng: -83.0068,
    radius: 400,
    short: "Goodale Park — Columbus's oldest public park, donated in eighteen fifty-one by Dr. Lincoln Goodale, the town's first physician. Thirty-seven acres in Victorian Village, second only to Boston Common at the time. During the Civil War it briefly served as Camp Jackson, a staging ground for Union troops. Today it hosts ComFest every June.",
    long: "",
    names: ["Goodale Park", "Lincoln Goodale", "Camp Jackson", "ComFest"]
  },
  {
    id: "columbus-topiary",
    name: "Topiary Park",
    lat: 39.9580,
    lng: -82.9850,
    radius: 250,
    short: "Topiary Park — the only park in the world modeled entirely on a painting. Fifty-four life-size topiary figures recreate Georges Seurat's A Sunday Afternoon on the Island of La Grande Jatte, plus boats, dogs, and one monkey. Sculptor James T. Mason trained the shrubs over metal frames. It sits on the grounds of the old Ohio School for the Deaf.",
    long: "",
    names: ["Topiary Park", "James T. Mason", "Georges Seurat", "Old Deaf School Park"]
  },
  {
    id: "columbus-ohio-stadium",
    name: "Ohio Stadium",
    lat: 40.0017,
    lng: -83.0197,
    radius: 500,
    short: "Ohio Stadium — the Horseshoe, built in nineteen twenty-two, seats over a hundred thousand. National Historic Landmark in nineteen seventy-four. Designed by Howard Dwight Smith. The Script Ohio is drawn here every home game. Jack Nicklaus dotted the I in nineteen sixty. The stadium is the reason Columbus bleeds scarlet and gray.",
    long: "",
    names: ["Ohio Stadium", "The Shoe", "Howard Dwight Smith", "Script Ohio", "Jack Nicklaus"]
  },
  {
    id: "columbus-osu",
    name: "Ohio State University",
    lat: 40.0067,
    lng: -83.0305,
    radius: 1500,
    short: "Ohio State — founded in eighteen seventy as the Ohio Agricultural and Mechanical College, opened with twenty-four students. Now one of the largest campuses in the country, nearly sixty thousand students. The Oval is its green heart. Mirror Lake was once the campus water supply. The university turned a farm college into a city within a city.",
    long: "",
    names: ["Ohio State University", "The Oval", "Mirror Lake", "Ohio Agricultural and Mechanical College"]
  },
  {
    id: "columbus-rickenbacker",
    name: "Eddie Rickenbacker",
    lat: 39.9350,
    lng: -82.9700,
    radius: 300,
    short: "Eddie Rickenbacker — Columbus-born, the Ace of Aces. Twenty-six confirmed aerial victories in World War One, Medal of Honor. His childhood home still stands in the Driving Park neighborhood. He later ran Eastern Air Lines and survived a twenty-four-day ordeal adrift in the Pacific in nineteen forty-two. The airport south of town bears his name.",
    long: "",
    names: ["Eddie Rickenbacker", "Rickenbacker International Airport", "Driving Park"]
  },
  {
    id: "columbus-floodwall",
    name: "Franklinton Floodwall",
    lat: 39.9550,
    lng: -83.0150,
    radius: 800,
    short: "The Franklinton Floodwall — seven point two miles of concrete along the Scioto, built from nineteen ninety-three to two thousand four at a final cost of one hundred thirty-four million dollars. It exists because of the nineteen thirteen flood, which killed ninety-three people and drowned Franklinton, and the nineteen fifty-nine flood that did it again. Senator John Glenn and Congresswoman Deborah Pryce fought for the money. The Bottoms finally stopped flooding.",
    long: "",
    names: ["Franklinton Floodwall", "Great Flood of 1913", "John Glenn", "Deborah Pryce", "Franklinton"]
  },
  {
    id: "columbus-brewery-district",
    name: "Brewery District",
    lat: 39.9450,
    lng: -82.9950,
    radius: 600,
    short: "The Brewery District — south of downtown, where German immigrant Louis Hoster opened a brewery in eighteen thirty-six. His Gold Top lager made him famous until Prohibition killed it. The old Hoster plant and the surrounding warehouses sat empty for decades, then came back as lofts, restaurants, and Columbus Brewing Company, founded in nineteen eighty-eight — the oldest craft brewery in Central Ohio.",
    long: "",
    names: ["Brewery District", "Louis Hoster", "Hoster Brewing", "Columbus Brewing Company", "Gold Top"]
  },
  {
    id: "columbus-anheuser-busch",
    name: "Anheuser-Busch Columbus",
    lat: 40.0800,
    lng: -82.9800,
    radius: 600,
    short: "Anheuser-Busch's Columbus brewery — six hundred twenty thousand square feet on Schrock Road, dedicated August fifteenth, nineteen sixty-eight. Forty million dollars to build, capacity of one point seven million barrels a year. The Clydesdales still parade down Parsons Avenue. It is one of only two Anheuser-Busch plants that brew non-alcohol beer, and the newest Brewhouse can make ten million barrels.",
    long: "",
    names: ["Anheuser-Busch", "Budweiser", "Clydesdales", "Schrock Road"]
  },
  {
    id: "columbus-leVeque",
    name: "LeVeque Tower",
    lat: 39.9620,
    lng: -82.9995,
    radius: 300,
    short: "LeVeque Tower — Art Deco skyscraper, the city's second-tallest, finished in nineteen twenty-seven. It was the tallest building between New York and Chicago when it opened. Named for Leslie LeVeque, who built it as the American Insurance Union Citadel. The limestone and terra-cotta tower still anchors the downtown skyline.",
    long: "",
    names: ["LeVeque Tower", "Leslie LeVeque", "American Insurance Union"]
  },
  {
    id: "columbus-santa-maria",
    name: "Santa Maria Replica",
    lat: 39.9600,
    lng: -83.0000,
    radius: 300,
    short: "A full-scale replica of Christopher Columbus's flagship, the Santa Maria, moored on the Scioto Riverfront. Installed in nineteen ninety-two for the five-hundredth anniversary of his voyage. The city is named for him, and the ship is the floating reminder of why. Genoa Park beside it is named for Columbus's birthplace.",
    long: "",
    names: }

  {
    id: "columbus-short-north",
    name: "Short North",
    lat: 39.9750,
    lng: -83.0050,
    radius: 700,
    short: "The Short North — the arts district on High Street between downtown and the university. The name comes from its position just north of downtown. In the nineteen eighties it was a rough strip of empty storefronts; artists moved in, galleries opened, and the city painted the telephone poles in rainbow colors. Now it's the densest gallery row in Ohio.",
    long: "",
    names: },
  {
    id: "columbus-thurber",
    name: "Thurber House",
    lat: 39.9710,
    lng: -83.0040,
    radius: 200,
    short: "The Thurber House on Jefferson Avenue — James Thurber lived here as a boy from nineteen oh nine to nineteen seventeen. He wrote about the ghost that got in, the night the bed fell, and his mother who couldn't tell time. The house is now a literary center and museum. Thurber drew for The New Yorker for decades, but Columbus made him.",
    long: "",
    names: ["Thurber House", "James Thurber", "Jefferson Avenue"]
  },
  {
    id: "columbus-vet-memorial",
    name: "Columbus Museum of Art",
    lat: 39.9640,
    lng: -82.9850,
    radius: 300,
    short: "The Columbus Museum of Art — founded in eighteen eighty-one, moved to this building on East Broad Street in nineteen thirty-one. The Pizzuti Collection wing opened in twenty nineteen. It holds one of the finest collections of early American modernism in the Midwest, including works by Georgia O'Keeffe and Edward Hopper. The sculpture garden out front is free.",
    long: "",
    names: ["Columbus Museum of Art", "Pizzuti Collection", "Georgia O'Keeffe", "Edward Hopper"]
  },
  {
    id: "columbus-arena-district",
    name: "Arena District",
    lat: 39.9680,
    lng: -83.0050,
    radius: 500,
    short: "The Arena District — downtown's entertainment core, built around Nationwide Arena, home of the Columbus Blue Jackets since two thousand. The district opened in two thousand with the arena, the convention center, and blocks of restaurants and bars. Before it, this was a parking lot. The Blue Jackets were the first NHL team in a non-traditional hockey market.",
    long: "",
    names: ["Arena District", "Nationwide Arena", "Columbus Blue Jackets", "Nationwide Insurance"]
  },
  {
    id: "columbus-hilliard",
    name: "Heritage Village",
    lat: 39.9500,
    lng: -83.0200,
    radius: 400,
    short: "Heritage Village at the Ohio History Center — a living history museum with relocated nineteenth-century buildings: a log cabin, a schoolhouse, a doctor's office, a blacksmith shop. It shows how Central Ohio lived before the capital. The Ohio History Center itself is a brutalist landmark designed by Ireland and Associates, opened in nineteen seventy.",
    long: "",
    names: ["Heritage Village", "Ohio History Center", "Ohio History Connection"]
  },
  {
    id: "columbus-grange",
    name: "Grange Insurance Audubon Center",
    lat: 39.9200,
    lng: -82.9500,
    radius: 500,
    short: "The Grange Insurance Audubon Center — a nature preserve and education center on the east side, built on reclaimed industrial land. It opened in two thousand six with trails, a boardwalk over a restored wetland, and a LEED-certified building. It is the first urban Audubon center in the country, proving a city can bring the wild back.",
    long: "",
    names: ["Grange Insurance Audubon Center", "Audubon", "Grange Insurance"]
  },
  {
    id: "columbus-deaf-school",
    name: "Ohio School for the Deaf",
    lat: 39.9580,
    lng: -82.9850,
    radius: 300,
    short: "The Ohio School for the Deaf — founded in eighteen twenty-nine, one of the oldest in the nation. The old campus on East Town Street is now Topiary Park. The school moved to a new campus on Morse Road in nineteen seventy-two. It trained generations of deaf Ohioans and gave the city its most unusual park.",
    long: "",
    names: ["Ohio School for the Deaf", "Topiary Park", "Morse Road"]
  },
  {
    id: "columbus-penitentiary",
    name: "Ohio Penitentiary",
    lat: 39.9650,
    lng: -82.9950,
    radius: 400,
    short: "The Ohio Penitentiary — the state's first prison, opened in eighteen thirty-four on Spring Street. It held over five thousand inmates at its peak and was the site of the worst prison fire in American history: April twenty-first, nineteen thirty, when three hundred twenty inmates died. It was torn down in nineteen ninety-eight. The Arena District now sits on the ground.",
    long: "",
    names: },
  {
    id: "columbus-streetcar",
    name: "Columbus Streetcar",
    lat: 39.9650,
    lng: -83.0000,
    radius: 600,
    short: "The Columbus Streetcar — a two point three mile loop from the Short North through downtown to the Arena District, opened in twenty eighteen. It is the first modern streetcar in Ohio. The line replaced the old interurban that once connected Columbus to every town in the county. It runs on tracks laid over the same right-of-way.",
    long: "",
    names: },
  {
    id: "columbus-airport",
    name: "John Glenn Columbus International",
    lat: 39.9980,
    lng: -82.8910,
    radius: 800,
    short: "John Glenn Columbus International Airport — the city's main airport, renamed in two thousand three for the astronaut and senator who grew up in New Concord. The original Port Columbus opened in nineteen twenty-nine as one of the first municipal airports in the country. Charles Lindbergh dedicated it. Glenn's name replaced the old one after his death.",
    long: "",
    names: ["John Glenn Columbus International Airport", "Port Columbus", "John Glenn", "Charles Lindbergh"]
  },
  {
    id: "columbus-refinery",
    name: "Standard Oil Refinery",
    lat: 39.9500,
    lng: -82.9800,
    radius: 500,
    short: "The Standard Oil refinery on the south side — built in the eighteen eighties, one of the largest in the Midwest. It processed crude from Pennsylvania and later from Oklahoma. The refinery closed in nineteen seventy-three, but the storage tanks and pipelines shaped the neighborhood for a century. The land is now industrial park.",
    long: "",
    names: ["Standard Oil", "South Side", "Columbus Refinery"]
  },
  {
    id: "columbus-railroad-yards",
    name: "Columbus Rail Yards",
    lat: 39.9600,
    lng: -83.0100,
    radius: 800,
    short: "Columbus was a railroad crossroads — the Pennsylvania, the Baltimore and Ohio, the New York Central, and the Chesapeake and Ohio all met here. The yards downtown handled freight for the whole state. The last passenger train left Union Station in nineteen seventy-nine. The old station is now the convention center.",
    long: "",
    names: ["Columbus Rail Yards", "Union Station", "Pennsylvania Railroad", "Baltimore and Ohio", "New York Central"]
  }

];

