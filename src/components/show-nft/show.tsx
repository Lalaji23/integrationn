import "./show.css";
import React from "react";

import pic from "../../assets/home-img.png";
import { useState } from "react";
import Modal from "../Modals/Modal";
import Addmemory from "../Modals/add-memory/add-memory";

const Show = () => {
  /*
    console.log(product_card);
    const unlistItem = product_card.map((item) =>
   < className='card-container' key={item.id}>
       
            <div className='parent-memo'>
                <div className='header-momo'>
                    <div className='memo-dialogue-box1'>
                        <div className='memo-image'><img alt=""  src={item.thumb}/></div><div className='memo-info'>
                            <h2>{item.product_name}</h2>
                           <h2>{item.brandname}</h2>
                            <h2>{item.logic}</h2>
                            <h2>Memories</h2><div className='grid-memo'>
                                <img alt=""  src={item.momories1}/>
                                <img alt=""  src={item.momories2}/>
                                <img alt=""  src={item.momories3}/>
                                <img alt=""  src={item.momories4}/>
                            </div>
                            </div>
                    </div>
                </div>
                <div className='footer-memo'>
                    <div className='memo-dialogue-box2'>
                        <div className='btn-memo'></div><div className='item-information'>
                        <div className='item-history'>
                            <h2>Item History</h2>
                            <h3>Brought by{item.brought_by}<br/>
                            {item.time_broght}</h3><hr/>
                            <h3>Minted by{item.minted_by}<br/>{item.Minted_time}
                            </h3>
                        </div><h2>Royalty Distribution</h2>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>)*/
  const [modalOpen, setModalOpen] = useState(false);

  const [AddmemoryOpen, setAddmemoryOpen] = useState(false);

  return (
    <div>
      <div className="Memories_card">
        {modalOpen && <Modal setOpenModal={setModalOpen} />}

        {AddmemoryOpen && <Addmemory setOpenAddmemory={setAddmemoryOpen} />}

        <div className="parent-memo">
          <div className="header-momo">
            <div className="memo-image">
              <img alt="" src={pic} />
            </div>
            <div className="memo-info">
              <h2>Jacket</h2>
              <h2>Zara</h2>
              <h2>6 US</h2>
              <h3>@description</h3>
              <h2 id="heading">Memories</h2>
              <div className="grid-memo">
                <img alt="" src={pic} />
                <img alt="" src={pic} />
                <img alt="" src={pic} />
                <img alt="" src={pic} />
              </div>
            </div>
          </div>
          <div className="footer-memo">
            <div className="btn-memo">
              <button
                id="auction"
                className="openModalBtn"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Auction
              </button>
              <button
                id="Add"
                onClick={() => {
                  setAddmemoryOpen(true);
                }}
              >
                Add Memory
              </button>
            </div>
            <div className="item-information">
              <div className="item-history">
                <h2>Item History</h2>
                <h3>
                  Brought by @bidder
                  <br />1 day ago
                </h3>
                <hr />
                <h3>
                  Minted by @sidco in channel series
                  <br /> 3 days ago
                </h3>
              </div>
              <h2>Royalty Distribution</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
