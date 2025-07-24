//Il comeponente ReservationList si occupperà di creare una lista
// di prenotazioni sulla base del contenuto attuale del DB
//all'avvio quindi dovrà fare una chiamata GET all'endpoint
//'https:striveschool-api.herokuapp.com/api/reservation'
//e mostrare all'utente tutte le prenotazioni esistenti

import { Component } from "react";

//ogni componente di React potrà decidere in autonomia di effettuare tutte le operazioni
//al suo avvio

class ReservationList extends Component {
  state = {
    reservations: [],
    //se io trovassi il modo di recuperare le prenotazioni e inserirle in questo array
    //...React riempirebbe la ListGroup automaticamente
  };

  //creo la funzione per la chiamata GET
  getReservations = () => {
    //questa funzione si occuperà di recuperare le prenotazioni
    // e di salvarle nello stato del componente
    fetch("https:striveschool-api.herokuapp.com/api/reservation")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero prenotazioni");
        }
      })
      .then((arrayOfResevations) => {
        console.log(arrayOfResevations);
        this.setState({
          reservations: arrayOfResevations,
          //sostituisco nello state l'array
          //di prenotazioni recuperato dalle API
        }).catch((err) => {
          console.log("ERRORE", err);
        });
      });
  };
  //nuovo superpotere dei componenti a classe: il metodo componentDidMount()

  componentDidMount() {
    //si può inserire in ogni componente a classe e si comporta così:
    //1)viene eseguito una volta sola per l'intero ciclo-vita del componente
    //2)viene eseguito dopo il primo render()
    this.getReservations();
    //componentDidMount è il posto perfetto per tutte quelle operazioni lunghe,
    //scomode e/o asincrone che condizionano il primo montaggio del componente

    //quindi la nostra fetch viene eseguita una volta sola, subito dopo il disegno
    //delle parti statiche del componente,
  }

  render() {
    //this.getReservations()
    //non posso invocare questa funzione nel metodo render

    //perchè ogni volta che effettuiamo un setState, il metodo render()
    //viene re-invocato automaticamente

    //detta in altro modo:
    //-> un componente React re-invoca il metodo render() ogni volta
    //che cambia il suo stato o riceve nuove prpos

    return (
      <>
        <Container>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={8} lg={6}>
              <h2 className="text-center">Prenotazioni</h2>
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={8} lg={6}>
              <ListGroup>
                {this.state.reservations.map((prenotazione) => {
                  return (
                    <ListGroup.Item>
                      {prenotazione.name} per {prenotazione.numberOfPeople} alle
                      {""}
                      {prenotazione.dataTime}
                    </ListGroup.Item>
                  );
                })}
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default ReservationList;
