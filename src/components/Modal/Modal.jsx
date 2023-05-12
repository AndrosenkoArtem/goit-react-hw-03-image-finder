import { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
export class Modal extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };
  clsoeModalOnEsc = e => {
    if (e.code !== 'Escape') {
      return;
    }
    this.props.closeModal(e);
  };
  componentDidMount() {
    window.addEventListener('keydown', this.clsoeModalOnEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.clsoeModalOnEsc);
  }
  render() {
    const { url, alt, closeModal } = this.props;
    return (
      <div onClick={e => closeModal(e)} className={styles.Overlay}>
        <img className={styles.Modal} src={url} alt={alt} />
      </div>
    );
  }
}
