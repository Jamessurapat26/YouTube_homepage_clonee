import { useEffect, useState } from "react";
import "./SideStyle.css";

function Sidebar() {

    const [channel, setChannel] = useState([]);

    useEffect(() => {
        const fetchChannel = async () => {
            const data = await fetch("http://localhost:3000/subscriptions?user_id=1");
            const json = await data.json();
            setChannel(json);
        }
        fetchChannel();
    }, [])

    return (
        <section id="sidebar">
            <div className="side">
                <a href="#" className="-item">
                    <div className="-icon">
                        <img src="https://placehold.co/24x24/png" alt="" />
                    </div>
                    <div className="-text">
                        หน้าแรก
                    </div>
                </a>
                <a href="#" className="-item">
                    <div className="-icon">
                        <img src="https://placehold.co/24x24/png" alt="" />
                    </div>
                    <div className="-text">
                        Shorts
                    </div>
                </a>
                <a href="#" className="-item">
                    <div className="-icon">
                        <img src="https://placehold.co/24x24/png" alt="" />
                    </div>
                    <div className="-text">
                        การติดตาม
                    </div>
                </a>
            </div>
            <div className="-side-sec">
                <div className="-text">การติดตาม</div>
                {channel.map((channel, id) => (
                    <a href="#" className="-item" key={id}>
                        <div className="-icon">
                            <img src={channel.profile_url} alt="" />
                        </div>
                        <div className="-text">{channel.channel_name}</div>
                        <div className="-status"></div>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Sidebar