(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\" style=\"text-align: center\"><h4>Login</h4></div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n                        <div class=\"form-group row\">\n                            <label for=\"user_name\" class=\"col-md-4 col-form-label text-md-right\">Username</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" id=\"user_name\" class=\"form-control\" [formControlName]=\"'username'\" name=\"user_name\" required\n                                    autofocus>\n                                <span *ngIf=\"!loginForm.get('username').valid && loginForm.get('username').touched\">\n                                   Please provide a valid username\n                                </span>                                    \n                            </div>\n                        </div>\n \n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"password\" id=\"password\" class=\"form-control\" [formControlName]=\"'password'\" name=\"password\" required>\n                                <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\n                                  Password cannot be empty\n                                </span>                                \n                            </div>\n                        </div>\n \n                        <span class=\"col-md-6 offset-md-4\">\n                            <button type=\"submit\" class=\"login\">\n                                Login\n                            </button>\n                            <span style=\"padding-left: 15px\">New User? <a routerLink=\"/signup\">SIGN UP</a></span>\n                        </span>   \n                        <div class=\"login-failed\" *ngIf='this.isError'>\n                             <p class=\"login-failed-text\">Login Failed. Please check your credentials and try again.</p>   \n                        </div>\n                        <div class=\"login-failed\" [ngStyle]=\"{'background-color': 'green'}\" *ngIf=\"this.registerSuccessMessage.length > 0\">\n                            <p class=\"register-success-text\">{{registerSuccessMessage}}</p>   \n                       </div>                       \n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-section\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"card\">\n                <div class=\"card-header\" style=\"text-align: center\">\n                    <h4>Register</h4>\n                </div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"signupForm\" (ngSubmit)=\"signup()\">\n                        <div class=\"form-group row\">\n                            <label for=\"email_address\" class=\"col-md-4 col-form-label text-md-right\">E-Mail\n                                Address</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [formControlName]=\"'email'\" id=\"email_address\" class=\"form-control\" name=\"email-address\" required\n                                    autofocus>\n                                <span *ngIf=\"!signupForm.get('email').valid && signupForm.get('email').touched\">\n                                    Please provide a valid email\n                                </span>                                    \n                            </div>\n                        </div>\n \n                        <div class=\"form-group row\">\n                            <label class=\"col-md-4 col-form-label text-md-right\">User Name</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"text\" [formControlName]=\"'username'\"class=\"form-control\" required autofocus>\n                                <span *ngIf=\"!signupForm.get('username').valid && signupForm.get('username').touched\">\n                                    Please provide a valid username\n                                </span>                                 \n                            </div>\n                        </div>\n \n                        <div class=\"form-group row\">\n                            <label for=\"password\" class=\"col-md-4 col-form-label text-md-right\">Password</label>\n                            <div class=\"col-md-6\">\n                                <input type=\"password\" [formControlName]=\"'password'\" id=\"password\" class=\"form-control\" name=\"password\" required>\n                                <span *ngIf=\"!signupForm.get('password').valid && signupForm.get('password').touched\">\n                                    Please provide a valid Password\n                                </span>  \n                            </div>\n                        </div>\n \n                        <span class=\"col-md-6 offset-md-4\">\n                            <button type=\"submit\" class=\"sign-up\">\n                                Sign Up\n                            </button>\n                            <span style=\"padding-left: 15px\">Existing user? <a routerLink=\"/login\">Log In</a></span>\n                        </span>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div>\n    Welcome <b>{{name}}</b>.<br /> You have posted <b>{{postLength}}</b> time(s) and commented\n    <b>{{commentLength}}</b> time(s).\n    You can check your post and comment history below.\n  </div>\n  <hr />\n  <div>\n    Your Posts:\n  </div>\n  <app-post-tile [posts]=\"posts\"></app-post-tile>\n  <hr />\n  <div>\n    Your Comments:\n  </div>\n  <div *ngFor=\"let comment of comments\">\n    <div class=\"comment\">\n      <div class=\"username\">\n        <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\n      </div>\n      <div>\n        <p>{{comment.duration}}</p>\n      </div>\n      <b>{{comment.text}}</b>\n    </div>\n    <hr />\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n        <div class=\"flex-grow-1\">\n            <a aria-label=\"Home\" class=\"logo\" routerLink=\"/\">\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" class=\"reddit-icon-svg\">\n                    <g>\n                        <circle fill=\"#FF4500\" cx=\"10\" cy=\"10\" r=\"10\"></circle>\n                        <path fill=\"#FFF\"\n                            d=\"M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z\">\n                        </path>\n                    </g>\n                </svg>\n                <span class=\"reddit-text\">\n                    Spring Reddit Clone\n                </span>\n            </a>\n        </div>\n        <div class=\"flex-grow-1 float-right\">\n            <div *ngIf=\"isLoggedIn\" ngbDropdown class=\"float-right\">\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                    <button (click)=\"goToUserProfile()\" ngbDropdownItem>Profile</button>\n                    <button (click)=\"logout()\" ngbDropdownItem>Logout</button>\n                </div>\n                <button class=\"userdetails\" id=\"dropdownBasic1\" ngbDropdownToggle>\n                    <img class=\"account-icon\" src=\"https://www.redditstatic.com/avatars/avatar_default_08_D4E815.png\">\n                    {{username}}\n                </button>\n            </div>            \n            <div *ngIf=\"!isLoggedIn\">\n                <a routerLink=\"/sign-up\" class=\"float-right sign-up mr-2\">Sign up</a>\n                <a routerLink=\"/login\" class=\"float-right login mr-2\">Login</a>\n            </div>\n        </div>\n    </nav>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"reddit-body\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <hr />\n      <div class=\"col-md-9\">\n        <app-post-tile [posts]=\"posts\"></app-post-tile>\n      </div>\n      <div class=\"col-md-3\">\n        <app-side-bar></app-side-bar>\n        <app-subreddit-side-bar></app-subreddit-side-bar>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <hr />\n      <div class=\"create-post-container col-md-9\">\n        <form class=\"post-form\" [formGroup]=\"createPostForm\" (ngSubmit)=\"createPost()\">\n          <div class=\"form-group\">\n            <div class=\"create-post-heading\">Create Post</div>\n            <hr />\n            <input type=\"text\" [formControlName]=\"'postName'\" class=\"form-control\" style=\"margin-top: 5px\"\n              placeholder=\"Title\">\n  \n            <input type=\"text\" class=\"form-control\" [formControlName]=\"'url'\" style=\"margin-top: 5px\" placeholder=\"URL\">\n  \n            <select class=\"form-control\" style=\"margin-top: 10px\" [formControlName]=\"'subredditName'\">\n              <option value=\"\" selected disabled>Select Subreddit</option>\n              <option *ngFor=\"let subreddit of subreddits\">{{subreddit.name}}</option>\n            </select>\n  \n            <editor [formControlName]=\"'description'\" [init]=\"{\n                        height: 500,\n                        menubar: false,\n                        plugins: [\n                          'advlist autolink lists link image charmap print preview anchor',\n                          'searchreplace visualblocks code fullscreen',\n                          'insertdatetime media table paste code help wordcount'\n                        ],\n                        toolbar:\n                          'undo redo | formatselect | bold italic backcolor | \\\n                          alignleft aligncenter alignright alignjustify | \\\n                          bullist numlist outdent indent | removeformat | help'\n                      }\"></editor>\n            <span>\n              <div style=\"margin-top: 5px\" class=\"float-right\">\n                <button (click)=\"discardPost()\" class=\"btnDiscard\">Discard</button>\n                <button class=\"btnCreatePost\">Post</button>\n              </div>\n            </span>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <hr />\n    <div class=\"col-md-9\">\n      <div class=\"row post\">\n        <div class=\"col-md-1\">\n          <app-vote-button [post]=\"post\"></app-vote-button>\n        </div>\n        <div class=\"col-md-11\">\n          <span>\n            <span class=\"subreddit-text\"><a class=\"post-url\" href=\"\">{{post.subredditName}}</a></span>\n            <span> . Posted\n              <span> {{post.duration}} </span>\n              by              \n              <a class=\"username\" href=\"\">{{post.userName}}</a>\n            </span>\n          </span>\n          <hr />\n          <a routerLink=\"post.url\" class=\"post-title\">{{post.postName}}</a>\n          <div>\n            <p class=\"post-text\" [innerHtml]=\"post.description\"></p>\n          </div>\n          <div class=\"post-comment\">\n            <form [formGroup]=\"commentForm\" (ngSubmit)=\"postComment()\">\n              <div class=\"form-group\">\n                <textarea class=\"form-control\" [formControlName]=\"'text'\" placeholder=\"Your Thoughts?\"></textarea>\n              </div>\n              <button type=\"submit\" class=\"login float-right\">Comment</button>\n            </form>\n          </div>\n          <div style=\"margin-top: 60px;\" *ngFor=\"let comment of comments\">\n            <div class=\"comment\">\n              <div class=\"username\">\n                <a routerLink=\"/user/comment.username\">{{comment.userName}}</a>\n              </div>\n              <div>\n                <p>{{comment.duration}}</p>\n              </div>\n              <b>{{comment.text}}</b>\n            </div>\n            <hr />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-3\">\n      <app-side-bar></app-side-bar>\n      <app-subreddit-side-bar></app-subreddit-side-bar>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Display Posts-->\n<div class=\"row post\" *ngFor=\"let post of posts\">\n  <app-vote-button [post]=\"post\"></app-vote-button>\n  <!-- Section to Display Post Information-->\n  <div class=\"col-md-11\">\n    <span class=\"subreddit-info\">\n      <span class=\"subreddit-text\"><a class=\"posturl\" routerLink=\"\">{{post.subredditName}}</a></span>\n      <span> . Posted by <a class=\"username\" routerLink=\"/user/{{post.userName}}\">{{post.userName}}</a></span>\n      <span> . {{post.duration}}</span>\n    </span>\n    <hr />\n    <div class=\"post-title\">\n      <a class=\"postname\" href=\"{{post.url}}\">{{post.postName}}</a>\n    </div>\n    <div>\n      <p class=\"post-text\" [innerHtml]=\"post.description\"></p>\n    </div>\n    <hr />\n    <span>\n      <a class=\"btnCommments\" role=\"button\">\n        <fa-icon [icon]=\"faComments\"></fa-icon>\n        Comments({{post.commentCount}})\n      </a>\n      <button class=\"login\" (click)=\"goToPost(post.id)\">\n        Read Post\n      </button>\n    </span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/side-bar/side-bar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/side-bar/side-bar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar\">\n    <img src=\"https://www.redditstatic.com/desktop2x/img/id-cards/home-banner@2x.png\">\n    <div style=\"text-align: center; font-size: 1em\">Welcome to Spring Reddit Clone home page. Come here to\n        check in with your favorite subreddits.</div>\n    <div style=\"text-align: center\">\n        <button class=\"btnCreatePost\" (click)=\"goToCreatePost()\">Create Post</button>\n    </div>\n    <div style=\"text-align: center\">\n        <button class=\"btnCreateSubreddit\" (click)=\"goToCreateSubreddit()\">Create Subreddit</button>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sidebar-view-subreddit\">\n    <div style=\"color: black; font-weight: bold\">Browse Subreddits</div>\n    <hr />\n    <span *ngFor=\"let subreddit of subreddits\">\n        <span class=\"subreddit-text\"><a href=\"/view-subreddit/{{subreddit.id}}\">{{subreddit.name}}</a></span>\n        <hr />\n    </span>\n    <div style=\"text-align: center\" *ngIf=\"displayViewAll\">\n        <a style=\"font-weight: bold\" routerLink=\"/list-subreddits\">View All</a>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Section to Display Votes-->\n<div class=\"col-md-1\">\n    <div class=\"d-flex flex-column votebox\">\n    <div class=\"p-2\">\n        <fa-icon (click)=\"upvotePost()\" class=\"upvote\" [icon]=\"faArrowUp\" [style.color]=\"post.upVote ? 'green':''\">\n        </fa-icon>\n    </div>\n    <div class=\"p-2 votecount\">{{post.voteCount}}</div>\n    <div class=\"p-2\">\n        <fa-icon (click)=\"downvotePost()\" class=\"downvote\" [icon]=\"faArrowDown\" [style.color]=\"post.downVote ? 'red':''\">\n        </fa-icon>\n    </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"create-subreddit-container\">\n        <form class=\"post-form\" [formGroup]=\"createSubredditForm\" (ngSubmit)=\"createSubreddit()\">\n          <div class=\"form-group\">\n            <div class=\"create-subreddit-heading\">Create Subreddit</div>\n            <hr />\n            <input type=\"text\" [formControlName]=\"'title'\" class=\"form-control\" style=\"margin-top: 5px\"\n              placeholder=\"Title\">\n            <textarea type=\"text\" [formControlName]=\"'description'\" style=\"width: 100%; margin-top: 5px\"\n              placeholder=\"Description\"></textarea>\n            <div>\n              <div style=\"margin-top: 5px\" class=\"float-right\">\n                <button (click)=\"discard()\" class=\"btnDiscard\">Discard</button>\n                <button class=\"btnCreateSubreddit\">Create</button>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"sidebar\">\n          <h5 class=\"guidelines\">Posting to Spring Reddit</h5>\n          <hr />\n          <ul>\n            <li>Remember the human</li>\n            <hr />\n            <li>Behave like you would in real life</li>\n            <hr />\n            <li>Don't spam</li>\n            <hr />\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n      <hr />\n      <div class=\"col-md-9\">\n        <h2>List of Subreddits</h2>\n        <ul>\n          <li *ngFor=\"let subreddit of subreddits\">\n              <a routerLink=\"/view-subreddit/{{subreddit.id}}\">{{subreddit.name}}</a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-3\">\n        <app-side-bar></app-side-bar>\n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post/create-post/create-post.component */ "./src/app/post/create-post/create-post.component.ts");
/* harmony import */ var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subreddit/create-subreddit/create-subreddit.component */ "./src/app/subreddit/create-subreddit/create-subreddit.component.ts");
/* harmony import */ var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subreddit/list-subreddits/list-subreddits.component */ "./src/app/subreddit/list-subreddits/list-subreddits.component.ts");
/* harmony import */ var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/view-post/view-post.component */ "./src/app/post/view-post/view-post.component.ts");
/* harmony import */ var _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/user-profile/user-profile.component */ "./src/app/auth/user-profile/user-profile.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");












