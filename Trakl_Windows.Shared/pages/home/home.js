(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {

            var settingsAppBarCommand = document.getElementById('settings');
            settingsAppBarCommand.addEventListener('click', this.navigateToSettings, false);

            var aboutAppBarCommand = document.getElementById('about');
            aboutAppBarCommand.addEventListener('click', this.navigateToAbout, false);

            WinJS.Binding.processAll(element, this);
        },
        trafficData: {
            travelMinutes: '44',
            adviceClass: 'should-go homepage fragment'
        },
        navigateToSettings: function () {
            WinJS.Navigation.navigate('/pages/settings/settings.html');
        },
        navigateToAbout: function () {
            WinJS.Navigation.navigate('/pages/about/about.html');
        }
    });

})();
