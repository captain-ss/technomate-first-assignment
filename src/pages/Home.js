import * as React from "react";
import ProductCard from "../Components/productCard";
import { ProductsData } from "../DummyData";
import "../App.css";
import { useState, useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AddProductForm() {
  return (
    <div className="addProductForm">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name of product</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price of medium size product</Form.Label>
          <Form.Control type="number" placeholder="235" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price of large size product</Form.Label>
          <Form.Control type="number" placeholder="235" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price of small size product</Form.Label>
          <Form.Control type="number" placeholder="235" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Color</Form.Label>
          <Form.Control type="text" placeholder="Color" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Discount in decimal</Form.Label>
          <Form.Control
            type="text"
            placeholder="E.g. 0.1,0.3 (discount should not in percent)"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Available city</Form.Label>
          <Form.Control type="text" placeholder="Delhi ,mumbai,chennai " />
        </Form.Group>
        <Button
          variant="contained"
          type="submit"
          style={{
            border: "1px solid gray",
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const Home = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <div>
          <Button onClick={handleOpen}>Add Product</Button>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <AddProductForm />
              </Box>
            </Fade>
          </Modal>
        </div>
        <div>filters</div>
      </div>
      <div className="Home-product-cards">
        {ProductsData.map((Data, idx) => {
          return <ProductCard Data={Data} key={idx} />;
        })}
      </div>
    </div>
  );
};

export default Home;