const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'view-post/:id', component: _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_9__["ViewPostComponent"] },
    { path: 'user-profile/:name', component: _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'list-subreddits', component: _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_8__["ListSubredditsComponent"] },
    { path: 'create-post', component: _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'create-subreddit', component: _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_7__["CreateSubredditComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
    { path: 'sign-up', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'angular-reddit-clone';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-interceptor */ "./src/app/token-interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/post-tile/post-tile.component */ "./src/app/shared/post-tile/post-tile.component.ts");
/* harmony import */ var _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/vote-button/vote-button.component */ "./src/app/shared/vote-button/vote-button.component.ts");
/* harmony import */ var _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/side-bar/side-bar.component */ "./src/app/shared/side-bar/side-bar.component.ts");
/* harmony import */ var _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/subreddit-side-bar/subreddit-side-bar.component */ "./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.ts");
/* harmony import */ var _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./subreddit/create-subreddit/create-subreddit.component */ "./src/app/subreddit/create-subreddit/create-subreddit.component.ts");
/* harmony import */ var _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./post/create-post/create-post.component */ "./src/app/post/create-post/create-post.component.ts");
/* harmony import */ var _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./subreddit/list-subreddits/list-subreddits.component */ "./src/app/subreddit/list-subreddits/list-subreddits.component.ts");
/* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/__ivy_ngcc__/fesm2015/tinymce-tinymce-angular.js");
/* harmony import */ var _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./post/view-post/view-post.component */ "./src/app/post/view-post/view-post.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth/user-profile/user-profile.component */ "./src/app/auth/user-profile/user-profile.component.ts");



























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
            _shared_post_tile_post_tile_component__WEBPACK_IMPORTED_MODULE_16__["PostTileComponent"],
            _shared_vote_button_vote_button_component__WEBPACK_IMPORTED_MODULE_17__["VoteButtonComponent"],
            _shared_side_bar_side_bar_component__WEBPACK_IMPORTED_MODULE_18__["SideBarComponent"],
            _shared_subreddit_side_bar_subreddit_side_bar_component__WEBPACK_IMPORTED_MODULE_19__["SubredditSideBarComponent"],
            _subreddit_create_subreddit_create_subreddit_component__WEBPACK_IMPORTED_MODULE_20__["CreateSubredditComponent"],
            _post_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_21__["CreatePostComponent"],
            _subreddit_list_subreddits_list_subreddits_component__WEBPACK_IMPORTED_MODULE_22__["ListSubredditsComponent"],
            _post_view_post_view_post_component__WEBPACK_IMPORTED_MODULE_24__["ViewPostComponent"],
            _auth_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_26__["UserProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["NgxWebstorageModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot(),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_15__["FontAwesomeModule"],
            _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_23__["EditorModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"]
        ],
        providers: [
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/auth.service */ "./src/app/auth/shared/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        const isAuthenticated = this.authService.isLoggedIn();
        if (isAuthenticated) {
            return true;
        }
        else {
            this.router.navigateByUrl('/login');
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-section{\n    margin: 100px;\n}\n\n.login-failed, .register-success{\n    text-align: center;\n    margin: auto;\n    margin-top: 10px;\n    border: 2px solid black;\n    width: 65%;    \n    background-color: red;\n}\n\n.login-failed-text, .register-success-text{\n    text-align: center;\n    margin-top: 5px;\n    font-weight: bold;    \n    color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXNlY3Rpb257XG4gICAgbWFyZ2luOiAxMDBweDtcbn1cblxuLmxvZ2luLWZhaWxlZCwgLnJlZ2lzdGVyLXN1Y2Nlc3N7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA2NSU7ICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmxvZ2luLWZhaWxlZC10ZXh0LCAucmVnaXN0ZXItc3VjY2Vzcy10ZXh0e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let LoginComponent = class LoginComponent {
    constructor(authService, activatedRoute, router, toastr) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.toastr = toastr;
        this.loginRequestPayload = {
            username: '',
            password: ''
        };
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.activatedRoute.queryParams
            .subscribe(params => {
            if (params.registered !== undefined && params.registered === 'true') {
                this.toastr.success('Signup Successful');
                this.registerSuccessMessage = 'Please Check your inbox for activation email '
                    + 'activate your account before you Login!';
            }
        });
    }
    login() {
        this.loginRequestPayload.username = this.loginForm.get('username').value;
        this.loginRequestPayload.password = this.loginForm.get('password').value;
        this.authService.login(this.loginRequestPayload).subscribe(data => {
            this.isError = false;
            this.router.navigateByUrl('');
            this.toastr.success('Login Successful');
        }, error => {
            this.isError = true;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/shared/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/shared/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/__ivy_ngcc__/fesm2015/ngx-webstorage.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(httpClient, localStorage) {
        this.httpClient = httpClient;
        this.localStorage = localStorage;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.username = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.refreshTokenPayload = {
            refreshToken: this.getRefreshToken(),
            username: this.getUserName()
        };
    }
    signup(signupRequestPayload) {
        return this.httpClient.post('http://localhost:8080/api/auth/signup', signupRequestPayload, { responseType: 'text' });
    }
    login(loginRequestPayload) {
        return this.httpClient.post('http://localhost:8080/api/auth/login', loginRequestPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => {
            this.localStorage.store('authenticationToken', data.authenticationToken);
            this.localStorage.store('username', data.username);
            this.localStorage.store('refreshToken', data.refreshToken);
            this.localStorage.store('expiresAt', data.expiresAt);
            this.loggedIn.emit(true);
            this.username.emit(data.username);
            return true;
        }));
    }
    getJwtToken() {
        return this.localStorage.retrieve('authenticationToken');
    }
    refreshToken() {
        return this.httpClient.post('http://localhost:8080/api/auth/refresh/token', this.refreshTokenPayload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(response => {
            this.localStorage.clear('authenticationToken');
            this.localStorage.clear('expiresAt');
            this.localStorage.store('authenticationToken', response.authenticationToken);
            this.localStorage.store('expiresAt', response.expiresAt);
        }));
    }
    logout() {
        this.httpClient.post('http://localhost:8080/api/auth/logout', this.refreshTokenPayload, { responseType: 'text' })
            .subscribe(data => {
            console.log(data);
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
        this.localStorage.clear('authenticationToken');
        this.localStorage.clear('username');
        this.localStorage.clear('refreshToken');
        this.localStorage.clear('expiresAt');
    }
    getUserName() {
        return this.localStorage.retrieve('username');
    }
    getRefreshToken() {
        return this.localStorage.retrieve('refreshToken');
    }
    isLoggedIn() {
        return this.getJwtToken() != null;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AuthService.prototype, "loggedIn", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AuthService.prototype, "username", void 0);
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".register-section {\n  margin: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1zZWN0aW9uIHtcbiAgbWFyZ2luOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let SignupComponent = class SignupComponent {
    constructor(authService, router, toastr) {
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.signupRequestPayload = {
            username: '',
            email: '',
            password: ''
        };
    }
    ngOnInit() {
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    signup() {
        this.signupRequestPayload.email = this.signupForm.get('email').value;
        this.signupRequestPayload.username = this.signupForm.get('username').value;
        this.signupRequestPayload.password = this.signupForm.get('password').value;
        this.authService.signup(this.signupRequestPayload)
            .subscribe(data => {
            this.router.navigate(['/login'], { queryParams: { registered: 'true' } });
        }, error => {
            console.log(error);
            this.toastr.error('Registration Failed! Please try again');
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/auth/user-profile/user-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/auth/user-profile/user-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/comment/comment.service */ "./src/app/comment/comment.service.ts");





let UserProfileComponent = class UserProfileComponent {
    constructor(activatedRoute, postService, commentService) {
        this.activatedRoute = activatedRoute;
        this.postService = postService;
        this.commentService = commentService;
        this.name = this.activatedRoute.snapshot.params.name;
        this.postService.getAllPostsByUser(this.name).subscribe(data => {
            this.posts = data;
            this.postLength = data.length;
        });
        this.commentService.getAllCommentsByUser(this.name).subscribe(data => {
            this.comments = data;
            this.commentLength = data.length;
        });
    }
    ngOnInit() {
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_4__["CommentService"] }
];
UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-profile.component.css */ "./src/app/auth/user-profile/user-profile.component.css")).default]
    })
], UserProfileComponent);



/***/ }),

/***/ "./src/app/comment/comment.service.ts":
/*!********************************************!*\
  !*** ./src/app/comment/comment.service.ts ***!
  \********************************************/
/*! exports provided: CommentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentService", function() { return CommentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let CommentService = class CommentService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAllCommentsForPost(postId) {
        return this.httpClient.get('http://localhost:8080/api/comments/by-post/' + postId);
    }
    postComment(commentPayload) {
        return this.httpClient.post('http://localhost:8080/api/comments/', commentPayload);
    }
    getAllCommentsByUser(name) {
        return this.httpClient.get('http://localhost:8080/api/comments/by-user/' + name);
    }
};
CommentService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CommentService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommentService);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header{\n    border-radius: 1px solid;\n}\n.reddit-icon-svg{\n    height: 50px;\n    padding: 8px 8px 8px 0;\n    width: 50px;\n}\n.reddit-text{        \n    font-weight: 700;\n    height: 50px;\n    width: 50px;    \n}\n.logo{\n    text-decoration: none;\n}\n.login, .sign-up{    \n    background-color: transparent;\n    border-color: #0079D3;\n    color: #0079D3;\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    box-sizing: border-box;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;  \n}\n.sign-up{\n    background-color: #0079D3;\n    border-color: #0079D3;\n    color: aliceblue;\n}\n.sign-up:hover{\n    opacity: 0.6;\n}\n.userdetails{    \n    background-color: transparent;\n    border-color: #0079D3;\n    color: #0079D3;\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    box-sizing: border-box;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n    border: 0px;\n}\n.userdetails:hover{\n    border: 1px solid;\n}\n.dropdown-item{\n    background-color: #f8f9fa;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 18px;\n    display: inline-block;\n    vertical-align: middle;\n}\n.dropdown-item:hover{\n    background-color: #0079D3;\n}\n.dropdown-menu{\n    background-color: #f8f9fa;\n}\n.account-icon{\n    border-radius: 4px;\n    float: left;\n    margin-right: 5px;\n    max-height: 24px;\n    max-width: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkO1xufVxuLnJlZGRpdC1pY29uLXN2Z3tcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggMDtcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLnJlZGRpdC10ZXh0eyAgICAgICAgXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDUwcHg7ICAgIFxufVxuLmxvZ297XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9naW4sIC5zaWduLXVweyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICMwMDc5RDM7XG4gICAgY29sb3I6ICMwMDc5RDM7XG4gICAgZmlsbDogIzAwNzlEMztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nOiAzcHggMTZweDtcbiAgICBvcGFjaXR5OiAxOyAgXG59XG5cbi5zaWduLXVwe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG59XG5cbi5zaWduLXVwOmhvdmVye1xuICAgIG9wYWNpdHk6IDAuNjtcbn1cblxuLnVzZXJkZXRhaWxzeyAgICBcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItY29sb3I6ICMwMDc5RDM7XG4gICAgY29sb3I6ICMwMDc5RDM7XG4gICAgZmlsbDogIzAwNzlEMztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBwYWRkaW5nOiAzcHggMTZweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGJvcmRlcjogMHB4O1xufVxuXG4udXNlcmRldGFpbHM6aG92ZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5kcm9wZG93bi1pdGVte1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XG59XG5cbi5kcm9wZG93bi1tZW51e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG59XG5cbi5hY2NvdW50LWljb257XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1heC1oZWlnaHQ6IDI0cHg7XG4gICAgbWF4LXdpZHRoOiAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
    }
    ngOnInit() {
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
        this.authService.username.subscribe((data) => this.username = data);
        this.isLoggedIn = this.authService.isLoggedIn();
        this.username = this.authService.getUserName();
    }
    goToUserProfile() {
        this.router.navigateByUrl('/user-profile/' + this.username);
    }
    logout() {
        this.authService.logout();
        this.isLoggedIn = false;
        this.router.navigateByUrl('');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/post.service */ "./src/app/shared/post.service.ts");



