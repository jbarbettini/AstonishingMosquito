import React from 'react';
import { connection } from './LibraryModel';
import LibraryItemView from '../stateless/LibraryItemView';

class LibraryView extends React.Component {
  render() {
    return (
      <div>
        {this.props.songs.map(function(song) {
          return <LibraryItemView song={song} key={song.id} />;
        })}
      </div>
    );
  }
};

export default connection(LibraryView);
