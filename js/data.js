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
  },
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
  },
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
    radius: 1500,
    short: "Dean Kruse started auctioneering farm equipment in Auburn in nineteen fifty-two and turned it into the world's biggest collector-car auction. His Labor Day weekend sale still fills the town every September — the fifty-sixth edition in twenty twenty-six pulled over twenty-one million dollars. Auburn didn't just build the cars; it became the place the world comes to buy them.",
    long: "",
    names: ["dean kruse", "kruse auctions"] },
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
  },
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
    names: [ "Franklin Park"] },
  {
    id: "columbus-legend",
    name: "Mill Race Monster",
    lat: 39.9800,
    lng: -83.0200,
    radius: 500,
    short: "November nineteen seventy-four — Columbus had its own monster. Dozens of people reported a six-foot green hairy creature with claws near Mill Race Park. Women said it jumped on their car and scratched the paint. The parks director counted armed searchers. It turned out to be a man in green blankets and a mask. The legend stuck anyway.",
    long: "",
    names: ["Mill Race Monster", "Mill Race Park"]
  },
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
    names: [ "columbus park"] },
  {
    id: "columbus-legend",
    name: "Mill Race Monster",
    lat: 39.9800,
    lng: -83.0200,
    radius: 500,
    short: "November nineteen seventy-four — Columbus had its own monster. Dozens of people reported a six-foot green hairy creature with claws near Mill Race Park. Women said it jumped on their car and scratched the paint. The parks director counted armed searchers. It turned out to be a man in green blankets and a mask. The legend stuck anyway.",
    long: "",
    names: ["Mill Race Monster", "Mill Race Park"]
  },
{
    id: "columbus-german-village",
    name: "German Village",
    lat: 39.9450,
    lng: -82.9900,
    radius: 800,
    short: "German Village — the largest privately funded historic preservation district in the country. German immigrants settled here in the eighteen forties and by eighteen sixty-five made up nearly a third of Columbus. Red-brick homes, wrought-iron fences, brick-paved streets. Over sixteen hundred structures restored since nineteen sixty. National Register in nineteen seventy-four.",
    long: "",
    names: ["columbus-german village"] },
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
    names: ["Sant Maria"] },
{
    id: "columbus-german-village",
    name: "German Village",
    lat: 39.9450,
    lng: -82.9900,
    radius: 800,
    short: "German Village — the largest privately funded historic preservation district in the country. German immigrants settled here in the eighteen forties and by eighteen sixty-five made up nearly a third of Columbus. Red-brick homes, wrought-iron fences, brick-paved streets. Over sixteen hundred structures restored since nineteen sixty. National Register in nineteen seventy-four.",
    long: "",
    names: ["columbus-german village"] },
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
    names: ["Columbus santa-Maria"] },

  {
    id: "columbus-short-north",
    name: "Short North",
    lat: 39.9750,
    lng: -83.0050,
    radius: 700,
    short: "The Short North — the arts district on High Street between downtown and the university. The name comes from its position just north of downtown. In the nineteen eighties it was a rough strip of empty storefronts; artists moved in, galleries opened, and the city painted the telephone poles in rainbow colors. Now it's the densest gallery row in Ohio.",
    long: "",
    names:["columbus short north"] },
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
    names: ["columbus pententiary"] },
  {
    id: "columbus-streetcar",
    name: "Columbus Streetcar",
    lat: 39.9650,
    lng: -83.0000,
    radius: 600,
    short: "The Columbus Streetcar — a two point three mile loop from the Short North through downtown to the Arena District, opened in twenty eighteen. It is the first modern streetcar in Ohio. The line replaced the old interurban that once connected Columbus to every town in the county. It runs on tracks laid over the same right-of-way.",
    long: "",
    names: ["columbus streetcar"] },
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
  },
  {
    id: "columbus-short-north-galleries",
    name: "Short North Galleries",
    lat: 39.9760,
    lng: -83.0045,
    radius: 400,
    short: "The Short North gallery row — over a hundred artists and studios packed into a few blocks of High Street. The Columbus College of Art and Design anchors it, founded in eighteen eighty-three as the Columbus Art School. The rainbow poles were painted in nineteen eighty-four by local artists to mark the district. It is the densest concentration of working artists in Ohio.",
    long: "",
    names:["columbus short north galleries"] },
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
    names: ["jazz art group","Ray Eubanks"] },
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
    names: ["columbus pickle ball"] },
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
  },
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
    lat: 40.0094,
    lng: -83.0235,
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
  {
    id: "ohio-history-center",
    name: "Ohio History Center",
    lat: 40.0049,
    lng: -82.9874,
    radius: 450,
    short: "Off Seventeenth Avenue, beside the fairgrounds, the Ohio History Center is the state's attic. The Ohio History Connection moved its museum here in nineteen seventy. The Brutalist building holds the state archives and the objects that explain how Ohio was made. Next door is Ohio Village, a rebuilt nineteenth century town. If a county marker sent you looking for the longer story, this is where the paper trail lives.",
    long: "",
    names: ["Ohio History Center", "Ohio History Connection", "Ohio Village"]
  },
  {
    id: "cosi-central-high",
    name: "COSI and Central High School",
    lat: 39.9597,
    lng: -83.0064,
    radius: 400,
    short: "The science museum on the Scioto sits inside old Central High School. Central opened on this riverbank as the city's public high school. The building went on the National Register in nineteen eighty five. COSI moved here from East Broad. The classroom block still reads as a school. The river side is new. You are looking at a civic building that changed jobs without leaving the water.",
    long: "",
    names: ["COSI", "Central High School", "Scioto River"]
  },
  {
    id: "franklin-park-conservatory",
    name: "Franklin Park Conservatory",
    lat: 39.9658,
    lng: -82.9531,
    radius: 400,
    short: "Franklin Park Conservatory stands on East Broad in what was once the Franklin County Fairgrounds. The glasshouse opened in eighteen ninety five, after Columbus studied the World's Columbian Exposition in Chicago. The park around it is older public land. The conservatory is on the National Register. For more than a century this has been the city's formal garden on the National Road side of town.",
    long: "",
    names: ["Franklin Park Conservatory", "Franklin Park", "National Road"]
  },
  {
    id: "kelton-house",
    name: "Kelton House",
    lat: 39.9609,
    lng: -82.9862,
    radius: 250,
    short: "Five eighty six East Town Street. The Kelton House was a stop on the Underground Railroad. Fernando and Sophia Kelton built the brick Italianate home in eighteen fifty two. Family tradition and later research say they hid freedom seekers here on the Near East Side. The house is a museum now. Town Street was a path out of the river city toward the old National Road and the free states beyond.",
    long: "",
    names: ["Kelton House", "Fernando Kelton", "Sophia Kelton", "Underground Railroad"]
  },
  {
    id: "poindexter-village",
    name: "Poindexter Village",
    lat: 39.9694,
    lng: -82.9738,
    radius: 450,
    short: "Poindexter Village opened in nineteen forty as Columbus's first public housing. It was named for Reverend James Poindexter, a Black pastor, councilman, and barber who pushed the city to treat its east side as part of the civic whole. The brick rows stood in the King Lincoln area when federal housing was new. Most of the original buildings are gone. A museum and a few surviving units keep the name on the ground.",
    long: "",
    names: ["Poindexter Village", "James Poindexter", "King Lincoln Bronzeville"]
  },
  {
    id: "hanford-village",
    name: "Hanford Village",
    lat: 39.9506,
    lng: -82.9461,
    radius: 500,
    short: "Hanford Village was built for Black veterans coming home from World War Two. The George Washington Carver Addition went on the National Register for that story. Then Interstate Seventy was cut through the neighborhood and split it. Families lost streets and a park to the highway. What remains is a small historic district and a hard lesson about who paid when Columbus built its east side roads.",
    long: "",
    names: ["Hanford Village", "George Washington Carver Addition", "Interstate 70"]
  },
  {
    id: "ohio-penitentiary",
    name: "Ohio Penitentiary site",
    lat: 39.9676,
    lng: -83.0083,
    radius: 400,
    short: "The Arena District sits on the Ohio Penitentiary. The prison opened in eighteen thirty four and ran until nineteen eighty four. John Hunt Morgan tunneled out during the Civil War. O. Henry and Sam Sheppard were held here. A fire in nineteen thirty killed three hundred twenty two men. The walls came down in the nineteen nineties. Nationwide Boulevard and the arena cover the old yard.",
    long: "",
    names: ["Ohio Penitentiary", "John Hunt Morgan", "O. Henry", "Sam Sheppard", "Arena District"]
  },
  {
    id: "goodale-park",
    name: "Goodale Park",
    lat: 39.9750,
    lng: -83.0069,
    radius: 450,
    short: "Goodale Park is one of the oldest city parks in the country. Doctor Lincoln Goodale donated the land in eighteen fifty one and wrote that it must stay a public pleasure ground forever. In the Civil War it was Camp Jackson, a staging field for Union troops. Victorian Village grew around the trees. The deed still governs the grass. That is why the park is still here.",
    long: "",
    names: ["Goodale Park", "Lincoln Goodale", "Camp Jackson", "Victorian Village"]
  },
  {
    id: "topiary-park",
    name: "Topiary Park",
    lat: 39.9611,
    lng: -82.9876,
    radius: 300,
    short: "Topiary Park is Old Deaf School Park. Ohio opened a school for deaf students in eighteen twenty nine and later built a campus on East Town Street. The school moved north in the nineteen fifties. Fire took the old main building. The grounds became a park whose hedges copy Seurat's Sunday Afternoon painting. The site is both a state school story and a garden laid on top of it.",
    long: "",
    names: ["Topiary Park", "Ohio School for the Deaf", "Old Deaf School Park"]
  },
  {
    id: "ohio-theatre",
    name: "Ohio Theatre",
    lat: 39.9597,
    lng: -82.9994,
    radius: 250,
    short: "The Ohio Theatre opened on State Street in nineteen twenty eight as a Loew's movie palace. Architect Thomas Lamb wrapped the auditorium in Spanish Baroque plaster. In the nineteen sixties it was headed for a parking lot. Civic leaders bought it and made it the home of the Columbus Symphony. It sits on the National Register, a palace that survived because people refused to let downtown go quiet.",
    long: "",
    names: ["Ohio Theatre", "Thomas Lamb", "Loew's", "Columbus Symphony"]
  },
  {
    id: "battelle",
    name: "Battelle Memorial Institute",
    lat: 39.9903,
    lng: -83.0194,
    radius: 400,
    short: "Battelle sits on King Avenue because of a will. Gordon Battelle was a Columbus industrialist. He died in nineteen twenty three and left his estate to create a research institute for the public good. The labs opened in nineteen twenty nine. Battelle work helped shape xerography, the Manhattan Project support chain, and later materials science. It is one of the quiet industries that kept Columbus from being only a capital and a campus.",
    long: "",
    names: ["Battelle Memorial Institute", "Gordon Battelle"]
  },
  {
    id: "harrison-headquarters",
    name: "William Henry Harrison Headquarters",
    lat: 39.9604,
    lng: -83.0178,
    radius: 300,
    short: "In Franklinton, the Harrison House on West Broad was General William Henry Harrison's headquarters in the War of eighteen twelve. Franklinton was a supply town on the Scioto while the United States fought in the Northwest. The brick house later stood beside the Sullivant Land Office after that tiny building was moved to Gift Street. War and town founding share the same west bank block.",
    long: "",
    names: ["William Henry Harrison", "Harrison House", "War of 1812", "Franklinton", "Sullivant Land Office"]
  },
  {
    id: "lincoln-theatre",
    name: "Lincoln Theatre",
    lat: 39.9669,
    lng: -82.9811,
    radius: 300,
    short: "Seven sixty nine East Long Street. The Lincoln opened in nineteen twenty eight as the Ogden Theatre. Black businessman Al Jackson built it. Architect Carl Anderson gave it an Egyptian Revival house. It was the entertainment hall the east side did not have. Count Basie, Cab Calloway, and Columbus's own Nancy Wilson played here. It went dark, then came back in two thousand nine. The National Register listing is for a theater the neighborhood made for itself.",
    long: "",
    names: ["Lincoln Theatre", "Al Jackson", "Nancy Wilson", "King Lincoln Bronzeville"]
  },
  {
    id: "camp-chase-cemetery",
    name: "Camp Chase Confederate Cemetery",
    lat: 39.9439,
    lng: -83.0761,
    radius: 400,
    short: "On Sullivant Avenue is the burial ground of Camp Chase. During the Civil War this west side field was a Union training camp, then a prison for Confederate soldiers. Disease and winter killed more than two thousand men here. The stone arch and rows of markers are what remain. Camp Chase named a neighborhood. The cemetery is the part that never left.",
    long: "",
    names: ["Camp Chase", "Camp Chase Confederate Cemetery", "Sullivant Avenue"]
  },
  {
    id: "jeffrey-manufacturing",
    name: "Jeffrey Manufacturing",
    lat: 39.9802,
    lng: -82.9981,
    radius: 450,
    short: "East of Fourth Street, near First Avenue, Jeffrey Manufacturing made Columbus a mining-machine city. Joseph A. Jeffrey backed inventor Francis Lechner in eighteen seventy six. By the early nineteen hundreds Jeffrey was among the world's largest makers of coal cutters and mine locomotives. The plant filled the blocks down to today's Interstate Six Seventy. The nineteen twenty four office building still carries the name. This is how coal country equipment was built in the capital.",
    long: "",
    names: ["Jeffrey Manufacturing", "Joseph A. Jeffrey", "Francis Lechner"]
  },
  {
    id: "buckeye-steel",
    name: "Buckeye Steel Castings",
    lat: 39.9365,
    lng: -82.9808,
    radius: 500,
    short: "Parsons Avenue held Buckeye Steel Castings, later Columbus Castings. The firm started in eighteen eighty one making farm iron, then railroad couplers, then steel for freight cars. In nineteen two it moved to this ninety acre south side yard. Samuel Prescott Bush ran it. For a time it was the largest steel foundry of its kind in North America. The pours stopped in two thousand sixteen. The land is industrial park now. The work that fed the railroads was here.",
    long: "",
    names: ["Buckeye Steel Castings", "Columbus Castings", "Samuel Prescott Bush"]
  },
  {
    id: "olentangy-scioto-confluence",
    name: "Olentangy and Scioto Confluence",
    lat: 39.9682,
    lng: -83.0175,
    radius: 500,
    short: "West of downtown the Olentangy runs into the Scioto. Native people used this fork for centuries. Surveyors called the high ground Wolf's Ridge. In eighteen twelve the new capital was sited on the east bank, opposite Franklinton, at the forks. The rivers carried canoes, canal boats, floods, and sewer. Every early map of Columbus starts at this meeting of water.",
    long: "",
    names: ["Olentangy River", "Scioto River", "Wolf's Ridge", "Franklinton"]
  },
  {
    id: "santa-maria-riverfront",
    name: "Santa Maria site",
    lat: 39.9628,
    lng: -83.0058,
    radius: 350,
    short: "The city is named for Christopher Columbus. In nineteen ninety two a replica of the Santa Maria was moored on the Scioto for the five hundredth anniversary. Some people came to celebrate the namesake. Others gathered nearby to name the cost of that voyage for Native nations. The ship later left the river. The argument stayed. This bank is where the city's name and the older valley meet.",
    long: "",
    names: ["Santa Maria", "Christopher Columbus", "Scioto River"]
  },
  {
    id: "clintonville",
    name: "Clintonville",
    lat: 40.0416,
    lng: -83.0186,
    radius: 800,
    short: "Clintonville began as Clinton Township, named for Vice President George Clinton, on land once used by the Wyandot. A post office opened on September thirteenth, eighteen forty seven. That date is still the neighborhood birthday. North High Street was a farm road, then a streetcar line, then a business strip. People live here because it is inside Columbus and still feels like a town that grew along one road.",
    long: "",
    names: ["Clintonville", "George Clinton", "Wyandot", "North High Street"]
  },
  {
    id: "old-beechwold",
    name: "Old Beechwold",
    lat: 40.0603,
    lng: -83.0233,
    radius: 500,
    short: "Old Beechwold sits between High Street and the Olentangy. In nineteen five a short lived Columbus zoo opened on this ground and failed in five months. Joseph A. Jeffrey bought the land and made an estate his family called Beechwalde, beech forest. The old zoo gate still shows on High. A monkey house became a barn. The winding streets went on the National Register in nineteen eighty seven.",
    long: "",
    names: ["Old Beechwold", "Joseph A. Jeffrey", "Columbus Zoo", "Olentangy River"]
  },
  {
    id: "ohio-school-for-the-blind",
    name: "Ohio State School for the Blind",
    lat: 40.0694,
    lng: -83.0190,
    radius: 350,
    short: "Ohio opened a school for blind students in eighteen thirty seven, one of the first in the country. The school later moved to this North High campus. It is a state institution, not a neighborhood afterthought. For nearly two centuries Ohio taught here what the rest of public school was slow to offer. The grounds on High Street are part of that long civic bet.",
    long: "",
    names: ["Ohio State School for the Blind", "North High Street"]
  },
  {
    id: "olentangy-park",
    name: "Olentangy Park",
    lat: 40.0305,
    lng: -83.0178,
    radius: 450,
    short: "Before the houses, this stretch of the Olentangy was Olentangy Park, one of the Midwest's big trolley parks. It opened in the eighteen eighties and grew a midway, a theater, and what was billed as the largest swimming pool in the world. Columbus rode the streetcar north to get there. The park closed in the nineteen thirties. The land became Olentangy Village apartments. The river and the name stayed.",
    long: "",
    names: ["Olentangy Park", "Olentangy Village", "Olentangy River"]
  },
  {
    id: "whetstone-park-roses",
    name: "Whetstone Park of Roses",
    lat: 40.0410,
    lng: -83.0255,
    radius: 450,
    short: "Whetstone Park holds the Park of Roses, opened in nineteen fifty two on old Clintonville farm ground along the Olentangy. Thirteen acres of beds. It became one of the largest municipal rose gardens in the United States. The park is also playing fields and woods. Clintonville comes here the way German Village comes to Schiller. Public land on the river, planted on purpose.",
    long: "",
    names: ["Whetstone Park", "Park of Roses", "Clintonville", "Olentangy River"]
  },
  {
    id: "jack-nicklaus-scioto",
    name: "Jack Nicklaus and Scioto",
    lat: 40.0004,
    lng: -83.0802,
    radius: 500,
    short: "Jack Nicklaus was born in Columbus in nineteen forty. He learned the game at Scioto Country Club on the west side of the river corridor. Scioto hosted the nineteen twenty six U.S. Open before he was born, and later the PGA. Nicklaus became the most famous golfer Ohio ever sent out. The club sits in Upper Arlington. The origin story is Columbus.",
    long: "",
    names: ["Jack Nicklaus", "Scioto Country Club", "Upper Arlington"]
  },
  {
    id: "osu-oval",
    name: "Ohio State Oval",
    lat: 40.0005,
    lng: -83.0148,
    radius: 400,
    short: "The Oval is the front lawn of Ohio State. The university opened in eighteen seventy as a land grant school under the Morrill Act. Farmers and mechanics were supposed to study here, not only lawyers. Thompson Library looks down the grass. For more than a century commencements, protests, and first dates have used this same axis. The capital got a campus. The campus became a city inside the city.",
    long: "",
    names: ["Ohio State University", "The Oval", "Morrill Act", "Thompson Library"]
  },
  {
    id: "ohio-stadium",
    name: "Ohio Stadium",
    lat: 40.0017,
    lng: -83.0197,
    radius: 450,
    short: "Ohio Stadium opened in nineteen twenty two. Architect Howard Dwight Smith drew the first double deck horseshoe in the country. People still call it the House That Harley Built, after coach John Wilce's era and the drive to raise the money. It went on the National Register in nineteen seventy four. Game day here is one of the largest regular gatherings in Ohio. The river sits just west of the wall.",
    long: "",
    names: ["Ohio Stadium", "The Horseshoe", "Howard Dwight Smith", "Ohio State Buckeyes"]
  },
  {
    id: "mirror-lake",
    name: "Mirror Lake",
    lat: 39.9979,
    lng: -83.0136,
    radius: 250,
    short: "Mirror Lake is the hole in the campus that students treat like a shrine. The local rule is simple. Beat Michigan, jump in. The water is cold. The tradition is not official and not safe, and it still happens. Browning Amphitheatre sits in the hollow. A campus can have laboratories and still keep a pond that belongs to the crowd.",
    long: "",
    names: ["Mirror Lake", "Ohio State", "Michigan"]
  },
  {
    id: "orton-hall",
    name: "Orton Hall",
    lat: 40.0003,
    lng: -83.0129,
    radius: 200,
    short: "Orton Hall is the rust colored tower on the Oval. Finished in eighteen ninety three, it was named for Edward Orton, Ohio State's first president and the state's first geologist. The stone in the walls is stacked in geologic order, oldest at the bottom. Forty thousand specimens sit in the Orton Geological Museum inside. It is a building that teaches Ohio's bedrock by being built from it.",
    long: "",
    names: ["Orton Hall", "Edward Orton", "Orton Geological Museum"]
  },
  {
    id: "columbus-museum-of-art",
    name: "Columbus Museum of Art",
    lat: 39.9643,
    lng: -82.9878,
    radius: 300,
    short: "The Columbus Museum of Art sits on East Broad. The collection began with the Columbus Gallery of Fine Arts in eighteen seventy eight. The present building rose in the early twentieth century on a civic stretch that also holds Franklin Park farther east. George Bellows, born in this city, is on these walls. The museum is how Columbus kept a public eye on painting while the factories and the campus grew.",
    long: "",
    names: ["Columbus Museum of Art", "George Bellows", "East Broad Street"]
  },
  {
    id: "palace-theatre",
    name: "Palace Theatre",
    lat: 39.9624,
    lng: -83.0015,
    radius: 200,
    short: "The Palace opened in nineteen twenty six beside the tower now called LeVeque. It was a Keith Albee vaudeville house, then a movie palace. Thomas Lamb designed the interior. CAPA saved it when demolition was the plan. Live shows came back. Broad Street kept two palaces, this one and the Ohio around the corner. Downtown entertainment did not all move to the suburbs.",
    long: "",
    names: ["Palace Theatre", "Thomas Lamb", "LeVeque Tower", "CAPA"]
  },
  {
    id: "southern-theatre",
    name: "Southern Theatre",
    lat: 39.9568,
    lng: -82.9989,
    radius: 200,
    short: "The Southern Theatre opened in eighteen ninety six on South High, attached to the Great Southern Hotel. It is older than the movie palaces. After dark years, CAPA restored it in the nineteen nineties. The horseshoe balcony and the plaster work are nineteenth century downtown, still working. High and Main was the theater corner before Broad Street took the crown.",
    long: "",
    names: ["Southern Theatre", "Great Southern Hotel", "CAPA"]
  },
  {
    id: "columbus-city-hall",
    name: "Columbus City Hall",
    lat: 39.9629,
    lng: -83.0036,
    radius: 250,
    short: "City Hall faces the Statehouse across Broad and the river parks. The present building opened in nineteen twenty eight after a fire destroyed an earlier hall. Italian Renaissance stone, a wide stair, a statue of Christopher Columbus that has been argued over for years. This is the municipal counterweight to Capitol Square. State government on one side of downtown. City government on the other.",
    long: "",
    names: ["Columbus City Hall", "Capitol Square"]
  },
  {
    id: "flytown",
    name: "Flytown",
    lat: 39.9723,
    lng: -83.0095,
    radius: 500,
    short: "Flytown was the entry neighborhood west of Neil and south of Goodale. Houses flew up overnight for Irish, German, Italian, and other workers off the trains at Union Station. Naghten Street, now Nationwide Boulevard, was called the Irish Broadway. Urban renewal and the Arena District erased the streets. Godman Guild remains as a marker. The people moved. The name is how Columbus remembers the first landing place.",
    long: "",
    names: ["Flytown", "Godman Guild", "Union Station", "Nationwide Boulevard"]
  },
  {
    id: "george-bellows",
    name: "George Bellows",
    lat: 39.9640,
    lng: -82.9882,
    radius: 300,
    short: "George Bellows was born in Columbus in eighteen eighty two. He drew at Ohio State, then went to New York and painted prizefights, rivers, and crowds that made him one of the Ashcan School. The Columbus Museum of Art holds his work on the street he would have known as East Broad. The city that sent him east still claims the painter.",
    long: "",
    names: ["George Bellows", "Ohio State", "Columbus Museum of Art", "Ashcan School"]
  },
  {
    id: "elijah-pierce",
    name: "Elijah Pierce",
    lat: 39.9692,
    lng: -82.9808,
    radius: 300,
    short: "Elijah Pierce cut hair on Long Street and carved wood in the back. Born in Mississippi in eighteen ninety two, he came to Columbus and made painted reliefs of sermons, prizefighters, and everyday saints. The barbershop was the gallery. Museums later caught up. Pierce is one of the reasons King Lincoln is not only a housing story. It is also where a barber became a national artist.",
    long: "",
    names: ["Elijah Pierce", "Long Street", "King Lincoln Bronzeville"]
  },
  {
    id: "port-columbus",
    name: "John Glenn Columbus International Airport",
    lat: 39.9980,
    lng: -82.8919,
    radius: 800,
    short: "Port Columbus opened in nineteen twenty nine. Amelia Earhart was on an early promotional flight. Jerrie Mock left here in nineteen sixty four and became the first woman to fly solo around the world. In two thousand sixteen the field took John Glenn's name, the Marine fighter pilot and senator from New Concord who first orbited Earth for the United States. The east side runway is how Columbus joined the air age.",
    long: "",
    names: ["Port Columbus", "John Glenn", "Amelia Earhart", "Jerrie Mock"]
  },
 {
    id: "scioto-audubon",
    name: "Scioto Audubon Metro Park",
    lat: 39.9460,
    lng: -83.0102,
    radius: 550,
    short: "Whittier Peninsula was rail yards and a trash burn. Metro Parks turned it into Scioto Audubon. The climbing wall sits on the old industrial point where the Scioto bends south of downtown. Herons use the water that once served coal and boxcars. This is the city's newest public land on its oldest river, made from a working waterfront that had worn out.",
    long: "",
    names: ["Scioto Audubon Metro Park", "Whittier Peninsula", "Scioto River"]
  },
  {
    id: "green-lawn-cemetery",
    name: "Green Lawn Cemetery",
    lat: 39.9400,
    lng: -83.0255,
    radius: 600,
    short: "Green Lawn opened in eighteen forty eight on the south side. It is the city's great burying ground. Mayors, industrialists, and Eddie Rickenbacker are here. The landscape was designed as a rural cemetery, trees and lanes instead of a tight churchyard. When Columbus wanted to show dignity in death, it sent people south of the city limits, then grew around the gates.",
    long: "",
    names: ["Green Lawn Cemetery", "Eddie Rickenbacker"]
  },
  {
    id: "ohio-judicial-center",
    name: "Ohio Judicial Center",
    lat: 39.9602,
    lng: -83.0022,
    radius: 250,
    short: "On Front Street the Ohio Judicial Center holds the Supreme Court of Ohio. The building opened in nineteen thirty two as the Ohio Departments Building, an Art Deco civic block on the Scioto. Murals inside tell state history. Law moved here from the Statehouse complex. The river side of downtown is not only parks. It is also where the state's last word is written.",
    long: "",
    names: ["Ohio Judicial Center", "Supreme Court of Ohio", "Scioto River"]
  },
  {
    id: "old-governors-mansion",
    name: "Old Governor's Mansion",
    lat: 39.9653,
    lng: -82.9694,
    radius: 250,
    short: "Twelve thirty four East Broad was the governor's house from nineteen twenty to nineteen fifty seven. The brick mansion sits in the East Broad historic row, when this street was the address of power outside the Statehouse. The official residence later moved. The old house remains a marker that Broad Street, the National Road through town, was also a political neighborhood.",
    long: "",
    names: ["Old Governor's Mansion", "East Broad Street", "National Road"]
  },
  {
    id: "capital-university-bexley",
    name: "Capital University and Bexley",
    lat: 39.9554,
    lng: -82.9382,
    radius: 500,
    short: "Bexley is a small city inside the Columbus map. Capital University began in eighteen thirty as a Lutheran school and settled here. The governor's current mansion is in Bexley. Main Street is its own high street. People drive through and think it is just another east side block. It is a separate town that refused to be swallowed, with a campus that predates most of the east side houses.",
    long: "",
    names: ["Capital University", "Bexley", "Governor's Mansion"]
  },
  {
    id: "grandview-heights",
    name: "Grandview Heights",
    lat: 39.9798,
    lng: -83.0448,
    radius: 550,
    short: "Grandview Heights sits on the rise west of the Olentangy. It incorporated in nineteen six so Columbus would not annex the hill. Marble Cliff and the quarries are next door. Grandview Avenue became a small downtown. From here you look back at the skyline the suburb refused to join. The name is literal. The height is why the town exists.",
    long: "",
    names: ["Grandview Heights", "Marble Cliff", "Olentangy River"]
  },
  {
    id: "driving-park",
    name: "Driving Park",
    lat: 39.9502,
    lng: -82.9605,
    radius: 500,
    short: "Driving Park was named for a horse track. In the early nineteen hundreds this southeast side field held the Driving Park racecourse. Houses later filled the oval. The neighborhood became a center of Black Columbus after the war. The name is the last piece of the track. The community is what replaced the horses.",
    long: "",
    names: ["Driving Park"]
  },
  {
    id: "milo-grogan",
    name: "Milo-Grogan",
    lat: 39.9855,
    lng: -82.9902,
    radius: 500,
    short: "Milo-Grogan grew where the railroads crossed north of downtown. Milo and Grogan were two settlements that fused around shops and shop men. The tracks made the jobs and cut the streets. Italian and working families filled the blocks. Interstate Seventy One later carved the edge. This is a railroad neighborhood that still sits against the line that created it.",
    long: "",
    names: ["Milo-Grogan"]
  },
  {
    id: "lockbourne-rickenbacker",
    name: "Rickenbacker Air Force Base",
    lat: 39.8138,
    lng: -82.9339,
    radius: 900,
    short: "South of the city the field was Lockbourne Army Air Base in World War Two, then Lockbourne Air Force Base. In nineteen seventy four it took Eddie Rickenbacker's name. Cargo jets still use the long runway. The base made the south side part of the air war and then part of freight aviation. Columbus trained and shipped from here long after the downtown arsenal went quiet.",
    long: "",
    names: ["Rickenbacker Air Force Base", "Lockbourne", "Eddie Rickenbacker"]
  },
  {
    id: "ohio-state-fairgrounds",
    name: "Ohio Expo Center",
    lat: 40.0007,
    lng: -82.9894,
    radius: 600,
    short: "The Ohio State Fair has called this ground home since the late eighteen eighties. Before that the fair moved from town to town. Seventeenth Avenue became the permanent show. The Ohio History Center stands next door on purpose. For two weeks each summer the state still comes to Columbus with livestock, engines, and food. The rest of the year the grounds wait under the same name.",
    long: "",
    names: ["Ohio State Fair", "Ohio Expo Center", "Ohio History Center"]
  },
  {
    id: "wexner-center",
    name: "Wexner Center for the Arts",
    lat: 40.0006,
    lng: -83.0095,
    radius: 250,
    short: "The Wexner Center opened in nineteen eighty nine on Fifteenth Avenue as a laboratory for new art, not a vault of old paintings. Architect Peter Eisenman broke the grid against the campus plan and against the old armory that once stood here. Les Wexner funded it. The building is an argument in brick and white steel that Ohio State would not only train engineers and fullbacks.",
    long: "",
    names: ["Wexner Center for the Arts", "Peter Eisenman", "Les Wexner", "Ohio State"]
  },
  {
    id: "union-station-arch",
    name: "Union Station Arch",
    lat: 39.9694,
    lng: -83.0073,
    radius: 300,
    short: "The stone arch in McFerson Commons is what is left of Union Station. Daniel Burnham's eighteen ninety seven station faced High Street until the wrecking ball in nineteen seventy six. A portion of the arcade was saved and rebuilt here in the Arena District. Trains made Columbus a hub. The arch is the fragment. The convention center sits on the rest of the platform.",
    long: "",
    names: ["Union Station", "Daniel Burnham", "McFerson Commons", "Arena District"]
  },
{
    id: "cultural-arts-center",
    name: "Cultural Arts Center",
    lat: 39.9583,
    lng: -83.0038,
    radius: 250,
    short: "The brick building on Washington Boulevard was the Ohio State Arsenal, finished in eighteen sixty one as the Civil War began. Arms moved through here while Camp Chase filled on the west side. The city later turned the arsenal into the Cultural Arts Center. The riverbank kept the military warehouse and gave it a second life as studios. War storage, then art. Same walls.",
    long: "",
    names: ["Cultural Arts Center", "Ohio State Arsenal", "Civil War"]
  },
  {
    id: "st-mary-german-village",
    name: "St. Mary Church",
    lat: 39.9469,
    lng: -82.9947,
    radius: 250,
    short: "St. Mary on South Third is the steeple of German Village. German Catholics built the church in the eighteen sixties when this end of town spoke German on the sidewalk. The tower still sets the height of the neighborhood. Mass, school, and funerals held the parish together after the breweries closed and after the city tried to clear the blocks. The bricks outlasted the language.",
    long: "",
    names: ["St. Mary Church", "German Village"]
  },
  {
    id: "holy-cross-church",
    name: "Holy Cross Church",
    lat: 39.9581,
    lng: -82.9931,
    radius: 250,
    short: "Holy Cross on South Fifth is the older German Catholic parish downtown, opened in the eighteen forties. It served immigrants before German Village had that name. The church, rectory, and school are on the National Register. When people say the Germans built Columbus south of Broad, this is one of the first roofs they raised.",
    long: "",
    names: ["Holy Cross Church"]
  },
  {
    id: "first-congregational",
    name: "First Congregational Church",
    lat: 39.9647,
    lng: -82.9938,
    radius: 250,
    short: "First Congregational stands on East Broad among the civic churches of the old East Broad row. The congregation goes back to the early capital years. The present Gothic building is a landmark on the National Road through downtown. Broad Street was not only offices and mansions. It was also the Sunday address of the people who ran the state.",
    long: "",
    names: ["First Congregational Church", "East Broad Street"]
  },
  {
    id: "aminah-robinson",
    name: "Aminah Robinson",
    lat: 39.9688,
    lng: -82.9785,
    radius: 350,
    short: "Aminah Brenda Lynn Robinson grew up on the east side and turned Poindexter Village, Long Street, and family memory into cloth, button, and paint. She called the work a People's History. Museums later hung it. The streets she drew are the same King Lincoln blocks you are crossing. Columbus did not have to import this artist. She was already mapping the neighborhood.",
    long: "",
    names: ["Aminah Robinson", "Poindexter Village", "King Lincoln Bronzeville"]
  },
  {
    id: "franklinton-floodwall",
    name: "Franklinton Floodwall",
    lat: 39.9588,
    lng: -83.0205,
    radius: 600,
    short: "The wall on the west bank is why Franklinton still exists. The floods of eighteen thirty two, nineteen thirteen, and nineteen fifty nine filled The Bottoms. After nineteen fifty nine the city built a concrete defense along the Scioto. Houses could stay. Development came back decades later. When you see the wall, you are looking at the line between the river's old claim and the town that would not leave.",
    long: "",
    names: ["Franklinton Floodwall", "Franklinton", "Flood of 1913", "Scioto River"]
  },
  {
    id: "griggs-dam",
    name: "Griggs Dam",
    lat: 39.9745,
    lng: -83.0872,
    radius: 500,
    short: "Griggs Dam, finished in nineteen fifteen, is one of the reservoirs that let Columbus grow. It sits on the Scioto west of downtown and carries the name of city engineer Julian Griggs. Before these dams, wells and the raw river were not enough. The reservoir is drinking water, a park road, and the reason west side hills became neighborhoods instead of a floodplain gamble.",
    long: "",
    names: ["Griggs Dam", "Julian Griggs", "Scioto River"]
  },
  {
    id: "cooper-stadium",
    name: "Cooper Stadium",
    lat: 39.9436,
    lng: -83.0547,
    radius: 400,
    short: "Cooper Stadium on the west side was Red Bird Stadium, then Jets Stadium, then the home of the Columbus Clippers. Night baseball started here in nineteen thirty two. Generations learned the game on this field before the club moved downtown to Huntington Park. The concrete bowl is quiet now. For seventy years this was where Columbus spent summer nights.",
    long: "",
    names: ["Cooper Stadium", "Columbus Clippers", "Columbus Jets", "Red Birds"]
  },
  {
    id: "marble-cliff",
    name: "Marble Cliff Quarries",
    lat: 39.9722,
    lng: -83.0608,
    radius: 500,
    short: "Marble Cliff is named for the limestone dug from these west side banks. The quarries fed sidewalks, Statehouse work, and buildings across the Midwest. Marble Cliff and Grandview grew as quarry and railroad towns on the ridge above the Scioto. The pits later became lakes and housing. The stone in downtown Columbus often started as a hole in this hill.",
    long: "",
    names: ["Marble Cliff", "Scioto River", "Grandview Heights"]
  },
  {
    id: "worthington",
    name: "Worthington",
    lat: 40.0931,
    lng: -83.0180,
    radius: 700,
    short: "Worthington was laid out in eighteen three by New Englanders from the Scioto Company, led by James Kilbourne. The village green, St. John's Episcopal, and the grid are New England dropped onto the Olentangy. It predates Columbus and stayed a separate city. High Street runs straight from downtown through Clintonville and into this older town. You did not leave Ohio. You entered a Yankee plat.",
    long: "",
    names: ["Worthington", "James Kilbourne", "Scioto Company", "St. John's Episcopal"]
  },
  {
    id: "westerville-otterbein",
    name: "Westerville and Otterbein",
    lat: 40.1262,
    lng: -82.9291,
    radius: 700,
    short: "Westerville billed itself as the Dry Capital of the World. The Anti-Saloon League ran a national printing operation here. Otterbein University, founded in eighteen forty seven, is the town's older campus. Temperance, church school, and a separate Main Street kept Westerville off Columbus's bar map for decades. The north side of the metro still carries that fight in its founding story.",
    long: "",
    names: ["Westerville", "Otterbein University", "Anti-Saloon League"]
  },
  {
    id: "columbus-zoo",
    name: "Columbus Zoo",
    lat: 40.1565,
    lng: -83.1186,
    radius: 700,
    short: "The Columbus Zoo sits on the Scioto in Powell, north of the old city line. A short zoo failed in Beechwold in nineteen five. This one took hold and became one of the country's known zoos under directors including Jack Hanna. Families from every county treat it as a Columbus place. The river corridor that started at Franklinton ends, for a lot of kids, at these gates.",
    long: "",
    names: ["Columbus Zoo", "Jack Hanna", "Powell", "Scioto River"]
  },
  {
    id: "cultural-arts-center",
    name: "Cultural Arts Center",
    lat: 39.9583,
    lng: -83.0038,
    radius: 250,
    short: "The brick building on Washington Boulevard was the Ohio State Arsenal, finished in eighteen sixty one as the Civil War began. Arms moved through here while Camp Chase filled on the west side. The city later turned the arsenal into the Cultural Arts Center. The riverbank kept the military warehouse and gave it a second life as studios. War storage, then art. Same walls.",
    long: "",
    names: ["Cultural Arts Center", "Ohio State Arsenal", "Civil War"]
  },
  {
    id: "st-mary-german-village",
    name: "St. Mary Church",
    lat: 39.9469,
    lng: -82.9947,
    radius: 250,
    short: "St. Mary on South Third is the steeple of German Village. German Catholics built the church in the eighteen sixties when this end of town spoke German on the sidewalk. The tower still sets the height of the neighborhood. Mass, school, and funerals held the parish together after the breweries closed and after the city tried to clear the blocks. The bricks outlasted the language.",
    long: "",
    names: ["St. Mary Church", "German Village"]
  },
  {
    id: "holy-cross-church",
    name: "Holy Cross Church",
    lat: 39.9581,
    lng: -82.9931,
    radius: 250,
    short: "Holy Cross on South Fifth is the older German Catholic parish downtown, opened in the eighteen forties. It served immigrants before German Village had that name. The church, rectory, and school are on the National Register. When people say the Germans built Columbus south of Broad, this is one of the first roofs they raised.",
    long: "",
    names: ["Holy Cross Church"]
  },
  {
    id: "first-congregational",
    name: "First Congregational Church",
    lat: 39.9647,
    lng: -82.9938,
    radius: 250,
    short: "First Congregational stands on East Broad among the civic churches of the old East Broad row. The congregation goes back to the early capital years. The present Gothic building is a landmark on the National Road through downtown. Broad Street was not only offices and mansions. It was also the Sunday address of the people who ran the state.",
    long: "",
    names: ["First Congregational Church", "East Broad Street"]
  },
  {
    id: "aminah-robinson",
    name: "Aminah Robinson",
    lat: 39.9688,
    lng: -82.9785,
    radius: 350,
    short: "Aminah Brenda Lynn Robinson grew up on the east side and turned Poindexter Village, Long Street, and family memory into cloth, button, and paint. She called the work a People's History. Museums later hung it. The streets she drew are the same King Lincoln blocks you are crossing. Columbus did not have to import this artist. She was already mapping the neighborhood.",
    long: "",
    names: ["Aminah Robinson", "Poindexter Village", "King Lincoln Bronzeville"]
  },
  {
    id: "franklinton-floodwall",
    name: "Franklinton Floodwall",
    lat: 39.9588,
    lng: -83.0205,
    radius: 600,
    short: "The wall on the west bank is why Franklinton still exists. The floods of eighteen thirty two, nineteen thirteen, and nineteen fifty nine filled The Bottoms. After nineteen fifty nine the city built a concrete defense along the Scioto. Houses could stay. Development came back decades later. When you see the wall, you are looking at the line between the river's old claim and the town that would not leave.",
    long: "",
    names: ["Franklinton Floodwall", "Franklinton", "Flood of 1913", "Scioto River"]
  },
  {
    id: "griggs-dam",
    name: "Griggs Dam",
    lat: 39.9745,
    lng: -83.0872,
    radius: 500,
    short: "Griggs Dam, finished in nineteen fifteen, is one of the reservoirs that let Columbus grow. It sits on the Scioto west of downtown and carries the name of city engineer Julian Griggs. Before these dams, wells and the raw river were not enough. The reservoir is drinking water, a park road, and the reason west side hills became neighborhoods instead of a floodplain gamble.",
    long: "",
    names: ["Griggs Dam", "Julian Griggs", "Scioto River"]
  },
  {
    id: "cooper-stadium",
    name: "Cooper Stadium",
    lat: 39.9436,
    lng: -83.0547,
    radius: 400,
    short: "Cooper Stadium on the west side was Red Bird Stadium, then Jets Stadium, then the home of the Columbus Clippers. Night baseball started here in nineteen thirty two. Generations learned the game on this field before the club moved downtown to Huntington Park. The concrete bowl is quiet now. For seventy years this was where Columbus spent summer nights.",
    long: "",
    names: ["Cooper Stadium", "Columbus Clippers", "Columbus Jets", "Red Birds"]
  },
  {
    id: "marble-cliff",
    name: "Marble Cliff Quarries",
    lat: 39.9722,
    lng: -83.0608,
    radius: 500,
    short: "Marble Cliff is named for the limestone dug from these west side banks. The quarries fed sidewalks, Statehouse work, and buildings across the Midwest. Marble Cliff and Grandview grew as quarry and railroad towns on the ridge above the Scioto. The pits later became lakes and housing. The stone in downtown Columbus often started as a hole in this hill.",
    long: "",
    names: ["Marble Cliff", "Scioto River", "Grandview Heights"]
  },
  {
    id: "worthington",
    name: "Worthington",
    lat: 40.0931,
    lng: -83.0180,
    radius: 700,
    short: "Worthington was laid out in eighteen three by New Englanders from the Scioto Company, led by James Kilbourne. The village green, St. John's Episcopal, and the grid are New England dropped onto the Olentangy. It predates Columbus and stayed a separate city. High Street runs straight from downtown through Clintonville and into this older town. You did not leave Ohio. You entered a Yankee plat.",
    long: "",
    names: ["Worthington", "James Kilbourne", "Scioto Company", "St. John's Episcopal"]
  },
  {
    id: "westerville-otterbein",
    name: "Westerville and Otterbein",
    lat: 40.1262,
    lng: -82.9291,
    radius: 700,
    short: "Westerville billed itself as the Dry Capital of the World. The Anti-Saloon League ran a national printing operation here. Otterbein University, founded in eighteen forty seven, is the town's older campus. Temperance, church school, and a separate Main Street kept Westerville off Columbus's bar map for decades. The north side of the metro still carries that fight in its founding story.",
    long: "",
    names: ["Westerville", "Otterbein University", "Anti-Saloon League"]
  },
  {
    id: "columbus-zoo",
    name: "Columbus Zoo",
    lat: 40.1565,
    lng: -83.1186,
    radius: 700,
    short: "The Columbus Zoo sits on the Scioto in Powell, north of the old city line. A short zoo failed in Beechwold in nineteen five. This one took hold and became one of the country's known zoos under directors including Jack Hanna. Families from every county treat it as a Columbus place. The river corridor that started at Franklinton ends, for a lot of kids, at these gates.",
    long: "",
    names: ["Columbus Zoo", "Jack Hanna", "Powell", "Scioto River"]
  },
  {
    id: "upper-arlington",
    name: "Upper Arlington",
    lat: 40.0359,
    lng: -83.0610,
    radius: 800,
    short: "Upper Arlington was platted in nineteen seventeen by King and Ben Thompson on farmland west of the Olentangy. They sold a planned suburb with curving streets and deed rules. The village became a city and never folded into Columbus. Scioto Country Club and Ohio State's west campus sit on its edge. This is the ridge neighborhood built for people who worked in the capital and wanted out of the grid.",
    long: "",
    names: ["Upper Arlington", "King Thompson", "Ben Thompson", "Scioto Country Club"]
  },
  {
    id: "grove-city",
    name: "Grove City",
    lat: 39.8815,
    lng: -83.0930,
    radius: 800,
    short: "Grove City began in eighteen fifty two when William Breck bought farm land south of Columbus and laid out lots. High Street here is a separate town center, not a downtown block. The south side grew with interurbans, then with highways. People treat it as a suburb. It is an old village that kept its name when Columbus spread to the fence line.",
    long: "",
    names: ["Grove City", "William Breck"]
  },
  {
    id: "canal-winchester",
    name: "Canal Winchester",
    lat: 39.8456,
    lng: -82.8043,
    radius: 700,
    short: "Canal Winchester exists because of the Ohio and Erie Canal. The town was platted in eighteen twenty eight beside the water that tied the Scioto country to the Ohio River trade. Locks and basins made a farm stop into a village. The canal died after the railroads. The name did not. You are on the old wet road that once moved grain east.",
    long: "",
    names: ["Canal Winchester", "Ohio and Erie Canal"]
  },
  {
    id: "urbancrest",
    name: "Urbancrest",
    lat: 39.8978,
    lng: -83.0887,
    radius: 400,
    short: "Urbancrest is one of the smallest cities in Ohio, and one of the first in the country to elect a Black woman as mayor, Ellen Walker Craig-Jones, in nineteen seventy two. The village sits on the southwest edge of Columbus. It incorporated to keep a local government when the big city was spreading. The story here is not size. It is a town that insisted on running itself.",
    long: "",
    names: ["Urbancrest", "Ellen Walker Craig-Jones"]
  },
  {
    id: "linden",
    name: "Linden",
    lat: 40.0065,
    lng: -82.9755,
    radius: 700,
    short: "Linden grew along Cleveland Avenue as streetcars pulled Columbus north and east. It was a streetcar suburb, then a majority Black neighborhood after mid century moves and highway cuts. The avenue is still the spine. Churches, shops, and brick houses face the same road that made the place. Linden is not a side street story. It is a main drag story.",
    long: "",
    names: ["Linden", "Cleveland Avenue"]
  },
  {
    id: "weinland-park",
    name: "Weinland Park",
    lat: 39.9955,
    lng: -82.9980,
    radius: 450,
    short: "Weinland Park sits between campus and downtown, named for a school superintendent. Factories and working houses filled the blocks. Ohio State expansion, highways, and later rebuilding all hit this same grid. It is one of the neighborhoods that shows how a university city treats the land at its elbow. Close to the Oval. Not the same world.",
    long: "",
    names: ["Weinland Park", "Ohio State"]
  },
  {
    id: "jerrie-mock",
    name: "Jerrie Mock",
    lat: 39.9980,
    lng: -82.8919,
    radius: 600,
    short: "Geraldine Jerrie Mock learned to fly in Ohio and left Port Columbus on March nineteenth, nineteen sixty four. Twenty nine days later she was the first woman to fly solo around the world. Her plane was a single engine Cessna she called the Spirit of Columbus. Earhart tried and did not finish. Mock did. The east side runway is her starting line.",
    long: "",
    names: ["Jerrie Mock", "Spirit of Columbus", "Port Columbus"]
  },
  {
    id: "alice-schille",
    name: "Alice Schille",
    lat: 39.9643,
    lng: -82.9878,
    radius: 300,
    short: "Alice Schille was born in Columbus in eighteen sixty nine and became one of America's strong watercolor painters. She trained here, worked abroad, and kept a studio in this city when many artists left for good. The Columbus Museum of Art holds her work. If Bellows is the city's famous son in oil, Schille is the one who proved the same town could make a modern painter in water.",
    long: "",
    names: ["Alice Schille", "Columbus Museum of Art"]
  },
  {
    id: "ccad",
    name: "Columbus College of Art and Design",
    lat: 39.9651,
    lng: -82.9912,
    radius: 300,
    short: "The Columbus College of Art and Design began in eighteen seventy nine as the Columbus Art School, tied to the museum on East Broad. It is one of the oldest art colleges in the country. The Discovery District campus still sits beside the museum. Factory Columbus and gallery Columbus share this block. The school is why the east side of downtown kept a working art bench.",
    long: "",
    names: ["Columbus College of Art and Design", "Columbus Museum of Art"]
  },
  {
    id: "ohio-school-for-the-deaf",
    name: "Ohio School for the Deaf",
    lat: 40.0718,
    lng: -82.9987,
    radius: 400,
    short: "Ohio opened a school for deaf students in eighteen twenty nine. The first long campus was on East Town, now Topiary Park. In the nineteen fifties the school moved to this north campus off Morse Road. It is a state school with a two century story. The old grounds became a garden. The work of the school kept going north.",
    long: "",
    names: ["Ohio School for the Deaf", "Topiary Park"]
  },
  {
    id: "gahanna",
    name: "Gahanna",
    lat: 40.0192,
    lng: -82.8793,
    radius: 700,
    short: "Gahanna grew at the crossing of Big Walnut Creek and the roads east of Columbus. The name is tied to a Native word for the valley. A village formed in the nineteenth century and later became a city that Columbus did not annex. Creeks, a mill seat, and an old main street are the reason it is here. The east side suburbs did not all start as shopping strips.",
    long: "",
    names: ["Gahanna", "Big Walnut Creek"]
  },
  {
    id: "reynoldsburg",
    name: "Reynoldsburg",
    lat: 39.9548,
    lng: -82.8121,
    radius: 700,
    short: "Reynoldsburg sits on the National Road east of Columbus. Alexander W. Livingston bred the Buckeye tomato here in the eighteen seventies and helped make the town call itself the birthplace of the tomato. That is a proud local claim with a real seedsman behind it. The old pike, not the interstate, is the street that first put Reynoldsburg on the way west.",
    long: "",
    names: ["Reynoldsburg", "Alexander W. Livingston", "National Road", "Buckeye tomato"]
  },
 {
    id: "whitehall",
    name: "Whitehall",
    lat: 39.9667,
    lng: -82.8857,
    radius: 700,
    short: "Whitehall incorporated in nineteen forty six so the east side would not be swallowed whole. The Defense Construction Supply Center and later defense work made the jobs. Yearling Road and Main Street became a small city grid beside the big one. Whitehall is a wartime suburb that turned into a town. The federal depot on its edge is why the houses are here.",
    long: "",
    names: ["Whitehall", "Defense Construction Supply Center"]
  },
  {
    id: "defense-supply-center",
    name: "Defense Supply Center Columbus",
    lat: 39.9718,
    lng: -82.8820,
    radius: 500,
    short: "This east side depot began as a World War One quartermaster site and grew into Defense Supply Center Columbus. Parts, uniforms, and logistics for the armed forces moved through here for a century. It is one of the largest federal employers on this side of town. War work did not only happen at Fort Hayes. It happened in these warehouses.",
    long: "",
    names: ["Defense Supply Center Columbus", "Whitehall"]
  },
  {
    id: "hilliard",
    name: "Hilliard",
    lat: 40.0334,
    lng: -83.1582,
    radius: 700,
    short: "Hilliard started as a railroad village in eighteen fifty three, laid out by John Hilliard when the tracks headed west. The old depot town sat in farmland. Columbus grew out to meet it. The west side still has a station-era Main Street under the newer roads. Rail first. Suburb later.",
    long: "",
    names: ["Hilliard", "John Hilliard"]
  },
  {
    id: "dublin",
    name: "Dublin",
    lat: 40.0992,
    lng: -83.1141,
    radius: 800,
    short: "Dublin began as a mill village on the Scioto in the early eighteen hundreds. John Sells and others opened the high banks. For a long time it was a quiet river town. Office parks and Muirfield came later. The stone bridge and the old cemetery still face the water that made the place. This was a Scioto ford community before it was a freeway exit.",
    long: "",
    names: ["Dublin", "John Sells", "Scioto River", "Muirfield"]
  },
  {
    id: "groveport",
    name: "Groveport",
    lat: 39.8484,
    lng: -82.8860,
    radius: 600,
    short: "Groveport grew where the canal and the roads met southeast of Columbus. The Ohio and Erie Canal and later the railroad made a farm crossing into a village. Madison Mills and the lock country sat nearby. Air cargo at Rickenbacker now sits on the same south corridor. Water, then rail, then runways. The town name stayed.",
    long: "",
    names: ["Groveport", "Ohio and Erie Canal", "Rickenbacker"]
  },
  {
    id: "lockbourne",
    name: "Lockbourne",
    lat: 39.8092,
    lng: -82.9724,
    radius: 500,
    short: "Lockbourne is named for the locks. The Ohio and Erie Canal needed a flight of them here to climb toward Columbus. A village formed around that work. A century later the Army airfield next door took the same name, then became Rickenbacker. Two technologies used the same south flats. Canal boats first. Bombers and cargo jets after.",
    long: "",
    names: ["Lockbourne", "Ohio and Erie Canal", "Rickenbacker Air Force Base"]
  },
  {
    id: "hungarian-village",
    name: "Hungarian Village",
    lat: 39.9368,
    lng: -82.9902,
    radius: 400,
    short: "Hungarian Village sits south of German Village along Reeb and Woodrow. Steel, rail, and foundry jobs pulled Hungarian and other East European families here in the early nineteen hundreds. The churches and halls kept the language longer than the factories did. It is a smaller immigrant map than German Village, and easier to miss. The south side is not only one story.",
    long: "",
    names: ["Hungarian Village"]
  },
  {
    id: "harrison-west",
    name: "Harrison West",
    lat: 39.9785,
    lng: -83.0188,
    radius: 400,
    short: "Harrison West is the brick neighborhood between the Olentangy and Victorian Village. It grew as a streetcar district for people who worked downtown and at the nearby plants. Harrison Avenue is the spine. Highways and river flooding both pressed the western edge. The houses that remain are the old near-west side that did not get scraped for the Arena District.",
    long: "",
    names: ["Harrison West", "Olentangy River"]
  },
  {
    id: "iuka-ravine",
    name: "Iuka Ravine",
    lat: 40.0009,
    lng: -83.0011,
    radius: 300,
    short: "Iuka Ravine is a wooded cut on the east edge of campus, listed as a historic district. Faculty houses cling to the slope. The ravine is older than the university streets. It is one of the last downtown-adjacent gullies that was not filled. Campus grew around a crease in the land instead of flattening it.",
    long: "",
    names: ["Iuka Ravine", "Ohio State"]
  },
  {
    id: "huntington-park",
    name: "Huntington Park",
    lat: 39.9688,
    lng: -83.0117,
    radius: 300,
    short: "Huntington Park opened in two thousand nine on the old penitentiary ground in the Arena District. The Clippers moved here from Cooper Stadium. Night baseball came back downtown. The field sits where the prison wall once ran. Columbus put a diamond on the site of the lockup and called it a new neighborhood.",
    long: "",
    names: ["Huntington Park", "Columbus Clippers", "Ohio Penitentiary", "Arena District"]
  },
  {
    id: "benjamin-hanby",
    name: "Hanby House",
    lat: 40.1256,
    lng: -82.9382,
    radius: 300,
    short: "In Westerville, the Hanby House was home to Benjamin Hanby. He wrote Darling Nelly Gray, an antislavery ballad, and later Up on the Housetop. The family hid freedom seekers here on the Underground Railroad. Otterbein and the Anti-Saloon League get most of the Westerville ink. This small house is the song and the railroad under the same roof.",
    long: "",
    names: ["Benjamin Hanby", "Hanby House", "Darling Nelly Gray", "Underground Railroad", "Westerville"]
  },
  {
    id: "new-albany",
    name: "New Albany",
    lat: 40.0812,
    lng: -82.8088,
    radius: 700,
    short: "New Albany was a farm village on the east plain, platted in the eighteen thirties. For most of its life it was a crossroads. Late twentieth century money rebuilt it as a planned town with Georgian brick and a school campus at the center. The old name stayed. The new plan is an argument about what a village should look like when Columbus reaches the Licking County line.",
    long: "",
    names: ["New Albany"]
  },
{
    id: "merion-village",
    name: "Merion Village",
    lat: 39.9355,
    lng: -82.9935,
    radius: 500,
    short: "Merion Village is the next band of brick south of German Village. The houses went up around nineteen hundred for workers who could not yet buy into the older German blocks. Parsons and High are the edges. It is easy to treat as leftover German Village. It is its own streetcar ring, built when the south side was still filling in.",
    long: "",
    names: ["Merion Village", "German Village"]
  },
  {
    id: "old-oaks",
    name: "Old Oaks",
    lat: 39.9528,
    lng: -82.9678,
    radius: 400,
    short: "Old Oaks is a near east historic district of large early twentieth century houses. Doctors, managers, and civil servants built here when East Broad and Bryden were the address to have. The oaks are literal. The district listing is what kept the big houses from being carved into a different neighborhood name.",
    long: "",
    names: ["Old Oaks", "Bryden Road"]
  },
  {
    id: "eastmoor",
    name: "Eastmoor",
    lat: 39.9575,
    lng: -82.9015,
    radius: 500,
    short: "Eastmoor was laid out as a planned east side suburb in the nineteen teens and twenties, with curving streets east of Nelson Road. Main Street and East Broad bound the idea. It was sold as country living inside the city. The houses are the record. Columbus did not only grow by adding factories. It also grew by platting shade trees.",
    long: "",
    names: ["Eastmoor"]
  },
  {
    id: "shepard",
    name: "Shepard",
    lat: 39.9788,
    lng: -82.9142,
    radius: 450,
    short: "Shepard grew around a railroad stop and a small commercial strip on the east side. The name comes from an early landholder. Nelson Road and the tracks organized the blocks. It is one of the east side places people drive through without a sign that says history. The stop came first. The houses followed the platform.",
    long: "",
    names: ["Shepard"]
  },
  {
    id: "king-arts-complex",
    name: "King Arts Complex",
    lat: 39.9658,
    lng: -82.9798,
    radius: 250,
    short: "The King Arts Complex sits in the old Pythian Temple on Mount Vernon Avenue. The building opened in nineteen twenty six as a Black fraternal hall and theater. It is now the cultural center of King Lincoln. Jazz, church programs, and neighborhood memory share the same house. Long Street had the Lincoln. Mount Vernon had the Pythians.",
    long: "",
    names: ["King Arts Complex", "Pythian Temple", "King Lincoln Bronzeville"]
  },
  {
    id: "second-baptist-poindexter",
    name: "Second Baptist Church",
    lat: 39.9669,
    lng: -82.9826,
    radius: 250,
    short: "Second Baptist on the near east side is the church of Reverend James Poindexter. He pastored here, sat on city council, and pushed Columbus to treat Black residents as citizens. Poindexter Village later took his name. The pulpit came first. The housing project was the city's delayed answer.",
    long: "",
    names: ["Second Baptist Church", "James Poindexter", "Poindexter Village"]
  },
  {
    id: "anheuser-busch-columbus",
    name: "Anheuser-Busch Columbus Brewery",
    lat: 40.0825,
    lng: -82.9688,
    radius: 500,
    short: "The Anheuser-Busch plant on the north side opened in nineteen sixty six. It is one of the big industrial floors Columbus added after the old German breweries on Front Street died. Beer left the Brewery District and came back as a national works along Interstate Seventy One. The smell on a wet day is the new version of Hoster.",
    long: "",
    names: ["Anheuser-Busch", "Brewery District"]
  },
  {
    id: "chemical-abstracts",
    name: "Chemical Abstracts Service",
    lat: 40.0348,
    lng: -83.0236,
    radius: 400,
    short: "Chemical Abstracts Service, on the north side near the Olentangy, became the world's great index of chemistry. The American Chemical Society built this operation in Columbus. For decades, if a compound was published anywhere, the record ran through this campus. It is quiet knowledge work that made the city more than a capital and a campus.",
    long: "",
    names: ["Chemical Abstracts Service", "American Chemical Society"]
  },
  {
    id: "nationwide",
    name: "Nationwide",
    lat: 39.9696,
    lng: -83.0027,
    radius: 350,
    short: "Nationwide began as the Farm Bureau Mutual Automobile Insurance Company in nineteen twenty six. Farmers needed car insurance. The company took the name Nationwide and built a glass tower on the north edge of downtown. The Arena District is its neighborhood bet. Columbus is an insurance city as much as a capital city. This tower is that fact in steel.",
    long: "",
    names: ["Nationwide", "Farm Bureau", "Arena District"]
  },
  {
    id: "ohio-dominican",
    name: "Ohio Dominican University",
    lat: 39.9936,
    lng: -82.9410,
    radius: 400,
    short: "Ohio Dominican sits on Sunbury Road on the east side. Dominican sisters opened the school in nineteen eleven as the College of St. Mary of the Springs. The chapel and the older halls still read as a convent campus. It is one of the Catholic colleges that gave Columbus a second educational spine away from Ohio State.",
    long: "",
    names: ["Ohio Dominican University", "College of St. Mary of the Springs"]
  },
  {
    id: "st-john-arena",
    name: "St. John Arena",
    lat: 40.0053,
    lng: -83.0190,
    radius: 250,
    short: "St. John Arena opened in nineteen fifty six for Ohio State basketball and remains the home of the marching band. The Skull Session before football happens here. Jerry Lucas and later stars packed the house before the Schottenstein Center. The building is named for Lynn St. John, the athletic director who helped build the modern department.",
    long: "",
    names: ["St. John Arena", "Lynn St. John", "Ohio State Marching Band"]
  },
  {
    id: "hoover-reservoir",
    name: "Hoover Reservoir",
    lat: 40.1115,
    lng: -82.8790,
    radius: 800,
    short: "Hoover Reservoir, finished in the nineteen fifties on Big Walnut Creek, is another reason Columbus could keep growing. The dam holds drinking water for the east and northeast side. The lake is also a park. Like Griggs on the Scioto, this is civic engineering that looks like scenery until you remember the taps.",
    long: "",
    names: ["Hoover Reservoir", "Big Walnut Creek"]
  },
  {
    id: "pickerington",
    name: "Pickerington",
    lat: 39.8845,
    lng: -82.7535,
    radius: 700,
    short: "Pickerington began as a farm village in Fairfield County, platted in the early eighteen hundreds by Abraham Pickering. The canal and later the National Road corridor pulled trade east of Columbus. It stayed a separate city. The old main street is still a town, even after the housing came. East side growth did not erase the name on the plat.",
    long: "",
    names: ["Pickerington", "Abraham Pickering"]
  },
  {
    id: "obetz",
    name: "Obetz",
    lat: 39.8789,
    lng: -82.9507,
    radius: 500,
    short: "Obetz is a small south side village named for an early family along the corridor to Lockbourne. Rail and later the freeway made it a working stop between Columbus and the airfield country. It incorporated to keep a local government. South side history is not only Parsons Avenue. It is also these villages that refused to vanish on the map.",
    long: "",
    names: ["Obetz"]
  },
  {
    id: "minerva-park",
    name: "Minerva Park",
    lat: 40.0764,
    lng: -82.9438,
    radius: 400,
    short: "Minerva Park was an amusement park before it was a village. In the eighteen nineties a lake and midway drew streetcar crowds north of Columbus. The park faded. Houses took the grounds. The village kept the name. A north side subdivision is living on top of a trolley park, the same trick Olentangy Park pulled in Clintonville.",
    long: "",
    names: ["Minerva Park"]
  },
  {
    id: "blendon-woods",
    name: "Blendon Woods Metro Park",
    lat: 40.0688,
    lng: -82.9088,
    radius: 500,
    short: "Blendon Woods is Metro Parks land on the northeast side, opened in the nineteen fifties on old Blendon Township ground. Beech and oak. A lake. The name is the township that was here before the subdivisions. When Columbus ran out of empty woods inside the inner belt, it had to buy them on purpose.",
    long: "",
    names: ["Blendon Woods", "Blendon Township"]
  },
  {
    id: "inniswood",
    name: "Inniswood Metro Gardens",
    lat: 40.0645,
    lng: -82.8875,
    radius: 350,
    short: "Inniswood was the Innis family estate in Westerville before it became a Metro Park garden. Grace Innis willed the grounds so the beech woods and gardens would stay open. It is a private landscape that became public. The northeast side got a garden the way Clintonville got roses at Whetstone.",
    long: "",
    names: ["Inniswood", "Grace Innis", "Westerville"]
  },
  {
    id: "blacklick-woods",
    name: "Blacklick Woods Metro Park",
    lat: 39.9365,
    lng: -82.8110,
    radius: 500,
    short: "Blacklick Woods sits on Blacklick Creek at the Reynoldsburg edge. Metro Parks saved a beech-maple forest here in the nineteen fifties when the east side was about to build through it. The creek name is older than the subdivisions. This is the east side's remaining woods with a trail instead of a cul-de-sac.",
    long: "",
    names: ["Blacklick Woods", "Blacklick Creek", "Reynoldsburg"]
  },
  {
    id: "three-creeks",
    name: "Three Creeks Metro Park",
    lat: 39.8775,
    lng: -82.9465,
    radius: 600,
    short: "Three Creeks is where Alum Creek, Big Walnut, and Blacklick water meet on the southeast side. Metro Parks stitched the confluence into a park. Floodplain that used to be dumped on became trails. The south and east sides of Columbus are creek country. This is the place the maps admit it.",
    long: "",
    names: ["Three Creeks Metro Park", "Alum Creek", "Big Walnut Creek", "Blacklick Creek"]
  },
  {
    id: "oshaughnessy-dam",
    name: "O'Shaughnessy Dam",
    lat: 40.1530,
    lng: -83.1265,
    radius: 500,
    short: "O'Shaughnessy Dam, finished in nineteen twenty five, holds the Scioto north of Dublin. It is named for city engineer Jerry O'Shaughnessy. Together with Griggs and later Hoover, it is the water system that let the capital keep adding people. The zoo sits nearby on purpose. Reservoir, park, and drinking water on the same river that started Franklinton.",
    long: "",
    names: ["O'Shaughnessy Dam", "Jerry O'Shaughnessy", "Scioto River", "Columbus Zoo"]
  },
  {
    id: "columbus-state",
    name: "Columbus State",
    lat: 39.9678,
    lng: -82.9908,
    radius: 350,
    short: "Columbus State began as the Columbus Area Technician School in nineteen sixty three and became the community college on Spring Street. It sits in the Discovery District beside the old deaf-school grounds. For thousands of students this, not the Oval, is the campus. The downtown school is how the capital city trained people who were not going to Ohio State.",
    long: "",
    names: ["Columbus State Community College", "Discovery District"]
  },
  {
    id: "nancy-wilson",
    name: "Nancy Wilson",
    lat: 39.9669,
    lng: -82.9811,
    radius: 300,
    short: "Nancy Wilson grew up in Columbus and sang in church and in small rooms on the east side before the records made her national. She came home to the Lincoln Theatre stage that had been built for that neighborhood. Jazz histories name her with the greats. This city can name the street. Long Street was not only a place she played. It was a place she came from.",
    long: "",
    names: ["Nancy Wilson", "Lincoln Theatre", "King Lincoln Bronzeville"]
  },
  {
    id: "emerson-burkhart",
    name: "Emerson Burkhart",
    lat: 39.9640,
    lng: -82.9785,
    radius: 300,
    short: "Emerson Burkhart painted Columbus faces and Columbus streets from a studio on the near east side. He was stubborn, public, and local when the fashion was to leave. Murals and portraits around town still carry his hand. If Bellows left and became famous, Burkhart stayed and painted the neighbors.",
    long: "",
    names: ["Emerson Burkhart"]
  },
  {
    id: "delaware-ohio",
    name: "Delaware",
    lat: 40.2987,
    lng: -83.0680,
    radius: 800,
    short: "Delaware is the county seat north of Columbus, laid out in eighteen eight. Ohio Wesleyan University opened here in eighteen forty two. Rutherford B. Hayes was born in Delaware. The town sits on the Olentangy where the road to Lake Erie left the capital's orbit. Before the suburbs, this was the next real city upriver.",
    long: "",
    names: ["Delaware", "Ohio Wesleyan University", "Rutherford B. Hayes", "Olentangy River"]
  },
     {
    id: "fort-winchester",
    name: "Fort Winchester",
    lat: 41.2858,
    lng: -84.3560,
    radius: 350,
    short: "Fort Winchester sat on this same point in the War of eighteen twelve. The old Fort Defiance works were gone. William Henry Harrison's army needed a new post at the forks, bigger, stretching south along the Auglaize. Sidewalk plaques in Defiance still mark the walls. Two forts. One confluence. Wayne's war, then Tecumseh's war, on the same wet ground.",
    long: "",
    names: ["Fort Winchester", "William Henry Harrison", "War of 1812", "Fort Defiance"]
  },
  {
    id: "defiance-college",
    name: "Defiance College",
    lat: 41.2965,
    lng: -84.3655,
    radius: 400,
    short: "Defiance College began in eighteen fifty as a church school and became a college in the early nineteen hundreds. It sits on a rise above the rivers. A fort town that wanted more than canal traffic built a campus. For a county seat in the old swamp, that was the bet that education would stay when the boats left.",
    long: "",
    names: ["Defiance College"]
  },
  {
    id: "independence-dam",
    name: "Independence Dam",
    lat: 41.2925,
    lng: -84.2810,
    radius: 500,
    short: "Independence Dam is on the Maumee east of Defiance. The state built it to feed the Miami and Erie Canal. The pool became a park after the canal died. Fishermen still work the same water that once floated grain toward Toledo. The dam is leftover canal engineering wearing a state park name.",
    long: "",
    names: ["Independence Dam", "Miami and Erie Canal", "Maumee River"]
  },
  {
    id: "pontiac-park",
    name: "Pontiac Park",
    lat: 41.2888,
    lng: -84.3592,
    radius: 300,
    short: "Pontiac Park sits on the Defiance riverfront under an Ottawa name. Pontiac led a war against British posts in seventeen sixty three. He did not fight this exact point as a capital, but the Maumee valley was his world. The city put the name on public ground at the forks. It is a park label that admits who held the confluence first.",
    long: "",
    names: ["Pontiac Park", "Pontiac", "Ottawa", "Maumee River"]
  },
  {
    id: "defiance-downtown",
    name: "Defiance Downtown",
    lat: 41.2819,
    lng: -84.3629,
    radius: 500,
    short: "Defiance was platted in eighteen twenty two and made a county seat in eighteen forty five. The courthouse block faces a town that the canals and then the Baltimore and Ohio and Wabash trains built. Brick storefronts on First and Second are the county's front room. A fort name became a grid, then a city in eighteen eighty one.",
    long: "",
    names: ["Defiance"]
  },
  {
    id: "johnny-appleseed-defiance",
    name: "Johnny Appleseed in Defiance",
    lat: 41.2840,
    lng: -84.3580,
    radius: 400,
    short: "John Chapman, Johnny Appleseed, moved along the Maumee and Auglaize with seed and nursery stock. Local memory puts him through Defiance when this was still fort country turning into farms. He is buried in Fort Wayne. His work is the orchards that followed the rivers. If you heard him in Fort Wayne, this is the Ohio side of the same walk.",
    long: "",
    names: ["Johnny Appleseed", "John Chapman", "Defiance", "Maumee River"]
  },
  {
    id: "auglaize-river-defiance",
    name: "Auglaize River",
    lat: 41.2750,
    lng: -84.3555,
    radius: 600,
    short: "The Auglaize comes up from the south and hits the Maumee at Defiance. French traders used a word for the clay and the river. Ottawa and Shawnee towns stood on its bends. Wayne followed it. Canal boats used it. The south county still drains to this brown water. Hicksville sits in the old portage country that feeds this river.",
    long: "",
    names: ["Auglaize River", "Maumee River", "Fort Defiance"]
  },
  {
    id: "maumee-river-defiance",
    name: "Maumee River at Defiance",
    lat: 41.2905,
    lng: -84.3500,
    radius: 600,
    short: "The Maumee is the big water of northwest Ohio. It runs from Fort Wayne to Lake Erie. Defiance is the first Ohio city on that line after the Indiana border country. Floods, ice, canal slackwater, and later U.S. Twenty Four all used this valley. If the Auglaize made the fork, the Maumee made the road.",
    long: "",
    names: ["Maumee River", "Fort Wayne", "U.S. 24"]
  },
  {
    id: "sherwood-ohio",
    name: "Sherwood",
    lat: 41.2906,
    lng: -84.5533,
    radius: 400,
    short: "Sherwood is a Defiance County village on the road between Hicksville and the county seat. The railroad and the drained farms made the stop. It is one of the small grids testers roll through without a welcome sign that explains itself. A swamp county needed shipping points every few miles. This was one.",
    long: "",
    names: ["Sherwood"]
  },
  {
    id: "ney-ohio",
    name: "Ney",
    lat: 41.3806,
    lng: -84.5227,
    radius: 350,
    short: "Ney is a tiny Defiance County village named, by local telling, for Napoleon's marshal. The Black Swamp towns borrowed European names the way they borrowed tile and rail. A crossroads, a grain elevator, a school that consolidated away. You are in the county's north farms, not on the river.",
    long: "",
    names: ["Ney"]
  },
  {
    id: "oakwood-ohio",
    name: "Oakwood",
    lat: 41.0953,
    lng: -84.3786,
    radius: 400,
    short: "Oakwood sits in south Defiance County toward the Paulding line. The Clover Leaf and later rail lines, plus drainage ditches, made a village in the oaks. It is farm-service town, not river town. The south county drained later than the Maumee bank. That is why the houses feel newer and the woods feel closer.",
    long: "",
    names: ["Oakwood"]
  },
  {
    id: "payne-ohio",
    name: "Payne",
    lat: 41.0773,
    lng: -84.7272,
    radius: 400,
    short: "Payne is a Paulding County railroad village near the Indiana line. The Nickel Plate and other roads in the eighteen eighties pulled a town out of the last swamp timber. Oil and gas later poked the same fields. It is a border stop between Hicksville country and Van Wert country. The tracks are the founding.",
    long: "",
    names: ["Payne"]
  },
     {
    id: "defiance-courthouse",
    name: "Defiance County Courthouse",
    lat: 41.2847,
    lng: -84.3633,
    radius: 250,
    short: "The courthouse on Clinton Street opened in eighteen seventy three. Architect J.C. Johnson mixed Second Empire and Italian Villa brick for a county that had only been seated here since eighteen forty five. Veteran memorials sit on the lawn. This block is why Defiance is the one city in the county. Government stayed at the forks when the farms filled the rest of the map.",
    long: "",
    names: ["Defiance County Courthouse", "J.C. Johnson"]
  },
  {
    id: "defiance-library",
    name: "Defiance Public Library",
    lat: 41.2874,
    lng: -84.3568,
    radius: 250,
    short: "The Carnegie library opened in nineteen five on the Fort Defiance ground. Cannons face the two rivers. Andrew Carnegie paid for the building. The city put its books on the old parade. You can stand on the porch and see why Wayne picked the point. A library on a fort is the town in one sentence.",
    long: "",
    names: ["Defiance Public Library", "Andrew Carnegie", "Fort Defiance"]
  },
  {
    id: "diehl-brewery",
    name: "Diehl Brewery",
    lat: 41.2825,
    lng: -84.3685,
    radius: 350,
    short: "Christian Diehl came from Germany and took over a Defiance brewery after the Civil War. The Diehl family ran it for three generations, through Prohibition, until nineteen fifty five. River towns drank local beer before the national plants. Diehl Park still carries the name. Front Street in Columbus had Hoster. Defiance had Diehl.",
    long: "",
    names: ["Christian Diehl", "Diehl Brewery", "Diehl Park"]
  },
  {
    id: "gm-defiance-foundry",
    name: "GM Defiance Foundry",
    lat: 41.2840,
    lng: -84.3280,
    radius: 600,
    short: "General Motors built a huge foundry on State Route Two Eighty One after the Second World War. Engine blocks and iron poured here for decades. It is one of the plants that kept Defiance from shrinking when the canals were already gone. Farm county plus a foundry floor. That mix is the modern town.",
    long: "",
    names: ["General Motors", "GM Defiance Foundry"]
  },
  {
    id: "defiance-machine-works",
    name: "Defiance Machine Works",
    lat: 41.2810,
    lng: -84.3665,
    radius: 350,
    short: "Defiance Machine Works started around eighteen fifty and made machine tools that shipped worldwide. The Kettenring family ran it. A canal town learned to cut metal. After the nineteen thirteen flood, shops like this pushed Defiance toward heavier industry. The brick houses on Holgate Avenue are where that money landed.",
    long: "",
    names: ["Defiance Machine Works", "Kettenring"]
  },
  {
    id: "holgate-avenue",
    name: "Holgate Avenue",
    lat: 41.2825,
    lng: -84.3744,
    radius: 400,
    short: "Holgate Avenue is Defiance's mansion street. William C. Holgate, a lawyer who helped form the county and the college, built here in the eighteen fifties. Queen Anne houses followed. The district is on the walking tour for a reason. Canal and machine-shop money wanted high ground off the flood blocks.",
    long: "",
    names: ["Holgate Avenue", "William C. Holgate"]
  },
  {
    id: "auglaize-village",
    name: "Auglaize Village",
    lat: 41.2495,
    lng: -84.4010,
    radius: 400,
    short: "Auglaize Village is the Defiance County Historical Society's outdoor museum south of town. Moved barns, shops, and a school show the swamp county after the fort and before the foundry. It opened in the nineteen sixties so the tools would not vanish when the last farmsteads came down. If the downtown is the county seat, this is the county attic.",
    long: "",
    names: ["Auglaize Village", "Defiance County Historical Society"]
  },
  {
    id: "kingsbury-park",
    name: "Kingsbury Park",
    lat: 41.2785,
    lng: -84.3610,
    radius: 350,
    short: "Kingsbury Park sits on land given by Clara Latty and named for attorney B. Kingsbury. Pool, diamonds, river-side grass. It is the everyday park, not the fort park. A town that floods needs high public ground. Families have used this one for generations while the Maumee rose and fell a few blocks away.",
    long: "",
    names: ["Kingsbury Park", "Clara Latty"]
  },
  {
    id: "defiance-1913-flood",
    name: "Defiance 1913 Flood",
    lat: 41.2869,
    lng: -84.3600,
    radius: 500,
    short: "March nineteen thirteen, the Maumee and Auglaize came over the banks and through the original plat. First and Wayne still mark the water. Machine shops and houses took the hit. The same flood wrecked Dayton and Franklinton. Defiance answered by pushing industry onto higher ground and remembering the line the rivers claimed.",
    long: "",
    names: ["Flood of 1913", "Maumee River", "Auglaize River"]
  },
  {
    id: "alene-duerk",
    name: "Alene Duerk",
    lat: 41.2819,
    lng: -84.3629,
    radius: 400,
    short: "Alene Duerk grew up in Defiance and became the first woman to reach rear admiral in the United States Navy. She served as a nurse through the world war and the decades after, then broke the rank line in nineteen seventy two. A river town sent a nurse to the fleet. The title came later. The start was here.",
    long: "",
    names: ["Alene Duerk"]
  },
  {
    id: "wild-bill-davison",
    name: "Wild Bill Davison",
    lat: 41.2819,
    lng: -84.3629,
    radius: 400,
    short: "Jazz cornet player Wild Bill Davison was born in Defiance in nineteen oh six. He left the Maumee for Chicago and New York and kept a hot, broken tone that records still carry. Northwest Ohio thinks of forts and foundries. It also produced a horn player who stood in with the greats. The river town had a night side.",
    long: "",
    names: ["Wild Bill Davison"]
  },
  {
    id: "tuttle-museum",
    name: "Andrew L. Tuttle Museum",
    lat: 41.2828,
    lng: -84.3638,
    radius: 250,
    short: "The Andrew L. Tuttle Memorial Museum downtown keeps Defiance artifacts in the old Home Savings building. Native tools, military pieces, and a Simplex airplane hang from the story of a company founded here in nineteen twenty eight. If Auglaize Village is the outdoor county, this is the indoor town.",
    long: "",
    names: ["Andrew L. Tuttle Memorial Museum", "Simplex Aero"]
  },
     {
    id: "lock-37-defiance",
    name: "Canal Lock 37",
    lat: 41.2836,
    lng: -84.3542,
    radius: 250,
    short: "Lock Thirty Seven sits at Three oh nine Perry Street. It is a remaining chamber of the Miami and Erie at Defiance. Boats stepped down toward the Maumee here. Most of the canal is a ditch or a memory. This lock is the piece you can still stand beside and see the stairs the water used.",
    long: "",
    names: ["Miami and Erie Canal", "Lock 37", "Defiance"]
  },
  {
    id: "riverside-cemetery-defiance",
    name: "Riverside Cemetery",
    lat: 41.2733,
    lng: -84.3783,
    radius: 350,
    short: "Riverside Cemetery is on South Clinton, above the Auglaize. The chapel is on the National Register. Canal men, shop men, and the Holgate families are in these rows. A river town buries its people on the bank it could not always hold. The chapel is the quiet civic building after the courthouse and the library.",
    long: "",
    names: ["Riverside Cemetery", "Riverside Chapel"]
  },
  {
    id: "st-john-defiance",
    name: "St. John Catholic Church",
    lat: 41.2848,
    lng: -84.3605,
    radius: 250,
    short: "German and Irish Catholics built parishes in Defiance once the canals brought workers. St. John on the river side was the earlier Catholic roof. The first building stood nearer the Maumee. Later brick replaced it. Faith arrived with the same boats that brought Diehl's brewery and the machine shops.",
    long: "",
    names: ["St. John Catholic Church", "Defiance"]
  },
  {
    id: "brunersburg",
    name: "Brunersburg",
    lat: 41.3185,
    lng: -84.3920,
    radius: 350,
    short: "Brunersburg is a mill hamlet north of Defiance on the Tiffin River. A dam and a few streets. It is older than it looks. Water power beat the swamp here before the county seat took all the ink. Testers cross this valley on the way to Bryan and never get a sign that a mill town happened.",
    long: "",
    names: ["Brunersburg", "Tiffin River"]
  },
  {
    id: "evansport",
    name: "Evansport",
    lat: 41.3887,
    lng: -84.3963,
    radius: 350,
    short: "Evansport sits on the Tiffin River in north Defiance County. The village grew around a mill and a crossing. Two cemeteries mark how long families stayed. It is the farm town between Defiance and Stryker country. River, mill, grid. That is the whole founding.",
    long: "",
    names: ["Evansport", "Tiffin River"]
  },
  {
    id: "florida-ohio",
    name: "Florida",
    lat: 41.3450,
    lng: -84.2027,
    radius: 300,
    short: "Florida, Ohio, is a Henry and Defiance line village on the old river road. The name is the joke everyone makes, then the canal and the Maumee flats are the real story. A small grid in the drained swamp. You did not miss a city. You passed a river stop that kept a post office.",
    long: "",
    names: ["Florida Ohio", "Maumee River"]
  },
  {
    id: "jewell-ohio",
    name: "Jewell",
    lat: 41.3267,
    lng: -84.2861,
    radius: 300,
    short: "Jewell is a crossroads east of Defiance toward Independence Dam. Grain, a rail siding, a name on the county map. Canal slackwater and later the highway made it a blink. The dam town and the county seat got the parks. Jewell kept the elevator.",
    long: "",
    names: ["Jewell"]
  },
  {
    id: "black-swamp-defiance",
    name: "Great Black Swamp",
    lat: 41.2700,
    lng: -84.3700,
    radius: 800,
    short: "Defiance County sat in the Great Black Swamp. After the glaciers, this was wet woods, malaria, and roads that drowned. Settlers tiled the ground, cut the timber, and dug the canals. The farms you see are a constructed landscape. Local memory still talks about the mosquitoes, the corduroy roads, and the ditches that had to come before a courthouse made sense.",
    long: "",
    names: ["Great Black Swamp"]
  },
  {
    id: "tiffin-river",
    name: "Tiffin River",
    lat: 41.3100,
    lng: -84.3920,
    radius: 500,
    short: "The Tiffin River meets the Maumee at Defiance from the north. It drains Williams and Fulton country toward the forks. Mills at Brunersburg and Evansport used it. The name comes from Edward Tiffin, Ohio's first governor. Three rivers make this county seat, not two. Testers driving south from Bryan are following this water whether they see it or not.",
    long: "",
    names: ["Tiffin River", "Edward Tiffin", "Maumee River"]
  },
  {
    id: "buckeye-trail-defiance",
    name: "Buckeye Trail at Defiance",
    lat: 41.2880,
    lng: -84.3520,
    radius: 400,
    short: "The Buckeye Trail threads Defiance along the rivers and the old canal. Ohio's long hiking loop uses the same confluence Wayne used. City and county put signs up so the trail is not only a line on a map. If you are driving the forks, walkers are using the bank you just passed.",
    long: "",
    names: ["Buckeye Trail", "Maumee River"]
  },
  {
    id: "simpled-aero-defiance",
    name: "Simplex Aero",
    lat: 41.2828,
    lng: -84.3638,
    radius: 300,
    short: "Simplex Aero started in Defiance in nineteen twenty eight and built light planes. A machine-tool town tried the air. The Tuttle Museum hangs a Simplex as the reminder. Rickenbacker is the famous Ohio flyer from Columbus. Defiance had a shop that actually framed wings on the Maumee.",
    long: "",
    names: ["Simplex Aero", "Andrew L. Tuttle Memorial Museum"]
  },
  {
    id: "defiance-legend-ice",
    name: "Maumee Ice Gorges",
    lat: 41.2895,
    lng: -84.3480,
    radius: 500,
    short: "Local legend here is not a headless rider. It is ice. The Maumee jams in late winter, piles up at the forks, and has shoved water into streets more than once besides nineteen thirteen. People still talk about the night the river walked into town. In a swamp county the scary story is the water remembering the way.",
    long: "",
    names: ["Maumee River", "Flood of 1913"]
  },
      {
    id: "williams-courthouse",
    name: "Williams County Courthouse",
    lat: 41.4741,
    lng: -84.5517,
    radius: 300,
    short: "The Williams County Courthouse rose on Bryan's square in eighteen ninety one. Architect E.O. Fallis built a Richardson Romanesque tower about one hundred sixty feet tall. You can see it across the flat county. John A. Bryan donated the seat land in eighteen forty. The tower is why drivers know they have reached the county town and not another farm grid.",
    long: "",
    names: ["Williams County Courthouse", "E.O. Fallis", "John A. Bryan"]
  },
  {
    id: "fountain-city-wells",
    name: "Fountain City Wells",
    lat: 41.4748,
    lng: -84.5525,
    radius: 500,
    short: "Bryan is Fountain City because artesian wells once pushed cold water out of the ground without a pump. Settlers drank it and packed food in it before ice plants. The nickname stuck after most of the fountains were capped. The town still draws well water. In the Black Swamp, a free-flowing spring was a founding gift.",
    long: "",
    names: ["Fountain City", "Bryan"]
  },
  {
    id: "spangler-candy",
    name: "Spangler Candy",
    lat: 41.4720,
    lng: -84.5480,
    radius: 400,
    short: "Arthur Spangler bought a baking powder works in Defiance in nineteen six, moved it to Bryan, and turned it into candy. Dum Dums, candy canes, Bit-O-Honey, Sweethearts. The factory still runs. The water tower wears eight giant Dum Dums. A county seat in the old swamp became a place the rest of the country tastes without knowing the map.",
    long: "",
    names: ["Spangler Candy", "Arthur Spangler", "Dum Dums"]
  },
  {
    id: "ohio-art-bryan",
    name: "Ohio Art",
    lat: 41.4765,
    lng: -84.5465,
    radius: 350,
    short: "Doctor Henry Winzeler founded Ohio Art in Bryan in nineteen oh eight to make metal picture frames. In nineteen sixty the company began making the Etch A Sketch, a French idea stamped and sold from this town. For more than fifty years the silver screen that shakes clean came from Bryan. The toy left. The metal shop stayed.",
    long: "",
    names: ["Ohio Art", "Henry Winzeler", "Etch A Sketch"]
  },
  {
    id: "bryan-railroad",
    name: "Bryan Railroad",
    lat: 41.4709,
    lng: -84.5426,
    radius: 400,
    short: "The Michigan Southern reached Bryan in eighteen fifty five and tied the new county seat to Toledo and Chicago. Later the Wabash and the Cincinnati, Jackson and Mackinaw added more iron. A courthouse town without a river needed tracks. The depot ground on Wilson and Edgerton streets is why the square did not stay a lonely plat in the woods.",
    long: "",
    names: ["Michigan Southern Railroad", "Wabash Railroad", "Bryan"]
  },
  {
    id: "bryan-city-band",
    name: "Bryan City Band",
    lat: 41.4742,
    lng: -84.5518,
    radius: 250,
    short: "The Bryan City Band plays the courthouse square and is one of the oldest town bands in the country. Wednesday nights in summer the bandstand still works. A fountain city kept a civic habit that most towns let die. The music is not a festival import. It is local memory with brass.",
    long: "",
    names: ["Bryan City Band", "Williams County Courthouse"]
  },
  {
    id: "wabash-cannonball-bryan",
    name: "Wabash Cannonball Trail",
    lat: 41.4900,
    lng: -84.5400,
    radius: 500,
    short: "The Wabash Cannonball Trail follows the old Wabash Railroad across Williams County. West Unity and Montpelier sit on the same line. The trains that made those villages are gone. The grade is a path. When you cross the north county you are on a freight road that kept the swamp towns alive after the wells and before the four-lane.",
    long: "",
    names: ["Wabash Cannonball Trail", "Wabash Railroad"]
  },
  {
    id: "stryker-ohio",
    name: "Stryker",
    lat: 41.5036,
    lng: -84.4166,
    radius: 450,
    short: "Stryker was platted in eighteen fifty three for the Michigan Southern and named for railroad man John Stryker. It was the first Williams County town with rails, a year before Bryan. The stone depot is on the National Register. A railroad executive's last name became a village. That is how this county was organized.",
    long: "",
    names: ["Stryker", "John Stryker", "Michigan Southern Railroad"]
  },
  {
    id: "west-unity",
    name: "West Unity",
    lat: 41.5864,
    lng: -84.4349,
    radius: 400,
    short: "West Unity sits on the Wabash line in north Williams County. The name is a hope from the eighteen thirties. The railroad and later the Cannonball Trail are why the brick main street exists. It is a farm town that faced Michigan more than it faced the Maumee. Testers headed toward Pioneer and the state line come through here.",
    long: "",
    names: ["West Unity", "Wabash Railroad"]
  },
  {
    id: "pioneer-ohio",
    name: "Pioneer",
    lat: 41.6806,
    lng: -84.5530,
    radius: 400,
    short: "Pioneer is Williams County's north door, almost on the Michigan line. The name is the whole story. People who kept going when the swamp was still wet stopped here. A small grid, a school, a border habit. Ohio ends a few fields up the road.",
    long: "",
    names: ["Pioneer"]
  },
  {
    id: "edon-ohio",
    name: "Edon",
    lat: 41.5540,
    lng: -84.7677,
    radius: 400,
    short: "Edon is a Williams County village near the Indiana line. The Wabash built a depot. The eighteen ninety three station later moved to the park. Timber and farms made the stop. Hicksville is south. Angola is west. Edon is the quiet corner where three maps meet and almost nobody slows down.",
    long: "",
    names: ["Edon", "Wabash Railroad"]
  },
  {
    id: "pulaski-ohio",
    name: "Pulaski",
    lat: 41.4987,
    lng: -84.5096,
    radius: 300,
    short: "Pulaski is a crossroads between Bryan and Stryker, named like so many Ohio hamlets for a Revolutionary hero. The Cincinnati, Jackson and Mackinaw came through in the eighteen eighties. A grain elevator and a few houses. County history happens in these unnamed-feeling miles as much as on the courthouse lawn.",
    long: "",
    names: ["Pulaski"]
  },
      {
    id: "aro-corporation",
    name: "Aro Corporation",
    lat: 41.4780,
    lng: -84.5430,
    radius: 350,
    short: "Aro Corporation made air tools and pumps in Bryan. For much of the twentieth century it was one of the plants that sat beside candy and picture frames. A courthouse town in the swamp became a machine town. When people say Bryan is not only Dum Dums, this is the other floor.",
    long: "",
    names: ["Aro Corporation", "Bryan"]
  },
  {
    id: "bard-manufacturing",
    name: "Bard Manufacturing",
    lat: 41.4695,
    lng: -84.5550,
    radius: 350,
    short: "Bard Manufacturing has made heating and cooling equipment in Bryan for more than a century. While Spangler made the smell and Ohio Art made the toy, Bard made the boxes that heat farmhouses across the Midwest. Industry here was never one company. It was a stack of shops on the same flat grid.",
    long: "",
    names: ["Bard Manufacturing"]
  },
  {
    id: "bryan-airmail",
    name: "Bryan Air Mail Field",
    lat: 41.4660,
    lng: -84.5065,
    radius: 400,
    short: "Bryan had an early airmail field on the east side. In the nineteen twenties the Post Office tried to thread night flying across the Midwest. A county seat with rails wanted a runway too. The marker is easy to miss. The idea was not. Even Fountain City tried to join the air age.",
    long: "",
    names: ["Bryan Air Mail Field"]
  },
  {
    id: "john-a-bryan",
    name: "John A. Bryan",
    lat: 41.4748,
    lng: -84.5525,
    radius: 400,
    short: "John A. Bryan was Ohio's auditor. In eighteen forty he gave land for a new Williams County seat and the town took his name. The old county business had been farther north and east. He pulled the courthouse onto this prairie. A state officer in Columbus left his last name on a swamp-county square.",
    long: "",
    names: ["John A. Bryan", "Williams County"]
  },
  {
    id: "williams-county-library",
    name: "Williams County Library",
    lat: 41.4735,
    lng: -84.5520,
    radius: 250,
    short: "The Williams County Public Library in Bryan keeps the local history room. If a family name, a well, or a factory floor is going to be proven, it is here. Montpelier has the historical society on the fairgrounds. Bryan has the paper trail on the square. Two rooms. One county.",
    long: "",
    names: ["Williams County Public Library"]
  },
  {
    id: "evans-gar-bryan",
    name: "Evans GAR Post",
    lat: 41.4755,
    lng: -84.5510,
    radius: 250,
    short: "Evans Post of the Grand Army of the Republic stood for Bryan's Civil War veterans. Williams County sent farm boys east and south. The square still holds veteran stone. Northwest Ohio's war story is not a battlefield in town. It is names on a courthouse lawn and a post that kept the memory when the men were old.",
    long: "",
    names: ["Grand Army of the Republic", "Evans Post"]
  },
  {
    id: "opdycke-park",
    name: "Opdycke Park",
    lat: 41.4520,
    lng: -84.5480,
    radius: 400,
    short: "Opdycke Park south of Bryan was cut from the old county infirmary farm and named for engineer Leonard Opdycke. Fifty acres of public ground on land that once held the poor farm. Counties used to hide that work outside town. Now it is a park. The use changed. The county ownership did not.",
    long: "",
    names: ["Opdycke Park", "Leonard Opdycke"]
  },
  {
    id: "goldie-newman-park",
    name: "Goldie Newman Park",
    lat: 41.4950,
    lng: -84.5330,
    radius: 400,
    short: "Goldie Newman gave fifty acres on State Route Fifteen as a wildlife sanctuary in nineteen seventy four. The county later added a dog park. It is not a square with a bandstand. It is a woman putting woods back on a map that had been tiled for corn.",
    long: "",
    names: ["Goldie Newman Park", "Goldie Newman"]
  },
  {
    id: "williams-native-ground",
    name: "Williams County Native Ground",
    lat: 41.4748,
    lng: -84.5525,
    radius: 700,
    short: "Before Bryan there was no town here. Ottawa, Wyandot, and other nations used the wet woods of the Black Swamp. Treaties after Fallen Timbers and later purchases opened Williams County in eighteen twenty. The wells that made Fountain City were already here. The courthouse is the new claim. The water is the old one.",
    long: "",
    names: ["Ottawa", "Wyandot", "Great Black Swamp", "Williams County"]
  },
  {
    id: "alvordton",
    name: "Alvordton",
    lat: 41.6650,
    lng: -84.4340,
    radius: 300,
    short: "Alvordton grew when the Wabash and later another road crossed north Williams County. It is a railroad birth, like Blakeslee. The trains thinned. The name stayed on the county map near Pioneer. Testers headed for Michigan roll through a town the timetable invented.",
    long: "",
    names: ["Alvordton", "Wabash Railroad"]
  },
  {
    id: "blakeslee-ohio",
    name: "Blakeslee",
    lat: 41.5242,
    lng: -84.7308,
    radius: 300,
    short: "Blakeslee is a Wabash Railroad village west of Montpelier, born about eighteen eighty one when the line needed a stop. Edon is the next blink. Hicksville is south. A few streets and a crossing. That is a swamp-county railroad town in full.",
    long: "",
    names: ["Blakeslee", "Wabash Railroad"]
  },
  {
    id: "kunkle-ohio",
    name: "Kunkle",
    lat: 41.6170,
    lng: -84.4950,
    radius: 250,
    short: "Kunkle is a north Williams County speck on the old Wabash. A name, a road, an elevator if you catch it. The county is full of these. They are not empty. They are what drainage and a timetable could afford.",
    long: "",
    names: ["Kunkle"]
  },
{
    id: "henry-courthouse",
    name: "Henry County Courthouse",
    lat: 41.3920,
    lng: -84.1255,
    radius: 300,
    short: "The Henry County Courthouse in Napoleon opened in eighteen eighty two. Architect David W. Gibbs designed the Second Empire tower after fire ate the last two halls, including the Dutch Row fire of eighteen seventy nine. A goddess of Justice stands on the clock. Patrick Henry got the county name. Napoleon Bonaparte got the town. The brick got the square.",
    long: "",
    names: ["Henry County Courthouse", "David W. Gibbs", "Patrick Henry"]
  },
  {
    id: "napoleon-canal",
    name: "Napoleon Canal",
    lat: 41.3905,
    lng: -84.1285,
    radius: 500,
    short: "German immigrants dug and worked the Miami and Erie Canal through Napoleon. The Maumee is the wet street. The canal was the graded one. Grain left these docks toward Toledo. When the canal died the river road and the rails kept the county seat alive. The town is a German canal town with a French emperor's name.",
    long: "",
    names: ["Miami and Erie Canal", "Napoleon", "Maumee River"]
  },
  {
    id: "napoleon-1913-flood",
    name: "Napoleon 1913 Flood",
    lat: 41.3910,
    lng: -84.1265,
    radius: 500,
    short: "The nineteen thirteen flood hit Napoleon the way it hit Defiance and Franklinton. The Maumee left the banks and walked the original streets. A river county seat learns the same lesson every generation. The courthouse stands. The low blocks remember.",
    long: "",
    names: ["Flood of 1913", "Maumee River", "Napoleon"]
  },
  {
    id: "campbell-napoleon",
    name: "Campbell Soup Napoleon",
    lat: 41.4060,
    lng: -84.1180,
    radius: 500,
    short: "Campbell Soup built a huge plant on the north side of Napoleon. Tomatoes and other crops from the drained swamp went into cans here. Henry County farms needed a floor that could take the harvest. The smell on a cook day is the modern version of the canal warehouse.",
    long: "",
    names: ["Campbell Soup", "Napoleon"]
  },
  {
    id: "henry-historical-society",
    name: "Henry County Historical Society",
    lat: 41.3945,
    lng: -84.1290,
    radius: 300,
    short: "The Henry County Historical Society keeps the Bloomfield House and a log home and school at the fairgrounds. Nathaniel Hartman's cabin and an eighteen ninety seven Lutheran school sit there. If the courthouse is the official county, this is the saved kitchen and classroom.",
    long: "",
    names: ["Henry County Historical Society", "Nathaniel Hartman"]
  },
  {
    id: "holgate-ohio",
    name: "Holgate",
    lat: 41.2489,
    lng: -84.1333,
    radius: 400,
    short: "Holgate is a south Henry County railroad village. The name also sits on a mansion street in Defiance. Here it is a farm grid with tracks. Baltimore and Ohio country. Testers running between Napoleon and the Putnam County line pass a town the timetable made.",
    long: "",
    names: ["Holgate"]
  },
  {
    id: "deshler-ohio",
    name: "Deshler",
    lat: 41.2073,
    lng: -83.8991,
    radius: 400,
    short: "Deshler grew at a railroad crossing in east Henry County. John Deshler of Columbus was tied to the land company. Towers and elevators still read as a rail town. The east county looks toward Findlay and Wood County. The west county looks toward the Maumee. Deshler is the hinge.",
    long: "",
    names: ["Deshler"]
  },
  {
    id: "liberty-center",
    name: "Liberty Center",
    lat: 41.4431,
    lng: -84.0072,
    radius: 400,
    short: "Liberty Center sits north of the Maumee in Henry County. A village on the road to Wauseon and the Fulton County line. The name is a Union-era hope. Farms, a school, a main street that never tried to be Napoleon. North county is this, not the courthouse square.",
    long: "",
    names: ["Liberty Center"]
  },
  {
    id: "hamler-ohio",
    name: "Hamler",
    lat: 41.2298,
    lng: -84.0347,
    radius: 350,
    short: "Hamler is a German farm village in south Henry County. The name is a family name on a plat. Churches and an elevator. Harvest festivals still treat it as a place, not a dot. The south county kept speaking German in the pews longer than the courthouse did.",
    long: "",
    names: ["Hamler"]
  },
  {
    id: "mcclure-ohio",
    name: "McClure",
    lat: 41.3714,
    lng: -83.9416,
    radius: 350,
    short: "McClure is an east Henry County village toward Wood County. Rail and ditch country. A small grid between Deshler and the river towns. If Napoleon is the emperor's name on the Maumee, McClure is a settler's name on the tiled prairie.",
    long: "",
    names: ["McClure"]
  },
  {
    id: "malinta-ohio",
    name: "Malinta",
    lat: 41.3223,
    lng: -84.0366,
    radius: 300,
    short: "Malinta is a crossroads south of Napoleon. The name sounds Spanish and sits on a very Ohio plat. Grain, a rail line, a few streets. Henry County is full of these service towns. They exist so the courthouse town does not have to be the only stop.",
    long: "",
    names: ["Malinta"]
  },
  {
    id: "new-bavaria",
    name: "New Bavaria",
    lat: 41.2045,
    lng: -84.1680,
    radius: 300,
    short: "New Bavaria is a German Catholic hamlet in southwest Henry County toward Putnam. The name tells the founding. A church and a cluster of houses in the old swamp timber. Defiance County is west. The language faded. The dedication in the title did not.",
    long: "",
    names: ["New Bavaria"]
  },
     {
    id: "fort-wayne-history-center",
    name: "History Center",
    lat: 41.0805,
    lng: -85.1385,
    radius: 250,
    short: "The History Center downtown is the Allen County Fort Wayne Historical Society in the old city hall. This is the indoor Kekionga. Treaties, tools, factory floors, and the fort story sit in one building. If a tester says the app missed a street, this is the room that still has the paper.",
    long: "",
    names: ["History Center", "Allen County Fort Wayne Historical Society"]
  },
  {
    id: "baker-street-station",
    name: "Baker Street Station",
    lat: 41.0728,
    lng: -85.1418,
    radius: 300,
    short: "Baker Street was Fort Wayne's Pennsylvania Railroad station. The city sat on lines to Chicago, Pittsburgh, and Cincinnati. Summit City by canal became a rail hub by timetable. The brick depot is the passenger version of the freight that built the factories. Trains made the three rivers a stop instead of a dead end.",
    long: "",
    names: ["Baker Street Station", "Pennsylvania Railroad"]
  },
  {
    id: "nickel-plate-fort-wayne",
    name: "Nickel Plate Road",
    lat: 41.0755,
    lng: -85.1280,
    radius: 400,
    short: "The Nickel Plate cut across Fort Wayne with the Wabash and the Pennsy. Engine shops and crossing towers turned neighborhoods into railroad streets. West Central and the east yards still show it. A river town that already had a canal doubled down on iron. That is why the grid feels bigger than the rivers.",
    long: "",
    names: ["Nickel Plate Road", "Wabash Railroad"]
  },
  {
    id: "ge-fort-wayne",
    name: "General Electric Fort Wayne",
    lat: 41.0835,
    lng: -85.1185,
    radius: 500,
    short: "General Electric ran a huge works on the east side. Motors, transformers, and later electronics. Magnavox and other shops made this an electric city, not only a fort city. Generations clocked in here. When people say Fort Wayne built things, they mean these floors as much as the stockade.",
    long: "",
    names: ["General Electric", "Magnavox"]
  },
  {
    id: "international-harvester-fw",
    name: "International Harvester",
    lat: 41.0640,
    lng: -85.1090,
    radius: 450,
    short: "International Harvester built trucks on the east side. Fort Wayne was a motor town as well as a wire and magnet town. The plant pulled workers from the three rivers and from the farms east toward New Haven. Industry here is not one smokestack. It is truck, pump, radio, and insurance stacked on the same map.",
    long: "",
    names: ["International Harvester"]
  },
  {
    id: "lincoln-national-fw",
    name: "Lincoln National Life",
    lat: 41.0768,
    lng: -85.1398,
    radius: 300,
    short: "Lincoln National Life made Fort Wayne an insurance city. The Lincoln Tower downtown was the tall bet. A three-rivers town sold policies the way Columbus sold Farm Bureau. Factory wages and office wages shared the same streets. The tower is that second economy in stone.",
    long: "",
    names: ["Lincoln National Life", "Lincoln Tower"]
  },
  {
    id: "foster-park",
    name: "Foster Park",
    lat: 41.0605,
    lng: -85.1555,
    radius: 450,
    short: "Foster Park follows the St. Marys on the south side. It is one of the old river parks, not a leftover lot. Picnic ground, golf, the bank. Fort Wayne used the three rivers as public land after it used them as a fort. This is the St. Marys version of that choice.",
    long: "",
    names: ["Foster Park", "St. Marys River"]
  },
  {
    id: "franke-park",
    name: "Franke Park",
    lat: 41.1085,
    lng: -85.1550,
    radius: 500,
    short: "Franke Park on the north side holds the zoo, the amphitheater, and woods along the feeder country. It is the big family park. A city that floods downtown still kept high ground for play. If Headwaters is the fork, Franke is the afternoon.",
    long: "",
    names: ["Franke Park"]
  },
  {
    id: "shoaff-park",
    name: "Shoaff Park",
    lat: 41.1450,
    lng: -85.0980,
    radius: 500,
    short: "Shoaff Park sits on the St. Joseph in the northeast. River, trails, the north side's open ground. Testers coming down from Auburn toward the city often meet this water before they meet Calhoun Street. The St. Joseph is the river Johnny Appleseed's park also uses. Same stream. Different bank.",
    long: "",
    names: ["Shoaff Park", "St. Joseph River"]
  },
  {
    id: "swinney-park",
    name: "Swinney Park",
    lat: 41.0705,
    lng: -85.1610,
    radius: 350,
    short: "Swinney Park and the old Swinney homestead sit on the west side near the St. Marys. The Swinney family was early Fort Wayne money. The park is the estate turned public. West Central's big houses and this ground are the same chapter: river-side wealth that became civic land.",
    long: "",
    names: ["Swinney Park", "Swinney Homestead"]
  },
  {
    id: "fort-wayne-floods",
    name: "Fort Wayne Floods",
    lat: 41.0850,
    lng: -85.1335,
    radius: 600,
    short: "The local legend is the rivers remembering. Nineteen thirteen, nineteen eighty two, two thousand two. Ice and rain push the St. Marys and St. Joseph into the streets around Headwaters. People still talk about the night downtown became a lake. In a confluence town the scary story is true more than once.",
    long: "",
    names: ["Headwaters Park", "Flood of 1913", "St. Marys River", "St. Joseph River"]
  },
  {
    id: "appleseed-grave-legend",
    name: "Appleseed Grave Dispute",
    lat: 41.1122,
    lng: -85.1236,
    radius: 300,
    short: "Local argument: whether the stone in Johnny Appleseed Park marks the exact bones. Archer Cemetery, the feeder bank, family memory, and later parks all claim a piece. The city picked a place and kept a festival. The legend is that the man who would not stay put still will not sit still under one marker.",
    long: "",
    names: ["Johnny Appleseed", "John Chapman", "Johnny Appleseed Park"]
  },
      {
    id: "barr-street-market",
    name: "Barr Street Market",
    lat: 41.0788,
    lng: -85.1365,
    radius: 250,
    short: "Barr Street Market is one of the oldest public market grounds in Indiana. Farmers sold here when the fort town was still a county village. The stalls are the civic version of the three rivers trade. Kekionga was a market. This block kept the habit.",
    long: "",
    names: ["Barr Street Market"]
  },
  {
    id: "west-central-fw",
    name: "West Central",
    lat: 41.0755,
    lng: -85.1485,
    radius: 450,
    short: "West Central is Fort Wayne's old mansion and brick district west of downtown. Lawyers, shop owners, and factory men built here when the rails paid. The streets still hold that scale. If Calhoun is the official city, West Central is the parlor.",
    long: "",
    names: ["West Central"]
  },
  {
    id: "lindenwood-cemetery",
    name: "Lindenwood Cemetery",
    lat: 41.0770,
    lng: -85.1755,
    radius: 400,
    short: "Lindenwood on the west side is the city's big nineteenth century cemetery. Civic names, factory names, and family plots share the hills. A three-rivers town buries its people off the flood line. The ground is a who's who without a guidebook.",
    long: "",
    names: ["Lindenwood Cemetery"]
  },
  {
    id: "lawton-park",
    name: "Lawton Park",
    lat: 41.0935,
    lng: -85.1385,
    radius: 350,
    short: "Lawton Park sits north of downtown along the old feeder country. It is named for General Henry W. Lawton, who grew up in this county and died in the Philippines. A city park with a war name. The north side used this ground when the canal feeder still mattered.",
    long: "",
    names: ["Lawton Park", "Henry W. Lawton"]
  },
  {
    id: "botanical-conservatory-fw",
    name: "Foellinger-Freimann Conservatory",
    lat: 41.0818,
    lng: -85.1412,
    radius: 250,
    short: "The Foellinger-Freimann Botanical Conservatory downtown is a glass garden on old river city ground. Foellinger and Freimann money put plants in public. It is a park that works in January. Fort Wayne's civic habit is to turn private names into rooms everyone can walk.",
    long: "",
    names: ["Foellinger-Freimann Botanical Conservatory"]
  },
  {
    id: "bass-mansion",
    name: "Bass Mansion",
    lat: 41.0875,
    lng: -85.1758,
    radius: 300,
    short: "John H. Bass built the mansion now on the University of Saint Francis campus. Bass foundries and mills were early Fort Wayne industry. The house is factory money in stone. The campus kept it. West side wealth and the river shops meet at this door.",
    long: "",
    names: ["John H. Bass", "Bass Mansion", "University of Saint Francis"]
  },
  {
    id: "hugh-mcculloch",
    name: "Hugh McCulloch",
    lat: 41.0797,
    lng: -85.1394,
    radius: 350,
    short: "Hugh McCulloch banked in Fort Wayne and became Lincoln's secretary of the treasury. A three-rivers banker helped finance the Union. The city likes the fort story. This is the money story. National war, local ledger.",
    long: "",
    names: ["Hugh McCulloch", "Abraham Lincoln"]
  },
  {
    id: "bill-blass-fw",
    name: "Bill Blass",
    lat: 41.0790,
    lng: -85.1400,
    radius: 350,
    short: "Bill Blass was born in Fort Wayne in nineteen twenty two and became an American fashion designer. The three rivers sent a name to New York the way they sent Lombard to film. Factory town, runway town. Same map.",
    long: "",
    names: ["Bill Blass"]
  },
  {
    id: "henry-rudisill",
    name: "Henry Rudisill",
    lat: 41.0780,
    lng: -85.1370,
    radius: 350,
    short: "Henry Rudisill helped pull German settlers to Fort Wayne in the eighteen thirties and forties. Mills, churches, and the German south and west sides followed. The cathedral and the brick neighborhoods are part of that bet. A Miami fork became a German-American factory city in one generation.",
    long: "",
    names: ["Henry Rudisill"]
  },
  {
    id: "harmars-defeat",
    name: "Harmar's Defeat",
    lat: 41.0865,
    lng: -85.1305,
    radius: 400,
    short: "In seventeen ninety, Josiah Harmar's army came at Kekionga and lost. Miami and allied fighters broke the campaign on this ground before Wayne built the fort. Fallen Timbers gets the textbook. This defeat is why Wayne had to come at all. The city stands on a battlefield that most drivers never hear named.",
    long: "",
    names: ["Harmar's Defeat", "Josiah Harmar", "Kekionga", "Little Turtle"]
  },
  {
    id: "samuel-hanna",
    name: "Samuel Hanna",
    lat: 41.0795,
    lng: -85.1390,
    radius: 350,
    short: "Samuel Hanna was the trader and promoter who pushed canals, land, and the county seat. Early Fort Wayne civic power often runs through his name. A fort becomes a town when someone sells lots and argues for a ditch. Hanna did that work.",
    long: "",
    names: ["Samuel Hanna", "Wabash and Erie Canal"]
  },
  {
    id: "purdue-fort-wayne",
    name: "Purdue Fort Wayne",
    lat: 41.1175,
    lng: -85.1085,
    radius: 400,
    short: "Purdue Fort Wayne sits on the northeast side near the St. Joseph. The campus is the later school story, after the fort and the shops. A factory city added a commuter campus so the next shift could be engineers and nurses. The river is still the north edge.",
    long: "",
    names: ["Purdue Fort Wayne", "St. Joseph River"]
  },
 {
    id: "auburn-founding",
    name: "Auburn Founding",
    lat: 41.3669,
    lng: -85.0589,
    radius: 600,
    short: "Wesley Park and John Badlam Howe picked this site in eighteen thirty six. Two trails crossed here, the Goshen-Defiance Road and the Coldwater Road, beside Cedar Creek and John Houlton's land. The name likely comes from a poem, Sweet Auburn. A creek and a crossroads, not a fort. That is why the town exists.",
    long: "",
    names: ["Wesley Park", "John Badlam Howe", "Cedar Creek", "Auburn"]
  },
  {
    id: "dekalb-courthouse",
    name: "DeKalb County Courthouse",
    lat: 41.3670,
    lng: -85.0586,
    radius: 250,
    short: "Auburn is the DeKalb County seat. The courthouse square is the civic middle. County business pulled shops around this block before any automobile. Home of the Classics is the later nickname. The first job of the town was paper, taxes, and a grid at the trail crossing.",
    long: "",
    names: ["DeKalb County Courthouse", "Auburn"]
  },
  {
    id: "cedar-creek-auburn",
    name: "Cedar Creek",
    lat: 41.3650,
    lng: -85.0550,
    radius: 500,
    short: "Cedar Creek cuts Auburn on its way toward the St. Joseph and Fort Wayne. The plat sat on the water on purpose. Mills and ice and a town ditch followed. Miami and other nations used this creek country as travel ground long before Park drove a stake. The cars made the fame. The creek made the site.",
    long: "",
    names: ["Cedar Creek", "St. Joseph River"]
  },
  {
    id: "eckhart-carriage",
    name: "Eckhart Carriage Company",
    lat: 41.3556,
    lng: -85.0566,
    radius: 300,
    short: "Charles Eckhart opened a carriage shop here in eighteen seventy four. His sons Frank and Morris turned it into the Auburn Automobile Company in nineteen three. The last carriage paint shop still stands on East Seventh. Buggies first. Then the cars that made the town's name. One family. Two centuries of road vehicles.",
    long: "",
    names: ["Charles Eckhart", "Eckhart Carriage Company", "Auburn Automobile Company"]
  },
  {
    id: "auburn-cord-museum",
    name: "Auburn Cord Duesenberg Museum",
    lat: 41.3548,
    lng: -85.0572,
    radius: 300,
    short: "The Art Deco showroom on South Wayne was the Auburn Automobile Company office, finished about nineteen thirty. Architect A.M. Strauss. E.L. Cord tied Auburn, Cord, and Duesenberg together here. The company died in nineteen thirty seven. The building became a National Historic Landmark museum. This is the cathedral of the town's second founding.",
    long: "",
    names: ["Auburn Cord Duesenberg Museum", "E.L. Cord", "Auburn Automobile Company", "A.M. Strauss"]
  },
  {
    id: "natmus-auburn",
    name: "National Auto and Truck Museum",
    lat: 41.3552,
    lng: -85.0558,
    radius: 250,
    short: "The National Auto and Truck Museum sits in old Auburn factory space next to the showroom. Service bays and parts buildings became a second museum. The town did not only keep the pretty lobby. It kept the shop floor. That is the honest half of Home of the Classics.",
    long: "",
    names: ["National Auto and Truck Museum", "Auburn Automobile Company"]
  },
  {
    id: "el-cord-auburn",
    name: "E.L. Cord",
    lat: 41.3548,
    lng: -85.0572,
    radius: 350,
    short: "Errett Lobban Cord took Auburn upmarket, bought Duesenberg, and launched the Cord L-twenty nine with front drive. William Wrigley money was in the mix. Style outran the Depression. Production stopped in nineteen thirty seven. The man is not buried in the mystery. The buildings are. Auburn still tells time by that collapse.",
    long: "",
    names: ["E.L. Cord", "Cord L-29", "Duesenberg", "William Wrigley Jr."]
  },
  {
    id: "eckhart-library",
    name: "Eckhart Public Library",
    lat: 41.3675,
    lng: -85.0575,
    radius: 250,
    short: "Charles Eckhart gave the town its library, opened in nineteen eleven. He also backed a YMCA and, at the end of his life, a park. Carriage money became civic rooms. The auto factory gets the tourists. The library is what the founder wanted on the square when the shift ended.",
    long: "",
    names: ["Eckhart Public Library", "Charles Eckhart"]
  },
  {
    id: "eckhart-park",
    name: "Eckhart Park",
    lat: 41.3620,
    lng: -85.0625,
    radius: 350,
    short: "Eckhart Park opened in nineteen fifteen on land Charles Eckhart gave for working families. He died before the grass was really in use. Pool and diamonds came later. The park is the third Eckhart gift after the library and the Y. A factory town got public ground on purpose.",
    long: "",
    names: ["Eckhart Park", "Charles Eckhart"]
  },
  {
    id: "auburn-railroad",
    name: "Auburn Railroad",
    lat: 41.3685,
    lng: -85.0535,
    radius: 400,
    short: "Rails reached DeKalb County and tied Auburn to Fort Wayne and the lake roads. Cars later used the same idea: get the product out. Before Cord, the timetable was the industry. Sidings on the east side fed the shops that became automobile plants. Creek, trails, then tracks, then assembly.",
    long: "",
    names: ["Auburn", "Fort Wayne"]
  },
  {
    id: "auburn-civil-war",
    name: "Auburn Civil War",
    lat: 41.3670,
    lng: -85.0586,
    radius: 300,
    short: "DeKalb County sent companies out of this square. The war for Auburn is names on stone, not a battle in the street. A new county seat in the eighteen sixties was still close to the clearing. Farm boys left from here. The courthouse lawn kept the return.",
    long: "",
    names: ["DeKalb County Courthouse"]
  },
  {
    id: "home-of-the-classics",
    name: "Home of the Classics",
    lat: 41.3600,
    lng: -85.0570,
    radius: 500,
    short: "Local legend is not a ghost. It is the nickname. Home of the Classics. Every August the cars come back and the town acts as if nineteen thirty two never ended. People still argue which body shop painted which Cord. The collapse of nineteen thirty seven is the dark verse. The festival is the bright one. Both are Auburn.",
    long: "",
    names: ["Auburn Cord Duesenberg Festival", "E.L. Cord", "Auburn"]
  },
{
    id: "gordon-buehrig",
    name: "Gordon Buehrig",
    lat: 41.3548,
    lng: -85.0572,
    radius: 300,
    short: "Gordon Buehrig drew the Auburns and Cords people still line up to see. The boat-tail speedster and the coffin-nose Cord came from that pencil. He later stood in Eckhart Park for a photo with the town that kept the cars. Design is a person. In Auburn the person has a name.",
    long: "",
    names: ["Gordon Buehrig", "Auburn Speedster", "Cord 810"]
  },
  {
    id: "wesley-park",
    name: "Wesley Park",
    lat: 41.3669,
    lng: -85.0589,
    radius: 350,
    short: "Wesley Park was the settler who staked Auburn in eighteen thirty six with Howe. He is not the car man. He is the creek-and-crossroads man. Towns that get famous for a factory forget the first name on the plat. His last name is the park word. He was the founder.",
    long: "",
    names: ["Wesley Park", "John Badlam Howe"]
  },
  {
    id: "zimmerman-mcintyre",
    name: "Early Auburn Cars",
    lat: 41.3565,
    lng: -85.0560,
    radius: 350,
    short: "Before Cord, Auburn already built cars under other badges. Zimmerman, McIntyre, IMP, Kiblinger, Black. High-wheelers and small runabouts came out of these shops. Home of the Classics was a pile of companies, not one showroom. The Art Deco lobby is the last chapter, not the first.",
    long: "",
    names: ["Zimmerman", "McIntyre", "IMP", "Kiblinger", "Auburn Automobile Company"]
  },
  {
    id: "downtown-auburn",
    name: "Downtown Auburn",
    lat: 41.3668,
    lng: -85.0588,
    radius: 350,
    short: "The downtown historic district is the courthouse town that existed before South Wayne became a museum street. Brick stores, the library block, Main and Seventh. Festival week hides this. Ordinary weeks show it. A county seat with a car shrine still has to buy stamps.",
    long: "",
    names: ["Downtown Auburn Historic District"]
  },
  {
    id: "eckhart-ymca",
    name: "Eckhart YMCA",
    lat: 41.3662,
    lng: -85.0598,
    radius: 250,
    short: "Charles and Frank Eckhart paid for a YMCA dedicated in nineteen fourteen. Library, Y, park. Three gifts from carriage money. The factory sold speed. The family bought civic rooms. That split is the town's real character.",
    long: "",
    names: ["Eckhart YMCA", "Charles Eckhart", "Frank Eckhart"]
  },
  {
    id: "auburn-mausoleum",
    name: "Auburn Community Mausoleum",
    lat: 41.3735,
    lng: -85.0520,
    radius: 250,
    short: "The Auburn Community Mausoleum is on the National Register. Early twentieth century towns built these so families could leave the wet ground. A DeKalb County cemetery with a civic building in it. The car names get the museum. Ordinary Auburn is also in stone out here.",
    long: "",
    names: ["Auburn Community Mausoleum"]
  },
  {
    id: "dekalb-name",
    name: "Baron DeKalb",
    lat: 41.3670,
    lng: -85.0586,
    radius: 300,
    short: "DeKalb County is named for Johann de Kalb, the German-born French officer who died in the Revolution. Auburn sits in a county titled for a European war name, on Miami creek ground, made famous by an American car. The stack of names is the Midwest in short.",
    long: "",
    names: ["Baron DeKalb", "DeKalb County"]
  },
  {
    id: "cedar-creek-native",
    name: "Cedar Creek Native Ground",
    lat: 41.3580,
    lng: -85.0480,
    radius: 500,
    short: "Cedar Creek was travel water. Miami and other nations moved between the St. Joseph country and the Defiance roads along this drainage. Auburn is not Kekionga. It is a later stake on a known path. The Goshen-Defiance trail and the creek are the older map under the factory.",
    long: "",
    names: ["Cedar Creek", "Miami", "Goshen-Defiance Road"]
  },
  {
    id: "auburn-1937",
    name: "Auburn Shutdown 1937",
    lat: 41.3548,
    lng: -85.0572,
    radius: 350,
    short: "In August nineteen thirty seven Auburn production ended. Men walked out of the South Wayne buildings and did not come back to build Cords. The legend in town is still that week. Some families never trusted a boom again. The museum is what they saved from the silence.",
    long: "",
    names: ["Auburn Automobile Company", "E.L. Cord"]
  },
  {
    id: "wrigley-auburn",
    name: "Wrigley and Auburn",
    lat: 41.3548,
    lng: -85.0572,
    radius: 300,
    short: "William Wrigley Junior's money helped keep Auburn alive in the Cord years. Chewing gum and front-drive cars shared a ledger. A Chicago fortune parked in a DeKalb County showroom. When the money left, the building stayed. That is the other half of the Cord story.",
    long: "",
    names: ["William Wrigley Jr.", "E.L. Cord", "Auburn Automobile Company"]
  },
  {
    id: "auburn-festival",
    name: "Auburn Cord Festival",
    lat: 41.3605,
    lng: -85.0570,
    radius: 400,
    short: "Labor Day weekend the classics roll back onto Wayne Street. The festival started because the cars had become orphans and the town would not let the story die. It is civic memory disguised as a car show. If you drive through in September you are in the one week Auburn talks to the whole country.",
    long: "",
    names: ["Auburn Cord Duesenberg Festival"]
  },
  {
    id: "garrett-indiana",
    name: "Garrett",
    lat: 41.3492,
    lng: -85.1355,
    radius: 500,
    short: "Garrett, west of Auburn, is a Baltimore and Ohio railroad town named for president John W. Garrett. Roundhouse and shops made it. Auburn made cars. Garrett made the trains that hauled what towns like this shipped. Testers between Auburn and Kendallville cross a purpose-built rail city.",
    long: "",
    names: ["Garrett", "John W. Garrett", "Baltimore and Ohio Railroad"]
  },
    
  {
    id: "huber-opera-house",
    name: "Huber Opera House",
    lat: 41.2945,
    lng: -84.7610,
    radius: 250,
    short: "The Huber Opera House on High Street began as a hotel in eighteen ninety five. George H. Huber used it as a tryout house for his bigger theaters in New York and Chicago. Hicksville had a stage before it had much else. The restored house is the town's landmark, not only the church marker on the way into town.",
    long: "",
    names: ["Huber Opera House", "George H. Huber"]
  },
  {
    id: "ap-edgerton-hicksville",
    name: "A.P. Edgerton",
    lat: 41.2935,
    lng: -84.7618,
    radius: 400,
    short: "Alfred Peck Edgerton ran the land office that sold this corner of the Black Swamp. He cut timber, backed an early toll road, and donated ground in both Hicksville and Edgerton. St. Paul's Church stands on land tied to his gifts. Two towns carry his work. This is the one where he based the business.",
    long: "",
    names: ["Alfred Peck Edgerton", "St. Paul's Episcopal Church", "Edgerton"]
  },
  {
    id: "st-pauls-hicksville",
    name: "St. Paul's Episcopal Church",
    lat: 41.2940,
    lng: -84.7636,
    radius: 200,
    short: "St. Paul's on West High was built in eighteen seventy five on ground tied to A.P. Edgerton. The historical marker beside it is the one testers already know. A Broadway name is part of the local telling. In a town this size the church marker is the landmark. That is why it has to fire when you pass it.",
    long: "",
    names: ["St. Paul's Episcopal Church", "Alfred Peck Edgerton"]
  },
  {
    id: "hicksville-railroad",
    name: "Hicksville Railroad",
    lat: 41.2925,
    lng: -84.7585,
    radius: 400,
    short: "Rails made Hicksville more than a land-office plat. Trains tied High Street to Fort Wayne, Defiance, and the lake roads. Elevators and sidings are the older industry. The Hicks company drew the map. The railroad kept people on it.",
    long: "",
    names: ["Hicksville"]
  },
  {
    id: "hicksville-high-street",
    name: "Hicksville High Street",
    lat: 41.2942,
    lng: -84.7615,
    radius: 300,
    short: "High Street is the town. Hotel, opera house, shops, church. Henry W. Hicks and the Hicks Land Company of New York plotted this edge of the swamp in eighteen fifty three. Burnell's cabin was the first claim. The street is still the plot. Everything else is later.",
    long: "",
    names: ["Henry W. Hicks", "Hicks Land Company", "Burnell"]
  },
  {
    id: "hicksville-civil-war",
    name: "Hicksville Civil War",
    lat: 41.2940,
    lng: -84.7610,
    radius: 300,
    short: "Defiance County farm towns sent men from this street. Hicksville's war sites are the names on stone and the families that came back to tile the swamp. No battle was fought on High Street. The war still shaped who owned the next forty acres.",
    long: "",
    names: ["Hicksville"]
  },
  {
    id: "hicksville-native-swamp",
    name: "Hicksville Native Ground",
    lat: 41.2930,
    lng: -84.7620,
    radius: 600,
    short: "Before the Hicks plat this was Black Swamp travel ground between the St. Joseph and the Auglaize. Miami, Ottawa, and others used the wet woods and the trails that later became the Fort Wayne and Defiance roads. The town is new. The path is not.",
    long: "",
    names: ["Great Black Swamp", "Miami", "Ottawa", "St. Joseph River"]
  },
  {
    id: "hicksville-park",
    name: "Hicksville Park",
    lat: 41.2970,
    lng: -84.7635,
    radius: 300,
    short: "The village park is the public square Edgerton-style towns kept for band nights and ball. In a small swamp-county seat the park is the civic room when the opera house is dark. Kids testers grew up on this grass.",
    long: "",
    names: ["Hicksville"]
  },
  {
    id: "indiana-line-hicksville",
    name: "Indiana Line",
    lat: 41.2930,
    lng: -84.8030,
    radius: 500,
    short: "West of Hicksville the road becomes Indiana before you have time to notice. Harlan, Woodburn, and Fort Wayne are the next chapter. The state line is a surveyor's idea through the same swamp. Testers cross it every week. The land does not change. The county name does.",
    long: "",
    names: ["Hicksville", "Harlan"]
  },
  {
    id: "hicksville-legend-swamp",
    name: "Hicksville Swamp Memory",
    lat: 41.2900,
    lng: -84.7600,
    radius: 600,
    short: "Local legend here is mud. Corduroy roads, fevers, and ditches that had to be dug before a crop paid. Old families still talk about the year the water would not fall. Hicksville exists because someone tiled the swamp and sold lots anyway. That stubbornness is the town story.",
    long: "",
    names: ["Great Black Swamp", "Hicksville"]
  },

  {
    id: "napoleon-sheriff-jail",
    name: "Henry County Jail",
    lat: 41.3922,
    lng: -84.1248,
    radius: 200,
    short: "The old sheriff's house and jail sit beside the courthouse. David W. Gibbs designed them with the hall after the Dutch Row fire. County government on this block is a set, not one tower. Napoleon kept the jail in the family of buildings testers can see from Perry Street.",
    long: "",
    names: ["Henry County Jail", "David W. Gibbs", "Henry County Courthouse"]
  },
  {
    id: "napoleon-downtown",
    name: "Napoleon Downtown",
    lat: 41.3923,
    lng: -84.1252,
    radius: 350,
    short: "Front, Perry, and Washington are the original plat. Log court, tavern court, two burned halls, then the eighteen eighty two tower. German shopkeepers filled the square after the canal. This is the county seat at walking scale. The plant and the bypass are later.",
    long: "",
    names: ["Napoleon"]
  },
  {
    id: "napoleon-german-church",
    name: "Napoleon German Churches",
    lat: 41.3935,
    lng: -84.1268,
    radius: 300,
    short: "German canal families built the Lutheran and Catholic roofs that still mark Napoleon. The town has a French emperor's name and a German Sunday. That split is the founding. Pew language lasted longer than canal boats.",
    long: "",
    names: ["Napoleon"]
  },
  {
    id: "napoleon-riverfront",
    name: "Napoleon Riverfront",
    lat: 41.3895,
    lng: -84.1288,
    radius: 400,
    short: "The Maumee at Napoleon is the park, the flood line, and the old dock. Buckeye Trail walkers use the same bank. A county seat in the Black Swamp had to face the water. The courthouse is the official face. This bank is the true one.",
    long: "",
    names: ["Maumee River", "Buckeye Trail", "Napoleon"]
  },
  {
    id: "napoleon-native-ground",
    name: "Napoleon Native Ground",
    lat: 41.3920,
    lng: -84.1300,
    radius: 600,
    short: "Miami, Shawnee, and Ottawa used the Maumee flats here. Fallen Timbers is downstream. Defiance is the forks upstream. Napoleon is a later name on the same valley. The drained fields were wet woods and hunting ground first.",
    long: "",
    names: ["Maumee River", "Miami", "Shawnee", "Ottawa"]
  },
  {
    id: "napoleon-civil-war",
    name: "Napoleon Civil War",
    lat: 41.3920,
    lng: -84.1255,
    radius: 300,
    short: "Henry County men left from this square. The war site in Napoleon is the courthouse lawn and the records that survived the eighteen seventy nine fire. No battle in town. Plenty of names. A swamp county seat sent a farm army.",
    long: "",
    names: ["Henry County Courthouse"]
  },
  {
    id: "dutch-row-fire",
    name: "Dutch Row Fire",
    lat: 41.3924,
    lng: -84.1250,
    radius: 300,
    short: "In eighteen seventy nine fire took the courthouse and more than twenty buildings on Dutch Row. The nickname was the German business street. Records were saved. The town rebuilt in brick and ordered Gibbs's tower. Local memory still treats that night as the break between wooden Napoleon and the one you see.",
    long: "",
    names: ["Dutch Row Fire", "Henry County Courthouse"]
  },
  {
    id: "patrick-henry-county",
    name: "Patrick Henry",
    lat: 41.3923,
    lng: -84.1252,
    radius: 300,
    short: "The county is named for Patrick Henry. The town is named for Napoleon Bonaparte. A Revolutionary orator and a French emperor share a swamp map. Neither man walked this square. The names tell you when the plat was drawn: after Greenville, during the canal boom, when counties borrowed glory.",
    long: "",
    names: ["Patrick Henry", "Napoleon Bonaparte", "Henry County"]
  },
  {
    id: "antwerp-founding",
    name: "Antwerp Founding",
    lat: 41.1814,
    lng: -84.7405,
    radius: 450,
    short: "W. Wilshire Riley, Horatio N. Curtis, and Samuel Rice platted Antwerp in eighteen forty one. They picked the name from a post office list so it would not duplicate another Ohio town. German and Dutch settlers were already in the township. A Belgian name on a Black Swamp grid. The canal and the Wabash Railroad made it Paulding County's biggest Civil War era town.",
    long: "",
    names: ["Antwerp", "Wabash Canal", "Wabash Railroad"]
  },
  {
    id: "antwerp-canal-rail",
    name: "Antwerp Canal and Rail",
    lat: 41.1820,
    lng: -84.7380,
    radius: 400,
    short: "The Wabash Canal and then the Wabash Railroad stacked on this same line. Boats first. Freight cars after. When the canal died, Antwerp still had tracks. That is why a village on the Indiana side of Paulding County outgrew the inland county seat for a while. Water, then iron.",
    long: "",
    names: ["Wabash Canal", "Wabash Railroad", "Antwerp"]
  },
  {
    id: "antwerp-downtown",
    name: "Antwerp Downtown",
    lat: 41.1816,
    lng: -84.7402,
    radius: 300,
    short: "Main Street is the canal-and-rail town compressed into a few brick blocks. Stores faced the traffic that used to float. The reservoir fight happened just east. The village itself is this street. Testers from Hicksville hit it before Paulding.",
    long: "",
    names: ["Antwerp"]
  },
  {
    id: "antwerp-native-ground",
    name: "Antwerp Native Ground",
    lat: 41.1800,
    lng: -84.7420,
    radius: 600,
    short: "This was Ottawa and other nations' swamp and river margin before the canal cut came through. The Maumee is north. The Auglaize system is east. Antwerp sits on drained travel ground, not on a famous battlefield. The town is the ditch and the timetable. The older map is wet woods.",
    long: "",
    names: ["Ottawa", "Great Black Swamp", "Wabash Canal"]
  },
  {
    id: "antwerp-civil-war",
    name: "Antwerp Civil War",
    lat: 41.1814,
    lng: -84.7405,
    radius: 300,
    short: "In the eighteen sixties Antwerp was the county's busy place. Canal and rail moved men and grain. The war site is the depot town, not a fort. Families here shipped and enlisted from a street that was briefly bigger than Paulding.",
    long: "",
    names: ["Antwerp"]
  },
  {
    id: "antwerp-park",
    name: "Antwerp Park",
    lat: 41.1840,
    lng: -84.7415,
    radius: 300,
    short: "The village park is the civic square a canal town keeps after the boats are gone. Ball, band, and reunion ground. Six Mile Reservoir was the unwanted water. This grass is the wanted waterless version.",
    long: "",
    names: ["Antwerp"]
  },
  {
    id: "no-compromise",
    name: "No Compromise",
    lat: 41.1780,
    lng: -84.7200,
    radius: 400,
    short: "The banner said no compromise. About two hundred men wrecked the Six Mile Reservoir dike and locks on April twenty fifth, eighteen eighty seven. They called the pond a fever. The state had kept the unused canal water. Local legend here is not a ghost. It is neighbors deciding the ditch had to die.",
    long: "",
    names: ["Six Mile Reservoir", "Reservoir War", "Antwerp"]
  },
{
    id: "paulding-courthouse",
    name: "Paulding County Courthouse",
    lat: 41.1381,
    lng: -84.5805,
    radius: 250,
    short: "Paulding became the county seat in eighteen fifty one after New Rochester and Charloe. The courthouse square is why this inland grid beat the river towns. John Paulding, who helped take Major Andre, gave the county its name. The building on this block is the official swamp-county middle.",
    long: "",
    names: ["Paulding County Courthouse", "John Paulding"]
  },
  {
    id: "paulding-carnegie",
    name: "Paulding Carnegie Library",
    lat: 41.1375,
    lng: -84.5815,
    radius: 200,
    short: "Paulding's Carnegie library was built to serve the whole county, not only the village. Andrew Carnegie also helped put an organ in the Methodist church. A small seat in the last of the Black Swamp got books before it got a lot of brick. That bet still shows.",
    long: "",
    names: ["Paulding Carnegie Library", "Andrew Carnegie"]
  },
  {
    id: "paulding-railroad",
    name: "Paulding Railroad",
    lat: 41.1360,
    lng: -84.5780,
    radius: 400,
    short: "The Nickel Plate and other eighteen eighties roads pulled Paulding up after the canals faded. Payne and Latty are the same timetable. Antwerp had the canal first. Paulding had the later rails and the courthouse. That is how the seat stuck in the middle of the county.",
    long: "",
    names: ["Nickel Plate Road", "Paulding"]
  },
  {
    id: "charloe",
    name: "Charloe",
    lat: 41.1270,
    lng: -84.4270,
    radius: 350,
    short: "Charloe on the Auglaize was an early county seat. The name is an Ottawa leader. Before that the site was tied to older towns on the river. Government moved west to Paulding in eighteen fifty one so the courthouse would sit in the center. The river town lost the paper. It kept the older name.",
    long: "",
    names: ["Charloe", "Ottawa", "Auglaize River"]
  },
  {
    id: "paulding-native-ground",
    name: "Paulding Native Ground",
    lat: 41.1380,
    lng: -84.5800,
    radius: 700,
    short: "Paulding County was Ottawa country and then treaty land after Greenville. Seats first hugged the Maumee and Auglaize. The inland grid is the drained version. Ditches, not a confluence, made this town possible. The swamp had to die for the square to live.",
    long: "",
    names: ["Ottawa", "Great Black Swamp", "Treaty of Greenville"]
  },
  {
    id: "paulding-civil-war",
    name: "Paulding Civil War",
    lat: 41.1381,
    lng: -84.5805,
    radius: 300,
    short: "The county that had been Ohio's smallest in eighteen forty still sent companies out of this square. Antwerp was the busy port. Paulding was the roll book. The war site is the lawn and the names, same as Hicksville and Napoleon.",
    long: "",
    names: ["Paulding"]
  },
  {
    id: "paulding-park",
    name: "Paulding Park",
    lat: 41.1400,
    lng: -84.5820,
    radius: 300,
    short: "The square and the village park are the public ground a courthouse town keeps. Band nights, veterans, Friday ball. In a county built by drainage, grass in town is a finished ditch.",
    long: "",
    names: ["Paulding"]
  },
  {
    id: "junction-ohio",
    name: "Junction",
    lat: 41.2050,
    lng: -84.4580,
    radius: 350,
    short: "Junction grew where the Wabash Canal met the Miami and Erie. For a moment people thought it might rival Fort Wayne. The canals died. The name stayed on a Paulding County map. Two ditches crossed here. That was the whole city plan.",
    long: "",
    names: ["Junction", "Wabash Canal", "Miami and Erie Canal"]
  },
  {
    id: "latty-ohio",
    name: "Latty",
    lat: 41.0870,
    lng: -84.5840,
    radius: 300,
    short: "Latty is a railroad clearing south of Paulding on the way to Van Wert. In the eighteen eighties it was little more than a stop in the woods. It still reads that way. County history is these sidings as much as the square.",
    long: "",
    names: ["Latty"]
  },
  {
    id: "van-wert-courthouse",
    name: "Van Wert County Courthouse",
    lat: 40.8700,
    lng: -84.5819,
    radius: 250,
    short: "The Van Wert County Courthouse opened in eighteen seventy six on Main Street. Second Empire brick, a heavy clock, stained glass. The county is named for Isaac Van Wart, who helped capture Major Andre, same story as Paulding. Timber first, then farms. This tower is the seat those farms paid for.",
    long: "",
    names: ["Van Wert County Courthouse", "Isaac Van Wart"]
  },
  {
    id: "brumback-library",
    name: "Brumback Library",
    lat: 40.8701,
    lng: -84.5850,
    radius: 250,
    short: "Brumback Library opened in nineteen oh one as the first tax-supported county library in the United States. John Sanford Brumback's family finished what he asked. Gothic and Romanesque, tile roof, turrets. A small county seat put books on the whole map, not behind a subscription desk.",
    long: "",
    names: ["Brumback Library", "John Sanford Brumback"]
  },
  {
    id: "marsh-foundation",
    name: "Marsh Foundation",
    lat: 40.8715,
    lng: -84.5647,
    radius: 350,
    short: "George H. Marsh left his Lincoln Highway homestead as a foundation school for children who needed a home. The campus opened in the nineteen twenties. Factory and farm money turned into cottages and a school. Van Wert's other civic bet besides the library.",
    long: "",
    names: ["George H. Marsh", "Marsh Foundation"]
  },
  {
    id: "lincoln-highway-van-wert",
    name: "Lincoln Highway",
    lat: 40.8696,
    lng: -84.5811,
    radius: 400,
    short: "The Lincoln Highway runs Main Street. Before that, rails hauled timber out of the last woods. Van Wert sat on the road west across the drained swamp. National pavement replaced the local log. Testers on this street are on the old coast-to-coast line.",
    long: "",
    names: ["Lincoln Highway", "Van Wert"]
  },
  {
    id: "peony-festival",
    name: "Peony Festival",
    lat: 40.8698,
    lng: -84.5820,
    radius: 400,
    short: "Van Wert called itself the Peony Capital. The festival started in nineteen thirty two after yards filled with the flowers. Local legend is a town that blooms on purpose. Not a ghost story. A garden story people still plan trips around.",
    long: "",
    names: ["Peony Festival", "Van Wert"]
  },
  {
    id: "john-lambert",
    name: "John Lambert",
    lat: 40.9164,
    lng: -84.7074,
    radius: 400,
    short: "In eighteen ninety one John Lambert of Ohio City, west of Van Wert, built an early gasoline buggy. The county likes to claim a first car. Auburn became the classic-car town. This county had a man in a shed first. Ohio City still sits on that road.",
    long: "",
    names: ["John Lambert", "Ohio City"]
  },
  {
    id: "van-wert-native-ground",
    name: "Van Wert Native Ground",
    lat: 40.8695,
    lng: -84.5841,
    radius: 700,
    short: "Before the timber cut this was Black Swamp and prairie margin used by Miami and other nations. Treaties opened the county. Ditches made farms. The courthouse stands on land that had to be dried. Same story as Paulding, with a library instead of a canal war.",
    long: "",
    names: ["Great Black Swamp", "Miami"]
  },
  {
    id: "van-wert-civil-war",
    name: "Van Wert Civil War",
    lat: 40.8700,
    lng: -84.5819,
    radius: 300,
    short: "Companies left this square for the Union. The county's war is the courthouse lawn and the names that came back to stump farms. Nineteen thirteen later flooded the same streets. Two hard years in local memory: the war and the water.",
    long: "",
    names: ["Van Wert County Courthouse", "Flood of 1913"]
  },
  {
    id: "van-wert-bandstand",
    name: "Van Wert Bandstand",
    lat: 40.8760,
    lng: -84.5828,
    radius: 250,
    short: "The old bandstand now sits with the county historical museum on Washington Street. Civic music on public ground. Bryan kept a living band. Van Wert kept the pavilion. Same northwest Ohio habit.",
    long: "",
    names: ["Van Wert Bandstand", "Van Wert County Historical Museum"]
  },
 {
    id: "fulton-courthouse",
    name: "Fulton County Courthouse",
    lat: 41.5492,
    lng: -84.1416,
    radius: 250,
    short: "The Fulton County Courthouse in Wauseon opened in eighteen seventy two. C.C. Miller designed the Italianate tower after the county seat moved here from Ottokee. The county is named for Robert Fulton and the steamboat. The town is named for an Ottawa leader. Rail made this square the middle.",
    long: "",
    names: ["Fulton County Courthouse", "C.C. Miller", "Robert Fulton"]
  },
  {
    id: "ottokee",
    name: "Ottokee",
    lat: 41.5980,
    lng: -84.1410,
    radius: 350,
    short: "Ottokee was Fulton County's first seat, a planned center in the drained prairie. The courthouse there burned in eighteen sixty four. When the Lake Shore railroad picked Wauseon, voters moved the county in eighteen sixty nine. Ottokee kept a name and lost the paper. A rail stop beat a surveyor's center.",
    long: "",
    names: ["Ottokee", "Wauseon"]
  },
  {
    id: "wauseon-depot",
    name: "Wauseon Depot",
    lat: 41.5498,
    lng: -84.1390,
    radius: 250,
    short: "The eighteen ninety six Lake Shore and Michigan Southern depot on Depot Street is brick in the New York Central style. Passenger trains quit in nineteen fifty seven. The building is a museum now. Eight railroads once crossed Fulton County. This station is why the courthouse left Ottokee.",
    long: "",
    names: ["Wauseon Depot", "Lake Shore and Michigan Southern"]
  },
  {
    id: "wauseon-downtown",
    name: "Wauseon Downtown",
    lat: 41.5492,
    lng: -84.1416,
    radius: 350,
    short: "Fulton Street and the square are the railroad county seat packed into brick. Shops faced the depot traffic. The prairie towns north of the Maumee did not get a canal story. They got a timetable. This block is that story at walking speed.",
    long: "",
    names: ["Wauseon"]
  },
  {
    id: "wauseon-chief",
    name: "Chief Wauseon",
    lat: 41.5492,
    lng: -84.1416,
    radius: 400,
    short: "The town takes its name from Wauseon, an Ottawa leader. The county took Robert Fulton. Native name on the plat, inventor name on the court. After removal and drainage, this was the label that remained. The man is the older claim. The tracks are the newer one.",
    long: "",
    names: ["Wauseon", "Ottawa"]
  },
  {
    id: "wauseon-native-ground",
    name: "Wauseon Native Ground",
    lat: 41.5500,
    lng: -84.1450,
    radius: 700,
    short: "Fulton County is the north edge of the old Black Swamp and the wet prairie toward Michigan. Ottawa and other nations used this ground before the tiles. The name on the water tower is the admission. The fields are the rewrite.",
    long: "",
    names: ["Ottawa", "Great Black Swamp"]
  },
  {
    id: "wauseon-civil-war",
    name: "Wauseon Civil War",
    lat: 41.5492,
    lng: -84.1416,
    radius: 300,
    short: "The county was brand new when the war started. Men still left. The seat was still arguing Ottokee versus the railroad town. Wauseon's war memory sits on a square that did not yet hold the court when the first companies formed.",
    long: "",
    names: ["Wauseon", "Ottokee"]
  },
  {
    id: "wauseon-park",
    name: "Wauseon Park",
    lat: 41.5515,
    lng: -84.1430,
    radius: 300,
    short: "The town park and square are the public ground a prairie county seat keeps when there is no river fork to claim. Ball, band, and the courthouse lawn. North of Napoleon the civic land is flat and chosen.",
    long: "",
    names: ["Wauseon"]
  },
     {
    id: "archbold-founding-rail",
    name: "Archbold Railroad",
    lat: 41.5183,
    lng: -84.3056,
    radius: 400,
    short: "Archbold started in eighteen fifty five when the railroad reached German Township. The name is likely a railroad man, John Archbald, or a mash of two officials. A post office the same year. This is a timetable village in the last of the swamp, not a river seat.",
    long: "",
    names: ["Archbold", "John Archbald"]
  },
  {
    id: "sauder-village",
    name: "Sauder Village",
    lat: 41.5265,
    lng: -84.2860,
    radius: 400,
    short: "Sauder Village is the outdoor museum Erie J. Sauder and the family built so the farm and shop life of this German township would not vanish. Moved houses, crafts, the woods at the edge. If the factory made flat-pack furniture famous, the village made the county's memory walkable.",
    long: "",
    names: ["Sauder Village", "Erie J. Sauder"]
  },
  {
    id: "sauder-woodworking",
    name: "Sauder Woodworking",
    lat: 41.5100,
    lng: -84.2936,
    radius: 400,
    short: "Erie J. Sauder invented furniture that shipped in a box and assembled at home. The plants still sit on the Archbold edge. A railroad town in German Township turned wood into a national product. Knock-down tables are this county's Etch A Sketch.",
    long: "",
    names: ["Erie J. Sauder", "Sauder Woodworking"]
  },
  {
    id: "goll-woods",
    name: "Goll Woods",
    lat: 41.5520,
    lng: -84.3600,
    radius: 450,
    short: "Goll Woods west of Archbold is leftover Black Swamp forest. Beech and oak that were not cut. The Goll family held the tract. It is now a state nature preserve. When testers want to see what this county was before tile, this is the room that survived.",
    long: "",
    names: ["Goll Woods", "Great Black Swamp"]
  },
  {
    id: "archbold-german-township",
    name: "German Township",
    lat: 41.5183,
    lng: -84.3056,
    radius: 500,
    short: "Archbold sits in German Township. Mennonite and other German families drained and farmed this edge of Fulton County. Churches and shops still read that founding. Sauder is the famous shop. The township name is the older fact.",
    long: "",
    names: ["German Township", "Archbold"]
  },
  {
    id: "northwest-state",
    name: "Northwest State",
    lat: 41.5330,
    lng: -84.3180,
    radius: 350,
    short: "Northwest State Community College sits at Archbold. A furniture town added a campus so the next shift could be nurses and trades. Civic habit in this county is practical: library, shop, school.",
    long: "",
    names: ["Northwest State Community College"]
  },
  {
    id: "sam-hornish",
    name: "Sam Hornish Jr.",
    lat: 41.5183,
    lng: -84.3056,
    radius: 400,
    short: "Sam Hornish Junior grew up in Archbold and won the Indianapolis Five Hundred in two thousand six. A village known for tables also produced a driver. Small-town speed is not only Auburn's museum. Sometimes it is a kid from German Township.",
    long: "",
    names: ["Sam Hornish Jr."]
  },
  {
    id: "archbold-civil-war",
    name: "Archbold Civil War",
    lat: 41.5183,
    lng: -84.3056,
    radius: 300,
    short: "German Township was still new rail country when the war came. Men left from a village that barely had a name. The local war site is the cemetery and the church yards, not a square with a tower.",
    long: "",
    names: ["Archbold"]
  },
  {
    id: "archbold-park",
    name: "Archbold Park",
    lat: 41.5210,
    lng: -84.3075,
    radius: 300,
    short: "The village parks are the public ground a factory-farm town keeps. Sauder Village is the museum version. This grass is the Tuesday version.",
    long: "",
    names: ["Archbold"]
  },
      {
    id: "montpelier-depot-town",
    name: "Montpelier Rails",
    lat: 41.5845,
    lng: -84.6055,
    radius: 450,
    short: "Montpelier is a Williams County railroad town. The Lake Shore and the Wabash made shops and a downtown where a farm crossing had been. The name is Vermont's capital borrowed for a northwest Ohio grid. When the trains slowed, the village stayed. The tracks are still the reason the brick exists.",
    long: "",
    names: ["Montpelier", "Wabash Railroad", "Lake Shore and Michigan Southern"]
  },
  {
    id: "williams-historical-society",
    name: "Williams County Historical Society",
    lat: 41.5890,
    lng: -84.5980,
    radius: 300,
    short: "The Williams County Historical Society sits on the fairgrounds in Montpelier. Bryan has the library history room. Montpelier has the county attic. Tools, farm gear, and railroad memory from the north county live here, not on the courthouse square.",
    long: "",
    names: ["Williams County Historical Society"]
  },
  {
    id: "montpelier-downtown",
    name: "Montpelier Downtown",
    lat: 41.5847,
    lng: -84.6052,
    radius: 300,
    short: "Main Street is a shop row built for train crews and farm Saturday. No river fork. No canal lock. A timetable and a name from New England. That is the whole plat.",
    long: "",
    names: ["Montpelier"]
  },
  {
    id: "wabash-cannonball-montpelier",
    name: "Cannonball at Montpelier",
    lat: 41.5860,
    lng: -84.6000,
    radius: 400,
    short: "The Wabash Cannonball Trail follows the old Wabash through this town. West Unity and Blakeslee sit on the same grade. Freight became a path. Testers driving the north county are paralleling a line that once set the clock.",
    long: "",
    names: ["Wabash Cannonball Trail", "Wabash Railroad"]
  },
  {
    id: "george-bible-park",
    name: "George Bible Park",
    lat: 41.5700,
    lng: -84.5750,
    radius: 350,
    short: "George Bible Park east of Montpelier sits on ground tied to an early settler of that name. County park, not a village square. Williams County's public land is often a farm that got kept.",
    long: "",
    names: ["George Bible Park", "George Bible"]
  },
  {
    id: "montpelier-native-ground",
    name: "Montpelier Native Ground",
    lat: 41.5845,
    lng: -84.6055,
    radius: 600,
    short: "North Williams County is the wet prairie toward Michigan. Ottawa and other nations used it before tile and rail. Montpelier is a later name dropped on that ground. The swamp memory here is the same as Bryan and Pioneer, with more boxcars in it.",
    long: "",
    names: ["Ottawa", "Great Black Swamp"]
  },
  {
    id: "montpelier-civil-war",
    name: "Montpelier Civil War",
    lat: 41.5845,
    lng: -84.6055,
    radius: 300,
    short: "The village was still forming when the war started. Men left from farms that would later face a depot. The local war site is stone and family names, not a fort. North county sent the same farm army as Bryan.",
    long: "",
    names: ["Montpelier"]
  },
  {
    id: "montpelier-legend-trains",
    name: "Montpelier Train Memory",
    lat: 41.5848,
    lng: -84.6040,
    radius: 400,
    short: "Local legend is the night the yards never slept. Old heads still time stories by the Wabash and the Lake Shore. When the trains thinned, the town felt the quiet as a death. The trail is what they kept of the noise.",
    long: "",
    names: ["Wabash Railroad", "Montpelier"]
  },
 {
    id: "edgerton-st-joseph",
    name: "Edgerton St. Joseph River",
    lat: 41.4494,
    lng: -84.7469,
    radius: 400,
    short: "Edgerton sits on the St. Joseph at Ohio's northwest corner. The river is the older road. The plat and A.P. Edgerton's square are the newer one. Testers between Hicksville and Michigan are following water that already had a name.",
    long: "",
    names: ["Edgerton", "St. Joseph River", "Alfred Peck Edgerton"]
  },
  {
    id: "stryker-depot",
    name: "Stryker Depot",
    lat: 41.5028,
    lng: -84.4168,
    radius: 250,
    short: "Stryker's stone depot is on the National Register. Police now use it. First rails in Williams County stopped here in eighteen fifty four, a year before Bryan. The building is the proof the timetable came first.",
    long: "",
    names: ["Stryker", "Michigan Southern Railroad"]
  },
  {
    id: "west-unity-trail",
    name: "West Unity Trailhead",
    lat: 41.5864,
    lng: -84.4349,
    radius: 350,
    short: "West Unity keeps a trailhead on the Wabash Cannonball. The village was a Wabash stop. The path is what is left of the freight. North county towns live on this grade.",
    long: "",
    names: ["West Unity", "Wabash Cannonball Trail"]
  },
  {
    id: "pioneer-line",
    name: "Pioneer State Line",
    lat: 41.6806,
    lng: -84.5530,
    radius: 400,
    short: "Pioneer is the last Ohio grid before Michigan. The name is the legend. People who would not turn around stopped here when the prairie was still wet.",
    long: "",
    names: ["Pioneer"]
  },
  {
    id: "edon-depot",
    name: "Edon Depot",
    lat: 41.5623,
    lng: -84.7721,
    radius: 250,
    short: "Edon's eighteen ninety three Wabash station was moved to the park. The tracks made the village. The depot in the grass is the leftover timetable.",
    long: "",
    names: ["Edon", "Wabash Railroad"]
  },
  {
    id: "payne-oil",
    name: "Payne Oil",
    lat: 41.0773,
    lng: -84.7272,
    radius: 350,
    short: "Payne had the Nickel Plate and later oil and gas in the same fields. A border village between Hicksville country and Van Wert country. Tracks first. Derricks after.",
    long: "",
    names: ["Payne", "Nickel Plate Road"]
  },
  {
    id: "sherwood-grid",
    name: "Sherwood Grid",
    lat: 41.2906,
    lng: -84.5533,
    radius: 300,
    short: "Sherwood is the farm grid between Hicksville and Defiance. Elevator, tracks, a few streets. Testers roll it every week. That is the point of the pin.",
    long: "",
    names: ["Sherwood"]
  },
  {
    id: "ney-marshal",
    name: "Ney",
    lat: 41.3806,
    lng: -84.5227,
    radius: 300,
    short: "Ney is named, by local telling, for Napoleon's marshal. A European war name on a Defiance County crossroads. Elevator and a school that consolidated away.",
    long: "",
    names: ["Ney"]
  },
  {
    id: "oakwood-woods",
    name: "Oakwood Woods",
    lat: 41.0953,
    lng: -84.3786,
    radius: 350,
    short: "Oakwood in south Defiance County kept more timber longer. Rail and ditches made a village in the oaks. South county drained later than the Maumee bank.",
    long: "",
    names: ["Oakwood"]
  },
  {
    id: "florida-river-road",
    name: "Florida River Road",
    lat: 41.3450,
    lng: -84.2027,
    radius: 300,
    short: "Florida, Ohio, is a Maumee river-road village with a joke for a name. Canal and flats, not oranges. A post office on the way between Defiance and Napoleon.",
    long: "",
    names: ["Florida Ohio", "Maumee River"]
  },
  {
    id: "brunersburg-mill",
    name: "Brunersburg Mill",
    lat: 41.3185,
    lng: -84.3920,
    radius: 300,
    short: "Brunersburg used the Tiffin River for a mill before Defiance took all the ink. Dam, a few streets, older than it looks.",
    long: "",
    names: ["Brunersburg", "Tiffin River"]
  },
  {
    id: "evansport-mill",
    name: "Evansport Mill",
    lat: 41.3887,
    lng: -84.3963,
    radius: 300,
    short: "Evansport is a Tiffin River mill village with two cemeteries. Farm town between Defiance and Stryker country. River, mill, grid.",
    long: "",
    names: ["Evansport", "Tiffin River"]
  },
      {
    id: "pulaski-rail",
    name: "Pulaski Rail",
    lat: 41.4987,
    lng: -84.5096,
    radius: 300,
    short: "Pulaski sits between Bryan and Stryker on the old Cincinnati, Jackson and Mackinaw. A Revolutionary name on a grain-elevator stop. Williams County history happens on these sidings.",
    long: "",
    names: ["Pulaski"]
  },
  {
    id: "alvordton-wabash",
    name: "Alvordton Wabash",
    lat: 41.6650,
    lng: -84.4340,
    radius: 300,
    short: "Alvordton was born when the Wabash crossed north Williams County. Near Pioneer. A timetable invented the town. The trains thinned. The name stayed.",
    long: "",
    names: ["Alvordton", "Wabash Railroad"]
  },
  {
    id: "blakeslee-stop",
    name: "Blakeslee Stop",
    lat: 41.5242,
    lng: -84.7308,
    radius: 300,
    short: "Blakeslee is an eighteen eighty one Wabash stop west of Montpelier. Edon is the next blink. A few streets and a crossing.",
    long: "",
    names: ["Blakeslee", "Wabash Railroad"]
  },
  {
    id: "kunkle-elevator",
    name: "Kunkle",
    lat: 41.6170,
    lng: -84.4950,
    radius: 250,
    short: "Kunkle is a north Williams County speck on the old Wabash. A name, a road, an elevator. Drainage and a timetable could afford that much.",
    long: "",
    names: ["Kunkle"]
  },
  {
    id: "jewell-siding",
    name: "Jewell Siding",
    lat: 41.3267,
    lng: -84.2861,
    radius: 300,
    short: "Jewell is a siding and elevator east of Defiance toward Independence Dam. The dam town got the park. Jewell kept the grain.",
    long: "",
    names: ["Jewell"]
  },
  {
    id: "holgate-tracks",
    name: "Holgate Tracks",
    lat: 41.2489,
    lng: -84.1333,
    radius: 350,
    short: "Holgate is a south Henry County railroad village. Same family name as Defiance's mansion street. Here it is tracks and farms, not Queen Anne houses.",
    long: "",
    names: ["Holgate"]
  },
  {
    id: "deshler-crossing",
    name: "Deshler Crossing",
    lat: 41.2073,
    lng: -83.8991,
    radius: 350,
    short: "Deshler grew at a railroad crossing. John Deshler of Columbus was tied to the land company. East Henry County hinge toward Findlay country.",
    long: "",
    names: ["Deshler"]
  },
  {
    id: "liberty-center-north",
    name: "Liberty Center North",
    lat: 41.4431,
    lng: -84.0072,
    radius: 350,
    short: "Liberty Center is the Union-era name on the road from Napoleon toward Wauseon. North Henry County. School and main street, not the courthouse.",
    long: "",
    names: ["Liberty Center"]
  },
  {
    id: "hamler-german",
    name: "Hamler German",
    lat: 41.2298,
    lng: -84.0347,
    radius: 300,
    short: "Hamler is a German farm village in south Henry County. Church and elevator. The pews kept the language longer than the courthouse did.",
    long: "",
    names: ["Hamler"]
  },
  {
    id: "mcclure-prairie",
    name: "McClure Prairie",
    lat: 41.3714,
    lng: -83.9416,
    radius: 300,
    short: "McClure is tiled prairie toward Wood County. A settler's name on an east Henry County grid. Napoleon is the emperor. This is the farm.",
    long: "",
    names: ["McClure"]
  },
  {
    id: "malinta-crossroads",
    name: "Malinta Crossroads",
    lat: 41.3223,
    lng: -84.0366,
    radius: 300,
    short: "Malinta is a crossroads south of Napoleon. Grain, a rail line, a few streets. A service town so the county seat is not the only stop.",
    long: "",
    names: ["Malinta"]
  },
  {
    id: "new-bavaria-church",
    name: "New Bavaria Church",
    lat: 41.2045,
    lng: -84.1680,
    radius: 300,
    short: "New Bavaria is a German Catholic hamlet in southwest Henry County. The name is the founding. Church and houses in the old swamp timber.",
    long: "",
    names: ["New Bavaria"]
  },
  {
    id: "charloe-auglaize",
    name: "Charloe Auglaize",
    lat: 41.1270,
    lng: -84.4270,
    radius: 350,
    short: "Charloe on the Auglaize was a county seat before Paulding. Ottawa name on a river bend. Government moved inland. The water kept the older claim.",
    long: "",
    names: ["Charloe", "Ottawa", "Auglaize River"]
  },
  {
    id: "junction-canals",
    name: "Junction Canals",
    lat: 41.2050,
    lng: -84.4580,
    radius: 350,
    short: "Junction is where the Wabash Canal met the Miami and Erie. People thought it might rival Fort Wayne. Two ditches. That was the city plan.",
    long: "",
    names: ["Junction", "Wabash Canal", "Miami and Erie Canal"]
  },
  {
    id: "latty-clearing",
    name: "Latty Clearing",
    lat: 41.0870,
    lng: -84.5840,
    radius: 300,
    short: "Latty was a railroad clearing in the woods south of Paulding. Still reads that way on the road to Van Wert.",
    long: "",
    names: ["Latty"]
  },
  {
    id: "ottokee-center",
    name: "Ottokee Center",
    lat: 41.5980,
    lng: -84.1410,
    radius: 350,
    short: "Ottokee was laid out as Fulton County's center. The railroad chose Wauseon instead. First seat, then the infirmary. A surveyor's town that lost the vote.",
    long: "",
    names: ["Ottokee", "Wauseon"]
  },
  {
    id: "ohio-city-lambert",
    name: "Ohio City",
    lat: 40.7706,
    lng: -84.6155,
    radius: 350,
    short: "Ohio City, west of Van Wert, is where John Lambert built an early gasoline buggy in eighteen ninety one. A shed town with a first-car claim. Auburn kept the museum. This village kept the story.",
    long: "",
    names: ["Ohio City", "John Lambert"]
  },
  {
    id: "garrett-roundhouse",
    name: "Garrett Roundhouse",
    lat: 41.3492,
    lng: -85.1355,
    radius: 400,
    short: "Garrett was built around Baltimore and Ohio shops and a roundhouse. Named for railroad president John W. Garrett. Auburn made cars. Garrett made the trains. Testers between Auburn and Kendallville cross a purpose-built rail city.",
    long: "",
    names: ["Garrett", "John W. Garrett", "Baltimore and Ohio Railroad"]
  },
 {
    id: "approach-hicksville",
    layer: "approach",
    name: "Approaching Hicksville",
    lat: 41.2958,
    lng: -84.7592,
    radius: 7000,
    short: "You're coming up on Hicksville, Ohio. Two things made this town. First, the Hicks company plotted it on the edge of the Great Black Swamp, and they had to drain the mud before a farm would pay. Second, High Street still has the Huber Opera House, a hotel stage George Huber used to try out shows before New York. If you drop into town, I'll tell you the church, the railroad, and the rest.",
    long: "",
    names: ["Hicksville", "Huber Opera House", "Great Black Swamp"]
  },
  {
    id: "approach-fort-wayne",
    layer: "approach",
    name: "Approaching Fort Wayne",
    lat: 41.0794,
    lng: -85.1394,
    radius: 10000,
    short: "You're coming up on Fort Wayne. Two things to know from the highway. This city sits on Kekionga, the old Miami capital, where the St. Marys and the St. Joseph join to make the Maumee. And Johnny Appleseed walked these rivers and is remembered on the St. Joseph north of downtown. If you get off, I'll tell you Farnsworth and the television years, the fort, and the rest.",
    long: "",
    names: ["Fort Wayne", "Kekionga", "Johnny Appleseed", "Maumee River"]
  },
  {
    id: "approach-auburn",
    layer: "approach",
    name: "Approaching Auburn",
    lat: 41.3669,
    lng: -85.0589,
    radius: 8000,
    short: "You're coming up on Auburn, Indiana. Two things. This is Home of the Classics — Auburn, Cord, and Duesenberg came off these streets, and the Art Deco showroom is still on South Wayne. And it started as a carriage shop. Charles Eckhart's family went from buggies to those cars. If you roll downtown, I'll tell you the shutdown of nineteen thirty seven and the rest.",
    long: "",
    names: ["Auburn", "Auburn Cord Duesenberg", "Charles Eckhart"]
  },
  {
    id: "approach-defiance",
    layer: "approach",
    name: "Approaching Defiance",
    lat: 41.2845,
    lng: -84.3627,
    radius: 8000,
    short: "You're coming up on Defiance, Ohio. Two things. Anthony Wayne built Fort Defiance in seventeen ninety four at the meeting of the Maumee and the Auglaize, on ground that had been the Glaize, a Native council place. And the canals later turned that fork into a county seat. If you come into town, I'll tell you the fort ground, the flood, and the rest.",
    long: "",
    names: ["Defiance", "Fort Defiance", "Anthony Wayne", "The Glaize", "Maumee River", "Auglaize River"]
  },
  {
    id: "approach-bryan",
    layer: "approach",
    name: "Approaching Bryan",
    lat: 41.4748,
    lng: -84.5525,
    radius: 8000,
    short: "You're coming up on Bryan, Ohio. Two things. This is Fountain City — artesian wells once ran in the streets — and it is the home of Spangler Candy, the Dum Dum plant you can still smell on a cook day. Ohio Art made the Etch A Sketch here too. If you get off, I'll tell you the square, the band, and the rest.",
    long: "",
    names: ["Bryan", "Spangler Candy", "Ohio Art", "Etch A Sketch"]
  },
  {
    id: "approach-napoleon",
    layer: "approach",
    name: "Approaching Napoleon",
    lat: 41.3923,
    lng: -84.1252,
    radius: 8000,
    short: "You're coming up on Napoleon, Ohio. Two things. The town has a French emperor's name and a German canal founding on the Maumee. And Campbell Soup built a huge plant on the north side, so the drained swamp still feeds a factory. If you come off the road, I'll tell you the courthouse fire and the rest.",
    long: "",
    names: ["Napoleon", "Campbell Soup", "Maumee River", "Miami and Erie Canal"]
  },
  {
    id: "approach-kendallville",
    name: "Kendallville",
    lat: 41.4417,
    lng: -85.2655,
    radius: 8000,
    layer: "approach",
    short: "You are coming up on Kendallville, Indiana. This town was platted by William Mitchell and named for Postmaster General Amos Kendall. Flint and Walling built windmills here that watered farms across the West. If you leave the highway, I'll tell you the railroad, Bixler Lake, and the rest.",
    long: "",
    names: ["Kendallville", "William Mitchell", "Amos Kendall", "Flint and Walling"]
  },
  {
    id: "kendallville-founding",
    name: "Kendallville founding",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "You are in Kendallville. In 1833 David Bundle built a wigwam inside what is now the city. Widow Frances Dingman bought him out and put up the first real house near State and Gold. William Mitchell arrived in 1836, platted lots, and named the post office for Amos Kendall. The town was incorporated in 1863 and became a city in 1866.",
    long: "",
    names: ["David Bundle", "Frances Dingman", "William Mitchell", "Amos Kendall"]
  },
  {
    id: "kendallville-plank-road",
    name: "Lima Plank Road",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "Main Street in Kendallville sits on the old Lima Road, first an Indian path called the Mongoquinon Trail. In 1848 William Mitchell helped turn it into the Lima Plank Road, a sixty-mile toll road from Fort Wayne toward Howe. When the company could not pay the crews, Mitchell paid them in goods from local stores. That is how this street became the spine of the town.",
    long: "",
    names: ["Lima Plank Road", "Mongoquinon Trail", "William Mitchell", "State Road 3"]
  },
  {
    id: "kendallville-railroad",
    name: "Kendallville railroad",
    lat: 41.4455,
    lng: -85.2658,
    radius: 1200,
    short: "The rails on the north side of Kendallville arrived in the late 1850s. Passenger cars from New York toward Chicago stopped here in 1857. The depot stood in Depot Park on Lincoln Street, west of the Main Street crossing. William Mitchell pushed both the east-west and north-south lines through town. That crossing is why Kendallville outgrew the rest of Noble County.",
    long: "",
    names: ["Ohio and Indiana Railroad", "William Mitchell", "Depot Park"]
  },
  {
    id: "kendallville-downtown",
    name: "Kendallville Downtown Historic District",
    lat: 41.4412,
    lng: -85.2656,
    radius: 900,
    short: "Downtown Kendallville is on the National Register of Historic Places. William Mitchell platted these twenty-two-foot lots in 1849. Most of the brick blocks went up between 1860 and 1910. Italianate storefronts, the old City Hall, the Kelly Hotel, and the Spencer Opera House still line Main. Forty-six buildings in this district count as contributing historic structures.",
    long: "",
    names: ["Kendallville Downtown Historic District", "William Mitchell", "Spencer Opera House", "Kelly Hotel"]
  },
  {
    id: "kendallville-flint-walling",
    name: "Flint and Walling",
    lat: 41.4402,
    lng: -85.2620,
    radius: 1200,
    short: "Flint and Walling started on Mitchell and Oak in 1866. Simeon Flint and David Walling first made hand pumps, then the Star windmill. Those mills pumped water for farms and railroad tanks from here to the Great Plains. The company still makes pumps in Kendallville. At one time nearly a hundred windmill makers worked within eighty miles of this town.",
    long: "",
    names: ["Flint and Walling", "Simeon Flint", "David Walling", "Star windmill"]
  },
  {
    id: "kendallville-windmill-museum",
    name: "Mid-America Windmill Museum",
    lat: 41.4308,
    lng: -85.2448,
    radius: 900,
    short: "This is the Mid-America Windmill Museum. More than fifty historic mills stand in the grass, including every Flint and Walling model from the original Star to the last Zephyr. A replica of the first colonial mill from Jamestown is here too. Northeast Indiana once built the machines that let the West drink. This field is where that story is kept.",
    long: "",
    names: ["Mid-America Windmill Museum", "Flint and Walling", "Original Star"]
  },
  {
    id: "kendallville-mccray",
    name: "McCray Refrigeration",
    lat: 41.4410,
    lng: -85.2660,
    radius: 1200,
    short: "Elmer McCray built a refrigerator works that at one point supported about a third of the families in Kendallville. He was the largest donor to Lakeside Hospital, later named McCray Memorial. If you worked here in the early 1900s, there is a good chance your paycheck, or your neighbor's, came from cold storage.",
    long: "",
    names: ["Elmer McCray", "McCray Refrigeration", "McCray Memorial Hospital"]
  },
  {
    id: "kendallville-bixler-lake",
    name: "Bixler Lake",
    lat: 41.4378,
    lng: -85.2495,
    radius: 1000,
    short: "Bixler Lake is Kendallville's public water. The Bixler family were early settlers who left their name on the lake. The park around it is part of a city park system of hundreds of acres. Before the town was brick and rail, this was wet ground on the edge of the old swamp country.",
    long: "",
    names: ["Bixler Lake", "Bixler family"]
  },
  {
    id: "kendallville-anderson",
    name: "Anderson Block",
    lat: 41.4424,
    lng: -85.2656,
    radius: 700,
    short: "One thirteen North Main is the Anderson Block. Alonzo Anderson, an African American barber and builder, put up storefronts here after the Civil War. The Anderson brothers came from a family of freed people in North Carolina. This building is one of a small number of African American historic sites listed in Indiana. Kendallville's Main Street was not built by one family alone.",
    long: "",
    names: ["Alonzo Anderson", "Anderson Block"]
  },
  {
    id: "kendallville-people",
    name: "Kendallville people",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "This town sent out more than merchants. William Mitchell went to Congress. Alvin Strauss, born here, designed Fort Wayne's Lincoln Bank Tower and the Auburn Automobile headquarters. Arthur Mapes wrote Indiana's state poem. Brad Miller played in the NBA. The people who left here took the town with them.",
    long: "",
    names: ["William Mitchell", "Alvin M. Strauss", "Arthur Mapes", "Brad Miller"]
  },
  {
    id: "kendallville-war",
    name: "Kendallville Civil War city",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "Kendallville became a town in 1863, in the middle of the Civil War, and a city three years later. Men from Noble County left from these streets. The first city officers were sworn in October 1866, after the war was over. The original town records later burned. What survived is the brick downtown they built when they came home.",
    long: "",
    names: ["Civil War", "Tim Baker"]
  },
  {
    id: "kendallville-tornado",
    name: "1992 tornado",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "On July 14, 1992 an F2 tornado formed on the west side of Kendallville and cut east through downtown and the shopping district. Locals still date stories from before and after that storm. The brick blocks on Main held. That is one reason this historic district is still standing for you to drive through.",
    long: "",
    names: ["1992 tornado"]
  },
  {
    id: "kendallville-native",
    name: "Mongoquinon Trail",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1600,
    short: "Before Kendallville had a name, this was Miami and Potawatomi country. The road that became Main Street followed the Mongoquinon Trail, an Indian path from Fort Wayne toward Lima. Traders and land hunters used it through the forest and swamp. The town sits on a trail that was already old when the first cabin went up.",
    long: "",
    names: ["Mongoquinon Trail", "Miami", "Potawatomi"]
  }

  {
    id: "kendallville-spencer-opera",
    name: "Spencer Opera House",
    lat: 41.4406,
    lng: -85.2656,
    radius: 700,
    short: "The Spencer Opera House stood on South Main. This was where Kendallville dressed up. James Whitcomb Riley recited poetry in Mitchell Hall nearby. The Princess Theatre later ran five-cent vaudeville and silent pictures in the same corridor. A farm town with a railroad also wanted a stage.",
    long: "",
    names: ["Spencer Opera House", "James Whitcomb Riley", "Princess Theatre"]
  },
  {
    id: "kendallville-kelly-hotel",
    name: "Kelly Hotel",
    lat: 41.4410,
    lng: -85.2656,
    radius: 700,
    short: "One-oh-one South Main began as a hotel built in 1865 by Herman Krueger for people stepping off the Main Street train. John Kelly later ran it as the Kelly House. William Jennings Bryan stayed here while campaigning. John Kelly's son owned the first automobile in town. The building later became furniture store space. The railroad made overnight guests a business.",
    long: "",
    names: ["Kelly Hotel", "Herman Krueger", "William Jennings Bryan"]
  },
  {
    id: "kendallville-city-hall",
    name: "Kendallville City Hall",
    lat: 41.4402,
    lng: -85.2656,
    radius: 600,
    short: "Two thirty-four South Main is City Hall, marked on the National Register. The downtown district around it went onto the Indiana register in October 2003 and the National Register that December. Russell Frehse spent thirty years saving the paper trail that made that listing possible. The city records from 1863 burned. This brick is what they could still prove.",
    long: "",
    names: ["Kendallville City Hall", "Russell Frehse"]
  },
  {
    id: "kendallville-iddings-block",
    name: "Iddings-Gilbert-Leader-Anderson Block",
    lat: 41.4415,
    lng: -85.2656,
    radius: 700,
    short: "The Iddings-Gilbert-Leader-Anderson Block is itself on the National Register. Hiram Iddings and Herman Krueger were downtown builders when the railroad money hit. These narrow lots are the twenty-two-foot pattern William Mitchell sold in 1849. You can still read that survey in the width of the stores.",
    long: "",
    names: ["Iddings-Gilbert-Leader-Anderson Block", "Hiram Iddings"]
  },
  {
    id: "kendallville-minot-store",
    name: "Samuel Minot store",
    lat: 41.4413,
    lng: -85.2654,
    radius: 800,
    short: "Samuel Minot opened the first Main Street general store in 1840 at South Main and Gold. The first post office sat in that store. Upstairs, the Noble County Star was printed in 1849. A four-story grist mill he built made flour before the foundry and the windmill works arrived. Trade started here before the town had a charter.",
    long: "",
    names: ["Samuel Minot", "Noble County Star"]
  },
  {
    id: "kendallville-mapes",
    name: "Arthur Mapes",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "Arthur Franklin Mapes grew up in Kendallville and became Indiana's poet laureate. He wrote the state poem. A small industrial city on the plank road produced the words Indiana still claims. If you are only passing through, that is the kind of fact this town wants you to take with you.",
    long: "",
    names: ["Arthur Mapes"]
  },
  {
    id: "kendallville-strauss",
    name: "Alvin Strauss",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "Alvin M. Strauss was born in Kendallville to German immigrant parents. He designed McCray Memorial Hospital here, the Auburn Automobile headquarters that is now the Auburn Cord Duesenberg Museum, and Fort Wayne's Lincoln Bank Tower, Embassy Theatre, and original Memorial Coliseum. Northeast Indiana's skyline has Kendallville fingerprints.",
    long: "",
    names: ["Alvin M. Strauss", "Lincoln Bank Tower", "Auburn Automobile"]
  },
  {
    id: "kendallville-gene-stratton-porter",
    name: "Gene Stratton-Porter",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "Gene Stratton-Porter, the Limberlost novelist, had a business tie to Kendallville. Her books made swamp and lake country famous. Rome City and Sylvan Lake sit just north of here. Drivers who think this is only factory towns miss that one of Indiana's best-known writers worked this same landscape.",
    long: "",
    names: ["Gene Stratton-Porter", "Limberlost", "Rome City"]
  },
  {
    id: "kendallville-parks",
    name: "Kendallville parks",
    lat: 41.4365,
    lng: -85.2520,
    radius: 1200,
    short: "Kendallville keeps more than six hundred acres of park land. Bixler Lake Park has the lake and an eighty-nine-acre sports complex. Chain O'Lakes State Park is a short drive west, a kettle-lake chain left by the glacier. This county is full of natural lakes. The town grew beside water, not just rail.",
    long: "",
    names: ["Bixler Lake Park", "Chain O'Lakes State Park"]
  },
  {
    id: "kendallville-old-cemetery",
    name: "Kendallville old cemetery",
    lat: 41.4448,
    lng: -85.2705,
    radius: 800,
    short: "The old burial ground holds the Sawyer family, who donated the land, the Bixlers who named the lake, and Civil War dead. William Mitchell died on business in Georgia and is remembered here as the father of the town. Cemetery tours still tell the Anderson family story and the men who did not come home in 1865.",
    long: "",
    names: ["Old Cemetery", "Sawyer family", "William Mitchell"]
  },
  {
    id: "kendallville-atz",
    name: "Atz Ice Cream",
    lat: 41.4410,
    lng: -85.2655,
    radius: 1000,
    short: "Ralph Atz started Atz Ice Cream in Kendallville. Atz Furniture later occupied the old Kelly Hotel building. Downtown names lasted for generations here. Klinkenberg's dry goods ran more than a hundred years. If you want to know a town, watch which family names stay on the glass.",
    long: "",
    names: ["Ralph Atz", "Atz Ice Cream", "Klinkenberg"]
  },
  {
    id: "kendallville-legend-plank",
    name: "plank road tolls",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1600,
    short: "Local memory still talks about the plank-road days. Tollgates stood every six to ten miles on the Lima Road. The company went broke and handed the route to the county in 1858. Teamsters cursed the planks when they warped in the wet. The path is now State Road 3, but the argument about who should pay for the road never really left.",
    long: "",
    names: ["Lima Plank Road", "tollgates"]
  }
  {
    id: "kendallville-spencer-opera",
    name: "Spencer Opera House",
    lat: 41.4406,
    lng: -85.2656,
    radius: 700,
    short: "The Spencer Opera House stood on South Main. This was where Kendallville dressed up. James Whitcomb Riley recited poetry in Mitchell Hall nearby. The Princess Theatre later ran five-cent vaudeville and silent pictures in the same corridor. A farm town with a railroad also wanted a stage.",
    long: "",
    names: ["Spencer Opera House", "James Whitcomb Riley", "Princess Theatre"]
  },
  {
    id: "kendallville-kelly-hotel",
    name: "Kelly Hotel",
    lat: 41.4410,
    lng: -85.2656,
    radius: 700,
    short: "One-oh-one South Main began as a hotel built in 1865 by Herman Krueger for people stepping off the Main Street train. John Kelly later ran it as the Kelly House. William Jennings Bryan stayed here while campaigning. John Kelly's son owned the first automobile in town. The building later became furniture store space. The railroad made overnight guests a business.",
    long: "",
    names: ["Kelly Hotel", "Herman Krueger", "William Jennings Bryan"]
  },
  {
    id: "kendallville-city-hall",
    name: "Kendallville City Hall",
    lat: 41.4402,
    lng: -85.2656,
    radius: 600,
    short: "Two thirty-four South Main is City Hall, marked on the National Register. The downtown district around it went onto the Indiana register in October 2003 and the National Register that December. Russell Frehse spent thirty years saving the paper trail that made that listing possible. The city records from 1863 burned. This brick is what they could still prove.",
    long: "",
    names: ["Kendallville City Hall", "Russell Frehse"]
  },
  {
    id: "kendallville-iddings-block",
    name: "Iddings-Gilbert-Leader-Anderson Block",
    lat: 41.4415,
    lng: -85.2656,
    radius: 700,
    short: "The Iddings-Gilbert-Leader-Anderson Block is itself on the National Register. Hiram Iddings and Herman Krueger were downtown builders when the railroad money hit. These narrow lots are the twenty-two-foot pattern William Mitchell sold in 1849. You can still read that survey in the width of the stores.",
    long: "",
    names: ["Iddings-Gilbert-Leader-Anderson Block", "Hiram Iddings"]
  },
  {
    id: "kendallville-minot-store",
    name: "Samuel Minot store",
    lat: 41.4413,
    lng: -85.2654,
    radius: 800,
    short: "Samuel Minot opened the first Main Street general store in 1840 at South Main and Gold. The first post office sat in that store. Upstairs, the Noble County Star was printed in 1849. A four-story grist mill he built made flour before the foundry and the windmill works arrived. Trade started here before the town had a charter.",
    long: "",
    names: ["Samuel Minot", "Noble County Star"]
  },
  {
    id: "kendallville-mapes",
    name: "Arthur Mapes",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "Arthur Franklin Mapes grew up in Kendallville and became Indiana's poet laureate. He wrote the state poem. A small industrial city on the plank road produced the words Indiana still claims. If you are only passing through, that is the kind of fact this town wants you to take with you.",
    long: "",
    names: ["Arthur Mapes"]
  },
  {
    id: "kendallville-strauss",
    name: "Alvin Strauss",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "Alvin M. Strauss was born in Kendallville to German immigrant parents. He designed McCray Memorial Hospital here, the Auburn Automobile headquarters that is now the Auburn Cord Duesenberg Museum, and Fort Wayne's Lincoln Bank Tower, Embassy Theatre, and original Memorial Coliseum. Northeast Indiana's skyline has Kendallville fingerprints.",
    long: "",
    names: ["Alvin M. Strauss", "Lincoln Bank Tower", "Auburn Automobile"]
  },
  {
    id: "kendallville-gene-stratton-porter",
    name: "Gene Stratton-Porter",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1400,
    short: "Gene Stratton-Porter, the Limberlost novelist, had a business tie to Kendallville. Her books made swamp and lake country famous. Rome City and Sylvan Lake sit just north of here. Drivers who think this is only factory towns miss that one of Indiana's best-known writers worked this same landscape.",
    long: "",
    names: ["Gene Stratton-Porter", "Limberlost", "Rome City"]
  },
  {
    id: "kendallville-parks",
    name: "Kendallville parks",
    lat: 41.4365,
    lng: -85.2520,
    radius: 1200,
    short: "Kendallville keeps more than six hundred acres of park land. Bixler Lake Park has the lake and an eighty-nine-acre sports complex. Chain O'Lakes State Park is a short drive west, a kettle-lake chain left by the glacier. This county is full of natural lakes. The town grew beside water, not just rail.",
    long: "",
    names: ["Bixler Lake Park", "Chain O'Lakes State Park"]
  },
  {
    id: "kendallville-old-cemetery",
    name: "Kendallville old cemetery",
    lat: 41.4448,
    lng: -85.2705,
    radius: 800,
    short: "The old burial ground holds the Sawyer family, who donated the land, the Bixlers who named the lake, and Civil War dead. William Mitchell died on business in Georgia and is remembered here as the father of the town. Cemetery tours still tell the Anderson family story and the men who did not come home in 1865.",
    long: "",
    names: ["Old Cemetery", "Sawyer family", "William Mitchell"]
  },
  {
    id: "kendallville-atz",
    name: "Atz Ice Cream",
    lat: 41.4410,
    lng: -85.2655,
    radius: 1000,
    short: "Ralph Atz started Atz Ice Cream in Kendallville. Atz Furniture later occupied the old Kelly Hotel building. Downtown names lasted for generations here. Klinkenberg's dry goods ran more than a hundred years. If you want to know a town, watch which family names stay on the glass.",
    long: "",
    names: ["Ralph Atz", "Atz Ice Cream", "Klinkenberg"]
  },
  {
    id: "kendallville-legend-plank",
    name: "plank road tolls",
    lat: 41.4417,
    lng: -85.2655,
    radius: 1600,
    short: "Local memory still talks about the plank-road days. Tollgates stood every six to ten miles on the Lima Road. The company went broke and handed the route to the county in 1858. Teamsters cursed the planks when they warped in the wet. The path is now State Road 3, but the argument about who should pay for the road never really left.",
    long: "",
    names: ["Lima Plank Road", "tollgates"]
  }
  {
    id: "approach-edgerton",
    name: "Edgerton",
    lat: 41.4494,
    lng: -84.7469,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Edgerton, Ohio, the Top of Ohio in the state's northwest corner. The village sits where the railroad crossed the St. Joseph River. It is named for Alfred P. Edgerton, the same Hicks Land Company agent who platted Hicksville. If you come off the road, I'll tell you the Air Line, the opera house, and Clem.",
    long: "",
    names: ["Edgerton", "Alfred P. Edgerton", "St. Joseph River"]
  },
  {
    id: "edgerton-founding",
    name: "Edgerton founding",
    lat: 41.4494,
    lng: -84.7469,
    radius: 1200,
    short: "You are in Edgerton. In 1854 railroad engineer John H. Sargent platted 135 lots where the Michigan Southern line would cross the St. Joseph River. He also helped found Stryker and Wauseon. The village took the name of Alfred P. Edgerton, land agent for Hicks and Company, the same firm behind Hicksville. It incorporated December 4, 1865.",
    long: "",
    names: ["John H. Sargent", "Alfred P. Edgerton", "Hicks and Company"]
  },
  {
    id: "edgerton-railroad",
    name: "Edgerton Air Line",
    lat: 41.4488,
    lng: -84.7465,
    radius: 1100,
    short: "The Lake Shore and Michigan Southern reached Edgerton in 1855. The stretch from Toledo toward Kendallville was so straight crews called it the Air Line. First timetable, June 8, 1857. A.P. Edgerton and William Trevitt donated the depot ground south of the tracks. Hotels faced the station for railroad men and travelers.",
    long: "",
    names: ["Lake Shore and Michigan Southern", "Air Line", "William Trevitt"]
  },
  {
    id: "edgerton-river-oars",
    name: "St. Joseph River oar factory",
    lat: 41.4502,
    lng: -84.7435,
    radius: 1100,
    short: "The St. Joseph River made this crossing worth a town. About 1860 an oar factory stood west of the river, north of the tracks. Ash timber floated down or came by wagon, became oars, and left on the railroad. Two sawmills and a tannery worked the same timber. The river and the rail built Edgerton together.",
    long: "",
    names: ["St. Joseph River", "oar factory"]
  },
  {
    id: "edgerton-park-opera",
    name: "Park Opera House",
    lat: 41.4484,
    lng: -84.7478,
    radius: 700,
    short: "Alfred Edgerton donated the public square. In 1884 Von Behren and Shaffer of Stryker built the town hall and Park Opera House for just under eight thousand dollars. Concerts, court, basketball, commencements, and traveling troupes used the oak balcony. Autographs covered the wall behind the ticket booth. A storm wrecked the old hall on June 23, 2010, days before the historical society could buy it.",
    long: "",
    names: ["Park Opera House", "Alfred P. Edgerton", "Von Behren and Shaffer"]
  },
  {
    id: "edgerton-clem",
    name: "Clem Civil War monument",
    lat: 41.4483,
    lng: -84.7478,
    radius: 700,
    short: "The Civil War monument locals call Clem went up May 30, 1912 for three thousand dollars, paid by the W.A. Slaughter G.A.R. post and the Woman's Relief Corps. He first stood in the middle of Michigan and Indiana, right in U.S. 6. In 1972 the highway project moved him, in nine pieces, to the park in front of Village Hall.",
    long: "",
    names: ["Clem", "W.A. Slaughter Post", "Civil War"]
  },
  {
    id: "edgerton-maple-grove",
    name: "Maple Grove Cemetery",
    lat: 41.4555,
    lng: -84.7510,
    radius: 800,
    short: "Maple Grove Cemetery opened in 1858. Graves from the vanished village of Denmark were moved here. Civil War surgeon J.O. Rose led the first Memorial Day service on May 30, 1868. They still hold it. The old town of Denmark was Williams County's first village. Edgerton outlived it because of the railroad crossing.",
    long: "",
    names: ["Maple Grove Cemetery", "Denmark Ohio", "J.O. Rose"]
  },
  {
    id: "edgerton-blaze-1893",
    name: "Blaze of 1893",
    lat: 41.4494,
    lng: -84.7469,
    radius: 1200,
    short: "In 1893 fire wiped out most of downtown Edgerton. Locals still call it the Blaze of 1893. Frager's Barber Shop is the storefront that survived. A railroad village built of wood learned the hard way. What you see on Michigan Avenue is the town that rebuilt after that night.",
    long: "",
    names: ["Blaze of 1893", "Frager's Barber Shop"]
  },
  {
    id: "edgerton-hathaway",
    name: "Dr. Calvin Hathaway",
    lat: 41.4494,
    lng: -84.7469,
    radius: 1200,
    short: "Dr. Calvin Hathaway practiced in Edgerton for fifty years. He had been a Union surgeon with the 130th Ohio. After the war he sat on pension boards in Toledo and Bryan. In a village this size, one doctor was the hospital. His name is still in the old family stories.",
    long: "",
    names: ["Calvin Hathaway", "130th Ohio"]
  },
  {
    id: "edgerton-native",
    name: "St. Joseph country",
    lat: 41.4494,
    lng: -84.7469,
    radius: 1500,
    short: "St. Joseph Township was organized in 1832, before Edgerton existed. This river was a Potawatomi and Miami corridor, then a settler road through the wet timber of the old Northwest Territory. The railroad did not invent the crossing. It only made the crossing permanent.",
    long: "",
    names: ["Potawatomi", "Miami", "St. Joseph Township"]
  },
  {
    id: "edgerton-festival",
    name: "Festival of Flags",
    lat: 41.4494,
    lng: -84.7469,
    radius: 1200,
    short: "Edgerton still throws a summer homecoming, now the Festival of Flags. The first big one was in 1921. A village that lost its opera house to a storm and its downtown to fire kept the habit of coming back to the park Alfred Edgerton gave them.",
    long: "",
    names: ["Festival of Flags"]
  }
  {
    id: "approach-harlan",
    name: "Harlan",
    lat: 41.1963,
    lng: -84.9195,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Harlan, Indiana, on State Road 37. This ridge was the bank of prehistoric Lake Maumee and the old overland trace from Detroit to Fort Wayne. Lewis Reichelderfer platted Harlan in 1853. Maysville sat across the road and faded. If you slow down, I'll tell you the toll road and the 2023 tornado.",
    long: "",
    names: ["Harlan", "Maysville", "State Road 37"]
  },
  {
    id: "harlan-founding",
    name: "Harlan founding",
    lat: 41.1963,
    lng: -84.9195,
    radius: 1200,
    short: "You are in Harlan. William Sweet, Ezra May, and Isaac Hall settled this township in 1836. Lewis and Julia Ann Reichelderfer platted Harlan in December 1853 between the Hicksville and Spencerville roads. Ezra May platted Maysville on the south side of the road in 1859. The post office kept the name Harlan. Maysville disappeared.",
    long: "",
    names: ["Lewis Reichelderfer", "Ezra May", "Isaac Hall", "William Sweet"]
  },
  {
    id: "harlan-ridge-road",
    name: "Harlan ridge road",
    lat: 41.1960,
    lng: -84.9195,
    radius: 1400,
    short: "State Road 37 follows a glacial ridge, the north bank of old Lake Maumee. Surveyors marked it as a ridge road in 1837. In the late 1800s it was a toll road from Harlan to Fort Wayne. Indiana improved it as S.R. 37 in 1933. You are driving a beach that turned into a highway.",
    long: "",
    names: ["Lake Maumee", "State Road 37", "toll road"]
  },
  {
    id: "harlan-marker",
    name: "Harlan historical marker",
    lat: 41.1960,
    lng: -84.9196,
    radius: 600,
    short: "The Allen County-Fort Wayne Historical Society marker at 37 and Antwerp Road is the town's official pin. Platted 1853. North bank of prehistoric Lake Maumee. Pioneer trace Detroit to Fort Wayne. That is the sentence Harlan wants on the record.",
    long: "",
    names: ["Allen County-Fort Wayne Historical Society"]
  },
  {
    id: "harlan-churches",
    name: "Harlan churches",
    lat: 41.1965,
    lng: -84.9205,
    radius: 1000,
    short: "Methodists organized here in 1843 and built near the old cemetery in 1854. Lutherans from Mahoning County, Ohio, founded Salem in 1852. The United Brethren stood at 37 and Spencerville. In a crossroads town the churches were the civic buildings before there was a city hall.",
    long: "",
    names: ["Harlan Methodist", "Salem Lutheran"]
  },
  {
    id: "harlan-cemetery",
    name: "Old Maysville Cemetery",
    lat: 41.1926,
    lng: -84.9210,
    radius: 800,
    short: "Old Maysville Cemetery and Harlan Memorial Cemetery hold the two-town story. Maysville is gone. The stones are not. Springfield Township filled with settlers after the Indian removal of the 1830s. The graves are how you still read the first families: Sweet, May, Hall, Reichelderfer.",
    long: "",
    names: ["Old Maysville Cemetery", "Harlan Memorial Cemetery"]
  },
  {
    id: "harlan-native",
    name: "Harlan Indian country",
    lat: 41.1963,
    lng: -84.9195,
    radius: 1500,
    short: "Settlers in 1836 found fresh signs of Indian occupation. A few bands stayed in Springfield Township until 1839. Most had already been removed by treaty. This ridge above old Lake Maumee was a travel line long before it was a toll road. Harlan sits on somebody else's path.",
    long: "",
    names: ["Potawatomi", "Miami", "Lake Maumee"]
  },
  {
    id: "harlan-veterans",
    name: "Harlan Park Veterans Memorial",
    lat: 41.1975,
    lng: -84.9180,
    radius: 700,
    short: "Harlan Park holds the township veterans memorial. Unincorporated towns still raise stone for the men who left these farms. The park is also where Harlan Days is held. A place with no city charter still keeps a public square.",
    long: "",
    names: ["Harlan Park", "Harlan Days"]
  },
  {
    id: "harlan-school",
    name: "Harlan High School 1908",
    lat: 41.1968,
    lng: -84.9200,
    radius: 800,
    short: "The 1908 Harlan High School building stood until consolidation closed it in 1965. Kids here now go to Woodlan. The old school is the landmark of a town that was never incorporated and still knows where Friday night used to be.",
    long: "",
    names: ["Harlan High School", "Woodlan"]
  },
  {
    id: "harlan-tornado-2023",
    name: "Harlan 2023 tornado",
    lat: 41.1963,
    lng: -84.9195,
    radius: 1400,
    short: "On March 31, 2023 an EF-2 tornado formed on Fort Wayne's northeast side and ran at Harlan. Winds about 120 miles an hour. Path about 400 yards wide. Locals date stories from that night the way older towns date a fire. The ridge road took the hit and the town is still here.",
    long: "",
    names: ["2023 tornado"]
  },
  {
    id: "harlan-cuba",
    name: "Cuba Indiana",
    lat: 41.1930,
    lng: -84.9350,
    radius: 1000,
    short: "West of Harlan was Cuba, a hamlet with the township's first post office in 1849. The office moved to Harlan in 1854. Hall's Corners had another office in 1851. The map around here is full of names that lasted one generation. Harlan is the one that kept the mail.",
    long: "",
    names: ["Cuba Indiana", "Hall's Corners"]
  }
 {
    id: "approach-butler",
    name: "Butler",
    lat: 41.4281,
    lng: -84.8764,
    radius: 8000,
    layer: "approach",
    short: "You are coming up on Butler, Indiana. This was a railroad junction town: Lake Shore Air Line, Eel River, then the Wabash. In 1966 a jet-powered railcar hit 183 miles an hour on the straight track toward Stryker. That American record still stands. If you come off the highway, I'll tell you Norristown, Broadway, and the steel mill.",
    long: "",
    names: ["Butler", "Wabash Railroad", "M-497"]
  },
  {
    id: "butler-founding",
    name: "Butler founding",
    lat: 41.4281,
    lng: -84.8764,
    radius: 1300,
    short: "You are in Butler. Settlers from Ohio and Pennsylvania took land here in 1836. Charles Norris platted Norristown. The town was also called Jarvis and Butler Station. The railroad company named the depot Butler, likely for pioneer David Butler. It incorporated as Butler in 1866 and became a city in 1903.",
    long: "",
    names: ["Charles Norris", "David Butler", "Norristown"]
  },
  {
    id: "butler-railroads",
    name: "Butler railroads",
    lat: 41.4290,
    lng: -84.8750,
    radius: 1200,
    short: "Three railroads made Butler. The Michigan Southern Air Line arrived in 1856. The Eel River line from Logansport opened in 1873. About 1880 the Wabash leased it, pushed to Detroit, and put its division point here. Crews lived on South Broadway. At the peak, sixty trains a day went through this crossing. When the division left in 1893, the boom broke.",
    long: "",
    names: ["Lake Shore and Michigan Southern", "Eel River Railroad", "Wabash Railroad"]
  },
  {
    id: "butler-black-beetle",
    name: "M-497 Black Beetle",
    lat: 41.4281,
    lng: -84.8764,
    radius: 1500,
    short: "On July 23, 1966 the New York Central bolted jet engines to an RDC car they called the M-497 Black Beetle. The run was Butler to Stryker because the Air Line is dead straight and flat. It hit 183.68 miles an hour. That is still the American rail speed record. A farm-junction town held the fastest train in the country.",
    long: "",
    names: ["M-497 Black Beetle", "New York Central", "Stryker"]
  },
  {
    id: "butler-downtown",
    name: "Downtown Butler Historic District",
    lat: 41.4274,
    lng: -84.8768,
    radius: 800,
    short: "Broadway's brick blocks went on the National Register in 2001. The oldest brick, the Old Dimestore at 137 South Broadway, went up in 1863 for John Isherwood. George Hensler built the hardware next door. This was the storefront row for Wilmington Township when the Wabash still stopped here.",
    long: "",
    names: ["Downtown Butler Historic District", "Old Dimestore"]
  },
  {
    id: "butler-company",
    name: "Butler Company",
    lat: 41.4285,
    lng: -84.8780,
    radius: 1100,
    short: "Jonas Aldrich and T. H. Shaub started the Butler Windmill Company in 1888. It became the Butler Company and made buggies, bikes, even airplanes, plus plumbing goods. Railroad towns did not stay railroad towns. They tried every machine that would ship.",
    long: "",
    names: ["Butler Company", "Butler Windmill Company"]
  },
  {
    id: "butler-sdi",
    name: "Steel Dynamics",
    lat: 41.4400,
    lng: -84.8900,
    radius: 2000,
    short: "Steel Dynamics put a thousand-acre mini-mill just outside Butler along the railroad in the 1990s. Hundreds of jobs. The rails that once hauled Wabash freight now feed a steel plant. The junction outlived the passenger depot.",
    long: "",
    names: ["Steel Dynamics"]
  },
  {
    id: "butler-native",
    name: "Butler Indian country",
    lat: 41.4281,
    lng: -84.8764,
    radius: 1500,
    short: "Wilmington Township was organized in 1837 on land that had been Miami and Potawatomi country. The Gunsenhouser, Kester, Blair, Tomlinson, and Handy families cleared the first farms. The Air Line did not invent this crossing. It froze a trail into steel.",
    long: "",
    names: ["Miami", "Potawatomi", "Wilmington Township"]
  },
  {
    id: "butler-war",
    name: "Butler Civil War town",
    lat: 41.4281,
    lng: -84.8764,
    radius: 1300,
    short: "Butler incorporated in 1866, the year after the war. The first brick store went up in 1863 while the fighting was still on. DeKalb County men left from these platforms. The town that the Wabash later bloated was already a Union shipping point.",
    long: "",
    names: ["Civil War"]
  },
  {
    id: "butler-mudd-junction",
    name: "Mudd Junction",
    lat: 41.4281,
    lng: -84.8764,
    radius: 1300,
    short: "Locals still tell the name pile-up. The station was Butler, the town was Jarvis, the post office was Norristown. For a while the crossing was Mudd Junction. Mail went to the wrong desk. They finally kept Butler and let the other names die. That is how a railroad town gets a name: whoever prints the timetable wins.",
    long: "",
    names: ["Mudd Junction", "Jarvis", "Norristown"]
  }
  {
    id: "approach-stjoe",
    name: "Saint Joe",
    lat: 41.3147,
    lng: -84.9011,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Saint Joe, Indiana, Pickle Town, on the St. Joseph River in Concord Township. Laid out in 1875 as a Baltimore and Ohio grain stop. Jacob Leighty kept a store here and went to Congress. If you come off the road, I'll tell you the river settlement and the 1911 Civil War monument.",
    long: "",
    names: ["Saint Joe", "St. Joseph River", "Jacob D. Leighty"]
  },
  {
    id: "stjoe-founding",
    name: "Saint Joe founding",
    lat: 41.3147,
    lng: -84.9011,
    radius: 1100,
    short: "You are in Saint Joe. The town takes its name from the St. Joseph River. It was laid out in 1875 when the Baltimore and Ohio needed a station, and incorporated in 1899. Concord Township on this river was settled in the 1830s, years before there was a plat. The railroad just gave the landing a name and a depot.",
    long: "",
    names: ["Baltimore and Ohio Railroad", "Concord Township"]
  },
  {
    id: "stjoe-river",
    name: "St. Joseph River Saint Joe",
    lat: 41.3140,
    lng: -84.8985,
    radius: 1100,
    short: "The St. Joseph of the Maumee was the highway before the rails. Homer Blake, David Butler, the Mathews and Rhodes families took river lots here in the 1830s. Canoes and keelboats moved the first freight. Saint Joe is a later name on an old landing.",
    long: "",
    names: ["St. Joseph River", "David Butler"]
  },
  {
    id: "stjoe-rail-grain",
    name: "Saint Joe grain station",
    lat: 41.3155,
    lng: -84.9015,
    radius: 900,
    short: "By the 1880s Saint Joe was one of the best grain shipping points in DeKalb County. Dry goods, a handle and shingle factory, a sawmill, and the B&O siding sat together. A town of a few hundred people punched above its size because the river and the railroad met.",
    long: "",
    names: ["Baltimore and Ohio Railroad"]
  },
  {
    id: "stjoe-leighty",
    name: "Jacob D. Leighty",
    lat: 41.3147,
    lng: -84.9011,
    radius: 1100,
    short: "Jacob D. Leighty ran a dry goods store in Saint Joe and went to the United States House. He was born in 1839 and died in 1912. A pickle-and-grain town sent a merchant to Congress. That is the kind of story this county repeats.",
    long: "",
    names: ["Jacob D. Leighty"]
  },
  {
    id: "stjoe-civil-war",
    name: "Saint Joe Civil War monument",
    lat: 41.3109,
    lng: -84.9025,
    radius: 800,
    short: "Riverside Cemetery holds a monument dedicated in 1911 to the men of this community who fought in the Civil War. The marker on the greenway still points to it. Concord Township sent soldiers before Saint Joe was even a town.",
    long: "",
    names: ["Riverside Cemetery", "Civil War"]
  },
  {
    id: "stjoe-pickle",
    name: "Pickle Festival",
    lat: 41.3147,
    lng: -84.9011,
    radius: 1100,
    short: "Saint Joe calls itself Pickle Town and still throws a Pickle Festival. Cucumber vats and contract fields were real industry here, not a joke on a sign. When the grain trade thinned, the town kept a crop that would pickle.",
    long: "",
    names: ["Pickle Festival"]
  },
  {
    id: "stjoe-parks",
    name: "Saint Joe river parks",
    lat: 41.3135,
    lng: -84.8990,
    radius: 900,
    short: "The St. Joseph River Greenway, Wild Cherry Park, and public river access are the town's public land. A river village without a courthouse still kept the bank open. This is the same water that runs toward Fort Wayne and the Maumee.",
    long: "",
    names: ["St. Joseph River Greenway", "Wild Cherry Park"]
  },
  {
    id: "stjoe-churches",
    name: "Saint Joe churches",
    lat: 41.3147,
    lng: -84.9011,
    radius: 900,
    short: "Saint Mark's Lutheran went up in 1881. The Church of Christ is still on the map. In a town this size the churches did the work a city hall would do: meetings, funerals, and the calendar.",
    long: "",
    names: ["Saint Mark's Lutheran", "Saint Joe Church of Christ"]
  },
  {
    id: "stjoe-native",
    name: "Concord Township Indian river",
    lat: 41.3147,
    lng: -84.9011,
    radius: 1400,
    short: "This bend of the St. Joseph was Miami and Potawatomi water long before Concord Township existed. The 1830s settlers took the fertile bank after the removals. The town name is a saint's name on an older river.",
    long: "",
    names: ["Miami", "Potawatomi", "St. Joseph River"]
  }

  {
    id: "approach-grabill",
    name: "Grabill",
    lat: 41.2100,
    lng: -84.9683,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Grabill, Indiana. The Wabash put a depot on Joseph Grabill's farm. First steam train, New Year's Day 1902. Amish families from Stark County, Ohio, had already been farming this township since 1853. If you turn in, I'll tell you the general store and the hobo they finally marked.",
    long: "",
    names: ["Grabill", "Joseph A. Grabill", "Wabash Railroad"]
  },
  {
    id: "grabill-founding",
    name: "Grabill founding",
    lat: 41.2100,
    lng: -84.9683,
    radius: 1100,
    short: "You are in Grabill. Twenty-three lots, platted February 15, 1902, where the Wabash wanted a depot for rich farm country. Post office August 8, 1902. Joseph A. Grabill was postmaster. The town took his name and incorporated in 1912. Harlan and Leo were already old. This one was born with the timetable.",
    long: "",
    names: ["Joseph A. Grabill", "Wabash Railroad"]
  },
  {
    id: "grabill-rail",
    name: "Grabill Wabash depot",
    lat: 41.2105,
    lng: -84.9675,
    radius: 900,
    short: "The first steam train over the new Fort Wayne to Toledo Wabash right of way arrived here January 1, 1902. The depot was a water stop on Grabill's farm. Passengers could board. That is the whole reason First Street exists.",
    long: "",
    names: ["Wabash Railroad"]
  },
  {
    id: "grabill-amish",
    name: "Grabill Amish settlement",
    lat: 41.2100,
    lng: -84.9683,
    radius: 1600,
    short: "Amish families came here in 1853 by ox team from Stark County, Ohio, fifty-two people including Bishop Peter Graber and his brothers. This is the only Indiana settlement made mostly of nineteenth-century Amish from Alsace-Lorraine. Schmucker, Graber, and Lengacher are the names on the mailboxes. The town is younger than the church districts around it.",
    long: "",
    names: ["Peter Graber", "Alsace-Lorraine", "Old Order Amish"]
  },
  {
    id: "grabill-souder",
    name: "Souder General Store",
    lat: 41.2102,
    lng: -84.9680,
    radius: 600,
    short: "H. Souder and Sons General Store is still in the family. Henry Souder's descendants still work the floor. Grabill Cabinets started here in 1946 when Vilas Schertz built dish cases after the war. A railroad stop became a hardware and cabinet town because Amish and English both needed goods that last.",
    long: "",
    names: ["Henry Souder", "Vilas Schertz", "Grabill Cabinets"]
  },
  {
    id: "grabill-souder-congress",
    name: "Mark Souder",
    lat: 41.2100,
    lng: -84.9683,
    radius: 1100,
    short: "Mark Souder grew up in Grabill, went to Leo High School, and represented this district in Congress from 1995 to 2010. A general-store town sent another merchant's world to Washington. The name on the shop window and the name on the ballot were the same family country.",
    long: "",
    names: ["Mark Souder"]
  },
  {
    id: "grabill-hobo",
    name: "Otto Snyder",
    lat: 41.2100,
    lng: -84.9683,
    radius: 1100,
    short: "Otto Snyder rode a freight into Grabill in the 1940s and lived in a shack by the crossing. They called him the beloved hobo. He died in 1963 wanting a decent funeral. The Chamber buried him without a stone. In 2024 the historical society found the grave and marked it. A railroad town finally wrote the transient's name in granite.",
    long: "",
    names: ["Otto Snyder"]
  },
  {
    id: "grabill-parks",
    name: "Grabill parks",
    lat: 41.2115,
    lng: -84.9690,
    radius: 800,
    short: "Grabill keeps two parks inside the corporation line. Cedar Creek Township around it is still farm and buggy road. The public ground is small on purpose. This was never going to be a courthouse town.",
    long: "",
    names: ["Cedar Creek Township"]
  },
  {
    id: "grabill-native",
    name: "Cedar Creek country",
    lat: 41.2100,
    lng: -84.9683,
    radius: 1500,
    short: "Cedar Creek Township sits on Miami and Potawatomi ground along the creek that feeds the St. Joseph. The Amish arrived after the removals. The Wabash arrived after the Amish. Three layers of people used the same water and the same ridge.",
    long: "",
    names: ["Cedar Creek", "Miami", "Potawatomi"]
  },
  {
    id: "grabill-marker",
    name: "Grabill historical marker",
    lat: 41.2105,
    lng: -84.9680,
    radius: 500,
    short: "The Allen County-Fort Wayne Historical Society marker on First Street is the official sentence: twenty-three lots, Wabash depot, first train January 1, 1902, post office August 8, Joseph A. Grabill, postmaster. That is the whole founding on one plaque.",
    long: "",
    names: ["Joseph A. Grabill"]
  }
  {
    id: "approach-woodburn",
    name: "Woodburn",
    lat: 41.1242,
    lng: -84.8547,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Woodburn, Indiana, on the Maumee and the old Wabash. Joseph K. Edgerton and Joseph Smith platted it in 1865 as Phelps Station. They named it Woodburn because they burned the forest to make farms. If you turn in, I'll tell you the 1871 fire and Shirley City.",
    long: "",
    names: ["Woodburn", "Joseph K. Edgerton", "Phelps Station"]
  },
  {
    id: "woodburn-founding",
    name: "Woodburn founding",
    lat: 41.1242,
    lng: -84.8547,
    radius: 1200,
    short: "You are in Woodburn. Edgerton owned more than eight thousand acres of timber in Maumee Township. The depot was Phelps. In September 1865 they platted Woodburn because of the wood fires used to clear land. Town 1895. City 1956. Locals still call it the smallest fifth-class city in Indiana, a place that tried to have every shop on one street.",
    long: "",
    names: ["Joseph K. Edgerton", "Joseph Smith", "Phelps Station"]
  },
  {
    id: "woodburn-rail-timber",
    name: "Woodburn timber and rail",
    lat: 41.1250,
    lng: -84.8540,
    radius: 1100,
    short: "The Wabash and St. Louis put a station here so Edgerton could ship lumber and staves. He ran two sawmills and a stave factory. Grain elevators followed in the 1890s. The town exists because a land company needed a siding in the woods.",
    long: "",
    names: ["Wabash Railroad", "Woodburn Lumber Company"]
  },
  {
    id: "woodburn-fire-1871",
    name: "Woodburn fire 1871",
    lat: 41.1242,
    lng: -84.8547,
    radius: 1300,
    short: "A forest fire in 1871 burned much of Edgerton's timber and stalled the town. Swamps grew back. Ditches had to be dug for fifteen years before the farms took. Woodburn is a name that tells the truth twice: they burned the woods on purpose, then fire did it again.",
    long: "",
    names: ["1871 fire"]
  },
  {
    id: "woodburn-shirley",
    name: "Shirley City",
    lat: 41.1242,
    lng: -84.8547,
    radius: 1100,
    short: "In 1895 some men tried to incorporate as Shirley City for Senator Robert B. Shirley. William Gernhardt platted lots next to Woodburn. Mennonites and German Lutherans argued over the new school. The name that stuck was Woodburn. The fight is how you know two churches built one town.",
    long: "",
    names: ["Shirley City", "Robert B. Shirley"]
  },
  {
    id: "woodburn-maumee",
    name: "Maumee River Woodburn",
    lat: 41.1220,
    lng: -84.8480,
    radius: 1400,
    short: "The Maumee runs past Woodburn toward Antwerp and Defiance. Miami called it. French tongues turned Miami into Maumee. This river goes north to Lake Erie. Woodburn sits on the same water that made Fort Wayne and Fallen Timbers matter.",
    long: "",
    names: ["Maumee River", "Miami"]
  },
  {
    id: "woodburn-stucky",
    name: "Stucky brothers",
    lat: 41.1242,
    lng: -84.8547,
    radius: 1100,
    short: "The Stucky brothers sold farm implements and repairs when the ditches finally made fields. Brick and tile mills, a stockyard, a hotel, and a butcher shop filled Main. After the timber was gone, iron and grain kept the siding busy.",
    long: "",
    names: ["Stucky brothers"]
  },
  {
    id: "woodburn-woodlan",
    name: "Woodlan schools",
    lat: 41.1242,
    lng: -84.8547,
    radius: 1200,
    short: "East Allen named the school Woodlan by taking Wood from Woodburn and lan from Milan Township. Kids from this river town and the next township share a building. Consolidation wrote the map in one word.",
    long: "",
    names: ["Woodlan"]
  },
  {
    id: "woodburn-park",
    name: "Woodburn Community Park",
    lat: 41.1255,
    lng: -84.8560,
    radius: 700,
    short: "Woodburn Community Park on Front and Overmeyer is the public ground: diamonds, playground, picnic tables. A fifth-class city still keeps a park. That is the civic sentence.",
    long: "",
    names: ["Woodburn Community Park"]
  },
  {
    id: "woodburn-native",
    name: "Maumee Township Indian river",
    lat: 41.1242,
    lng: -84.8547,
    radius: 1500,
    short: "Maumee Township organized in 1836 on Miami and Potawatomi ground. Ulrich Saylor and George Platter were among the petitioners. The river was the road. The Wabash was the second road. Edgerton's eight thousand acres were someone else's woods first.",
    long: "",
    names: ["Miami", "Potawatomi", "Ulrich Saylor"]
  }
{
    id: "approach-payne",
    name: "Payne",
    lat: 41.0797,
    lng: -84.7272,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Payne, Ohio. Detractors called it Pucker Brush. The post office was Payne before the plat was. The Nickel Plate's first passenger train rolled in October 23, 1882. If you turn in, I'll tell you Malottville and the Fourth of July fire.",
    long: "",
    names: ["Payne", "Nickel Plate Road", "Pucker Brush"]
  },
  {
    id: "payne-founding",
    name: "Payne founding",
    lat: 41.0797,
    lng: -84.7272,
    radius: 1100,
    short: "You are in Payne. Post office since 1858, likely named for Senator Henry B. Payne, a railroad man. Peter Lehman and Joseph Malott platted Malottville in 1872. Flat Rock City was the other early name. In 1882 they changed the village name to match the depot and the mail. Incorporated 1883.",
    long: "",
    names: ["Henry B. Payne", "Joseph Malott", "Peter Lehman", "Malottville"]
  },
  {
    id: "payne-nickel-plate",
    name: "Payne Nickel Plate",
    lat: 41.0805,
    lng: -84.7265,
    radius: 1000,
    short: "The New York, Chicago and St. Louis, the Nickel Plate, finished through Paulding County in 1881. First passenger train October 23, 1882. By 1884 Payne had a thousand people, three hotels, four sawmills, a stave factory, and a bucket shop. The glitter name was a sales pitch. The siding was real.",
    long: "",
    names: ["Nickel Plate Road"]
  },
  {
    id: "payne-fire-1898",
    name: "Payne Fourth of July fire",
    lat: 41.0797,
    lng: -84.7272,
    radius: 1100,
    short: "Several fires slowed Payne. The worst was July 4, 1898. Downtown businesses burned while the town was supposed to be celebrating. Wooden railroad villages learned the same lesson Edgerton and Hicksville learned. Brick came after the smoke.",
    long: "",
    names: ["1898 fire"]
  },
  {
    id: "payne-pucker-brush",
    name: "Pucker Brush",
    lat: 41.0797,
    lng: -84.7272,
    radius: 1200,
    short: "Outsiders called Payne Pucker Brush, a swipe at a raw clearing in the old swamp timber. Locals kept the name in the joke drawer. A town that outlived the insult still tells it, which means the insult worked its way into the story.",
    long: "",
    names: ["Pucker Brush"]
  },
  {
    id: "payne-paper",
    name: "Payne Star",
    lat: 41.0797,
    lng: -84.7272,
    radius: 1100,
    short: "The Payne Star printed in 1883, the year of the plat. It became the Independent, then the Review, then the Reflector, then folded into the Paulding Progress. A village this size kept a paper for decades. That is how you know the depot mattered.",
    long: "",
    names: ["Payne Star", "Payne Reflector"]
  },
  {
    id: "payne-speed",
    name: "Payne eight mile speed limit",
    lat: 41.0797,
    lng: -84.7272,
    radius: 900,
    short: "When they paved Main, only half as wide as today, the village set eight miles an hour through the business district. Local sports were running horses and buggies too fast. The railroad brought the people. The people brought the need for a speed limit.",
    long: "",
    names: []
  },
  {
    id: "payne-park",
    name: "Payne Community Park",
    lat: 41.0815,
    lng: -84.7285,
    radius: 700,
    short: "Payne Community Park came out of the 1972 centennial. They buried a time capsule by the flagpole, then another at the sesquicentennial, due to be opened in 2072. Public ground paid for by a party. That is small-town civic math.",
    long: "",
    names: ["Payne Community Park"]
  },
  {
    id: "payne-war",
    name: "Payne Civil War generation",
    lat: 41.0797,
    lng: -84.7272,
    radius: 1200,
    short: "The post office is older than the village. Men from these farms were already in Union blue before Malottville had a street. Henry B. Payne, the namesake, equipped Ohio regiments from Cleveland. The village name is a Union railroad senator on a Nickel Plate stop.",
    long: "",
    names: ["Henry B. Payne", "Civil War"]
  },
  {
    id: "payne-native",
    name: "Payne Black Swamp edge",
    lat: 41.0797,
    lng: -84.7272,
    radius: 1500,
    short: "Paulding County is the old Great Black Swamp. Miami and Potawatomi used the wet timber. Settlers ditched it. The Nickel Plate needed a dry grade through what had been water. Payne is a name on land that had to be drained before it could be platted.",
    long: "",
    names: ["Great Black Swamp", "Miami", "Potawatomi"]
  }
  {
    id: "approach-ney",
    name: "Ney",
    lat: 41.3806,
    lng: -84.5211,
    radius: 6000,
    layer: "approach",
    short: "You are coming up on Ney, Ohio, one of the shortest names in the state. Platted as Georgetown in 1846, renamed for Marshal Michel Ney, Napoleon's bravest of the brave. Ned Garver, who won twenty games for a last-place Browns team, grew up here. If you turn in, I'll tell you the rest.",
    long: "",
    names: ["Ney", "Michel Ney", "Ned Garver"]
  },
  {
    id: "ney-founding",
    name: "Ney founding",
    lat: 41.3806,
    lng: -84.5211,
    radius: 900,
    short: "You are in Ney. Settlers platted Georgetown in 1846 in Washington Township. The post office opened in 1850 as Ney, after the French marshal Michel Ney. The village kept the short name. Three letters on the water tower. That is the whole civic brand.",
    long: "",
    names: ["Georgetown Ohio", "Michel Ney"]
  },
  {
    id: "ney-marshal",
    name: "Marshal Ney",
    lat: 41.3806,
    lng: -84.5211,
    radius: 1000,
    short: "Michel Ney fought for Napoleon, led the rear guard out of Russia, and was shot after Waterloo. Ohio farmers named a swamp-edge village for him. You do not have to like emperors to like a man who would not leave his men. That is the story they wanted on the postmark.",
    long: "",
    names: ["Michel Ney", "Napoleon"]
  },
  {
    id: "ney-garver",
    name: "Ned Garver",
    lat: 41.3806,
    lng: -84.5211,
    radius: 1000,
    short: "Ned Garver came out of Ney and pitched in the majors. In 1951 he won twenty games and lost twelve for the St. Louis Browns, a last-place club. He also hit .305 that year. A village of a few hundred produced a pitcher who beat the math of a bad team.",
    long: "",
    names: ["Ned Garver", "St. Louis Browns"]
  },
  {
    id: "ney-rail",
    name: "Ney and the B and O",
    lat: 41.3806,
    lng: -84.5211,
    radius: 1100,
    short: "The Baltimore and Ohio cut across southern Defiance County in the 1870s toward Hicksville and Chicago. Ney is a Washington Township farm village on that grain map. The short name sat on a long railroad.",
    long: "",
    names: ["Baltimore and Ohio Railroad"]
  },
  {
    id: "ney-park",
    name: "Ney Community Park",
    lat: 41.3815,
    lng: -84.5220,
    radius: 600,
    short: "Ney Community Park is the public square for a village of three hundred. Reservations still go through the village phone. That is how small civic life works when there is no opera house left to argue over.",
    long: "",
    names: ["Ney Community Park"]
  },
  {
    id: "ney-war",
    name: "Ney Civil War farms",
    lat: 41.3806,
    lng: -84.5211,
    radius: 1100,
    short: "Washington Township farms sent men in blue while the plat was still Georgetown. Defiance County's name is a fort. Ney's name is a marshal. Both are war names on agricultural ground.",
    long: "",
    names: ["Civil War"]
  },
  {
    id: "ney-native",
    name: "Washington Township Indian ground",
    lat: 41.3806,
    lng: -84.5211,
    radius: 1400,
    short: "This township sits in the old Maumee country of the Miami and Potawatomi. Georgetown was platted after the removals and after Defiance County split from Williams in 1845. A French marshal's name on Ohio dirt is the last layer, not the first.",
    long: "",
    names: ["Miami", "Potawatomi"]
  }
  {
    id: "approach-edon",
    name: "Edon",
    lat: 41.5561,
    lng: -84.7694,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Edon, Ohio, at 34 and 49, two miles from Indiana. They called it Mudsock, then Sheline's Mills, then Weston, then Edon with an O nobody can explain. The Wabash arrived in 1881. If you turn in, I'll tell you Andrew Sheline and the woolen mill.",
    long: "",
    names: ["Edon", "Mudsock", "Andrew Sheline"]
  },
  {
    id: "edon-founding",
    name: "Edon founding",
    lat: 41.5561,
    lng: -84.7694,
    radius: 1100,
    short: "You are in Edon. Henry Stuller, John Garwood, and Thomas Smith were on this ground by 1850. Andrew Sheline built a cabin and sawmill about 1855. Twelve landowners platted Weston in 1867. The post office could not be Weston because Wood County already had one. They chose Edon. Incorporated 1874.",
    long: "",
    names: ["Andrew Sheline", "Weston Ohio"]
  },
  {
    id: "edon-mudsock",
    name: "Mudsock",
    lat: 41.5561,
    lng: -84.7694,
    radius: 1100,
    short: "Sylvanus Garwood nicknamed the place Mudsock because the streets painted your boots. Ohio had several Mudsocks. This one kept the joke and lost the name. A village that started in gumbo still tells the story every time a stranger asks how to spell Edon.",
    long: "",
    names: ["Mudsock", "Sylvanus Garwood"]
  },
  {
    id: "edon-wabash",
    name: "Edon Wabash",
    lat: 41.5550,
    lng: -84.7685,
    radius: 1000,
    short: "The Wabash came through Williams County in 1880 and 1881 and touched Montpelier, Edon, West Unity, and Kunkle. Hotels went up on the boom. Grain elevators still mark the south side of town. 34 and 49 cross here because farm traffic and rail traffic needed the same corner.",
    long: "",
    names: ["Wabash Railroad"]
  },
  {
    id: "edon-sheline",
    name: "Andrew Sheline",
    lat: 41.5561,
    lng: -84.7694,
    radius: 1100,
    short: "Andrew Sheline came from Pennsylvania by way of Carroll County. Carpenter, farmer, merchant. He built the first dry goods store, cabinet shop, doctor's office for Ezra Mann, a hotel, a gristmill, and a woolen factory. Edon is one man's bet that a muddy corner could hold a town.",
    long: "",
    names: ["Andrew Sheline", "Ezra Mann"]
  },
  {
    id: "edon-mill",
    name: "Edon mills",
    lat: 41.5561,
    lng: -84.7694,
    radius: 1000,
    short: "Sheline's mill and later the Hissong mill and the woolen factory made Florence Township more than a crossroads. Woodwork and wool were each worth thousands a year. When the Hissong mill burned they rebuilt. That is how you know the siding still mattered.",
    long: "",
    names: ["Hissong mill"]
  },
  {
    id: "edon-florence",
    name: "Florence Township",
    lat: 41.5561,
    lng: -84.7694,
    radius: 1300,
    short: "This is Florence Township. David Singer was the first white child born here. His people came in 1837. The township name sat on the first post office at Luke's Corners, a mile northeast, before the office moved into Weston and forced the Edon spelling.",
    long: "",
    names: ["Florence Township", "David Singer"]
  },
  {
    id: "edon-war",
    name: "Edon Civil War",
    lat: 41.5561,
    lng: -84.7694,
    radius: 1100,
    short: "The plat is 1867, after the war. Florence Township men were already gone with Ohio regiments. Dr. Francis Hoeger of this township served in the 38th Ohio. The village incorporated in the peace. The farms had already paid the bill.",
    long: "",
    names: ["38th Ohio", "Francis Hoeger"]
  },
  {
    id: "edon-native",
    name: "Edon Indian ground",
    lat: 41.5561,
    lng: -84.7694,
    radius: 1500,
    short: "Northwest Williams County is old Potawatomi and Miami country on the way to the St. Joseph and the Michigan line. Mudsock was the settler name for land that had to be ditched. The Wabash did not invent this corner. It only dried it out enough for a depot.",
    long: "",
    names: ["Potawatomi", "Miami"]
  }
{
    id: "approach-waterloo",
    name: "Waterloo",
    lat: 41.4306,
    lng: -85.0233,
    radius: 8000,
    layer: "approach",
    short: "You are coming up on Waterloo, Indiana. This is still an Amtrak stop. Capitol Limited and Lake Shore Limited. The 1883 wooden depot survived a demolition order. Miles Waterman would not let them name the town Waterman, so they said Waterloo City. If you turn in, I'll tell you Uniontown and the mastodon.",
    long: "",
    names: ["Waterloo", "Amtrak", "Miles Waterman"]
  },
  {
    id: "waterloo-founding",
    name: "Waterloo founding",
    lat: 41.4306,
    lng: -85.0233,
    radius: 1300,
    short: "You are in Waterloo. Uniontown sat on Cedar Creek in 1838. When the Air Line railroad chose the south bank, John Hornberger and Miles Waterman platted Waterloo City on March 14, 1856. First building was a railroad office. Incorporated 1863. They dropped City in 1871. For a while this town was bigger than Auburn.",
    long: "",
    names: ["Uniontown", "John Hornberger", "Miles Waterman"]
  },
  {
    id: "waterloo-airline",
    name: "Waterloo Air Line",
    lat: 41.4315,
    lng: -85.0220,
    radius: 1100,
    short: "The Michigan Southern Air Line reached here in 1856 and 1857. First passenger office was a boxcar beside the track. The Fort Wayne, Jackson and Saginaw crossed in 1870. Both became Lake Shore and Michigan Southern, then New York Central, then Norfolk Southern. The trains never really left.",
    long: "",
    names: ["Michigan Southern Air Line", "Lake Shore and Michigan Southern"]
  },
  {
    id: "waterloo-depot",
    name: "Waterloo depot",
    lat: 41.4316,
    lng: -85.0205,
    radius: 700,
    short: "The wooden depot went up in 1883 with separate waiting rooms for men and women. Freight railroad wanted it gone. In 1984 the town moved it a thousand feet and saved it. Amtrak came back. In 2016 they cut a ribbon on the restored station. A small town kept the only passenger stop in northeast Indiana.",
    long: "",
    names: ["Waterloo depot"]
  },
  {
    id: "waterloo-waterman",
    name: "Miles Waterman",
    lat: 41.4306,
    lng: -85.0233,
    radius: 1200,
    short: "Settlers wanted to name the plat Waterman. Miles Waterman owned land on both sides of the track and said no. Waterloo City was the compromise, maybe a nod to the Belgian battle, maybe just a name that would stick on a timetable. The man refused the honor and still got the town.",
    long: "",
    names: ["Miles Waterman"]
  },
  {
    id: "waterloo-mastodon",
    name: "Waterloo mastodon",
    lat: 41.4306,
    lng: -85.0233,
    radius: 1300,
    short: "In 1888 they found a nearly complete mastodon skeleton near Waterloo. The town already had a brick yard, pottery, and mills. Then the ground gave up an elephant. Railroad towns collect whatever the cut exposes.",
    long: "",
    names: ["mastodon"]
  },
  {
    id: "waterloo-hine",
    name: "Jane L. Hine",
    lat: 41.4306,
    lng: -85.0233,
    radius: 1100,
    short: "Jane L. Brooks Hine of Waterloo has an Indiana state historical marker, placed in 2023. A farm-and-depot town finally put a woman's name on the official list. Stop at the marker if you want the long version. The short version is that Waterloo kept more than track.",
    long: "",
    names: ["Jane L. Hine"]
  },
  {
    id: "waterloo-cedar",
    name: "Cedar Creek Waterloo",
    lat: 41.4330,
    lng: -85.0240,
    radius: 1100,
    short: "Cedar Creek drew Uniontown first. Wesley Parks, first road commissioner in DeKalb County, organized that village where 427 meets the water. The railroad stole the population south. The creek is still the reason anyone stopped here before steel.",
    long: "",
    names: ["Cedar Creek", "Wesley Parks"]
  },
  {
    id: "waterloo-war",
    name: "Waterloo Civil War town",
    lat: 41.4306,
    lng: -85.0233,
    radius: 1200,
    short: "Waterloo incorporated in 1863, in the middle of the war. The Air Line was already moving men and grain. The community mausoleum later went on the National Register. A railroad town buried its dead in stone when wood would not last.",
    long: "",
    names: ["Civil War", "Waterloo Community Mausoleum"]
  },
  {
    id: "waterloo-native",
    name: "Waterloo Indian creek",
    lat: 41.4306,
    lng: -85.0233,
    radius: 1500,
    short: "Cedar Creek was Miami and Potawatomi water. Uniontown sat on a trading path. The Air Line froze the crossing a half mile south. Waterloo is the railroad name for a creek town that moved.",
    long: "",
    names: ["Miami", "Potawatomi", "Cedar Creek"]
  }
 {
    id: "approach-hamilton-in",
    name: "Hamilton Indiana",
    lat: 41.5333,
    lng: -84.9208,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Hamilton, Indiana, a lake town on the Steuben and DeKalb line. First they called it Enterprise. Fever ruined the name. Sidney Gambia sold lots as Hamilton. The Wabash later dropped visitors at a depot and they took a boat to the resorts. If you turn in, I'll tell you Cold Springs and Magic by the Lake.",
    long: "",
    names: ["Hamilton Indiana", "Hamilton Lake", "Sidney Gambia"]
  },
  {
    id: "hamilton-founding",
    name: "Hamilton founding",
    lat: 41.5333,
    lng: -84.9208,
    radius: 1200,
    short: "You are in Hamilton. Nicanor Munson entered the outlet of the lake in 1836 and sold to New York money calling itself the Steuben City Company. They platted Enterprise. Illness hit in 1838. To wash the reputation they renamed it Hamilton in 1844. First post office in Steuben County sat here. Incorporated 1914.",
    long: "",
    names: ["Nicanor Munson", "Enterprise Indiana", "Sidney Gambia"]
  },
  {
    id: "hamilton-lake",
    name: "Hamilton Lake",
    lat: 41.5360,
    lng: -84.9180,
    radius: 1500,
    short: "The town is the lake. Ice cut here filled boxes down the line. Dams at the outlet ran a mill, then a generator that gave Hamilton its first lights. Steuben County has more lakes per mile than any county in Indiana. This one got the depot and the dance hall.",
    long: "",
    names: ["Hamilton Lake"]
  },
  {
    id: "hamilton-wabash",
    name: "Hamilton Wabash depot",
    lat: 41.5310,
    lng: -84.9220,
    radius: 1000,
    short: "The Wabash stopped here in 1893. Guests left the train, took a carriage to the docks, and rode the Mildred or the Valle May to the resorts. A railroad that hauled grain also hauled Saturday night. That is how a mill pond became a destination.",
    long: "",
    names: ["Wabash Railroad"]
  },
  {
    id: "hamilton-cold-springs",
    name: "Cold Springs",
    lat: 41.5400,
    lng: -84.9100,
    radius: 900,
    short: "Cold Springs Hotel went up around 1897. William Jennings Bryan spoke from the porch in 1900. The GAR picnic in 1887 drew a claimed ten thousand. Glen Miller and the Dorseys played the hall. Edward Eager vacationed here as a boy and put the lake in Magic by the Lake.",
    long: "",
    names: ["Cold Springs", "William Jennings Bryan", "Edward Eager"]
  },
  {
    id: "hamilton-eager",
    name: "Edward Eager",
    lat: 41.5333,
    lng: -84.9208,
    radius: 1200,
    short: "Edward Eager wrote children's books that treat magic as a serious local problem. He summered on this lake in the 1920s and used the hotel and the water. A resort town got into print without changing its name again.",
    long: "",
    names: ["Edward Eager"]
  },
  {
    id: "hamilton-house",
    name: "Hamilton House",
    lat: 41.5345,
    lng: -84.9190,
    radius: 700,
    short: "They surveyed a Canadian Southern railroad that never came. Dr. Petre still built a three-story hospital on the south shore for shops that were never built. It became apartments, then the Hamilton House. A failed railroad left the best building on the water.",
    long: "",
    names: ["Hamilton House"]
  },
  {
    id: "hamilton-war",
    name: "Hamilton Civil War county",
    lat: 41.5333,
    lng: -84.9208,
    radius: 1200,
    short: "Steuben County organized in 1837, named for Baron von Steuben. Hamilton's post office is older than the county seat's reputation. Union men left these farms. The GAR came back for the picnic. The lake kept the reunion.",
    long: "",
    names: ["Baron von Steuben", "Grand Army of the Republic"]
  },
  {
    id: "hamilton-native",
    name: "Hamilton Indian lake",
    lat: 41.5360,
    lng: -84.9180,
    radius: 1600,
    short: "Potawatomi and Miami used these kettle lakes. Local story said a monster in the dells wrecked canoes. That is settler language for water they did not yet own. Pokagon country is north. This outlet is where New York money put a mill on someone else's shore.",
    long: "",
    names: ["Potawatomi", "Miami"]
  }
 {
    id: "approach-leo-cedarville",
    name: "Leo-Cedarville",
    lat: 41.2150,
    lng: -85.0156,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Leo-Cedarville, two villages that married in 1996 so Fort Wayne could not annex them. Cedarville was platted in 1838 on the St. Joseph. Leo started as Hamilton in 1849. Jacob Notestine bought trees from Johnny Appleseed. If you turn in, I'll tell you the landing and the dam.",
    long: "",
    names: ["Leo-Cedarville", "Johnny Appleseed", "Cedarville"]
  },
  {
    id: "leo-founding",
    name: "Leo-Cedarville founding",
    lat: 41.2150,
    lng: -85.0156,
    radius: 1400,
    short: "You are in Leo-Cedarville. Cedar Creek Township sat empty after the removals until Mr. Wood built a cabin in 1833. Jacob Notestine and John Manning planted corn in 1834. William G. Ewing platted Cedarville in 1838 with a public square and a river landing. Leo, first called Hamilton, was platted in 1849 for the bridge to Grabill.",
    long: "",
    names: ["William G. Ewing", "Jacob Notestine", "John Manning"]
  },
  {
    id: "leo-appleseed",
    name: "Notestine orchard",
    lat: 41.2150,
    lng: -85.0156,
    radius: 1200,
    short: "In 1836 Jacob Notestine planted the first orchard here with trees bought from John Chapman, Johnny Appleseed. Fort Wayne already claims the grave. Cedar Creek Township claims the nursery sale. That is how a saint of the nurseries shows up in two towns at once.",
    long: "",
    names: ["Johnny Appleseed", "John Chapman", "Jacob Notestine"]
  },
  {
    id: "cedarville-landing",
    name: "Cedarville landing",
    lat: 41.2180,
    lng: -85.0120,
    radius: 900,
    short: "Ewing reserved ground on the east side of Main, against the St. Joseph, for boats. By 1860 Cedarville had stores, a shingle mill, sawmill, gristmill, and a wagon maker. The river was the first railroad. The landing is why the plat faces the water.",
    long: "",
    names: ["St. Joseph River"]
  },
  {
    id: "leo-st-leos",
    name: "St. Leo church",
    lat: 41.2125,
    lng: -85.0165,
    radius: 800,
    short: "St. Bonifacius built in the village of Hamilton in 1856 and later took the name St. Leo. The town followed the church. Leo is a parish name that stuck to a bridge town.",
    long: "",
    names: ["St. Leo"]
  },
  {
    id: "leo-merge",
    name: "1996 incorporation",
    lat: 41.2150,
    lng: -85.0156,
    radius: 1400,
    short: "Growth in the nineties brought the threat of Fort Wayne annexation. Leo and Cedarville incorporated together in 1996 to keep their own council. A hyphen is a legal weapon. Two nineteenth-century plats became one town so the city could not swallow them.",
    long: "",
    names: ["Fort Wayne"]
  },
  {
    id: "cedarville-dam",
    name: "Cedarville Reservoir",
    lat: 41.2200,
    lng: -85.0300,
    radius: 1200,
    short: "Cedarville Dam went across the St. Joseph in 1956, 135 feet wide and thirty high. It made a 500-million-gallon reserve for Fort Wayne and a reservoir for fishing. A farm township became a water tank for the city it later refused to join.",
    long: "",
    names: ["Cedarville Reservoir", "Cedarville Dam"]
  },
  {
    id: "leo-bridge",
    name: "Leo Grabill bridge",
    lat: 41.2130,
    lng: -85.0140,
    radius: 800,
    short: "Leo mattered because of the bridge over the St. Joseph toward Grabill. Pioneers could trade in both villages without a ford. Hursh Road Bridge later made the National Register, then came off the list. The crossing outlasted the paperwork.",
    long: "",
    names: ["Grabill", "Hursh Road Bridge"]
  },
  {
    id: "leo-war",
    name: "Cedar Creek Civil War",
    lat: 41.2150,
    lng: -85.0156,
    radius: 1300,
    short: "These farms sent men after 1861. The plats are older than the war. The hyphen town is new. The river and the orchard are the old parts.",
    long: "",
    names: ["Civil War"]
  },
  {
    id: "leo-native",
    name: "Cedar Creek Indian ground",
    lat: 41.2150,
    lng: -85.0156,
    radius: 1600,
    short: "The town history says the township was empty from the time the Indians left in 1817 until Wood's cabin. That sentence is the removal. Miami and Potawatomi used the St. Joseph and Cedar Creek. The landing sits on their water.",
    long: "",
    names: ["Miami", "Potawatomi"]
  }
  {
    id: "approach-montpelier",
    name: "Montpelier",
    lat: 41.5845,
    lng: -84.6055,
    radius: 8000,
    layer: "approach",
    short: "You are coming up on Montpelier, Ohio. They said as the Wabash goes, so goes Montpelier. The high school is still the Locomotives. A mill on the St. Joseph became a roundhouse town. If you turn in, I'll tell you Bryner, Tucker, and the Cannonball trail.",
    long: "",
    names: ["Montpelier", "Wabash Railroad", "Wabash Cannonball"]
  },
  {
    id: "montpelier-founding",
    name: "Montpelier founding",
    lat: 41.5845,
    lng: -84.6055,
    radius: 1300,
    short: "You are in Montpelier. John K. Bryner and Jesse Tucker built a mill on a bend of the St. Joseph in 1845 and surveyed 41 lots and a square south of it. A doctor riding with the surveyor named it for Montpelier, Vermont. Incorporated 1874 after a railroad that never came. The one that did come changed everything.",
    long: "",
    names: ["John K. Bryner", "Jesse Tucker"]
  },
  {
    id: "montpelier-wabash",
    name: "Montpelier Wabash",
    lat: 41.5820,
    lng: -84.6070,
    radius: 1200,
    short: "The Detroit, Butler and St. Louis, later the Wabash, hit town in 1880 and 1881. Population tripled in ten years. In 1892 they bought twenty acres for a roundhouse. Shops moved here from Ashley, Indiana, in 1907. Division offices in 1917. Four hundred railroad jobs in 1936. The motto was not poetry. It was payroll.",
    long: "",
    names: ["Wabash Railroad"]
  },
  {
    id: "montpelier-depot",
    name: "Montpelier depot",
    lat: 41.5830,
    lng: -84.6060,
    radius: 800,
    short: "In 1895 the Wabash hired Theodore C. Link, architect of St. Louis Union Station, to design the passenger depot. A village of a few thousand got big-city architecture because the junction mattered. Last passenger train, 1971. The building outlasted the timetable.",
    long: "",
    names: ["Theodore C. Link"]
  },
  {
    id: "montpelier-cannonball",
    name: "Wabash Cannonball Trail",
    lat: 41.5845,
    lng: -84.6055,
    radius: 1400,
    short: "The Wabash Cannonball is a trail now. Montpelier is the western head. Rails to trails bought the grade after the passengers stopped. School buildings still echo the roundhouse. The mascot did not change when the steam died.",
    long: "",
    names: ["Wabash Cannonball Trail"]
  },
  {
    id: "montpelier-paper",
    name: "Montpelier Enterprise",
    lat: 41.5845,
    lng: -84.6055,
    radius: 1100,
    short: "The Montpelier Enterprise printed its first issue September 20, 1880, the year the railroad arrived. It still publishes as the Leader-Enterprise. A boomtown paper that did not fold when the shops thinned out.",
    long: "",
    names: ["Leader-Enterprise"]
  },
  {
    id: "montpelier-veterans",
    name: "Williams County Veterans Memorial",
    lat: 41.5840,
    lng: -84.5900,
    radius: 800,
    short: "The Williams County Veterans Memorial sits by the fairgrounds on the east side. Private money. All wars. A railroad county that sent men and then carved their names in stone beside the livestock barns.",
    long: "",
    names: ["Williams County Veterans Memorial"]
  },
  {
    id: "montpelier-war",
    name: "Montpelier Civil War mill town",
    lat: 41.5845,
    lng: -84.6055,
    radius: 1300,
    short: "The mill predates the war. The boom comes after. Superior Township farms sent companies. The village that wanted to be county seat ended up a division point instead.",
    long: "",
    names: ["Civil War"]
  },
  {
    id: "montpelier-native",
    name: "Montpelier Indian camp",
    lat: 41.5860,
    lng: -84.6040,
    radius: 1500,
    short: "Native camps sat near this bend of the St. Joseph before the mill. Wyandot and Shawnee country on paper, Miami and Potawatomi on the ground. Bryner and Tucker put a dam on a river that already had a name.",
    long: "",
    names: ["St. Joseph River", "Wyandot", "Potawatomi"]
  }
{
    id: "approach-west-unity",
    name: "West Unity",
    lat: 41.5889,
    lng: -84.4303,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on West Unity, Ohio. John Rings and William L. Smith platted it in 1842 and named it after Pleasant Unity, Pennsylvania. Two railroads later. Horse thief society in between. If you turn in, I'll tell you the plank road and the woolen mill.",
    long: "",
    names: ["West Unity", "John Rings"]
  },
  {
    id: "west-unity-founding",
    name: "West Unity founding",
    lat: 41.5889,
    lng: -84.4303,
    radius: 1200,
    short: "You are in West Unity. Surveyed June 14, 1842, for John Rings and William L. Smith in Brady Township. Post office the same year. Incorporated 1866, first mayor H. H. Peppard. They put West on the name so no one would confuse it with the Pennsylvania original.",
    long: "",
    names: ["John Rings", "William L. Smith", "H. H. Peppard"]
  },
  {
    id: "west-unity-plank",
    name: "West Unity plank road",
    lat: 41.5889,
    lng: -84.4303,
    radius: 1100,
    short: "The plank road west of Toledo came through in 1850. Covered wagons headed west on it every day. Before the rails, this was the highway. When the Air Line reached Stryker they ran a hack and then a sixteen-year mail contract. Unity sat on the board road first.",
    long: "",
    names: []
  },
  {
    id: "west-unity-rail",
    name: "West Unity railroads",
    lat: 41.5880,
    lng: -84.4310,
    radius: 1100,
    short: "The Wabash came in 1880 and 1881. The Cincinnati, Jackson and Mackinaw came through Bryan, Pulaski, West Unity, and Alvordton in 1887. Two grades through a village named for a Pennsylvania town. That is how Brady Township got a skyline.",
    long: "",
    names: ["Wabash Railroad", "Cincinnati Jackson and Mackinaw"]
  },
  {
    id: "west-unity-horse",
    name: "West Unity Horse Thief Society",
    lat: 41.5889,
    lng: -84.4303,
    radius: 1100,
    short: "Brady Township kept a Horse Thief Society. Farm counties did that when the sheriff was a day's ride. Neighbors signed a paper and rode after stolen stock. The society is in the old county history next to the churches. That tells you what scared them more than weather.",
    long: "",
    names: ["Horse Thief Society"]
  },
  {
    id: "west-unity-woolen",
    name: "West Unity Woolen Mills",
    lat: 41.5889,
    lng: -84.4303,
    radius: 1000,
    short: "West Unity Woolen Mills put mill jobs on a grain map. Crew photos from Devil's Lake picnics still exist. A village that started on planks learned to card wool when the trains made freight cheap.",
    long: "",
    names: ["West Unity Woolen Mills"]
  },
  {
    id: "west-unity-dodge",
    name: "Dodge Hotel",
    lat: 41.5885,
    lng: -84.4295,
    radius: 600,
    short: "Sid Palmer Dodge built the Dodge Hotel in 1889 after the wood hotel burned. Brick on Jackson Street. Railroad towns replace the inn every time fire wins. The shell is still in the street photos.",
    long: "",
    names: ["Dodge Hotel"]
  },
  {
    id: "west-unity-crary",
    name: "Rev. N. Crary",
    lat: 41.5889,
    lng: -84.4303,
    radius: 1100,
    short: "Rev. N. Crary of Hicksville preached Universalist sermons here as early as 1846 and organized the first church in town. A Hicksville minister on the Unity square. The two villages have been talking to each other longer than the Wabash has.",
    long: "",
    names: ["N. Crary", "Hicksville"]
  },
  {
    id: "west-unity-war",
    name: "West Unity veterans",
    lat: 41.5889,
    lng: -84.4308,
    radius: 800,
    short: "The West Unity Veterans Memorial stands on West Jackson at 127. Brady Township sent companies. The roll of honor is in the old history. Stone on the main drag is the short version.",
    long: "",
    names: ["West Unity Veterans Memorial"]
  },
  {
    id: "west-unity-native",
    name: "Brady Township Indian ground",
    lat: 41.5889,
    lng: -84.4303,
    radius: 1500,
    short: "Williams County is named for a Revolutionary captor of Major André. The dirt is older. Potawatomi and Miami used this rise before Rings and Smith drew lots. West Unity is a Pennsylvania name on their hunting ground.",
    long: "",
    names: ["Potawatomi", "Miami"]
  }
  {
    id: "approach-pioneer",
    name: "Pioneer",
    lat: 41.6789,
    lng: -84.5508,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Pioneer, Ohio. P.W. Norris could not name the post office after himself so he named it Pioneer. Later he ran Yellowstone and found Norris Pass. An interurban from Toledo died here instead of reaching Chicago. If you turn in, I'll tell you the spy and the pickle vats.",
    long: "",
    names: ["Pioneer", "P.W. Norris", "Yellowstone"]
  },
  {
    id: "pioneer-founding",
    name: "Pioneer founding",
    lat: 41.6789,
    lng: -84.5508,
    radius: 1200,
    short: "You are in Pioneer. P.W. Norris and Owen McCarty cleared James Rogers's land in 1842. Norris slashed a trail to Fayette to bring Jane Cottrill home. He became postmaster in 1850, lost the naming fight, and called the town Pioneer. Streets in 1853. Hotel 1854. He and G.R. Joy, brothers-in-law, raced to make opposite sides of town richer.",
    long: "",
    names: ["P.W. Norris", "Owen McCarty", "G.R. Joy"]
  },
  {
    id: "pioneer-norris",
    name: "Philetus W. Norris",
    lat: 41.6789,
    lng: -84.5508,
    radius: 1200,
    short: "Philetus Walter Norris was a Civil War spy, then the second superintendent of Yellowstone. Norris Pass carries his name. An Ohio Historical marker on State Street says so. A Madison Township postmaster ended up writing the map of a national park.",
    long: "",
    names: ["Philetus W. Norris", "Norris Pass"]
  },
  {
    id: "pioneer-interurban",
    name: "Toledo and Western",
    lat: 41.6780,
    lng: -84.5515,
    radius: 1000,
    short: "The Toledo and Western electric line reached Pioneer in 1903 on its way to a Chicago that never happened. Right of way bought, rails stopped here. Passengers until 1933. Freight as the Pioneer and Fayette until 1943. Formal abandonment 1991. The last stop on a dream railroad.",
    long: "",
    names: ["Toledo and Western Railway", "Pioneer and Fayette Railroad"]
  },
  {
    id: "pioneer-snyder",
    name: "Earl Snyder railroad",
    lat: 41.6789,
    lng: -84.5508,
    radius: 1100,
    short: "After the Depression killed the interurban, store owner Earl Snyder ran what was left and landed in Ripley's Believe It or Not. A village merchant as railroad president. He switched to trucks in 1954. That is how a terminus stays a town.",
    long: "",
    names: ["Earl Snyder"]
  },
  {
    id: "pioneer-mills",
    name: "Pioneer mills and vats",
    lat: 41.6775,
    lng: -84.5500,
    radius: 900,
    short: "South of the creek sat the wool market, pickle vats, stockyards, flour mill, grist mill, and hoop mill. The interurban made Toledo a same-day customer. Parking lot and fire hall cover the vats now. The smell is gone. The story is not.",
    long: "",
    names: []
  },
  {
    id: "pioneer-war",
    name: "Pioneer Civil War",
    lat: 41.6789,
    lng: -84.5508,
    radius: 1100,
    short: "The founder was a Union spy. The marker says it on State Street. Madison Township farms sent the rest. Veterans memorial and a 9-11 memorial sit in the same small grid. Pioneer keeps the word on the water tower and on the stone.",
    long: "",
    names: ["Civil War"]
  },
  {
    id: "pioneer-native",
    name: "Madison Township Indian ground",
    lat: 41.6789,
    lng: -84.5508,
    radius: 1500,
    short: "North Williams County is Michigan-line country. Potawatomi and Miami used these creeks before Rogers hired the clearing crew. Pioneer is a boast on a map that used to have other names.",
    long: "",
    names: ["Potawatomi", "Miami"]
  }
 {
    id: "approach-ashley-in",
    name: "Ashley Indiana",
    lat: 41.5214,
    lng: -85.0614,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Ashley, Indiana, a town the Wabash invented on July 18, 1892, and named for its president, Ossian D. Ashley. State Road 4 is the county line. DeKalb south, Steuben north. If you turn in, I'll tell you the yards and why the shops left for Montpelier.",
    long: "",
    names: ["Ashley Indiana", "Ossian D. Ashley", "Wabash Railroad"]
  },
  {
    id: "ashley-founding",
    name: "Ashley founding",
    lat: 41.5214,
    lng: -85.0614,
    radius: 1200,
    short: "You are in Ashley. The Indiana Improvement Company bought the ground. The Wabash platted and incorporated the town the same day, July 18, 1892. Streets face the tracks. Population jumped over a thousand by 1900, then fell when the division point moved. A company town on a county line.",
    long: "",
    names: ["Indiana Improvement Company"]
  },
  {
    id: "ashley-ossian",
    name: "Ossian D. Ashley",
    lat: 41.5214,
    lng: -85.0614,
    radius: 1100,
    short: "Ossian D. Ashley ran the Wabash from 1889. They put his name on a yard town the way other roads put a vice president on a water tank. He never had to live here. The crews did.",
    long: "",
    names: ["Ossian D. Ashley"]
  },
  {
    id: "ashley-shops",
    name: "Ashley shops to Montpelier",
    lat: 41.5230,
    lng: -85.0600,
    radius: 1000,
    short: "Ashley was a Wabash Detroit-division point until 1907. Then the railroad moved the shops to Montpelier, Ohio. Census dropped from 1,040 to 639. You can still hear that transfer in both towns. One lost the payroll. One gained the motto.",
    long: "",
    names: ["Montpelier"]
  },
  {
    id: "ashley-county-line",
    name: "Ashley county line",
    lat: 41.5214,
    lng: -85.0614,
    radius: 1100,
    short: "State Street is State Road 4 and the DeKalb–Steuben line. Two counties, one depot. Hudson sits against the west corporate limit. A railroad did not care which courthouse got the taxes.",
    long: "",
    names: ["Hudson Indiana"]
  },
  {
    id: "ashley-lights",
    name: "Ashley electric plant",
    lat: 41.5214,
    lng: -85.0614,
    radius: 1000,
    short: "By 1895 Ashley had an electric light plant. Three years old and already lit. Railroad towns installed power the way they installed sidings. Night work paid.",
    long: "",
    names: []
  },
  {
    id: "ashley-war",
    name: "Ashley after the war",
    lat: 41.5214,
    lng: -85.0614,
    radius: 1200,
    short: "The plat is 1892. The Civil War was already in the ground of these two counties. Ashley is a Gilded Age stamp on older farms. The veterans were the fathers of the first section crews.",
    long: "",
    names: ["Civil War"]
  },
  {
    id: "ashley-native",
    name: "Ashley Indian ground",
    lat: 41.5214,
    lng: -85.0614,
    radius: 1500,
    short: "This county-line rise is old Potawatomi and Miami country on the way to the lakes. The Wabash did not ask. It graded.",
    long: "",
    names: ["Potawatomi", "Miami"]
  }
{
    id: "approach-hudson-in",
    name: "Hudson Indiana",
    lat: 41.5319,
    lng: -85.0842,
    radius: 6000,
    layer: "approach",
    short: "You are coming up on Hudson, Indiana, against Ashley's west line. The plat is North Benton. The post office is Hudson. They bet on the Canada Southern. The grade got built. The trains did not. If you turn in, I'll tell you Elizabeth Clark and the mill.",
    long: "",
    names: ["Hudson Indiana", "North Benton"]
  },
  {
    id: "hudson-founding",
    name: "Hudson founding",
    lat: 41.5319,
    lng: -85.0842,
    radius: 1000,
    short: "You are in Hudson. Joseph and John Miller put a sawmill here in 1855 and people called it Millersburg. Elizabeth Clark and others platted North Benton on August 14, 1869. Post office became Hudson in 1875. Incorporated 1892, the same year Ashley was born next door.",
    long: "",
    names: ["Elizabeth Clark", "North Benton"]
  },
  {
    id: "hudson-canada-southern",
    name: "Hudson Canada Southern",
    lat: 41.5310,
    lng: -85.0835,
    radius: 1000,
    short: "In 1873 Leander Brugh cut twenty-two acres into lots because the Chicago and Canada Southern was grading. Lots sold. The railroad never ran. Hudson did not collapse the way some paper towns did. It just stayed small on a roadbed with no timetable.",
    long: "",
    names: ["Leander Brugh", "Canada Southern"]
  },
  {
    id: "hudson-mail",
    name: "Hudson mail",
    lat: 41.5319,
    lng: -85.0842,
    radius: 1000,
    short: "First mail came twice a week from Waterloo, then by dray from Summit. Ira Allerton was postmaster in 1868 under the old name. David Ferrier took Hudson in 1875. A village lived on someone else's railroad until it got its own stamp.",
    long: "",
    names: ["Waterloo"]
  },
  {
    id: "hudson-mill",
    name: "Hudson Roller Mill",
    lat: 41.5319,
    lng: -85.0842,
    radius: 900,
    short: "Alexander Fullerton hauled a whole grist mill from Fostoria, Ohio, in 1866. Hudson Roller Mill, Fullerton and Ferguson. Before the failed railroad, grain was the bet. After the failed railroad, grain was still the bet.",
    long: "",
    names: ["Alexander Fullerton"]
  },
  {
    id: "hudson-war",
    name: "Hudson Civil War farms",
    lat: 41.5319,
    lng: -85.0842,
    radius: 1100,
    short: "The mill is 1855. The plat is 1869. Steuben County had already sent companies. Hudson is a reconstruction village on a hoped-for grade.",
    long: "",
    names: ["Civil War"]
  },
  {
    id: "hudson-native",
    name: "Hudson Indian ground",
    lat: 41.5319,
    lng: -85.0842,
    radius: 1400,
    short: "Salem and Steuben townships sit in old Potawatomi country toward the Michigan line. North Benton is a settler overlay. The mill creek had an older use.",
    long: "",
    names: ["Potawatomi"]
  }
 {
    id: "approach-fremont-in",
    name: "Fremont Indiana",
    lat: 41.7281,
    lng: -84.9397,
    radius: 8000,
    layer: "approach",
    short: "You are coming up on Fremont, Indiana, on the old Vistula Trail, now 120, four miles from I-69 and the Toll Road. Willow Prairie, then Brockville, then Fremont for the Pathfinder. Six passenger trains a day once. If you turn in, I'll tell you the pump and Pokagon.",
    long: "",
    names: ["Fremont Indiana", "John C. Frémont", "Vistula Trail"]
  },
  {
    id: "fremont-founding",
    name: "Fremont founding",
    lat: 41.7281,
    lng: -84.9397,
    radius: 1300,
    short: "You are in Fremont. Settled 1834 as Willow Prairie. Platted Brockville 1837. Jeremiah Tillotson renamed it Fremont in 1848 for John C. Frémont because Franklin County already had a Brockville. Incorporated 1867. The state marker stands at the old town pump on 120 and 827.",
    long: "",
    names: ["Willow Prairie", "Brockville", "Jeremiah Tillotson"]
  },
  {
    id: "fremont-vistula",
    name: "Vistula Trail",
    lat: 41.7281,
    lng: -84.9397,
    radius: 1400,
    short: "The Vistula Trail ran from Pittsburgh toward Green Bay around the foot of Lake Michigan. Detroit, Toledo, and Pittsburgh people met here going west. State Road 120 still follows it. Fremont is a trail town that later got rails.",
    long: "",
    names: ["Vistula Trail"]
  },
  {
    id: "fremont-rail",
    name: "Fremont railroad",
    lat: 41.7290,
    lng: -84.9380,
    radius: 1100,
    short: "The Fort Wayne, Jackson and Saginaw reached here in 1869. Erastus Farnam pulled the depot south with money. At the peak, two hotels and six passenger plus four freight trains a day. A prairie village became a timetable.",
    long: "",
    names: ["Fort Wayne Jackson and Saginaw"]
  },
  {
    id: "fremont-wade",
    name: "Dr. Wade hospital",
    lat: 41.7281,
    lng: -84.9397,
    radius: 1000,
    short: "Dr. Wade opened Steuben County's first hospital here in 1914. Electric lights had been in since 1895. A trail town learned modern medicine before it learned pavement. Streets were paved in 1922.",
    long: "",
    names: ["Dr. Wade"]
  },
  {
    id: "fremont-pokagon",
    name: "Pokagon from Fremont",
    lat: 41.7281,
    lng: -84.9500,
    radius: 2000,
    short: "Four miles west, Steuben County bought 580 acres on Lake James and Snow Lake in 1923 and gave them to the state. Pokagon State Park. The CCC shelter is on the National Register. Fremont is the town you drive through to get to the toboggan.",
    long: "",
    names: ["Pokagon State Park", "Lake James"]
  },
  {
    id: "fremont-houses",
    name: "Fremont historic houses",
    lat: 41.7285,
    lng: -84.9385,
    radius: 800,
    short: "The Enos Michael House on Toledo Street and the William L. Lords House on Clear Lake Road are on the National Register. 1840s and 1850s frames that outlasted the hotels.",
    long: "",
    names: ["Enos Michael House", "William L. Lords House"]
  },
  {
    id: "fremont-war",
    name: "Fremont Civil War",
    lat: 41.7281,
    lng: -84.9397,
    radius: 1200,
    short: "Incorporated two years after Appomattox. The Pathfinder's name was already on the post office. Steuben men had already gone. The park later took the veterans' grandsons on the lake.",
    long: "",
    names: ["Civil War", "John C. Frémont"]
  },
  {
    id: "fremont-native",
    name: "Fremont Potawatomi removal",
    lat: 41.7281,
    lng: -84.9397,
    radius: 1600,
    short: "The state marker says it in one line. In 1838 the Potawatomi were removed from this area. Willow Prairie was one year old. Brockville was one year old. The trail was theirs first. Pokagon's name on the park is the other half of that sentence.",
    long: "",
    names: ["Potawatomi", "Pokagon"]
  }
  {
    id: "approach-stryker",
    name: "Stryker",
    lat: 41.5000,
    lng: -84.4181,
    radius: 7000,
    layer: "approach",
    short: "You are coming up on Stryker, Ohio, first Williams County town with a railroad. Named for John Stryker of Rome, New York. William Knight stole the General in the Great Locomotive Chase and came home with a Medal of Honor. In 1966 a jet-powered railcar hit 183 through here. If you turn in, I'll tell you the pans and the depot.",
    long: "",
    names: ["Stryker", "William Knight", "John Stryker"]
  },
  {
    id: "stryker-founding",
    name: "Stryker founding",
    lat: 41.5000,
    lng: -84.4181,
    radius: 1200,
    short: "You are in Stryker. John H. Sargent, Epaphras L. Barber, and Jesse McCart surveyed 97 lots September 19, 1853, beside the proposed Michigan Southern. Recorded January 1854. Streets named Defiance, South, Church, Depot. First rail in the county. Without the survey this is still a field.",
    long: "",
    names: ["John H. Sargent", "Epaphras L. Barber", "Jesse McCart"]
  },
  {
    id: "stryker-airline",
    name: "Stryker Air Line",
    lat: 41.5010,
    lng: -84.4170,
    radius: 1100,
    short: "John Stryker and the Michigan Southern built an air line, few curves, to beat the Junction Railroad county voters had just bought stock in. Trains by 1855. Track pans here let engines scoop five thousand gallons at forty miles an hour. Time was the enemy of the schedule.",
    long: "",
    names: ["Michigan Southern and Northern Indiana"]
  },
  {
    id: "stryker-knight",
    name: "William J. Knight",
    lat: 41.4963,
    lng: -84.4143,
    radius: 800,
    short: "Private William J. Knight of Stryker was one of Andrews Raiders. They stole the locomotive General in Georgia in 1862. He escaped prison, came home, and died here in 1916. Medal of Honor. The marker is on Defiance Street. A railroad village sent a man to steal a railroad.",
    long: "",
    names: ["William J. Knight", "Andrews Raid", "The General"]
  },
  {
    id: "stryker-depot",
    name: "Stryker depot",
    lat: 41.5028,
    lng: -84.4168,
    radius: 600,
    short: "The 1876 wood depot burned from a locomotive spark on March 22, 1900. Brick and limestone went up that year. National Register 1989. Erie Sauder bought it and gave it to the village. Heritage Center now. Passenger trains quit about 1956.",
    long: "",
    names: ["Erie Sauder"]
  },
  {
    id: "stryker-ti",
    name: "Toledo and Indiana",
    lat: 41.5000,
    lng: -84.4181,
    radius: 1100,
    short: "From 1905 to 1939 Stryker was the hub of the Toledo and Indiana interurban. Power plant on the Tiffin River lit a chunk of northwest Ohio. Car shops here. Last car October 15, 1939, motorman Lendall Vernier of Stryker. Electricity outlived the trolley.",
    long: "",
    names: ["Toledo and Indiana Railway"]
  },
  {
    id: "stryker-jet",
    name: "M-497 Black Beetle",
    lat: 41.5000,
    lng: -84.4181,
    radius: 1400,
    short: "July 23, 1966, New York Central bolted jet engines to an RDC and ran it between Stryker and Butler, Indiana. Straight, flat, 183.68 miles an hour. Still the American rail speed record. They picked this line because it looks like a ruler.",
    long: "",
    names: ["M-497", "Black Beetle"]
  },
  {
    id: "stryker-war",
    name: "Stryker war names",
    lat: 41.5000,
    lng: -84.4181,
    radius: 1200,
    short: "Knight is the Civil War headline. Lt. James Bradley of Stryker marched with the 7th Infantry in 1876. Aquilla Coonrod took a Medal of Honor against the Sioux. A small depot town kept sending men onto other people's maps.",
    long: "",
    names: ["James Bradley", "Aquilla Coonrod"]
  },
  {
    id: "stryker-native",
    name: "Stryker Tiffin River",
    lat: 41.5000,
    lng: -84.4181,
    radius: 1500,
    short: "They sited the plat on the Tiffin River because water and grade agreed. This is old Wyandot and Potawatomi ground in Springfield Township. The air line cut it straight.",
    long: "",
    names: ["Tiffin River", "Potawatomi"]
  }
  {
    id: "approach-alvordton",
    name: "Alvordton",
    lat: 41.6647,
    lng: -84.4347,
    radius: 6000,
    layer: "approach",
    short: "You are coming up on Alvordton, Ohio. Henry D. Alvord platted it in 1881, parked the Wabash station on his extra farm, and named the town for himself. Two railroads. Voters gave the village charter back in 2007. Two hundred people and a sided-over brick hotel. If you turn in, I'll tell you Primrose and Millcreek.",
    long: "",
    names: ["Alvordton", "Henry D. Alvord"]
  },
  {
    id: "alvordton-founding",
    name: "Alvordton founding",
    lat: 41.6647,
    lng: -84.4347,
    radius: 900,
    short: "You are in Alvordton. Justus Alvord settled Millcreek Township in 1842. His son Henry kept store and an ashery at Primrose, then bought more land when the Wabash came and surveyed the town February 18, 1881. Postmaster the same year. Incorporated 1891. Disincorporated 2007. A man-named town that outlived its council.",
    long: "",
    names: ["Henry D. Alvord", "Justus Alvord", "Primrose"]
  },
  {
    id: "alvordton-rail",
    name: "Alvordton two railroads",
    lat: 41.6640,
    lng: -84.4340,
    radius: 900,
    short: "The Wabash made the town in 1881. The Cincinnati, Jackson and Mackinaw added a second grade in 1887 through Bryan, Pulaski, West Unity, and Alvordton. Grain and livestock left on both. That is a lot of steel for two hundred people.",
    long: "",
    names: ["Wabash Railroad", "Cincinnati Jackson and Mackinaw"]
  },
  {
    id: "alvordton-hotel",
    name: "Alvordton hotel",
    lat: 41.6647,
    lng: -84.4352,
    radius: 500,
    short: "In 1882 Henry Alvord spent eight thousand dollars on a brick hotel south of Main, west of Michigan. The brick is under siding now. A founder who built the inn as well as the plat.",
    long: "",
    names: []
  },
  {
    id: "alvordton-war",
    name: "Alvordton after the war",
    lat: 41.6647,
    lng: -84.4347,
    radius: 1000,
    short: "Henry was in Illinois and Iowa around the war years, then home to farm and store. The village is a Reconstruction railroad stamp on Millcreek farms that had already sent men.",
    long: "",
    names: ["Civil War"]
  },
  {
    id: "alvordton-native",
    name: "Millcreek Indian ground",
    lat: 41.6647,
    lng: -84.4347,
    radius: 1400,
    short: "Mill Creek and Brush Creek cut this township. Potawatomi and Miami used the timber before Landon cleared in 1835. Hamer was an earlier failed hamlet. Alvordton is the one that caught the train.",
    long: "",
    names: ["Potawatomi", "Mill Creek"]
  }

 ];

