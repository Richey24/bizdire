const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
        root.style.setProperty(key, cssVars[key]);
    });
}

function dynamicPrimaryColor(primaryColor) {
    primaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
            const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
            const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
            const cssPropName7 = `--primary-${e.target.getAttribute('data-id7')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName1]: e.target.value + 95,
                [cssPropName2]: e.target.value,
                [cssPropName7]: e.target.value + 20,
            });
        });
    });
}

function dynamicSecondaryColor(secondaryColor) {
    secondaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName11 = `--secondary-${e.target.getAttribute('data-id5')}`;
            const cssPropName12 = `--secondary-${e.target.getAttribute('data-id6')}`;
            const cssPropName13 = `--secondary-${e.target.getAttribute('data-id8')}`;
            handleThemeUpdate({
                [cssPropName11]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName12]: e.target.value + 95,
                [cssPropName13]: e.target.value + 20,
            });
        });
    });
}

function dynamicDarkPrimaryColor(darkprimaryColor) {
    darkprimaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
            const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
            const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
            const cssPropName7 = `--primary-${e.target.getAttribute('data-id7')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName1]: e.target.value + 95,
                [cssPropName2]: e.target.value,
                [cssPropName7]: e.target.value + 20,
            });
        });
    });
}

function dynamicDarkSecondaryColor(darksecondaryColor) {
    darksecondaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName11 = `--secondary-${e.target.getAttribute('data-id5')}`;
            const cssPropName12 = `--secondary-${e.target.getAttribute('data-id6')}`;
            const cssPropName13 = `--secondary-${e.target.getAttribute('data-id8')}`;
            handleThemeUpdate({
                [cssPropName11]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName12]: e.target.value + 95,
                [cssPropName13]: e.target.value + 20,
            });
        });
    });
}

