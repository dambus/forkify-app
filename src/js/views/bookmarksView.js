import View from './View';
import icons from 'url:../../img/icons.svg'; //parcel 2
import previewView from './previewView';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = `No bookmarks yet. Find some nice recipe and then bookmark it`;
  _message = ``;

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
