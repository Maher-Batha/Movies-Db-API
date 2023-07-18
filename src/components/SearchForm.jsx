import React from "react";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <section className="search-form">
      <div className="container">
        <Form className="form">
          <input
            type="search"
            name="search"
            className="form-input"
            defaultValue={searchTerm}
            placeholder="search for a movie...."
          />
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? "searching..." : "search"}
          </button>
        </Form>
      </div>
    </section>
  );
};

export default SearchForm;
