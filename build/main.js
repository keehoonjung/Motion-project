"use strict";
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
    CreateItemImpl.prototype.createItem = function (name, title, url) {
        var _a;
        var item = document.createElement("div");
        switch (name) {
            case "image":
                this.createImageItem(title, url, item);
                break;
            case "video":
                this.createVideoItem(title, url, item);
                break;
            case "note":
                this.createNoteItem(title, url, item);
                break;
            case "todo":
                this.createTodoItem(title, url, item);
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
var PopupImpl = /** @class */ (function () {
    function PopupImpl() {
        var _this = this;
        var _a;
        this.popup = document.querySelector(".popup");
        this.darkcontainer = document.querySelector(".darkcontainer");
        this.urlInput = document.querySelector(".popup__item__input");
        this.titleInput = document.querySelector(".popup__title__input");
        this.popupText = document.querySelector(".popup__url__text");
        (_a = this.popup) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function (event) {
            var target = event.target;
            var title = _this.titleInput.value;
            var url = _this.urlInput.value;
            var name = _this.popup.dataset.name;
            if ((target === null || target === void 0 ? void 0 : target.classList.value) == "fas fa-times") {
                _this.exitPopup();
            }
            else if ((target === null || target === void 0 ? void 0 : target.classList.value) === "popup__addbtn") {
                Create.createItem(name, title, url);
                _this.exitPopup();
            }
        });
    }
    PopupImpl.prototype.openPopup = function (name, type) {
        var _a, _b, _c;
        (_a = this.popup) === null || _a === void 0 ? void 0 : _a.classList.add("visible");
        (_b = this.darkcontainer) === null || _b === void 0 ? void 0 : _b.classList.add("visible");
        (_c = this.popup) === null || _c === void 0 ? void 0 : _c.setAttribute("data-name", name);
        switch (type) {
            case "item":
                this.popupText.textContent = "URL";
                break;
            case "text":
                this.popupText.textContent = "Body";
                break;
        }
    };
    PopupImpl.prototype.exitPopup = function () {
        var _a, _b, _c;
        this.titleInput.value = "";
        this.urlInput.value = "";
        (_a = this.darkcontainer) === null || _a === void 0 ? void 0 : _a.classList.remove("visible");
        (_b = this.popup) === null || _b === void 0 ? void 0 : _b.classList.remove("visible");
        (_c = this.popup) === null || _c === void 0 ? void 0 : _c.removeAttribute("data-name");
    };
    return PopupImpl;
}());
var mainMenu = document.querySelector(".head__menu");
var Create = new CreateItemImpl();
var Popup = new PopupImpl();
mainMenu === null || mainMenu === void 0 ? void 0 : mainMenu.addEventListener("click", function (event) {
    var target = event.target;
    var type = target.dataset.type;
    var name = target.dataset.name;
    Popup.openPopup(name, type);
});
