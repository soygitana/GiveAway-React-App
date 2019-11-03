import React from "react";
import { Link } from 'react-router-dom';

const Textbox = ({ link, text }) => <Link to={link} className="text-box">{text}</Link>

export default Textbox;