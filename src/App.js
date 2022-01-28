import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// ========= NOTES========

   //In class-based components the perfect place for data 
    //fetching is componentDidMount() lifecycle method.
            
    //In functional components it is useEffect() hook with an 
    //empty dependancy array because we need the data to be fetched once.


    //We can fetch data on triggering an event (for example button click)

    //ways of fetching data #1 using fetch API #2BY custom method #3By GrapthQL #4 By Rect Query Libr.
class App extends React.Component {
   
        // Constructor 
        constructor(props) {
            super(props);
             this.state = {
               error: null,
               isLoading: false,
                joke: []
            };
        }
        // ComponentDidMount is used to
          // execute the code 
          componentDidMount() {
            fetch ( 'https://api.icndb.com/jokes/random' )
          // Grabbing the information from the JSON file.
            .then( res => res.json() )
          // Fetching the joke from value in JSON.
             .then( json => {
               if( json.type==='success' ){
                 json.value.forEach( ( obj, i )=>{
                 this.setState({
                   isLoaded:true,
                   joke: obj.value.joke});
             }
             // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              )
            }
           })       
      }
        handleClick() {
            fetch('https://api.icndb.com/jokes/random/3').then((data) =>
               data.json().then((data) => this.setState({ joke: data.value }))
           );
            //console.log(this.joke);
      } 
    
      render() {
        const {joke} = this.state;
        return (
       
            <Container
                style={{position: 'relative', width: 'Auto'
                }}>
            <Row>
                <Col style={{
                    backgroundColor: 'red',
                    height:350,
                    borderRadius: 9,
                }}>
                    <input style={{
                        textAlign: 'center',
                        }}id="inputId" type="number" name="numberInput"  max="20" min="1" step="1"/>
                    
                    <button style={{
                        
                        
                        }}type="button" id="jokeBtn">Click Me for more jokes</button>
                    
                        <p style={{
                        alignItems: 'center',
                        marginTop:90,
                        textAlign: 'center',
                        }}
                         id={joke}>let do it all </p>
                        
                </Col>
                <Col style={{
                    backgroundColor: 'yellow',
                    borderRadius: 9,
                }}>
                    <p  style={{
                        marginTop:170,
                        alignItems: 'center',
                        textAlign: 'center',
                        }}id='j2'>let do it all </p>

                </Col>
          < div className='w-100'/>
                <Col style={{
                    backgroundColor: 'green',
                    height:350,
                    borderRadius: 9,
                }}>
                    <p style={{
                        alignItems: 'center',
                        marginTop:170,
                        textAlign: 'center',  
                    }}id='j3'>let do it all </p>

                </Col>
                <Col style={{
                    backgroundColor: 'pink',
                    borderRadius: 9,
                }}>
                   <p  style={{
                        alignItems: 'center',
                        marginTop:170,
                        textAlign: 'center',
                        }}id='j4'>let do it all </p>
                </Col>
            </Row>
          </Container>
       
    );
}
}
export default App;