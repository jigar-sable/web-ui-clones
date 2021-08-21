let videosContainer = document.getElementById('videos-container');
let videoCard = "";

fetch("assests/videos.json")
.then(response => response.json())
.then(videos => {
    console.log(videos);

    videos.forEach(video => {
        videoCard += `
        <div class="flex flex-col space-y-3 cursor-pointer">
        <!-- thumbnail -->
        <a href="${video.videoURL}">
            <div class="relative h-48 sm:h-36 w-full">
            <img class="relative h-full w-full object-cover" src="${video.thumbnail}" alt="" draggable="false">
            <span class="absolute right-1 bottom-1 p-0.5 px-1 rounded-sm bg-black text-white text-xs bg-opacity-70">${video.duration}</span>
            </div>
        </a>
        <!-- video details -->
        <div class="flex flex-col flex-auto space-y-1.5 mb-3">

        <div class="flex items-center space-x-3">
            <!-- channel logo -->
            <a href="${video.desc.channelURL}" class="rounded-full w-12 sm:w-14"><img class="w-full h-full rounded-full object-cover" src="${video.desc.channelLogo}" alt="" draggable="false"></a>
            <div class="flex items-start">
            <a href="${video.videoURL}" class="text-sm text-bold text-white pr-1">${video.desc.title}</a>
            <i class="material-icons text-white md-21">more_vert</i>
            </div>
        </div>

        <!-- channel link and meta data -->
        <div class="flex flex-col pl-1 sm:pl-0 ml-12">
            <a href="${video.desc.channelURL}" class="text-gray-400 text-sm hover:text-white">${video.desc.channelName}</a>
            <div class="flex space-x-1">
                <span class="text-sm text-gray-400">${video.desc.views} views</span>
                <span class="text-sm text-gray-400">• ${video.desc.published} ago</span>
            </div>
        </div>
        </div>
    </div>`
    });
    videosContainer.innerHTML = videoCard;
})