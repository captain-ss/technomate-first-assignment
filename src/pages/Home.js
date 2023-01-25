import * as React from "react";
import ProductCard from "../Components/productCard";
import { ProductsData } from "../DummyData";
import "../App.css";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
            <Box sx={style}>Form goes here</Box>
          </Fade>
        </Modal>
      </div>
      <div>
        filter goes here 
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
