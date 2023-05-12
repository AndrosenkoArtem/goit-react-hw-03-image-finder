import { Formik, Form, Field, ErrorMessage } from 'formik';
import styles from '../../styles.module.css';
export const Searchbar = ({ onSubmit }) => (
  <header className={styles.Searchbar}>
    <Formik
      initialValues={{ search: '' }}
      onSubmit={(values, actions) => {
        onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form className={styles.SearchForm}>
        <button className={styles.SearchFormButton} type="submit">
          <span></span>
        </button>

        <Field
          className={styles.SearchFormInput}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <ErrorMessage name="search" component="div" />
      </Form>
    </Formik>
  </header>
);
