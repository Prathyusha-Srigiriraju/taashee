
import React , {useState} from 'react';



const LanguageSelectionComponent = (props) => {


  function handleSelectChange(event) {

    var offset, text

    if(event.target.value === 'en-US') { offset = -5 ; text = "Central America" ;}
    if(event.target.value === 'pt-BR') { offset = -3 ; text = "Brazil" ; }
    if(event.target.value === 'en-GB') { offset = 1 ; text = "London"; }

 
    var d = new Date();
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = new Date(utc + (3600000*offset));
    setSelectedCountry( "Time zone in "+ text + ' ' + nd.toLocaleString());
    console.log( "Time zone in "+ text + ' ' + nd.toLocaleString() )
  }

  const list = props.name


  const [selectedCountry,setSelectedCountry] = useState("Select Dropdown");

 
  return (
    <div className="drop">

      <div className="Datadisplay">
      <h4>Select Dropdown </h4>

        <select onChange={handleSelectChange}>
        {list.map(list => <option  key={list} value={list}>{list}</option>)}
        </select>
      </div>
        
      <div className="Datadisplay2">
      <h4>Display Time</h4>
          {selectedCountry}
      </div>
    </div>
    
);
};

 
export default LanguageSelectionComponent;