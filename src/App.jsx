import TabButton from './components/TabButton.jsx';
import Header from './components/Header.jsx';
import CoreConcept from './components/coreconcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import React, { useState } from 'react';
import { EXAMPLES } from './data-with-examples.js';
function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(selectedButton){
    return(
      setSelectedTopic(selectedButton)
    )    
  }
    let tabContent = <p>pls choose ur topic</p>
    if (selectedTopic) {
     tabContent = (
      <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
     </div>
     )
  }
  return (
    <div>
      <Header/>
      <main>
       <section id="core-concepts">
         <h2>Core Concepts</h2>
         <ul>
           {/* <CoreConcept 
           title={CORE_CONCEPTS[0].title}
           description={CORE_CONCEPTS[0].description}
           image={CORE_CONCEPTS[0].image}
           /> */}
           {CORE_CONCEPTS.map((conceptIem)=> <CoreConcept key={conceptIem.title} {...conceptIem} />)}
         </ul>
       </section>
        <section id='examples'>
          <h2>Examples</h2>
           <menu>
             <TabButton  
             onSelectedBtn={ selectedTopic === "component"}
             onSelect={() =>handleSelect("components")}
             >Component</TabButton>
             <TabButton 
             onSelectedBtn={ selectedTopic === "jsx"} 
             onSelect={() =>handleSelect("jsx")}
             >JSX</TabButton>
             <TabButton  
             onSelectedBtn={ selectedTopic === "props"}
             onSelect={() =>handleSelect("props")}
             >Props</TabButton>
             <TabButton 
             onSelectedBtn={ selectedTopic === "state"}
              onSelect={() =>handleSelect("state")}
             >State</TabButton>
           </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
