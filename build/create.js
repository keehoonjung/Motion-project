"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateItemImpl = /** @class */ (function () {
    function CreateItemImpl() {
        var _this = this;
        var _a;
        this.mainlist = document.querySelector(".mainlist");
        (_a = this.mainlist) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
            var target = event.target;
            _this.deleteItem(target);
        });
    }
    CreateItemImpl.prototype.createItem = function (name) {
        var _a;
        var item = document.createElement("div");
        switch (name) {
            case "image":
                this.createImageItem(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value, urlInput === null || urlInput === void 0 ? void 0 : urlInput.value, item);
                break;
            case "video":
                this.createVideoItem(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value, urlInput === null || urlInput === void 0 ? void 0 : urlInput.value, item);
                break;
            case "note":
                this.createNoteItem(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value, urlInput === null || urlInput === void 0 ? void 0 : urlInput.value, item);
                break;
            case "todo":
                this.createTodoItem(titleInput === null || titleInput === void 0 ? void 0 : titleInput.value, urlInput === null || urlInput === void 0 ? void 0 : urlInput.value, item);
                break;
        }
        (_a = this.mainlist) === null || _a === void 0 ? void 0 : _a.appendChild(item);
    };
    CreateItemImpl.prototype.createImageItem = function (title, url, item) {
        item.setAttribute("class", "mainlist__item");
        item.innerHTML = "\n    <img src=" + url + " alt=\"random__img\" />\n    <h2 class=\"mainlist__title\">" + title + "</h2>\n    <button class=\"mainlist__deletebtn\">\n      <i class=\"fas fa-times\"></i>\n    </button>\n    ";
    };
    CreateItemImpl.prototype.createVideoItem = function (title, url, item) {
        item.setAttribute("class", "mainlist__item");
        item.innerHTML = "\n    <iframe\n    width=\"400\"\n    height=\"250\"\n    src=" + url + "\n    title=\"YouTube video player\"\n    frameborder=\"0\"\n    allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n    allowfullscreen\n  ></iframe>\n  <h2 class=\"mainlist__title\">" + title + "</h2>\n  <button class=\"mainlist__deletebtn\">\n    <i class=\"fas fa-times\"></i>\n  </button>\n      ";
    };
    CreateItemImpl.prototype.createNoteItem = function (title, text, item) {
        item.setAttribute("class", "mainlist__text");
        item.innerHTML = "\n    <h2 class=\"mainlist__text__title\">" + title + "</h2>\n    <span> " + text + " </span>\n    <button class=\"mainlist__deletebtn\">\n      <i class=\"fas fa-times\"></i>\n    </button>\n      ";
    };
    CreateItemImpl.prototype.createTodoItem = function (title, text, item) {
        item.setAttribute("class", "mainlist__text");
        item.innerHTML = "\n      <h2 class=\"mainlist__text__title\">" + title + "</h2>\n      <ul class=\"todo__items\">\n        <li class=\"todo__item\">\n          <span>" + text + "</span>\n        </li>\n      </ul>\n      <button class=\"mainlist__deletebtn\">\n        <i class=\"fas fa-times\"></i>\n      </button>\n        ";
    };
    CreateItemImpl.prototype.deleteItem = function (target) {
        if ((target === null || target === void 0 ? void 0 : target.classList.value) == "fas fa-times") {
            target.parentNode.parentNode.remove();
        }
    };
    return CreateItemImpl;
}());
exports.default = CreateItemImpl;
