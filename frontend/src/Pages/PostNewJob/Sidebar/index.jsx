import React from 'react'
import SidebarFields from "./SidebarFields.js";
import {useNavigate} from 'react-router-dom';
import BalanceIcon from "../../../assets/BalanceIcon.png";
import "./index.css";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div class='flex flex-col justify-between custom-bg-sidebar border h-full p-8 rounded-lg'>
      <div>
        {SidebarFields.map((val, key) => {
          return (
            <div id={
              window.location.pathname === "/" + val.linkTo
                ? "sideActiveJob"
                : "sideInactiveJob"
            } class='flex m-2'>
              <div class='flex items-center justify-center p-2'>
                <img src={val.icon} alt="/"/>
              </div>
              <div
                class="text-2xl my-6 flex justify-center items-center p-2"
              >
                <div onClick={() => {
                  navigate(`/${val.linkTo}`)
                }}>    </div>
                  {val.name}
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div class='m-2 p-2 flex w-full justify-center'>
          <img src={BalanceIcon} alt="/"/>
        </div>
        <div class='m-2 p-2 text-xl w-full flex justify-center'>Coin Balance : 200</div>
        <div class='m-2 p-2 w-full'>
          <button class='mx-auto w-2/3 flex justify-center custom-btn-buymore'>Buy more Coins</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar