import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63wB7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Joseph Brisibe",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/10552636328613745/vIqzOHXj.jpg",
      id: 2,
      name: "Kingslee Onyeka",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Ayoola Ha'amed",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Olaide Noah",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp4vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Abraham Awotunde",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc058143-bpfull.png",
      id: 6,
      name: "Quduus Abdulyekin",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/asets/images/default_profile.png",
      id: 7,
      name: "Segun Light",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://auraqatar.com/project/Anakalabel/media//vesbrand/designer4.jpg",
      id: 8,
      name: "Daniel Ojiaku",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Onyeama",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/70394499/female.png",
      id: 10,
      name: "Ebenezer Ugo",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn" id="btn">
          <i class="fas fa-plus"></i><span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h5>Chats</h5>
          <button className="btn-nobg">
          <i class="fas fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
