const har = [
  {
    picture: "song1.png",
    channelLogo: "common logo.png",
    title: "Super Hit Hindi Song",
    channel: "Daliy max",
    views: "371M views",
    time: "4 years ago"
  },
  {
    picture: "pic2.png",
    channelLogo: "common logo.png",
    title: "Latest Trending Stitching",
    channel: "Tailoring",
    views: "39 views",
    time: "6 months ago"
  },
  {
    picture: "pic3.png",
    channelLogo: "common logo.png",
    title: "Super Hit Comedy",
    channel: "RXR",
    views: "819K views",
    time: "2 years ago"
  },
  {
    picture: "pic 4.png", 
    channelLogo: "common logo.png",
    title: "Grid Complete Course",
    channel: "Daliy max",
    views: "371M views",
    time: "4 years ago"
  },
  {
    picture: "pic 5.png", 
    channelLogo: "common logo.png",
    title: "Run Bts ep546",
    channel: "Daliy max",
    views: "371M views",
    time: "4 years ago"
  },
  {
    picture: "pic 6.png",
    channelLogo: "common logo.png",
    title: "Run Bts ep20",
    channel: "Daliy max",
    views: "371M views",
    time: "4 years ago"
  },
  {
    picture: "pic 7.png",
    channelLogo: "common logo.png",
    title: "Baby Song",
    channel: "Daliy max",
    views: "371M views",
    time: "4 years ago"
  },
  {
    picture: "pic 8.png",
    channelLogo: "common logo.png",
    title: "Aptitude",
    channel: "Daliy max",
    views: "371M views",
    time: "4 years ago"
  },{
    picture: "pic 7.png",
    channelLogo: "common logo.png",
    title: "baby song",
    channel: "Daliy max",
    views: "371M views",
    time: "4 years ago"
  }
];


const container = document.querySelector("#video-container");



  for (let i = 0; i < har.length; i++) {
  const add = har[i];
  const Card = document.createElement("div");
  Card.classList.add("f1");

  Card.innerHTML = `
    <img src="${add.picture}" alt="picture" class="imgclass">
    <div class="align">
      <img src="${add.channelLogo}" alt="Channel Logo" width="25" height="20" class="channellogo">
      <div class="text">
        <p class="para">${add.title}</p>
        <p class="para2">${add.channel}</p>
        <p class="para3">${add.views} • ${add.time}</p>
      </div>
    </div>
  `

  container.appendChild(Card);
};
function selectSidebar(el) {
  document.querySelectorAll('.sidebar-item').forEach(item => {
    item.classList.remove('active');
  });
  el.classList.add('active');
}