let HomeComponent = class HomeComponent {
    constructor(postService) {
        this.postService = postService;
        this.posts = [];
        this.postService.getAllPosts().subscribe(post => {
            this.posts = post;
        });
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/post/create-post/create-post.component.css":
/*!************************************************************!*\
  !*** ./src/app/post/create-post/create-post.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnCreatePost,\n.btnCreateSubreddit {\n  margin-top: 5px;\n}\n\n.post-form {\n  margin: 2px;\n}\n\n.comment-notification {\n  margin-top: 5px;\n}\n\n.create-post-container {\n  margin-top: 10px;\n  --post-line-color: #ccc;\n  border: 1px solid #ccc;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.8);\n  color: #878A8C;\n  position: relative;\n  border-radius: 4px;\n  padding: 5px;\n}\n\n.btnDiscard {\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n    width: 288px;\n    height: 34px;\n    margin-top: 5px;\n    color: #0079D3;\n    background-color: transparent;\n  }\n\n.create-post-heading {\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 22px;\n  color: #1c1c1c;\n  flex: 1;\n}\n\n.btnCreatePost {\n    background-color: #0079D3;\n    border-color: #0079D3;\n    color: aliceblue;\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n    width: 288px;\n    height: 34px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMENBQTBDO0VBQzFDLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0VBQy9COztBQUVGO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztFQUVkLE9BQU87QUFDVDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvcG9zdC9jcmVhdGUtcG9zdC9jcmVhdGUtcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bkNyZWF0ZVBvc3QsXG4uYnRuQ3JlYXRlU3VicmVkZGl0IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ucG9zdC1mb3JtIHtcbiAgbWFyZ2luOiAycHg7XG59XG5cbi5jb21tZW50LW5vdGlmaWNhdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNyZWF0ZS1wb3N0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gIGNvbG9yOiAjODc4QThDO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYnRuRGlzY2FyZCB7XG4gICAgZmlsbDogIzAwNzlEMztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogM3B4IDE2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMjg4cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBjb2xvcjogIzAwNzlEMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4uY3JlYXRlLXBvc3QtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjMWMxYzFjO1xuICAtbXMtZmxleDogMTtcbiAgZmxleDogMTtcbn1cblxuLmJ0bkNyZWF0ZVBvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgZmlsbDogIzAwNzlEMztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogM3B4IDE2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMjg4cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/post/create-post/create-post.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/post/create-post/create-post.component.ts ***!
  \***********************************************************/
/*! exports provided: CreatePostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function() { return CreatePostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/subreddit/subreddit.service */ "./src/app/subreddit/subreddit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let CreatePostComponent = class CreatePostComponent {
    constructor(router, postService, subredditService) {
        this.router = router;
        this.postService = postService;
        this.subredditService = subredditService;
        this.postPayload = {
            postName: '',
            url: '',
            description: '',
            subredditName: ''
        };
    }
    ngOnInit() {
        this.createPostForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            postName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            subredditName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        this.subredditService.getAllSubreddits().subscribe((data) => {
            this.subreddits = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        });
    }
    createPost() {
        this.postPayload.postName = this.createPostForm.get('postName').value;
        this.postPayload.subredditName = this.createPostForm.get('subredditName').value;
        this.postPayload.url = this.createPostForm.get('url').value;
        this.postPayload.description = this.createPostForm.get('description').value;
        this.postService.createPost(this.postPayload).subscribe((data) => {
            this.router.navigateByUrl('/');
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["throwError"])(error);
        });
    }
    discardPost() {
        this.router.navigateByUrl('/');
    }
};
CreatePostComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_5__["SubredditService"] }
];
CreatePostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/create-post/create-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-post.component.css */ "./src/app/post/create-post/create-post.component.css")).default]
    })
], CreatePostComponent);



/***/ }),

/***/ "./src/app/post/view-post/view-post.component.css":
/*!********************************************************!*\
  !*** ./src/app/post/view-post/view-post.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post-title {\n  font-size: 28px;\n  font-weight: bold;\n  opacity: 1;\n}\n\n.post-title:hover {\n  opacity: 0.6;\n}\n\n.subreddit-text {\n  font-weight: bold;\n}\n\n.post-url {\n  color: black;\n}\n\n.username{\n    color: gray;\n}\n\n.post-text{\n    margin-top: 10px;\n}\n\n.post{\n    --post-line-color: #ccc;    \n    border: 1px solid #ccc;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    overflow: hidden;\n    background-color: rgba(255,255,255,0.8);\n    color: #878A8C;\n    position: relative;\n    border-radius: 4px;\n    padding:5px;\n}\n\n.comment{    \n    --post-line-color: #ccc;    \n    border: 1px solid #ccc;    \n    margin-bottom: 10px;\n    overflow: hidden;\n    background-color: rgba(255,255,255,0.8);\n    color: #878A8C;\n    position: relative;\n    border-radius: 4px;\n    padding:5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC92aWV3LXBvc3Qvdmlldy1wb3N0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcG9zdC92aWV3LXBvc3Qvdmlldy1wb3N0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5wb3N0LXRpdGxlOmhvdmVyIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uc3VicmVkZGl0LXRleHQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvc3QtdXJsIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4udXNlcm5hbWV7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5wb3N0LXRleHR7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBvc3R7XG4gICAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7ICAgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIGNvbG9yOiAjODc4QThDO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzo1cHg7XG59XG5cbi5jb21tZW50eyAgICBcbiAgICAtLXBvc3QtbGluZS1jb2xvcjogI2NjYzsgICAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYzsgICAgXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbiAgICBjb2xvcjogIzg3OEE4QztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6NXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/post/view-post/view-post.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/post/view-post/view-post.component.ts ***!
  \*******************************************************/
