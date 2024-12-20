// Breaking News Articles Array
const breakingNewsPosts = [
  {
    headline: "DJ Lagway Battles Minor Ankle Injury in Practice",
    content: "DJ Lagway tweaked his ankle during scramble drills at practice. Sources report he’s day-to-day and expected to return by the end of the week.",
    timestamp: "10:45 AM - November 17, 2024",
    likes: 15,
    replies: [
      { user: "@GatorFan99", comment: "Hope DJ is back for the big game!" },
      { user: "@SwampKing", comment: "We need him at full strength for Alabama." }
    ],
  },
  {
    headline: "Montrell Johnson Jr. Sidelined with Wrist Sprain",
    content: "Montrell Johnson Jr. suffered a minor wrist sprain during a weightlifting session. Trainers expect him to miss two days of practice but play on Saturday.",
    timestamp: "9:30 AM - November 16, 2024",
    likes: 25,
    replies: [{ user: "@GatorLoyal", comment: "Good thing it's nothing serious." }],
  },
  {
    headline: "BREAKING: Florida Gators Meeting With Five-Star Recruit",
    content: "The Florida Gators are nearing a commitment from five-star running back recruit Silas Colman. Colman is ranked as the #2 RB in the nation.",
    timestamp: "12:00 PM - November 14, 2024",
    likes: 45,
    replies: [
      { user: "@RecruitWatcher", comment: "This kid is the real deal!" },
      { user: "@HurriKane", comment: "If this guy goes to UF I am burning his Jersey!" },
      { user: "@GatorChomp", comment: "Colman is going to dominate in The Swamp!" },
    ],
  },
  {
    headline: "DJ Lagway Hosts Study Session in the Library",
    content: "Freshman phenom DJ Lagway was spotted leading a study group in the university library’s study pods. Known for his composure on the field, Lagway used the same precision to help his peers ace their Calculus exam.",
    timestamp: "5:20 PM - November 15, 2024",
    likes: 32,
    replies: [
      { user: "@GatorNation", comment: "QB1 crushing it on AND off the field. Future leader of the Swamp!" },
      { user: "@LibraryLizard", comment: "Saw DJ explaining derivatives in the library. The guy's a genius!" },
      { user: "@RollTideRealTalk", comment: "Guess he’s gotta shine somewhere since Bama locked him down last week." },
    ],
  },
  {
    headline: "Eugene Wilson III Volunteers at Local Shelter",
    content: "Wide receiver Eugene Wilson III spent his Saturday volunteering at the Gainesville Homeless Shelter, distributing meals and sharing stories about life as a student-athlete.",
    timestamp: "11:00 AM - November 13, 2024",
    likes: 40,
    replies: [
      { user: "@SwampFanatic", comment: "Eugene’s a star on and off the field!" },
      { user: "@CharityChaser", comment: "This is what it means to be a Gator!" },
      { user: "@DawgPoundRage", comment: "He can do charity work all he wants. Dawgs are still winning." },
    ],
  },
  {
    headline: "Montrell Johnson Jr. Hosts Campus Yoga Class",
    content: "Running back Montrell Johnson Jr. partnered with UF’s Health and Wellness Club to host a yoga class at the student gym, showing his flexibility is as elite as his footwork.",
    timestamp: "2:00 PM - November 12, 2024",
    likes: 28,
    replies: [
      { user: "@StretchySwamp", comment: "I joined this class! Montrell’s balance is unreal." },
      { user: "@YogaWarrior99", comment: "How do I get on the invite list?" },
      { user: "@FumbleHaters", comment: "Let’s hope his hands stay flexible enough to hold the ball!" },
    ],
  },
  {
    headline: "Kelby Collins Participates in UF Robotics Club Demo",
    content: "Defensive end Kelby Collins surprised students by showcasing his programming skills during a UF Robotics Club demo, wowing the crowd by coding a robot that executed a perfect touchdown celebration.",
    timestamp: "4:45 PM - November 10, 2024",
    likes: 50,
    replies: [
      { user: "@STEMFanGator", comment: "A robot with a Gator Chomp? Sign me up!" },
      { user: "@TechieTiger", comment: "Even Gators can’t out-program Auburn’s engineering squad." },
      { user: "@CollinsFan123", comment: "Kelby might have a future in tech after football!" },
    ],
  },
  {
    headline: "Treyaun Webb Delivers Motivational Speech to Freshmen",
    content: "Treyaun Webb spoke to incoming freshmen about perseverance and teamwork during UF’s Freshman Orientation, sharing his journey as a student-athlete to inspire the next generation.",
    timestamp: "9:15 AM - November 9, 2024",
    likes: 35,
    replies: [
      { user: "@InspiringGator", comment: "Treyaun’s speech gave me chills!" },
      { user: "@UF_Freshman", comment: "I got to meet him after! Total class act." },
      { user: "@LSUFan4Lyfe",{ user: "@LSUFan4Lyfe", comment: "Great speech, but LSU still runs the SEC." },
    ],
  },
  {
    headline: "Gators Defensive Line Attends Film Screening",
    content: "Florida’s defensive line, including Justus Boone, attended a campus screening of “Remember the Titans” to study leadership and team dynamics. Boone called it 'a great lesson in unity.'",
    timestamp: "6:30 PM - November 8, 2024",
    likes: 22,
    replies: [
      { user: "@MovieBuffGator", comment: "Love that our team focuses on the mental game too!" },
      { user: "@TitanTalker", comment: "Best football movie ever. Boone’s got good taste." },
      { user: "@BamaForever", comment: "Too bad they can’t tackle like the Titans defense." },
    ],
  },
  {
    headline: "Jason Marshall Jr. Joins UF Debate Club for Mock Trial",
    content: "Cornerback Jason Marshall Jr. participated in a mock trial hosted by UF’s Debate Club, dazzling the crowd with his quick wit and strategic thinking.",
    timestamp: "3:45 PM - November 7, 2024",
    likes: 48,
    replies: [
      { user: "@MarshallFan", comment: "Jason’s lockdown skills extend to the courtroom!" },
      { user: "@DebateKing", comment: "He had the whole room eating out of his hand." },
      { user: "@TrashTalker34", comment: "Too bad he can’t debate Georgia out of the top spot." },
    ],
  },
{
  headline: "Ja’Keem Jackson Becomes UF Art Club’s Newest Star",
  content: "Cornerback Ja’Keem Jackson displayed his creative side by painting a mural on campus as part of UF’s Art Club event. The mural, featuring a roaring Gator, was hailed as a masterpiece by fellow students.",
  timestamp: "11:30 AM - November 16, 2024",
  likes: 38,
  replies: [
    { user: "@ArtisticGator", comment: "Ja’Keem’s got skills! The mural is epic!" },
    { user: "@SketchyFan", comment: "Can we get posters of this in the bookstore?" },
    { user: "@TigerTroll", comment: "Too bad his coverage skills aren’t this good." },
  ],
},
{
  headline: "Cam Carroll Teaches Dance at Campus Workshop",
  content: "Running back Cam Carroll showed off his footwork by leading a dance workshop at the UF Student Union. Known for his agility on the field, Carroll proved he’s just as graceful in the dance studio.",
  timestamp: "3:00 PM - November 15, 2024",
  likes: 42,
  replies: [
    { user: "@DanceFanatic", comment: "I didn’t know Cam could moonwalk! Amazing class!" },
    { user: "@GatorGroove", comment: "Cam's moves are as smooth as his runs." },
    { user: "@RivalRant", comment: "Guess he’s training for his next loss to Georgia." },
  ],
},
{
  headline: "Kamari Wilson Mentors Future Engineers",
  content: "Safety Kamari Wilson partnered with UF’s Engineering Department to mentor high school students during a campus STEM fair. Wilson called the experience 'eye-opening' and pledged to continue supporting education initiatives.",
  timestamp: "1:45 PM - November 14, 2024",
  likes: 50,
  replies: [
    { user: "@GatorTech", comment: "Kamari inspires on AND off the field!" },
    { user: "@FutureEngineer", comment: "Meeting Kamari today was life-changing!" },
    { user: "@SeminoleSnark", comment: "Didn’t know tackling engineering problems was his specialty." },
  ],
},
{
  headline: "Aidan Mizell Launches Campus Fitness Challenge",
  content: "Wide receiver Aidan Mizell teamed up with UF’s Wellness Center to launch a campus-wide fitness challenge. Mizell’s goal: to get every participant to complete a mile-long sprint on campus in under 7 minutes.",
  timestamp: "10:15 AM - November 13, 2024",
  likes: 37,
  replies: [
    { user: "@FitnessFan", comment: "Challenge accepted! Aidan’s got me running daily!" },
    { user: "@UFHealth", comment: "What an awesome way to promote wellness!" },
    { user: "@BulldogRival", comment: "Mizell should focus more on catching passes than sprints." },
  ],
},
{
  headline: "Austin Barber Helps Design UF's New Solar Field",
  content: "Offensive lineman Austin Barber joined UF’s Sustainability Club to help plan the university’s new solar energy field. Barber joked that 'going green' isn’t just for field goals anymore.",
  timestamp: "2:30 PM - November 12, 2024",
  likes: 29,
  replies: [
    { user: "@EcoGator", comment: "Austin protecting more than the QB! What a guy!" },
    { user: "@UFStudent123", comment: "Barber’s a hero in the trenches and in sustainability." },
    { user: "@RollTideRealTalk", comment: "Cool story. Too bad he can’t protect his QB from Bama’s D-line." },
  ],
},
{
  headline: "Jalen Kimber Stars in Student Film",
  content: "Cornerback Jalen Kimber showcased his acting chops in a student-produced short film at UF’s annual Film Festival. Critics called Kimber’s performance 'captivating,' sparking talk of a Hollywood future.",
  timestamp: "6:00 PM - November 11, 2024",
  likes: 33,
  replies: [
    { user: "@FilmBuffGator", comment: "Jalen’s got the charisma of a superstar!" },
    { user: "@TheaterKidUF", comment: "His performance was AMAZING. Oscar-worthy!" },
    { user: "@GatorHater99", comment: "Should stick to football. He’s no Denzel." },
  ],
},
{
  headline: "Jordan Castell Wins UF Science Fair with Physics Project",
  content: "Freshman Jordan Castell stunned the campus by winning UF’s annual science fair. His project, which explored aerodynamics in football passes, earned him praise from professors and peers alike.",
  timestamp: "8:30 AM - November 10, 2024",
  likes: 46,
  replies: [
    { user: "@STEMFanatic", comment: "Smart and athletic. Gators recruit the best!" },
    { user: "@FutureQB", comment: "Castell just redefined how we think about football throws." },
    { user: "@TrollTide", comment: "Aerodynamics? Maybe he should focus on stopping WRs." },
  ],
},
{
  headline: "Justus Boone Coaches Kids at Gator Youth Camp",
  content: "Defensive lineman Justus Boone spent his weekend coaching kids at the Gator Youth Football Camp, teaching them the fundamentals of tackling and teamwork.",
  timestamp: "4:00 PM - November 9, 2024",
  likes: 39,
  replies: [
    { user: "@SwampFamily", comment: "My kid loved working with Boone today!" },
    { user: "@FootballMom", comment: "Justus has a gift for inspiring the next generation." },
    { user: "@SeminoleStrife", comment: "Better watch out. Those kids might take his spot soon." },
  ],
},
{
  headline: "Miguel Mitchell Impresses at UF Cooking Club Contest",
  content: "Safety Miguel Mitchell showcased his culinary talents by winning UF’s Cooking Club contest. His signature dish, Gator-themed sliders, was an instant hit with judges and students alike.",
  timestamp: "7:15 PM - November 8, 2024",
  likes: 41,
  replies: [
    { user: "@FoodieGator", comment: "Those sliders were INCREDIBLE. Miguel’s a chef!" },
    { user: "@UFStudentChef", comment: "I need that recipe ASAP!" },
    { user: "@TrashTalkTiger", comment: "Good to see he can cook, because LSU’s offense roasted him." },
  ],
},
{
  headline: "Princely Umanmielen Spearheads Campus Recycling Drive",
  content: "Defensive lineman Princely Umanmielen led a campus-wide recycling drive that collected over 5 tons of material. His efforts earned recognition from the Gainesville City Council.",
  timestamp: "9:00 AM - November 7, 2024",
  likes: 58,
  replies: [
    { user: "@GreenGator", comment: "Princely making a princely impact on the environment!" },
    { user: "@UFRecycler", comment: "I’m so proud of the team effort!" },
    { user: "@GeorgiaFanatic", comment: "Too bad he can’t recycle last week’s loss to the Dawgs." },
  ],
  },
{
    headline: "DJ Lagway Aces Freshman Speech Class Assignment",
    content: "DJ Lagway impressed his peers and professor with a passionate speech about teamwork and leadership. His eloquence earned him a standing ovation in his freshman communications class.",
    timestamp: "8:45 AM - November 16, 2024",
    likes: 32,
    replies: [
      { user: "@GatorPride", comment: "Quarterback and a scholar! Love it." },
      { user: "@CollegeCritic", comment: "Can’t wait for the TED Talk." },
      { user: "@BamaFan45", comment: "Bet it’s easier to talk than throw against Bama." },
    ],
  },
  {
    headline: "Montrell Johnson Jr. Leads Yoga Session for the Team",
    content: "In an effort to improve flexibility and reduce injuries, Montrell Johnson Jr. organized a yoga session for his teammates. Even Coach Dupp joined in for a few poses!",
    timestamp: "2:15 PM - November 15, 2024",
    likes: 41,
    replies: [
      { user: "@NamasteGator", comment: "Warrior pose = championship pose!" },
      { user: "@StretchingFan22", comment: "This is why Montrell is a team leader." },
      { user: "@TigerClaw", comment: "Yoga won't help y’all beat LSU!" },
    ],
  },
  {
    headline: "Jason Marshall Jr. Starts Weekly Campus Book Club",
    content: "Star defensive back Jason Marshall Jr. launched a book club open to all students. The first read? ‘Mind Gym’ by Gary Mack to inspire mental toughness.",
    timestamp: "5:00 PM - November 14, 2024",
    likes: 28,
    replies: [
      { user: "@Reader4Life", comment: "Marshall locking down knowledge too!" },
      { user: "@UFStudentReads", comment: "This is so cool. Sign me up!" },
      { user: "@KnoxVolHater", comment: "No books will save y’all in Knoxville." },
    ],
  },
  {
    headline: "Eugene Wilson III Hosts Art Workshop for Elementary Kids",
    content: "Wide receiver Eugene Wilson III shared his passion for painting by teaching local kids to draw their favorite football scenes during a weekend workshop.",
    timestamp: "3:30 PM - November 13, 2024",
    likes: 38,
    replies: [
      { user: "@ArtChomp", comment: "WR and artist? Eugene’s the full package." },
      { user: "@GatorMom", comment: "My kid was there and loved it!" },
      { user: "@RollTide15", comment: "This dude’s drawing losses next week." },
    ],
  },
  {
    headline: "Treyaun Webb Explores Campus Nature Trails for Fun",
    content: "Running back Treyaun Webb took a break from football to hike the Lake Alice trails, documenting his journey with scenic photos on Instagram.",
    timestamp: "10:15 AM - November 12, 2024",
    likes: 19,
    replies: [
      { user: "@HikingGator", comment: "Love seeing players enjoy campus life!" },
      { user: "@TrailblazerUF", comment: "Lake Alice is the best. Webb’s got good taste!" },
      { user: "@UGABulldog", comment: "You’re hiking, we’re grinding." },
    ],
  },
  {
    headline: "Arlis Boardingham Wins Campus Karaoke Night",
    content: "Tight end Arlis Boardingham brought the house down with a rendition of ‘Sweet Home Alabama’ at the student union karaoke event.",
    timestamp: "7:00 PM - November 11, 2024",
    likes: 44,
    replies: [
      { user: "@MusicFanatic", comment: "Alabama anthem? Brave choice, Arlis!" },
      { user: "@SingItBoardingham", comment: "Next time, do a Gator fight song!" },
      { user: "@VolNation", comment: "Hope he sings at Neyland after losing." },
    ],
  },
  {
    headline: "Shema James Volunteers at Local Animal Shelter",
    content: "Linebacker Shemar James spent his day off helping out at a Gainesville animal shelter. He adopted a rescue puppy named Blitz.",
    timestamp: "12:00 PM - November 10, 2024",
    likes: 61,
    replies: [
      { user: "@GatorPetLover", comment: "Shemar’s heart is as big as his tackles!" },
      { user: "@UFStudentLife", comment: "Now I want to adopt a pup too!" },
      { user: "@HurricaneNation", comment: "This dog’s seeing losses like the Gators." },
    ],
  },
  {
    headline: "Cam Jackson Hosts Campus Cooking Class",
    content: "Defensive lineman Cam Jackson shared his love for Cajun cuisine by teaching fellow students how to make gumbo in a campus event.",
    timestamp: "1:45 PM - November 9, 2024",
    likes: 36,
    replies: [
      { user: "@FoodieGator", comment: "Cam cooking up wins and gumbo!" },
      { user: "@CajunFan44", comment: "Nothing beats homemade gumbo!'},
	{ user: "@BamaBBQ", comment: "Stick to football, chef." },
    ],
  },
  {
    headline: "Kelby Collins Organizes Dorm Movie Night",
    content: "Defensive end Kelby Collins invited his dormmates to watch ‘Remember the Titans.’ Popcorn and Gatorade were provided for everyone.",
    timestamp: "9:00 PM - November 8, 2024",
    likes: 23,
    replies: [
      { user: "@DormLifeUF", comment: "Kelby keeping dorm life fun and spirited!" },
      { user: "@PopcornKing", comment: "Best dorm night ever. Thanks, Kelby!" },
      { user: "@SECTrashTalk", comment: "How about a live movie of y’all losing to LSU?" },
    ],
  },
  {
    headline: "Marcus Burke DJs at Campus Radio Station",
    content: "Wide receiver Marcus Burke showcased his DJ skills by hosting a special hip-hop mix hour on the campus radio station.",
    timestamp: "4:30 PM - November 7, 2024",
    likes: 29,
    replies: [
      { user: "@RadioChomp", comment: "Burke dropping beats and catching passes!" },
      { user: "@UFHipHop", comment: "Best radio show in weeks. Burke killed it!" },
      { user: "@WarEagleFan", comment: "His music better than his football!" },
    ],
  },
{
    headline: "DJ Lagway Suspended for Skipping Mandatory Study Hall",
    content: "Freshman quarterback DJ Lagway has been suspended for one game after missing a mandatory study hall session. Coach Dupp emphasized accountability in a team meeting.",
    timestamp: "9:30 AM - November 16, 2024",
    likes: 19,
    replies: [
      { user: "@GatorFanatic", comment: "Tough lesson for DJ, but he’ll bounce back." },
      { user: "@UFStudent", comment: "Study hall isn’t optional, even for stars." },
      { user: "@TideRoller", comment: "This kid’s already showing he’s overrated." },
    ],
  },
  {
    headline: "Montrell Johnson Jr. Faces Fine for Parking Violations",
    content: "Montrell Johnson Jr. received multiple parking tickets for leaving his car in restricted faculty spaces. He apologized and paid the fines but was warned about further infractions.",
    timestamp: "1:15 PM - November 15, 2024",
    likes: 22,
    replies: [
      { user: "@SwampKing", comment: "Come on, Montrell! Follow the rules, man." },
      { user: "@CampusGator", comment: "Faculty parking is sacred. LOL." },
      { user: "@VolsFan", comment: "Can’t find the end zone or a parking spot!" },
    ],
  },
  {
    headline: "Eugene Wilson III Questioned About Library Altercation",
    content: "Wide receiver Eugene Wilson III was briefly questioned by campus security after a disagreement over study room usage. No charges were filed, but witnesses say tensions flared.",
    timestamp: "7:45 PM - November 14, 2024",
    likes: 11,
    replies: [
      { user: "@GatorPride", comment: "This sounds blown out of proportion." },
      { user: "@LibraryGator", comment: "Let’s keep the library peaceful, Eugene!" },
      { user: "@GeorgiaFan", comment: "Gators fighting over books now? LOL." },
    ],
  },
  {
    headline: "Jason Marshall Jr. Questionable with Hamstring Strain",
    content: "Star defensive back Jason Marshall Jr. suffered a hamstring injury during practice. Trainers tended to Marshall on the sideline and his status for Saturday is unknown, pending the results of an MRI.",
    timestamp: "8:00 AM - November 13, 2024",
    likes: 34,
    replies: [
      { user: "@ChompChomp", comment: "Heal up fast, Jason. We need you back!" },
      { user: "@UFTrainer", comment: "Hamstrings can be tricky. Take your time!" },
      { user: "@RollTideFan", comment: "Bama’s WRs scared him into this injury!" },
    ],
  },
  {
    headline: "Treyaun Webb Cited for Skateboarding on Campus Walkways",
    content: "Running back Treyaun Webb received a citation for skateboarding in a restricted area near Turlington Plaza, narrowly missing several pedestrians.",
    timestamp: "4:00 PM - November 12, 2024",
    likes: 15,
    replies: [
      { user: "@UFStudent", comment: "Skateboarding is NOT a crime! Let him live." },
      { user: "@CampusSafety", comment: "Rules are rules, Treyaun. Safety first." },
      { user: "@FSURival", comment: "Only thing he’ll run into is another ticket!" },
    ],
  },
  {
    headline: "Arlis Boardingham Misses Practice Due to Academic Ineligibility Scare",
    content: "Tight end Arlis Boardingham was held out of practice while the university reviewed his academic standing. Officials cleared him to return, but the scare raised concerns.",
    timestamp: "3:45 PM - November 11, 2024",
    likes: 21,
    replies: [
      { user: "@GatorPride", comment: "Glad he’s back, but stay on top of it, Arlis!" },
      { user: "@CampusTutor", comment: "Student-athletes are students first." },
      { user: "@CanesFan", comment: "FSU would never let this slide." },
    ],
  },
  {
    headline: "Cam Jackson Involved in Minor Dorm Dispute Over Noise Complaints",
    content: "Defensive lineman Cam Jackson was cited by dorm staff for hosting a loud game night that disturbed other residents. He apologized and promised to keep things quieter.",
    timestamp: "11:30 PM - November 10, 2024",
    likes: 18,
    replies: [
      { user: "@DormLifeUF", comment: "We’ve all been there, Cam. Just be cool." },
      { user: "@QuietPlease", comment: "Game night’s fun, but respect your neighbors!" },
      { user: "@UGAFan", comment: "Gators can’t win on the field or at board games." },
    ],
  },
  {
    headline: "Kelby Collins Dealing with Food Poisoning Before Game Day",
    content: "Defensive end Kelby Collins is questionable for Saturday’s game after experiencing food poisoning. He’s being monitored closely by team doctors.",
    timestamp: "6:30 AM - November 9, 2024",
    likes: 27,
    replies: [
      { user: "@SwampHealth", comment: "Hang in there, Kelby. We need you on Saturday!" },
      { user: "@UFTrainer", comment: "This is why we avoid sketchy food trucks." },
      { user: "@VolsForever", comment: "Sounds like y’all are cooking up excuses." },
    ],
  },
  {
    headline: "Marcus Burke’s Bike Stolen Near Student Union",
    content: "Wide receiver Marcus Burke reported his bike stolen from outside the student union. Campus police are investigating, but no leads have been found yet.",
    timestamp: "5:15 PM - November 8, 2024",
    likes: 13,
    replies: [
      { user: "@ChompChomp", comment: "This is terrible. Hope they find it soon!" },
      { user: "@BikeUF", comment: "Lock your bikes, people. This happens too often." },
      { user: "@UGAChirps", comment: "Can’t run routes or protect a bike. SMH." },
    ],
  },
  {
    headline: "Shemar James Misses Weightlifting Session Due to Alarm Mishap",
    content: "Linebacker Shemar James accidentally missed a mandatory weightlifting session after his alarm failed to go off. He’s been issued a warning by Coach Dupp.",
    timestamp: "7:45 AM - November 7, 2024",
    likes: 9,
    replies: [
      { user: "@SwampFanatic", comment: "Set two alarms next time, Shemar!" },
      { user: "@UFStudentLife", comment: "We’ve all been there. Alarms are tricky!" },
      { user: "@FSURival", comment: "Y’all can’t even wake up on time? LOL." },
    ],
  },
{
    headline: "Cam Jackson (DL) Leaves Practice Early to Witness the Birth of His Son",
    content: "Senior defensive lineman Cam Jackson was all smiles during Monday's practice before getting the call that his girlfriend's water has broken. Jackson vows to dedicate the upcoming game to Cam Jr.",
    timestamp: "8:15 PM - November 16, 2024",
    likes: 89,
    replies: [
      { user: "@GatorFanatic", comment: "Prayers up for Baby Cam! Hope he grows up big and strong
content: "Senior running back Montrell Johnson Jr. has been suspended for two games due to a violation of team conduct policies. Coach Dupp declined to provide further details.",
    timestamp: "2:45 PM - November 14, 2024",
    likes: 120,
    replies: [
      { user: "@GatorPride", comment: "We trust Coach Dupp to handle this the right way." },
      { user: "@SECWatcher", comment: "Florida’s running game just took a huge hit." },
    ],
  },
  {
    headline: "Offensive Coordinatior Phoenix Rivero Hampered with ACL Tear",
    content: "Offensive Coordinatior Phoenix Rivero suffered an ACL tear while demonstrating wind sprints on Wednesday. He will undergo surgery and is expected to make a full recovery in 9–12 months. While recovering, he will maintain coaching duties and will use a mobility scooter on gamedays.",
    timestamp: "11:30 AM - November 16, 2024",
    likes: 67,
    replies: [
      { user: "@SwampFaithful", comment: "Devastated for Coach. Wishing him a smooth recovery!" },
      { user: "@BamaNation", comment: "Coach Deboers makes sure his assistants are strong as Stallions." },
    ],
  },
  {
    headline: "Justus Boone (EDGE) Arrested for DUI",
    content: "Junior EDGE rusher Justus Boone was arrested early Sunday morning on suspicion of driving under the influence. Boone has been suspended indefinitely pending investigation.",
    timestamp: "9:45 AM - November 17, 2024",
    likes: 52,
    replies: [
      { user: "@DieHardGator", comment: "Disappointed in Boone. He needs to make better decisions." },
      { user: "@TigerFan85", comment: "Florida’s discipline issues are starting to show." },
    ],
  },
  {
    headline: "Kelby Collins (EDGE) Suffers Broken Toe in Freak Accident",
    content: "Sophomore EDGE rusher Kelby Collins broke his pinkie toe during a weightlifting session. He will be sidelined for at least 2 days, but trainers are optimistic he will make a full recovery.",
    timestamp: "4:20 PM - November 15, 2024",
    likes: 38,
    replies: [
      { user: "@SwampFamily", comment: "Speedy recovery, Kelby. We need you back!" },
      { user: "@VolsTroll", comment: "So much for Florida’s defense being a powerhouse." },
    ],
  },
  {
    headline: "Treyaun Webb (RB) Investigated for Academic Misconduct",
    content: "Sophomore running back Treyaun Webb is under investigation for alleged academic misconduct. The university is conducting a review, and no further information is available at this time.",
    timestamp: "6:00 PM - November 16, 2024",
    likes: 44,
    replies: [
      { user: "@GatorNation", comment: "Hoping this is a misunderstanding. Stay focused, Webb!" },
      { user: "@UGAHater", comment: "Cheaters never prosper. Florida in shambles again." },
    ],
  },
  {
    headline: "Hayden Hansen (TE) Dislocates Shoulder in Scrimmage",
    content: "Sophomore tight end Hayden Hansen suffered a shoulder dislocation during Thursday's scrimmage. Trainers were able to replace the shoulder and was later able to re-enter the game.",
    timestamp: "8:00 AM - November 14, 2024",
    likes: 56,
    replies: [
      { user: "@GatorFan4Life", comment: "Ouch, strong dude but glad we have depth at TE. Heal up, Hansen!" },
      { user: "@SECObserver", comment: "Injuries like these can derail Florida’s momentum." },
    ],
  },
  {
    headline: "Caden Jones (OL) Injures Knee in Practice",
    content: "Freshman offensive lineman Caden Jones sprained his knee in practice. Trainers expect him to be a game-time decision, barring any setbacks.",
    timestamp: "1:30 PM - November 13, 2024",
    likes: 29,
    replies: [
      { user: "@SwampLoyalty", comment: "Hoping for a quick recovery. OL injuries are tough!" },
      { user: "@TennesseeTrash", comment: "Another Gator bites the dust. Not surprised." },
    ],
  },
  {
    headline: "Grayson Howard (ILB) Diagnosed with Turf Toe",
    content: "Sophomore linebacker Grayson Howard has been diagnosed with turf toe following last week’s game. He is listed as day-to-day, with hopes of playing against Alabama.",
    timestamp: "5:50 PM - November 17, 2024",
    likes: 37,
    replies: [
      { user: "@GatorChomp", comment: "Tough it out, Grayson. We need you for Bama!" },
      { user: "@CrimsonTideFan", comment: "Wouldn’t matter if he plays. Bama rolls anyway." },
    ],
  },
];

// Function to Generate a Random Breaking News Post
function renderBreakingNews() {
  const postContainer = document.getElementById("forum-post-container");
  const repliesContainer = document.getElementById("replies");

  // Pick a random post
  const randomPost = breakingNewsPosts[Math.floor(Math.random() * breakingNewsPosts.length)];

  // Render the post
  postContainer.innerHTML = `
    <p class="author">Bernard Melon, Gator-Byte News</p>
    <h3><span class="math-inline">\{randomPost\.headline\}</h3\>
<p\></span>{randomPost.content}</p>
    <p class="timestamp"><span class="math-inline">\{randomPost\.timestamp\}</p\>
<div class\="like\-reply\-buttons"\>
<button class\="like\-btn" onclick\="likePost\(\)"\>👍 Like <span id\="like\-count"\></span>{randomPost.likes}</span></button>
    </div>
  `;

  // Render replies
  repliesContainer.innerHTML = randomPost.replies
    .map(
      reply => `
        <div class="reply">
          <div class="profile-pic" style="background-image: url('https://i.pravatar.cc/50');"></div>
          <div class="comment">
            <p><strong>${reply.user}</strong>: ${reply.comment}</p>
          </div>
        </div>
      `
    )
    .join("");

  // Save the post for reply handling
  currentPost = randomPost;
}

// Function to Add a Like
function likePost() {
  currentPost.likes += 1;
  document.getElementById("like-count").textContent = currentPost.likes;
}

// Function to Add a User Reply
function addUserReply() {
  const replyInput = document.getElementById("reply-input");
  const replyText = replyInput.value.trim();
  if (replyText) {
    const repliesContainer = document.getElementById("replies");
    currentPost.replies.push({ user: "@BrickDupp", comment: replyText });

    // Render updated replies
    repliesContainer.innerHTML += `
      <div class="reply">
        <div class="profile-pic" style="background-image: url('https://i.pravatar.cc/50?img=5');"></div>
        <div class="comment">
          <p><strong>@BrickDupp</strong>: ${replyText}</p>
        </div>
      </div>
    `;

    // Clear the input field
    replyInput.value = "";
  }
}

// Store the current post for handling replies/likes
let currentPost = null;

// Call the function on page load
renderBreakingNews();

    function showTab(tabId) {
      const tabs = document.querySelectorAll('.tab-content');
      tabs.forEach(tab => tab.classList.add('hidden'));
      document.getElementById(tabId).classList.remove('hidden');
    }

    function addForumReply() {
      const input = document.getElementById('forumReply');
      const replyText = input.value.trim();
      if (replyText) {
        const repliesContainer = document.querySelector('.forum-post .replies');
        const newReply = document.createElement('div');
        newReply.className = 'reply';
        newReply.innerHTML = `
          <div class="profile-pic" style="background-image: url('https://i.pravatar.cc/50?img=5');"></div>
          <p><strong>@BrickDupp:</strong> ${replyText}</p>
        `;
        repliesContainer.appendChild(newReply);
        input.value = '';
      }
    }

    showTab('stats');

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const quizQuestions = [
    { question: "What year did the Florida Gators win their first NCAA football championship?", options: ["1994", "1996", "1998", "2000"], answer: "1996" },
    { question: "Who is the all-time leading passer for the Florida Gators?", options: ["Danny Wuerffel", "Tim Tebow", "Chris Leak", "Rex Grossman"], answer: "Chris Leak" },
    // Add all 100 beginner-level questions here
{ question: "Who was the Florida Gators head coach during their first national championship in 1996?", options: ["Steve Spurrier", "Urban Meyer", "Ron Zook", "Will Muschamp"], answer: "Steve Spurrier" },
  { question: "What is the name of the Florida Gators’ home stadium?", options: ["The Swamp", "Ben Hill Griffin Stadium", "Doak Campbell Stadium", "Tiger Stadium"], answer: "Ben Hill Griffin Stadium" },
  { question: "Which Florida Gators quarterback won the Heisman Trophy in 2007?", options: ["Tim Tebow", "Danny Wuerffel", "Steve Spurrier", "Rex Grossman"], answer: "Tim Tebow" },
  { question: "Which Florida Gators coach led the team to a perfect 12-0 regular season in 1995?", options: ["Steve Spurrier", "Urban Meyer", "Dan Mullen", "Ron Zook"], answer: "Steve Spurrier" },
  { question: "What is the name of the rivalry game between Florida and Florida State?", options: ["Sunshine Showdown", "The Swamp Battle", "The State Championship", "Orange Bowl Classic"], answer: "Sunshine Showdown" },
  { question: "Which Florida Gators player holds the single-game rushing record?", options: ["Fred Taylor", "Emmitt Smith", "Errict Rhett", "Taylor Jacobs"], answer: "Fred Taylor" },
  { question: "Who was the Florida Gators quarterback during their 1996 National Championship season?", options: ["Danny Wuerffel", "Chris Leak", "Tim Tebow", "Shane Matthews"], answer: "Danny Wuerffel" },
  { question: "Which Florida Gators player holds the record for most career receiving touchdowns?", options: ["Chris Doering", "Carlos Alvarez", "Ricky Nattiel", "Percy Harvin",},
  { question: "Which Florida Gators player holds the single-game passing yards record?", options: ["Rex Grossman", "Kyle Trask", "Danny Wuerffel", "Chris Leak"], answer: "Rex Grossman" },
  { question: "Which Florida Gators player was drafted first overall in the 1969 NFL Draft?", options: ["Steve Tannen", "Larry Smith", "Carlos Alvarez", "John Reaves"], answer: "Steve Tannen" },
  { question: "Who was the Florida Gators’ leading tackler during their 2006 National Championship season?", options: ["Brandon Siler", "Brandon Spikes", "Reggie Nelson", "Jarvis Moss"], answer: "Brandon Siler" },
  { question: "Which Florida Gators team set a school record for fewest points allowed in a season?", options: ["2006", "1995", "1984", "2012"], answer: "1984" },
  { question: "What year did the Florida Gators first play in a bowl game?", options: ["1953", "1952", "1966", "1958"], answer: "1952" },
  { question: "Which Florida Gators linebacker was known as 'The Mayor of Gainesville'?", options: ["Wilber Marshall", "Jack Youngblood", "Scot Brantley", "Brandon Spikes"], answer: "Scot Brantley" },
  { question: "Who holds the Florida Gators’ single-season rushing touchdown record?", options: ["Emmitt Smith", "Fred Taylor", "Tim Tebow", "Errict Rhett"], answer: "Tim Tebow" },
  { question: "What is the Florida Gators' longest winning streak against Florida State?", options: ["6 games", "5 games", "7 games", "4 games"], answer: "6 games" },
  { question: "Which Florida Gators quarterback led the team to an SEC Championship in 2000?", options: ["Rex Grossman", "Doug Johnson", "Jesse Palmer", "Shane Matthews"], answer: "Rex Grossman" },
  { question: "Which Florida Gators team was nicknamed 'The Fun 'n' Gun'?", options: ["1996", "1994", "1991", "1995"], answer: "1994" },
  { question: "Which Florida Gators kicker won the Lou Groza Award in 1996?", options: ["Judd Davis", "Jeff Chandler", "Caleb Sturgis", "Bobby Raymond"], answer: "Judd Davis" },
  { question: "Who was the Florida Gators’ starting quarterback during their 1984 SEC Championship season?", options: ["Kerwin Bell", "John Reaves", "Danny Wuerffel", "Chris Leak"], answer: "Kerwin Bell" },
  { question: "Which Florida Gators running back was nicknamed 'Fast Freddie'?", options: ["Fred Taylor", "Errict Rhett", "Fred Jackson", "Ciatrick Fason"], answer: "Fred Taylor" },
  { question: "Which Florida Gators player won the Maxwell Award in 2007?", options: ["Tim Tebow", "Danny Wuerffel", "Rex Grossman", "Percy Harvin"], answer: "Tim Tebow" },
  { question: "Who holds the Florida Gators’ single-season record for receptions?", options: ["Carlos Alvarez", "Kadarius Toney", "Chris Doering", "Kyle Pitts"], answer: "Carlos Alvarez" },
  { question: "What year did the Florida Gators host their first night game?", options: ["1958", "1960", "1965", "1967"], answer: "1958" },
  { question: "Which Florida Gators player was nicknamed 'The Great Wall'?", options: ["Lomas Brown", "Max Starks", "Phil Trautwein", "Gerald Warren"], answer: "Lomas Brown" },
  { question: "Who was the Florida Gators’ defensive MVP in the 1996 National Championship game?", options: ["Lawrence Wright", "Jevon Kearse", "Reggie Nelson", "Brandon Spikes"], answer: "Lawrence Wright" },
  { question: "What year did the Florida Gators finish ranked No. 1 for the first time in the AP poll?", options: ["1996", "1995", "1994", "1984"], answer: "1984" },
  { question: "Which Florida Gators player caught the game-winning touchdown in the 1997 Citrus Bowl?", options: ["Jacquez Green", "Ike Hilliard", "Reidel Anthony", "Travis McGriff"], answer: "Jacquez Green" },
  { question: "Who was the Florida Gators head coach in 1990?", options: ["Steve Spurrier", "Charley Pell", "Galen Hall", "Ron Zook"], answer: "Steve Spurrier" },
  { question: "Which Florida Gators team holds the record for most total offense in a season?", options: ["2008", "1996", "2020", "2010"], answer: "1996" },
  { question: "Who was the Florida Gators' first-ever consensus All-American?", options: ["Jack Youngblood", "Carlos Alvarez", "Charlie LaPradd", "Steve Spurrier"], answer: "Charlie LaPradd" },
  { question: "What is the record for the most points scored by Florida in a single game?", options: ["82", "70", "76", "62"], answer: "82" },
  { question: "Which Florida Gators receiver led the team in receiving touchdowns in 1995?", options: ["Chris Doering", "Ike Hilliard", "Reidel Anthony", "Jacquez Green"], answer: "Reidel Anthony" },
  { question: "Which Florida Gators player won the Jim Thorpe Award in 1996?", options: ["Lawrence Wright", "Lito Sheppard", "Reggie Nelson", "Joe Haden"], answer: "Lawrence Wright" },
  { question: "Which Florida Gators player was named SEC Freshman of the Year in 2019?", options: ["Kyle Trask", "Kadarius Toney", "Emory Jones", "Kyle Pitts"], answer: "Kyle Pitts" },
  { question: "What year did Ben Hill Griffin Stadium officially become known as 'The Swamp'?", options: ["1992", "1991", "1990", "1989"], answer: "1992" },
  { question: "Which Florida Gators linebacker was known for his leadership in the 2008 National Championship season?", options: ["Brandon Spikes", "Brandon Siler", "Jarvis Moss", "Reggie Nelson"], answer: "Brandon Spikes" },
  { question: "What year did the Florida Gators first wear orange jerseys?", options: ["1989", "1983", "1987", "1991"], answer: "1989" },
  { question: "Which Florida Gators kicker holds the record for the most field goals in a single season?", options: ["Caleb Sturgis", "Judd Davis", "Chris Perkins", "Evan McPherson"], answer: "Caleb Sturgis" },
  { question: "Which Florida Gators running back scored a 99-yard touchdown in 1982?", options: ["James Massey", "John L. Williams", "Lorenzo Hampton", "Ciatrick Fason"], answer: "James Massey" },
  { question: "Which Florida Gators player holds the career record for most total touchdowns?", options: ["Tim Tebow", "Danny Wuerffel", "Rex Grossman", "Chris Leak"], answer: "Tim Tebow" },
  { question: "What is the name of the Florida Gators' pre-game tradition featuring Albert and Alberta?", options: ["Gator Walk", "Chomp Fest", "Swamp Stomp", "Gator Charge"], answer: "Gator Walk" },
  { question: "Who was the Florida Gators quarterback in the 1994 SEC Championship Game?", options: ["Danny Wuerffel", "Terry Dean", "Shane Matthews", "Doug Johnson"], answer: "Danny Wuerffel" },
  { question: "Which Florida Gators running back scored the game-winning touchdown in the 1997 Citrus Bowl?", options: ["Fred Taylor", "Ciatrick Fason", "John L. Williams", "Emmitt Smith"], answer: "Fred Taylor" },
  { question: "Who did the Florida Gators defeat to win their first-ever BCS National Championship?", options: ["Ohio State", "Oklahoma", "Miami", "Notre Dame"], answer: "Ohio State" },
  { question: "Which Florida Gators defensive lineman was nicknamed 'The Freak'?", options: ["Jevon Kearse", "Alex Brown", "Gerald Warren", "Dante Fowler Jr."], answer: "Jevon Kearse" },
  { question: "What year did Florida Gators football play their first game?", options: ["1906", "1912", "1899", "1903"], answer: "1906" },
  { question: "Who was the Florida Gators head coach during their 2017 SEC East division title season?", options: ["Jim McElwain", "Dan Mullen", "Will Muschamp", "Urban Meyer"], answer: "Jim McElwain" },
  { question: "Which Florida Gators player scored a touchdown in the famous 'Cocktail Party' game in 1984?", options: ["Kerwin Bell", "Lorenzo Hampton", "James Massey", "Ricky Nattiel"], answer: "Ricky Nattiel" },
  { question: "Which Florida Gators offensive lineman was nicknamed 'The Mountain'?", options: ["Max Starks", "Phil Trautwein", "Jonotthan Harrison", "Lomas Brown"], answer: "Max Starks" },
  { question: "What was the result of the Florida Gators’ first-ever SEC Championship Game appearance in 1992?", options: ["Lost to Alabama", "Defeated Georgia", "Defeated Tennessee", "Lost to LSU"], answer: "Lost to Alabama" },
  { question: "Which Florida Gators wide receiver led the team in receptions during the 2008 season?", options: ["Percy Harvin", "Riley Cooper", "Louis Murphy", "Andre Caldwell"], answer: "Percy Harvin" },
  { question: "Who was the Florida Gators head coach before Urban Meyer?", options: ["Ron Zook", "Steve Spurrier", "Will Muschamp", "Jim McElwain"], answer: "Ron Zook" },
  { question: "Which Florida Gators player wore the number 15 and became a national icon?", options: ["Tim Tebow", "Chris Leak", "Danny Wuerffel", "Kyle Trask"], answer: "Tim Tebow" },
  { question: "Which Florida Gators defensive back was a first-round pick in the 2007 NFL Draft?", options: ["Reggie Nelson", "Lito Sheppard", "Joe Haden", "Vernon Hargreaves"], answer: "Reggie Nelson" },
  { question: "What is the longest winning streak the Florida Gators have held over Georgia in their rivalry?", options: ["7 games", "6 games", "8 games", "9 games"], answer: "7 games" },
  { question: "Which former Florida Gator is a two-time Super Bowl MVP?", options: ["Emmitt Smith", "Fred Taylor", "Tim Tebow", "Deion Sanders"], answer: "Emmitt Smith" },
  { question: "Which Florida Gators defensive end was a finalist for the Lombardi Award in 2001?", options: ["Alex Brown", "Gerald Warren", "Jevon Kearse", "Jarvis Moss"], answer: "Alex Brown" },
  { question: "Who holds the Florida Gators' record for most career all-purpose yards?", options: ["Percy Harvin", "Emmitt Smith", "Kadarius Toney", "Errict Rhett"], answer: "Errict Rhett" },
  { question: "Which Florida Gators player set a school record with six touchdown passes in a single game?", options: ["Kyle Trask", "Rex Grossman", "Danny Wuerffel", "Chris Leak"], answer: "Kyle Trask" },
  { question: "What year did the Florida Gators last win the SEC Championship?", options: ["2008", "2006", "2012", "2015"], answer: "2008" },
  { question: "Which Florida Gators team holds the record for most points scored in a single season?", options: ["2008", "1996", "2020", "2006"], answer: "2008" },
  { question: "What is the name of the Florida Gators mascot?", options: ["Albert", "Allie", "Chomper", "Gator"], answer: "Albert" },
  { question: "What year did the Florida Gators win their second national championship?", options: ["2006", "2008", "1996", "2010"], answer: "2006" },
  { question: "Who is the Florida Gators’ all-time leading rusher?", options: ["Emmitt Smith", "Fred Taylor", "Errict Rhett", "Tim Tebow"], answer: "Errict Rhett" },
  { question: "How many national championships have the Florida Gators won in football?", options: ["3", "4", "2", "5"], answer: "3" },
  { question: "Which Florida Gators player was nicknamed 'The Chosen One' during his career?", options: ["Percy Harvin", "Tim Tebow", "Kyle Pitts", "Chris Leak"], answer: "Tim Tebow" },
  { question: "What year was Florida's first SEC Championship victory?", options: ["1991", "1993", "1994", "1995"], answer: "1991" },
  { question: "Which Florida Gators receiver was a first-round pick in the 2021 NFL Draft?", options: ["Kyle Pitts", "Kadarius Toney", "Freddie Swain", "Van Jefferson"], answer: "Kadarius Toney" },
  { question: "What is the capacity of Ben Hill Griffin Stadium?", options: ["88,548", "90,000", "91,916", "85,000"], answer: "88,548" },
  { question: "Which Florida Gators linebacker won the Butkus Award in 2006?", options: ["Brandon Spikes", "Channing Crowder", "Jarvis Moss", "Brandon Siler"], answer: "Brandon Spikes" },
 { question: "What year did the Florida Gators join the SEC?", options: ["1932", "1933", "1928", "1926"], answer: "1932" },
  { question: "What are the Florida Gators’ official colors?", options: ["Orange and Blue", "Green and Gold", "Crimson and White", "Purple and Gold"], answer: "Orange and Blue" },
  { question: "Who is the Florida Gators' career leader in receiving yards?", options: ["Carlos Alvarez", "Ricky Nattiel", "Jabar Gaffney", "Percy Harvin"], answer: "Carlos Alvarez" },
  { question: "What is the nickname of the Florida Gators’ marching band?", options: ["The Pride of the Sunshine", "The Swamp Marchers", "The Orange Wave", "The Alligator Brigade"], answer: "The Pride of the Sunshine" },
  { question: "Which Florida Gators coach was nicknamed ‘The Head Ball Coach’?", options: ["Steve Spurrier", "Urban Meyer", "Dan Mullen", "Will Muschamp"], answer: "Steve Spurrier" },
  { question: "Which Florida Gators player was the No. 1 overall pick in the 1985 NFL Draft?", options: ["Lomas Brown", "Wilber Marshall", "John L. Williams", "Alonzo Highsmith"], answer: "Lomas Brown" },
  { question: "Who is the Florida Gators’ all-time leader in interceptions?", options: ["Willie Jackson", "Lito Sheppard", "Reggie Nelson", "Joe Brodsky"], answer: "Willie Jackson" },
  { question: "What year did the Florida Gators football program begin?", options: ["1906", "1910", "1904", "1901"], answer: "1906" },
  { question: "Which Florida Gators kicker holds the record for the longest field goal?", options: ["Evan McPherson", "Chris Perkins", "Caleb Sturgis", "Judd Davis"], answer: "Evan McPherson" },
  { question: "Who did the Florida Gators defeat to win their 2008 National Championship?", options: ["Oklahoma", "Ohio State", "Alabama", "USC"], answer: "Oklahoma" },
  { question: "Who was the Florida Gators’ defensive coordinator during their 2006 National Championship season?", options: ["Charlie Strong", "Dan Quinn", "Randy Shannon", "Greg Mattison"], answer: "Charlie Strong" },
  { question: "Which Florida Gators player is known for the famous ‘Promise’ speech?", options: ["Tim Tebow", "Urban Meyer", "Chris Leak", "Percy Harvin"], answer: "Tim Tebow" },
  { question: "Who was the Florida Gators’ leading receiver in the 2020 season?", options: ["Kyle Pitts", "Kadarius Toney", "Tre Grimes", "Van Jefferson"], answer: "Kadarius Toney" },
  { question: "What SEC East rival do the Florida Gators face annually in Jacksonville?", options: ["Georgia Bulldogs", "Tennessee Volunteers", "South Carolina Gamecocks", "Missouri Tigers"], answer: "Georgia Bulldogs" },
  { question: "Which former Florida Gators linebacker was inducted into the Pro Football Hall of Fame in 2007?", options: ["Jack Youngblood", "Wilber Marshall", "Derrick Thomas", "Emmitt Smith"], answer: "Jack Youngblood" },
  { question: "What year did Urban Meyer become the head coach of the Florida Gators?", options: ["2005", "2004", "2006", "2007"], answer: "2005" },
  { question: "Which Florida Gators quarterback set the SEC single-season touchdown record in 2020?", options: ["Kyle Trask", "Tim Tebow", "Danny Wuerffel", "Rex Grossman"], answer: "Kyle Trask" },
  { question: "Who was the Florida Gators’ first All-American player?", options: ["Ark Newton", "Jack Meagher", "Charlie Bachman", "Rhett Brown"], answer: "Ark Newton" },
  { question: "What is the Florida Gators' fight song called?", options: ["Orange and Blue", "Gator Nation", "The Swamp Chant", "Gators Forever"], answer: "Orange and Blue" },
  { question: "Which Florida Gators player was nicknamed ‘Cadillac’?", options: ["Willie Jackson", "Ricky Nattiel", "Emmitt Smith", "Carlos Alvarez"], answer: "Carlos Alvarez" },
  { question: "Which former Florida Gator went on to become a WWE champion?", options: ["Ron Simmons", "Emmitt Smith", "Fred Taylor", "Trey Burton"], answer: "Ron Simmons" },
  { question: "Which team did the Florida Gators defeat to win their first-ever SEC Championship Game?", options: ["Alabama", "Georgia", "Tennessee", "LSU"], answer: "Alabama" },
];

  let currentQuiz = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  score = 0;
  currentQuestionIndex = 0;
  currentQuiz = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
  showQuestion();
}

function showQuestion() {
  const questionData = currentQuiz[currentQuestionIndex];
  const quizContainer = document.getElementById("quiz-container");

  quizContainer.innerHTML = `
    <div>
      <h3>Question ${currentQuestionIndex + 1} of 10</h3>
      <p>${questionData.question}</p>
      ${questionData.options
        .map(
          (option) =>
            `<button class="quiz-option" onclick="submitAnswer('${option}', this)">${option}</button>`
        )
        .join("")}
    </div>
  `;
}

function submitAnswer(selected, buttonElement) {
  const questionData = currentQuiz[currentQuestionIndex];

  if (selected === questionData.answer) {
    score++;
    buttonElement.style.backgroundColor = "green"; // Correct answer
  } else {
    buttonElement.style.backgroundColor = "red"; // Incorrect answer

    // Highlight the correct answer for reference
    const correctButton = Array.from(document.querySelectorAll(".quiz-option")).find(
      (btn) => btn.textContent === questionData.answer
    );
    if (correctButton) {
      correctButton.style.backgroundColor = "green";
    }
  }

  // Disable all buttons to prevent further clicks on this question
  Array.from(document.querySelectorAll(".quiz-option")).forEach((btn) => {
    btn.disabled = true;
  });

  // Proceed to the next question after a short delay
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuiz.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000); // 1-second delay
}

function showResults() {
  const quizContainer = document.getElementById("quiz-container");
  const percentage = ((score / currentQuiz.length) * 100).toFixed(2);

  quizContainer.innerHTML = `
    <div>
      <h3>Quiz Complete!</h3>
      <p>Your Score: ${score} / ${currentQuiz.length}</p>
      <p>Percentage: ${percentage}%</p>
      <button onclick="startQuiz()">Retake Quiz</button>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  startQuiz(); // Start the quiz immediately when the page loads
});

// Unified Tab Navigation and Scrolling Function
const tabLinks = document.querySelectorAll(".opponent-link");
const tabContents = document.querySelectorAll(".tab-content");

// Add click event listeners to all schedule links
tabLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); // Prevent default link behavior

    // Get the target tab ID from the link's href
    const targetTabId = link.getAttribute("href").substring(1);

    // Hide all tab contents and remove animations
    tabContents.forEach(tab => {
      tab.classList.add("hidden");
      tab.classList.remove("animate"); // Reset animation class
    });

    // Show the targeted tab and add animation
    const targetTab = document.getElementById(targetTabId);
    if (targetTab) {
      targetTab.classList.remove("hidden");
      targetTab.classList.add("animate");
      targetTab.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }

    // Highlight the active link
    tabLinks.forEach(link => link.classList.remove("active"));
    link.classList.add("active");
  });
});

    // Image Gallery Functionality
    document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#photo-gallery .gallery-img");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.remove("active");
        if (i === index) img.classList.add("active");
      });
    }

    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    // Initialize the first image
    showImage(currentIndex);
  });
