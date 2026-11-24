import { NavBar, CountdownDate, PhotoGallery, MemoryLaneTimeLine } from "./assets/components"
import { useState } from "react"
import photo1 from "./assets/photos/photo1.jpg"
import photo2 from "./assets/photos/photo2.jpg"
import photo3 from "./assets/photos/photo3.jpg"
import photo4 from "./assets/photos/photo4.jpg"
import ring from "./assets/photos/ring-pic.jpg"
import ring2 from "./assets/photos/ring.jpg";
import bw1 from "./assets/photos/bw-1.jpg";
import bw2 from "./assets/photos/bw-2.jpg";
import bw3 from "./assets/photos/bw-3.jpg";
import bw4 from "./assets/photos/bw-4.jpg";


function App() {
  const [activeSection, setActiveSection] = useState("Home")
  const photos = [bw1, photo1, ring2, photo2, bw2, photo3, bw3, ring, bw4, photo4];
  const test= [photo1, photo2]

  return (
    <>  
        <div className="content-row">
          <div className="header-section">
                    <h1>EMILY & CAMERON</h1>
              </div>
              <NavBar setActiveSection={setActiveSection}/>
              <main className="main-content">
                     {activeSection === 'Home' && (
                      <div>
                        <PhotoGallery images={photos}/>

                        <CountdownDate targetDate="2027-08-03T18:00"/>
                          <div className="love-story">
                              <h1>Love Story</h1>
                          </div>

                          <div className="memory-lane">
                              <h1>A TRIP DOWN MEMORY LANE</h1>
                              <MemoryLaneTimeLine 
                                photos={photos}
                              />

                          </div>
                      </div>
                    )}

                    {activeSection === 'Schedule' && (
                      <div>
                        <h1>Schedule</h1>
                      </div>
                    )}

                    {activeSection === 'Travel' && (
                      <div>
                        <h1>Travel</h1>
                      </div>
                    )}

                    {activeSection === 'Registry' && (
                      <div>
                        <h1>Registry</h1>
                      </div>
                    )}

                    {activeSection === 'Wedding Party' && (
                      <div>
                        <h1>Wedding Party</h1>
                      </div>
                    )}

                    {activeSection === 'Gallery' && (
                      <div>
                        <h1>Gallery</h1>
                      </div>
                    )}

                    {activeSection === 'FAQ' && (
                      <div>
                        <h1>FAQ</h1>
                      </div>
                    )}
              </main>
        </div>
        
    </>
  )
}

export default App
