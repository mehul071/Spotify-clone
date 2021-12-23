import './App.css';
import React, {useState,useEffect} from 'react';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player'
import { useDataLayerValue } from './DataLayer';


const spotify = new SpotifyWebApi();

function App() {
  const [{user,token,playlists}, dispatch] = useDataLayerValue();

  useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;
      
      if(_token)
      {

        dispatch({
          type:'SET_TOKEN',
          token: _token,
        })
        spotify.setAccessToken(_token);
        spotify.getMe().then((user) =>{
          dispatch({
            type:'SET_USER',
            user: user,

          })
        })
        spotify.getUserPlaylists().then((playlists) =>{
          dispatch({
            type:'SET_PLAYLISTS',
            playlists:playlists,
          });
        });
        console.log(playlists)
      }
      
  }, []);
  
  console.log('token',token);

  return (
    <div>
          
            {token ? 
            (
              <div>
                <Player spotify={spotify}/>
              </div>
            )
              :
            (
              <Login/>
            )
            }
            
    </div>
  );
}

export default App;
