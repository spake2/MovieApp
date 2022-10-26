import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./result.css"

export default function Results(props) {
  const boxes = props.movies.map((item, index) => {
    return (
      <Box
        key={index}
        image={item.poster_path}
        title={item.title}
        rating={item.vote_average}
        language={item.original_language}
        overview={item.overview}
        release={item.release_date}
      />
    );
  });
  return <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-5">{boxes}</div>;
}
const Box = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div  className="shadow min-h-[200px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] mt-3 pb-1 rounded-lg">
      <Modal show={show} onHide={handleClose} centered className="p-1 sm:text-xl text-sm">
        <Modal.Header closeButton className="flex content-between justify-between">
        <Modal.Title >{props.title}</Modal.Title>
        <Modal.Body className="text-center">Release Date : {props.release}</Modal.Body>
        </Modal.Header>
        <Modal.Body className="sm:flex sm:justify-center sm:items-center">
        <Modal.Body className="p-1">{props.overview}</Modal.Body>
          <img src={IMGPATH + props.image} alt="IMG" className="w-50 rounded-md "></img>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <img
        onClick={handleShow}
        src={IMGPATH + props.image}
        alt="IMG"
        className="w-full rounded-t-lg relative cursor-pointer"
      ></img>
      <div className="flex justify-center px-2 flex-wrap items-center" onClick={handleShow}>
        <span className="flex text-center  sm:text-2xl text-md text-slate-400 hover:text-[#FF8C00] cursor-pointer py-1">{props.title}</span>
        <span className="text-xl font-bold text-yellow-500 shadow-md bg-zinc-800 ml-5 rounded-bl-lg p-1">
          {<span className="text-green-500 text-xs md:text-xl">{props.rating}⭐</span>}
        </span>
      </div>
    </div>
  );
};
