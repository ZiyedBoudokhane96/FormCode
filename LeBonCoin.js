import { Selector, t } from 'testcafe';

fixture`LeBonCoin Ad Posting Test`
    .page`https://www.leboncoin.fr/`;

test('Post Ad on LeBonCoin', async (t) => {
    // Accept cookies if there is a popup
    const acceptCookiesButtonSelector = Selector('#didomi-notice-agree-button');
    if (await acceptCookiesButtonSelector.exists) {
        await t.click(acceptCookiesButtonSelector);
    }

    // Log in
    const loginButtonSelector = Selector('#container > div.relative.flex.bg-transparent.tiny\\:bg-background > div > div:nth-child(1) > header > nav > div.sc-7c064d6-0.ibhWZw > button > span');
    const emailInputSelector = Selector('#email');
    const passwordInputSelector = Selector('#password');
    const confirmLoginButtonSelector = Selector('#login-form > button');

    await t.click(loginButtonSelector);
    await t.typeText(emailInputSelector, 'kuroganehamer@gmail.com');
    await t.typeText(passwordInputSelector, 'Deviljh0*');
    await t.click(confirmLoginButtonSelector);

    // Navigate to the ad posting section
    const depositAdButtonSelector = Selector('#container > div.relative.flex.bg-transparent.tiny\\:bg-background > div > div:nth-child(1) > header > nav > div.sc-7c064d6-0.ibhWZw > div.sc-e58a76c8-0.dQxLBx > div.sc-e58a76c8-1.dsOnjV > div > a');
    await t.click(depositAdButtonSelector);

    // Fill in ad details
    const titleInputSelector = Selector('#subject');
    const continueButtonSelector = Selector('#category-choice > div.styles_contentBox__vpOna > div > div.src__Box-sc-10d053g-0.hUqdBx > form > div > div > button');
    const confirmCategoryButtonSelector = Selector('#radix-\\:r7\\:');
    const descriptionTextAreaSelector = Selector('#body');
    const priceInputSelector = Selector('#price_cents');
    const finalContinueButtonSelector = Selector('#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-\\[calc\\(100vh.\\-\\.\\36 rem\\)\\].pb-\\[7rem\\] > div.fixed.flex.z-sticky.bottom-\\[0\\].left-\\[0\\].right-\\[0\\].shadow.bg-surface.px-xl.py-md.sm\\:z-base.sm\\:relative.sm\\:mt-2xl.sm\\:shadow-none.sm\\:p-none.justify-between > button.u-shadow-border-transition.box-border.inline-flex.items-center.justify-center.gap-md.whitespace-nowrap.px-lg.text-body-1.font-bold.focus-visible\\:outline-none.focus-visible\\:u-ring.\\[\\&\\:not\\(\\:focus-visible\\)\\]\\:ring-inset.min-w-sz-44.h-sz-44.rounded-lg.bg-main.text-on-main.hover\\:bg-main-hovered.enabled\\:active\\:bg-main-pressed.focus-visible\\:bg-main-focused');

    await t.typeText(titleInputSelector, 'RAM Aegis DDR4');
    await t.click(continueButtonSelector);
    await t.click(confirmCategoryButtonSelector);
    await t.typeText(descriptionTextAreaSelector, '16gb de Ram Aegis DDR4. Etat neuf.');
    await t.typeText(priceInputSelector, '20');
    await t.click(finalContinueButtonSelector);

    // Upload image
    const addImagesButtonSelector = Selector('#refDrop');
    await t.click(addImagesButtonSelector);
    await t.wait(1000);
    await t.setFilesToUpload(addImagesButtonSelector, ['D:/Images/6doler.png']);
   
    const addressInputSelector = Selector('#radix-\\:r3d\\:');
    const searchButtonSelector = Selector('#form > div > div.relative.grow.shrink.bg-surface.p-xl.rounded-lg.sm\\:min-h-none.sm\\:pb-xl.min-h-\\[calc\\(100vh.\\-\\.\\36 rem\\)\\].pb-\\[7rem\\] > div.grid.grid-cols-1.gap-xl > div > div > div.absolute.left-lg.right-lg.z-raised.pl-lg.pr-lg.pt-md > div > div > div > div.rounded-r-lg > button');

    await t.typeText(addressInputSelector, 'Brétigny-sur-Orge (91220)');
    await t.click(searchButtonSelector);

    await t.wait(5000);

});



