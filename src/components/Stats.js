import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

const Stats = ({ players }) => {
  let totalplayers = players.length;
  let totalpoints = players.reduce((total, player) => {
    return total + player.score;
  }, 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalplayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalpoints}</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  //.shape selects the specific object in the array
  players: PropTypes.arrayOf(
    PropTypes.shape({
      score: PropTypes.number
    })
  )
};

export default Stats;
