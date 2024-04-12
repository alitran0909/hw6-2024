var video;

//Initialize the video element and turn off autoplay and turn off looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	//initialize video/?
	video = document.querySelector("#player1");
	//turn off autoplay
	video.autoplay = false;
	//turn of looping
	video.loop = false;

	console.log("I think we are goood")
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	video.play();
	console.log("Yay it played");
})

//Pause the video.
document.querySelector("#pause").addEventListener("click", function(){
	video.pause();
	console.log("Yay it paused");
})

//Slow the current video speed by 10% each time the button
//is clicked and log the new speed to the console.

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate *= 90/100;
	console.log(video.playbackRate);
	console.log("it slowed down!");
})

//Increase the current video speed each time the button is clicked and log
//the new speed to the console.  Change it by an amount proportional to
//the slow down. CHECK THIS!!  If you slow down three times and then
//speed up three times you should be within 5 digits of 100% again.
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate *= 100/90;
	console.log(video.playbackRate);
	console.log("it's faster");
})

//Advance the current video by 10 seconds.
//If the video length has been exceeded go back to the start
//of the video - no farther
//.   Log the current location of the video.

document.querySelector("#skip").addEventListener("click", function(){
	if(video.currentTime >= video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}
	console.log(video.currentTime);
	console.log("it skipped!");
})

//Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function(){
	//if video has audio it would be video.muted = false
	if(!video.muted){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("you muted it");
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("you unmuted it");
	}
})

//Change the volume based
// on the slider and update the volume information.

document.querySelector("#slider").addEventListener("input", function(){
	video.volume = document.querySelector("#slider").value * .01;
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value;
	console.log("Volume info is updated");
})

//Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener("click", function(){
	//what does oldschool do
	//The Element.classList is a read-only property that returns a
	// live DOMTokenList collection of the class attributes of the element.
	// This can then be used to manipulate the class list.
	//class nmae is oldSchool
	//classList has add and remove
	video.classList.add("oldSchool");
	console.log("Class was added");
})

document.querySelector("#orig").addEventListener("click", function(){
	//using classList api to remove
	video.classList.remove("oldSchool");
	console.log("Class was removed");
})




