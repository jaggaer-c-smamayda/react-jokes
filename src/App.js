import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from "react-bootstrap/Button";
// ========= NOTES========

   //In class-based components the perfect place for data 
    //fetching is componentDidMount() lifecycle method.
            
    //In functional components it is useEffect() hook with an 
    //empty dependency array because we need the data to be fetched once.


    //We can fetch data on triggering an event (for example button click)

    //ways of fetching data #1 using fetch API #2BY custom method #3By GraphQL #4 By Rect Query Library.
class App extends React.Component {
   
        // Constructor 
        constructor(props) {
            super(props);
             this.state = {
               error: null,
               isLoading: false,
                jokes: []
            };
        }
        // ComponentDidMount is used to
          // execute the code 
    componentDidMount() {
        fetch ( 'https://api.icndb.com/jokes/random/4' )
            // Grabbing the information from the JSON file.
            .then( res => res.json() )
            // Fetching the joke from value in JSON.
            //.then((data) => setJoke(data.joke));
            .then( json => {
                if( json.type==='success' ){
                    //console.log(json);
                    json.value.forEach( ( obj)=>{
                        this.setState(prevState => ( {
                            isLoading:true,
                            jokes: [...prevState.jokes, obj.joke]}));
                    } )

             // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              
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
        const {jokes,handleClick} = this.state;
        return (
       
            <Container
                style={{position: 'relative', width: 'Auto'
                }}>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Jokes</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#joke">Joke</Nav.Link>
                        <Nav.Link href="#movies">Movies</Nav.Link>
                    </Nav>
                </Navbar>

                <Row>
                <Col style={{
                    backgroundColor: 'red',
                    height:350,
                    borderRadius: 9,
                }}>
                    <input style={{
                        textAlign: 'center',
                        }} id="inputId" type="number" name="numberInput"  max="20" min="1" step="1"/>


                    <Button style={{
                        alignItems: 'center',
                        marginTop:70,
                        marginLeft:220,
                        textAlign: 'center',
                    }} onClick={handleClick} > Click me for more jokes</Button>
                    
                        <p style={{
                        alignItems: 'center',
                        marginTop:90,
                        textAlign: 'center',
                        }}
                         id='j1'>{jokes[0]}</p>
                        
                </Col>
                <Col style={{
                    backgroundColor: 'yellow',
                    borderRadius: 9,
                }}>
                    <p  style={{
                        marginTop:170,
                        alignItems: 'center',
                        textAlign: 'center',
                        }} id='j2'> {jokes[1]}</p>

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
                    }} id='j3'> {jokes[2]}</p>

                </Col>
                <Col style={{
                    backgroundColor: 'pink',
                    borderRadius: 9,
                }}>
                   <p  style={{
                        alignItems: 'center',
                        marginTop:170,
                        textAlign: 'center',
                        }} id='j4'>{jokes[3]} </p>
                </Col>
            </Row>
          </Container>
       
    );
}
}
export default App;