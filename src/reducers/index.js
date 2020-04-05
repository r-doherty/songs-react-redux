import { combineReducers } from 'redux';

// Static array - so no args - we never expect to change it in this case
const songsReducer = () => {
    return [
        { title: 'Rushing Back', duration: '4:45', artist: 'Flume (ft. Vera Blue)' },
        { title: "Go With The Flow", duration: '3:11', artist: 'Queens Of The Stone Age' },
        { title: 'Let it Happen', duration: '7:54', artist: 'Tame Impala' },
        { title: 'Reptilia', duration: '3:39', artist: 'The Strokes' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});