import { NavBar, CountdownDate, PhotoGallery, MemoryLaneTimeLine, EventInfo, AddToCalendar, FAQ, FAQCategory, FAQItem } from "./assets/components"
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
import tci from "./assets/photos/venue-tci.jpeg";


function App() {
  const [activeSection, setActiveSection] = useState("Home")
  const photos = [bw1, photo1, ring2, photo2, bw2, photo3, bw3, ring, bw4, photo4];
  const test= [photo1, photo2]
  const memories = [
        {
            title: "TEST",
            date: "AUGUST 2020",
            description: "TEST DESCRIPTION",
            image: test[0]
        },

        {
            title: "TEST2",
            date: "AUGUST 2020",
            description: "TEST DESCRIPTION",
            image: test[1]
        },
  ];

  const faq = [
    {
      title: "General Wedding Details",
      questions: [
        {
          question: "When is the wedding?",
          answer: "August 3rd, 2027 @ 4:30PM!"
        },

        {
          question: "Where is the wedding?",
          answer: "The venue for the wedding is Temecula Creek Inn."
        },

        {
          question: "Is there a dress code?",
          answer: "To be announced ... >:)"
        }

      ]
    }
  ]

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
                              <h1>LOVE STORY</h1>
                              <p>Emily & Cameron met in fall of 2020. They both joined InterVarsity Christian Fellowship at Cal State Long Beach 
                                and happened to end up in the same small group. This small group would stay up late hanging out together on Zoom 
                                playing games or watching movies. Once school started to come back in person, hanging out on Zoom turned into going 
                                to the school gym for Zumba, walking around Downtown Disney, and late night hang outs at the beach. One night after 
                                hanging out with friends, Emily & Cameron told each other they liked each other and decided to go out on a date. 
                                <br></br>
                                They had their first date at the Irvine Spectrum and had a great time. While walking back to their cars, 
                                Cameron asked Emily to officially be his girlfriend… But Emily respectfully declined and asked to be taken on another 
                                date first. So Cameron & Emily went out again about a month later to the LA Zoo & after their date Cameron asked again 
                                and this time Emily said yes. Emily & Cameron officially began their relationship on January 3rd, 2022.
</p>
                          </div>

                          <div className="memory-lane">
                              <MemoryLaneTimeLine 
                                events={memories}
                              />

                          </div>
                      </div>
                    )}

                    {activeSection === 'Schedule' && (
                      <section className="schedule-section">
                      
                        <EventInfo 
                            venuePic={tci}
                            name= "TEMECULA CREEK INN"
                            time="4:30PM"
                            address="Temecula, CA"
                            description="The place we getting married at lmao"
                            extraDetails="The Stone House is not accessible by personal vehicle or by foot. 
                                          Temecula Creek Inn provides a shuttle from the Shuttle Island, to 
                                          the left of the hotel lobby. The shuttle will run from 3:30-4:00 P.M. 
                                          to bring guests in for the ceremony, which is at 4:30 in the evening. 
                                          The shuttle will run continuously throughout the event to return guests 
                                          to the lobby."
                            mapLink = "https://maps.apple.com/directions?destination=Temecula+Creek+Inn%2C+44501+Rainbow+Canyon+Rd%2C+Temecula%2C+CA+92592%2C+United+States&destination-place-id=ICFBAF344C8D969B4&mode=driving"
                            start="20270803T233000Z"
                            end="20270804T053000Z"

                        />

                        <section className="accommodations">
                            <h1>ACCOMMODATIONS</h1>
                            <EventInfo 
                                venuePic={tci}
                                name= "Pechanga Resort Casino"
                                address="45000 Pechanga Pkwy, Temecula, CA 92592"
                                mapLink = "https://maps.apple.com/place?place-id=I570092F6133EAA6A&address=45000+Pechanga+Pkwy%2C+Temecula%2C+CA++92592%2C+United+States&coordinate=33.456230%2C-117.106610&name=Pechanga+Resort+Casino&_provider=9902"
                            />

                            <EventInfo 
                                venuePic={tci}
                                name= "Embassy Suites by Hilton Temecula"
                                address="29345 Rancho California Rd, Temecula, CA 92591"
                                mapLink = "https://maps.apple.com/directions?destination=Embassy+Suites+by+Hilton+Temecula+Valley+Wine+Country%2C+29345+Rancho+California+Rd%2C+Temecula%2C+CA++92591%2C+United+States&destination-place-id=I1D41955442C8134D&mode=driving"
                            />
                        </section>
                      </section>
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
                      <section className="FAQs-section">
                          <FAQ categories={faq}/>
                      </section>
                    )}
              </main>
        </div>
        
    </>
  )
}

export default App