function dynamicTransPrimaryColor(transprimaryColor) {
    transprimaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
            const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
            const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
            const cssPropName7 = `--primary-${e.target.getAttribute('data-id7')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName1]: e.target.value + 95,
                [cssPropName2]: e.target.value,
                [cssPropName7]: e.target.value + 20,
            });
        });
    });
}

function dynamicTransSecondaryColor(transsecondaryColor) {
    transsecondaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName11 = `--secondary-${e.target.getAttribute('data-id5')}`;
            const cssPropName12 = `--secondary-${e.target.getAttribute('data-id6')}`;
            const cssPropName13 = `--secondary-${e.target.getAttribute('data-id8')}`;
            handleThemeUpdate({
                [cssPropName11]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName12]: e.target.value + 95,
                [cssPropName13]: e.target.value + 20,
            });
        });
    });
}

function dynamicTransBackgroundColor(transbackgroundColor) {
    transbackgroundColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName12 = `--transparent-${e.target.getAttribute('data-id9')}`; 
            handleThemeUpdate({
                [cssPropName12]: e.target.value,
            });
        });
    });
}

function dynamicTransBackgroundColor2(transbackgroundColor2) {
    transbackgroundColor2.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName13 = `--transparent-${e.target.getAttribute('data-id10')}`; 
            handleThemeUpdate({
                [cssPropName13]: e.target.value,
            });
        });
    });
}



(function() {
    // Light theme color picker
    // const LightThemeSwitchers = document.querySelectorAll('.light-mode .switch_section span');
    const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');
    const dynamicSecondaryLight = document.querySelectorAll('input.color-secondary-light');
    const dynamicPrimaryDarkColor = document.querySelectorAll('input.color-primary-dark');
    const dynamicSecondaryDark = document.querySelectorAll('input.color-secondary-dark');
    const dynamicPrimaryTransColor = document.querySelectorAll('input.color-primary-Transparent');
    const dynamicSecondaryTrans = document.querySelectorAll('input.color-secondary-Transparent');
    const dynamicBackgroundTrans = document.querySelectorAll('input.bg-primary-Transparent');
    const dynamicBackgroundTrans2 = document.querySelectorAll('input.bg-primary-Transparent2');

    // themeSwitch(LightThemeSwitchers);
    dynamicPrimaryColor(dynamicPrimaryLight);
    dynamicSecondaryColor(dynamicSecondaryLight);
    dynamicDarkPrimaryColor(dynamicPrimaryDarkColor);
    dynamicDarkSecondaryColor(dynamicSecondaryDark);
    dynamicTransPrimaryColor(dynamicPrimaryTransColor);
    dynamicTransSecondaryColor(dynamicSecondaryTrans);
    dynamicTransBackgroundColor(dynamicBackgroundTrans);
    dynamicTransBackgroundColor2(dynamicBackgroundTrans2);

    localStorageBackup();
})();

function localStorageBackup() {
    // if there is a value stored, update color picker and background color
    // Used to retrive the data from local storage
    if (localStorage.bizdireprimaryColor) {
        // document.getElementById('colorID').value = localStorage.bizdireprimaryColor;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.bizdireprimaryColor);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.bizdireprimaryHoverColor);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.bizdireprimaryBorderColor);
        document.querySelector('html').style.setProperty('--primary-bg-transparentcolor', localStorage.bizdireprimaryTransparent);
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.add('light-mode');
        document.querySelector('body').classList.remove('transparent-mode');

        $('#myonoffswitch1').prop('checked', true);


    }
    if (localStorage.bizdiresecondaryColor) {
        // document.getElementById('colorID2').value = localStorage.bizdiresecondaryColor;
        document.querySelector('html').style.setProperty('--secondary-color', localStorage.bizdiresecondaryColor);
        document.querySelector('html').style.setProperty('--secondary-hover', localStorage.bizdiresecondaryHoverColor);
        document.querySelector('html').style.setProperty('--secondary-transparent', localStorage.bizdiresecondaryTransparentColor);
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.add('light-mode');
        document.querySelector('body').classList.remove('transparent-mode');

        $('#myonoffswitch1').prop('checked', true);


    }

    if (localStorage.bizdiredarkPrimary) {
        // document.getElementById('darkPrimaryColorID').value = localStorage.bizdiredarkPrimary;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.bizdiredarkPrimary);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.bizdireprimaryHoverColor);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.bizdireprimaryBorderColor);
        document.querySelector('html').style.setProperty('--primary-bg-transparentcolor', localStorage.bizdireprimaryTransparent);
        document.querySelector('body').classList.add('dark-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.remove('transparent-mode');

        $('#myonoffswitch2').prop('checked', true);

    }
    if (localStorage.bizdiredarksecondary) {
        // document.getElementById('darkColorID2').value = localStorage.bizdiredarksecondary;
        document.querySelector('html').style.setProperty('--secondary-color', localStorage.bizdiredarksecondary);
        document.querySelector('html').style.setProperty('--secondary-hover', localStorage.bizdiresecondaryHoverColor);
        document.querySelector('html').style.setProperty('--secondary-transparent', localStorage.bizdiresecondaryTransparentColor);
        document.querySelector('body').classList.add('dark-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.remove('transparent-mode');

        $('#myonoffswitch2').prop('checked', true);

    }
    if (localStorage.bizdiretransparentPrimary) {
        // document.getElementById('TransparentPrimaryColorID').value = localStorage.bizdiretransparentPrimary;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.bizdiretransparentPrimary);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.bizdireprimaryHoverColor);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.bizdireprimaryBorderColor);
        document.querySelector('html').style.setProperty('--primary-bg-transparentcolor', localStorage.bizdireprimaryTransparent);
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.add('transparent-mode');

        $('#myonoffswitch3').prop('checked', true);

    }
    if (localStorage.bizdiretransparentsecondary) {
        // document.getElementById('TransparentColorID2').value = localStorage.bizdiretransparentsecondary;
        document.querySelector('html').style.setProperty('--secondary-color', localStorage.bizdiretransparentsecondary);
        document.querySelector('html').style.setProperty('--secondary-hover', localStorage.bizdiresecondaryHoverColor);
        document.querySelector('html').style.setProperty('--secondary-transparent', localStorage.bizdiresecondaryTransparentColor);
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.add('transparent-mode');

        $('#myonoffswitch3').prop('checked', true);

    }
    if (localStorage.bizdiretransparentcolor) {
        // document.getElementById('TransparentPrimaryColorID3').value = localStorage.bizdiretransparentcolor;
        document.querySelector('html').style.setProperty('--transparent-color', localStorage.bizdiretransparentcolor);
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.add('transparent-mode');

        $('#myonoffswitch3').prop('checked', true);

    }
    if (localStorage.bizdiretransparentcolor2) {
        // document.getElementById('TransparentColorID4').value = localStorage.bizdiretransparentcolor2;
        document.querySelector('html').style.setProperty('--transparent-color2', localStorage.bizdiretransparentcolor2);
        document.querySelector('body').classList.remove('dark-mode');
        document.querySelector('body').classList.remove('light-mode');
        document.querySelector('body').classList.add('transparent-mode');

        $('#myonoffswitch3').prop('checked', true);

    }
    if(localStorage.bizdirertl){
        document.querySelector('body').classList.add('rtl');
        $('#myonoffswitch24').prop('checked', true);
    }

    if(localStorage.bizdirelightMode){
        document.querySelector('body')?.classList.add('light-mode');
		document.querySelector('body')?.classList.remove('dark-mode');
		document.querySelector('body')?.classList.remove('transparent-mode');
        $('#myonoffswitch1').prop('checked', true);
    }
    if(localStorage.bizdiredarkMode){
        document.querySelector('body')?.classList.remove('light-mode');
		document.querySelector('body')?.classList.add('dark-mode');
		document.querySelector('body')?.classList.remove('transparent-mode');
        $('#myonoffswitch2').prop('checked', true);
    }
    if(localStorage.bizdiretransparentMode){
        document.querySelector('body')?.classList.remove('light-mode');
		document.querySelector('body')?.classList.remove('dark-mode');
		document.querySelector('body')?.classList.add('transparent-mode');
        $('#myonoffswitchTransparent').prop('checked', true);
        $('#myonoffswitch3').prop('checked', true);
    }
}

// triggers on changing the color picker
function changePrimaryColor() {

    var userColor = document.getElementById('colorID').value;
    localStorage.setItem('bizdireprimaryColor', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('bizdireprimaryHoverColor', userColor + 95);
    localStorage.setItem('bizdireprimaryBorderColor', userColor);
    localStorage.setItem('bizdireprimaryTransparent', userColor + 20);

    // removing dark theme properties
    localStorage.removeItem('bizdiredarkPrimary')
    localStorage.removeItem('bizdiredarksecondary')
    localStorage.removeItem('bizdiretransparentPrimary')
    localStorage.removeItem('bizdiretransparentsecondary')
    localStorage.removeItem('bizdiretransparentcolor2')
    document.querySelector('body').classList.add('light-mode');
    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body').classList.remove('transparent-mode');

    $('#myonoffswitch1').prop('checked', true);
    names()

    localStorage.setItem('bizdirelightMode', true);
    localStorage.removeItem('bizdiredarkMode');
    localStorage.removeItem('bizdiretransparentMode');
}
function changeSecondaryColor() {

    var userColor = document.getElementById('colorID2').value;
    localStorage.setItem('bizdiresecondaryColor', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('bizdiresecondaryHoverColor', userColor + 95);
    localStorage.setItem('bizdiresecondaryTransparentColor', userColor + 20);

    // removing dark theme properties
    localStorage.removeItem('bizdiredarkPrimary')
    localStorage.removeItem('bizdiredarksecondary')
    localStorage.removeItem('bizdiretransparentPrimary')
    localStorage.removeItem('bizdiretransparentsecondary')
    localStorage.removeItem('bizdiretransparentcolor2')
    document.querySelector('body').classList.add('light-mode');
    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body').classList.remove('transparent-mode');

    $('#myonoffswitch1').prop('checked', true);
    names()

    localStorage.setItem('bizdirelightMode', true);
    localStorage.removeItem('bizdiredarkMode');
    localStorage.removeItem('bizdiretransparentMode');
}

function darkPrimaryColor() {

    var userColor = document.getElementById('darkPrimaryColorID').value;
    localStorage.setItem('bizdiredarkPrimary', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('bizdireprimaryHoverColor', userColor + 95);
    localStorage.setItem('bizdireprimaryBorderColor', userColor);
    localStorage.setItem('bizdireprimaryTransparent', userColor + 20);

    // removing light theme data 
    localStorage.removeItem('bizdireprimaryColor')
    localStorage.removeItem('bizdiresecondaryColor')
    localStorage.removeItem('bizdiretransparentPrimary')
    localStorage.removeItem('bizdiretransparentsecondary')
    localStorage.removeItem('bizdiretransparentcolor2')

    document.querySelector('body').classList.add('dark-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.remove('transparent-mode');

    $('#myonoffswitch2').prop('checked', true);
    names()

    localStorage.setItem('bizdiredarkMode', true);
    localStorage.removeItem('bizdirelightMode');
    localStorage.removeItem('bizdiretransparentMode');
}

function changeDarkSecondaryColor() {

    var userColor = document.getElementById('darkColorID2').value;
    localStorage.setItem('bizdiredarksecondary', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('bizdiresecondaryHoverColor', userColor + 95);
    localStorage.setItem('bizdiresecondaryTransparentColor', userColor + 20);

    // removing light theme data 
    localStorage.removeItem('bizdireprimaryColor')
    localStorage.removeItem('bizdiresecondaryColor')
    localStorage.removeItem('bizdiretransparentPrimary')
    localStorage.removeItem('bizdiretransparentsecondary')
    localStorage.removeItem('bizdiretransparentcolor2')

    document.querySelector('body').classList.add('dark-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.remove('transparent-mode');

    $('#myonoffswitch2').prop('checked', true);
    names()

    localStorage.setItem('bizdiredarkMode', true);
    localStorage.removeItem('bizdirelightMode');
    localStorage.removeItem('bizdiretransparentMode');
}

function TransparentPrimaryColor() {

    var userColor = document.getElementById('TransparentPrimaryColorID').value;
    localStorage.setItem('bizdiretransparentPrimary', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('bizdireprimaryHoverColor', userColor + 95);
    localStorage.setItem('bizdireprimaryBorderColor', userColor);
    localStorage.setItem('bizdireprimaryTransparent', userColor + 20);

    // removing light theme data 
    localStorage.removeItem('bizdireprimaryColor')
    localStorage.removeItem('bizdiresecondaryColor')
    localStorage.removeItem('bizdiredarkPrimary')
    localStorage.removeItem('bizdiredarksecondary')

    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.add('transparent-mode');

    $('#myonoffswitch3').prop('checked', true);
    names()

    localStorage.setItem('bizdiretransparentMode', true);
    localStorage.removeItem('bizdirelightMode');
    localStorage.removeItem('bizdiredarkMode');
}

function changeTransparentSecondaryColor() {

    var userColor = document.getElementById('TransparentColorID2').value;
    localStorage.setItem('bizdiretransparentsecondary', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('bizdiresecondaryHoverColor', userColor + 95);
    localStorage.setItem('bizdiresecondaryTransparentColor', userColor + 20);

    // removing light theme data 
    localStorage.removeItem('bizdireprimaryColor')
    localStorage.removeItem('bizdiresecondaryColor')
    localStorage.removeItem('bizdiredarkPrimary')
    localStorage.removeItem('bizdiredarksecondary')

    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.add('transparent-mode');

    $('#myonoffswitch3').prop('checked', true);
    names()

    localStorage.setItem('bizdiretransparentMode', true);
    localStorage.removeItem('bizdirelightMode');
    localStorage.removeItem('bizdiredarkMode');
}

function TransparentBackgroundColor() {

    var userColor = document.getElementById('TransparentPrimaryColorID3').value;
    localStorage.setItem('bizdiretransparentcolor', userColor);

    // removing light theme data 
    localStorage.removeItem('bizdireprimaryColor')
    localStorage.removeItem('bizdiresecondaryColor')
    localStorage.removeItem('bizdiredarkPrimary')
    localStorage.removeItem('bizdiredarksecondary')

    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.add('transparent-mode');

    $('#myonoffswitch3').prop('checked', true);
    names()

    localStorage.setItem('bizdiretransparentMode', true);
    localStorage.removeItem('bizdirelightMode');
    localStorage.removeItem('bizdiredarkMode');
}
function TransparentBackgroundColor2() {

    var userColor = document.getElementById('TransparentColorID4').value;
    localStorage.setItem('bizdiretransparentcolor2', userColor);

    // removing light theme data 
    localStorage.removeItem('bizdireprimaryColor')
    localStorage.removeItem('bizdiresecondaryColor')
    localStorage.removeItem('bizdiredarkPrimary')
    localStorage.removeItem('bizdiredarksecondary')

    document.querySelector('body').classList.remove('dark-mode');
    document.querySelector('body').classList.remove('light-mode');
    document.querySelector('body').classList.add('transparent-mode');

    $('#myonoffswitch3').prop('checked', true);
    names()

    localStorage.setItem('bizdiretransparentMode', true);
    localStorage.removeItem('bizdirelightMode');
    localStorage.removeItem('bizdiredarkMode');
}

// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
    // convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
    // get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
        if (typeof a !== "undefined") { return a / 255 }
        if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
            return 1
        }
        return alpha
    }
    // convertion of hex code to rgba code 
function hexToRgba(hexValue, alpha) {
    if (!isValidHex(hexValue)) { return null }
    const chunkSize = Math.floor((hexValue.length - 1) / 3)
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}


let myVarVal, myVarVal1

function names() {

    let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();
    let secondaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();
    
    //get variable
    myVarVal = localStorage.getItem("bizdireprimaryColor") || localStorage.getItem("bizdiredarkPrimary") ||  localStorage.getItem("bizdiretransparentPrimary") ||primaryColorVal;
    myVarVal1 = localStorage.getItem("bizdiresecondaryColor") || localStorage.getItem("bizdiredarksecondary") || localStorage.getItem("bizdiretransparentsecondary") || secondaryColorVal;
    

    // For index.html
	if(document.querySelector('#sales-status') !== null){
        sales();
    }
	if(document.querySelector('#survey') !== null){
        survey();
    }
	if(document.querySelector('#lineChart1') !== null){
        lineChart1();
    }
	if(document.querySelector('#morrisBar18') !== null){
        morrisBar18();
    }
	if(document.querySelector('#placeholder14') !== null){
        placeholder4();
    }
	if(document.querySelector('#purchase') !== null){
        purchase();
    }
	if(document.querySelector('#echart15') !== null){
        echart15();
    }
	if(document.querySelector('#echart11') !== null){
        echart11();
    }
	if(document.querySelector('#lineChart') !== null){
        lineChart();
    }

    let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.86)
    document.querySelector('html').style.setProperty('--primary-09', colorData4);
    
    let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.46)
    document.querySelector('html').style.setProperty('--primary-10', colorData5);
    let colorData8 = hexToRgba(myVarVal || primaryColorVal, 0.1)
    document.querySelector('html').style.setProperty('--primary-1', colorData8);
    let colorData9 = hexToRgba(myVarVal || primaryColorVal, 0.02)
    document.querySelector('html').style.setProperty('--primary-02', colorData9);
    let colorData10 = hexToRgba(myVarVal || primaryColorVal, 0.04)
    document.querySelector('html').style.setProperty('--primary-04', colorData10);

    let colorData6 = hexToRgba(myVarVal1 || secondaryColorVal, 0.86)
    document.querySelector('html').style.setProperty('--secondary-08', colorData6);
    let colorData7 = hexToRgba(myVarVal1 || secondaryColorVal, 0.46)
    document.querySelector('html').style.setProperty('--secondary-04', colorData7);
}
names()
