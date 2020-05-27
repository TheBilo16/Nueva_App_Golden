//Screen Home
const padding : number = 20;
const height_header_a : number = 60;
const height_header_b : number = 70;
const width_bars : string = "40%";

const height_bars : number = 45;
const height_header : number = height_header_a +height_header_b;

//Screen Travel Routes
const height_main_title = "37%";

//Global
const header_menu_padding : number = 24;
const header_menu_height : number = 55; 
const header_menu_height_total : number = header_menu_padding + header_menu_height;
const height_footer_actions : number = 60;

//Export
const screen_home = {
    width_bars,
    height_bars,
    padding,
    height_header_a,
    height_header_b,
    height_header 
}

const travelRoutes = {
    height_main_title
}

const global = {
    header_menu_padding,
    header_menu_height,
    header_menu_height_total,
    height_footer_actions
}

export {
    screen_home,
    global,
    travelRoutes,
    height_footer_actions
}