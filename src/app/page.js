"use client";
import React, { useEffect, useState } from "react";
import YoutubeChannels from "../Components/youtubeChannels/youtubeChannels.js";
import Settings from "../Components/setting/settings.js";

const defaultKeyList = [];

export default function Home() {
  const [viewSettings, setViewSettings] = useState(true);
  const [buttonName, setButtonName] = useState("4");
  const [cookieClear, setCookieClear] = useState(true);
  const initialInputValue = defaultKeyList.map((value, index) => ({
    key: index,
    value,
  }));
  const [inputValue, setInputValue] = useState(initialInputValue);
  const [channelKey, setChannelKey] = useState([]);

  useEffect(() => {
    const storedChannelKey = localStorage.getItem("channelKey");
    if (!storedChannelKey) {
      setChannelKey(defaultKeyList);
      setInputValue(initialInputValue);
      localStorage.setItem("channelKey", JSON.stringify(defaultKeyList));
    } else {
      setChannelKey(JSON.parse(storedChannelKey));
      setInputValue(
        JSON.parse(storedChannelKey).map((value, index) => ({
          key: index,
          value,
        }))
      );
    }
  }, []);

  const handleClearCookies = () => {
    localStorage.removeItem("channelKey");
    setChannelKey([]);
    setInputValue(initialInputValue);
    setCookieClear(!cookieClear);
  };

  const handleSettingsViewStatus = () => {
    setViewSettings(!viewSettings);
  };

  const handleButtonNameChange = (newButtonName) => {
    setButtonName(newButtonName);
    const newInputValue = inputValue.slice(0, parseInt(newButtonName));
    setInputValue(newInputValue);
  };

  const createButtonsFromNames = () => {
    const names = ["1", "4", "9", "16"];
    return names.map((name) => (
      <button
        className={`text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 ${name === buttonName ? 'bg-blue-600' : ''}`}
        key={name}
        onClick={() => handleButtonNameChange(name)}
      >
        {name}
      </button>
    ));
  };

  const getChannelNameInputs = () => {
    let channelName = [];

    for (let index = 0; index < parseInt(buttonName); index++) {
      channelName.push(
        <div key={index} className="flex items-center m-1 p-0.3  rounded-sm">
          <p className="mr-2 text-white ">Channel Name</p>
          <input
            className="py-1.5 px-5 mr-2 mb-1 text-sm font-small text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            key={index}
            type="text"
            onChange={(e) => inputValues(index, e.target.value)}
            value={inputValue[index] ? inputValue[index].value : ""}
          />
        </div>
      );
    }

    return channelName;
  };

  const inputValues = (index, channelKeyInputValue) => {
    setInputValue(() => {
      const newInputValue = [...inputValue];
      newInputValue[index] = { key: index, value: channelKeyInputValue };
      return newInputValue;
    });
  };

  function formSubmit(e) {
    e.preventDefault();
    let result = [];
    result = inputValue.map((item) => item.value);
    setChannelKey(result);
    localStorage.setItem("channelKey", JSON.stringify(result));
    return result;
  }

  return (
    <div className="h-screen">
      <YoutubeChannels channelKey={channelKey} buttonName={buttonName} />

      {viewSettings ? (
        <div className="bg-[#0F0F0F] shadow shadow-[#414141] p-5 mb-20 mr-10 absolute right-0 bottom-0 text-center rounded-md  ">
          {/* Channel Buttons */}
          <div className="flex justify-around items-center text-white ">
            {createButtonsFromNames()}
          </div>
          {/* Channel Form */}
          <form onSubmit={formSubmit}>
            {getChannelNameInputs()}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="w-1/2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Submit
              </button>
              <button
                onClick={handleSettingsViewStatus}
                className="w-1/2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "
              >
                EXIT
              </button>
              <button
                onClick={() => {
                  alert("Clear Cookie");
                  handleClearCookies();
                }}
                className="w-1/2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 "
              >
                Clear Cookie
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <Settings handleClick={handleSettingsViewStatus} />
        </div>
      )}
    </div>
  );
}