/*! exports provided: ViewPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPostComponent", function() { return ViewPostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/comment/comment.service */ "./src/app/comment/comment.service.ts");







let ViewPostComponent = class ViewPostComponent {
    constructor(postService, activateRoute, commentService, router) {
        this.postService = postService;
        this.activateRoute = activateRoute;
        this.commentService = commentService;
        this.router = router;
        this.postId = this.activateRoute.snapshot.params.id;
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            text: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.commentPayload = {
            text: '',
            postId: this.postId
        };
    }
    ngOnInit() {
        this.getPostById();
        this.getCommentsForPost();
    }
    postComment() {
        this.commentPayload.text = this.commentForm.get('text').value;
        this.commentService.postComment(this.commentPayload).subscribe(data => {
            this.commentForm.get('text').setValue('');
            this.getCommentsForPost();
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    }
    getPostById() {
        this.postService.getPost(this.postId).subscribe(data => {
            this.post = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    }
    getCommentsForPost() {
        this.commentService.getAllCommentsForPost(this.postId).subscribe(data => {
            this.comments = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
        });
    }
};
ViewPostComponent.ctorParameters = () => [
    { type: src_app_shared_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_comment_comment_service__WEBPACK_IMPORTED_MODULE_6__["CommentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ViewPostComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-post',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-post.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post/view-post/view-post.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view-post.component.css */ "./src/app/post/view-post/view-post.component.css")).default]
    })
], ViewPostComponent);



/***/ }),

/***/ "./src/app/shared/post-tile/post-tile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/post-tile/post-tile.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".post{\n    --post-line-color: #ccc;    \n    border: 1px solid #ccc;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    overflow: hidden;\n    background-color: rgba(255,255,255,0.8);\n    color: #878A8C;\n    position: relative;\n    border-radius: 4px;\n    padding:5px;\n}\n\n.btnCommments{\n    border-radius: 2px solid;\n    color: #878A8C;\n    opacity: 1;\n}\n\n.btnCommments:hover{\n    opacity: 0.65;\n    cursor: pointer;\n}\n\n.post-title{\n    font-size: 28px;\n    font-weight: bold;\n    opacity: 1;\n}\n\n.posturl, .postname{    \n    color: black;\n}\n\n.subreddit-text{\n    font-weight: bold;\n}\n\n.post-text{\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Bvc3QtdGlsZS9wb3N0LXRpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUNBQXVDO0lBQ3ZDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcG9zdC10aWxlL3Bvc3QtdGlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3R7XG4gICAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7ICAgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICAgIGNvbG9yOiAjODc4QThDO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzo1cHg7XG59XG5cbi5idG5Db21tbWVudHN7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IHNvbGlkO1xuICAgIGNvbG9yOiAjODc4QThDO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5idG5Db21tbWVudHM6aG92ZXJ7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3N0LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucG9zdHVybCwgLnBvc3RuYW1leyAgICBcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5zdWJyZWRkaXQtdGV4dHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvc3QtdGV4dHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/post-tile/post-tile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/post-tile/post-tile.component.ts ***!
  \*********************************************************/
/*! exports provided: PostTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTileComponent", function() { return PostTileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let PostTileComponent = class PostTileComponent {
    constructor(router) {
        this.router = router;
        this.faComments = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faComments"];
    }
    ngOnInit() {
    }
    goToPost(id) {
        this.router.navigateByUrl('/view-post/' + id);
    }
};
PostTileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostTileComponent.prototype, "posts", void 0);
PostTileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-tile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-tile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/post-tile/post-tile.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post-tile.component.css */ "./src/app/shared/post-tile/post-tile.component.css")).default]
    })
], PostTileComponent);



