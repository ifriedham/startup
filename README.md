Useful links:  [📑Notes](notes.md)

# startup: :crocodile: KGLW Album Finder :crocodile:

![King Gizzard and the Lizard Wizard name logo](images/name_logo.png)

## Startup specification

### Elevator pitch

King Gizzard and the Lizard Wizard (or KGLW) is an Australian rockband famous for their wild variety in music styles. Since their beginnings in 2010, they have recorded 24 albums - each with their own take on a different genre. As a huge fan of the band myself, it is often very hard to recommend the band to others because I never know which album they would like best. My KGLW Album Finder application is the solution for this problem. The app will, through a series of personality and music preference questions, narrow down which album the user should start with. On top of this, it will also be able to tell the user which song to check out first, and which other albums (including those from other bands) they could explore next. Through the app, users will also be able to see which albums have been recommended the most - with real-time statistics from other users on whether or not they approved of the recommendations given.

### key features

- Login to view past results
- Selectable interactive buttons with questions
- Display of album art
- Back button to select different answers
- Button with "Start Over" option
- Ability to listen to soundbites of different albums
  - (if I can figure out how to do this)
- Persistant storing of results / progress
- Top recommended albums list (real time updating)
  - with total votes included
  - ablility to add a name to your vote
    - "See who likes this album", etc.
- Up/Down-voting buttons for final recommendations
- Links to recommended albums
  - and to band info (website/youtube/etc.)
  - don't worry about copyright issues, the band is all about free distribution (they secretly run the bootleg account for their own music)
- App theme changes dynamically with final recommendation

### Design

#### Splash / main page

![picture of splash page](images/spash.jpg)

#### Quiz card basic layout

![picture of card layout](images/card.jpg)

#### Global stats page

![global layout picture](images/global.jpg)



### Technologies*:

- HTML - Minimal number of pages with HTML structuring. Links to various external websites
- CSS - Good symplistic and dynamic styling, workable with different screen sizes
- JavaScript - Used for login, backend calls, and displaying/selection of data
- Calling web services - storing of user data (progress through quiz, login info)
- Providing web services - Displaying of user data (includes other user data)
- Authentication - Login functionality if users want to save their progress / recommendations
- Persistant data storing - saving user choices as they are made
- WebSocket data: Shows real time data in the community section
  - Most recommended albums / who likes those albums / etc.

*note that I do not understand all of these completely yet

## HTML Deliverable 

Built the base structure of my startup application using exclusively HTML

- **HTML** - 5 HTML pages: index, login, quiz, results, and stats
- **Links** - All pages accessable from `index.html`, and all pages lead into one another linearly
- **Textual Content** - Plenty of descriptive text and examples/placeholders in each page.  Some quiz content written as a placeholder.
- **3rd party service calls** - Placeholders for most popular songs from the albums inluded.  Also a miniplayer from SoundCloud is included, but I don't know if that counts
- **Images** - Got a few album covers in there, as well as an image for the name of the band.
- **Login** - Accessable from every page, with a placeholder html page.  Will make it a pop-up style card later on so the user can log in at any point during the quiz
- **Database** - Album statistics + user info will be held in the database.  The `stats.html` page has a placeholder box to represent this info
- **WebSocket** - Up/down-voting results will be updated in realtime both in the `results.html` and `stats.html` pages.  Placeholder text and forms are located in these as well.
