// const text1_options = [
//   "Lorem ipsum dolor sit amet",
//   "Lorem ipsum dolor sit amet",
//   "Lorem ipsum dolor sit amet",
//   "Lorem ipsum dolor sit amet",
//   "Lorem ipsum dolor sit amet",
// ];
// const text2_options = [
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam ultricies, nunc nisl aliquam nisl, eget aliquam nisl nisl sit amet lorem.",
// ];
// const color_options = ["#FFC312", "#F79F1F", "#C4E538", "#A3CB38", "#12CBC4"];
// const image_options = [
//   "content/images/image 2.svg",
//   "https://images.unsplash.com/photo-1533050487297-09b450131914?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1493515322954-4fa727e97985?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1517541166507-dface5dd8b2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   "https://images.unsplash.com/photo-1700055065100-b4eda9bc1ef6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// ];
// const permalink_options = ["#", "#", "#", "#", "#"];

// var i = 0;
// const currentOptionText1 = document.getElementById("current-option-text1");
// const currentOptionText2 = document.getElementById("current-option-text2");
// const currentOptionImage = document.getElementById("image");
// const currentOptionPermalink = document.getElementById(
//   "current-option-permalink"
// );

// const carousel = document.getElementById("carousel-wrapper");
// const mainMenu = document.getElementById("menu");
// const optionPrevious = document.getElementById("previous-option");
// const optionNext = document.getElementById("next-option");

// currentOptionText1.innerText = text1_options[i];
// currentOptionText2.innerText = text2_options[i];
// currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
// currentOptionPermalink.href = permalink_options[i];
// mainMenu.style.background = color_options[i];

// optionNext.onclick = function () {
//   i = i + 1;
//   i = i % text1_options.length;
//   currentOptionText1.dataset.nextText = text1_options[i];
//   currentOptionText2.dataset.nextText = text2_options[i];

//   mainMenu.style.background = color_options[i];
//   carousel.classList.add("anim-next");

//   setTimeout(() => {
//     currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
//   }, 455);

//   setTimeout(() => {
//     currentOptionText1.innerText = text1_options[i];
//     currentOptionText2.innerText = text2_options[i];
//     currentOptionPermalink.href = permalink_options[i];
//     carousel.classList.remove("anim-next");
//   }, 650);
// };

// optionPrevious.onclick = function () {
//   if (i === 0) {
//     i = text1_options.length;
//   }
//   i = i - 1;
//   currentOptionText1.dataset.previousText = text1_options[i];
//   currentOptionText2.dataset.previousText = text2_options[i];

//   mainMenu.style.background = color_options[i];
//   carousel.classList.add("anim-previous");

//   setTimeout(() => {
//     currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
//   }, 455);

//   setTimeout(() => {
//     currentOptionText1.innerText = text1_options[i];
//     currentOptionText2.innerText = text2_options[i];
//     currentOptionPermalink.href = permalink_options[i];
//     carousel.classList.remove("anim-previous");
//   }, 650);
// };
