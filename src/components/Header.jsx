import { memo } from "react";
import { Form, InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";

const Header = memo(({ search, handeleSearch }) => {
  console.log("Header");
  return (
    <Form>
      <InputGroup className="my-3">
        <Form.Control
          value={search}
          onChange={handeleSearch}
          placeholder="Searching"
          aria-label="Searching"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Text>select</InputGroup.Text>
      </InputGroup>
    </Form>
  );
});

Header.propTypes = {
  handeleSearch: PropTypes.func,
};

Header.displayName = "Header";

export default Header;
