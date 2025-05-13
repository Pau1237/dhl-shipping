import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const Mapa = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  });

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: '400px', height: '400px' }}
      zoom={10}
      center={{ lat: 19.432608, lng: -99.133209 }}
    >
      <Marker position={{ lat: 19.432608, lng: -99.133209 }} />
    </GoogleMap>
  );
};

export default Mapa;
