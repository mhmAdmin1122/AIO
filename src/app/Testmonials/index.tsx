import React from "react";
import Image from "next/image";
import data from '../../../public/testmonial.json'

export default function Testmonials() {
  return (
    <>
      <div className="testmonial-box">
        <div className="testmonial-container">
          <div className="testmonial-content">
            <h1 className="Testmonials p-2">Testmonials</h1>
            <div className="testmonialCard">
              <div className="testMonialcardBox d-flex">
                {data.map((dataIndex)=>{return(
                <div className="card CARDTESTMONIAL mx-12 my-12" key={dataIndex.id}>
                  <div className="card-body">
                    <i className="quoteMark" style={{ width: "100%" }}>
                      <Image src={dataIndex.quoteMark1} alt="quoteMark" width={60} height={70}/>
                    </i>
                    <div className="innerContent-testmonial d-flex">
                      <div
                        className="test-ImageBox border-2 w-fit h-fit m-2 p-1 rounded-circle cursor-pointer"
                        title="Shoaib Abbass"
                      >
                        <Image
                          src={dataIndex.userPic_url}
                          alt="writer-user"
                          className="rounded-circle cursor-pointer"
                          width={60} height={60}
                          
                        />
                      </div>
                      <h3 className="testmonialWriter">
                      The company itself is a very successful company. It is pursued, may the distinction be often pleased, and what pleasures does it receive to the easy release of the mind from repudiation of the blessed from the duties of all truth. Nor the labor of a corrupt mind.
                      </h3>
                    </div>

                    <i
                      className="quoteMark"
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Image src={dataIndex.quoteMark2} alt="quoteMark" width={60} height={70}/>
                    </i>
                  </div>
                </div>)})}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
