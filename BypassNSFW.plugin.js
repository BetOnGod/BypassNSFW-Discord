/**
     * @name BypassNSFW
     * @author BetOnGod
     * @description View Discord NSFW-Gated content without meeting the required age requirement.
     * @version 1.0.0
     * @source https://github.com/BetOnGod/BypassNSFW-Discord
     * @updateUrl https://raw.githubusercontent.com/BetOnGod/BypassNSFW-Discord/main/BypassNSFW.plugin.js
*/
    module.exports = class Bypass {

        start() {

            // temp 
            setInterval(async () => {
              await patch()

            }, 5000);


            async function patch() {
                const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
                UserStore.nsfwAllowed = true;

                if (UserStore.nsfwAllowed == false) {
                    UserStore.nsfwAllowed = true;
                }
            }

        }

        stop() {
            const UserStore = BdApi.findModuleByProps('getCurrentUser', 'getUser').getCurrentUser();
            UserStore.nsfwAllowed = false;


        };
}
