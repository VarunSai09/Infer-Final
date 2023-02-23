import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import axios from "axios";
const Data = ({ data, searchTerm }) => {
  const [active, setActive] = useState(false);
  const handleSavePost=()=>{
    setActive(!active)
    const id = localStorage.getItem("UserId");
    if(active===false){
      axios
        .post(
          "https://c5rbbler50.execute-api.us-east-1.amazonaws.com/new/savedposts",
          { UserId: id,URL: data.Links, Title: data.Title,Tag: data.Author,Context:data.Context }
        )

    }
    else{
       axios
        .post("https://c5rbbler50.execute-api.us-east-1.amazonaws.com/new/unsavepost",
        { UserId: id,URL: data.Links, Title: data.Title }
        )
    }
  }
  return (
    <>
      <div className="SearcContent">
        <div className="note">
          <div className="search-title-header">
            <a href={data.Links} target="_blank" id="Search-Title">
              {data.Title}
            </a>
            <label
              for="Search-Title"
              href=""
              className="save-post"
              onClick={handleSavePost}
            >
              {active !== true && (
                <svg
                  width="16"
                  height="21"
                  viewBox="0 0 16 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0H15C15.2652 0 15.5196 0.105357 15.7071 0.292893C15.8946 0.48043 16 0.734784 16 1V20.143C16.0001 20.2324 15.9763 20.3202 15.9309 20.3973C15.8855 20.4743 15.8204 20.5378 15.7421 20.5811C15.6639 20.6244 15.5755 20.6459 15.4861 20.6434C15.3968 20.641 15.3097 20.6146 15.234 20.567L8 16.03L0.766 20.566C0.690368 20.6135 0.603387 20.6399 0.514102 20.6424C0.424817 20.6449 0.336486 20.6235 0.258295 20.5803C0.180104 20.5371 0.114907 20.4738 0.0694828 20.3969C0.0240588 20.32 6.64708e-05 20.2323 0 20.143V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM14 2H2V17.432L8 13.671L14 17.432V2Z"
                    fill="#222222"
                  />
                </svg>
              )}
              {active === true && (
                <svg
                  width="18"
                  height="21"
                  viewBox="0 0 18 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V20.276C18.0001 20.3594 17.9793 20.4416 17.9395 20.5149C17.8997 20.5882 17.8422 20.6505 17.7722 20.6959C17.7023 20.7413 17.622 20.7685 17.5388 20.775C17.4557 20.7815 17.3722 20.767 17.296 20.733L9 17.03L0.704 20.732C0.627903 20.766 0.544512 20.7805 0.46141 20.774C0.378309 20.7676 0.298133 20.7405 0.228176 20.6952C0.158219 20.6499 0.1007 20.5878 0.0608497 20.5146C0.0209992 20.4414 8.18259e-05 20.3593 0 20.276V1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0ZM9 11.5L11.939 13.045L11.378 9.773L13.755 7.455L10.469 6.977L9 4L7.53 6.977L4.245 7.455L6.622 9.773L6.062 13.045L9 11.5Z"
                    fill="#305BA5"
                  />
                </svg>
              )}
            </label>
          </div>
          <div className="TagFrame">
            <p id="Tags-SearchScreen">Author : </p>
            <p className="Tags-SearchScreen">{data.Author}</p>
          </div>
          <p>{data.Context}</p>
        </div>
      </div>
    </>
  );
};

export default Data;
