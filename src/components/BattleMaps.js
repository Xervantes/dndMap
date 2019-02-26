import React from 'react';
import {Route, NavLink} from 'react-router-dom';
import DisplayMap from './DisplayMap';

const BattleMaps = ({match, battleMaps}) => {
    console.log("MAPS", battleMaps);
    const mapName = battleMaps.map((artist, index) => <li key={index}><NavLink
        to={`${match.path}/${artist.id}`}>{artist.name}</NavLink></li>);
    return (
        <main>
            <div className="list">
                <h1>Battle Maps</h1>
                <ul>
                    {mapName}
                </ul>
            </div>
            <div>
                <Route path="/battleMaps/:id" component={DisplayMap}/>
                {/*<Route path="/artists/:id" render={(props) => {*/}
                    {/*const artist = battleMaps.find(artist => artist.id === Number(props.match.params.id));*/}
                    {/*return <AlbumList {...props} artist={artist}/>*/}
                {/*}*/}
                {/*}/>*/}
            </div>
        </main>
    );
};

export default BattleMaps;