/***/ }),

/***/ "./src/app/shared/post.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/post.service.ts ***!
  \****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let PostService = class PostService {
    constructor(http) {
        this.http = http;
    }
    getAllPosts() {
        return this.http.get('http://localhost:8080/api/posts/');
    }
    createPost(postPayload) {
        return this.http.post('http://localhost:8080/api/posts/', postPayload);
    }
    getPost(id) {
        return this.http.get('http://localhost:8080/api/posts/' + id);
    }
    getAllPostsByUser(name) {
        return this.http.get('http://localhost:8080/api/posts/by-user/' + name);
    }
};
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PostService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PostService);



/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar{\n    width: 312px;\n    height: 242px;\n    --post-line-color: #ccc;    \n    border: 1px solid #ccc;\n    margin-bottom: 10px;\n    overflow: hidden;\n    background-color: rgba(255,255,255,0.8);\n    color: #878A8C;\n    position: relative;\n    border-radius: 4px;\n    padding:5px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.btnCreatePost, .btnCreateSubreddit{\n    background-color: #0079D3;\n    border-color: #0079D3;\n    color: aliceblue;\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;    \n    opacity: 1;\n    width: 288px;\n    height: 34px;\n}\n\n.btnCreateSubreddit{\n    margin-top: 5px;\n    color: #0079D3;\n    background-color: transparent;\n}\n\n.sidebar>ul>li{\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 20px;\n    color: #1c1c1c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZGUtYmFyL3NpZGUtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1Q0FBdUM7SUFDdkMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2lkZS1iYXIvc2lkZS1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlYmFye1xuICAgIHdpZHRoOiAzMTJweDtcbiAgICBoZWlnaHQ6IDI0MnB4O1xuICAgIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjOyAgICBcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG4gICAgY29sb3I6ICM4NzhBOEM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5idG5DcmVhdGVQb3N0LCAuYnRuQ3JlYXRlU3VicmVkZGl0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgZmlsbDogIzAwNzlEMztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogM3B4IDE2cHg7ICAgIFxuICAgIG9wYWNpdHk6IDE7XG4gICAgd2lkdGg6IDI4OHB4O1xuICAgIGhlaWdodDogMzRweDtcbn1cblxuLmJ0bkNyZWF0ZVN1YnJlZGRpdHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgY29sb3I6ICMwMDc5RDM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5zaWRlYmFyPnVsPmxpe1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiAjMWMxYzFjO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/side-bar/side-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/side-bar/side-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: SideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarComponent", function() { return SideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let SideBarComponent = class SideBarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToCreatePost() {
        this.router.navigateByUrl('/create-post');
    }
    goToCreateSubreddit() {
        this.router.navigateByUrl('/create-subreddit');
    }
};
SideBarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SideBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-bar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./side-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/side-bar/side-bar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./side-bar.component.css */ "./src/app/shared/side-bar/side-bar.component.css")).default]
    })
], SideBarComponent);



/***/ }),

/***/ "./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sidebar-view-subreddit {\n    width: 312px;\n    height: 242px;\n    --post-line-color: #ccc;\n    border: 1px solid #ccc;\n    margin-bottom: 10px;\n    overflow: hidden;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: #878A8C;\n    position: relative;\n    border-radius: 4px;\n    padding: 5px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n  \n  .sidebar-view-subreddit {\n    height: 280px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3N1YnJlZGRpdC1zaWRlLWJhci9zdWJyZWRkaXQtc2lkZS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLDBDQUEwQztJQUMxQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zdWJyZWRkaXQtc2lkZS1iYXIvc3VicmVkZGl0LXNpZGUtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhci12aWV3LXN1YnJlZGRpdCB7XG4gICAgd2lkdGg6IDMxMnB4O1xuICAgIGhlaWdodDogMjQycHg7XG4gICAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuICAgIGNvbG9yOiAjODc4QThDO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICBcbiAgLnNpZGViYXItdmlldy1zdWJyZWRkaXQge1xuICAgIGhlaWdodDogMjgwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubredditSideBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditSideBarComponent", function() { return SubredditSideBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/subreddit/subreddit.service */ "./src/app/subreddit/subreddit.service.ts");



