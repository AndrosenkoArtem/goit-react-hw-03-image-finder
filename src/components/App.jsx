import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import './global-styles.css';
import styles from './App.module.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
export class App extends Component {
  state = {
    searchName: '',
  };

  changeSearchName = ({ search }) => {
    this.setState({ searchName: search.trim() });
  };
  render() {
    return (
      <div className={styles.App}>
        <ToastContainer autoClose={10000} />
        <Searchbar onSubmit={this.changeSearchName} />
        <ImageGallery searchName={this.state.searchName} />
      </div>
    );
  }
}
/**
 * vfdklvdf
 */
