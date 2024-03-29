(function () {
function $9a98adfe0cef0d67$export$2e2bcd8739ae039() {
    document.querySelectorAll("[data-toggle~=collapse]").forEach(setupCollapse);
    function setupCollapse(collapseToggle) {
        const targetToCollapse = collapseToggle.getAttribute("data-target");
        collapseToggle.setAttribute("aria-haspopup", "true");
        collapseToggle.setAttribute("aria-expanded", "false");
        const collapseContent = targetToCollapse ? document.getElementById(targetToCollapse) : collapseToggle.nextElementSibling;
        collapseContent.setAttribute("aria-hidden", "true");
        collapseToggle.onclick = toggleCollapse;
        function toggleCollapse(e) {
            e.preventDefault();
            e.stopPropagation();
            if (collapseToggle.getAttribute("aria-expanded") === "true") {
                collapseToggle.setAttribute("aria-expanded", "false");
                collapseToggle.setAttribute("aria-hidden", "true");
                collapseToggle.classList.remove("opened");
                return;
            }
            collapseToggle.setAttribute("aria-expanded", "true");
            collapseToggle.setAttribute("aria-hidden", "false");
            collapseToggle.classList.add("opened");
            return;
        }
    }
}


function $9164597c1b6fc20f$export$2e2bcd8739ae039() {
    let currentDropdown = null;
    document.querySelectorAll("[data-toggle~=dropdown]").forEach(setupDropdown);
    function setupDropdown(dropdownToggle) {
        dropdownToggle.setAttribute("aria-haspopup", "true");
        dropdownToggle.setAttribute("aria-expanded", "false");
        const dropdownContent = dropdownToggle.nextElementSibling;
        dropdownContent.setAttribute("aria-hidden", "true");
        dropdownToggle.onclick = toggleDropdown;
        function toggleDropdown(e) {
            e.preventDefault();
            e.stopPropagation();
            if (dropdownToggle.getAttribute("aria-expanded") === "true") {
                dropdownToggle.setAttribute("aria-expanded", "false");
                dropdownContent.setAttribute("aria-hidden", "true");
                dropdownToggle.classList.remove("opened");
                currentDropdown = null;
                return;
            }
            closeCurrent.call(undefined);
            dropdownToggle.setAttribute("aria-expanded", "true");
            dropdownContent.setAttribute("aria-hidden", "false");
            dropdownToggle.classList.add("opened");
            dropdownContent.children[0].focus();
            currentDropdown = dropdownToggle;
            return;
        }
    }
    function closeCurrent() {
        if (currentDropdown) {
            currentDropdown.setAttribute("aria-expanded", "false");
            currentDropdown.setAttribute("aria-hidden", "true");
            currentDropdown.classList.remove("opened");
            currentDropdown = false;
        }
    }
    window.onclick = function(event) {
        const element = event.target;
        if (!element.classList) return;
        if (element.classList.contains("mg-dropdown")) return;
        if (element.classList.contains("mg-dropdown--content")) return;
        closeCurrent.call(undefined);
    };
}


function $e247b296bb249c46$export$2e2bcd8739ae039() {
    // Select all elements with data-toggle attribute containing "modal" and setup modal for each
    document.querySelectorAll("[data-toggle~=modal]").forEach(setupModal);
    // Function to setup modal for an element
    function setupModal(el) {
        // Function to handle modal removal
        function removeModalHandler() {
            modal.classList.remove("mg-show");
        }
        // Select the modal and close button elements
        var modal = document.querySelector("#" + el.getAttribute("data-target"));
        var close = modal.querySelector("[data-action=close]");
        // Add event listener to the element to show modal on click
        el.addEventListener("click", function(ev) {
            modal.classList.add("mg-show");
        });
        // Add event listener to the close button to remove modal on click
        close.addEventListener("click", function(ev) {
            ev.stopPropagation();
            removeModalHandler();
        });
    }
}


function $a125b3e3b415b1f4$export$2e2bcd8739ae039() {
    document.querySelectorAll("[data-toggle~=nav]").forEach(setupNav);
    function setupNav(nav) {
        const items = nav.getElementsByTagName("li");
        for(let j = 0; j < items.length; j++){
            const item = items[j];
            if (item.classList.contains("active") || item.getAttribute("data-active") === "true") {
                item.setAttribute("data-active", "true");
                item.classList.add("active");
            }
        }
        nav.addEventListener("click", function(e) {
            let selector = e.target;
            console.log(e.target.parentNode);
            if (e.target.parentNode.tagName == "LI") selector = e.target.parentNode;
            if (selector.getAttribute("data-active") !== "true") {
                //disable all selected tabs
                let items = nav.getElementsByTagName("li");
                for(let j = 0; j < items.length; j++){
                    const item = items[j];
                    item.classList.remove("active");
                    item.setAttribute("data-active", "false");
                }
                //activate selected tab
                selector.classList.add("active");
                selector.setAttribute("data-active", "true");
            }
        });
    }
}


function $ad5aa727faf09bc6$export$2e2bcd8739ae039() {
    document.querySelectorAll("[data-toggle~=tabs]").forEach(setupTabs);
    function setupTabs(tabs) {
        let items = tabs.getElementsByClassName("mg-tabs--item");
        for(let j = 0; j < items.length; j++){
            const item = items[j];
            if (item.classList.contains("active") || item.getAttribute("data-active") === "true") {
                item.setAttribute("data-active", "true");
                item.classList.add("active");
                const targetToShow = item.getAttribute("data-target");
                if (targetToShow) {
                    const el = document.getElementById(targetToShow);
                    if (el) el.style.display = "block";
                }
            }
        }
        tabs.addEventListener("click", function(e) {
            let selector = e.target;
            if (e.target.parentNode.classList.contains("mg-tabs--item")) {
                selector = e.target.parentNode;
                e.stopPropagation();
                e.preventDefault();
                if (selector.getAttribute("data-active") !== "true") {
                    //disable all selected tabs
                    let items = tabs.getElementsByClassName("mg-tabs--item");
                    for(let j = 0; j < items.length; j++){
                        const item = items[j];
                        item.classList.remove("active");
                        item.setAttribute("data-active", "false");
                        let targetToHide = item.getAttribute("data-target");
                        if (targetToHide) {
                            const el = document.getElementById(targetToHide);
                            if (el) el.style.display = "none";
                        }
                    }
                    //activate selected tab
                    selector.classList.add("active");
                    selector.setAttribute("data-active", "true");
                    let targetToShow = selector.getAttribute("data-target");
                    if (targetToShow) {
                        const el = document.getElementById(targetToShow);
                        if (el) el.style.display = "block";
                    }
                }
            }
        });
    }
}


function $8c41a793dd69529b$export$2e2bcd8739ae039(forceTheme) {
    applyTheme(forceTheme);
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{
        const newTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        console.log("mgplus - theme changed:", newTheme);
    });
    // Select all elements with data-toggle attribute containing "modal" and setup modal for each
    document.querySelectorAll("[data-toggle~=theme]").forEach(setupTheme);
    function applyTheme(customTheme) {
        if (customTheme && customTheme != "auto" && customTheme != "system") {
            document.documentElement.setAttribute("data-theme", customTheme);
            console.log("mgplus - theme applied (forced):", customTheme);
        } else {
            const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : false;
            document.documentElement.setAttribute("data-theme", defaultTheme);
            console.log("mgplus - theme applied (system):", defaultTheme);
        }
    }
    // Function to setup modal for an element
    function setupTheme(el) {
        // Select the modal and close button elements
        const newTheme = el.getAttribute("data-value");
        // Add event listener to the element to show modal on click
        el.addEventListener("click", function() {
            applyTheme(newTheme);
        });
    }
}


(function(window1) {
    function registerThemeSwitcherPlugin(forceTheme) {
        (0, $8c41a793dd69529b$export$2e2bcd8739ae039)(forceTheme);
        console.log("mgplus - registered theme switcher plugin");
    }
    function registerDomPlugins(autorun) {
        (0, $9164597c1b6fc20f$export$2e2bcd8739ae039)();
        (0, $e247b296bb249c46$export$2e2bcd8739ae039)();
        (0, $a125b3e3b415b1f4$export$2e2bcd8739ae039)();
        (0, $ad5aa727faf09bc6$export$2e2bcd8739ae039)();
        (0, $9a98adfe0cef0d67$export$2e2bcd8739ae039)();
        console.log(`mgplus - registered DOM plugins (autorun=${autorun ? "true" : "false"})`);
    }
    // extracts the params from the currently running (external) script
    function getScriptUrl() {
        const scripts = document.getElementsByTagName("script");
        for(let i = 0; i < scripts.length; i++){
            const scriptUrl = scripts[i] && scripts[i].src;
            if (scriptUrl.indexOf("mgplus-dom.js") > 0) return scriptUrl;
        }
        return null;
    }
    // gets the Query Params of a given query string
    function getQueryParam(name, query) {
        name = name.replace(/[[]/, "\\[").replace(/[]]/, "\\]");
        var regexS = "[\\?&]" + name + "=([^&#]*)";
        var regex = new RegExp(regexS);
        var results = regex.exec(query);
        if (results == null) return "";
        else return results[1];
    }
    window1.mgplus = {
        registerDomPlugins: registerDomPlugins,
        registerThemeSwitcherPlugin: registerThemeSwitcherPlugin
    };
    window1.addEventListener("DOMContentLoaded", ()=>{
        const autorun = getQueryParam("autorun", getScriptUrl());
        if (autorun === "true") {
            registerThemeSwitcherPlugin();
            registerDomPlugins(true);
        }
    });
})(window);

})();