let SubredditSideBarComponent = class SubredditSideBarComponent {
    constructor(subredditService) {
        this.subredditService = subredditService;
        this.subreddits = [];
        this.subredditService.getAllSubreddits().subscribe(data => {
            if (data.length > 3) {
                this.subreddits = data.splice(0, 3);
                this.displayViewAll = true;
            }
            else {
                this.subreddits = data;
            }
        });
    }
    ngOnInit() { }
};
SubredditSideBarComponent.ctorParameters = () => [
    { type: src_app_subreddit_subreddit_service__WEBPACK_IMPORTED_MODULE_2__["SubredditService"] }
];
SubredditSideBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subreddit-side-bar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./subreddit-side-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./subreddit-side-bar.component.css */ "./src/app/shared/subreddit-side-bar/subreddit-side-bar.component.css")).default]
    })
], SubredditSideBarComponent);



/***/ }),

/***/ "./src/app/shared/vote-button/vote-button.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/vote-button/vote-button.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".votebox {    \n    display: flex;\n    text-align: center;\n    flex-direction: column;\n    font-size: 1em;    \n}\n\n.votesection{\n    margin:0px;\n    background-color: #ffffff;\n}\n\n.upvote,.downvote {\n    cursor: pointer;\n    border-radius: 2px solid;        \n}\n\n.upvote:hover {\n    color: green;\n}\n\n.downvote:hover {\n    color: red;\n}\n\n.votecount{\n    font-weight: bold;    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3ZvdGUtYnV0dG9uL3ZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3ZvdGUtYnV0dG9uL3ZvdGUtYnV0dG9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudm90ZWJveCB7ICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1zaXplOiAxZW07ICAgIFxufVxuXG4udm90ZXNlY3Rpb257XG4gICAgbWFyZ2luOjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLnVwdm90ZSwuZG93bnZvdGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAycHggc29saWQ7ICAgICAgICBcbn1cbi51cHZvdGU6aG92ZXIge1xuICAgIGNvbG9yOiBncmVlbjtcbn1cbi5kb3dudm90ZTpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLnZvdGVjb3VudHtcbiAgICBmb250LXdlaWdodDogYm9sZDsgICAgXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/vote-button/vote-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/vote-button/vote-button.component.ts ***!
  \*************************************************************/
/*! exports provided: VoteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteButtonComponent", function() { return VoteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _vote_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vote-type */ "./src/app/shared/vote-button/vote-type.ts");
/* harmony import */ var _vote_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vote.service */ "./src/app/shared/vote.service.ts");
/* harmony import */ var src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post.service */ "./src/app/shared/post.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");









let VoteButtonComponent = class VoteButtonComponent {
    constructor(voteService, authService, postService, toastr) {
        this.voteService = voteService;
        this.authService = authService;
        this.postService = postService;
        this.toastr = toastr;
        this.faArrowUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowUp"];
        this.faArrowDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faArrowDown"];
        this.votePayload = {
            voteType: undefined,
            postId: undefined
        };
        this.authService.loggedIn.subscribe((data) => this.isLoggedIn = data);
    }
    ngOnInit() {
        this.updateVoteDetails();
    }
    upvotePost() {
        this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_3__["VoteType"].UPVOTE;
        this.vote();
        this.downvoteColor = '';
    }
    downvotePost() {
        this.votePayload.voteType = _vote_type__WEBPACK_IMPORTED_MODULE_3__["VoteType"].DOWNVOTE;
        this.vote();
        this.upvoteColor = '';
    }
    vote() {
        this.votePayload.postId = this.post.id;
        this.voteService.vote(this.votePayload).subscribe(() => {
            this.updateVoteDetails();
        }, error => {
            this.toastr.error(error.error.message);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(error);
        });
    }
    updateVoteDetails() {
        this.postService.getPost(this.post.id).subscribe(post => {
            this.post = post;
        });
    }
};
VoteButtonComponent.ctorParameters = () => [
    { type: _vote_service__WEBPACK_IMPORTED_MODULE_4__["VoteService"] },
    { type: src_app_auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VoteButtonComponent.prototype, "post", void 0);
VoteButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vote-button',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vote-button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/vote-button/vote-button.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vote-button.component.css */ "./src/app/shared/vote-button/vote-button.component.css")).default]
    })
], VoteButtonComponent);



/***/ }),

/***/ "./src/app/shared/vote-button/vote-type.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/vote-button/vote-type.ts ***!
  \*************************************************/
/*! exports provided: VoteType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteType", function() { return VoteType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var VoteType;
(function (VoteType) {
    VoteType[VoteType["UPVOTE"] = 0] = "UPVOTE";
    VoteType[VoteType["DOWNVOTE"] = 1] = "DOWNVOTE";
})(VoteType || (VoteType = {}));


/***/ }),

/***/ "./src/app/shared/vote.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/vote.service.ts ***!
  \****************************************/
/*! exports provided: VoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VoteService", function() { return VoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let VoteService = class VoteService {
    constructor(http) {
        this.http = http;
    }
    vote(votePayload) {
        return this.http.post('http://localhost:8080/api/votes/', votePayload);
    }
};
VoteService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VoteService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VoteService);



/***/ }),

