# SAMP.AI: CESIUM Billboards task

##### Submission by Maxime Franchot, 28 July 2021



### Example Recording

![Example Recording](samp.gif)


# Documentation

## Contents
- Development Methodology
- Technical Choices
- Design
- Tests
- Deployment / Packaging
- Documentation

### Development Methodology

No specific methodology was used. 

### Technical Choices

The Following Tech stack was chosen:
- **ReactJS** for Web Development
- CRA (Create-React-App) for fast deployment, and includes multiple packages needed
- **Craco-Cesium** for use of Cesium framework within CRA
- **Resium** for Cesium React components
- **Jest** and **React Testing Library** for testing

The stack presented the following upsides and downsides:
**Upsides:**
- ReactJS, along with Craco + Resium allowed for intuitive prototyping of reusable components.
- Resium being a superset framework of Cesium contains all its functionality
- Native Hot-Reloading for fast development
- CRA contains webpack & babel
- Most personal experience using React compared to Angular/Vue
- React Testing Library and Jest, being native to React minimized package issues

**Downsides:**
- Craco was last updated 2 years ago. This caused package dependency issues regarding webpack and more.
- Cesium UI was made with knockoutJS thus could not add native cesium components.
- Testing framework was limited in functionality compared to Karma+Jasmine.


### Application Design

The application components followed the following structure:

- App (App.js)
  - BillboardMaker (billboardMaker.js)
    - Viewer (resium)
      - CreateBillboardButton (createBillboardButton.js)
      - [list] Billboards (createBillboardButton.js)

This allowed for the following functionality:
- BillboardMaker manages all billboards' data.
- BillboardMaker has CreateBillboardButton manage user input and validation, and uses callback to add new billboards
- billboardData is stored in BillboardMaker class state.
- CreateBillboardButton is given access to parent "check if name is unique" callback, which uses billboardData

**Error handling** is done inside the CreateBillboardButton component, which handles user input and validation, and if any errors occur,
they are passed up the to BillboardMaker which will display those alerts to the user.

**Billboard** Component used the following Cesium components:
<Entity>
  <EntityDescription/>
  <LabelGraphics/>
  <BillboardGraphics/>
</Entity>
    
And contains the following features:
- "Location icon" through billboard graphics
- label displays **"billboard UID | city name"**
- Description displayed in side bar on press (resium for JSX)

### Visual Design

The visual design was inspired by the styling of the cesium app: dark grey/black, white text, light blue for highlighting.
The earth icon was selected for its relevance. The locator icon was selected for its contrast and simplicity.

### Tests

The following testing classes are available:
- billboardMaker.test.js
- createBillboardButton.test.js

The testing was separated into UI/UX functionality like rendering and button clicks, from mock/API and pure functionality testing.

### Deployment / Packaging
- Code is published on github
- Build available through **npm run build** (craco build)
- web app available on

### Documentation
The documentation was written as specification for both developers and non-developers. 

#### Future Developments

Next steps would include:
- [ ] (testing) fix testing compatability with updated file structure.
- [ ] (testing) Complete tests in billboardMaker.test.js
- [ ] (testing) Add UI tests for Billboard component
- [ ] (functionality) Focus Viewer camera on new billboard when added
- [ ] (functionality) Providing React UI for user input instead & live validation instead of prompts
