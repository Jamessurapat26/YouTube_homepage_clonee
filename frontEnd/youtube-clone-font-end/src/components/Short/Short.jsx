import "./ShortStyle.css"
import ShortCard from "./ShortCard"
import { useState, useEffect } from "react";

function Short() {
    const [shorts, setShorts] = useState([]);

    useEffect(() => {
        const fetchShorts = async () => {
            const data = await fetch("http://localhost:3000/short");
            const json = await data.json();
            setShorts(json);
        };
        fetchShorts();
    }, [])



    return (
        <section id="short">
            <div className="-short-bar">
                <div className="-start">
                    <div className="-logo">
                        <img src="https://placehold.co/24x24/png" alt="" />
                    </div>
                    <span>Shorts</span>
                </div>
                <div className="-end">
                    <strong>X</strong>
                </div>
            </div>
            <div className="-short-wrap">
                {shorts.map((short, id) => (
                    <ShortCard key={id} content={short} />
                ))}
                {/* <div className="short">
                    <div className="-thumb">
                        <img src="https://placehold.co/270x480/png" alt="" />
                    </div>
                    <div className="-about">
                        <div className="-detail">
                            <a href="" className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, laborum.</a>
                            <div className="views">1.2 ล้านครั้ง</div>
                        </div>
                    </div>
                </div>
                <div className="short">
                    <div className="-thumb">
                        <img src="https://placehold.co/270x480/png" alt="" />
                    </div>
                    <div className="-about">
                        <div className="-detail">
                            <a href="" className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, laborum.</a>
                            <div className="views">1.2 ล้านครั้ง</div>
                        </div>
                    </div>
                </div>
                <div className="short">
                    <div className="-thumb">
                        <img src="https://placehold.co/270x480/png" alt="" />
                    </div>
                    <div className="-about">
                        <div className="-detail">
                            <a href="" className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, laborum.</a>
                            <div className="views">1.2 ล้านครั้ง</div>
                        </div>
                    </div>
                </div>
                <div className="short">
                    <div className="-thumb">
                        <img src="https://placehold.co/270x480/png" alt="" />
                    </div>
                    <div className="-about">
                        <div className="-detail">
                            <a href="" className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, laborum.</a>
                            <div className="views">1.2 ล้านครั้ง</div>
                        </div>
                    </div>
                </div>
                <div className="short">
                    <div className="-thumb">
                        <img src="https://placehold.co/270x480/png" alt="" />
                    </div>
                    <div className="-about">
                        <div className="-detail">
                            <a href="" className="title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, laborum.</a>
                            <div className="views">1.2 ล้านครั้ง</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Short