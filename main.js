const inputComment = document.getElementsByClassName('leave_comment')[0];
const userName = 'jungyub_song';
const upload = document.getElementsByClassName('upload')[0];
const commentsWrap = document.getElementsByClassName('commentsWrap')[0];

function push() {
  if (inputComment.value !== '') {
    const commentContent = document.createElement('div');
    const add_profile = document.createElement('span');
    add_profile.className = 'profile'
    const add_content = document.createElement('span');
    add_content.className = 'content'
      
    add_profile.innerText = userName;
    add_content.innerText = inputComment.value;
  
    commentContent.appendChild(add_profile);
    commentContent.appendChild(add_content);
  
    commentsWrap.appendChild(commentContent);
  };
};

upload.addEventListener('click', push);

inputComment.addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    push();
  };
});