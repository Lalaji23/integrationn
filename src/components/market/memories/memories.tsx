import "./memories.css";
import React from "react";

import pic from "../../../assets/home-img.png";
import { useState } from "react";

import Bid from "../../Modals/Bid/Bid";

const Memories = () => {
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

  const [BidOpen, setBidOpen] = useState(false);

  return (
    <div>
      <div className="Memories_card">
        {BidOpen && <Bid setOpenBid={setBidOpen} />}

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
            <div className="footer-left">
              <div className="btn-memo">
                <button
                  id="bid"
                  className="openModalBtn"
                  onClick={() => {
                    setBidOpen(true);
                  }}
                >
                  BID
                </button>
              </div>
              <div className="auction-details">
                <h3>Auction details</h3>
                <h5>@bidder bid 1E 20 days ago</h5>
                <h5>@bidder bid 1E 20 days ago</h5>
              </div>
            </div>
            <div className="item-information">
              <div className="item-history">
                <h2>Item History</h2>

                <h3>
                  Minted by @sidco in <br />
                  schannel series
                  <br /> 3 days ago
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;
