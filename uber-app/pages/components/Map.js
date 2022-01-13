import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiYmlvbG9naWNhbGx5dW5pcXVlIiwiYSI6ImNreDJub25ndzFrbGsyb3BodXZjaW0xNGgifQ.fbR8GLAly4zjMNifV3-g-g';

const Map = (props) => {

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-58.4655, -34.6054],
          zoom: 11
        });
        if(props.pickUpCoordinates){
          addToMap(map, props.pickUpCoordinates)
        }
        
        if(props.DropOffCoordinates){
          addToMap(map, props.DropOffCoordinates)
        }

        if(props.pickUpCoordinates && props.DropOffCoordinates){
          map.fitBounds([
            props.DropOffCoordinates,
            props.pickUpCoordinates
          ],{
            padding: 60
          })
        }


    }, [props.pickUpCoordinates, props.DropOffCoordinates]);

    const addToMap = (map, coordinates) => {
      const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);
    }

    return <Wrapper id='map'></Wrapper>
}

//Build Wrapper and pass it as Map, then i call it from index as <Map/>

export default Map

//Give right styles to that part of the main Wrapper, this below is a second Wrapper

const Wrapper = tw.div`
h-screen
`