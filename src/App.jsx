import { NavBar, CountdownDate, PhotoGallery } from "./assets/components"
import { useState } from "react"
import photo1 from "./assets/photos/photo1.jpg"
import photo2 from "./assets/photos/photo2.jpg"
import photo3 from "./assets/photos/photo3.jpg"
import photo4 from "./assets/photos/photo4.jpg"



function App() {
  const [activeSection, setActiveSection] = useState("Home")
  const photos = [photo1, photo2, photo3, photo4];

  return (
    <>  
        <div className="content-row">
          <div className="header-section">
                    <h1>Emily & Cameron</h1>
              </div>
              <NavBar setActiveSection={setActiveSection}/>
              <main className="main-content">
                     {activeSection === 'Home' && (
                      <div>
                        <h1>Home</h1>
                        <PhotoGallery images={photos}/>
                        <CountdownDate targetDate="2027-08-03T18:00"/>
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
