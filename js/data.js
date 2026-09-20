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
  {
    id: "columbus-short-north-galleries",
    name: "Short North Galleries",
    lat: 39.9760,
    lng: -83.0045,
    radius: 400,
    short: "The Short North gallery row — over a hundred artists and studios packed into a few blocks of High Street. The Columbus College of Art and Design anchors it, founded in eighteen eighty-three as the Columbus Art School. The rainbow poles were painted in nineteen eighty-four by local artists to mark the district. It is the densest concentration of working artists in Ohio.",
    long: "",
    names: },
  {
    id: "columbus-gcac",
    name: "Greater Columbus Arts Council",
    lat: 39.9650,
    lng: -83.0000,
    radius: 300,
    short: "The Greater Columbus Arts Council — founded in nineteen seventy-three, one of the first municipal arts agencies in the country. It funds public art, runs the Jazz and Ribs Festival, and manages the percent-for-art program that puts sculpture in every new city building. Columbus spends more per capita on public art than almost any city its size.",
    long: "",
    names: ["Greater Columbus Arts Council", "Jazz and Ribs Festival", "Percent for Art"]
  },
  {
    id: "columbus-jazz-arts-group",
    name: "Jazz Arts Group",
    lat: 39.9650,
    lng: -83.0000,
    radius: 300,
    short: "The Jazz Arts Group — Columbus's professional jazz ensemble, founded in nineteen sixty-two by Ray Eubanks. It is one of the oldest continuously operating jazz organizations in the country. Eubanks led it for over fifty years. The group still performs at the Lincoln Theatre on East Long Street, a restored nineteen twenties vaudeville house.",
    long: "",
    names: },
  {
    id: "columbus-lincoln-theatre",
    name: "Lincoln Theatre",
    lat: 39.9680,
    lng: -82.9980,
    radius: 200,
    short: "The Lincoln Theatre on East Long Street — opened in nineteen twenty-eight as a vaudeville and movie house for Columbus's Black community. It hosted Duke Ellington, Cab Calloway, and Ella Fitzgerald during the era when Black performers were barred from downtown stages. Restored in two thousand eight, it is now the home of the Jazz Arts Group and a National Register landmark.",
    long: "",
    names: ["Lincoln Theatre", "Duke Ellington", "Cab Calloway", "Ella Fitzgerald"]
  },
  {
    id: "columbus-king-arts",
    name: "King Arts Complex",
    lat: 39.9550,
    lng: -82.9850,
    radius: 300,
    short: "The King Arts Complex on Mount Vernon Avenue — named for Dr. Martin Luther King Jr., opened in nineteen eighty-seven in a restored nineteen twenties church. It is the cultural anchor of the King-Lincoln District, the heart of Columbus's Black community for over a century. The district was once home to the city's first Black-owned businesses, newspapers, and churches.",
    long: "",
    names: ["King Arts Complex", "Martin Luther King Jr.", "King-Lincoln District", "Mount Vernon Avenue"]
  },
  {
    id: "columbus-hanford",
    name: "Hanford Village",
    lat: 39.9200,
    lng: -82.9500,
    radius: 400,
    short: "Hanford Village — a living history museum on the east side, built around a relocated eighteen thirties log cabin and a one-room schoolhouse. It shows pioneer life in Central Ohio before the capital. The village includes a blacksmith shop, a general store, and a doctor's office, all furnished with period tools. It is run by volunteers and open on weekends.",
    long: "",
    names: ["Hanford Village", "Pioneer Life", "Log Cabin"]
  },
  {
    id: "columbus-pickle-bill",
    name: "The Pickle Bill",
    lat: 39.9650,
    lng: -83.0000,
    radius: 200,
    short: "The Pickle Bill — Columbus's oldest continuously operating restaurant, opened in nineteen forty-nine on East Broad Street. It started as a hot dog stand and grew into a Columbus institution. The name comes from the owner's habit of giving free pickles to customers. It is still family-owned and still serves the same chili dogs.",
    long: "",
    names: },
  {
    id: "columbus-jeno",
    name: "Jeno's Pizza",
    lat: 39.9600,
    lng: -83.0000,
    radius: 300,
    short: "Jeno's Pizza — founded by Jeno Paulucci, the same man who invented Chun King and the pizza roll. He opened his first pizza restaurant in Columbus in nineteen sixty-two. The chain grew to over two hundred locations before he sold it. Paulucci also founded the city of Sanford, Florida, and was a major donor to the University of Minnesota.",
    long: "",
    names: ["Jeno Paulucci", "Jeno's Pizza", "Chun King", "Pizza Roll"]
  },
  {
    id: "columbus-wendys",
    name: "Wendy's",
    lat: 39.9500,
    lng: -83.0000,
    radius: 500,
    short: "Wendy's — founded by Dave Thomas in Columbus in nineteen sixty-nine. The first restaurant opened on East Broad Street, named for his daughter Melinda, who went by Wendy. Thomas started as a Kentucky Fried Chicken operator and built the square-hamburger chain into a national brand. His statue still stands outside the original location.",
    long: "",
    names: ["Wendy's", "Dave Thomas", "Melinda Lou Thomas", "East Broad Street"]
  },
  {
    id: "columbus-bob-evans",
    name: "Bob Evans",
    lat: 39.9500,
    lng: -83.0000,
    radius: 500,
    short: "Bob Evans — founded by Bob Evans in Rio Grande, Ohio, in nineteen forty-eight, but the company moved its headquarters to Columbus in nineteen seventy-two. Evans started as a butcher selling sausage from his farm, then opened a restaurant. The chain grew to over five hundred locations. Evans died in two thousand seven, but the farm in Rio Grande is still a museum.",
    long: "",
    names: ["Bob Evans", "Rio Grande", "Sausage", "Bob Evans Farm"]
  },
  {
    id: "columbus-kroger",
    name: "Kroger",
    lat: 39.9500,
    lng: -83.0000,
    radius: 500,
    short: "Kroger — founded by Bernard Kroger in Cincinnati in eighteen eighty-three, but Columbus became its home. The company moved its headquarters here in nineteen seventy-two and built its largest distribution center on the north side. Kroger is now the largest supermarket chain in the country by revenue, and Columbus is its operational heart.",
    long: "",
    names: ["Kroger", "Bernard Kroger", "Cincinnati", "Distribution Center"]
  },
  {
    id: "columbus-honda",
    name: "Honda East Liberty",
    lat: 40.2500,
    lng: -83.0000,
    radius: 1000,
    short: "Honda's East Liberty plant — opened in nineteen eighty-five, the first Honda plant outside Japan to build cars for the American market. It produces the Civic, the Acura TLX, and the Acura Integra. Over four thousand workers, three shifts, and a museum on site. It turned a small Ohio town into a Japanese-American manufacturing hub.",
    long: "",
    names: ["Honda", "East Liberty", "Civic", "Acura TLX", "Acura Integra"]
  }
  {
    id: "columbus-victorian-village",
    name: "Victorian Village",
    lat: 39.9770,
    lng: -83.0100,
    radius: 700,
    short: "Victorian Village — the neighborhood around Goodale Park. Italianate and Queen Anne houses from the eighteen seventies and eighties, tree-lined streets, one of Columbus's first official historic districts in nineteen seventy-three. It sits on the Near Northside, listed on the National Register. The houses face the park Dr. Lincoln Goodale gave the city.",
    long: "",
    names: ["Victorian Village", "Near Northside", "Goodale Park"]
  },
  {
    id: "columbus-italian-village",
    name: "Italian Village",
    lat: 39.9780,
    lng: -83.0020,
    radius: 600,
    short: "Italian Village — just east of the Short North, designated a historic district in nineteen seventy-three. Brick row houses and narrow streets built for working families in the late eighteen hundreds. It is one of four Columbus neighborhoods that still have their own historic district rules, alongside German Village, Victorian Village, and the Brewery District.",
    long: "",
    names: ["Italian Village", "Short North"]
  },
  {
    id: "columbus-olde-towne-east",
    name: "Olde Towne East",
    lat: 39.9650,
    lng: -82.9800,
    radius: 800,
    short: "Olde Towne East — over a thousand homes dating to the eighteen thirties, more than fifty architectural styles. Once the address of Columbus's wealthiest families. The Ohio Institution for the Education of the Blind opened here in eighteen seventy-four. After mid-century decline, artists and renovators brought the blocks back. History is visible house by house.",
    long: "",
    names: ["Olde Towne East", "Ohio Institution for the Education of the Blind"]
  },
  {
    id: "columbus-king-lincoln",
    name: "King-Lincoln Bronzeville",
    lat: 39.9680,
    lng: -82.9800,
    radius: 700,
    short: "King-Lincoln Bronzeville — the historic heart of Black Columbus. In the early nineteen hundreds it held jazz clubs, Black-owned banks, churches, and newspapers. James Poindexter's Antislavery Baptist Church was already moving freedom seekers through this side of town in the eighteen twenties. The Lincoln Theatre and King Arts Complex still stand on that ground.",
    long: "",
    names: ["King-Lincoln Bronzeville", "James Poindexter", "Mount Vernon Avenue"]
  },
  {
    id: "columbus-north-market",
    name: "North Market",
    lat: 39.9720,
    lng: -83.0040,
    radius: 250,
    short: "North Market — opened in eighteen seventy-six as a public food hall north of downtown. The current building sits in the North Market Historic District. For a century and a half it has been the place Columbus buys meat, bread, and produce under one roof. The vendors change; the market does not.",
    long: "",
    names: ["North Market", "North Market Historic District"]
  },
  {
    id: "columbus-toc-depot",
    name: "Toledo and Ohio Central Depot",
    lat: 39.9605,
    lng: -83.0107,
    radius: 200,
    short: "The Toledo and Ohio Central Depot on West Broad Street — opened April eighteenth, eighteen ninety-six, designed by Yost and Packard with pagoda-style towers. It is the last remaining passenger station in Columbus. Trains left here until nineteen thirty, when service moved to Union Station. The building survived the nineteen thirteen flood and two fires. It is now a union hall.",
    long: "",
    names: ["Toledo and Ohio Central Depot", "Yost and Packard", "West Broad Street", "Franklinton"]
  },
  {
    id: "columbus-union-station",
    name: "Union Station",
    lat: 39.9720,
    lng: -83.0030,
    radius: 400,
    short: "Union Station stood on High Street just north of what is now Nationwide Boulevard. Three buildings occupied that corner from eighteen fifty to nineteen seventy-six. The last passenger train left in nineteen seventy-nine from a temporary shed. The convention center sits on the ground. Columbus was a railroad city long before it was a capital city.",
    long: "",
    names: ["Union Station", "Nationwide Boulevard", "High Street"]
  },
  {
    id: "columbus-livingston-park",
    name: "Livingston Park",
    lat: 39.9570,
    lng: -82.9800,
    radius: 300,
    short: "Livingston Park — the city's first park land, bought in eighteen thirty-nine as a cemetery for eleven hundred twenty-five dollars. The graves were moved to Green Lawn before it opened as a public park in eighteen eighty-five. It is older than Goodale as city property, even if Goodale opened first as a developed park.",
    long: "",
    names: ["Livingston Park", "Green Lawn Cemetery"]
  },
  {
    id: "columbus-jesse-owens",
    name: "Jesse Owens",
    lat: 40.0067,
    lng: -83.0305,
    radius: 800,
    short: "Jesse Owens trained
id: "columbus-jesse-owens",
    name: "Jesse Owens",
    lat: 40.0094,
    lng: -83.0253,
    radius: 500,
    short: "Jesse Owens ran for Ohio State. On May twenty-fifth, nineteen thirty-five, in one afternoon at Michigan, he broke three world records and tied a fourth. The next year in Berlin he won four gold medals in front of Hitler. The track stadium on the east side of the Horseshoe carries his name. Cleveland raised him. This campus made him the fastest man alive.",
    long: "",
    names: ["Jesse Owens", "Ohio State University", "Jesse Owens Memorial Stadium", "Berlin 1936"]
  },
  {
    id: "columbus-fort-hayes",
    name: "Fort Hayes",
    lat: 39.9740,
    lng: -82.9880,
    radius: 500,
    short: "Fort Hayes began as the Columbus Arsenal in the Civil War. Captain T.C. Bradford built the shot tower in eighteen sixty-four on land bought from the Neil family. The post became Columbus Barracks, then Fort Hayes in nineteen twenty-two, named for President Rutherford B. Hayes. It inducted men for two world wars and Korea. The army left. The shot tower and four original buildings now sit inside a public school.",
    long: "",
    names: ["Fort Hayes", "Columbus Arsenal", "Columbus Barracks", "Rutherford B. Hayes", "Shot Tower"]
  },
  {
    id: "columbus-shrum-mound",
    name: "Shrum Mound",
    lat: 39.9900,
    lng: -83.0806,
    radius: 250,
    short: "Shrum Mound stands twenty feet high on a bluff above the Scioto at Campbell Park. The Adena built this cone about two thousand years ago. It is one of the last burial mounds left inside the city. The High Street mound was leveled for bricks. This one survived on the Shrum farm, then was given to the state by Governor James E. Campbell. National Register, nineteen seventy.",
    long: "",
    names: ["Shrum Mound", "Adena", "Campbell Park", "James E. Campbell", "Scioto River"]
  },
  {
    id: "columbus-nvmm",
    name: "National Veterans Memorial",
    lat: 39.9610,
    lng: -83.0035,
    radius: 300,
    short: "The National Veterans Memorial and Museum sits on the west bank of the Scioto, where the Franklin County Veterans Memorial stood from nineteen fifty-five. John Glenn pushed the new building. Congress named it national in twenty eighteen. Colin Powell spoke at the opening. It is the only museum Congress set aside for veterans of every war and every branch, not for the battles themselves.",
    long: "",
    names: ["National Veterans Memorial and Museum", "John Glenn", "Franklin County Veterans Memorial", "Colin Powell"]
  },
  {
    id: "columbus-green-lawn",
    name: "Green Lawn Cemetery",
    lat: 39.9403,
    lng: -83.0325,
    radius: 600,
    short: "Green Lawn opened in eighteen forty-nine on the south side. Three hundred sixty acres. Lucas Sullivant, who laid out Franklinton, is buried here. So are Eddie Rickenbacker, James Thurber, Governor James Rhodes, and Gordon Battelle. Five Ohio governors. Five Medal of Honor graves. When the city moved the old Franklinton cemetery, this is where the founders came to rest.",
    long: "",
    names: ["Green Lawn Cemetery", "Lucas Sullivant", "Eddie Rickenbacker", "James Thurber", "James A. Rhodes", "Gordon Battelle"]
  },
  {
    id: "columbus-ohio-theatre",
    name: "Ohio Theatre",
    lat: 39.9599,
    lng: -82.9989,
    radius: 200,
    short: "The Ohio Theatre opened March seventeenth, nineteen twenty-eight, as Loew's Ohio. Thomas W. Lamb designed the Spanish Baroque house on the old City Hall lot. First picture: Greta Garbo in The Divine Woman. It was nearly wrecked in nineteen sixty-nine. Locals bought it, restored it, and made it the official theatre of the state. National Historic Landmark. The Robert Morton organ still plays.",
    long: "",
    names: ["Ohio Theatre", "Thomas W. Lamb", "Loew's Ohio", "Columbus Association for the Performing Arts"]
  },
  {
    id: "columbus-cosi",
    name: "COSI",
    lat: 39.9618,
    lng: -83.0073,
    radius: 350,
    short: "COSI opened Easter Sunday, nineteen sixty-four, in Memorial Hall on East Broad. Sandy Hallock brought the idea home from Chicago. In nineteen ninety-nine the museum moved into the old Central High School on the Scioto, keeping the nineteen twenty-four facade and wrapping a new building around it. Central High's last class walked out. The science center walked in.",
    long: "",
    names: ["COSI", "Center of Science and Industry", "Central High School", "Sanford Hallock", "Memorial Hall"]
  },
  {
    id: "columbus-battelle",
    name: "Battelle",
    lat: 40.0078,
    lng: -83.0185,
    radius: 400,
    short: "Gordon Battelle died in Columbus in nineteen twenty-three at forty, after an appendectomy. His will, and then his mother's, built Battelle Memorial Institute on King Avenue. The lab opened in nineteen twenty-nine. Xerography, the barcode, fuel for the first nuclear submarine — work that started in this city. Battelle still runs from this campus and manages national laboratories for the country.",
    long: "",
    names: ["Battelle Memorial Institute", "Gordon Battelle", "King Avenue"]
  },
  {
    id: "columbus-hanford-village",
    name: "Hanford Village",
    lat: 39.9475,
    lng: -82.9330,
    radius: 500,
    short: "Hanford Village sat on the east side by Alum Creek. Black families built it after the Great Migration. In nineteen forty-six the Carver Addition sold Cape Cods to returning veterans, including Tuskegee Airmen from Lockbourne. In the nineteen sixties Interstate Seventy cut the streets in half and took about sixty houses. A state marker remembers the village the highway split.",
    long: "",
    names: ["Hanford Village", "George Washington Carver Addition", "Tuskegee Airmen", "Lockbourne", "Interstate 70"]
  },
  {
    id: "columbus-poindexter-village",
    name: "Poindexter Village",
    lat: 39.9695,
    lng: -82.9730,
    radius: 400,
    short: "Poindexter Village opened October twelfth, nineteen forty, with Franklin Roosevelt on the grounds. Four hundred units. One of the first public housing projects in the country, built for Black Columbus on the old Blackberry Patch. Named for James Preston Poindexter — preacher, Underground Railroad worker, first Black man elected to city council. Two of the original buildings remain for a museum.",
    long: "",
    names: ["Poindexter Village", "James Preston Poindexter", "Franklin D. Roosevelt", "Blackberry Patch"]
  },
  {
    id: "columbus-jeffrey",
    name: "Jeffrey Manufacturing",
    lat: 39.9845,
    lng: -82.9930,
    radius: 400,
    short: "Joseph Jeffrey backed Francis Lechner's coal cutter and put the factory on East First Avenue in Milo-Grogan. America's first practical powered mining machine came off this floor. Then locomotives, conveyors, crushers. By mid-century Jeffrey was the largest employer in Columbus — more than seven thousand jobs. The machines that dug Ohio coal were built a few blocks north of downtown.",
    long: "",
    names: ["Jeffrey Manufacturing Company", "Joseph Jeffrey", "Francis Lechner", "Milo-Grogan"]
  },
  {
    id: "columbus-school-for-the-blind",
    name: "Ohio State School for the Blind",
    lat: 39.9572,
    lng: -82.9805,
    radius: 300,
    short: "Ohio opened the first public school for the blind in the United States here in eighteen thirty-seven. Eleven students the first year. The big eighteen seventy-four campus rose in what is now Olde Towne East. In nineteen fifty-three the school moved north on High Street. The old grounds became part of the neighborhood. The work did not stop. It just changed streets.",
    long: "",
    names: ["Ohio State School for the Blind", "Ohio Institution for the Education of the Blind", "Olde Towne East"]
  },
  {
    id: "columbus-hilltop-national-road",
    name: "The Hilltop and the National Road",
    lat: 39.9535,
    lng: -83.0700,
    radius: 800,
    short: "West Broad Street is the National Road — the federal highway Congress pushed west in the eighteen hundreds. The Hilltop grew along that ridge above Franklinton. Camp Chase sat on this ground. Streetcars climbed the hill. The road is now Route Forty, but the grade is the same one wagons used when Columbus was still a new capital on the Scioto.",
    long: "",
    names: ["National Road", "Hilltop", "West Broad Street", "Route 40", "Camp Chase"]
  },
  {
    id: "ohio-statehouse",
    name: "Ohio Statehouse",
    lat: 39.9614,
    lng: -82.9989,
    radius: 350,
    short: "You are passing the reason Columbus exists. In eighteen twelve, the state needed a capital in the middle of Ohio. Four Franklinton landowners offered ten acres on the high bank of the Scioto, opposite the older town. The Statehouse rose here from eighteen thirty nine to eighteen sixty one. Five architects. Twenty two years. Greek Revival stone. It is still a working capitol, and Broad and High remain the city's one hundred percent corner.",
    long: "",
    names: ["Ohio Statehouse", "Scioto River", "Franklinton", "Broad and High"]
  },
  {
    id: "franklinton",
    name: "Franklinton",
    lat: 39.9607,
    lng: -83.0160,
    radius: 700,
    short: "This is Franklinton, older than Columbus by fifteen years. In seventeen ninety seven, surveyor Lucas Sullivant laid out a town on the west bank of the Scioto and named it for Benjamin Franklin. Floods nearly erased it. The great flood of nineteen thirteen put water through these streets and pushed the city's future to the higher east bank. The Sullivant Land Office still stands near Gift Street, the last building tied to the founder.",
    long: "",
    names: ["Lucas Sullivant", "Franklinton", "Scioto River", "Flood of 1913", "Sullivant Land Office"]
  },
  {
    id: "scioto-river-broad",
    name: "Scioto River at Broad Street",
    lat: 39.9610,
    lng: -83.0055,
    radius: 500,
    short: "The Scioto made this city possible and tried to wash it away. Native trails followed this river from Lake Erie to the Ohio. Lucas Sullivant built a wooden toll bridge here in eighteen sixteen. Floods took later spans. The present Discovery Bridge is at least the sixth crossing on this line. When you drive Broad Street over the water, you are on the old hinge between Franklinton and the capital laid out on the opposite bank.",
    long: "",
    names: ["Scioto River", "Discovery Bridge", "Lucas Sullivant", "Scioto Trail"]
  },
  {
    id: "leveque-tower",
    name: "LeVeque Tower",
    lat: 39.9625,
    lng: -83.0020,
    radius: 300,
    short: "The tower on your left, if you are on Broad, is the LeVeque. Finished in nineteen twenty seven as the American Insurance Union Citadel, it stood five hundred fifty five feet and was the tallest building in Columbus for nearly fifty years. The terra cotta is covered in statues, medallions, and astrological signs. It was a Jazz Age boast that the insurance city on the Scioto had arrived.",
    long: "",
    names: ["LeVeque Tower", "American Insurance Union Citadel", "Palace Theatre"]
  },
  {
    id: "german-village",
    name: "German Village",
    lat: 39.9458,
    lng: -82.9928,
    radius: 700,
    short: "You are in German Village. Mid eighteen hundreds, German immigrants settled south of downtown. By eighteen sixty five they were nearly a third of Columbus. Brick cottages, iron fences, brick streets. In the nineteen fifties the city nearly tore it down. Neighbors, including Frank Fetch, fought back. In nineteen sixty it became Columbus's first historic district, and later the largest privately funded historic district on the National Register.",
    long: "",
    names: ["German Village", "Frank Fetch", "German Village Society"]
  },
  {
    id: "schiller-park",
    name: "Schiller Park",
    lat: 39.9422,
    lng: -82.9926,
    radius: 450,
    short: "Schiller Park was Stewart's Grove before the city bought it in eighteen sixty seven. Germans gathered here for songfests and the Ohio State Fair in the Civil War years. In eighteen ninety one they raised a bronze Friedrich von Schiller, cast in Munich. During World War One, anti German feeling renamed the park Washington. In nineteen thirty the old name came back. The park is the green heart of German Village.",
    long: "",
    names: ["Schiller Park", "Friedrich von Schiller", "Stewart's Grove", "German Village"]
  },
  {
    id: "brewery-district-hoster",
    name: "Brewery District",
    lat: 39.9522,
    lng: -83.0010,
    radius: 550,
    short: "This low ground by the Scioto and the old feeder canal was made for beer. Louis Hoster opened a brewery here in eighteen thirty six. Hoster, Schlee, and Born's Capitol Brewery turned Front Street into a German industrial row. By the eighteen nineties Hoster was a household name in Ohio. Prohibition shut the kettles. The brick hulks remain. The neighborhood still carries the name of the work that built it.",
    long: "",
    names: ["Louis Hoster", "Hoster Brewing Company", "Brewery District", "Schlee Brewery", "Born's Capitol Brewery"]
  },
  {
    id: "thurber-house",
    name: "Thurber House",
    lat: 39.9658,
    lng: -82.9852,
    radius: 250,
    short: "Seventy seven Jefferson Avenue. James Thurber lived in this eighteen seventy three house while he went to Ohio State, from nineteen thirteen to nineteen seventeen. He wrote for the Columbus Dispatch, then The New Yorker. Walter Mitty, the unicorn in the garden, the dogs, the cartoons. Columbus was not a backdrop for Thurber. It was the room he kept writing from, even after he left.",
    long: "",
    names: ["James Thurber", "Thurber House", "The New Yorker", "Ohio State"]
  },
  {
    id: "fort-hayes",
    name: "Fort Hayes",
    lat: 39.9739,
    lng: -82.9883,
    radius: 500,
    short: "Fort Hayes began as the Columbus Arsenal in the Civil War, authorized in eighteen sixty two on land from the Neil family. A shot tower went up in eighteen sixty four. Later it was Columbus Barracks, then Fort Hayes, named for President Rutherford B. Hayes. Men shipped from here for the world wars and Korea. The Army left in two thousand nine. The brick post and tower are now a public school campus on a former arsenal.",
    long: "",
    names: ["Fort Hayes", "Columbus Arsenal", "Rutherford B. Hayes", "Neil family"]
  },
  {
    id: "shrum-mound",
    name: "Shrum Mound",
    lat: 39.9900,
    lng: -83.0806,
    radius: 350,
    short: "On the west bluff of the Scioto, Shrum Mound is one of the last ancient burial mounds left inside Columbus. Adena people raised this cone about two thousand years ago. It stands roughly twenty feet high and a hundred feet across. The Shrum family farmed around it. Minnie Shrum deeded it to the Ohio Historical Society in nineteen twenty eight. Official records also call it Campbell Mound. It is quiet ground that predates every street you are on.",
    long: "",
    names: ["Shrum Mound", "Campbell Mound", "Adena", "Ohio History Connection"]
  },
  {
    id: "eddie-rickenbacker",
    name: "Eddie Rickenbacker",
    lat: 39.9372,
    lng: -83.0371,
    radius: 400,
    short: "Green Lawn Cemetery. Eddie Rickenbacker was born in Columbus in eighteen ninety to Swiss immigrant parents. He left school young, raced cars, then became America's Ace of Aces in World War One, with twenty six victories and the Medal of Honor. He later ran Eastern Air Lines. After his death in nineteen seventy three, Lockbourne Air Force Base south of town took his name. He is buried here in section fifty eight.",
    long: "",
    names: ["Eddie Rickenbacker", "Green Lawn Cemetery", "Eastern Air Lines", "Rickenbacker Air Force Base"]
  },
  {
    id: "national-veterans-memorial",
    name: "National Veterans Memorial and Museum",
    lat: 39.9606,
    lng: -83.0095,
    radius: 350,
    short: "On the Scioto, at three hundred West Broad, the National Veterans Memorial and Museum sits on the old river edge between Franklinton and downtown. It opened in two thousand eighteen as the only museum in the country dedicated to the veterans story across every war. The concrete ring faces the water that first brought people through this valley, and the city that sent them out again from Camp Chase, Fort Hayes, and the airfield that now bears Rickenbacker's name.",
    long: "",
    names: ["National Veterans Memorial and Museum", "Scioto River", "Camp Chase", "Fort Hayes", "Eddie Rickenbacker"]
  },

];

