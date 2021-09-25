const navMenuBtn = document.getElementById('menuBtn');
const navMenuItems = document.getElementById('menuItems');

navMenuBtn.addEventListener('click', () => {
      navMenuItems.classList.toggle('hidden');
})

const navMenuBtn2 = document.getElementById('menuBtn2');
const navMenuItems2 = document.getElementById('menuItems2');

navMenuBtn2.addEventListener('click', () => {
    navMenuItems2.classList.toggle('hidden');
})

function scrollDown() {
    $('#chats-container').scrollTop($('#chats-container')[0].scrollHeight);
}
scrollDown();

// chat feature
const chatBoxInput = document.getElementById('chatBoxInput');
const msgContainer = document.getElementById('msgContainer');

chatBoxInput.addEventListener("keyup", function(e) {
   if (e.keyCode === 13) {
       e.preventDefault();
       if (chatBoxInput.value == ''){
         alert("Can't send empty message!")
       } else {
        sendMsg();
       }
}});

function sendMsg() {
       const message = chatBoxInput.value;
       const today = new Date();
       const time = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
       let newMsg = `<div class="right-msg">
        <p class="mr-16 max-w-md text-gray-100 text-sm font-light">${message}&nbsp;</p>
        <span class="absolute bottom-0 right-5 text-xs p-0.5 text-gray-300 mr-0.5">${time}</span>
        <svg  class="absolute bottom-0 right-0 text-xs h-4 w-4 mr-1 mb-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 172 172"
         style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#20a0ff"><path d="M44.72,144.48c-1.81406,0 -3.57437,-0.72562 -4.86437,-2.01562l-37.84,-37.84c-2.6875,-2.6875 -2.6875,-7.04125 0,-9.72875c2.6875,-2.6875 7.04125,-2.6875 9.72875,0l32.49187,32.49187l77.74938,-93.92812c2.41875,-2.94281 6.75906,-3.34594 9.675,-0.91375c2.92937,2.41875 3.34594,6.75906 0.91375,9.675l-82.56,99.76c-1.22281,1.505 -3.03688,2.40531 -4.97188,2.48594c-0.1075,0.01344 -0.215,0.01344 -0.3225,0.01344zM82.8825,144.46656c1.935,-0.08063 3.73563,-0.98094 4.97188,-2.48594l82.56,-99.76c2.43219,-2.91594 2.01562,-7.25625 -0.91375,-9.675c-2.91594,-2.43219 -7.25625,-2.01563 -9.675,0.91375l-77.74938,93.92812l-1.53187,-1.53187c-2.6875,-2.6875 -7.04125,-2.6875 -9.72875,0c-2.6875,2.6875 -2.6875,7.04125 0,9.72875l6.88,6.88c1.29,1.29 3.05031,2.01562 4.86437,2.01562c0.1075,0 0.215,0 0.3225,-0.01344z"></path></g></g></svg>
      </div>`;
      msgContainer.innerHTML+=newMsg; 
      chatBoxInput.value='';
      scrollDown();
}