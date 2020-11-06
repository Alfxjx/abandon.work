import Vue from "vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
// import "highlight.js/styles/atom-one-dark-reasonable.css";

Vue.directive("highlight", (el) => {
	let blocks = el.querySelectorAll("pre code");
	blocks.forEach((block) => {
		hljs.highlightBlock(block);
	});
});