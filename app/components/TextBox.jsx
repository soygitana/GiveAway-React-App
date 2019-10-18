import React from "react";
import {Link} from 'react-router-dom';
import "../styles/main.scss";

const Textbox = ({link, text}) => <Link to={link} className="text-box">{text}</Link>

export default Textbox;