/***/ "./src/app/subreddit/create-subreddit/create-subreddit.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".create-subreddit-container {\n    margin-top: 10px;\n    --post-line-color: #ccc;\n    border: 1px solid #ccc;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    overflow: hidden;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: #878A8C;\n    position: relative;\n    border-radius: 4px;\n    padding: 5px;\n  }\n  \n  .create-subreddit-heading {\n    font-size: 18px;\n    font-weight: 500;\n    line-height: 22px;\n    color: #1c1c1c;\n    flex: 1;\n  }\n  \n  .btnCreateSubreddit {\n    background-color: #0079D3;\n    border-color: #0079D3;\n    color: aliceblue;\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n    width: 288px;\n    height: 34px;\n  }\n  \n  .btnDiscard {\n    fill: #0079D3;\n    border: 1px solid;\n    border-radius: 4px;\n    text-align: center;\n    letter-spacing: 1px;\n    text-decoration: none;\n    font-size: 12px;\n    font-weight: 700;\n    letter-spacing: .5px;\n    line-height: 24px;\n    text-transform: uppercase;\n    padding: 3px 16px;\n    opacity: 1;\n    width: 288px;\n    height: 34px;\n    margin-top: 5px;\n    color: #0079D3;\n    background-color: transparent;\n  }\n  \n  .guidelines {\n    text-align: center;\n    font-size: 16px;\n    font-weight: 500;\n    line-height: 20px;\n    color: #1c1c1c;\n  }\n  \n  .sidebar {\n    width: 312px;\n    height: 242px;\n    --post-line-color: #ccc;\n    border: 1px solid #ccc;\n    margin-bottom: 10px;\n    overflow: hidden;\n    background-color: rgba(255, 255, 255, 0.8);\n    color: #878A8C;\n    position: relative;\n    border-radius: 4px;\n    padding: 5px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VicmVkZGl0L2NyZWF0ZS1zdWJyZWRkaXQvY3JlYXRlLXN1YnJlZGRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsMENBQTBDO0lBQzFDLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFFZCxPQUFPO0VBQ1Q7O0VBRUE7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixjQUFjO0lBQ2QsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9zdWJyZWRkaXQvY3JlYXRlLXN1YnJlZGRpdC9jcmVhdGUtc3VicmVkZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLXN1YnJlZGRpdC1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgLS1wb3N0LWxpbmUtY29sb3I6ICNjY2M7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgY29sb3I6ICM4NzhBOEM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgXG4gIC5jcmVhdGUtc3VicmVkZGl0LWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGNvbG9yOiAjMWMxYzFjO1xuICAgIC1tcy1mbGV4OiAxO1xuICAgIGZsZXg6IDE7XG4gIH1cbiAgXG4gIC5idG5DcmVhdGVTdWJyZWRkaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc5RDM7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3OUQzO1xuICAgIGNvbG9yOiBhbGljZWJsdWU7XG4gICAgZmlsbDogIzAwNzlEMztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogM3B4IDE2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMjg4cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICB9XG4gIFxuICAuYnRuRGlzY2FyZCB7XG4gICAgZmlsbDogIzAwNzlEMztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgcGFkZGluZzogM3B4IDE2cHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB3aWR0aDogMjg4cHg7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBjb2xvcjogIzAwNzlEMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmd1aWRlbGluZXMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBjb2xvcjogIzFjMWMxYztcbiAgfVxuICBcbiAgLnNpZGViYXIge1xuICAgIHdpZHRoOiAzMTJweDtcbiAgICBoZWlnaHQ6IDI0MnB4O1xuICAgIC0tcG9zdC1saW5lLWNvbG9yOiAjY2NjO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICBjb2xvcjogIzg3OEE4QztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/subreddit/create-subreddit/create-subreddit.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/subreddit/create-subreddit/create-subreddit.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateSubredditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSubredditComponent", function() { return CreateSubredditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _subreddit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../subreddit.service */ "./src/app/subreddit/subreddit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let CreateSubredditComponent = class CreateSubredditComponent {
    constructor(router, subredditService) {
        this.router = router;
        this.subredditService = subredditService;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.description = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
        this.createSubredditForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.subredditModel = {
            name: '',
            description: ''
        };
    }
    ngOnInit() {
    }
    discard() {
        this.router.navigateByUrl('/');
    }
    createSubreddit() {
        this.subredditModel.name = this.createSubredditForm.get('title')
            .value;
        this.subredditModel.description = this.createSubredditForm.get('description')
            .value;
        this.subredditService.createSubreddit(this.subredditModel).subscribe(data => {
            this.router.navigateByUrl('/list-subreddits');
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
        });
    }
};
CreateSubredditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _subreddit_service__WEBPACK_IMPORTED_MODULE_4__["SubredditService"] }
];
CreateSubredditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-subreddit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-subreddit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/create-subreddit/create-subreddit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-subreddit.component.css */ "./src/app/subreddit/create-subreddit/create-subreddit.component.css")).default]
    })
], CreateSubredditComponent);



/***/ }),

/***/ "./src/app/subreddit/list-subreddits/list-subreddits.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YnJlZGRpdC9saXN0LXN1YnJlZGRpdHMvbGlzdC1zdWJyZWRkaXRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/subreddit/list-subreddits/list-subreddits.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/subreddit/list-subreddits/list-subreddits.component.ts ***!
  \************************************************************************/
/*! exports provided: ListSubredditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListSubredditsComponent", function() { return ListSubredditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _subreddit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../subreddit.service */ "./src/app/subreddit/subreddit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let ListSubredditsComponent = class ListSubredditsComponent {
    constructor(subredditService) {
        this.subredditService = subredditService;
    }
    ngOnInit() {
        this.subredditService.getAllSubreddits().subscribe(data => {
            this.subreddits = data;
        }, error => {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        });
    }
};
ListSubredditsComponent.ctorParameters = () => [
    { type: _subreddit_service__WEBPACK_IMPORTED_MODULE_2__["SubredditService"] }
];
ListSubredditsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-subreddits',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-subreddits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subreddit/list-subreddits/list-subreddits.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-subreddits.component.css */ "./src/app/subreddit/list-subreddits/list-subreddits.component.css")).default]
    })
], ListSubredditsComponent);



/***/ }),

/***/ "./src/app/subreddit/subreddit.service.ts":
/*!************************************************!*\
  !*** ./src/app/subreddit/subreddit.service.ts ***!
  \************************************************/
/*! exports provided: SubredditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditService", function() { return SubredditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let SubredditService = class SubredditService {
    constructor(http) {
        this.http = http;
    }
    getAllSubreddits() {
        return this.http.get('http://localhost:8080/api/subreddit');
    }
    createSubreddit(subredditModel) {
        return this.http.post('http://localhost:8080/api/subreddit', subredditModel);
    }
};
SubredditService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SubredditService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SubredditService);



/***/ }),

/***/ "./src/app/token-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token-interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/shared/auth.service */ "./src/app/auth/shared/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let TokenInterceptor = class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
        this.isTokenRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
    }
    intercept(req, next) {
        if (req.url.indexOf('refresh') !== -1 || req.url.indexOf('login') !== -1) {
            return next.handle(req);
        }
        const jwtToken = this.authService.getJwtToken();
        if (jwtToken) {
            return next.handle(this.addToken(req, jwtToken)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(error => {
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"] && error.status === 403) {
                    return this.handleAuthErrors(req, next);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
                }
            }));
        }
        return next.handle(req);
    }
    handleAuthErrors(req, next) {
        if (!this.isTokenRefreshing) {
            this.isTokenRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((refreshTokenResponse) => {
                this.isTokenRefreshing = false;
                this.refreshTokenSubject.next(refreshTokenResponse.authenticationToken);
                return next.handle(this.addToken(req, refreshTokenResponse.authenticationToken));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(result => result !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((res) => {
                return next.handle(this.addToken(req, this.authService.getJwtToken()));
            }));
        }
    }
    addToken(req, jwtToken) {
        return req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + jwtToken)
        });
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _auth_shared_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptor);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    serverUrl: "http://localhost:4200/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/prashant/66DC65AEDC657967/Personal/Learning/Projects/reddit-clone/redit-frontend/src/main/angular-reddit-clone/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map