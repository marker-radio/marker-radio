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
];

