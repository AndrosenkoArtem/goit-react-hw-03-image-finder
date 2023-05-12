import { GlobalStyle } from './GlobalStyle';
import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import styles from '../styles.module.css';
import { fetchPixabayApi } from '../services/pixabayApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
export class App extends Component {
  state = {
    searchName: '',
    images: [],
    error: null,
    page: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, searchName } = this.state;
    if (prevState.searchName === this.state.searchName) {
      return;
    }
    try {
      const images = await fetchPixabayApi(searchName, page);
      this.setState({ images });
      if (!images.length) {
        toast.warn('we did not find an image with this name');
        return;
      }
    } catch (error) {
      this.setState({ error });
    }
  }
  changeSearchName = ({ search }) => {
    this.setState({ searchName: search });
  };
  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };
  setPage = async () => {
    // this.setState({ page: (this.state.page += 1) });
    try {
      const images = await fetchPixabayApi(
        this.state.searchName,
        (this.state.page += 1)
      );
      this.setState(
        prevState => ({
          images: [...prevState.images, ...images],
          page: (this.state.page += 1),
        }),
        this.scroll
      );
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    return (
      <section className={styles.App}>
        <GlobalStyle />
        <ToastContainer autoClose={10000} />
        <Searchbar onSubmit={this.changeSearchName} />
        {this.state.error && <div>{this.state.error}</div>}
        {this.state.images.length !== 0 && (
          <>
            <ImageGallery images={this.state.images} />
            <Button setPage={this.setPage} />
          </>
        )}
      </section>
    );
  }
}
