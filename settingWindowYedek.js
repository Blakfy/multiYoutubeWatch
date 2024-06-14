const channelGrid = (e) => {
  switch (e) {
    case 1:
      return "grid grid-cols-1 justify-content-center align-items-center m-0";
    case 4:
      return "grid grid-cols-2 justify-content-center align-items-center m-0";
    case 9:
      return "grid grid-cols-3 justify-content-center align-items-center m-0";
    case 16:
      return "grid grid-cols-4 justify-content-center align-items-center m-0";
    default:
      return "grid grid-cols-1 justify-content-center align-items-center m-0";
  }
};
