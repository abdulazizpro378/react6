
import { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import Header from "../components/Header";
import StudentForm from "../components/StudentForm";
import StudentTable from "../components/StudentTable";

import { useForm } from "../hooks/useForm";

const AdmenP = () => {

  const {validated, product, products,select, handleChange, submit,editProduct,deleteDebt} =useForm()
  

  
  const [search, setSearch] = useState("");





  // search logika

  const handeleSearch = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
  };

  const resulte = products.filter((product) =>
    product.ProductName.toLowerCase().includes(search)
  );

  // const CategoryFillter = resulte.filter(product=>product.Category)

  // sort price

  const getSort = () => {
    return resulte.sort((a, b) => +b.Price - +a.Price);
  };


  const sortPrice = getSort();



  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={5}>
            <StudentForm
              product={product}
              handleChange={handleChange}
              submit={submit}
              validated={validated}
              select={select}
            />
          </Col>
          <Col lg={7}>
            <Header search={search} handeleSearch={handeleSearch} />
            <StudentTable products={sortPrice}  editProduct={editProduct} deleteDebt={deleteDebt}/>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AdmenP;
